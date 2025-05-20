<template>
  <div class="technologies-list">
    <div
      v-for="(tech, idx) in technologies"
      :key="tech.titre"
      class="tech-row"
      :class="{ reverse: idx % 2 === 1 }"
    >
      <!-- Image + titre bas -->
      <div class="tech-img-col">
        <img :src="tech.image" :alt="tech.titre" class="tech-img" />
        <div class="tech-img-caption">
          <span class="tech-img-caption-text">{{ tech.caption }}</span>
          <span class="tech-img-num">{{ tech.num }}</span>
        </div>
      </div>
      <!-- Carte texte -->
      <div class="tech-text-col">
        <div class="tech-card">
          <div class="tech-card-num">{{ tech.num }}</div>
          <h2>{{ tech.titre }}</h2>
          <p class="tech-intro" v-html="tech.intro"></p>
          <ul>
            <li v-for="point in tech.points" :key="point.title">
              <b>{{ point.title }}</b>
              <span v-if="point.desc"> — {{ point.desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    titre: "TOMOGRAF CS 9600",
    image: "/static/technologie/IMPLANT.png",
    caption: "Nowoczesne obrazowanie CBCT",
    num: "01",
    intro: `Tomograf komputerowy Kodak Carestream CS 9600 to najbardziej zaawansowany aparat CBCT w swojej kategorii.`,
    points: [
      {
        title: "Precyzyjna diagnostyka",
        desc: "dokładne odwzorowanie struktur anatomicznych dzięki stożkowej wiązce promieniowania rentgenowskiego."
      },
      {
        title: "Minimalna dawka promieniowania",
        desc: "zaawansowana technologia redukująca ekspozycję przy zachowaniu najwyższej jakości obrazu."
      },
      {
        title: "Szerokie zastosowanie",
        desc: "diagnostyka stomatologiczna, laryngologiczna i chirurgiczna."
      },
      {
        title: "Szybkość i komfort",
        desc: "skrócony czas badania i wygodne pozycjonowanie pacjenta oraz intuicyjna analiza obrazów 3D dla precyzyjnego planowania leczenia."
      }
    ]
  },
  {
    titre: "MIKROSKOP ZUMAX",
    image: "/static/technologie/ZUMAX-OMS2350-technologie.png",
    caption: "Precyzja w leczeniu kanałowym i protetyce",
    num: "02",
    intro: `Niezastąpione narzędzie w nowoczesnej stomatologii, które zapewnia skuteczność i najwyższą jakość leczenia dzięki powiększeniu i wyjątkowej ostrości obrazu.`,
    points: [
      {
        title: "Obraz w jakości HD",
        desc: "doskonała widoczność nawet najdrobniejszych szczegółów anatomicznych, lepsza kontrola nad każdym etapem zabiegu."
      },
      {
        title: "Precyzyjna endodoncja",
        desc: "umożliwia odnalezienie ujść kanałów, usunięcie obliteracji i dokładne opracowanie wnętrza zęba."
      },
      {
        title: "Wsparcie w protetyce",
        desc: "ułatwia precyzyjne przygotowanie zębów pod korony i mosty."
      },
      {
        title: "Wczesne wykrywanie problemów",
        desc: "identyfikacja pęknięć szkliwa, mikrourazów i zmian w przyzębiu niewidocznych gołym okiem."
      }
    ]
  },
  {
    titre: "LASER BIOLASE EPIC X",
    image: "/static/technologie/PROTETYKA.png",
    caption: "Nowoczesne obrazowanie CBCT",
    num: "03",
    intro: `Laser Biolase Epic X to nowoczesne narzędzie dla klinik, które stawiają na innowacyjność, skuteczność i maksymalny komfort pacjenta.`,
    points: [
      {
        title: "Najnowocześniejszy laser diodowy",
        desc: "światowy standard w precyzyjnych zabiegach stomatologicznych."
      },
      {
        title: "Minimalizacja krwawienia i bólu",
        desc: "delikatne cięcie tkanek, szybsze gojenie i mniejszy dyskomfort pozabiegowy."
      },
      {
        title: "Redukcja bakterii",
        desc: "wspomaga leczenie i regenerację, zwiększając skuteczność terapii."
      },
      {
        title: "Szerokie zastosowanie",
        desc: "idealny w implantologii, chirurgii, protetyce i stomatologii estetycznej."
      }
    ]
  },
  {
    titre: "FIZJODYSPENSER IMPLANTMED W&H",
    image: "/static/technologie/6bccd278057407f2a3f67ecbd03fc81dc2c0918d.png",
    caption: "Bezpieczeństwo w implantologii i chirurgii",
    num: "04",
    intro: `Implantmed to niezastąpione narzędzie w nowoczesnej implantologii, które podnosi standardy precyzji i bezpieczeństwa w leczeniu chirurgicznym.`,
    points: [
      {
        title: "Zaawansowane procedury chirurgiczne",
        desc: "idealny do resekcji, usuwania zatrzymanych ósemek i modelowania kości."
      },
      {
        title: "Precyzyjna implantacja",
        desc: "funkcja gwintowania maszynowego zapobiega kompresji kości, zwiększając skuteczność zabiegu."
      },
      {
        title: "Technologia nowej generacji",
        desc: "maksymalna kontrola nad prędkością i momentem obrotowym dla pełnego bezpieczeństwa pacjenta."
      },
      {
        title: "Komfort i efektywność",
        desc: "usprawnia pracę lekarza, skracając czas trwania zabiegów i minimalizując ryzyko powikłań."
      }
    ]
  },
  {
    titre: "MORITA DENTAPORT",
    image: "/static/technologie/STOMATOLOGIA-ZACHOWAWCZA.png",
    caption: "Bezpieczny pomiar długości kanałów",
    num: "05",
    intro: `Morita Dentaport to niezastąpione narzędzie w nowoczesnej endodoncji, które łączy technologiczną precyzję z troską o zdrowie pacjenta.`,
    points: [
      {
        title: "Dokładne oznaczenie długości kanałów",
        desc: "elektroniczny pomiar gwarantuje precyzję bez potrzeby wykonywania zdjęć RTG."
      },
      {
        title: "Bezpromieniowa diagnostyka",
        desc: "urządzenie nie emituje promieniowania rentgenowskiego, co zwiększa bezpieczeństwo pacjenta, brak ekspozycji na promieniowanie i mniejsze ryzyko powikłań."
      },
      {
        title: "Zaawansowana technologia",
        desc: "nowoczesny endometr eliminuje błędy tradycyjnych metod opartych na zdjęciach rentgenowskich."
      },
      {
        title: "Szybszy i dokładniejszy zabieg",
        desc: "optymalne oznaczenie długości roboczej kanału wpływa na skuteczność leczenia endodontycznego."
      }
    ]
  },
  {
    titre: "SMART DENTIN GRINDER",
    image: "/static/technologie/DIAGNOSTYKA.png",
    caption: "Autologiczny biomateriał z zębów pacjenta",
    num: "06",
    intro: `Smart Dentin Grinder to innowacyjne narzędzie w nowoczesnej chirurgii stomatologicznej, które łączy skuteczność, bezpieczeństwo i indywidualne podejście do każdego pacjenta.`,
    points: [
      {
        title: "Naturalna odbudowa kości",
        desc: "wykorzystanie usuniętych zębów do stworzenia własnego materiału kostnego."
      },
      {
        title: "Biokompatybilność 100%",
        desc: "zębina, jako materiał pochodzenia własnego, eliminuje ryzyko odrzutu."
      },
      {
        title: "Szybsze gojenie",
        desc: "znacząco skrócony czas regeneracji kości po zabiegach implantologicznych."
      },
      {
        title: "Wysoka jakość biomateriału",
        desc: "zębina wykazuje właściwości niemal identyczne z naturalną kością."
      }
    ]
  },
  {
    titre: "SPEKTROFOTOMETR SPECTRO SHADE",
    image: "/static/technologie/PROFILAKTYKA.png",
    caption: "Precyzyjna analiza koloru zębów",
    num: "07",
    intro: `SpectroShade to niezbędne narzędzie w nowoczesnej protetyce estetycznej, które zapewnia najwyższą jakość i naturalny wygląd uzupełnień protetycznych.`,
    points: [
      {
        title: "Dokładne dopasowanie koloru",
        desc: "błyskawiczna analiza barwy, przezierności i struktury zęba, pełna analiza w zaledwie kilka minut."
      },
      {
        title: "Zaawansowana technologia",
        desc: "spektrofotometr mierzy ilość pochłoniętego światła w całym paśmie widzialnym."
      },
      {
        title: "Naturalny efekt estetyczny",
        desc: "idealne odwzorowanie koloru gwarantuje perfekcyjny wygląd koron, mostów i protez."
      },
      {
        title: "Zgodność z percepcją ludzkiego oka",
        desc: "jedyny system odwzorowujący kolor tak, jak widzi go człowiek."
      }
    ]
  },
  {
    titre: "SKANER WEWNĄTRZUSTNY CARESTREAM CS 3600",
    image: "/static/technologie/CHIRURGIA-STOMATOLOGICZNA.png",
    caption: "Nowoczesne obrazowanie CBCT",
    num: "08",
    intro: `Pozwala na otrzymanie wirtualnego obrazu jamy ustnej na ekranie komputera w ciągu kilku minut.`,
    points: [
      {
        title: "Cyfrowe wyciski",
        desc: "szybkie i dokładne odwzorowanie jamy ustnej w zaledwie kilka minut."
      },
      {
        title: "Najwyższa precyzja",
        desc: "tysiące drobnych ujęć tworzą szczegółowy, realistyczny obraz anatomiczny."
      },
      {
        title: "Idealne dopasowanie",
        desc: "kluczowe w protetyce, ortodoncji i implantologii."
      },
      {
        title: "Komfort pacjenta",
        desc: "eliminacja tradycyjnych mas wyciskowych i redukcja odruchu wymiotnego."
      }
    ]
  },
  {
    titre: "ZNIECZULENIE DENTAPEN",
    image: "/static/technologie/CHIRURGIA-STOMATOLOGICZNA2.png",
    caption: "Nowoczesne znieczulenie",
    num: "09",
    intro: `Dentapen to szwajcarska precyzja i innowacja, która zmienia doświadczenie pacjenta w gabinecie stomatologicznym.`,
    points: [
      {
        title: "Precyzyjne podanie znieczulenia",
        desc: "kontrolowany przepływ środka znieczulającego eliminuje ból i uczucie rozpierania tkanek."
      },
      {
        title: "Technologia miniprocesora",
        desc: "inteligentne sterowanie gwarantuje dokładność i bezpieczeństwo zabiegu."
      },
      {
        title: "Nowoczesna alternatywa dla klasycznych metod",
        desc: "skuteczne znieczulenie bez dyskomfortu."
      },
      {
        title: "Bezpieczeństwo i komfort pacjenta",
        desc: "idealne rozwiązanie dla dorosłych i dzieci obawiających się igieł."
      }
    ]
  },
  {
    titre: "RADIOWIZJOGRAFIA RVG KODAK 6100",
    image: "/static/technologie/CHIRURGIA-STOMATOLOGICZNA1.png",
    caption: "Nowoczesne obrazowanie CBCT",
    num: "10",
    intro: `RVG Kodak 6100 to nieodzowne narzędzie w nowoczesnej endodoncji, zapewniające precyzję, bezpieczeństwo i komfort zarówno dla lekarza, jak i pacjenta.`,
    points: [
      {
        title: "Dokładna ocena długości kanałów",
        desc: "kluczowa w planowaniu i kontroli leczenia endodontycznego."
      },
      {
        title: "Sprawdzenie jakości wypełnienia",
        desc: "umożliwia natychmiastową weryfikację skuteczności leczenia kanałowego."
      },
      {
        title: "Wysoka jakość obrazu cyfrowego",
        desc: "wyraźne i szczegółowe zdjęcia w czasie rzeczywistym."
      },
      {
        title: "Mniej promieniowania",
        desc: "nowoczesna technologia zmniejsza dawkę w porównaniu do tradycyjnych zdjęć RTG."
      }
    ]
  }
];
</script>

<style scoped>
.technologies-list {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 160px;
  gap: 32px;
  background-color: #122548;
}
.tech-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: flex-start;
  justify-content: center;
}
.tech-row.reverse {
  flex-direction: row-reverse;
}
.tech-img-col {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 704px;
  height: 500px;
}
.tech-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #E4D5C2;
  box-sizing: border-box;
  display: block;
}

.tech-img-caption {
  position: absolute;
  left: 32px;
  bottom: 32px;
  width: 640px;
  height: 55px;
  background: rgba(255,255,255,0.96);
  box-shadow: 0 2px 30px rgba(0,0,0,0.06);
  border: 1px solid #E4D5C2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  box-sizing: border-box;
  z-index: 2;
}

.tech-img-caption-text {
  font-family: 'Satoshi Variable', 'Satoshi';
  color: #0E1E3A;
  font-size: 24px;
  line-height: 130%;
  font-weight: 400;
  letter-spacing: 1px;
}

.tech-img-num {
  font-family: 'Aboreto', 'Aboreto';
  color: #0B162B;
  font-size: 13px;
  line-height: 1.5px;
  font-weight: 400;
}

.tech-text-col {
  display: flex;
  align-items: flex-start;
  width: 704px;
  height: 500px;
}
.tech-card {
  background: #ffffff;
  border-radius: 2px;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  box-shadow: 0 2px 30px rgba(0,0,0,0.06);
  color: #0B162B;
  width: 100%;
  height: 100%;
  border: 1px solid #E4D5C2;
  box-sizing: border-box;
  position: relative;
}
.tech-card h2 {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 24px;
  text-transform: uppercase;
  color: #0B162B;
  letter-spacing: 1px;
  line-height: 130%;
  font-weight: 400;
  margin-top: 0;
}
.tech-intro {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-size: 18px;
  color: #A9722D;
  font-weight: 400;
  line-height: 160%;
}

.tech-card-num {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #F8F4F0;
  border: 1px solid #E4D5C2;
  border-radius: 4px;
  padding: 8px;
  font-family: 'Aboreto', 'Aboreto';
  color: #A9722D;
  font-size: 12px;
  line-height: 120%;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.tech-card ul {
  padding-left: 24px;
  margin: 0;
  list-style: none;
}

.tech-card li {
  position: relative;
  margin-bottom: 0.7rem;
  font-family: 'Satoshi Variable', 'Satoshi';
  font-size: 16px;
  line-height: 1.8;
  color: #0B162B;
}
.tech-card li::before {
  content: '';
  position: absolute;
  left: -1.2em;
  top: 0.9em;
  width: 4px;
  height: 4px;
  background: #BC9667;
  border-radius: 50%;
  display: inline-block;
  transform: translateY(-50%);
}
.tech-card li b {
  font-weight: 700;
  color: #0B162B;
  font-size: 16px;
  line-height: 180%;

}
@media (max-width: 1100px) {
  .tech-row, .tech-row.reverse {
    flex-direction: column !important;
    align-items: center;
    gap: 2rem;
  }
  .tech-img-col, .tech-text-col {
    min-width: 0;
    max-width: 100%;
    width: 100%;
  }
  .tech-img-col {
    width: 100%;
    height: auto;
  }
  .tech-img {
    height: auto;
    min-height: 220px;
  }
  .tech-img-caption {
    height: 48px;
    padding: 0 12px;
  }
  .tech-img-caption span {
    font-size: 18px;
  }
  .tech-img-num {
    font-size: 16px;
    padding: 6px 10px;
    min-width: 24px;
    min-height: 24px;
  }
}
</style>