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
      answer: 'Wykorzystujemy nowoczesne metody znieczulenia, które zapewniają komfort podczas leczenia. Dokładamy wszelkich starań, aby wizyty były jak najmniej stresujące i bezbolesne. Przed zabiegiem dokładnie omawiamy procedurę i dostosowujemy znieczulenie do indywidualnych potrzeb pacjenta.'
    },
    {
      question: 'Kiedy należy zgłosić się na leczenie kanałowe?',
      answer: 'Leczenie kanałowe jest zalecane, gdy infekcja dotarła do miazgi zęba. Objawami wskazującymi na potrzebę takiego leczenia są: silny ból zęba, wrażliwość na ciepło i zimno, ból podczas żucia, obrzęk dziąseł przy chorym zębie, lub ropień. Jeśli zauważysz te objawy, należy jak najszybciej skontaktować się z naszym gabinetem.'
    },
    {
      question: 'Czy w gabinecie oferujecie nowoczesne metody leczenia?',
      answer: 'Tak, nasz gabinet jest wyposażony w najnowocześniejszy sprzęt stomatologiczny i oferujemy szeroki zakres zaawansowanych metod leczenia. Stosujemy innowacyjne techniki diagnostyczne, cyfrową radiografię, nowoczesne materiały wypełnieniowe oraz zabiegi z zakresu stomatologii estetycznej i implantologii zgodne z najnowszymi standardami medycznymi.'
    },
    {
      question: 'Jakie są opcje uzupełnienia brakujących zębów?',
      answer: 'Oferujemy różne opcje uzupełnienia brakujących zębów, w tym implanty dentystyczne, mosty, protezy stałe i ruchome. Implanty są obecnie najnowocześniejszym i najtrwalszym rozwiązaniem, zapewniającym funkcjonalność i estetykę zbliżoną do naturalnych zębów. Podczas konsultacji dobieramy indywidualnie najlepszą metodę, uwzględniając stan zdrowia pacjenta oraz jego oczekiwania.'
    },
    {
      question: 'Od jakiego wieku dzieci powinny chodzić do dentysty?',
      answer: 'Zalecamy, aby pierwsza wizyta dziecka u dentysty odbyła się po wyrznięciu pierwszego zęba mlecznego, nie później niż w 1. roku życia. Wczesne wizyty pozwalają na wykrycie potencjalnych problemów, naukę właściwej higieny jamy ustnej oraz oswojenie dziecka z gabinetem stomatologicznym, co zmniejsza stres podczas przyszłych wizyt.'
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
  }
  .page-container {
    display: flex;
    min-height: 100vh;
    font-family: 'Satoshi Variable', sans-serif;
    position: relative;
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
    height: 776px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
  }
  
  /* Responsive */
  @media (max-width: 1200px) {
    .page-container {
      flex-direction: column;
    }
    
    .left-section, 
    .right-section {
      width: 100%;
      padding: 20px;
    }
    
    .faq-main-title {
      font-size: 42px;
    }
  }
  
  @media (max-width: 768px) {
    .faq-main-title {
      font-size: 32px;
    }
    
    .faq-question, 
    .faq-answer p {
      font-size: 14px;
    }
  }
  </style>