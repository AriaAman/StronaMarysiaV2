// Logo served by the public site (apps/site/public/email)
const LOGO_URL = 'https://pietruszczak.pl/email/logo-pietruszczak.png';

// Maximum lengths accepted from the form (characters)
const MAX_LENGTH = { name: 100, email: 254, phone: 30, message: 5000 };

// Escape text for safe HTML insertion (elements/text nodes, not attributes requiring URLs)
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Simple per-IP rate limiter for the contact endpoint
// Adjust limits below to your needs
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // max requests per window per IP
const rateLimitStore = new Map(); // key: ip, value: { windowStart:number, count:number }

function getClientIp(event) {
  try {
    const headers = event.node.req.headers || {};
    const xff = headers['x-vercel-forwarded-for'] || headers['x-forwarded-for'] || headers['x-real-ip'];
    if (typeof xff === 'string' && xff.length > 0) return xff.split(',')[0].trim();
    const socketIp = event.node.req.socket && event.node.req.socket.remoteAddress;
    return socketIp || 'unknown';
  } catch {
    return 'unknown';
  }
}

function checkRateLimit(event) {
  const now = Date.now();
  const ip = getClientIp(event);
  const key = `contact:${ip}`;
  let entry = rateLimitStore.get(key);

  if (!entry || (now - entry.windowStart) > RATE_LIMIT_WINDOW_MS) {
    entry = { windowStart: now, count: 0 };
    rateLimitStore.set(key, entry);
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const resetMs = entry.windowStart + RATE_LIMIT_WINDOW_MS - now;
    const retryAfter = Math.max(1, Math.ceil(resetMs / 1000));
    return { limited: true, retryAfter, remaining: 0, limit: RATE_LIMIT_MAX, resetAt: entry.windowStart + RATE_LIMIT_WINDOW_MS };
  }

  entry.count += 1;
  const remaining = Math.max(0, RATE_LIMIT_MAX - entry.count);
  return { limited: false, retryAfter: 0, remaining, limit: RATE_LIMIT_MAX, resetAt: entry.windowStart + RATE_LIMIT_WINDOW_MS };
}

export default defineEventHandler(async (event) => {
  try {
    // Rate limit before processing
    const rl = checkRateLimit(event);
    if (rl.limited) {
      setHeader(event, 'Retry-After', String(rl.retryAfter));
      setHeader(event, 'X-RateLimit-Limit', String(rl.limit));
      setHeader(event, 'X-RateLimit-Remaining', String(rl.remaining));
      setHeader(event, 'X-RateLimit-Reset', String(rl.resetAt));
      setResponseStatus(event, 429);
      return {
        success: false,
        error: 'Zbyt wiele prób wysłania wiadomości. Spróbuj ponownie później.',
        rateLimit: { limit: rl.limit, remaining: rl.remaining, retryAfter: rl.retryAfter, resetAt: rl.resetAt }
      };
    } else {
      // Informational headers on non-limited responses too
      setHeader(event, 'X-RateLimit-Limit', String(rl.limit));
      setHeader(event, 'X-RateLimit-Remaining', String(rl.remaining));
      setHeader(event, 'X-RateLimit-Reset', String(rl.resetAt));
    }

  // Récupérer les données du formulaire
    const body = (await readBody(event)) || {};
  const { name, email, phone, message, consent, website } = body;

    // Honeypot: the hidden "website" field is only filled by bots. Pretend it worked.
    if (website) {
      return { success: true, message: 'Twoja wiadomość została wysłana pomyślnie!' };
    }

    const tooLong = Object.entries(MAX_LENGTH).some(([key, max]) => String(body[key] ?? '').length > max);
    if (tooLong) {
      setResponseStatus(event, 400);
      return {
        success: false,
        error: 'Wiadomość jest zbyt długa. Skróć ją i spróbuj ponownie.'
      };
    }

  // Every field is plain text: escaped once for the HTML email, never interpreted.
  // Anything that looks like HTML (<b>, <script>, links) shows up as visible text.
  const safeNameRaw = String(name ?? '').trim();
  const safeEmailRaw = String(email ?? '').trim();
  const safePhoneRaw = String(phone ?? '').trim();
  const messageRaw = String(message ?? '').trim();

  const safeNameHtml = escapeHtml(safeNameRaw);
  const safeEmailHtml = escapeHtml(safeEmailRaw);
  const safePhoneHtml = escapeHtml(safePhoneRaw);
  const safeMessageHtml = escapeHtml(messageRaw).replace(/\r?\n/g, '<br>');

  // Prevent header injection in subject/replyTo
  const headerSafeName = safeNameRaw.replace(/[\r\n]/g, ' ').trim();
  const headerSafeEmail = safeEmailRaw.replace(/[\r\n]/g, '').trim();

    // Validation des champs requis
    if (!safeNameRaw || !headerSafeEmail || !messageRaw) {
      return {
        success: false,
        error: 'Wszystkie wymagane pola muszą być wypełnione'
      };
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(headerSafeEmail)) {
      return {
        success: false,
        error: 'Nieprawidłowy adres e-mail'
      };
    }

    // Téléphone facultatif : indicatif « +48 » suivi de 6 à 15 chiffres
    if (safePhoneRaw && !/^\+\d{1,4} \d{6,15}$/.test(safePhoneRaw)) {
      return {
        success: false,
        error: 'Nieprawidłowy numer telefonu'
      };
    }

    // Destinataire et expéditeur : boîte du cabinet et expéditeur vérifié dans Brevo
    const contactTo = process.env.CONTACT_TO;
    const contactFrom = process.env.CONTACT_FROM;
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!contactTo || !contactFrom || !brevoApiKey) {
      console.error('Formulaire de contact : BREVO_API_KEY, CONTACT_TO ou CONTACT_FROM manquant');
      return {
        success: false,
        error: 'Błąd podczas wysyłania wiadomości e-mail'
      };
    }

    // Créer le contenu HTML de l'email (tableaux + styles en ligne : rendu fiable dans Gmail, Outlook, Apple Mail)
    const field = (label, valueHtml) => `
              <tr>
                <td style="padding:0 32px 18px;">
                  <div style="font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#A9722D;">${label}</div>
                  <div style="margin-top:6px;padding:12px 14px;background:#F8F4F0;border-left:3px solid #BC9667;font:15px/1.6 Arial,Helvetica,sans-serif;color:#122548;">${valueHtml}</div>
                </td>
              </tr>`;
    const sentAt = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
    const htmlContent = `<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nowa wiadomość kontaktowa</title>
  </head>
  <body style="margin:0;padding:0;background:#EEEBEA;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEEBEA;">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border-radius:8px;">
            <tr>
              <td align="center" style="padding:32px 32px 20px;">
                <img src="${LOGO_URL}" width="200" alt="Pietruszczak Stomatologia" style="display:block;width:200px;max-width:100%;height:auto;border:0;">
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 24px;border-bottom:1px solid #E4D5C2;">
                <h1 style="margin:0;font:600 20px/1.3 Arial,Helvetica,sans-serif;color:#122548;">Nowa wiadomość z formularza kontaktowego</h1>
                <p style="margin:8px 0 0;font:14px/1.5 Arial,Helvetica,sans-serif;color:#5B6475;">Kliknij „Odpowiedz”, aby odpisać bezpośrednio pacjentowi.</p>
              </td>
            </tr>
            <tr><td style="height:24px;line-height:24px;font-size:0;">&nbsp;</td></tr>
            ${field('Imię i nazwisko', safeNameHtml)}
            ${field('Adres e-mail', `<a href="mailto:${safeEmailHtml}" style="color:#122548;">${safeEmailHtml}</a>`)}
            ${safePhoneRaw ? field('Numer telefonu', `<a href="tel:${safePhoneHtml.replace(/\s/g, '')}" style="color:#122548;">${safePhoneHtml}</a>`) : ''}
            ${field('Wiadomość', safeMessageHtml)}
            ${consent ? field('Zgoda marketingowa', 'Pacjent wyraził zgodę na otrzymywanie treści marketingowych.') : ''}
            <tr>
              <td style="padding:8px 32px 28px;font:12px/1.5 Arial,Helvetica,sans-serif;color:#7F8BA6;">
                Wysłano z formularza na stronie pietruszczak.pl · ${sentAt}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    // Envoyer l'email via l'API transactionnelle de Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'Pietruszczak Stomatologia', email: contactFrom },
        to: [{ email: contactTo }],
        replyTo: { email: headerSafeEmail, name: headerSafeName || headerSafeEmail }, // Permet de répondre directement au client
        subject: `Nowa wiadomość kontaktowa - ${headerSafeName}`,
        htmlContent: htmlContent
      })
    });

    if (!response.ok) {
      console.error('Erreur Brevo:', response.status, await response.text());
      return {
        success: false,
        error: 'Błąd podczas wysyłania wiadomości e-mail'
      };
    }

    return {
      success: true,
      message: 'Twoja wiadomość została wysłana pomyślnie!'
    };

  } catch (error) {
    console.error('Erreur serveur:', error);
    return {
      success: false,
      error: 'Wystąpił błąd podczas wysyłania wiadomości'
    };
  }
});
