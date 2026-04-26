<!-- TeamIntro.vue -->
<template>
    <div class="team-intro-container">
      <div class="team-background">
        <img
          src="/static/HomePage/SectionOnasHomePage.avif"
          alt="Gabinet stomatologiczny Pietruszczak - Wnętrze kliniki"
          width="1920"
          height="1080"
          loading="eager"
        />
      </div>
      <div class="team-intro-content">
        <!-- Image avec bordure blanche -->
        <div class="team-image-frame">
          <img
            src="/static/HomePage/TheWholeTeamHomepage.avif"
            alt="Zespół stomatologiczny Pietruszczak Olsztyn - Lekarze dentyści i specjaliści"
            class="team-image"
            width="960"
            height="640"
            loading="eager"
          />
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
  </script>

  <style scoped>
  .team-intro-container {
    position: relative;
    width: 100%;
    padding: 80px 0;
  }

  .team-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .team-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    width: min(100%, 1120px);
    border: 1px solid #E4D5C2;
    padding: clamp(14px, 2.5vw, 40px);
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: clamp(36px, 5vw, 60px);
    box-sizing: border-box;
  }

  .team-image {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 2;
    max-height: min(620px, 62vh);
    object-fit: cover;
    object-position: center;
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
    .team-intro-content {
      padding: 0 24px;
    }

    .team-image-frame {
      max-width: 820px;
    }

    .team-image {
      max-height: 52vh;
    }

    .team-heading {
      font-size: 36px;
    }

    .team-description {
      font-size: 16px;
    }
    .team-text-row {
      gap: 24px;
    }
  }

  @media (max-width: 768px) {
    .team-intro-container {
      padding: 48px 0;
    }

    .team-intro-content {
      padding: 0 16px;
    }

    .team-image-frame {
      width: 100%;
    }

    .team-image {
      aspect-ratio: 4 / 3;
      max-height: 420px;
      object-position: 45% center;
    }

    .team-heading {
      font-size: 32px;
    }
    .team-heading-italic {
      font-size: 32px;
      line-height: 120%;
    }
    .team-description {
      font-size: 15px;
      line-height: 165%;
    }
    .team-text-row {
      gap: 16px;
    }
  }

  @media (max-width: 480px) {
    .team-image {
      aspect-ratio: 1 / 1;
      max-height: 360px;
      object-position: 42% center;
    }
  }
  </style>
