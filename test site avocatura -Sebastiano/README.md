# Site de prezentare — Av. Ana Popescu (versiune de TEST)

Site static construit cu **Astro 7**, TypeScript și CSS simplu. Toate datele (nume, adresă, telefon, texte, parcurs) sunt **fictive**.

## Cum pornesc proiectul

Ai nevoie de [Node.js](https://nodejs.org) (versiunea LTS). Apoi, în folderul proiectului:

```bash
npm install
```

```bash
npm run dev
```

Site-ul se deschide la http://localhost:4321 și se actualizează automat la fiecare modificare.

Pentru versiunea finală (cea care se urcă pe server):

```bash
npm run build
```

```bash
npm run preview
```

`npm run build` verifică întâi codul (`astro check`) și apoi generează site-ul în folderul `dist/`. Conținutul lui `dist/` se urcă la găzduire.

## Unde schimb datele cabinetului

Toate datele sunt într-un singur fișier: **`src/config/site.ts`** — nume, forma de exercitare, barou, adresă, telefon, e-mail, program, domeniu.

- `testMode: true` afișează banda „Site de test — date fictive”, blochează indexarea (`robots.txt` + `noindex`) și face ca formularul să nu trimită nimic.
- `mapCoords` din același fișier stabilește punctul de pe hartă.

## Cum adaug un articol

1. Creează un fișier nou în `src/content/articles/`, de exemplu `pensia-de-intretinere.md`. Numele fișierului devine adresa: `/articole/pensia-de-intretinere`.
2. Copiază antetul dintr-un articol existent și completează-l:

   ```md
   ---
   title: "Titlul articolului"
   description: "Rezumat de 1–2 propoziții (max. 170 de caractere), apare în Google."
   pubDate: 2026-12-01
   image: ../../assets/articole/imaginea-mea.jpg
   imageAlt: "Descrierea imaginii pentru persoanele care nu o văd."
   practice: dreptul-familiei   # drept-civil | dreptul-familiei | dreptul-muncii | drept-comercial
   draft: false                 # true = nu apare pe site
   ---

   Textul articolului, în Markdown. Folosește „## Subtitlu” pentru secțiuni.
   ```

3. Disclaimerul de la final se adaugă automat.

Domeniile de practică funcționează la fel, în `src/content/practice/` (situații, documente și întrebări frecvente se completează în antet).

Structura e pregătită pentru un CMS bazat pe fișiere (Keystatic sau Decap), care poate fi adăugat ulterior peste aceleași foldere — neinstalat acum.

## Cum înlocuiesc imaginile de test

Imaginile sunt în `src/assets/test/`. Cel mai simplu: pune imaginea reală **cu același nume** peste cea de test (de ex. `portret-avocata.jpg`). Astro generează automat variantele AVIF și WebP la build.

| Fișier | Unde apare | Format recomandat |
|---|---|---|
| `portret-avocata.jpg` | Hero (Acasă) | 4:5, minim 1200×1500 |
| `birou.jpg`, `documente.jpg` | Acasă, Despre | 16:10, minim 1600×1000 |
| `domeniu-*.jpg` | Cardurile domeniilor | 4:3, minim 800×600 |
| `articol-*.jpg` | Articole | 16:9, minim 1200×675 |
| `og-image.jpg` | Previzualizare la distribuire (Facebook, WhatsApp) | 1200×630 |

Actualizează și textele alternative (`alt` / `imageAlt`) ca să descrie imaginea reală. Fișierele `.webp` din `src/assets/test/` sunt duplicate nefolosite și pot fi șterse.

## Ce conține

- Pagini: Acasă, Despre, Domenii (+ 4 pagini), Cum lucrăm, Articole (+ 3 articole), Contact, Confidențialitate, Mențiuni legale, Accesibilitate, 404.
- Motivul „Firul argumentului”: linia SVG desenată la încărcare (hero) și la intrarea în ecran (separatoare, pașii). Oprită cu `prefers-reduced-motion`.
- Dark mode automat (după setarea sistemului).
- Fonturi găzduite local (Fraunces + Inter, doar latin și latin-ext). Nicio cerere către alte servere la încărcarea paginilor; harta OpenStreetMap se încarcă doar la click.
- SEO: sitemap, robots.txt generat din config, JSON-LD (`LegalService`, `Person`, `FAQPage`, `Article`, `BreadcrumbList`), Open Graph, URL-uri canonice.
- Formular cu validare accesibilă, honeypot și timp minim de completare. Trimiterea e izolată în `src/lib/contact.ts` (în modul test nu trimite nimic; acolo e descris și cum se conectează).

### Notă despre contrast

Culoarea `--muted` din brief (`#8A847C`) are doar 3,4:1 pe fundal — sub pragul WCAG AA pentru text mic. A fost păstrată pentru elemente decorative, iar textul secundar folosește `--muted-text` (`#6B655D`, 5,2:1; în dark mode `#A39C92`, 6,7:1). Toate combinațiile sunt notate în `src/styles/global.css`.

## Înainte de lansarea reală

- [ ] Date reale în `site.ts`, `testMode: false`
- [ ] Imagini reale în locul celor de test
- [ ] Toate textele citite și aprobate de avocată
- [ ] Politica de confidențialitate revizuită de avocată
- [ ] Domeniu care conține numele ei (regulă UNBR)
- [ ] Formular conectat la un serviciu de e-mail găzduit în UE
- [ ] Analiză fără cookie-uri (Plausible sau Umami), dacă se dorește
- [ ] Găzduire în UE, HTTPS

Suplimentar, de verificat:

- [ ] Coordonatele hărții (`mapCoords`) pentru adresa reală
- [ ] Parcursul profesional din `src/pages/despre.astro` (acum fictiv)
- [ ] Datele „Ultima actualizare” din paginile legale
- [ ] Un test Lighthouse pe varianta publicată (mobil)
