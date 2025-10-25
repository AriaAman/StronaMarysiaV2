<template>
    <section class="advantages-section">
        <div class="container">
        <div class="advantages-header">
          <p class="subheading">najwyższy standard opieki</p>
          <h2 class="title">
            Nasze atuty
            <span class="title-italic">- spoznaj nas bliżej</span>
          </h2>
          <p class="description">
           Łączymy doświadczenie, nowoczesne technologie i szeroki zakres usług, aby zapewnić Ci kompleksową opiekę na najwyższym poziomie.
          </p>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  // Aucune logique spécifique nécessaire
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');

  .advantages-section {
    width: 100%;
    background-color: #BC9667;
    padding: 100px 0;
    color: #0B162B;
  }


  .advantages-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .subheading {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 14px;
    border-top: #ffffff 1px solid;
    padding-top: 10px;
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    line-height: 120%;
  }

  .title {
    font-family: 'Satoshi', 'Satoshi';
    font-weight: 300;
    font-size: 96px;
    width: max-content;
    line-height: 100%;
    margin: 0px;
    text-align: center;
    color: #122548;
  }

  .title-italic {
    display: block;
    font-family: 'Satoshi', 'Satoshi';
    font-style: italic;
    font-weight: 500;
    font-size: 96px;
    line-height: 110%;
    color: #122548;
  }

  .description {
    font-family: 'Satoshi', 'Satoshi';
    font-size: 20px;
    line-height: 120%;
    font-weight: 400;
    letter-spacing: 1px;
    width: 700px;
    margin: 24px 0 0 0;
    color: white;
  }

  @media (max-width: 992px) {
    .title, .title-italic {
      font-size: 56px;
    }
    .description {
      width: auto;
      padding: 0 20px;
    }
  }

  @media (max-width: 768px) {
    .advantages-section {
      padding: 60px 0;
    }

    .title, .title-italic {
      font-size: 42px;
    }

    .description {
      font-size: 16px;
      width: auto;
      padding: 0 16px;
      text-align: center;
    }
  }
  </style>