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
  kind: { bs: 'Planinski apartmani', en: 'Mountain apartments', de: 'Berg-Ferienwohnungen' },
  place: 'Vlašić',
  title: { bs: 'Casa Montana Vlašić Apartmani', en: 'Casa Montana Vlašić Apartments', de: 'Casa Montana Vlašić Ferienwohnungen' },
  tagline: {
    bs: 'Kamin, mir i pogled na planinu.',
    en: 'A fireplace, peace and quiet, and a view of the mountains.',
    de: 'Kamin, Ruhe und Blick auf die Berge.'
  },
  /* jezici stranice (prvi je zadani): 'bs', 'en', 'de' */
  languages: ['bs', 'en', 'de'],
  badge: { bs: 'Babanovac', en: 'Babanovac', de: 'Babanovac' },
  /* početna sezona: 'auto' (po mjesecu), 'winter' ili 'summer' */
  defaultSeason: 'auto',
  /* demo: true = napomena u footeru i stranica sakrivena od Googlea (za objavu: false i obrisati noindex u index.html) */
  demo: true,
  demoNote: {
    bs: 'Pregled stranice u izradi. Prave fotografije i kontakt podaci uskoro.',
    en: 'Website preview in progress. Real photos and contact details coming soon.',
    de: 'Vorschau der Website in Arbeit. Echte Fotos und Kontaktdaten folgen in Kürze.'
  },
  credit: null,
  /* prava slika za prvi ekran (npr. 'assets/img/kuca.webp'); null = ilustracija. Video: heroVideo, heroVideoWebm, heroPoster */
  heroImage: null,
  /* istaknuto na prvom ekranu */
  heroChips: [
    { icon: 'fire', label: { bs: 'Kamin', en: 'Fireplace', de: 'Kamin' } },
    { icon: 'guests', label: { bs: 'Do 14 osoba', en: 'Up to 14 guests', de: 'Bis zu 14 Personen' } },
    { icon: 'ski', label: { bs: 'Babanovac', en: 'Babanovac', de: 'Babanovac' } }
  ],

  /* --- kontakt: PRIVREMENO osim Instagrama (vlasnici šalju broj telefona i email) --- */
  contact: {
    phone: '+387 60 000 0000',
    viber: '+387600000000',
    whatsapp: '387600000000',
    instagram: 'casa.montana.vlasic'
  },

  /* --- brze činjenice --- */
  facts: [
    { icon: 'bed', value: '2', label: { bs: 'apartmana', en: 'apartments', de: 'Ferienwohnungen' } },
    { icon: 'guests', value: '14', label: { bs: 'osoba u cijeloj kući', en: 'guests in the whole house', de: 'Personen im ganzen Haus' } },
    { icon: 'fire', label: { bs: 'kamin', en: 'fireplace', de: 'Kamin' } },
    { icon: 'parking', label: { bs: 'parking', en: 'parking', de: 'Parkplatz' } }
  ],

  /* --- galerija: ilustracije dok ne stignu prave slike ({ image: 'assets/img/x.webp', label: {...} }) --- */
  gallery: [
    { scene: 'exterior', label: { bs: 'Casa Montana', en: 'Casa Montana', de: 'Casa Montana' } },
    { scene: 'living', label: { bs: 'Dnevni boravak sa kaminom', en: 'Living room with fireplace', de: 'Wohnzimmer mit Kamin' } },
    { scene: 'bedroom', label: { bs: 'Spavaća soba', en: 'Bedroom', de: 'Schlafzimmer' } },
    { scene: 'kitchen', label: { bs: 'Kuhinja', en: 'Kitchen', de: 'Küche' } },
    { scene: 'bathroom', label: { bs: 'Kupatilo', en: 'Bathroom', de: 'Badezimmer' } },
    { scene: 'view', label: { bs: 'Pogled na planinu', en: 'Mountain view', de: 'Blick auf die Berge' } }
  ],

  /* --- apartmani (od vlasnika): Apartman 1 do 4 osobe, Apartman 2 do 10 osoba, cijela vikendica do 14 osoba.
     Slike stižu za 5-6 dana; do tada ilustracije. Raspored kreveta dodati kad ga pošalju. --- */
  rooms: [
    {
      scene: 'bedroom', guests: 4,
      title: { bs: 'Apartman 1', en: 'Apartment 1', de: 'Ferienwohnung 1' },
      beds: { bs: 'Za par ili manju porodicu', en: 'For a couple or a small family', de: 'Für Paare oder kleine Familien' },
      text: { bs: 'Topao i miran apartman za vikend u dvoje ili porodični odmor na planini.', en: 'A warm, quiet apartment for a weekend for two or a family break in the mountains.', de: 'Eine warme, ruhige Wohnung für ein Wochenende zu zweit oder einen Familienurlaub in den Bergen.' }
    },
    {
      scene: 'living', guests: 10,
      title: { bs: 'Apartman 2', en: 'Apartment 2', de: 'Ferienwohnung 2' },
      beds: { bs: 'Za veću porodicu ili društvo', en: 'For a bigger family or a group of friends', de: 'Für größere Familien oder Freundesgruppen' },
      text: { bs: 'Prostran apartman na etaži, mjesta za cijelo društvo, za duge večeri i zajedničke ručkove.', en: 'A spacious apartment over a whole floor, with room for the whole group, long evenings and shared meals.', de: 'Eine geräumige Wohnung über eine ganze Etage, mit Platz für die ganze Gruppe, lange Abende und gemeinsame Mahlzeiten.' }
    },
    {
      scene: 'exterior', guests: 14,
      title: { bs: 'Cijela vikendica', en: 'The whole house', de: 'Das ganze Haus' },
      beds: { bs: 'Oba apartmana, samo za vas', en: 'Both apartments, just for you', de: 'Beide Wohnungen, nur für Sie' },
      text: { bs: 'Cijela Casa Montana bez drugih gostiju: za velike porodice, proslave i zimovanja sa prijateljima.', en: 'All of Casa Montana with no other guests: for large families, celebrations and winter trips with friends.', de: 'Die ganze Casa Montana ohne andere Gäste: für große Familien, Feiern und Winterurlaub mit Freunden.' }
    }
  ],
  roomsLead: { bs: 'Apartman za četvoro, za deset osoba ili cijela vikendica za do 14 gostiju.', en: 'An apartment for four, one for ten, or the whole house for up to 14 guests.', de: 'Eine Wohnung für vier, eine für zehn oder das ganze Haus für bis zu 14 Gäste.' },

  /* --- o smještaju --- */
  about: {
    bs: [
      'Casa Montana su planinski apartmani na Vlašiću, na Babanovcu. Mjesto za one koji traže kamin, mir i pogled na planinu, daleko od gužve, a opet blizu staza i šetnica.',
      'Zimi se dan završava uz vatru u kaminu poslije skijanja, a ljeti uz zalazak sunca i svjež planinski zrak.',
      'Možete rezervisati jedan apartman ili cijelu vikendicu za do 14 osoba. Upit šaljete direktno nama, na Viber ili WhatsApp, bez posrednika i provizije.'
    ],
    en: [
      'Casa Montana offers mountain apartments on Vlašić, in Babanovac. A place for anyone looking for a fireplace, peace and quiet and a view of the mountains, away from the crowds yet close to the slopes and trails.',
      'In winter the day ends by the fire after skiing; in summer, with the sunset and fresh mountain air.',
      'You can book a single apartment or the whole house for up to 14 guests. Send your enquiry straight to us on Viber or WhatsApp, with no middleman and no commission.'
    ],
    de: [
      'Casa Montana bietet Berg-Ferienwohnungen auf dem Vlašić, in Babanovac. Ein Ort für alle, die Kamin, Ruhe und Blick auf die Berge suchen, abseits vom Trubel und doch nah an Pisten und Wanderwegen.',
      'Im Winter endet der Tag nach dem Skifahren am Kaminfeuer, im Sommer mit dem Sonnenuntergang und frischer Bergluft.',
      'Sie können eine einzelne Wohnung oder das ganze Haus für bis zu 14 Personen buchen. Ihre Anfrage geht direkt an uns, per Viber oder WhatsApp, ohne Vermittler und ohne Provision.'
    ]
  },

  /* --- sadržaji: kamin i parking potvrđeni, ostalo PROVJERITI sa vlasnicima --- */
  amenities: [
    { icon: 'fire', label: { bs: 'Kamin', en: 'Fireplace', de: 'Kamin' } },
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
    galleryLead: { bs: 'Pogledajte svaki kutak Casa Montane. Prave fotografije stižu uskoro.', en: 'Take a look around Casa Montana. Real photos coming soon.', de: 'Werfen Sie einen Blick in jede Ecke von Casa Montana. Echte Fotos folgen in Kürze.' },
    amenitiesLead: { bs: 'Sve što treba za ugodan boravak.', en: 'Everything you need for a comfortable stay.', de: 'Alles für einen angenehmen Aufenthalt.' }
  },

  /* --- cijene: null = na upit (kad stignu cijene, vidi Planinku za primjer sa kalkulatorom) --- */
  pricing: null,
  maxGuests: 14,
  minNights: 1,

  /* --- lokacija: Babanovac (tačan Google Maps pin vlasnici šalju naknadno) --- */
  distances: [
    { icon: 'ski', place: { bs: 'Ski staze Babanovac', en: 'Babanovac ski slopes', de: 'Skipisten Babanovac' }, time: { bs: 'u blizini', en: 'nearby', de: 'in der Nähe' } },
    { icon: 'car', place: { bs: 'Travnik', en: 'Travnik', de: 'Travnik' }, time: { bs: '35 min', en: '35 min', de: '35 Min.' } },
    { icon: 'car', place: { bs: 'Sarajevo', en: 'Sarajevo', de: 'Sarajevo' }, time: { bs: '2 h', en: '2 h', de: '2 Std.' } },
    { icon: 'car', place: { bs: 'Banja Luka', en: 'Banja Luka', de: 'Banja Luka' }, time: { bs: '2 h', en: '2 h', de: '2 Std.' } }
  ],
  mapQuery: 'Babanovac, Vlašić',
  locationLead: { bs: 'Na Babanovcu, Vlašić, planina iznad Travnika.', en: 'In Babanovac on Vlašić, the mountain above Travnik.', de: 'In Babanovac auf dem Vlašić, dem Berg oberhalb von Travnik.' },

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

  /* --- kako doći: do Babanovca, dok ne stigne tačan Google Maps link --- */
  directions: {
    destination: 'Babanovac, Vlašić',
    steps: [
      { icon: 'car', text: { bs: 'Iz Travnika: put prema Turbetu, pa skretanje za Vlašić i dalje do Babanovca. Oko 35 minuta vožnje.', en: 'From Travnik: head to Turbe, then turn off for Vlašić and continue to Babanovac. About a 35 minute drive.', de: 'Von Travnik: Richtung Turbe, dann Abzweigung nach Vlašić und weiter bis Babanovac. Etwa 35 Minuten Fahrt.' } },
      { icon: 'road', text: { bs: 'Iz Sarajeva oko 1,5 do 2 sata, iz Banje Luke oko 2 sata vožnje.', en: 'About 1.5 to 2 hours from Sarajevo and about 2 hours from Banja Luka.', de: 'Etwa 1,5 bis 2 Stunden von Sarajevo und etwa 2 Stunden von Banja Luka.' } }
    ],
    tip: { bs: 'Zimi obavezno zimske gume, a lanci u autu dobro dođu. Javite nam se prije polaska ako niste sigurni za stanje puta.', en: 'In winter, winter tyres are a must and snow chains are handy. Call us before you set off if you are unsure about the roads.', de: 'Im Winter sind Winterreifen Pflicht und Schneeketten nützlich. Rufen Sie uns vor der Abfahrt an, wenn Sie sich bei den Straßenverhältnissen unsicher sind.' }
  },

  /* utisci gostiju i pitanja: prazno = sekcija se ne prikazuje (dodati kad ih vlasnik pošalje) */
  reviews: [],
  faq: []
};
