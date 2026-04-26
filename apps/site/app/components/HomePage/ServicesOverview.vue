<!-- ServicesOverview.vue -->
<template>
    <div class="services-container">
      <div class="services-content">
        <!-- En-tête avec titre et bouton -->
        <div class="services-header">
          <div class="title-container">
            <div class="meta-title">KOMPLEKSOWA OPIEKA</div>
            <h2 class="main-title">
              Szeroki wachlarz <span class="italic-text">usług</span>
            </h2>
          </div>
          <NuxtLink class="view-services-button" to="/uslugi">
            <div class="button-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#122548" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
            <span>ZOBACZ USŁUGI</span>
          </NuxtLink>
        </div>

        <!-- Image principale -->
        <div class="main-image-container">
          <img :src="mainImage" alt="Stomatolog Olsztyn - Lekarz dentysta podczas konsultacji z pacjentem" class="main-image" />
        </div>

        <!-- Table de services alignée comme la maquette -->
        <div class="services-list">
          <div v-for="(service, index) in services" :key="index" class="service-row" :class="{ 'is-first': index === 0 }">
            <div class="cell-left">
              <img
                class="icon"
                :src="service.icon"
                :alt="(service.alt || service.title).replace(/<br\s*\/?>/gi, ' ')"
              />
              <h3 class="label" v-html="service.title"></h3>
            </div>
            <div class="cell-right">
              <p class="desc">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const mainImage = '/static/HomePage/HomePageOlekEtDentiste.avif';
  const services = [
    {
      icon: '/static/HomePage/DentHomepage1.svg',
      title: 'IMPLANTOLOGIA <br> DENTYSTYCZNA',
      description: 'Implanty zębowe to najbliższe fizjologii rozwiązanie w odbudowie uzębienia. Dzięki nowoczesnym technologiom są trwałe, bezpieczne i estetyczne, przywracając pełną funkcjonalność oraz naturalny wygląd uśmiechu.'
    },
    {
      icon: '/static/HomePage/DentHomepage2.svg',
      title: 'LECZENIE KANAŁOWE',
      description: 'Endodoncja to skuteczny sposób na uratowanie zębów przed ekstrakcją. Polega na usunięciu zakażonej miazgi, oczyszczeniu i wypełnieniu kanałów, przywracając funkcję, estetykę i eliminując ból.'
    },
    {
      icon: '/static/HomePage/DentHomepage3.svg',
      title: 'PROTETYKA',
      description: 'Poprawiamy estetykę zębów i uśmiechu, zwiększając pewność siebie pacjentów. Oferujemy wybielanie, licówki oraz korektę kształtu i koloru, zapewniając harmonijny uśmiech.'
    },
    {
      icon: '/static/HomePage/DentHomepage4.svg',
      title: 'STOMATOLOGIA <br> ESTETYCZNA',
      description: 'Chronimy naturalne zęby przed uszkodzeniem i utratą, lecząc próchnicę i odbudowując tkanki nowoczesnymi wypełnieniami. Dzięki precyzji i wysokiej jakości materiałom zapewniamy zdrowy i estetyczny uśmiech na lata.'
    },
    {
      icon: '/static/HomePage/DentHomepage5.svg',
      title: 'STOMATOLOGIA <br> ZACHOWAWCZA',
      description: 'Chronimy naturalne zęby przed uszkodzeniem i utratą, lecząc próchnicę i odbudowując tkanki nowoczesnymi wypełnieniami. Dzięki precyzji i wysokiej jakości materiałom zapewniamy zdrowy i estetyczny uśmiech na lata.'
    },
    {
      icon: '/static/HomePage/DentHomepage6.svg',
      title: 'DIAGNOSTYKA',
      description: 'Podstawa skutecznego leczenia - kompleksowa ocena zdrowia jamy ustnej. Badania kliniczne i obrazowe pozwalają precyzyjnie wykryć próchnicę, stany zapalne i wady zgryzu na wczesnym etapie.'
    },
    {
      icon: '/static/HomePage/DentHomepage7.svg',
      title: 'PROFILAKTYKA',
      description: 'Podstawa skutecznego leczenia – kompleksowa ocena jamy ustnej. Badania kliniczne i obrazowe pozwalają wykryć próchnicę, stany zapalne i wady zgryzu na wczesnym etapie.'
    },
    {
      icon: '/static/HomePage/DentHomepage8.svg',
      title: 'CHIRURGIA <br> STOMATOLOGICZNA',
      description: 'Diagnozuje i leczy złożone problemy jamy ustnej, wykonując ekstrakcje, resekcje korzeni oraz przygotowując pacjentów do implantologii i protetyki. Skutecznie leczy stany zapalne i inne schorzenia.'
    }
  ];
  </script>
  
  <style scoped>
  .services-container {
    width: 100%;
    padding: 120px 0 140px;
    background-color: #F5F5F5;
  }

  .services-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px; 
  }

  /* Header */
  .services-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    flex-wrap: wrap; /* Allow CTA to wrap under title on small widths */
    margin-bottom: 24px;
  }
  .meta-title {
    font-family: 'Aboreto', 'Aboreto';
    text-transform: uppercase;
    border-top: #0E1E3A 1px solid;
    padding-top: 8px;
    font-size: 14px;
    width: max-content;
    color: #0E1E3A;
    margin-bottom: 16px;
    letter-spacing: 1.5px;
  }
  .main-title {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 64px;
    font-weight: 300;
    color: #0E1E3A;
    margin: 0;
    line-height: 100%;
  }
  .italic-text {
    font-style: italic;
    font-weight: 500;
  }
  .view-services-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #122548;
    text-decoration-line: none;
    cursor: pointer;
    padding: 0;
    margin-top: 15px; /* space when wrapped */
  }
  .button-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #D7C0A4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
  .view-services-button span {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 18px;
    color: #122548;
    letter-spacing: 1px;
  }

  /* Main image */
  .main-image-container {
    width: 100%;
    height: 518px;
    overflow: hidden;
    margin-bottom: 32px;
    border: 1px solid #E4D5C2; /* subtle frame like mock */
    border-radius: 8px;
    background: #fff;
  }
  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* Rows */
  .services-list {
    display: flex;
    flex-direction: column;
  }

  .service-row {
    display: grid;
    grid-template-columns: 280px 1fr; 
    align-items: start;
    column-gap: 24px;
    padding: 24px 0; 
    border-bottom: 1px solid #E4D5C2;
  }
  .service-row.is-first {
    border-top: 1px solid #E4D5C2;
  }

  .cell-left {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 12px;
    align-items: center;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
  .label {
    margin: 0;
    font-family: 'Aboreto', 'Aboreto';
    font-size: 13px;
    letter-spacing: 1.8px;
    color: #0E1E3A;
    text-transform: uppercase;
    line-height: 140%;
    font-weight: 400;
  }

  .desc {
    margin: 0;
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 16px;
    line-height: 160%;
    color: #122548;
  }

  /* Responsive */
  @media (max-width: 1023px) {
    .main-title {
      font-size: 48px;
      line-height: 110%;
    }
    .service-row {
      grid-template-columns: 1fr;
      row-gap: 10px;
      padding: 20px 0;
    }
    .cell-left {
      grid-template-columns: 24px 1fr;
    }
    .main-image-container {
      height: 460px;
      border-radius: 8px;
    }
  }
  
  @media (max-width: 480px) {
    .main-title {
      font-size: 42px;
      line-height: 110%;
    }
    .label {
      font-size: 12px;
      letter-spacing: 1.5px;
    }
    .desc {
      font-size: 15px;
      line-height: 170%;
    }
    .view-services-button {
      margin-top: 12px; 
    }
    .button-circle { width: 40px; height: 40px; }
    .main-image-container { height: 520px; }
  }
  </style>