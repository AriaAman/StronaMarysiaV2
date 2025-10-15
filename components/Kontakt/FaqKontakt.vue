<!-- FAQ.vue -->
<template>
    <div class="page-container">
        <div class="section">


      <!-- Section gauche avec titre et description -->
      <div class="left-section">
        <div class="faq-title-section">
          <h3 class="faq-meta">FAQ</h3>
          <h1 class="faq-main-title">Najczęściej zadawane <span class="faq-subtitle">pytania</span></h1>
          <p class="faq-description">
            Masz więcej pytań? Skontaktuj się z nami — chętnie rozwiejemy wszelkie wątpliwości i pomożemy Ci zadbać o zdrowy uśmiech!
          </p>
        </div>
      </div>

      <!-- Section droite avec l'accordéon FAQ -->
      <div class="right-section">
        <div class="faq-accordion">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
            <div
              class="faq-question"
              :class="{ 'active': activeItem === index }"
              @click="toggleItem(index)"
            >
              <span>{{ item.question }}</span>
              <div class="faq-icon">
                <span v-if="activeItem === index">−</span>
                <span v-else>+</span>
              </div>
            </div>
            <div
              class="faq-answer"
              :class="{ 'active': activeItem === index }"
              v-show="activeItem === index"
            >
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  // État pour garder trace de l'élément actif
  const activeItem = ref(0);

  // Données FAQ
  const faqItems = ref([
    {
      question: 'Jak często powinienem odwiedzać dentystę?',
      answer: 'Regularne wizyty u stomatologa to podstawa zdrowego uśmiechu. W naszym gabinecie zalecamy kontrolę co 6 miesięcy, aby w porę wykrywać i zapobiegać problemom. Podczas wizyty wykonujemy profesjonalne badanie jamy ustnej i doradzamy najlepsze metody pielęgnacji zębów.'
    },
    {
      question: 'Czy leczenie zębów w Waszym gabinecie jest bolesne?',
      answer: 'Absolutnie nie! Korzystamy z nowoczesnych, skutecznych znieczuleń, dzięki czemu zabiegi są całkowicie komfortowe. Jeśli odczuwasz lęk przed wizytą, poinformuj nas o tym – zadbamy o Twój spokój i wygodę.'
    },
    {
      question: 'Kiedy należy zgłosić się na leczenie kanałowe?',
      answer: 'Jeśli odczuwasz silny ból, nadwrażliwość na ciepło i zimno lub masz opuchnięte dziąsło – to mogą być objawy infekcji miazgi zęba. W naszym gabinecie stosujemy nowoczesne techniki endodontyczne, w tym leczenie kanałowe pod mikroskopem, co gwarantuje precyzję i skuteczność zabiegu.'
    },
    {
      question: 'Czy w gabinecie oferujecie nowoczesne metody leczenia?',
      answer: 'Tak! Wykorzystujemy nowoczesne technologie, takie jak mikroskop stomatologiczny, laseroterapia, cyfrowe zdjęcia RTG oraz zaawansowane systemy do leczenia kanałowego. Dzięki temu zabiegi są skuteczniejsze, szybsze i bardziej komfortowe dla pacjentów.'
    },
    {
      question: 'Jakie są opcje uzupełnienia brakujących zębów?',
      answer: 'W naszym gabinecie oferujemy kilka rozwiązań: implanty, mosty protetyczne oraz protezy. Implanty to najtrwalsza i najbardziej komfortowa opcja – wyglądają i funkcjonują jak naturalne zęby. Podczas konsultacji pomożemy Ci wybrać najlepsze rozwiązanie dopasowane do Twoich potrzeb.'
    },
    {
      question: 'Od jakiego wieku dzieci powinny chodzić do dentysty?',
      answer: 'Pierwsza wizyta powinna odbyć się już po pojawieniu się pierwszego ząbka, czyli około 6. miesiąca życia. W naszym gabinecie oferujemy wizyty adaptacyjne, podczas których dziecko w przyjaznej atmosferze oswaja się z dentystą i uczy się dbania o zęby.'
    }
  ]);

  // Fonction pour basculer l'état de l'élément cliqué
  const toggleItem = (index) => {
    if (activeItem.value === index) {
      // Si on clique sur l'élément déjà actif, on peut le fermer
      // ou laisser ouvert selon les besoins de l'interface
      // activeItem.value = null; // Décommenter cette ligne pour permettre la fermeture
    } else {
      activeItem.value = index;
    }
  };
  </script>

  <style scoped>
  .section{
    display: flex;
    max-width: 1440px;
    margin: 120px auto;
    gap: 48px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .page-container {
    display: flex;
    min-height: 100vh;
    font-family: 'Satoshi Variable', sans-serif;
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }

  .page-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/kontakt/KontaktFaqFond.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .left-section {
    width: 696px;
    height: auto;
    min-height: 776px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .right-section {
    width: 696px;
    height: auto;
    min-height: 776px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .faq-accordion {
    width: 100%;
    height: auto;
  }

  .faq-title-section {
    color: #ffffff;
  }

  .faq-meta {
    font-family: 'Aboreto', 'Aboreto';
    color: #A9722D;
    font-size: 13px;
    margin-bottom: 10px;
    letter-spacing: 1.5px;
    line-height: 160%;
    font-weight: 400;
  }

  .faq-main-title {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 64px;
    font-weight: 300;
    margin: 0px;
    line-height: 110%;
    color: #ffffff;
  }

  .faq-subtitle {
    font-style: italic;
    font-family: 'Merriweather', 'Merriweather';
    font-size: 64px;
    font-weight: 300;
    line-height: 110%;
    color: #ffffff;
  }

  .faq-description {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 20px;
    line-height: 170%;
    font-weight: 300;
  }

  .right-section {
    width: 696px;
    height: 776px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .faq-accordion {
    width: 696px;
    height: 776px;
  }

  .faq-item {
    margin-bottom: 16px;
    border-radius: 0;
    overflow: hidden;
    background-color: #fff;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    font-family: 'Satoshi Variable', 'Satoshi';
    align-items: center;
    padding: 32px 32px 32px 32px;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 140%;
    font-weight: 300;
    color: #0B162B;
    background-color: #fff;
    border-left: none;
    border-right: none;
    transition: all 0.3s ease;
  }

  .faq-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #E4D5C2;
    font-weight: bold;
    color: #A9722D;
  }

  .faq-answer {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 16px;
    line-height: 180%;
    font-weight: 400;
    padding: 0 32px 32px 32px;
    background-color: #ffffff;
    color: #A9722D;
  }

  .faq-answer p {
    margin: 0;
  }

  .faq-answer.active {
    display: block;
  }

  /* Responsive Styles */
  @media screen and (max-width: 1200px) {
    .section {
      gap: 32px;
      margin: 80px auto;
      padding: 0 24px;
    }

    .left-section, .right-section {
      width: calc(50% - 16px);
      min-height: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    .section {
      flex-direction: column;
      gap: 24px;
      margin: 60px auto;
      padding: 0 20px;
    }

    .left-section, .right-section {
      width: 100%;
      min-height: auto;
    }

    .page-container::before {
      background-size: cover;
      background-position: center top;
    }
  }

  @media screen and (max-width: 768px) {
    .section {
      margin: 40px auto;
      padding: 0 16px;
      gap: 20px;
    }

    .faq-accordion {
      width: 100%;
    }

    .faq-item {
      margin-bottom: 16px;
    }

    .faq-question {
      font-size: 16px;
      padding: 16px;
    }

    .faq-answer {
      font-size: 14px;
      padding: 16px;
      line-height: 1.6;
    }
  }

  @media screen and (max-width: 480px) {
    .section {
      margin: 30px auto;
      padding: 0 12px;
      gap: 16px;
    }

    .faq-question {
      font-size: 15px;
      padding: 14px;
    }

    .faq-answer {
      font-size: 13px;
      padding: 14px;
    }

    .page-container::before {
      background-size: cover;
      background-position: center;
    }
  }

  @media screen and (max-width: 320px) {
    .section {
      margin: 20px auto;
      padding: 0 8px;
      gap: 12px;
    }

    .faq-question {
      font-size: 14px;
      padding: 12px;
    }

    .faq-answer {
      font-size: 12px;
      padding: 12px;
      line-height: 1.5;
    }
  }

  /* Tablette (768px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    .section {
      max-width: 100%;
      margin: 80px auto;
      gap: 32px;
      flex-direction: column;
      padding: 0 32px;
    }

    .left-section, .right-section {
      width: 100%;
      height: auto;
      max-width: 700px;
      margin: 0 auto;
    }

    .faq-main-title {
      font-size: 52px;
    }

    .faq-subtitle {
      font-size: 52px;
    }

    .faq-description {
      font-size: 18px;
      margin-bottom: 24px;
    }

    .faq-accordion {
      width: 100%;
      height: auto;
    }

    .faq-question {
      padding: 28px 24px;
      font-size: 18px;
    }

    .faq-answer {
      padding: 0 24px 28px 24px;
      font-size: 15px;
    }
  }

  /* Mobile (jusqu'à 768px) */
  @media (max-width: 768px) {
    .page-container {
      min-height: auto;
    }

    .section {
      margin: 60px auto;
      gap: 24px;
      flex-direction: column;
      padding: 0 16px;
    }

    .left-section, .right-section {
      width: 100%;
      height: auto;
    }

    .faq-meta {
      font-size: 12px;
      margin-bottom: 8px;
    }

    .faq-main-title {
      font-size: 40px;
      line-height: 105%;
    }

    .faq-subtitle {
      font-size: 40px;
      line-height: 105%;
    }

    .faq-description {
      font-size: 16px;
      line-height: 160%;
      margin-bottom: 20px;
    }

    .faq-accordion {
      width: 100%;
      height: auto;
    }

    .faq-item {
      margin-bottom: 12px;
    }

    .faq-question {
      padding: 20px 16px;
      font-size: 16px;
      line-height: 130%;
    }

    .faq-icon {
      width: 26px;
      height: 26px;
      font-size: 14px;
    }

    .faq-answer {
      padding: 0 16px 20px 16px;
      font-size: 14px;
      line-height: 170%;
    }
  }

  /* Très petit mobile (jusqu'à 480px) */
  @media (max-width: 480px) {
    .section {
      margin: 40px auto;
      gap: 20px;
      padding: 0 12px;
    }

    .faq-main-title {
      font-size: 32px;
    }

    .faq-subtitle {
      font-size: 32px;
    }

    .faq-description {
      font-size: 14px;
      line-height: 150%;
    }

    .faq-question {
      padding: 16px 12px;
      font-size: 14px;
    }

    .faq-icon {
      width: 24px;
      height: 24px;
      font-size: 12px;
    }

    .faq-answer {
      padding: 0 12px 16px 12px;
      font-size: 13px;
    }
  }
  </style>