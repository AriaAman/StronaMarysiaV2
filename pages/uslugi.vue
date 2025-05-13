<template>
  <div class="services-page">
    <!-- HERO -->
    <ServicesHero :active="activeCat" @select="scrollToCategory" />

    <!-- GRID DES SERVICES -->
    <section class="services-section">
      <div class="services-container">
        <ServiceCard v-for="(srv, idx) in services" :key="srv.title" :service="srv" :index="idx"
          :id="`service-${srv.category}`" />
      </div>
    </section>
    <ServicesBanner />
    <FirstVisitSection />
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '../components/Uslugi/ServiceCard.vue'
import ServicesHero from '../components/Uslugi/ServicesHero.vue'
import FirstVisitSection from '~/components/FirstVisitSection.vue'
import ServicesBanner from '~/components/Uslugi/ServicesBanner.vue'

const activeCat = ref('')

const scrollToCategory = (category: string) => {
  activeCat.value = category

  nextTick(() => {
    const element = document.getElementById(`service-${category}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

const services = ref([
  {
    title: 'Implantologia dentystyczna',
    caption: 'Implanty',
    image: '/static/uslugi/implanty.jpg',
    category: 'implanty',
    description: `
    <p style="color: #A9722D;">
      To zaawansowana dziedzina stomatologii, zajmująca się odbudową braków w uzębieniu poprzez 
      <strong>  wszczepianie tytanowych implantów </strong>, które zastępują korzenie utraconych zębów. Implanty są 
      biokompatybilne, co oznacza, że integrują się z kością, tworząc stabilną podstawę dla sztucznych 
      zębów, a także zapobiegają zanikowi kości, co często występuje po utracie zęba.
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> Implanty można dostosować do różnych sytuacji klinicznych – 
        <strong> od pojedynczych braków zębowych po pełną rekonstrukcję łuków zębowych.</strong></li>
        <li><span style="color: #A9722D;">•</span> Proces leczenia obejmuje <strong> diagnostykę, zabieg chirurgiczny, 
        gojenie oraz zamocowanie korony, mostu lub protezy.</strong> </li>
        <li><span style="color: #A9722D;">•</span> Dzięki nowym technologiom, takim jak <strong> tomografia CBCT, 
        implanty można precyzyjnie zaplanować </strong> , co zwiększa skuteczność i bezpieczeństwo zabiegu..</li>
      </ul>`
  },
  {
    title: 'Endodoncja — leczenie kanałowe',
    caption: 'Endodoncja',
    image: '/static/uslugi/endodoncja.png',
    category: 'endodoncja',
    description: `
    <p style="color: #A9722D;">
      Dział stomatologii zajmujący się <strong> leczeniem chorób miazgi zęba </strong>, głównie spowodowanych 
      przez bakterie wnikające do miazgi przez ubytki próchnicowe, <strong> powodując stan zapalny. </strong>
      Miazga zęba może także ucierpieć wskutek urazów. Celem leczenia endodontycznego jest 
      eliminacja bakterii z kanałów korzeniowych, ich mechaniczne i chemiczne opracowanie 
      oraz szczelne wypełnienie. 
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> <strong> Mikroskop do leczenia kanałowego </strong> umożliwia dokładne określenie liczby, lokalizacji oraz ewentualnych zwężeń, zarośnięć i perforacji kanałów.</li>
        <li><span style="color: #A9722D;">•</span> <strong> Endometr endodontyczny </strong> precyzyjnie mierzy długość kanałów dzięki różnicom w oporności tkanek.</li>
        <li><span style="color: #A9722D;">•</span> Podczas leczenia wykonuje się <strong> cyfrowe zdjęcia RTG </strong>, a w trudnych przypadkach – <strong> tomografię CBCT. </strong></li>
      </ul>`
  },
  {
    title: 'Protetyka',
    caption: 'Protetyka',
    image: '/static/uslugi/protetyka.png',
    category: 'protetyka',
    description: `
    <p style="color: #A9722D;">
      Dziedzina stomatologii zajmująca się <strong> uzupełnianiem braków zębowych oraz poprawą wyglądu 
      zębów </strong>, mająca na celu przywrócenie pacjentowi funkcji żucia i poprawę jakości życia, 
      zwłaszcza w zakresie estetyki. W naszym gabinecie oferujemy uzupełnienia kombinowane – 
      <strong> połączenie uzupełnień ruchomych ze stałymi </strong>, dostosowane do warunków i oczekiwań pacjenta.
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> Przy planowaniu leczenia szczegółowo omawiamy wszystkie możliwe warianty, 
        uwzględniając stan zdrowia pacjenta, rodzaj braków zębowych oraz szacowany kosztorys.</li>
        <li><span style="color: #A9722D;">•</span> Każda praca protetyczna jest doprecyzowana i starannie dobrana do indywidualnych potrzeb pacjenta.</li>
      </ul>`
  },
  {
    title: 'Stomatologia estetyczna',
    caption: 'Stomatologia estetyczna',
    image: '/static/uslugi/stomatologia-estetyczna.png',
    category: 'estetyczna',
    description: `
    <p style="color: #A9722D;">
      <strong> Stomatologia estetyczna </strong> to dziedzina stomatologii, która skupia się na <strong> poprawie wyglądu zębów, 
      dziąseł i ogólnego uśmiechu pacjenta, łącząc aspekty zdrowotne z estetycznymi. </strong> Jej celem jest 
      osiągnięcie harmonii w uśmiechu poprzez zabiegi, które poprawiają kształt, kolor, ustawienie i 
      proporcje zębów, zapewniając naturalny i atrakcyjny wygląd.
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> W ramach stomatologii estetycznej stosuje się różnorodne techniki, takie jak <strong> wybielanie zębów, 
        licówki porcelanowe, korony pełnoceramiczne, a także konturowanie dziąseł </strong>, które pozwalają na osiągnięcie idealnego uśmiechu. .</li>
        <li><span style="color: #A9722D;">•</span> Zaawansowane technologie, jak <strong> cyfrowe projektowanie uśmiechu (DSD) </strong>, umożliwiają 
        precyzyjne planowanie i realizację zabiegów, które spełniają najwyższe standardy estetyczne</li>
      </ul>`
  },
  {
    title: 'Stomatologia zachowawcza',
    caption: 'Stomatologia zachowawcza',
    image: '/static/uslugi/stomatologia-zachowawcza.png',
    category: 'zachowawcza',
    description: `
    <p style="color: #A9722D;">
      Dziedzina stomatologii koncentrująca się <strong> na zapobieganiu i leczeniu chorób zębów, 
      głównie próchnicy oraz niewielkich uszkodzeń tkanek twardych zębów. </strong> Jej celem jest 
      zachowanie naturalnych zębów pacjenta w jak najlepszym stanie poprzez usuwanie ubytków 
      próchnicowych i odbudowę uszkodzonych zębów za pomocą materiałów kompozytowych, które 
      imitują naturalną strukturę zęba.
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> W ramach stomatologii zachowawczej stosuje się różne techniki, takie jak remineralizacja szkliwa, 
        leczenie endodontyczne (kanałowe) oraz stosowanie nowoczesnych wypełnień, które zapewniają estetyczny wygląd i długotrwałą ochronę zębów.</li>
        <li><span style="color: #A9722D;">•</span> Regularne wizyty kontrolne i profilaktyczne zabiegi, takie jak fluoryzacja czy lakowanie bruzd, są kluczowe w utrzymaniu zdrowych zębów.</li>
      </ul>`
  },
  {
    title: 'Diagnostyka',
    caption: 'Diagnostyka',
    image: '/static/uslugi/diagnostyka.png',
    category: 'diagnostyka',
    description: `
    <p style="color: #A9722D;">
      <strong> Diagnostyka w stomatologii to proces oceny stanu zdrowia jamy ustnej, </strong> który obejmuje wywiad 
      z pacjentem, badanie kliniczne oraz zaawansowane metody obrazowania, takie jak <strong> RTG i tomografia CBCT. </strong>
      Dzięki tym narzędziom możliwe jest <strong> wykrycie próchnicy, chorób dziąseł, zmian w kościach, a 
      także niewidocznych gołym okiem schorzeń, takich jak torbiele czy nowotwory. </strong>
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> 
          Można również stosować specjalistyczne badania, takie jak <strong> testy żywotności miazgi, 
          diagnostykę laserową czy cyfrowe skanowanie 3D, które pomagają precyzyjnie ocenić 
          stan zębów i tkanek przyzębia. </strong>
        </li>
        <li><span style="color: #A9722D;">•</span> 
          Dzięki dokładnej diagnostyce możliwe jest nie tylko zapobieganie poważnym schorzeniom, ale także precyzyjne planowanie leczenia.
        </li>
      </ul>`
  },
  {
    title: 'Profilaktyka',
    caption: 'Profilaktyka',
    image: '/static/uslugi/profilaktyka.png',
    category: 'profilaktyka',
    description: `
    <p style="color: #A9722D;">
      Kluczowa dziedzina stomatologii, która koncentruje się na zapobieganiu chorobom zębów i dziąseł 
      oraz utrzymaniu zdrowia jamy ustnej na najwyższym poziomie. Jej celem jest minimalizowanie ryzyka 
      wystąpienia próchnicy, choroby przyzębia czy ubytki, poprzez regularne wizyty kontrolne, odpowiednią 
      higienę jamy ustnej i stosowanie specjalistycznych zabiegów profilaktycznych.
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> 
          W ramach profilaktyki stomatologicznej stosuje się różnorodne zabiegi, 
          takie jak <strong> profesjonalne czyszczenie zębów, fluoryzacja, lakowanie bruzd u dzieci,
          a także edukacja pacjentów w zakresie właściwej techniki szczotkowania, nitkowania 
          i wyboru odpowiednich produktów do higieny jamy ustnej. </strong> 
         </li>
        <li><span style="color: #A9722D;">•</span> Profilaktyka stomatologiczna <strong> odgrywa kluczową rolę w długotrwałym utrzymaniu zdrowych zębów i dziąseł. </strong> </li>
      </ul>`
  },
  {
    title: 'Chirurgia stomatologiczna',
    caption: 'Chirurgia stomatologiczna',
    image: '/static/uslugi/chirurgia-stomatologiczna.png',
    category: 'chirurgia',
    description: `
    <p style="color: #A9722D;">
    To zaawansowana dziedzina stomatologii, zajmująca się odbudową braków w uzębieniu poprzez 
    <strong> wszczepianie tytanowych implantów, </strong> które zastępują korzenie utraconych zębów. Implanty są 
    biokompatybilne, co oznacza, że <strong> integrują się z kością, </strong> tworząc stabilną podstawę dla sztucznych 
    zębów, a także <strong> zapobiegają zanikowi kości </strong>, co często występuje po utracie zęba.
    </p>
      <ul style="list-style: none;">
        <li><span style="color: #A9722D;">•</span> Implanty można dostosować do różnych sytuacji klinicznych – <strong> od pojedynczych braków zębowych po pełną rekonstrukcję łuków zębowych </strong></li>
        <li><span style="color: #A9722D;">•</span> Proces leczenia obejmuje <strong> diagnostykę, zabieg chirurgiczny, gojenie oraz zamocowanie korony, mostu lub protezy. </strong></li>
        <li><span style="color: #A9722D;">•</span> Dzięki nowym technologiom, takim jak <strong> tomografia CBCT, implanty można precyzyjnie zaplanować, </strong> co zwiększa skuteczność i bezpieczeństwo zabiegu.</li>
      </ul>`
  }
])
</script>

<style scoped>
.services-page {
  background-color: #f7f7f7;
  min-height: 100vh;
}

.services-section {
  padding: 1px 0 120px;
  background-color: #f7f7f7;
}

.services-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1023px) {
  .services-section {
    padding: 48px 0 80px;
  }

  .services-container {
    padding: 0 20px;
  }
}

@media (max-width: 767px) {
  .services-section {
    padding: 32px 0 60px;
  }

  .services-container {
    padding: 0 16px;
  }
}
</style>