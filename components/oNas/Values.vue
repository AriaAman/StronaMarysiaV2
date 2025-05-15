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
          <img src="/public/static/oNas/dental.svg" alt="Troska o każdego pacjenta" class="value-icon" />
        </div>
        <h4 class="value-title">Troska o każdego pacjenta</h4>
        <p class="value-description">
          Zależy nam na tym, aby każdy czuł się u nas wyjątkowo. Słuchamy potrzeb pacjentów, 
          dbamy o ich komfort i staramy się, aby każda wizyta była przyjemna i bezstresowa.
        </p>
      </div>

      <div class="value-card">
        <div class="icon-container">
          <img src="/public/static/oNas/tooth.svg" alt="Pasja i zaangażowanie" class="value-icon" />
        </div>
        <h4 class="value-title">Pasja i zaangażowanie</h4>
        <p class="value-description">
          Stomatologia to nasza pasja. Robimy to, co kochamy, i podchodzimy do każdego 
          pacjenta z pełnym zaangażowaniem, by zapewnić mu jak najlepszą opiekę.
        </p>
      </div>

      <div class="value-card">
        <div class="icon-container">
          <img src="/public/static/oNas/smile.svg" alt="Najwyższy standard opieki" class="value-icon" />
        </div>
        <h4 class="value-title">Najwyższy standard opieki</h4>
        <p class="value-description">
          Dbamy o to, aby stosować nowoczesne metody leczenia i najlepsze materiały, dzięki 
          którym pacjenci czują się bezpiecznie i komfortowo.
        </p>
      </div>

      <div class="value-card">
        <div class="icon-container">
          <img src="/public/static/oNas/dental-care.svg" alt="Wsparcie w każdej sytuacji" class="value-icon" />
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
          <img src="/public/static/oNas/acolad.svg" alt="Wsparcie w każdej sytuacji" />
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
          <img src="/public/static/oNas/Polygon.svg" alt="Dr Pietruszczak" class="" />
          <img src="/public/static/oNas/PiotrLogoSerio.svg" alt="Podpis" class="signature-img" />
        </div>
      </div>
      <div class="doctor-image">
        <img src="/public/static/oNas/PiotrekSerio.jpg" alt="Dr Pietruszczak" class="doctor-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');

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
  font-family: 'Merriweather', 'Merriweather';
  font-style: italic;
  font-weight: 300;
  font-size: 128px;
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
  font-family: 'Merriweather', 'Merriweather';
  font-style: italic;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 16px;
  margin-top: 12px;
  color: #122548;
}

.value-description {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
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

@media (max-width: 1440px) {
  .values-container,
  .quote-section,
  .values-header {
    max-width: 100%;
  }
}

@media (max-width: 1200px) {
  .main-title, .title-italic {
    font-size: 96px;
  }
}

@media (max-width: 992px) {
  .main-title, .title-italic {
    font-size: 72px;
  }
  
  .value-card {
    width: 100%;
  }
  
  .quote-section {
    flex-direction: column;
  }
  
  .quote-content {
    padding: 60px 20px 40px;
  }
  
  .doctor-image {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .main-title, .title-italic {
    font-size: 48px;
  }
  
  .values-section {
    padding: 60px 0;
  }
  
  .values-header {
    margin-bottom: 40px;
  }
}
</style> 