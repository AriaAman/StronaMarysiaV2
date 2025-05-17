<template>
  <section class="price-section">
    <div class="test">
      <div class="price-category" v-for="(category, index) in categories" :key="index">
        <div class="category-header">
          <div class="category-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <h2 class="category-title">{{ category.title }}</h2>
          <p class="category-description">{{ category.description }}</p>
        </div>

        <div class="price-items">
          <div class="price-item" v-for="(service, sIndex) in category.services" :key="sIndex">
            <div class="service-name">{{ service.name }}</div>
            <div class="service-price">{{ service.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'KONSULTACJE',
    description: 'Indywidualna ocena stanu zdrowia jamy ustnej i plan leczenia.',
    services: [
      { name: 'KONSULTACJA STOMATOLOGICZNA', price: '200 zł' }
    ]
  },
  {
    title: 'DIAGNOSTYKA',
    description: 'Precyzyjne badania i nowoczesne technologie dla trafnej diagnozy.',
    services: [
      { name: 'ZDJĘCIE PUNKTOWE', price: '50 ZŁ' },
      { name: 'ZDJĘCIE PANTOMOGRAFICZNE', price: '100 ZŁ' },
      { name: 'TOMOGRAF (CBCT) CAŁOŚĆ JAMY USTNEJ', price: '400 ZŁ' },
      { name: 'TOMOGRAF (CBCT) ŻUCHWA/SZCZĘKA', price: '200 ZŁ' },
      { name: 'TOMOGRAF (CBCT) PUNKTOWE', price: '150 ZŁ' }
    ]
  },
  {
    title: 'PROFILAKTYKA',
    description: 'Skuteczne zabiegi zapobiegające próchnicy i chorobom dziąseł.',
    services: [
      { name: 'PAKIET HIGIENIZACYJNY (SKALING, PIASKOWANIE, FLUORYZACJA)', price: '350 zł' },
      { name: 'FLUORYZACJA OBU ŁUKÓW ZĘBOWYCH', price: '200 ZŁ' },
      { name: 'PIASKOWANIE ZĘBÓW', price: '200 ZŁ' },
      { name: 'SKALING ULTRADŹWIĘKOWY', price: '200 ZŁ' }
    ]
  },
  {
    title: 'IMPLANTOLOGIA',
    description: 'Nowoczesne implanty dla trwałego i estetycznego uzupełnienia braków zębowych.',
    services: [
      { name: 'WSZCZEPIENIE IMPLANTU', price: '3500 zł' },
      { name: 'ODSŁONIĘCIE IMPLANTU I ZAŁOŻENIE ŚRUBY GOJĄCEJ', price: '300 ZŁ' },
      { name: 'KORONA PORCELANOWA NA IMPLANCIE', price: 'OD 3500 ZŁ' },
      { name: 'PRACE IMPLANTOLOGICZNE ZŁOŻONE WYCENIANE SĄ INDYWIDUALNIE', price: '' },
      { name: 'SZABLON IMPLANTOLOGICZNY', price: '1000 ZŁ' },
      { name: 'PODNIESIENIE DNA ZATOKI SZCZĘKOWEJ (SINUS LIFT)', price: '2500 ZŁ' },
      { name: 'KORONA TYMCZASOWA NA ŁĄCZNIKU TYTANOWYM', price: '800 ZŁ' }
    ]
  },
  {
    title: 'ENDODONCJA (MIKROSKOPOWA)',
    description: 'Precyzyjne leczenie kanałowe z użyciem zaawansowanych technologii.',
    services: [
      { name: 'LECZENIE ENDODONTYCZNE Z WYPEŁNIENIEM 1 KANAŁU*', price: '800 ZŁ' },
      { name: 'LECZENIE ENDODONTYCZNE Z WYPEŁNIENIEM 2 KANAŁÓW*', price: '1100 ZŁ' },
      { name: 'LECZENIE ENDODONTYCZNE Z WYPEŁNIENIEM 3 KANAŁÓW*', price: '1500 ZŁ' },
      { name: 'LECZENIE ENDODONTYCZNE — WYPEŁNIENIE 4 KANAŁÓW*', price: '1800 ZŁ' },
      { name: 'POWTÓRNE LECZENIE KANAŁOWE', price: '+100 ZŁ / 1 KANAŁ' },
      { name: 'ODBUDOWA ZĘBA PO LECZENIU ENDODONTYCZNYM KOMPOZYTEM', price: '350-500 ZŁ' },
      { name: 'ODBUDOWA ZĘBA PO LECZENIU ENDODONTYCZNYM WŁÓKNEM SZKLANYM', price: '500 ZŁ' }
    ]
  },
  {
    title: 'PROTETYKA',
    description: 'Estetyczne i funkcjonalne odbudowy protetyczne dopasowane do Twoich potrzeb.',
    services: [
      { name: 'KORONA PORCELANOWA NA PODBUDOWIE CHROMOWO KOBALTOWEJ (PUNKT SPIEKANY)', price: '2000 zł' },
      { name: 'KORONA PEŁNOCERAMICZNA/CYRKONOWA', price: '2500 ZŁ' },
      { name: 'KORONA TYMCZASOWA', price: 'W CENIE USŁUGI' },
      { name: 'LICÓWKA PORCELANOWA', price: '2500 ZŁ' },
      { name: 'WKŁAD KORONOWO-KORZENIOWY JEDNOCZĘŚCIOWY CHROMO-KOBALT', price: '450 ZŁ' },
      { name: 'WKŁAD KORONOWO-KORZENIOWY ZŁOŻONY CHROMO-KOBALT', price: '600 ZŁ' },
      { name: 'PROTEZA SZKIELETOWA', price: '3500 ZŁ' },
      { name: 'PROTEZA BEZKLAMROWA', price: 'WYCENA INDYWIDUALNA' },
      { name: 'WAX UP (1PUNKT)', price: '150ZŁ' },
      { name: 'PROTEZA AKRYLOWA', price: '2000 ZŁ' },
      { name: 'PROTEZA AKRONOWA', price: '3000 ZŁ' },
      { name: 'DOSTAWIENIE ZĘBA DO PROTEZY', price: '200 ZŁ' },
      { name: 'POWTÓRNE ZACEMENTOWANIE KORONY/MOSTU (1 PUNKT)', price: '400 ZŁ' },
      { name: 'SZYNA RELAKSACYJNA', price: '800 ZŁ' },
      { name: 'SZYNA DLA SPORTOWCÓW', price: '800 ZŁ' }
    ]
  },
  {
    title: 'STOMATOLOGIA ZACHOWAWCZA',
    description: 'Skuteczna odbudowa i leczenie próchnicy dla zdrowych zębów.',
    services: [
      { name: 'ZNIECZULENIE KOMPUTEROWE DENTAPEN', price: 'Bezpłatnie' },
      { name: 'WYPEŁNIENIE ZĘBA (W ZALEŻNOŚCI OD ROZLEGŁOŚCI UBYTKU)', price: '350-450 ZŁ' },
      { name: 'WYPEŁNIENIA TYMCZASOWE', price: '100 ZŁ' },
      { name: 'ODBUDOWA ZĘBA NA WŁÓKNIE SZKLANYM', price: '500 ZŁ' }
    ]
  },
  {
    title: 'CHIRURGIA',
    description: 'Bezpieczne i komfortowe zabiegi chirurgiczne w nowoczesnym wydaniu.',
    services: [
      { name: 'EKSTRAKCJA ZĘBA JEDNOKORZENIOWEGO', price: '300 ZŁ' },
      { name: 'EKSTRAKCJA ZĘBA WIELOKORZENIOWEGO', price: '400 ZŁ' },
      { name: 'EKSTRAKCJA ÓSEMKI', price: '600 ZŁ' },
      { name: 'EKSTRAKCJA ZĘBA MLECZNEGO', price: '200-300 ZŁ' },
      { name: 'EKSTRAKCJA ZĘBA ZATRZYMANEGO', price: '1500 ZŁ' },
      { name: 'PODCIĘCIE CHIRURGICZNE WĘDZIDEŁKA (WARGI, JĘZYKA)', price: '400 ZŁ' }
    ]
  },
  {
    title: 'STOMATOLOGIA DZIECIĘCA',
    description: 'Beztresowe leczenie zębów najmłodszych pacjentów.',
    services: [
      { name: 'WIZYTA KONSULTACYJNA/ADAPTACYJNA Z PRZEGLĄDEM JAMY USTNEJ', price: '200 ZŁ' },
      { name: 'OPATRUNEK W ZĘBIE MLECZNYM', price: '180 ZŁ' },
      { name: 'WYPEŁNIENIE W ZĘBIE MLECZNYM', price: '250-300 ZŁ' },
      { name: 'LAKIEROWANIE ZĘBÓW MLECZNYCH/STAŁYCH (2 ŁUKI)', price: '200 ZŁ' },
      { name: 'EKSTRAKCJA ZĘBA MLECZNEGO', price: '200-250 ZŁ' },
      { name: 'LAKOWANIE ZĘBA', price: '200 ZŁ' },
      { name: 'OTWARCIE ZĘBA Z OPATRUNKIEM', price: '200 ZŁ' }
    ]
  },
  {
    title: 'STOMATOLOGIA LASEROWA',
    description: 'Nowoczesne i bezbolesne zabiegi z wykorzystaniem lasera.',
    services: [
      { name: 'WYDŁUŻENIE KORONY KLINICZNEJ (KOREKTA DZIĄSŁA)', price: '250 ZŁ' },
      { name: 'LECZENIE OPRYSZCZKI, AFT', price: '200 ZŁ' }
    ]
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');

.price-section {
  margin: 0 auto;
  padding: 40px 20px; 
  background-color: #EEEBEA;
}
.test{
  margin: 2rem auto;
  max-width: 1400px;
  border-radius: 1px;
}

.price-category {
  background-color: #ffffff;
  border: 1px solid #E4D5C2;
  margin-bottom: 40px;
  padding: 48px;
  border-radius: 2px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
}

.category-header {
  position: relative;
}

.category-number {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 13px;
  color: #0B162B;
  margin-bottom: 8px;
  letter-spacing: 1.5px;
  line-height: 160%;
  text-transform: uppercase;
}

.category-title {
  font-family: 'Satoshi', 'Satoshi';
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 1px;
  color: #0B162B;
  margin: 0;
  margin-bottom: 8px;
}

.category-description {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  color: #A9722D;
  margin: 0;
}

.price-items {
  width: 628px;
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #D7C0A4;
  border-top: none;
}

.service-name {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1.5px;
  color: #0E1E3A;
  text-transform: uppercase;
}

.service-price {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  color: #B08249;
  text-align: right;
  line-height: 180%;
  font-weight: 400;
}

@media (max-width: 768px) {
  .category-title {
    font-size: 28px;
  }

  .price-item {
    padding: 15px 20px;
  }

  .service-name,
  .service-price {
    font-size: 14px;
  }
}
</style>