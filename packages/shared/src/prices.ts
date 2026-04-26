import type { PriceCategory } from './types'

export const fallbackPriceCategories: PriceCategory[] = [
  {
    title: 'KONSULTACJE',
    description: 'Indywidualna ocena stanu zdrowia jamy ustnej i plan leczenia.',
    sort_order: 1,
    is_active: true,
    services: [
      { name: 'KONSULTACJA/BADANIE STOMATOLOGICZNE', price: '200 zł', sort_order: 1, is_active: true },
      { name: 'KONSULTACJA/BADANIE STOMATOLOGICZNE + PANTOMOGRAM', price: '300 zł', sort_order: 2, is_active: true }
    ]
  },
  {
    title: 'DIAGNOSTYKA',
    description: 'Precyzyjne badania i nowoczesne technologie dla trafnej diagnozy.',
    sort_order: 2,
    is_active: true,
    services: [
      { name: 'ZDJECIE PUNKTOWE', price: '50 ZL', sort_order: 1, is_active: true },
      { name: 'ZDJECIE PANTOMOGRAFICZNE', price: '150 ZL', sort_order: 2, is_active: true },
      { name: 'TOMOGRAF (CBCT) PUNKTOWE', price: '150 ZL', sort_order: 3, is_active: true },
      { name: 'TOMOGRAF (CBCT) ZUCHWA/SZCZEKA', price: '200 ZL', sort_order: 4, is_active: true },
      { name: 'TOMOGRAF (CBCT) CALOSC JAMY USTNEJ', price: '400 ZL', sort_order: 5, is_active: true }
    ]
  },
  {
    title: 'PROFILAKTYKA',
    description: 'Skuteczne zabiegi zapobiegajace prochnicy i chorobom dziasel.',
    sort_order: 3,
    is_active: true,
    services: [
      { name: 'FLUORYZACJA OBU LUKOW ZEBOWYCH', price: '200 ZL', sort_order: 1, is_active: true },
      { name: 'PIASKOWANIE ZEBOW + LAKIEROWANIE', price: '250 ZL', sort_order: 2, is_active: true },
      { name: 'SKALING ULTRADZWIEKOWY + LAKIEROWANIE', price: '250 ZL', sort_order: 3, is_active: true },
      { name: 'PAKIET HIGIENIZACYJNY (SKALING, PIASKOWANIE, FLUORYZACJA)', price: '400 zl', sort_order: 4, is_active: true }
    ]
  },
  {
    title: 'IMPLANTOLOGIA',
    description: 'Nowoczesne implanty dla trwalego i estetycznego uzupelnienia brakow zebowych.',
    sort_order: 4,
    is_active: true,
    services: [
      { name: 'WSZCZEPIENIE IMPLANTU', price: '3500 zl', sort_order: 1, is_active: true },
      { name: 'ODSLONIECIE IMPLANTU I ZALOZENIE SRUBY GOJACEJ', price: '300 ZL', sort_order: 2, is_active: true },
      { name: 'PRACE IMPLANTOLOGICZNE ZLOZONE WYCENIANE SA INDYWIDUALNIE', price: '', sort_order: 3, is_active: true },
      { name: 'KORONA TYMCZASOWA NA LACZNIKU TYTANOWYM', price: '800 ZL', sort_order: 4, is_active: true },
      { name: 'SZABLON IMPLANTOLOGICZNY', price: '1200 ZL', sort_order: 5, is_active: true },
      { name: 'PODNIESIENIE DNA ZATOKI SZCZEKOWEJ (SINUS LIFT)', price: '2500 ZL', sort_order: 6, is_active: true },
      { name: 'KORONA PORCELANOWA NA IMPLANCIE', price: 'OD 3500 ZL', sort_order: 7, is_active: true }
    ]
  },
  {
    title: 'ENDODONCJA (MIKROSKOPOWA)',
    description: 'Precyzyjne leczenie kanalowe z uzyciem zaawansowanych technologii.',
    sort_order: 5,
    is_active: true,
    services: [
      { name: 'ODBUDOWA ZEBA PO LECZENIU ENDODONTYCZNYM KOMPOZYTEM', price: '350-500 ZL', sort_order: 1, is_active: true },
      { name: 'ODBUDOWA ZEBA PO LECZENIU ENDODONTYCZNYM WLOKNEM SZKLANYM', price: '500 ZL', sort_order: 2, is_active: true },
      { name: 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 1 KANALU*', price: '800 ZL', sort_order: 3, is_active: true },
      { name: 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 2 KANALOW*', price: '1100 ZL', sort_order: 4, is_active: true },
      { name: 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 3 KANALOW*', price: '1500 ZL', sort_order: 5, is_active: true },
      { name: 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 4 KANALOW*', price: '1800 ZL', sort_order: 6, is_active: true },
      { name: 'POWTORNE LECZENIE KANALOWE', price: '+200 ZL / 1 KANAL', sort_order: 7, is_active: true }
    ]
  },
  {
    title: 'PROTETYKA',
    description: 'Estetyczne i funkcjonalne odbudowy protetyczne dopasowane do Twoich potrzeb.',
    sort_order: 6,
    is_active: true,
    services: [
      { name: 'WAX UP (1PUNKT)', price: '150ZL', sort_order: 1, is_active: true },
      { name: 'DOSTAWIENIE ZEBA DO PROTEZY', price: '200 ZL', sort_order: 2, is_active: true },
      { name: 'POWTORNE ZACEMENTOWANIE KORONY/MOSTU (1 PUNKT)', price: '400 ZL', sort_order: 3, is_active: true },
      { name: 'WKLAD KORONOWO-KORZENIOWY JEDNOCZESCIOWY CHROMO-KOBALT', price: '450 ZL', sort_order: 4, is_active: true },
      { name: 'WKLAD KORONOWO-KORZENIOWY ZLOZONY CHROMO-KOBALT', price: '600 ZL', sort_order: 5, is_active: true },
      { name: 'SZYNA RELAKSACYJNA', price: '800 ZL', sort_order: 6, is_active: true },
      { name: 'SZYNA DLA SPORTOWCOW', price: '800 ZL', sort_order: 7, is_active: true },
      { name: 'KORONA PORCELANOWA NA PODBUDOWIE CHROMOWO KOBALTOWEJ (PUNKT SPIEKANY)', price: '2000 zl', sort_order: 8, is_active: true },
      { name: 'KORONA PELNOCERAMICZNA/CYRKONOWA', price: '2500 ZL', sort_order: 9, is_active: true },
      { name: 'KORONA TYMCZASOWA', price: 'W CENIE USLUGI', sort_order: 10, is_active: true },
      { name: 'LICOWKA PORCELANOWA', price: '2500 ZL', sort_order: 11, is_active: true },
      { name: 'PROTEZA SZKIELETOWA', price: '3500 ZL', sort_order: 12, is_active: true },
      { name: 'PROTEZA BEZKLAMROWA', price: 'WYCENA INDYWIDUALNA', sort_order: 13, is_active: true },
      { name: 'PROTEZA AKRYLOWA', price: '2000 ZL', sort_order: 14, is_active: true },
      { name: 'PROTEZA AKRONOWA', price: '3000 ZL', sort_order: 15, is_active: true }
    ]
  },
  {
    title: 'STOMATOLOGIA ZACHOWAWCZA',
    description: 'Skuteczna odbudowa i leczenie prochnicy dla zdrowych zebow.',
    sort_order: 7,
    is_active: true,
    services: [
      { name: 'ZNIECZULENIE KOMPUTEROWE DENTAPEN', price: 'Bezplatnie', sort_order: 1, is_active: true },
      { name: 'WYPELNIENIA TYMCZASOWE', price: '200 ZL', sort_order: 2, is_active: true },
      { name: 'WYPELNIENIE ZEBA (W ZALEZNOSCI OD ROZLEGLOSCI UBYTKU)', price: '400-500 ZL', sort_order: 3, is_active: true },
      { name: 'ODBUDOWA ZEBA NA WLOKNIE SZKLANYM', price: '600 ZL', sort_order: 4, is_active: true }
    ]
  },
  {
    title: 'CHIRURGIA',
    description: 'Bezpieczne i komfortowe zabiegi chirurgiczne w nowoczesnym wydaniu.',
    sort_order: 8,
    is_active: true,
    services: [
      { name: 'EKSTRAKCJA ZEBA JEDNOKORZENIOWEGO', price: '300 ZL', sort_order: 1, is_active: true },
      { name: 'EKSTRAKCJA ZEBA WIELOKORZENIOWEGO', price: '400 ZL', sort_order: 2, is_active: true },
      { name: 'EKSTRAKCJA OSEMKI', price: '600 ZL', sort_order: 3, is_active: true },
      { name: 'EKSTRAKCJA ZEBA MLECZNEGO', price: '200-300 ZL', sort_order: 4, is_active: true },
      { name: 'USUNIECIE ZEBA ZATRZYMANEGO', price: '400-600 ZL', sort_order: 5, is_active: true },
      { name: 'EKSTRAKCJA ZEBA ZATRZYMANEGO', price: '1000-1500 ZL', sort_order: 6, is_active: true },
      { name: 'PODCIECIE CHIRURGICZNE WEDZIDELKA (WARGI, JEZYKA)', price: '400 ZL', sort_order: 7, is_active: true }
    ]
  },
  {
    title: 'STOMATOLOGIA ESTETYCZNA',
    description: 'Piekny usmiech dzieki wybielaniu i nowoczesnym licowkom.',
    sort_order: 9,
    is_active: true,
    services: [
      { name: 'Wybielanie nakladkowe (z szynami indywidualnymi)', price: '1200 zl', sort_order: 1, is_active: true },
      { name: 'Wybielanie gabinetowe z regeneracja szkliwa metoda PREVDENT', price: '1600 zl', sort_order: 2, is_active: true }
    ]
  },
  {
    title: 'STOMATOLOGIA DZIECIECA',
    description: 'Bezstresowe leczenie zebow najmlodszych pacjentow.',
    sort_order: 10,
    is_active: true,
    services: [
      { name: 'WIZYTA KONSULTACYJNA/ADAPTACYJNA Z PRZEGLADEM JAMY USTNEJ', price: '200 ZL', sort_order: 1, is_active: true },
      { name: 'OPATRUNEK W ZEBIE MLECZNYM', price: '200 ZL', sort_order: 2, is_active: true },
      { name: 'WYPELNIENIE W ZEBIE MLECZNYM', price: '250-300 ZL', sort_order: 3, is_active: true },
      { name: 'LAKIEROWANIE ZEBOW MLECZNYCH/STALYCH (2 LUKI)', price: '200 ZL', sort_order: 4, is_active: true },
      { name: 'EKSTRAKCJA ZEBA MLECZNEGO', price: '200-250 ZL', sort_order: 5, is_active: true },
      { name: 'LAKOWANIE ZEBA', price: '200 ZL', sort_order: 6, is_active: true },
      { name: 'OTWARCIE ZEBA Z OPATRUNKIEM', price: '200 ZL', sort_order: 7, is_active: true }
    ]
  },
  {
    title: 'STOMATOLOGIA LASEROWA',
    description: 'Nowoczesne i bezbolesne zabiegi z wykorzystaniem lasera.',
    sort_order: 11,
    is_active: true,
    services: [
      { name: 'LECZENIE OPRYSZCZKI, AFT', price: '200 ZL', sort_order: 1, is_active: true },
      { name: 'WYDLUZENIE KORONY KLINICZNEJ (KOREKTA DZIASLA)', price: '250 ZL', sort_order: 2, is_active: true }
    ]
  }
]
