import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les données du formulaire
    const body = await readBody(event);
    const { name, email, phone, message, consent } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return {
        success: false,
        error: 'Wszystkie wymagane pola muszą być wypełnione'
      };
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Adres e-mail</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Numer telefonu</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Wiadomość</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
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
      replyTo: email, // Permet de répondre directement au client
      subject: `Nowa wiadomość kontaktowa - ${name}`,
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
