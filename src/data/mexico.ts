import type { CountrySection, Dish, TimelinePoint } from './types'

export const mexicoFacts: CountrySection[] = [
  {
    id: 'chichen',
    title: 'Chichén Itzá',
    description:
      'Majowska piramida Kukulkana na Jukatanie — jeden z siedmiu nowych cudów świata. W równonoc cień układa się w pełzającego węża, a klaskanie u stóp schodów wraca echem przypominającym głos kwezala, świętego ptaka Majów.',
    accent: 'mexico',
    featured: true,
    imageKey: 'heroMexico',
  },
  {
    id: 'teotihuacan',
    title: 'Teotihuacán',
    description:
      'Miasto bogów pod Meksykiem: Aleja Zmarłych i dwie gigantyczne piramidy — Słońca i Księżyca. W szczycie mieszkało tu 200 tysięcy ludzi, więcej niż w ówczesnym Rzymie. Do dziś nie wiadomo, kto je zbudował i dlaczego je opuszczono.',
    accent: 'mexico',
    featured: true,
    imageKey: 'teotihuacan',
  },
  {
    id: 'alebrijes',
    title: 'Alebrijes',
    description:
      'Fantastyczne, jaskrawo malowane stwory z drewna i papier-mâché — symbol meksykańskiego rzemiosła z Oaxaca i Meksyku. Narodziły się ze snu chorego rzemieślnika, który widział krzyczące „alebrijes!” potwory. Dziś paradują w wielkiej paradzie w stolicy.',
    accent: 'mexico',
    featured: true,
    imageKey: 'alebrije',
  },
  {
    id: 'palenque',
    title: 'Palenque w dżungli',
    description:
      'Majowskie miasto wtopione w dżunglę Chiapas: Świątynia Inskrypcji z grobowcem króla Pakala i Pałac z wieżą obserwacyjną. Odkrywcy wycinali je z buszu maczetami, a archeolodzy wciąż znajdują nowe budowle pod korzeniami drzew.',
    accent: 'mexico',
    imageKey: 'palenque',
  },
  {
    id: 'casaazul',
    title: 'Casa Azul Fridy Kahlo',
    description:
      'Niebieski dom Fridy Kahlo w Coyoacán — dziś muzeum najsłynniejszej malarki Meksyku. Jej autoportrety pełne bólu, miłości i meksykańskich symboli zna cały świat. Obok tworzył Diego Rivera, autor gigantycznych murali opowiadających historię kraju.',
    accent: 'mexico',
    imageKey: 'casaazul',
  },
  {
    id: 'cenote',
    title: 'Cenoty Jukatanu',
    description:
      'Podziemne studnie krasowe z turkusową wodą — dla Majów wejścia do świata zmarłych i jedyne źródło wody. Cenote Ik Kil to 40 metrów w dół pośród lian: można się kąpać dokładnie tam, gdzie składano ofiary bogom deszczu.',
    accent: 'mexico',
    imageKey: 'cenote',
  },
  {
    id: 'muertos-fact',
    title: 'Día de los Muertos',
    description:
      '1–2 listopada Meksyk śmieje się śmierci w twarz: czaszki z cukru, pan de muerto i ofrendy pełne nagietków prowadzą dusze zmarłych do domu. To nie żałoba, tylko najradośniejsze święto w roku — wpisane na listę UNESCO.',
    accent: 'mexico',
    imageKey: 'ofrenda',
  },
  {
    id: 'bioroznorodnosc',
    title: 'Kraina bioróżnorodności',
    description:
      'Meksyk to jeden z najbardziej zróżnicowanych biologicznie krajów świata. Stąd pochodzą kukurydza, kakao, wanilia, pomidory i agawa. Mieszka tu też aksolotl — salamandra, która potrafi odrosnąć sobie serce i nigdy nie dorasta.',
    accent: 'mexico',
    imageKey: 'axolotl',
  },
  {
    id: 'kuchnia-unesco',
    title: 'Kuchnia dziedzictwem UNESCO',
    description:
      'Kuchnia meksykańska jako pierwsza na świecie trafiła na listę niematerialnego dziedzictwa UNESCO. Tortilla, mole, tamales i salsa — przepisy przekazywane z matki na córkę od tysięcy lat. Meksykanie mówią: bez kukurydzy nie ma kraju.',
    accent: 'mexico',
    imageKey: 'dishPozole',
  },
  {
    id: 'jezyki-vasconcelos',
    title: 'Hiszpański i 68 języków',
    description:
      'Obok hiszpańskiego Meksyk uznaje 68 języków narodowych: nahuatl, maya, mixteco i dziesiątki innych. Mówi nimi 7 milionów ludzi. Symbolem tej wiedzy jest Biblioteka Vasconcelos w stolicy — „megabiblioteka” z wiszącymi regałami i szkieletem wieloryba.',
    accent: 'mexico',
    imageKey: 'vasconcelos',
  },
]

export const mexicoDishes: Dish[] = [
  {
    name: 'Tacos al Pastor',
    description:
      'Wieprzowina z rożna (wpływ libańskich imigrantów), ananas, kolendra i cebula na kukurydzianej tortilli. Najlepsze je się na stojąco, o 2 w nocy, z lodowatą horchatą.',
    imageKey: 'dishTacos',
  },
  {
    name: 'Mole Poblano',
    description:
      'Gęsty sos z chili i czekolady z Puebli — podawany z indykiem lub kurczakiem na wielkie święta. Legenda mówi, że wymyśliły go zakonnice, które wrzuciły do garnka wszystko, co miały w kuchni.',
    imageKey: 'dishMole',
  },
  {
    name: 'Guacamole',
    description:
      'Rozgniecione awokado z limonką, kolendrą i chili. Aztekowie jedli je już 500 lat temu — nazwa znaczy „sos z awokado”. Prawdziwe guacamole robi się w kamiennym moździerzu molcajete.',
    imageKey: 'dishGuac',
  },
  {
    name: 'Pozole',
    description:
      'Rytualna zupa z wielkich ziaren kukurydzy cacahuazintle, wieprzowiny, rzodkiewki i oregano. Czerwona, biała albo zielona — kolor zależy od regionu. Danie czwartkowych i sobotnich fiest.',
    imageKey: 'dishPozole',
  },
  {
    name: 'Elote',
    description:
      'Grillowana kukurydza ze straganu: majonez, tarty ser cotija, chili w proszku i limonka. Jadana prosto z kolby, na rogu ulicy. Wersja w kubeczku to esquites — ta sama pycha bez bałaganu.',
    imageKey: 'dishElote',
  },
]

export const mexicoMusic: CountrySection[] = [
  {
    id: 'mariachi-music',
    title: 'Mariachi z Jalisco',
    description:
      'Skrzypce, trąbki i guitarrón w srebrno haftowanych strojach charro. „Cielito Lindo” i „La Cucaracha” zna każdy Meksykanin od kołyski. Mariachi gra na weselach, pogrzebach i pod balkonem ukochanej o północy.',
    accent: 'mexico',
    imageKey: 'mariachi',
  },
  {
    id: 'son-jarocho',
    title: 'Son jarocho i La Bamba',
    description:
      'Muzyka z Veracruz: harfa, mała gitara jarana i taniec na drewnianej tarimie. „La Bamba” ma 400 lat, a rozsławił ją Ritchie Valens — siedemnastoletni chłopak, który nauczył Amerykę śpiewać po hiszpańsku.',
    accent: 'mexico',
    imageKey: 'fandango',
  },
  {
    id: 'selena',
    title: 'Selena i latin pop',
    description:
      'Selena Quintanilla, królowa tejano, sprzedała miliony płyt, zanim skończyła 24 lata. Po niej przyszli Luis Miguel, Maná i globalna fala reggaetónu. Dziś hiszpańskojęzyczne hity rządzą światowymi listami.',
    accent: 'mexico',
    imageKey: 'selena',
  },
]

export const mexicoSport: CountrySection[] = [
  {
    id: 'azteca',
    title: 'Estadio Azteca i mundial 2026',
    description:
      'Jedyny stadion trzech mundiali (1970, 1986, 2026): tu Maradona strzelił „rękę Boga” i „gola stulecia” w jednym meczu. W 2026 Meksyk otworzy mistrzostwa razem z USA i Kanadą — trzeci raz w historii.',
    accent: 'mexico',
    imageKey: 'azteca',
  },
  {
    id: 'gwiazdy-mx',
    title: 'Hugo, Chicharito, Ochoa',
    description:
      'Hugo Sánchez i jego słynne salta w Realu Madryt, Chicharito strzelający w Manchesterze United, Ochoa broniący jak ściana na kolejnych mundialach. Meksykanie grają w najlepszych ligach świata.',
    accent: 'mexico',
    imageKey: 'chicharito',
  },
  {
    id: 'lucha-canelo',
    title: 'Lucha libre i Canelo',
    description:
      'Zamastkowani zapaśnicy w Arena México: El Santo, narodowy bohater z filmów, walczy ze złem także na ekranie. A na ringu bokserskim rządzi Canelo Álvarez, a na torze Formuły 1 — Checo Pérez.',
    accent: 'mexico',
    imageKey: 'lucha',
  },
]

export const mexicoTimeline: TimelinePoint[] = [
  {
    year: 'ok. 2000 p.n.e.',
    title: 'Cywilizacje prekolumbijskie',
    description: 'Olmekowie, Majowie i Zapotekowie budują miasta, piramidy i kalendarze dokładniejsze niż europejskie.',
  },
  {
    year: '1325',
    title: 'Tenochtitlán',
    description: 'Aztekowie zakładają stolicę na jeziorze Texcoco — miasto większe niż ówczesny Londyn i Sewilla razem.',
  },
  {
    year: '1521–1821',
    title: 'Nowa Hiszpania',
    description: 'Trzy wieki rządów hiszpańskich: mieszanie kultur, barokowe kościoły i język español w całej Ameryce.',
  },
  {
    year: '1821',
    title: 'Niepodległość',
    description: 'Po 11 latach wojny ksiądz Hidalgo i jego następcy wywalczają wolny Meksyk — z początku cesarstwo, potem republikę.',
  },
  {
    year: '1910–1920',
    title: 'Rewolucja',
    description: 'Zapata i Villa przeciwko dyktaturze: „Ziemia i wolność!”. Najkrwawsza rewolucja Ameryk dała Meksykowi konstytucję i muralizm.',
  },
  {
    year: 'dziś',
    title: 'Meksyk współczesny',
    description: '130 milionów ludzi, druga gospodarka Ameryki Łacińskiej, kuchnia i Dzień Zmarłych znane na całym świecie.',
  },
]

export const mexicoFestivals: CountrySection[] = [
  {
    id: 'muertos',
    title: 'Día de los Muertos',
    description:
      '1–2 listopada rodziny budują ofrendy — ołtarze ze zdjęciami, nagietkami i ulubionym jedzeniem zmarłych. Cukrowe czaszki, parady Catrin i wizyty na cmentarzach z muzyką. Radość zamiast żałoby.',
    accent: 'mexico',
    imageKey: 'ofrenda',
  },
  {
    id: 'guelaguetza',
    title: 'Guelaguetza',
    description:
      'Lipcowe święto w Oaxaca: tańce, muzyka i dary dla wspólnoty. Słowo znaczy „wzajemna pomoc” w języku zapoteków. Najpiękniejsze stroje i najgłośniejsze orkiestry całego Meksyku.',
    accent: 'mexico',
    imageKey: 'guelaguetza',
  },
  {
    id: 'posadas',
    title: 'Las Posadas',
    description:
      'Dziewięć grudniowych wieczorów przed Bożym Narodzeniem: procesje z lampionami, kolędy i rozbijanie piñaty pełnej owoców i słodyczy. Każda dzielnica ma swoją posadę — ulice pachną ponczem z owoców.',
    accent: 'mexico',
    imageKey: 'posadas',
  },
  {
    id: 'carnaval',
    title: 'Carnaval de Veracruz',
    description:
      'Najweselszy karnawał Meksyku: tydzień parad, tańców danzón i muzyki marimba nad Zatoką. Król i królowa karnawału, konfetti w zębach i taniec do białego rana na malecón.',
    accent: 'mexico',
    imageKey: 'carnaval',
  },
]
