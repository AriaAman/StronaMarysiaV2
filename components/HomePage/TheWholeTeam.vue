<!-- TeamIntro.vue -->
<template>
    <div class="team-intro-container" :style="{ backgroundImage: `url('${bgImage}')` }">
      <div class="team-intro-content">
        <!-- Image avec bordure blanche -->
        <div class="team-image-frame">
          <img :src="teamImage" alt="Zespół stomatologiczny" class="team-image" />
        </div>
        
        <!-- Section de texte en largeur complète -->
        <div class="team-text-section">
          <div class="team-text-row">
            <!-- Partie gauche: Titre -->
            <div class="team-heading-container">
              <h2 class="team-heading">
                Jesteśmy zespołem 
                <span class="team-heading-italic">doświadczonych specjalistów!</span>
              </h2>
            </div>
            
            <!-- Partie droite: Description -->
            <div class="team-description-container">
              <p class="team-description">
                Nasz zespół to wykwalifikowani lekarze stomatolodzy, chirurdzy i 
                higieniści, którzy z pasją dbają o zdrowie i estetykę Twojego uśmiechu. 
                Dzięki nowoczesnym metodom leczenia, indywidualnemu podejściu i 
                wieloletniemu doświadczeniu zapewniamy najwyższy standard opieki 
                stomatologicznej. Poznaj naszych specjalistów i przekonaj się, że wizyta 
                u dentysty może być komfortowa i bezstresowa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const bgImage = '/static/HomePage/SectionOnasHomePage.png';
  const teamImage = '/static/HomePage/TheWholeTeamHomepage.png';
  </script>
  
  <style scoped>
  .team-intro-container {
    width: 100%;
    padding: 80px 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .team-intro-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .team-image-frame {
    width: 960px;
    border: 1px solid #E4D5C2;
    padding: 40px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 60px;
    box-sizing: border-box;
  }
  
  .team-image {
    width: 100%;
  }
  
  .team-text-section {
    width: 100%;
  }
  
  .team-text-row {
    display: flex;
    gap: 170px;
  }
  
  .team-heading-container {
    width: 662px;
    flex-shrink: 0;
  }
  
  .team-heading {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 48px;
    font-weight: 400;
    color: #0B162B;
    line-height: 110%;
    text-align: left;
    margin: 0;
  }
  
  .team-heading-italic {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 48px;
    font-weight: 400;
    color: #0B162B;
    line-height: 110%;
    font-style: italic;
    display: block;
  }
  
  .team-description-container {
    flex: 1;
  }
  
  .team-description {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
    color: #A9722D;
    text-align: left;
    margin: 0;
  }
  
  /* Responsive */
  @media (max-width: 1200px) {
    .team-image-frame {
      width: 100%;
      max-width: 960px;
    }
    
    .team-text-row {
      flex-direction: column;
      gap: 30px;
    }
    
    .team-heading-container {
      width: 100%;
      max-width: 662px;
    }
  }
  
  @media (max-width: 1024px) {
    .team-image-frame {
      padding: 20px;
    }
    
    .team-heading {
      font-size: 36px;
    }
    
    .team-description {
      font-size: 16px;
    }
  }
  
  @media (max-width: 768px) {
    .team-intro-container {
      padding: 60px 0;
    }
    
    .team-image-frame {
      padding: 10px;
    }
    
    .team-heading {
      font-size: 32px;
    }
  }
  </style>