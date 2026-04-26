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
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>

  <script setup>


  const activeItem = ref(0);

  const fallbackFaqItems = [
    {
      question: 'Jak często powinienem odwiedzać dentystę?',
      answer: 'Regularne wizyty u stomatologa to podstawa zdrowego uśmiechu. W naszym gabinecie zalecamy kontrolę co 6 miesięcy, aby w porę wykrywać i zapobiegać problemom. Podczas wizyty wykonujemy profesjonalne badanie jamy ustnej i doradzamy najlepsze metody pielęgnacji zębów. <a href="/kontakt">Zapisz się już teraz.</a>'
    },
    {
      question: 'Czy leczenie zębów w Waszym gabinecie jest bolesne?',
      answer: 'Absolutnie nie! Korzystamy z nowoczesnych, skutecznych znieczuleń, dzięki czemu zabiegi są całkowicie komfortowe. Jeśli odczuwasz lęk przed wizytą, poinformuj nas o tym - zadbamy o Twój spokój i wygodę. Nie jesteś przekonany? <a href="/kontakt">Zadzwoń do nas</a>, rozwiejemy Twoje wątpliwości.'
    },
    {
      question: 'Kiedy należy zgłosić się na leczenie kanałowe?',
      answer: 'Jeśli odczuwasz silny ból, nadwrażliwość na ciepło i zimno lub masz opuchnięte dziąsło - to mogą być objawy infekcji miazgi zęba. W naszym gabinecie stosujemy nowoczesne techniki endodontyczne, w tym leczenie kanałowe pod mikroskopem, co gwarantuje precyzję i skuteczność zabiegu.'
    },
    {
      question: 'Czy w gabinecie oferujecie nowoczesne metody leczenia?',
      answer: 'Tak! Wykorzystujemy nowoczesne technologie, takie jak mikroskop stomatologiczny, laseroterapia, cyfrowe zdjęcia RTG oraz zaawansowane systemy do leczenia kanałowego. Dzięki temu zabiegi są skuteczniejsze, szybsze i bardziej komfortowe dla pacjentów. <a href="/technologie">Poznaj nasze technologie.</a>'
    },
    {
      question: 'Jakie są opcje uzupełnienia brakujących zębów?',
      answer: 'W naszym gabinecie oferujemy kilka rozwiązań: implanty, mosty protetyczne oraz protezy. Implanty to najtrwalsza i najbardziej komfortowa opcja – wyglądają i funkcjonują jak naturalne zęby. Podczas konsultacji pomożemy Ci wybrać najlepsze rozwiązanie dopasowane do Twoich potrzeb. <a href="/uslugi">Przejdź do usług.</a>'
    },
    {
      question: 'Od jakiego wieku dzieci powinny chodzić do dentysty?',
      answer: 'Pierwsza wizyta powinna odbyć się już po pojawieniu się pierwszego ząbka, czyli około 6. miesiąca życia. W naszym gabinecie oferujemy wizyty adaptacyjne, podczas których dziecko w przyjaznej atmosferze oswaja się z dentystą i uczy się dbania o zęby.'
    }
  ];

  const supabase = useSupabase()

  const { data } = await useAsyncData('faq-items', async () => {
    const { data: rows, error } = await supabase
      .from('faq_items')
      .select('id,question,answer,sort_order,is_active')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error || !rows?.length) {
      return fallbackFaqItems
    }

    return rows
  })

  const faqItems = computed(() => data.value || fallbackFaqItems);

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
    background-image: url('/static/kontakt/KontaktFaqFond.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .left-section {
    flex: 1;
    max-width: 696px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
  }

  .right-section {
    flex: 1;
    max-width: 696px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
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

  .faq-item {
    margin-bottom: 16px;
    border-radius: 0;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    font-family: 'Satoshi Variable', 'Satoshi';
    align-items: center;
    padding: 32px;
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
    box-sizing: border-box;
  }

  .faq-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    min-width: 30px;
    border-radius: 50%;
    border: 1px solid #E4D5C2;
    font-weight: bold;
    color: #A9722D;
    margin-left: 16px;
  }

  .faq-answer {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 16px;
    line-height: 180%;
    font-weight: 400;
    padding: 0 32px 32px 32px;
    background-color: #ffffff;
    color: #A9722D;
    box-sizing: border-box;
  }

  .faq-answer p {
    margin: 0;
    word-wrap: break-word;
  }

  .faq-answer a {
    color: #0B162B;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .faq-answer a:hover {
    color: #A9722D;
  }

  .faq-answer.active {
    display: block;
  }

  /* Responsive Styles */
  
  /* Desktop large (1200px+) */
  @media screen and (min-width: 1200px) {
    .section {
      gap: 48px;
      padding: 0 40px;
    }
  }

  /* Tablet large (1024px - 1199px) */
  @media screen and (max-width: 1199px) and (min-width: 1024px) {
    .section {
      gap: 40px;
      margin: 100px auto;
      padding: 0 32px;
    }

    .left-section, .right-section {
      max-width: calc(50% - 20px);
    }

    .faq-main-title, .faq-subtitle {
      font-size: 56px;
    }

    .faq-description {
      font-size: 18px;
    }

    .faq-question {
      font-size: 18px;
      padding: 28px;
    }

    .faq-answer {
      font-size: 15px;
      padding: 0 28px 28px 28px;
    }
  }

  /* Tablet (768px - 1023px) */
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    .section {
      flex-direction: column;
      gap: 32px;
      margin: 80px auto;
      padding: 0 24px;
    }

    .left-section, .right-section {
      max-width: 100%;
      width: 100%;
    }

    .faq-main-title, .faq-subtitle {
      font-size: 48px;
    }

    .faq-description {
      font-size: 17px;
      margin-bottom: 24px;
    }

    .faq-question {
      font-size: 17px;
      padding: 24px;
    }

    .faq-answer {
      font-size: 14px;
      padding: 0 24px 24px 24px;
    }

    .faq-icon {
      width: 28px;
      height: 28px;
      min-width: 28px;
    }

    .page-container::before {
      background-size: cover;
      background-position: center top;
    }
  }

  /* Mobile large (481px - 767px) */
  @media screen and (max-width: 767px) and (min-width: 481px) {
    .section {
      flex-direction: column;
      margin: 60px auto;
      padding: 0 20px;
      gap: 28px;
    }

    .left-section, .right-section {
      max-width: 100%;
      width: 100%;
    }

    .faq-main-title, .faq-subtitle {
      font-size: 40px;
    }

    .faq-description {
      font-size: 16px;
      line-height: 160%;
      margin-bottom: 20px;
    }

    .faq-question {
      font-size: 16px;
      padding: 20px;
      letter-spacing: 0.5px;
    }

    .faq-answer {
      font-size: 14px;
      padding: 0 20px 20px 20px;
      line-height: 170%;
    }

    .faq-icon {
      width: 26px;
      height: 26px;
      min-width: 26px;
      margin-left: 12px;
    }

    .faq-item {
      margin-bottom: 12px;
    }
  }

  /* Mobile medium (376px - 480px) */
  @media screen and (max-width: 480px) and (min-width: 376px) {
    .section {
      flex-direction: column;
      margin: 48px auto;
      padding: 0 16px;
      gap: 24px;
    }

    .left-section, .right-section {
      max-width: 100%;
      width: 100%;
    }

    .faq-meta {
      font-size: 11px;
    }

    .faq-main-title, .faq-subtitle {
      font-size: 32px;
    }

    .faq-description {
      font-size: 15px;
      line-height: 155%;
      margin-bottom: 16px;
    }

    .faq-question {
      font-size: 15px;
      padding: 18px 16px;
      letter-spacing: 0.3px;
      line-height: 135%;
    }

    .faq-answer {
      font-size: 13px;
      padding: 0 16px 18px 16px;
      line-height: 165%;
    }

    .faq-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      margin-left: 10px;
      font-size: 14px;
    }

    .faq-item {
      margin-bottom: 10px;
    }

    .page-container::before {
      background-size: cover;
      background-position: center;
    }
  }

  /* Mobile small (≤375px) */
  @media screen and (max-width: 375px) {
    .section {
      flex-direction: column;
      margin: 40px auto;
      padding: 0 12px;
      gap: 20px;
    }

    .left-section, .right-section {
      max-width: 100%;
      width: 100%;
    }

    .faq-meta {
      font-size: 10px;
      margin-bottom: 8px;
    }

    .faq-main-title, .faq-subtitle {
      font-size: 28px;
      line-height: 115%;
    }

    .faq-description {
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 12px;
    }

    .faq-question {
      font-size: 14px;
      padding: 16px 14px;
      letter-spacing: 0.2px;
      line-height: 130%;
    }

    .faq-answer {
      font-size: 12px;
      padding: 0 14px 16px 14px;
      line-height: 160%;
    }

    .faq-icon {
      width: 22px;
      height: 22px;
      min-width: 22px;
      margin-left: 8px;
      font-size: 13px;
    }

    .faq-item {
      margin-bottom: 8px;
    }
  }
  </style>
