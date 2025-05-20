<template>
  <section class="contact-section">
    <div class="contact-content">
      <div class="contact-bg-title">KONTAKT</div>
      <!-- Bloc gauche : Infos cabinet avec image HTML -->
      <div class="contact-info">
        <img src="/static/kontakt/imageKontakt.png" alt="photo cabinet" class="contact-info__image" />
        <div class="contact-info__card">
          <h3 class="contact-info__title">Jesteśmy do Twojej dyspozycji.</h3>
          <p class="contact-info__subtitle">
            Umów się na wizytę lub zapytaj o szczegóły.
          </p>
          <div class="contact-info__details">
            <div>
              <span class="contact-info__label">TELEFON:</span>
              <a href="tel:+48503529023" class="contact-info__link">+48 503 529 023</a>
            </div>
            <div>
              <span class="contact-info__label">ADRES:</span>
              <address class="address">
                JAROTY, UL. STAWIGUDZKA 7/D<br /><br />
                10-687 OLSZTYN
              </address>
              <a href="https://goo.gl/maps/..." target="_blank" class="contact-info__map-link">
                WSKAZÓWKI DOJAZDU (MAPA)
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Bloc droit : Formulaire -->
      <div class="contact-form-wrapper">
        <div class="contact-form">
          <span class="contact-form__meta">SKONTAKTUJ SIĘ Z NAMI</span>
          <h2 class="contact-form__title">Zostańmy w kontakcie</h2>
          <form>
            <div class="contact-form__group">
              <input type="text" required placeholder="Imię i nazwisko*" />
            </div>
            <div class="contact-form__group">
              <input type="email" required placeholder="Adres e-mail*" />
            </div>
            <div class="contact-form__group">
              <input type="tel" placeholder="Numer telefonu (Opcjonalnie)" />
            </div>
            <div class="contact-form__group">
              <textarea rows="4" placeholder="Dzień dobry! Chciałbym umówić wizytę..."></textarea>
            </div>
            <div class="contact-form__consent">
              <input type="checkbox" id="consent" />
              <label for="consent">
                Wyrażam zgodę na przetwarzanie danych osobowych przez "Pietruszczak Stomatologia" w celu przesyłania
                treści marketingowych na mój adres e-mail podany powyżej w formularzu kontaktowym. W przeciwnym razie
                prosimy o kontakt telefoniczny
              </label>
            </div>
            <button type="submit" class="contact-form__submit">WYŚLIJ WIADOMOŚĆ</button>
          </form>
        </div>

        <div class="contact-socials">
      <a href="#" class="contact-social">
        <span class="contact-social__icon">
          <!-- Icône Instagram SVG -->
          <svg width="16" height="16" fill="#BC9667" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </span>
        <span class="contact-social__text">INSTAGRAM</span>
        <span class="contact-social__arrow">
          <!-- Flèche droite SVG -->
          <svg width="16" height="16" fill="#BC9667" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </span>
      </a>
      <a href="#" class="contact-social">
        <span class="contact-social__icon">
          <!-- Icône Facebook SVG -->
          <svg width="16" height="16" fill="#BC9667" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </span>
        <span class="contact-social__text">FACEBOOK</span>
        <span class="contact-social__arrow">
          <svg width="16" height="16" fill="#BC9667" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </span>
      </a>
    </div>
      </div>
    </div>
    
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-section {
  background: #f4f4f4;
  padding: 40px 0 0 0;
  position: relative;
  min-height: 100vh;
}
.contact-bg-title {
  position: absolute;
  max-width: 1440px;
  font-family: 'Aboreto', 'Aboreto';
  top: 0;
  left: 0;
  display: flex;
  font-size: 260px;
  color: #a9722d;
  opacity: 0.2;
  width: 100%;
  letter-spacing: 0.1em;
  z-index: -1;
}
.contact-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 120px;
}
.contact-info {
  position: relative;
  width: 700px;
  height: 888px;
  display: flex;
  align-items: flex-start;
}
.contact-info__image {
  position: absolute;
  left: -125px;
  width: 523px;
  height: 717px;
  object-fit: cover;
  z-index: 1;
}
.contact-info__card {
  height: 610px;
  width: 453px;
  top: 165px;
  left: 100px;
  position: relative;
  z-index: 2;
  background-color: #BC9667;
  border: 1px solid #D7C0A4;
  opacity: 0.9;
  color: #ffffff;
  font-family: 'Merriweather', 'Merriweather';
  margin: 0;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.contact-info__title {
  font-size: 32px;
  font-style: italic;
  font-family: 'Merriweather', 'Merriweather';
  font-weight: 300;
  line-height: 110%;
  color: #0B162B;
  margin: 0px;
  margin-bottom: 8px;
}
.contact-info__subtitle {
  font-size: 20px;
  color: #ffffff;
  font-family: 'Merriweather', 'Merriweather';
  line-height: 140%;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0px;
  margin-bottom: 0px;
}

.contact-info__label {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 24px;
  font-weight: 400;
  color: #0b162b;
  text-transform: uppercase;
  line-height: 130%;
  letter-spacing: 1px;
  display: block;
  margin-top: 24px;
  margin-bottom: 4px;
}
.contact-info__link {
  color: #fff;
  text-decoration: underline;
  font-size: 20px;
  font-family: 'Aboreto', 'Aboreto';
}
.address {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 18px;
  font-weight: 400;
  margin: 24px 0px;
  line-height: 130%;
  letter-spacing: 0px;
  color: #ffffff;
  font-style: normal;
}
.contact-info__map-link {
  color: #0b162b;
  text-decoration: underline;
  font-family: 'Aboreto' ,'Aboreto';
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 16px;
  display: inline-block;
}
.contact-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-form {
  background: #fff;
  border-radius: 2px;
  padding: 48px 40px 0 40px;
  border: 1px solid #E4D5C2;
  width: 640px;
  box-shadow: 0 2px 16px #0001;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
}
.contact-form__meta {
  font-family: 'Aboreto', 'Aboreto';
  color: #a9722d;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.contact-form__title {
  font-family: 'Satoshi Variable', 'Satoshi Variable';
  color: #0b162b;
  font-size: 48px;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 32px;
}
.contact-form__group {
  margin-bottom: 16px;
}
.contact-form__group input,
.contact-form__group textarea {
  resize: none;
  width: 100%;
  padding: 18px 24px;
  border-radius: 1px;
  border: 1px solid #E4D5C2;
  background: #f8f4f0;
  font-size: 18px;
  font-family: 'Satoshi Variable', 'Satoshi Variable';
  color: #0b162b;
  outline: none;
  margin-bottom: 16px;
  box-sizing: border-box;
}
.contact-form__group input::placeholder,
.contact-form__group textarea::placeholder {
  color: #BC9667;
  font-family: 'Satoshi Variable', 'Satoshi Variable';
  font-size: 18px;
  opacity: 1;
}
.contact-form__consent {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #122548;
  margin-bottom: 24px;
}
.contact-form__consent input[type="checkbox"] {
  margin-top: 4px;
  width: 20px;
  height: 20px;
}
.contact-form__consent label {
  font-family: 'Satoshi Variable', 'Satoshi Variable';
  font-weight: 300;
  font-size: 15px;
  line-height: 160%;
  letter-spacing: 0px;
}
.contact-form__submit {
  width: 100%;
  background: #122548;
  color: #ffffff;
  font-family: 'Aboreto', 'Aboreto';
  font-size: 18px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 48px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background 0.2s;
}
.contact-form__submit:hover {
  background: #19366b;
}

.contact-socials {
  width: 640px;
  display: flex;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 120px;
  justify-content: center;
}

.contact-social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border: 1px solid #E4D5C2;
  border-radius: 2px;
  height: 56px;
  min-width: 0;
  flex: 1;
  padding: 0 24px;
  text-decoration: none;
  color: #0B162B;
  font-family: 'Aboreto', serif;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 400;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px #0001;
}
.contact-social__icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
}
.contact-social__text {
  flex: 1;
  text-align: left;
  font-size: 18px;
  letter-spacing: 1.5px;
  color: #0b162b;
  font-family: 'Aboreto', 'Aboreto';
  text-transform: uppercase;
  font-weight: 400;
}
.contact-social__arrow {
  margin-left: 16px;
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
}
.contact-social:hover {
  background: #f3e7d7;
  box-shadow: 0 4px 16px #0002;
}
@media (max-width: 700px) {
  .contact-socials {
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 95vw;
  }
}
@media (max-width: 1100px) {
  .contact-content {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-top: 60px;
  }
  .contact-info,
  .contact-form-wrapper {
    width: 100%;
    max-width: 700px;
  }
  .contact-info__image {
    height: 300px;
    border-radius: 10px 10px 0 0;
    left: 0;
    top: 0;
  }
  .contact-info__card {
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    left: 0;
    top: 0;
  }
}
</style>
