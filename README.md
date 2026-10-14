# Casa Montana Vlašić Apartmani

Web stranica za Casa Montana Vlašić Apartments (Instagram: [@casa.montana.vlasic](https://www.instagram.com/casa.montana.vlasic/)).
Napravljena na osnovu šablona Planinka. Čisti HTML, CSS i JavaScript, bez frameworka, servera i baze.
Jezici: bosanski, engleski i njemački.

## Status: pregled u izradi

Sve u `data/vikendica.js` označeno sa **PRIVREMENO** je okvirno i mora se zamijeniti pravim podacima prije objave.

Dobijeno od vlasnika (upisano):
- [x] naziv: Casa Montana Vlašić Apartmani, planinski apartmani na Vlašiću
- [x] slogan: kamin, mir i pogled na planinu
- [x] Apartman 1 do 4 osobe, Apartman 2 do 10 osoba, cijela vikendica do 14 osoba
- [x] lokacija: centar Babanovca, Vlašić (tačan pin još fali)
- [x] otvaranje 20.10.2026 (na prvom ekranu "Otvaramo 20.10.", poslije otvaranja zamijeniti u `heroChips`)
- [x] sa Instagrama: kafe aparati u oba apartmana, podno grijanje i toplotna pumpa, moderno kupatilo, Apartman 1 ima dnevnu sobu, kuhinju, kupatilo i spavaću sobu
- [x] boje i crteži po uzoru na Instagram: antracit, bronza i krem; kuća sa strmim krovom i solarnim panelima, moderno kupatilo, dnevna soba
- [x] cijene: na upit

Od vlasnika još treba:
- [ ] telefon za poziv, Viber i WhatsApp, email
- [ ] Google Maps link (tačna lokacija)
- [ ] fotografije apartmana (stižu za 5 do 6 dana) i po želji video za prvi ekran
- [ ] raspored kreveta u svakom apartmanu (bračni, odvojeni, kauč)
- [ ] potvrda sadržaja: Wi-Fi, parking, kuhinja, TV, posteljina, ljubimci, roštilj... (kamin, kafe aparati, podno grijanje i kupatilo su potvrđeni)
- [ ] tačne udaljenosti (staza, centar Babanovca)
- [ ] kućni red i pitanja (check-in, check-out, ljubimci...), ako žele tu sekciju

Prije objave na pravom domenu:
- [ ] `demo: false` u `data/vikendica.js`
- [ ] obrisati red `<meta name="robots" content="noindex, nofollow">` u `index.html`
- [ ] adresa stranice u `index.html`, `robots.txt` i `sitemap.xml` (sada `casa-montana.grabafaceit.workers.dev`)
- [ ] nova `assets/og.jpg` (slika za dijeljenje linka) sa pravom fotografijom

## Šta ima

- Prvi ekran sa ilustracijom vikendice, pahuljama (zima) ili listićima (ljeto) i prekidačem zima/ljeto.
- Brze činjenice, galerija (uvećanje, listanje prstom i strelicama), o vikendici, sadržaji.
- Vlastiti **kalendar** za datume i lijepi padajući meniji (broj osoba, soba).
- Dugme **"na vrh"** sa krugom koji pokazuje koliko je stranice pređeno.
- Cijene po sezonama i **kalkulator** koji računa svaku noć po sezoni i doplatu za dodatne osobe.
- **Upit na Viber ili WhatsApp**: otvara aplikaciju sa već napisanom porukom (datumi, osobe, cijena, ime, telefon).
  Datumi, ime i telefon su obavezni: dugmad su zaključana dok sve nije popunjeno, uz listu šta još fali.
- Lokacija sa stilizovanom mapom i "putokazima", šta raditi na Vlašiću, recenzije, pitanja, kontakt.
- Donja traka na mobitelu: Pozovi, Viber, Provjeri.
- **Meni-vodič**: dugme "Meni" otvara ekran sa pločicama za svaki dio stranice (broj slika, soba, cijena "od", udaljenost do staze...),
  brzim kontaktom i postavkama. Pločica "Ovdje ste" pokazuje gdje je gost. Pravi se sam iz sekcija koje postoje.
- Premium animacije: slova imena na prvom ekranu, naslovi sekcija koji izlaze riječ po riječ, slike koje se otkrivaju,
  brojevi koji odbroje, traka napretka u zaglavlju, aktivni link u meniju, traka sa sadržajima koja klizi, planinski greben između sekcija.
- Pamti izabrani jezik i sezonu. Poštuje "smanji pokrete" (reduced motion), radi tastaturom.

## Pokretanje lokalno

```bash
node serve.mjs
```

Pa otvori http://localhost:8080. (Treba samo Node.js, ništa se ne instalira.)

## Struktura

```
index.html            stranica (naslov, opis, SEO, Open Graph, strukturirani podaci)
data/vikendica.js     SVI podaci o vikendici, na oba jezika  <- ovo se mijenja za novog klijenta
js/i18n.js            tekstovi interfejsa (dugmad, naslovi sekcija)
js/app.js             crtanje sekcija, kalkulator, upit, galerija, jezik, sezona, efekti
js/scenes.js          ilustracije (vikendica, enterijeri) umjesto fotografija
js/icons.js           ikonice
css/style.css         izgled; boje obje sezone su na vrhu fajla
assets/               fontovi, favicon, og.jpg (slika za dijeljenje)
_headers              Cloudflare Pages: sigurnosna zaglavlja i keširanje
robots.txt, sitemap.xml
```

## Novi klijent, korak po korak

1. **Podaci:** otvori `data/vikendica.js` i promijeni ime, opis, činjenice, sadržaje, cijene, udaljenosti,
   aktivnosti, recenzije, pitanja i kontakt. Svaki tekst ima `bs`, `en` i (za njemački) `de` verziju.
   - Postavi `demo: false` (sklanja napomenu "Demo stranica").
   - `credit: { name: 'Tvoje ime', url: 'https://...' }` doda potpis u footer.
2. **Cijene:** `pricing.winter` i `pricing.summer` po noćenju, `winterMonths` (mjeseci zimske sezone),
   `baseGuests` (koliko osoba je u cijeni), `extraGuest` (doplata po osobi po noći), `minNights`, `depositPercent`.
3. **Slike:** stavi prave fotografije u `assets/img/` (najbolje WebP, širina oko 1600 px za prvi ekran i 1200 px za galeriju).
   - Prvi ekran: `heroImage: 'assets/img/vikendica.webp'`.
   - Galerija: umjesto `{ scene: 'living', ... }` napiši `{ image: 'assets/img/dnevni-boravak.webp', label: {...} }`.
   - Pretvaranje u WebP: npr. `cwebp -q 80 slika.jpg -o slika.webp` ili bilo koji online alat.
4. **Boje:** po želji promijeni boje u `css/style.css` (dva bloka na vrhu: zima i ljeto).
5. **index.html:** promijeni naslov, opis, Open Graph tekstove, adresu (`planinka.grabafaceit.workers.dev`) i podatke u
   bloku `application/ld+json` (ime, telefon, mjesto, cijene).
6. **Slika za dijeljenje (og.jpg):** 1200 × 630 px, npr. najbolja fotografija vikendice sa imenom.
7. **robots.txt i sitemap.xml:** zamijeni adresu pravim domenom.

## Dodatne opcije (u `data/vikendica.js`)

Sve je opcionalno; ako polje ne postoji, stranica radi kao demo Planinka.

| Polje | Šta radi |
|---|---|
| `heroVideo`, `heroVideoWebm`, `heroPoster` | video preko cijelog prvog ekrana (MP4 + WebM, slika dok se učitava) |
| `heroVideoLoop: false` | video se pusti jednom i stane na zadnjem kadru |
| `heroLogo: { mark, word }` | animirani logo umjesto naslova: znak se otkrije, ime se "ispiše" (bijeli PNG bez pozadine) |
| `brandLogo: { light, dark }` | pravi logo u zaglavlju (bijeli preko prvog ekrana, tamni kad se skrola) i u footeru |
| `heroChips: [{ icon, label }]` | red istaknutih stvari na prvom ekranu (npr. doručak, Wi-Fi, parking) |
| `theme: { bg, accent, ... }` | boje stranice (iste varijable kao u `css/style.css`) |
| `seasons: false` | bez prekidača zima/ljeto (npr. kad klijent ima samo zimske slike) |
| `rooms: [...]` | sekcija "Sobe" (slika, naziv, kreveti, broj osoba, opis, dugme "Pitaj za ovu sobu") i izbor sobe u upitu |
| `pricing: null` | cijene na upit: nema kalkulatora, ostaje izbor datuma i upit na Viber/WhatsApp |
| `maxGuests`, `minNights` | koriste se kad je `pricing: null` |
| `aboutImages: [a, b]` | prave slike u sekciji "O nama" umjesto ilustracija |
| `locationImage`, `locationLead` | slika/mapa klijenta i rečenica u sekciji "Lokacija" |
| `badge`, `demoNote` | tekst na značkici prvog ekrana i napomena u footeru |
| `ui: { kljuc: { bs, en } }` | promjena bilo kojeg teksta interfejsa iz `js/i18n.js` (npr. `aboutTitle`) |
| `reviews: []`, `faq: []`, `activities: null` | prazno = sekcija se ne prikazuje |
| `languages: ['bs', 'en', 'de']` | jezici stranice (prvi je zadani). Tekstovi u podacima imaju `de`; ako fali, pokaže se engleski |
| `ribbon: false` | isključuje traku sa sadržajima koja klizi ispod sekcije "O nama" |
| `weather: { lat, lon }` | kartica "Trenutno: mjesto" sa temperaturom uživo i prognozom za 3 dana (open-meteo.com, besplatno, bez ključa) |
| `breakfast: { text, items, time, note, image }` | sekcija "Doručak" (bez `image` se crta ilustracija) |
| `instagramFeed: { images: [...] }` | sekcija "Pratite nas" sa 6 slika i dugmetom za Instagram (treba `contact.instagram`) |
| `directions: { destination, steps, tip }` | "Kako doći" u sekciji Lokacija: koraci, dugme za navigaciju i zimski savjet |

Video za web: `ffmpeg -i video.mp4 -an -c:v libx264 -crf 25 -pix_fmt yuv420p -movflags +faststart hero.mp4`
i `ffmpeg -i hero.mp4 -an -c:v libvpx-vp9 -b:v 0 -crf 38 hero.webm`.

## SEO

- Naslov i opis su napisani za pretragu "vikendica Vlašić".
- Strukturirani podaci tipa `LodgingBusiness` su u `index.html`.
- **Demo je sakriven od Googlea** (`<meta name="robots" content="noindex, nofollow">` u `index.html`).
  Za pravog klijenta **obriši taj red**, da ga Google može indeksirati.

## Objava na Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → izaberi repo.
2. Build command: ostavi prazno. Build output directory: `/` (korijen repoa).
3. Deploy. Stranica dobije adresu `ime-projekta.pages.dev`; vlastiti domen se dodaje u Custom domains.

## Slike i fontovi

- Sve ilustracije su nacrtane za ovaj projekat (SVG u `js/scenes.js`). Nema tuđih fotografija.
- Fontovi Fraunces i Manrope (Google Fonts, licenca SIL Open Font License) su u `assets/fonts/`.
- Kad dodaješ fotografije, koristi samo svoje, klijentove ili one sa slobodnom licencom (npr. Unsplash, Pexels)
  i navedi izvor ovdje.

## Moguće nadogradnje (plaćeni dodaci)

- Kalendar zauzetosti koji se sam puni iz Booking.com / Airbnb (iCal link).
- Online plaćanje kapare karticom.
- Još jezika (npr. italijanski ili turski), po istom principu kao njemački.
- Više smještajnih jedinica na jednoj stranici (apartmani u istoj kući).
- Statistika posjeta (Cloudflare Web Analytics, bez kolačića).
