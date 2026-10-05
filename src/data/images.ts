export interface ImageSlot {
  src: string
  alt: string
  credit: string
  creditUrl: string
}

export const IMAGES: Record<
  | 'heroSpain'
  | 'heroMexico'
  | 'dishPaella'
  | 'dishJamon'
  | 'dishChurros'
  | 'dishTacos'
  | 'dishMole'
  | 'dishGuac'
  | 'dishTortilla'
  | 'dishGazpacho'
  | 'dishPozole'
  | 'dishElote'
  | 'flamenco'
  | 'mariachi'
  | 'sagrada'
  | 'guell'
  | 'mezquita'
  | 'camino'
  | 'prado'
  | 'giralda'
  | 'molinos'
  | 'teotihuacan'
  | 'palenque'
  | 'casaazul'
  | 'cenote'
  | 'axolotl'
  | 'alebrije'
  | 'ofrenda'
  | 'tapas'
  | 'vasconcelos'
  | 'widokES'
  | 'widokMX'
  | 'bernabeu'
  | 'azteca'
  | 'lucha'
  | 'fallas'
  | 'sanfermin'
  | 'semanasanta'
  | 'tomatina'
  | 'posadas'
  | 'guelaguetza'
  | 'carnaval'
  | 'rosalia'
  | 'castellers'
  | 'fandango'
  | 'selena'
  | 'yamal'
  | 'chicharito'
  | 'gasol',
  ImageSlot
> = {
  heroSpain: {
    src: './img/heroSpain.webp',
    alt: 'Alhambra w Grenadzie widziana z ogrodów Generalife',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Alhambra_from_Generalife_(2017).jpg',
  },
  heroMexico: {
    src: './img/heroMexico.webp',
    alt: 'Piramida Kukulkana w Chichén Itzá',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Chichen_Itza_3.jpg',
  },
  dishPaella: {
    src: './img/dishPaella.webp',
    alt: 'Paella Valenciana na dużej patelni',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:01_Paella_Valenciana_original.jpg',
  },
  dishJamon: {
    src: './img/dishJamon.webp',
    alt: 'Krojony Jamón Ibérico',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Jam%C3%B3n_cortado-Madrid-2009.jpg',
  },
  dishChurros: {
    src: './img/dishChurros.webp',
    alt: 'Churros z gęstą czekoladą',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Chocolate_con_churros_de_lazo.jpg',
  },
  dishTacos: {
    src: './img/dishTacos.webp',
    alt: 'Tacos al pastor z ananasem i kolendrą',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Tacos_al_pastor.jpg',
  },
  dishMole: {
    src: './img/dishMole.webp',
    alt: 'Mole Poblano — indyk w ciemnym sosie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Mole_Poblano.jpg',
  },
  dishGuac: {
    src: './img/dishGuac.webp',
    alt: 'Miska guacamole',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Guacamole_bowl.jpg',
  },
  flamenco: {
    src: './img/flamenco.webp',
    alt: 'Tancerka flamenco w czerwonej sukni',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Woman_Flamenco_dancer.jpg',
  },
  mariachi: {
    src: './img/mariachi.webp',
    alt: 'Sombrero mariachi z haftem',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:SOMBRERO_FOLKLORE_ZACATECANO_MARIACHI_01.jpg',
  },
  sagrada: {
    src: './img/sagrada.webp',
    alt: 'Fasada bazyliki Sagrada Família w Barcelonie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Sagrada_Familia_March_2015-14a.jpg',
  },
  guell: {
    src: './img/guell.webp',
    alt: 'Mozaikowy taras Parku Güell w Barcelonie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Park_Guell_Terrace.JPG',
  },
  mezquita: {
    src: './img/mezquita.webp',
    alt: 'Las kolumn we wnętrzu Mezquity w Kordobie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Mezquita-Catedral_de_C%C3%B3rdoba_-_Blending_of_Christian_and_Moorish_architecture.jpg',
  },
  camino: {
    src: './img/camino.webp',
    alt: 'Szlak Camino de Santiago wśród zieleni',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Camino_Franc%C3%A9s,_Santiago_de_Compostela_02.jpg',
  },
  prado: {
    src: './img/prado.webp',
    alt: 'Panny dworskie Velázqueza — perła Museo del Prado',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Las_Meninas_01.jpg',
  },
  giralda: {
    src: './img/giralda.webp',
    alt: 'Dzwonnica Giralda przy katedrze w Sewilli',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:La_Giralda,_Seville,_Spain_-_Sep_2009.jpg',
  },
  molinos: {
    src: './img/molinos.webp',
    alt: 'Wiatraki w Consuegrze na wzgórzach La Manchy',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Campos_de_molinos_de_viento._Consuegra,_Toledo.JPG',
  },
  teotihuacan: {
    src: './img/teotihuacan.webp',
    alt: 'Piramida Słońca w Teotihuacán',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Pyramid_of_the_Sun,_Teotihuacan,_from_path_to_parking_lot.jpg',
  },
  palenque: {
    src: './img/palenque.webp',
    alt: 'Świątynie Palenque w dżungli Chiapas',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Palenque_Chiapas_1977_04.jpg',
  },
  casaazul: {
    src: './img/casaazul.webp',
    alt: 'Niebieski dziedziniec Casa Azul Fridy Kahlo',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Museo_Frida_Kahlo.JPG',
  },
  cenote: {
    src: './img/cenote.webp',
    alt: 'Cenote Ik Kil — studnia krasowa na Jukatanie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Cenote_Ik_Kil,_Yucatan,_Dec_2011_-_01.jpg',
  },
  axolotl: {
    src: './img/axolotl.webp',
    alt: 'Aksolotl meksykański w wodzie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Ambystoma_mexicanum_1.jpg',
  },
  alebrije: {
    src: './img/alebrije.webp',
    alt: 'Kolorowy drewniany alebrije',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Alebrije_1_(fcm).jpg',
  },
  ofrenda: {
    src: './img/ofrenda.webp',
    alt: 'Wielka ofrenda z nagietkami na Día de los Muertos',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Mega_Ofrenda_de_Muertos.jpg',
  },
  tapas: {
    src: './img/tapas.webp',
    alt: 'Talere pełen tapas w barze w Madrycie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:(_Tapas_in_Spain,_Madrid_).jpg',
  },
  dishTortilla: {
    src: './img/dishTortilla.webp',
    alt: 'Pincho tortilli española',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Tapa,_pincho_de_tortilla_espa%C3%B1ola.jpg',
  },
  dishGazpacho: {
    src: './img/dishGazpacho.webp',
    alt: 'Miska gazpacho',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Gazpacho_in_a_white_bowl.jpg',
  },
  dishPozole: {
    src: './img/dishPozole.webp',
    alt: 'Miska pozole z dodatkami',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Pozole.jpg',
  },
  dishElote: {
    src: './img/dishElote.webp',
    alt: 'Elote pieczony na grillu',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Elote_as%C3%A1ndose.jpg',
  },
  vasconcelos: {
    src: './img/vasconcelos.webp',
    alt: 'Wiszące regały Biblioteki Vasconcelos w Meksyku',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Biblioteca_Vasconcelos,_Ciudad_de_M%C3%A9xico,_M%C3%A9xico,_2015-07-20,_DD_16-18_HDR.JPG',
  },
  widokES: {
    src: './img/widokES.webp',
    alt: 'Panorama Port Vell w Barcelonie znad wody',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Port_Vell,_Barcelona,_Spain_-_Jan_2007.jpg',
  },
  widokMX: {
    src: './img/widokMX.webp',
    alt: 'Plaża Playa Gaviota Azul w Cancún',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Canc%C3%BAn_-_Playa_Gaviota_Azul_-_08.jpg',
  },
  bernabeu: {
    src: './img/bernabeu.webp',
    alt: 'Panorama stadionu Santiago Bernabéu w Madrycie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Santiagobernabeupanoramav45.JPG',
  },
  azteca: {
    src: './img/azteca.webp',
    alt: 'Estadio Azteca w Meksyku z lotu ptaka',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Estadio_Azteca_desde_el_aire_1.jpg',
  },
  lucha: {
    src: './img/lucha.webp',
    alt: 'Meksykańska maska lucha libre',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Mascara_lucha_libre_mexicana.jpg',
  },
  fallas: {
    src: './img/fallas.webp',
    alt: 'Kukła ninot na wystawie Fallas w Walencji',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Exposici%C3%B3n_del_Ninot_de_las_Fallas_de_2025_007.jpg',
  },
  sanfermin: {
    src: './img/sanfermin.webp',
    alt: 'Tłum w bieli i czerwieni na San Fermín w Pampelunie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Pamplona_-_San_Ferm%C3%ADn_2013_-_panoramio.jpg',
  },
  semanasanta: {
    src: './img/semanasanta.webp',
    alt: 'Pasos niesione w procesji Semana Santa',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Misterio_de_la_Exaltaci%C3%B3n_Semana_Santa_2025.jpg',
  },
  tomatina: {
    src: './img/tomatina.webp',
    alt: 'Tłum obrzucony pomidorami na La Tomatina w Buñol',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:La_Tomatina_(25.08.2010)_-_Spain,_Bu%C3%B1ol_21.jpg',
  },
  posadas: {
    src: './img/posadas.webp',
    alt: 'Rozbijanie piñaty podczas meksykańskiej posady',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Breaking_the_pi%C3%B1ata_at_a_traditional_Mexican_Posada.jpg',
  },
  guelaguetza: {
    src: './img/guelaguetza.webp',
    alt: 'Uczestniczka Guelaguetzy w stroju z Oaxaca',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Participante_de_la_Guelaguetza._Oaxaca,_2013.jpg',
  },
  carnaval: {
    src: './img/carnaval.webp',
    alt: 'Tancerze comparsy na karnawale w Veracruz',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Silueta_de_comparsa_en_el_Carnaval_de_Veracruz_2023.jpg',
  },
  rosalia: {
    src: './img/rosalia.webp',
    alt: 'Rosalía na koncercie w Palau Sant Jordi',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Concert_de_Rosal%C3%ADa_al_Palau_Sant_Jordi_de_Barcelona_01.jpg',
  },
  castellers: {
    src: './img/castellers.webp',
    alt: 'Castellers budujący ludzką wieżę w Tarragonie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Castellers_d%27Esplugues_-_Concurs_de_Tarragona_2018_-_44276280085.jpg',
  },
  fandango: {
    src: './img/fandango.webp',
    alt: 'Fandango son jarocho: muzycy i taniec na tarimie',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Fandango_de_Son_Jarocho.jpg',
  },
  selena: {
    src: './img/selena.webp',
    alt: 'Pomnik Seleny Quintanilli',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Selena_Quintanilla_Monument.jpg',
  },
  yamal: {
    src: './img/yamal.webp',
    alt: 'Lamine Yamal w 2025 roku',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Lamine_Yamal_in_2025.jpg',
  },
  chicharito: {
    src: './img/chicharito.webp',
    alt: 'Chicharito na mundialu w Rosji 2018',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Javier_%22Chicharito%22_Hern%C3%A1ndez_praying_at_Russia_2018_FIFA_World_Cup.jpg',
  },
  gasol: {
    src: './img/gasol.webp',
    alt: 'Pau Gasol w walce pod koszem',
    credit: 'Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Pau_Gasol_boxout.jpg',
  },
}
