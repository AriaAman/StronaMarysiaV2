<template>
  <section class="values-section">
    <div class="values-header">
      <h2 class="section-title">
        NASZE PRIORYTETY I WARTOŚCI
      </h2>
      <h3 class="main-title">
        Rzeczy, które są<br />
        <span class="title-italic">dla nas ważne</span>
      </h3>
    </div>

    <div class="values-container">
      <div class="value-card">
        <div class="icon-container">
          <img src="/static/oNas/dental.svg" alt="Troska o pacjenta - Gabinet stomatologiczny Olsztyn" class="value-icon" loading="eager" />
        </div>
        <h4 class="value-title">Troska o każdego pacjenta</h4>
        <p class="value-description">
          Zależy nam na tym, aby każdy czuł się u nas wyjątkowo. Słuchamy potrzeb pacjentów,
          dbamy o ich komfort i staramy się, aby każda wizyta była przyjemna i bezstresowa.
        </p>
      </div>

      <div class="value-card">
        <div class="icon-container">
          <img src="/static/oNas/tooth.svg" alt="Pasja stomatologii - Profesjonalna opieka dentystyczna" class="value-icon" loading="eager" />
        </div>
        <h4 class="value-title">Pasja i zaangażowanie</h4>
        <p class="value-description">
          Stomatologia to nasza pasja. Robimy to, co kochamy, i podchodzimy do każdego
          pacjenta z pełnym zaangażowaniem, by zapewnić mu jak najlepszą opiekę.
        </p>
      </div>

      <div class="value-card">
        <div class="icon-container">
          <img src="/static/oNas/smile.svg" alt="Najwyższy standard opieki stomatologicznej Olsztyn" class="value-icon" loading="eager" />
        </div>
        <h4 class="value-title">Najwyższy standard opieki</h4>
        <p class="value-description">
          Dbamy o to, aby stosować nowoczesne metody leczenia i najlepsze materiały, dzięki
          którym pacjenci czują się bezpiecznie i komfortowo.
        </p>
      </div>

      <div class="value-card">
        <div class="icon-container">
          <img src="/static/oNas/dental-care.svg" alt="Wsparcie pacjentów - Dentysta Olsztyn" class="value-icon" loading="eager" />
        </div>
        <h4 class="value-title">Wsparcie w każdej sytuacji</h4>
        <p class="value-description">
          Jesteśmy zawsze do dyspozycji pacjentów, gotowi pomóc, doradzić i wesprzeć na
          każdym etapie leczenia. Niezależnie od tego, czy to drobna procedura, czy
          poważniejszy zabieg, możesz liczyć na nasze pełne wsparcie.
        </p>
      </div>
    </div>

    <div class="quote-section">
        <div class="quote-content">
          <div class="quote-mark">
          <img src="/static/oNas/acolad.svg" alt="Cytat - Pietruszczak Stomatologia" loading="eager" />
        </div>
        <p class="quote-text">
          Każdy z nas wnosi unikalne umiejętności i specjalizacje, dzięki czemu kompleksowo dbamy o
          zdrowie Twoich zębów — od profilaktyki, przez leczenie zachowawcze i endodoncję, aż po
          zaawansowaną chirurgię i implantologię. Niezależnie od tego, czy potrzebujesz delikatnego
          podejścia podczas wizyty kontrolnej, precyzji w leczeniu kanałowym czy profesjonalnej
          odbudowy uśmiechu, możesz mieć pewność, że trafiłeś w dobre ręce.
        </p>
        <p class="quote-text">
          Z nami wizyta u dentysty przestaje być stresującym doświadczeniem — to krok w stronę
          zdrowego i pięknego uśmiechu, który będziesz dumnie prezentować każdego dnia!
        </p>
        <div class="quote-signature">
          <img src="/static/oNas/Polygon.svg" alt="Ikona - Dr Piotr Pietruszczak stomatolog" loading="eager" />
          <img src="/static/oNas/PiotrLogoSerio.svg" alt="Podpis Dr Piotr Pietruszczak - Stomatolog Olsztyn" class="signature-img" loading="eager" />
        </div>
      </div>
      <div class="doctor-image">
        <img src="/static/oNas/PiotrekSerio.avif" alt="Dr Piotr Pietruszczak - Lekarz stomatolog implantolog Olsztyn" class="doctor-img" loading="eager" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire
</script>

<style scoped>
/* Polices centralisées dans nuxt.config.ts */

.values-section {
  padding: 80px 0;
  background-color: #122548;
}

.values-header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.section-title {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #BC9667;
  margin-bottom: 20px;
  line-height: 160%;
}

.main-title {
  font-family: 'Satoshi', 'Satoshi';
  font-weight: 300;
  font-size: 128px;
  line-height: 100%;
  margin: 0;
  color: #FFFFFF;
}

.title-italic {
  display: block;
  font-family: 'Satoshi', 'Satoshi';
  font-style: italic;
  font-weight: 300;
  font-size: 128px;
  letter-spacing: 0px;
  line-height: 100%;
  color: #FFFFFF;
}

.values-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.value-card {
  background-color: #F9F9F9;
  color: #0B162B;
  padding: 40px;
  box-sizing: border-box;
}

.value-icon {
  width: 48px;
  height: 48px;
  color: #BC9667;
}

.value-title {
  font-family: 'Satoshi', 'Satoshi';
  font-style: italic;
  font-size: 24px;
  line-height: 130%;
  font-weight: 500;
  margin-bottom: 16px;
  margin-top: 12px;
  color: #122548;
}

.value-description {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: #122548;
}

.quote-section {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
  padding: 48px;
  background-color: #FFFFFF;
  color: #122548;
  position: relative;
  box-sizing: border-box;
}

.quote-mark {
  width: auto;
  font-family: 'Merriweather', 'Merriweather';
  font-size: 80px;
  color: #122548;
}

.quote-mark  img {
  height: 70px;
  width: 49px;
}

.quote-content {
  padding-right: 40px;
}

.quote-text {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  margin-top: 0px;
  color: #122548;
  font-weight: 400;
  line-height: 180%;
}

.doctor-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.doctor-img {
  width: 617px;
  height: 430px;
  border-radius: 2px;
}

.quote-signature {
  margin-top: 40px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.signature-img {
  height: 80px;
  width: 446px;
}

.signature-title {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.5px;
  color: #BC9667;
}

/* Tablette (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .values-container,
  .quote-section,
  .values-header {
    max-width: 100%;
    padding: 0 32px;
  }

  .main-title, .title-italic {
    font-size: 96px;
  }

  .values-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .value-card {
    padding: 32px;
  }

  .value-title {
    font-size: 22px;
  }

  .value-description {
    font-size: 15px;
  }

  .quote-section {
    margin: 60px auto 0;
    padding: 40px 32px;
    flex-direction: row;
  }

  .quote-content {
    padding-right: 32px;
  }

  .doctor-img {
    width: 285px;
    height: 206px;
  }

  .signature-img {
    height: 70px;
    width: 380px;
  }
}

/* Mobile (jusqu'à 768px) */
@media (max-width: 768px) {
  .values-section {
    padding: 50px 0;
  }

  .values-header {
    margin-bottom: 50px;
    padding: 0 16px;
  }

  .section-title {
    font-size: 13px;
    margin-bottom: 16px;
  }

  .main-title, .title-italic {
    font-size: 48px;
  }

  .values-container {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 16px;
  }

  .value-card {
    padding: 24px;
  }

  .value-icon {
    width: 40px;
    height: 40px;
  }

  .value-title {
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  .value-description {
    font-size: 14px;
    line-height: 170%;
  }

  .quote-section {
    flex-direction: column;
    margin: 50px auto 0;
    padding: 32px 16px;
  }

  .quote-mark img {
    height: 50px;
    width: 35px;
  }

  .quote-content {
    padding-right: 0;
  }

  .quote-text {
    font-size: 14px;
    line-height: 170%;
  }

  .doctor-image {
    margin-top: 24px;
  }

  .doctor-img {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 617/430;
  }

  .quote-signature {
    margin-top: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .signature-img {
    height: 60px;
    width: auto;
    max-width: 100%;
  }
}

/* Très petit mobile (jusqu'à 480px) */
@media (max-width: 480px) {
  .values-section {
    padding: 40px 0;
  }

  .values-header {
    margin-bottom: 40px;
  }

  .main-title, .title-italic {
    font-size: 36px;
  }

  .value-card {
    padding: 20px;
  }

  .value-title {
    font-size: 18px;
  }

  .value-description {
    font-size: 13px;
  }

  .quote-section {
    margin: 40px auto 0;
    padding: 24px 16px;
  }

  .quote-text {
    font-size: 13px;
  }

  .doctor-img {
    max-width: 350px;
  }

  .signature-img {
    height: 50px;
  }
}
</style>