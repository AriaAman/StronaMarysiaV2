<template>
    <div class="specialists-section">
      <div class="specialists-content">
        <h2 class="specialists-title">
          Cennik usług
          <span class="specialists-subtitle">stomatologicznych</span>
        </h2>
        <p class="specialists-description">
          Sprawdź ceny konsultacji, leczenia i zabiegów stomatologicznych w <br> naszym gabinecie w Olsztynie. Transparentne koszty i najwyższa jakość usług.
        </p>
        <a href="#specjalisci" class="specialists-button">
          <span class="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BC9667" class="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
              </svg>
          </span>
          ZAPOZNAJ SIĘ Z CENNIKIEM
        </a>
      </div>
    </div>
  </template>

  <script setup>
  </script>

  <style scoped>
  .specialists-section {
    background-color: #D7C0A4;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .specialists-content {
    max-width: 900px;
    text-align: center;
  }

  .specialists-title {
    font-family: 'Satoshi Variable ', 'Satoshi';
    font-weight: 100;
    font-size: 80px;
    line-height: 100%;
    color: #0B162B;
    margin-bottom: 0;
  }

  .specialists-subtitle {
    display: block;
    font-family: 'Satoshi Variable ', 'Satoshi';
    font-style: italic;
    font-weight: 500;
    font-size: 80px;
    line-height: 100%;
    color: #0B162B;
  }

  .specialists-description {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0px;
    margin: 2rem 0;
    color: #122548;
  }

  .specialists-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: 'Aboreto', 'Aboreto';
    font-weight: 400;
    font-size: 18px;
    color: #0B162B;
    letter-spacing: 1.8px;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  .button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    background-color: white;
    border-radius: 50%;
  }

  /* Tablette (768px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    .specialists-section {
      padding: 3rem 1.5rem;
    }

    .specialists-content {
      max-width: 700px;
    }

    .specialists-title, .specialists-subtitle {
      font-size: 64px;
    }

    .specialists-description {
      font-size: 18px;
      margin: 1.5rem 0;
    }

    .specialists-button {
      font-size: 16px;
    }

    .button-icon {
      width: 42px;
      height: 42px;
    }
  }

  /* Mobile (jusqu'à 768px) */
  @media (max-width: 768px) {
    .specialists-section {
      padding: 2.5rem 1rem;
    }

    .specialists-content {
      max-width: 100%;
    }

    .specialists-title, .specialists-subtitle {
      font-size: 48px;
      line-height: 110%;
    }

    .specialists-description {
      font-size: 16px;
      line-height: 160%;
      margin: 1.5rem 0;
    }

    .specialists-button {
      font-size: 14px;
      gap: 0.75rem;
    }

    .button-icon {
      width: 40px;
      height: 40px;
    }
  }

  /* Très petit mobile (jusqu'à 480px) */
  @media (max-width: 480px) {
    .specialists-section {
      padding: 2rem 0.75rem;
    }

    .specialists-title, .specialists-subtitle {
      font-size: 36px;
    }

    .specialists-description {
      font-size: 14px;
      line-height: 150%;
      margin: 1.25rem 0;
    }

    .specialists-button {
      font-size: 13px;
      gap: 0.5rem;
    }

    .button-icon {
      width: 36px;
      height: 36px;
    }
  }
  </style>