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
  defaultSeason: 'winter',
  /* demo: true = napomena u footeru i stranica sakrivena od Googlea (za objavu: false i obrisati noindex u index.html) */
  demo: false,
  demoNote: {
    bs: 'Pregled stranice u izradi. Ostale fotografije i kontakt podaci uskoro.',
    en: 'Website preview in progress. More photos and contact details coming soon.',
    de: 'Vorschau der Website in Arbeit. Weitere Fotos und Kontaktdaten folgen in Kürze.'
  },
  credit: null,
  /* "O nama": velika i mala slika */
  aboutImages: [
    { image: 'assets/img/a1-sto.webp', thumb: 'assets/img/a1-sto-800.webp', label: { bs: 'Postavljen sto', en: 'Table set for dinner', de: 'Gedeckter Tisch' } },
    { image: 'assets/img/a1-krevet.webp', thumb: 'assets/img/a1-krevet-800.webp', label: { bs: 'Bračni krevet', en: 'Double bed', de: 'Doppelbett' } }
  ],
  /* prava slika za prvi ekran (uspravna za mobitel) i heroImageWide za laptop; null = ilustracija. Video: heroVideo, heroVideoWebm, heroPoster */
  heroImage: 'assets/img/hero-mobitel.webp',
  heroImageWide: 'assets/img/hero-laptop.webp',
  /* bez prekidača zima/ljeto i bez pahulja i listića preko fotografije */
  seasons: false,
  effects: false,
  /* crtež kuće na prvom ekranu: 'house' = kuća sa strmim krovom kao prava Casa Montana, inače A-frame vikendica */
  houseStyle: 'house',
  /* istaknuto na prvom ekranu */
  heroChips: [
    { icon: 'fire', label: { bs: 'Kamin', en: 'Fireplace', de: 'Kamin' } },
    { icon: 'guests', label: { bs: 'Do 14 osoba', en: 'Up to 14 guests', de: 'Bis zu 14 Personen' } },
    { icon: 'pin', label: { bs: 'Centar Babanovca', en: 'Centre of Babanovac', de: 'Zentrum von Babanovac' } }
  ],

  /* --- kontakt: dva broja, oba na Viberu i WhatsAppu. Prvi je glavni (na njemačkoj verziji stranice prvi je njemački broj) --- */
  contact: {
    numbers: [
      { id: 'ba', label: { bs: 'Broj u BiH', en: 'Bosnian number', de: 'Nummer in Bosnien' }, phone: '+387 62 429 330', viber: '+38762429330', whatsapp: '38762429330' },
      { id: 'de', label: { bs: 'Broj u Njemačkoj', en: 'German number', de: 'Nummer in Deutschland' }, phone: '+49 172 9216987', viber: '+491729216987', whatsapp: '491729216987' }
    ],
    email: 'casamontanavlasic@gmail.com',
    instagram: 'casa.montana.vlasic'
  },

  /* --- brze činjenice --- */
  facts: [
    { icon: 'bed', value: '2', label: { bs: 'apartmana', en: 'apartments', de: 'Ferienwohnungen' } },
    { icon: 'guests', value: '14', label: { bs: 'osoba u cijeloj kući', en: 'guests in the whole house', de: 'Personen im ganzen Haus' } },
    { icon: 'fire', label: { bs: 'kamin', en: 'fireplace', de: 'Kamin' } },
    { icon: 'pin', label: { bs: 'centar Babanovca', en: 'centre of Babanovac', de: 'Zentrum von Babanovac' } }
  ],

  /* --- galerija: prave fotografije u tri taba (group: a1, a2, out); slike 1600px + manja -800 verzija --- */
  galleryTabs: [
    { id: 'a1', label: { bs: 'Apartman 1', en: 'Apartment 1', de: 'Ferienwohnung 1' } },
    { id: 'a2', label: { bs: 'Apartman 2', en: 'Apartment 2', de: 'Ferienwohnung 2' } },
    { id: 'out', label: { bs: 'Kuća i pogled', en: 'House and view', de: 'Haus und Aussicht' } }
  ],
  gallery: [
    { image: 'assets/img/a1-dnevna.webp', thumb: 'assets/img/a1-dnevna-800.webp', group: 'a1', label: { bs: 'Dnevna soba', en: 'Living room', de: 'Wohnzimmer' } },
    { image: 'assets/img/a1-trpezarija.webp', thumb: 'assets/img/a1-trpezarija-800.webp', group: 'a1', label: { bs: 'Trpezarija uz kamin', en: 'Dining area by the fireplace', de: 'Essbereich am Kamin' } },
    { image: 'assets/img/a1-sofa.webp', thumb: 'assets/img/a1-sofa-800.webp', group: 'a1', label: { bs: 'Ugaona garnitura', en: 'Corner sofa', de: 'Ecksofa' } },
    { image: 'assets/img/a1-kamin.webp', thumb: 'assets/img/a1-kamin-800.webp', group: 'a1', label: { bs: 'Kamin', en: 'Fireplace', de: 'Kamin' } },
    { image: 'assets/img/a1-zid.webp', thumb: 'assets/img/a1-zid-800.webp', group: 'a1', label: { bs: 'Detalji', en: 'Details', de: 'Details' } },
    { image: 'assets/img/a1-spavaca.webp', thumb: 'assets/img/a1-spavaca-800.webp', group: 'a1', label: { bs: 'Spavaća soba', en: 'Bedroom', de: 'Schlafzimmer' } },
    { image: 'assets/img/a1-krevet.webp', thumb: 'assets/img/a1-krevet-800.webp', group: 'a1', label: { bs: 'Bračni krevet', en: 'Double bed', de: 'Doppelbett' } },
    { image: 'assets/img/a1-kuhinja.webp', thumb: 'assets/img/a1-kuhinja-800.webp', group: 'a1', label: { bs: 'Kuhinja', en: 'Kitchen', de: 'Küche' } },
    { image: 'assets/img/a1-kupatilo.webp', thumb: 'assets/img/a1-kupatilo-800.webp', group: 'a1', label: { bs: 'Kupatilo', en: 'Bathroom', de: 'Badezimmer' } },
    { image: 'assets/img/a1-tv.webp', thumb: 'assets/img/a1-tv-800.webp', group: 'a1', label: { bs: 'Kutak sa TV-om', en: 'TV corner', de: 'TV-Ecke' } },
    { image: 'assets/img/a1-sto.webp', thumb: 'assets/img/a1-sto-800.webp', group: 'a1', label: { bs: 'Postavljen sto', en: 'Table set for dinner', de: 'Gedeckter Tisch' } },
    { image: 'assets/img/a2-boravak.webp', thumb: 'assets/img/a2-boravak-800.webp', group: 'a2', label: { bs: 'Dnevni boravak', en: 'Living room', de: 'Wohnzimmer' } },
    { image: 'assets/img/a2-trpezarija-kamin.webp', thumb: 'assets/img/a2-trpezarija-kamin-800.webp', group: 'a2', label: { bs: 'Trpezarija i kamin', en: 'Dining area and fireplace', de: 'Essbereich und Kamin' } },
    { image: 'assets/img/a2-sto-lampe.webp', thumb: 'assets/img/a2-sto-lampe-800.webp', group: 'a2', label: { bs: 'Sto za cijelo društvo', en: 'A table for the whole group', de: 'Ein Tisch für die ganze Gruppe' } },
    { image: 'assets/img/a2-svijece.webp', thumb: 'assets/img/a2-svijece-800.webp', group: 'a2', label: { bs: 'Večera uz svijeće', en: 'Dinner by candlelight', de: 'Abendessen bei Kerzenlicht' } },
    { image: 'assets/img/a2-trpezarija.webp', thumb: 'assets/img/a2-trpezarija-800.webp', group: 'a2', label: { bs: 'Trpezarija pod krovnim prozorom', en: 'Dining area under the skylight', de: 'Essbereich unter dem Dachfenster' } },
    { image: 'assets/img/a2-sofa.webp', thumb: 'assets/img/a2-sofa-800.webp', group: 'a2', label: { bs: 'Ugaona garnitura', en: 'Corner sofa', de: 'Ecksofa' } },
    { image: 'assets/img/a2-tv.webp', thumb: 'assets/img/a2-tv-800.webp', group: 'a2', label: { bs: 'Kutak sa TV-om', en: 'TV corner', de: 'TV-Ecke' } },
    { image: 'assets/img/a2-kamin.webp', thumb: 'assets/img/a2-kamin-800.webp', group: 'a2', label: { bs: 'Kamin', en: 'Fireplace', de: 'Kamin' } },
    { image: 'assets/img/a2-stepenice.webp', thumb: 'assets/img/a2-stepenice-800.webp', group: 'a2', label: { bs: 'Stepenice prema potkrovlju', en: 'Stairs to the attic', de: 'Treppe zum Dachgeschoss' } },
    { image: 'assets/img/a2-sto.webp', thumb: 'assets/img/a2-sto-800.webp', group: 'a2', label: { bs: 'Postavljen sto', en: 'Table set for dinner', de: 'Gedeckter Tisch' } },
    { image: 'assets/img/a2-kuhinja.webp', thumb: 'assets/img/a2-kuhinja-800.webp', group: 'a2', label: { bs: 'Kuhinja', en: 'Kitchen', de: 'Küche' } },
    { image: 'assets/img/a2-spavaca.webp', thumb: 'assets/img/a2-spavaca-800.webp', group: 'a2', label: { bs: 'Spavaća soba', en: 'Bedroom', de: 'Schlafzimmer' } },
    { image: 'assets/img/a2-detalj.webp', thumb: 'assets/img/a2-detalj-800.webp', group: 'a2', label: { bs: 'Detalji', en: 'Details', de: 'Details' } },
    { image: 'assets/img/a2-potkrovlje.webp', thumb: 'assets/img/a2-potkrovlje-800.webp', group: 'a2', label: { bs: 'Potkrovlje', en: 'Attic bedroom', de: 'Schlafzimmer im Dachgeschoss' } },
    { image: 'assets/img/a2-potkrovlje-krevet.webp', thumb: 'assets/img/a2-potkrovlje-krevet-800.webp', group: 'a2', label: { bs: 'Bračni krevet u potkrovlju', en: 'Double bed in the attic', de: 'Doppelbett im Dachgeschoss' } },
    { image: 'assets/img/a2-kreveti.webp', thumb: 'assets/img/a2-kreveti-800.webp', group: 'a2', label: { bs: 'Kreveti pod krovom', en: 'Beds under the roof', de: 'Betten unter dem Dach' } },
    { image: 'assets/img/a2-balkonska-vrata.webp', thumb: 'assets/img/a2-balkonska-vrata-800.webp', group: 'a2', label: { bs: 'Izlaz na balkon', en: 'Door to the balcony', de: 'Tür zum Balkon' } },
    { image: 'assets/img/kuca-sprijeda.webp', thumb: 'assets/img/kuca-sprijeda-800.webp', group: 'out', label: { bs: 'Casa Montana', en: 'Casa Montana', de: 'Casa Montana' } },
    { image: 'assets/img/kuca-strana.webp', thumb: 'assets/img/kuca-strana-800.webp', group: 'out', label: { bs: 'Kuća u zalasku sunca', en: 'The house at sunset', de: 'Das Haus bei Sonnenuntergang' } },
    { image: 'assets/img/pogled-balkon.webp', thumb: 'assets/img/pogled-balkon-800.webp', group: 'out', label: { bs: 'Pogled sa balkona', en: 'View from the balcony', de: 'Blick vom Balkon' } },
    { image: 'assets/img/kuca-zabat.webp', thumb: 'assets/img/kuca-zabat-800.webp', group: 'out', label: { bs: 'Balkoni', en: 'Balconies', de: 'Balkone' } },
    { image: 'assets/img/pogled-prozor.webp', thumb: 'assets/img/pogled-prozor-800.webp', group: 'out', label: { bs: 'Jutro uz pogled na šumu', en: 'Morning with a forest view', de: 'Morgen mit Blick auf den Wald' } }
  ],

  /* --- apartmani (od vlasnika): Apartman 1 do 4 osobe, Apartman 2 do 10 osoba, cijela vikendica do 14 osoba.
     Sve tri kartice imaju prave slike. Raspored kreveta dodati kad ga pošalju. --- */
  rooms: [
    {
      gallery: 'a1', scene: 'lounge', image: 'assets/img/a1-dnevna.webp', thumb: 'assets/img/a1-dnevna-800.webp', label: { bs: 'Apartman 1, dnevna soba', en: 'Apartment 1, living room', de: 'Ferienwohnung 1, Wohnzimmer' }, guests: 4,
      title: { bs: 'Apartman 1', en: 'Apartment 1', de: 'Ferienwohnung 1' },
      beds: { bs: 'Za par ili manju porodicu', en: 'For a couple or a small family', de: 'Für Paare oder kleine Familien' },
      text: { bs: 'Dnevna soba, kuhinja, spavaća soba i moderno kupatilo. Topao i miran apartman za vikend u dvoje ili porodični odmor.', en: 'Living room, kitchen, bedroom and a modern bathroom. A warm, quiet apartment for a weekend for two or a family break.', de: 'Wohnzimmer, Küche, Schlafzimmer und ein modernes Bad. Eine warme, ruhige Wohnung für ein Wochenende zu zweit oder einen Familienurlaub.' }
    },
    {
      gallery: 'a2', scene: 'living', image: 'assets/img/a2-boravak.webp', thumb: 'assets/img/a2-boravak-800.webp', label: { bs: 'Apartman 2, dnevni boravak', en: 'Apartment 2, living room', de: 'Ferienwohnung 2, Wohnzimmer' }, guests: 10,
      title: { bs: 'Apartman 2', en: 'Apartment 2', de: 'Ferienwohnung 2' },
      beds: { bs: 'Za veću porodicu ili društvo', en: 'For a bigger family or a group of friends', de: 'Für größere Familien oder Freundesgruppen' },
      text: { bs: 'Prostran apartman na dva nivoa: dnevni boravak sa kaminom, trpezarija sa velikim stolom, kuhinja i spavaća soba, a gore potkrovlje sa krevetima pod krovom i izlazom na balkon.', en: 'A spacious apartment on two levels: a living room with a fireplace, a dining area with a big table, a kitchen and a bedroom, plus an attic with beds under the roof and a door to the balcony.', de: 'Eine geräumige Wohnung auf zwei Ebenen: Wohnzimmer mit Kamin, Essbereich mit großem Tisch, Küche und Schlafzimmer, dazu ein Dachgeschoss mit Betten unter dem Dach und Zugang zum Balkon.' }
    },
    {
      gallery: 'out', scene: 'exterior', image: 'assets/img/kuca-strana.webp', thumb: 'assets/img/kuca-strana-800.webp', label: { bs: 'Casa Montana izvana', en: 'Casa Montana from outside', de: 'Casa Montana von außen' }, guests: 14,
      title: { bs: 'Cijela vikendica', en: 'The whole house', de: 'Das ganze Haus' },
      beds: { bs: 'Oba apartmana, samo za vas', en: 'Both apartments, just for you', de: 'Beide Wohnungen, nur für Sie' },
      text: { bs: 'Cijela Casa Montana bez drugih gostiju: za velike porodice, proslave i zimovanja sa prijateljima.', en: 'All of Casa Montana with no other guests: for large families, celebrations and winter trips with friends.', de: 'Die ganze Casa Montana ohne andere Gäste: für große Familien, Feiern und Winterurlaub mit Freunden.' }
    }
  ],
  roomsLead: { bs: 'Apartman za četvoro, za deset osoba ili cijela vikendica za do 14 gostiju.', en: 'An apartment for four, one for ten, or the whole house for up to 14 guests.', de: 'Eine Wohnung für vier, eine für zehn oder das ganze Haus für bis zu 14 Gäste.' },

  /* --- o smještaju --- */
  about: {
    bs: [
      'Vlašić nije samo mjesto na koje dođete. To je mjesto gdje usporite. Casa Montana su planinski apartmani u samom centru Babanovca, napravljeni upravo za trenutke kada želite samo da se opustite.',
      'Jutarnja kafa bez žurbe, toplina kamina nakon dana provedenog u prirodi, pogled, tišina i osjećaj da ste pobjegli od svakodnevice. Svaki detalj smo birali s posebnom pažnjom, od materijala i rasvjete do prve jutarnje kafe.',
      'Možete rezervisati jedan apartman ili cijelu vikendicu za do 14 osoba. Upit šaljete direktno nama, na Viber ili WhatsApp, bez posrednika i provizije. Vi samo dođite, za ostalo smo se pobrinuli.'
    ],
    en: [
      'Vlašić is not just a place you visit. It is a place where you slow down. Casa Montana offers mountain apartments right in the centre of Babanovac, made for the moments when all you want is to relax.',
      'An unhurried morning coffee, the warmth of the fireplace after a day outdoors, the view, the quiet and the feeling of leaving everyday life behind. We chose every detail with care, from materials and lighting to your first morning coffee.',
      'You can book a single apartment or the whole house for up to 14 guests. Send your enquiry straight to us on Viber or WhatsApp, with no middleman and no commission. Just come, we have taken care of the rest.'
    ],
    de: [
      'Der Vlašić ist nicht einfach ein Ort, den man besucht. Hier kommt man zur Ruhe. Casa Montana bietet Berg-Ferienwohnungen mitten im Zentrum von Babanovac, gemacht für Momente, in denen Sie einfach entspannen möchten.',
      'Ein Morgenkaffee ohne Eile, die Wärme des Kamins nach einem Tag in der Natur, der Ausblick, die Stille und das Gefühl, dem Alltag entkommen zu sein. Jedes Detail haben wir mit Sorgfalt gewählt, von Materialien und Licht bis zum ersten Morgenkaffee.',
      'Sie können eine einzelne Wohnung oder das ganze Haus für bis zu 14 Personen buchen. Ihre Anfrage geht direkt an uns, per Viber oder WhatsApp, ohne Vermittler und ohne Provision. Kommen Sie einfach, um den Rest haben wir uns gekümmert.'
    ]
  },

  /* --- pogled: sekcija sa slikom kroz balkonska vrata --- */
  view: {
    eyebrow: { bs: 'Pogled', en: 'The view', de: 'Die Aussicht' },
    title: { bs: 'Jutro uz planinu', en: 'Mornings with a mountain view', de: 'Morgens mit Blick auf die Berge' },
    images: [
      { image: 'assets/img/pogled-prozor.webp', thumb: 'assets/img/pogled-prozor-800.webp', label: { bs: 'Jutro uz pogled na šumu', en: 'Morning with a forest view', de: 'Morgen mit Blick auf den Wald' } },
      { image: 'assets/img/kuca-zabat.webp', thumb: 'assets/img/kuca-zabat-800.webp', label: { bs: 'Balkoni', en: 'Balconies', de: 'Balkone' } }
    ],
    text: {
      bs: ['Otvorite balkonska vrata i ispred vas su jele, šuma i vrhovi Vlašića.', 'Jutarnja kafa na balkonu, svjež planinski zrak i tišina. Upravo zbog toga ljudi dolaze na planinu.'],
      en: ['Open the balcony door and you will see fir trees, forest and the peaks of Vlašić.', 'Morning coffee on the balcony, fresh mountain air and quiet. This is exactly why people come to the mountain.'],
      de: ['Öffnen Sie die Balkontür und vor Ihnen liegen Tannen, Wald und die Gipfel des Vlašić.', 'Morgenkaffee auf dem Balkon, frische Bergluft und Ruhe. Genau deshalb kommt man in die Berge.']
    }
  },

  /* --- sadržaji: kamin, kafe aparati, podno grijanje, toplotna pumpa i kupatilo potvrđeni (Instagram);
     Wi-Fi, parking, kuhinja, posteljina i TV PROVJERITI sa vlasnicima --- */
  amenities: [
    { icon: 'fire', label: { bs: 'Kamin', en: 'Fireplace', de: 'Kamin' } },
    { icon: 'coffee', label: { bs: 'Espresso aparati', en: 'Espresso machines', de: 'Espressomaschinen' } },
    { icon: 'heat', label: { bs: 'Podno grijanje i toplotna pumpa', en: 'Underfloor heating and heat pump', de: 'Fußbodenheizung und Wärmepumpe' } },
    { icon: 'bath', label: { bs: 'Moderno kupatilo sa tušem', en: 'Modern bathroom with shower', de: 'Modernes Bad mit Dusche' } },
    { icon: 'kitchen', label: { bs: 'Opremljena kuhinja', en: 'Equipped kitchen', de: 'Ausgestattete Küche' } },
    { icon: 'parking', label: { bs: 'Parking', en: 'Parking', de: 'Parkplatz' } },
    { icon: 'wifi', label: { bs: 'Wi-Fi', en: 'Wi-Fi', de: 'WLAN' } },
    { icon: 'linen', label: { bs: 'Posteljina i peškiri', en: 'Bed linen and towels', de: 'Bettwäsche und Handtücher' } },
    { icon: 'tv', label: { bs: 'TV', en: 'TV', de: 'TV' } }
  ],

  /* tekstovi interfejsa prilagođeni apartmanima (umjesto "vikendica" i "sobe") */
  ui: {
    'nav.rooms': { bs: 'Apartmani', en: 'Apartments', de: 'Wohnungen' },
    'nav.about': { bs: 'O nama', en: 'About', de: 'Über uns' },
    roomsTitle: { bs: 'Apartmani', en: 'Apartments', de: 'Ferienwohnungen' },
    askRoom: { bs: 'Pitaj za ovaj apartman', en: 'Ask about this apartment', de: 'Nach dieser Wohnung fragen' },
    roomPhotos: { bs: 'Slike', en: 'Photos', de: 'Fotos' },
    roomType: { bs: 'Apartman', en: 'Apartment', de: 'Ferienwohnung' },
    msgRoom: { bs: 'Apartman: {r}.', en: 'Apartment: {r}.', de: 'Ferienwohnung: {r}.' },
    aboutTitle: { bs: 'O nama', en: 'About us', de: 'Über uns' },
    guideRooms: { bs: { one: '{n} apartman', few: '{n} apartmana', other: '{n} apartmana' }, en: { one: '{n} apartment', other: '{n} apartments' }, de: { one: '{n} Ferienwohnung', other: '{n} Ferienwohnungen' } },
    galleryLead: { bs: 'Pogledajte svaki apartman i kuću izvana.', en: 'Take a look at each apartment and the house from outside.', de: 'Sehen Sie sich jede Wohnung und das Haus von außen an.' },
    sendTo: { bs: 'Pošalji na broj', en: 'Send to', de: 'Senden an' },
    amenitiesLead: { bs: 'Sve što treba za ugodan boravak.', en: 'Everything you need for a comfortable stay.', de: 'Alles für einen angenehmen Aufenthalt.' }
  },

  /* --- cijene: null = na upit (kad stignu cijene, vidi Planinku za primjer sa kalkulatorom) --- */
  pricing: null,
  maxGuests: 14,
  minNights: 1,

  /* --- lokacija: Babanovac, tačan pin je mapUrl --- */
  distances: [
    { icon: 'ski', place: { bs: 'Ski staze Babanovac', en: 'Babanovac ski slopes', de: 'Skipisten Babanovac' }, time: { bs: 'u blizini', en: 'nearby', de: 'in der Nähe' } },
    { icon: 'car', place: { bs: 'Travnik', en: 'Travnik', de: 'Travnik' }, time: { bs: '35 min', en: '35 min', de: '35 Min.' } },
    { icon: 'car', place: { bs: 'Sarajevo', en: 'Sarajevo', de: 'Sarajevo' }, time: { bs: '2 h', en: '2 h', de: '2 Std.' } },
    { icon: 'car', place: { bs: 'Banja Luka', en: 'Banja Luka', de: 'Banja Luka' }, time: { bs: '2 h', en: '2 h', de: '2 Std.' } }
  ],
  mapQuery: 'Babanovac, Vlašić',
  /* tačna lokacija kuće (od vlasnika) */
  mapUrl: 'https://maps.app.goo.gl/5Cy8VCSUDwaumFW18',
  locationLead: { bs: 'U samom centru Babanovca, na Vlašiću, planini iznad Travnika.', en: 'Right in the centre of Babanovac on Vlašić, the mountain above Travnik.', de: 'Mitten im Zentrum von Babanovac auf dem Vlašić, dem Berg oberhalb von Travnik.' },

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

  /* --- kako doći: do Babanovca, dugme vodi na tačan pin (mapUrl) --- */
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
