import type { CountrySection, Dish, TimelinePoint } from './types'

export const spainFacts: CountrySection[] = [
  {
    id: 'alhambra',
    title: 'Alhambra w Grenadzie',
    description:
      'Pałac-twierdza Nasrydów z XIII wieku — arcydzieło architektury islamu w Europie, z dziedzińcem Lwów i ogrodami Generalife. Nazwa znaczy po arabsku „czerwona” — od koloru murów o zachodzie słońca. Po rekonkwiście zamieszkali tu Królowie Katoliccy, a Karol V dobudował renesansowy pałac w samym sercu muzułmańskiej twierdzy.',
    accent: 'spain',
    featured: true,
    imageKey: 'heroSpain',
  },
  {
    id: 'sagrada',
    title: 'Sagrada Família',
    description:
      'Bazylika Antonia Gaudiego w Barcelonie, budowana od 1882 roku i wciąż nieukończona. Gaudi połączył gotyk z formami żywych organizmów: kolumny rozgałęziają się jak drzewa, a witraże zalewają wnętrze kolorowym światłem. To najchętniej odwiedzany zabytek Hiszpanii.',
    accent: 'spain',
    featured: true,
    imageKey: 'sagrada',
  },
  {
    id: 'flamenco',
    title: 'Flamenco z Andaluzji',
    description:
      'Śpiew, taniec i gra na gitarze wpisane na listę niematerialnego dziedzictwa UNESCO. Zrodzone z kultury andaluzyjskiej, romskiej i żydowskiej. Prawdziwe flamenco to improwizacja i emocje — okrzyki „¡olé!” publiczności to część spektaklu, nie tylko oklaski.',
    accent: 'spain',
    featured: true,
    imageKey: 'flamenco',
  },
  {
    id: 'guell',
    title: 'Park Güell',
    description:
      'Ogrodowe miasto Gaudiego na wzgórzu Barcelony: mozaikowa salamandra, falista ławka z ceramicznych odłamków i kolumnada jak kamienny las. Miało być osiedlem dla bogaczy — nikt nie chciał tam mieszkać, więc powstał najsłynniejszy park świata.',
    accent: 'spain',
    imageKey: 'guell',
  },
  {
    id: 'mezquita',
    title: 'Mezquita w Kordobie',
    description:
      'Wielki meczet z lasem prawie tysiąca kolumn, w którego środku chrześcijanie wznieśli gotycką katedrę. Przez 800 lat był to jeden z największych meczetów świata. Spacer między kolumnami to podróż przez dwie religie i dwie epoki w jednym budynku.',
    accent: 'spain',
    imageKey: 'mezquita',
  },
  {
    id: 'giralda',
    title: 'Giralda w Sewilli',
    description:
      'Dzwonnica katedry w Sewilli, niegdyś minaret meczetu — zamiast schodów ma 34 rampy, po których muezin wjeżdżał konno. Obok stoi największa gotycka katedra świata z grobem Kolumba. Sewilla mówi, że katedra miała „zadziwić potomnych” — i się udało.',
    accent: 'spain',
    imageKey: 'giralda',
  },
  {
    id: 'camino',
    title: 'Camino de Santiago',
    description:
      'Sieć szlaków pielgrzymkowych do Santiago de Compostela, przemierzana od tysiąca lat. Rocznie idzie nim ponad 400 tysięcy ludzi — pieszo, rowerem, a nawet konno. Muszla św. Jakuba na plecaku to znak rozpoznawczy pielgrzyma w całej Europie.',
    accent: 'spain',
    imageKey: 'camino',
  },
  {
    id: 'prado',
    title: 'Museo del Prado',
    description:
      'Jedno z najważniejszych muzeów świata: Velázquez i jego „Panny dworskie”, Goya od gobelinów po czarne obrazy, Hieronim Bosch i jego „Ogród rozkoszy”. Cała historia malarstwa europejskiego w jednym budynku przy madryckim Paseo del Prado.',
    accent: 'spain',
    imageKey: 'prado',
  },
  {
    id: 'siesta-tapas',
    title: 'Siesta i tapas',
    description:
      'Popołudniowa przerwa oraz kultura małych dań dzielonych przy barze — od tortilli española po gambas al ajillo. Hiszpanie jedzą kolację nawet o 22:00, a życie towarzyskie toczy się na ulicy: bary, place i promenady pełne są ludzi do późnej nocy.',
    accent: 'spain',
    imageKey: 'tapas',
  },
  {
    id: 'jezyk-quijote',
    title: 'Język Cervantesa',
    description:
      'Po hiszpańsku mówi ponad 500 milionów ludzi — drugi język świata pod względem liczby rodzimych użytkowników. A wszystko zaczęło się od „Don Kichota” z La Manchy, ojczyzny wiatraków, z którymi walczył błędny rycerz. Hiszpański to język 20 państw na czterech kontynentach.',
    accent: 'spain',
    imageKey: 'molinos',
  },
]

export const spainDishes: Dish[] = [
  {
    name: 'Paella Valenciana',
    description:
      'Ryż z szafranem, królikiem, kurczakiem i fasolą garrofó — prosto z Walencji. Prawdziwa paella nie zawiera owoców morza, a je się ją wprost z patelni, w niedzielę, całą rodziną.',
    imageKey: 'dishPaella',
  },
  {
    name: 'Jamón Ibérico',
    description:
      'Dojrzewająca szynka z czarnej świni iberyjskiej karmionej żołędziami. Kroi się ją w cieniutkie plastry i je bez dodatków. Najlepsze sztuki dojrzewają nawet 4 lata.',
    imageKey: 'dishJamon',
  },
  {
    name: 'Churros z czekoladą',
    description:
      'Smażone ciasto maczane w gęstej, gorącej czekoladzie — klasyczne śniadanie, zwłaszcza po nocnym wyjściu w Madrycie. Churrerías otwierają się już o świcie.',
    imageKey: 'dishChurros',
  },
  {
    name: 'Tortilla Española',
    description:
      'Gruby omlet z ziemniaków i cebuli — królowa hiszpańskich tapas. Spór wszech czasów: czy tortilla ma być ścięta, czy płynna w środku? Każda rodzina ma swoją jedyną słuszną wersję.',
    imageKey: 'dishTortilla',
  },
  {
    name: 'Gazpacho',
    description:
      'Chłodnik z pomidorów, papryki i ogórka — andaluzyjska odpowiedź na upał powyżej 40 stopni. Podaje się go lodowato zimnego, z grzankami i oliwą. Latem nie ma lepszego obiadu.',
    imageKey: 'dishGazpacho',
  },
]

export const spainMusic: CountrySection[] = [
  {
    id: 'gitara',
    title: 'Gitara klasyczna',
    description:
      'Hiszpania to ojczyzna gitary klasycznej: Andrés Segovia wyniósł ją na sale koncertowe, a Paco de Lucía zelektryzował flamenco jazzem i bossą. Bez hiszpańskiej gitary nie byłoby ani rocka, ani latino-popu.',
    accent: 'spain',
    imageKey: 'flamenco',
  },
  {
    id: 'nuevo-flamenco',
    title: 'Nuevo flamenco i Rosalía',
    description:
      'Rosalía z Barcelony połączyła flamenco z R&B i elektroniką i podbiła światowe listy. Album „El Mal Querer” to dyplom z flamenkologii zamknięty w popowym hicie — młodzi Hiszpanie oszaleli na jej punkcie.',
    accent: 'spain',
    imageKey: 'rosalia',
  },
  {
    id: 'fiesta-sound',
    title: 'Dźwięk fiesty',
    description:
      'Pasodoble na korridach, rumba catalana na ulicznych potańcówkach, sardana w Katalonii tańczona w kółko na placach. A na tych samych placach rosną castellers — ludzkie wieże sięgające nieba. Na wielkich festiwalach jak Primavera Sound gra dziś cała planeta — od indie po reggaetón.',
    accent: 'spain',
    imageKey: 'castellers',
  },
]

export const spainSport: CountrySection[] = [
  {
    id: 'clasico',
    title: 'El Clásico: Real vs Barça',
    description:
      'Najsłynniejszy mecz klubowy świata: Real Madryt kontra FC Barcelona. Ponad 100 lat rywalizacji, setki milionów widzów przed telewizorami. Grali tu Cristiano Ronaldo i Messi, dziś błyszczą Vinícius i Lamine Yamal.',
    accent: 'spain',
    imageKey: 'bernabeu',
  },
  {
    id: 'furia',
    title: 'La Furia Roja i gwiazdy',
    description:
      'Mistrzowie świata 2010 i Europy 2008, 2012 i 2024: Iniesta, Xavi, Ramos i spółka. A poza futbolem Hiszpania rządzi tenisem — Nadal i Alcaraz — oraz Formułą 1 z Fernando Alonso.',
    accent: 'spain',
    imageKey: 'yamal',
  },
  {
    id: 'hala',
    title: 'Hale też ich',
    description:
      'FC Barcelona to potęga piłki ręcznej, a koszykarska liga ACB to druga siła świata po NBA. Bracia Gasol zdobyli z Hiszpanią mistrzostwa świata i Europy — w kraju, gdzie sport to religia.',
    accent: 'spain',
    imageKey: 'gasol',
  },
]

export const spainTimeline: TimelinePoint[] = [
  {
    year: '711',
    title: 'Al-Andalus',
    description: 'Przybycie Maurów — początek wielowiekowej epoki rozkwitu nauki, medycyny i architektury.',
  },
  {
    year: '1492',
    title: 'Granada i Kolumb',
    description: 'Upadek Granady oraz wyprawa Kolumba — Hiszpania staje się potęgą oceaniczną.',
  },
  {
    year: 'XVI–XVII w.',
    title: 'Imperium i Złoty Wiek',
    description: 'Cervantes, Velázquez i imperium, nad którym nigdy nie zachodziło słońce.',
  },
  {
    year: '1898',
    title: 'Koniec imperium',
    description: 'Utrata Kuby i Filipin — Hiszpania żegna się z kolonialną potęgą i szuka nowej tożsamości.',
  },
  {
    year: '1978',
    title: 'Demokracja',
    description: 'Konstytucja po epoce Franco — narodziny współczesnej, zdecentralizowanej Hiszpanii autonomii.',
  },
  {
    year: 'dziś',
    title: 'Hiszpania w UE',
    description: 'Kraj flamenco, fiest i awangardowej architektury — czwarta gospodarka strefy euro.',
  },
]

export const spainFestivals: CountrySection[] = [
  {
    id: 'semana-santa',
    title: 'Semana Santa',
    description:
      'Wielki Tydzień w Sewilli: procesje bractw, pasos — platformy z figurami — i tysiące pokutników w kapturach capirotes. Największe święto religijne Hiszpanii, przeżywane na ulicach całą dobę.',
    accent: 'spain',
    imageKey: 'semanasanta',
  },
  {
    id: 'tomatina',
    title: 'La Tomatina',
    description:
      'Ostatnia środa sierpnia w Buñol: kilkadziesiąt ton pomidorów leci w tłum. Największa bitwa na jedzenie świata — po godzinie ulice spływają czerwonym sokiem.',
    accent: 'spain',
    imageKey: 'tomatina',
  },
  {
    id: 'fallas',
    title: 'Las Fallas',
    description:
      'Marzec w Walencji: gigantyczne kukły z papier-mâché satyryzujące polityków, a potem — wszystko idzie z ogniem podczas Nit del Foc. Miasto pachnie prochem przez tydzień.',
    accent: 'spain',
    imageKey: 'fallas',
  },
  {
    id: 'sanfermin',
    title: 'San Fermín',
    description:
      'Lipiec w Pampelunie: słynny encierro — bieg z bykami ulicami miasta — oraz czerwone chusty i białe stroje. Hemingway rozsławił fiestę na cały świat w „Słońce też wschodzi”.',
    accent: 'spain',
    imageKey: 'sanfermin',
  },
]
