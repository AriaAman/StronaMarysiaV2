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
          <button class="view-services-button" @click="navigateToServices">
            <div class="button-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
            <span>ZOBACZ USŁUGI</span>
          </button>
        </div>
  
        <!-- Image principale -->
        <div class="main-image-container">
          <img :src="mainImage" alt="Lekarz z pacjentem" class="main-image" />
        </div>
  
        <!-- Liste des services avec overflow -->
        <div class="services-list-wrapper">
          <div class="services-list">
            <div v-for="(service, index) in services" :key="index" class="service-item">
              <div class="service-icon">
                <img :src="service.icon" :alt="service.title" />
              </div>
              <div class="service-info">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const mainImage = '/static/HomePage/HomePageOlekEtDentiste.png';
  
  // Liste des services
  const services = [
    {
      icon: '/static/HomePage/DentHomepage1.svg',
      title: 'IMPLANTOLOGIA DENTYSTYCZNA',
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
      title: 'STOMATOLOGIA ESTETYCZNA',
      description: 'Chronimy naturalne zęby przed uszkodzeniem i utratą, lecząc próchnicę i odbudowując tkanki nowoczesnymi wypełnieniami. Dzięki precyzji i wysokiej jakości materiałom zapewniamy zdrowy i estetyczny uśmiech na lata.'
    },
    {
      icon: '/static/HomePage/DentHomepage5.svg',
      title: 'STOMATOLOGIA ZACHOWAWCZA',
      description: 'Chronimy naturalne zęby przed uszkodzeniem i utratą, lecząc próchnicę i odbudowując tkanki nowoczesnymi wypełnieniami. Dzięki precyzji i wysokiej jakości materiałom zapewniamy zdrowy i estetyczny uśmiech na lata.'
    },
    {
      icon: '/static/HomePage/DentHomepage6.svg',
      title: 'DIAGNOSTYKA',
      description: 'Podstawa skutecznego leczenia — kompleksowa ocena zdrowia jamy ustnej. Badania kliniczne i obrazowe pozwalają precyzyjnie wykryć próchnicę, stany zapalne i inne problemy.'
    }
  ];
  
  // Fonction de navigation
  const navigateToServices = () => {
    console.log('Navigation vers la page des services');
  };
  </script>
  
  <style scoped>
  .services-container {
    width: 100%;
    padding: 80px 0;
    background-color: #F5F5F5;
  }
  
  .services-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .services-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
  }
  
  .meta-title {
    font-family: 'Aboreto', 'Aboreto';
    text-transform: uppercase;
    font-size: 13px;
    color: #0B162B;
    margin-bottom: 16px;
    letter-spacing: 1.5px;
  }
  
  .main-title {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 80px;
    font-weight: 300;
    color: #0B162B;
    margin: 0;
    line-height: 100%;
  }
  
  .italic-text {
    font-style: italic;
    font-weight: 400;
  }
  
  .view-services-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-top: 15px;
  }
  
  .button-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #A9722D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
  
  .view-services-button span {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 18px;
    color: #0B162B;
    letter-spacing: 1px;
  }
  
  .main-image-container {
    width: 100%;
    height: 518px;
    overflow: hidden;
    margin-bottom: 60px;
  }
  
  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  /* Ajout du conteneur avec overflow */
  .services-list-wrapper {
    border: 1px solid #e0e9f5;
    border-radius: 5px;
    overflow: auto;
    max-height: 600px; /* Ajustez cette valeur selon vos besoins */
  }
  
  .services-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .service-item {
    display: flex;
    gap: 30px;
    padding: 20px 30px;
    border-bottom: 1px solid #E4D5C2;
  }
  
  .service-item:last-child {
    border-bottom: none;
  }
  
  .service-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  
  .service-icon img {
    width: 100%;
    height: auto;
  }
  
  .service-info {
    flex: 1;
  }
  
  .service-title {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 16px;
    color: #A9722D;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    letter-spacing: 1px;
  }
  
  .service-description {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 16px;
    line-height: 1.7;
    color: #0B162B;
    margin: 0;
  }

  /* Responsive */
  @media (min-width: 768px) {
    .services-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  
  @media (max-width: 1023px) {
    .services-header {
      flex-direction: column;
      gap: 20px;
    }
    
    .main-title {
      font-size: 48px;
    }
    
    .view-services-button {
      margin-top: 0;
    }
    
    .main-image-container {
      height: 400px;
    }
  }
  
  @media (max-width: 767px) {
    .main-title {
      font-size: 36px;
    }
    
    .main-image-container {
      height: 300px;
    }
    
    .service-item {
      flex-direction: column;
      gap: 15px;
    }
    
    .service-icon {
      width: 30px;
      height: 30px;
    }
  }
  </style>