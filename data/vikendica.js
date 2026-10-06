/*
 * Casa Montana Vlašić Apartments - SVI podaci o smještaju na jednom mjestu (bosanski, engleski i njemački).
 *
 * Svaki tekst je { bs: '...', en: '...', de: '...' }. Ako 'de' fali, njemačka verzija pokaže engleski tekst.
 * Slike idu u assets/img/. Detalji su u README.md.
 *
 * PRIVREMENO: sve označeno sa "PRIVREMENO" je popunjeno okvirno dok vlasnik ne pošalje prave podatke
 * (apartmani, kreveti, cijene, sadržaji, lokacija, kontakt). Prije objave sve mora biti zamijenjeno.
 */
window.VIKENDICA = {
  /* --- osnovno --- */
  name: 'Casa Montana',
  kind: { bs: 'Apartmani', en: 'Apartments', de: 'Ferienwohnungen' },
  place: 'Vlašić',
  title: { bs: 'Casa Montana · Apartmani Vlašić', en: 'Casa Montana · Vlašić Apartments', de: 'Casa Montana · Ferienwohnungen Vlašić' },
  /* PRIVREMENO: kratka rečenica o smještaju */
  tagline: {
    bs: 'Udobni apartmani na Vlašiću, za odmor u svako doba godine.',
    en: 'Comfortable apartments on Vlašić, for a getaway in any season.',
    de: 'Gemütliche Ferienwohnungen auf dem Vlašić, für Urlaub zu jeder Jahreszeit.'
  },
  /* jezici stranice (prvi je zadani): 'bs', 'en', 'de' */
  languages: ['bs', 'en', 'de'],
  badge: { bs: 'Apartmani', en: 'Apartments', de: 'Ferienwohnungen' },
  /* početna sezona: 'auto' (po mjesecu), 'winter' ili 'summer' */
  defaultSeason: 'auto',
  /* demo: true = napomena u footeru i stranica sakrivena od Googlea (za objavu: false i obrisati noindex u index.html) */
  demo: true,
  demoNote: {
    bs: 'Pregled stranice u izradi. Prave fotografije, cijene i kontakt podaci uskoro.',
    en: 'Website preview in progress. Real photos, prices and contact details coming soon.',
    de: 'Vorschau der Website in Arbeit. Echte Fotos, Preise und Kontaktdaten folgen in Kürze.'
  },
  credit: null,
  /* prava slika za prvi ekran (npr. 'assets/img/kuca.webp'); null = ilustracija. Video: heroVideo, heroVideoWebm, heroPoster */
  heroImage: null,

  /* --- kontakt: PRIVREMENO osim Instagrama --- */
  contact: {
    phone: '+387 60 000 0000',
    viber: '+387600000000',
    whatsapp: '387600000000',
    instagram: 'casa.montana.vlasic'
  },

  /* --- brze činjenice: PRIVREMENO --- */
  facts: [
    { icon: 'bed', label: { bs: 'apartmani', en: 'apartments', de: 'Ferienwohnungen' } },
    { icon: 'kitchen', label: { bs: 'kuhinja', en: 'kitchen', de: 'Küche' } },
    { icon: 'parking', label: { bs: 'parking', en: 'parking', de: 'Parkplatz' } },
    { icon: 'wifi', label: { bs: 'Wi-Fi', en: 'Wi-Fi', de: 'WLAN' } }
  ],

  /* --- galerija: ilustracije dok ne stignu prave slike ({ image: 'assets/img/x.webp', label: {...} }) --- */
  gallery: [
    { scene: 'exterior', label: { bs: 'Casa Montana', en: 'Casa Montana', de: 'Casa Montana' } },
    { scene: 'living', label: { bs: 'Dnevni boravak', en: 'Living room', de: 'Wohnzimmer' } },
    { scene: 'bedroom', label: { bs: 'Spavaća soba', en: 'Bedroom', de: 'Schlafzimmer' } },
    { scene: 'kitchen', label: { bs: 'Kuhinja', en: 'Kitchen', de: 'Küche' } },
    { scene: 'bathroom', label: { bs: 'Kupatilo', en: 'Bathroom', de: 'Badezimmer' } },
    { scene: 'view', label: { bs: 'Pogled', en: 'The view', de: 'Die Aussicht' } }
  ],

  /* --- apartmani: PRIVREMENO (broj, kreveti, osobe i opis od vlasnika) --- */
  rooms: [
    { scene: 'bedroom', title: { bs: 'Apartman 1', en: 'Apartment 1', de: 'Ferienwohnung 1' }, beds: { bs: 'Kreveti: uskoro', en: 'Beds: coming soon', de: 'Betten: folgt' }, text: { bs: 'Opis apartmana stiže uskoro.', en: 'Apartment description coming soon.', de: 'Beschreibung folgt in Kürze.' } },
    { scene: 'living', title: { bs: 'Apartman 2', en: 'Apartment 2', de: 'Ferienwohnung 2' }, beds: { bs: 'Kreveti: uskoro', en: 'Beds: coming soon', de: 'Betten: folgt' }, text: { bs: 'Opis apartmana stiže uskoro.', en: 'Apartment description coming soon.', de: 'Beschreibung folgt in Kürze.' } }
  ],
  roomsLead: { bs: 'Izaberite apartman po mjeri.', en: 'Choose the apartment that suits you.', de: 'Wählen Sie die passende Ferienwohnung.' },

  /* --- o smještaju: PRIVREMENO --- */
  about: {
    bs: [
      'Casa Montana su apartmani na Vlašiću, mjesto za odmor u prirodi, zimi uz snijeg i staze, ljeti uz livade i šetnje.',
      'Više o smještaju, apartmanima i sadržajima uskoro.'
    ],
    en: [
      'Casa Montana offers apartments on Vlašić, a place to unwind in nature: snow and slopes in winter, meadows and walks in summer.',
      'More about the apartments and amenities coming soon.'
    ],
    de: [
      'Casa Montana bietet Ferienwohnungen auf dem Vlašić, einen Ort zum Entspannen in der Natur: im Winter Schnee und Pisten, im Sommer Wiesen und Spaziergänge.',
      'Mehr über die Ferienwohnungen und die Ausstattung folgt in Kürze.'
    ]
  },

  /* --- sadržaji: PRIVREMENO --- */
  amenities: [
    { icon: 'wifi', label: { bs: 'Wi-Fi', en: 'Wi-Fi', de: 'WLAN' } },
    { icon: 'parking', label: { bs: 'Parking', en: 'Parking', de: 'Parkplatz' } },
    { icon: 'kitchen', label: { bs: 'Opremljena kuhinja', en: 'Equipped kitchen', de: 'Ausgestattete Küche' } },
    { icon: 'linen', label: { bs: 'Posteljina i peškiri', en: 'Bed linen and towels', de: 'Bettwäsche und Handtücher' } },
    { icon: 'heat', label: { bs: 'Grijanje', en: 'Heating', de: 'Heizung' } },
    { icon: 'tv', label: { bs: 'TV', en: 'TV', de: 'TV' } }
  ],

  /* tekstovi interfejsa prilagođeni apartmanima (umjesto "vikendica" i "sobe") */
  ui: {
    'nav.rooms': { bs: 'Apartmani', en: 'Apartments', de: 'Wohnungen' },
    'nav.about': { bs: 'O nama', en: 'About', de: 'Über uns' },
    roomsTitle: { bs: 'Apartmani', en: 'Apartments', de: 'Ferienwohnungen' },
    askRoom: { bs: 'Pitaj za ovaj apartman', en: 'Ask about this apartment', de: 'Nach dieser Wohnung fragen' },
    roomType: { bs: 'Apartman', en: 'Apartment', de: 'Ferienwohnung' },
    msgRoom: { bs: 'Apartman: {r}.', en: 'Apartment: {r}.', de: 'Ferienwohnung: {r}.' },
    aboutTitle: { bs: 'O nama', en: 'About us', de: 'Über uns' },
    guideRooms: { bs: { one: '{n} apartman', few: '{n} apartmana', other: '{n} apartmana' }, en: { one: '{n} apartment', other: '{n} apartments' }, de: { one: '{n} Ferienwohnung', other: '{n} Ferienwohnungen' } },
    galleryLead: { bs: 'Pogledajte svaki kutak Casa Montane.', en: 'Take a look around Casa Montana.', de: 'Werfen Sie einen Blick in jede Ecke von Casa Montana.' },
    amenitiesLead: { bs: 'Sve što treba za ugodan boravak.', en: 'Everything you need for a comfortable stay.', de: 'Alles für einen angenehmen Aufenthalt.' }
  },

  /* --- cijene: null = na upit (kad stignu cijene, vidi Planinku za primjer sa kalkulatorom) --- */
  pricing: null,
  maxGuests: 8,
  minNights: 1,

  /* --- lokacija: PRIVREMENO (tačan pin i udaljenosti od vlasnika) --- */
  distances: [
    { icon: 'car', place: { bs: 'Travnik', en: 'Travnik', de: 'Travnik' }, time: { bs: '30 min', en: '30 min', de: '30 Min.' } },
    { icon: 'car', place: { bs: 'Sarajevo', en: 'Sarajevo', de: 'Sarajevo' }, time: { bs: '1,5 h', en: '1.5 h', de: '1,5 Std.' } },
    { icon: 'car', place: { bs: 'Banja Luka', en: 'Banja Luka', de: 'Banja Luka' }, time: { bs: '2 h', en: '2 h', de: '2 Std.' } }
  ],
  mapQuery: 'Casa Montana Vlašić',
  locationLead: { bs: 'Na Vlašiću, planini iznad Travnika.', en: 'On Vlašić, the mountain above Travnik.', de: 'Auf dem Vlašić, dem Berg oberhalb von Travnik.' },

  /* --- šta raditi --- */
  activities: {
    winter: [
      { icon: 'ski', title: { bs: 'Skijanje', en: 'Skiing', de: 'Skifahren' }, text: { bs: 'Staze za početnike i iskusne, ski škola i iznajmljivanje opreme na Babanovcu.', en: 'Slopes for beginners and experts, ski school and gear rental at Babanovac.', de: 'Pisten für Anfänger und Fortgeschrittene, Skischule und Ausrüstungsverleih in Babanovac.' } },
      { icon: 'sled', title: { bs: 'Sanjkanje', en: 'Sledding', de: 'Rodeln' }, text: { bs: 'Blagi brežuljci za sanjkanje, idealni za djecu.', en: 'Gentle hills for sledding, perfect for kids.', de: 'Sanfte Hügel zum Rodeln, ideal für Kinder.' } },
      { icon: 'snowshoe', title: { bs: 'Krpljanje', en: 'Snowshoeing', de: 'Schneeschuhwandern' }, text: { bs: 'Tihe staze kroz zasniježenu šumu do vidikovca.', en: 'Quiet trails through the snowy forest to the viewpoint.', de: 'Ruhige Wege durch den verschneiten Wald bis zum Aussichtspunkt.' } }
    ],
    summer: [
      { icon: 'hike', title: { bs: 'Šetnje i planinarenje', en: 'Walks and hiking', de: 'Spaziergänge und Wandern' }, text: { bs: 'Markirane staze kroz livade i borove šume.', en: 'Marked trails through meadows and pine forests.', de: 'Markierte Wege über Wiesen und durch Kiefernwälder.' } },
      { icon: 'view', title: { bs: 'Vidikovci', en: 'Viewpoints', de: 'Aussichtspunkte' }, text: { bs: 'Zalazak sunca sa Paljenika, pogled do Travnika.', en: 'Sunset from Paljenik, with views all the way to Travnik.', de: 'Sonnenuntergang vom Paljenik, mit Blick bis nach Travnik.' } },
      { icon: 'bike', title: { bs: 'Bicikl', en: 'Cycling', de: 'Radfahren' }, text: { bs: 'Planinski putevi za lagane i zahtjevne ture.', en: 'Mountain roads for easy and challenging rides.', de: 'Bergstraßen für leichte und anspruchsvolle Touren.' } }
    ],
    food: {
      title: { bs: 'Vlašićki sir i domaća kuhinja', en: 'Vlašić cheese and home cooking', de: 'Vlašić-Käse und Hausmannskost' },
      text: {
        bs: 'Probajte čuveni vlašićki (travnički) sir, domaći kajmak i pitu. Rado ćemo vam preporučiti najbolje restorane u blizini.',
        en: 'Try the famous Vlašić (Travnik) cheese, homemade kajmak and pies. We are happy to recommend the best restaurants nearby.', de: 'Probieren Sie den berühmten Vlašić-Käse (Travniker Käse), hausgemachten Kajmak und Pita. Gerne empfehlen wir Ihnen die besten Restaurants in der Nähe.'
      }
    }
  },

  /* vrijeme uživo (open-meteo.com), koordinate Babanovca */
  weather: { lat: 44.29, lon: 17.65, title: { bs: 'Trenutno na Vlašiću', en: 'Right now on Vlašić', de: 'Aktuell auf dem Vlašić' } },

  /* --- kako doći: PRIVREMENO dok ne stigne Google Maps link --- */
  directions: {
    destination: 'Casa Montana Vlašić',
    steps: [
      { icon: 'car', text: { bs: 'Iz Travnika: put prema Turbetu, pa skretanje za Vlašić. Oko 30 minuta vožnje.', en: 'From Travnik: head to Turbe, then turn off for Vlašić. About a 30 minute drive.', de: 'Von Travnik: Richtung Turbe, dann Abzweigung nach Vlašić. Etwa 30 Minuten Fahrt.' } },
      { icon: 'road', text: { bs: 'Iz Sarajeva oko 1,5 do 2 sata, iz Banje Luke oko 2 sata vožnje.', en: 'About 1.5 to 2 hours from Sarajevo and about 2 hours from Banja Luka.', de: 'Etwa 1,5 bis 2 Stunden von Sarajevo und etwa 2 Stunden von Banja Luka.' } }
    ],
    tip: { bs: 'Zimi obavezno zimske gume, a lanci u autu dobro dođu. Javite nam se prije polaska ako niste sigurni za stanje puta.', en: 'In winter, winter tyres are a must and snow chains are handy. Call us before you set off if you are unsure about the roads.', de: 'Im Winter sind Winterreifen Pflicht und Schneeketten nützlich. Rufen Sie uns vor der Abfahrt an, wenn Sie sich bei den Straßenverhältnissen unsicher sind.' }
  },

  /* utisci gostiju i pitanja: prazno = sekcija se ne prikazuje (dodati kad ih vlasnik pošalje) */
  reviews: [],
  faq: []
};
