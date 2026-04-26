import { Resend } from 'resend';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Simple, explicit DOMPurify initialization on server using JSDOM
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const dompurifySanitize = (dirty, options) => DOMPurify.sanitize(dirty, options);

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
    const body = await readBody(event);
  const { name, email, phone, message, consent } = body;

  // Sanitize inputs (strip all markup); then prepare safe HTML/text
  const safeNameRaw = dompurifySanitize(name || '', { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
  const safeEmailRaw = dompurifySanitize(email || '', { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
  const safePhoneRaw = dompurifySanitize(phone || '', { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
  // For message, allow only <br> after converting newlines
  const messageNoTags = dompurifySanitize(message || '', { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  const messageWithBr = messageNoTags.replace(/\n/g, '<br>');
  const safeMessageHtml = dompurifySanitize(messageWithBr, { ALLOWED_TAGS: ['br'], ALLOWED_ATTR: [] });

  // Escape for HTML interpolation where needed
  const safeNameHtml = escapeHtml(safeNameRaw);
  const safeEmailHtml = escapeHtml(safeEmailRaw);
  const safePhoneHtml = escapeHtml(safePhoneRaw);

  // Prevent header injection in subject/replyTo
  const headerSafeName = safeNameRaw.replace(/[\r\n]/g, ' ').trim();
  const headerSafeEmail = safeEmailRaw.replace(/[\r\n]/g, '').trim();

    // Validation des champs requis
    if (!safeNameRaw || !headerSafeEmail || !messageNoTags) {
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

    // Initialiser Resend avec votre clé API
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Créer le contenu HTML de l'email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #122548;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .content {
              background-color: white;
              padding: 30px;
              margin-top: 20px;
              border-radius: 5px;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #A9722D;
              text-transform: uppercase;
              font-size: 12px;
              letter-spacing: 1px;
            }
            .value {
              margin-top: 5px;
              padding: 10px;
              background-color: #f8f4f0;
              border-left: 3px solid #BC9667;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nowa wiadomość kontaktowa</h1>
              <p>Pietruszczak Stomatologia</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Imię i nazwisko</div>
                <div class="value">${safeNameHtml}</div>
              </div>
              <div class="field">
                <div class="label">Adres e-mail</div>
                <div class="value"><a href="mailto:${safeEmailHtml}">${safeEmailHtml}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Numer telefonu</div>
                <div class="value">${safePhoneHtml}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Wiadomość</div>
                <div class="value">${safeMessageHtml}</div>
              </div>
              ${consent ? `
              <div class="field">
                <div class="label">Zgoda marketingowa</div>
                <div class="value">✓ Klient wyraził zgodę na otrzymywanie treści marketingowych</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Ta wiadomość została wysłana z formularza kontaktowego na stronie internetowej</p>
              <p>Data: ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'Pietruszczak Stomatologia <onboarding@resend.dev>', // À remplacer par votre domaine vérifié
      to: 'ariaaman@outlook.fr', // Email de réception
      replyTo: headerSafeEmail, // Permet de répondre directement au client
      subject: `Nowa wiadomość kontaktowa - ${headerSafeName}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return {
        success: false,
        error: 'Błąd podczas wysyłania wiadomości e-mail'
      };
    }

    return {
      success: true,
      message: 'Twoja wiadomość została wysłana pomyślnie!',
      data
    };

  } catch (error) {
    console.error('Erreur serveur:', error);
    return {
      success: false,
      error: 'Wystąpił błąd podczas wysyłania wiadomości'
    };
  }
});
