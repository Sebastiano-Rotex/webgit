# Brief: site de prezentare pentru o avocată (versiune de TEST)

Construiește de la zero un site complet, gata de rulat local, după specificația de mai jos. Este un site de **test**: toate datele (nume, adresă, telefon, texte) sunt fictive și marcate ca atare. Imaginile de test sunt în folderul `imagini-test/` din rădăcina proiectului; mută-le în `src/assets/test/` și folosește-le de acolo.

Lucrează autonom până la final. La sfârșit rulează build-ul, verifică că nu are erori și dă-mi un rezumat scurt: ce ai făcut, cum pornesc site-ul, ce a rămas de făcut.

---

## 1. Context și reguli care nu se negociază

Site pentru un cabinet de avocatură din România. Publicitatea avocaților e reglementată strict de UNBR (Statutul profesiei, art. 243¹: informațiile trebuie să fie veridice, corecte, să nu fie comparative, echivoce sau laudative). De aceea:

- **NU** pune testimoniale, recenzii, stele, logouri de clienți.
- **NU** pune cifre de succes, contoare („200+ dosare”, „98% câștigate”), procente.
- **NU** folosi superlative sau comparații („cel mai bun avocat”, „nr. 1”, „lider”).
- **NU** adăuga chatbot, pop-up-uri, banner de cookie-uri, Google Analytics, Google Fonts din CDN, Google Maps încărcat automat, Calendly.
- **NU** pune câmp de încărcare de documente în formular.
- Totul în **limba română**, cu diacritice corecte: **ș ț cu virgulă** (U+0219, U+021B), nu cu sedilă (ş ţ).

„Spectaculos” vine din execuție: tipografie mare și elegantă, spațiu alb generos, un singur motiv animat, tranziții fine, viteză.

## 2. Date fictive de test

Pune-le într-un singur fișier de configurare (`src/config/site.ts`), ca să le schimb ușor mai târziu:

```ts
export const site = {
  testMode: true, // afișează o bandă discretă „Site de test — date fictive” în header
  name: "Av. Ana Popescu",
  form: "Cabinet individual de avocat Ana Popescu",
  bar: "Baroul Iași",
  city: "Iași",
  address: "Str. Exemplu nr. 10, et. 2, Iași",
  phone: "+40 700 000 000",
  email: "contact@exemplu.ro",
  hours: "Luni–Vineri, 09:00–17:00 (doar cu programare)",
  domain: "https://anapopescu.example",
  practiceAreas: ["drept-civil", "dreptul-familiei", "dreptul-muncii", "drept-comercial"],
};
```

## 3. Tehnologie

- **Astro** (ultima versiune stabilă), site static, TypeScript.
- CSS simplu cu variabile (fără Tailwind, fără framework UI). Un fișier `src/styles/global.css` cu tokenii de design.
- **Content Collections** Astro pentru domeniile de practică și articole (fișiere Markdown în `src/content/`), ca avocata să poată adăuga conținut fără să atingă codul. Pregătește structura astfel încât să pot adăuga ulterior un CMS (Keystatic sau Decap); nu îl instala acum.
- Imagini prin `astro:assets` (`<Image />` / `<Picture />`), ieșire AVIF + WebP, `loading="lazy"` peste tot în afară de hero.
- Fonturi **găzduite local** prin pachetele `@fontsource-variable/fraunces` (titluri) și `@fontsource-variable/inter` (text). Doar subseturile `latin` și `latin-ext` (necesar pentru ș ț).
- Tranziții între pagini cu `<ClientRouter />` (View Transitions) din Astro, cu fallback normal.
- Zero JavaScript pe client, în afară de: animația liniei, meniul mobil, tranzițiile, validarea formularului. Fără biblioteci de animație (fără GSAP, Three.js, Framer).

## 4. Identitate vizuală (tokeni)

```css
:root {
  --paper: #F7F4EE;      /* fundal */
  --ink: #1F1D1B;        /* text principal */
  --accent: #7B2D26;     /* bordo — linii, linkuri, butoane */
  --muted: #8A847C;      /* text secundar */
  --line: #E4DDD2;       /* separatoare fine */
  --surface: #FFFFFF;    /* carduri */
  --font-display: "Fraunces Variable", Georgia, serif;
  --font-body: "Inter Variable", system-ui, sans-serif;
  --max: 72rem;
  --radius: 2px;         /* colțuri aproape drepte — seriozitate */
}
```

- Dark mode **doar automat** prin `prefers-color-scheme: dark` (fără buton): fundal `#171513`, text `#EDE8E0`, accent `#C98A7E`, linii `#2E2A26`. Verifică contrastul.
- Tipografie fluidă cu `clamp()`: H1 pe homepage între 2.75rem și 6rem, line-height strâns (1.0–1.05), litere ușor strânse; corpul de text 1.0625rem–1.125rem, line-height 1.65, lățime maximă ~68 caractere.
- Butoane: dreptunghiulare, bordo plin pentru acțiunea principală, contur pentru secundară; hover discret (translatare 1–2px + subliniere).

## 5. Motivul semnătură: „Firul argumentului”

O linie fină (2px, culoarea `--accent`) desenată ca SVG `stroke-dasharray`/`stroke-dashoffset`:
- Pe homepage, sub numele din hero, se „desenează” de la stânga la dreapta la încărcare, într-o curbă ușoară, în ~900ms, `ease-out`.
- Ca separator între secțiuni, o versiune scurtă se desenează când intră în ecran (`IntersectionObserver`, o singură dată).
- Cu `prefers-reduced-motion: reduce`: linia apare direct, fără animație. Același lucru pentru toate tranzițiile.
- Acesta e **singurul** efect de tip „wow”. Restul animațiilor: fade + translatare de 8px la apariția secțiunilor, atât.

## 6. Pagini și conținut

Generează texte de test credibile, în română, scrise pentru un client fără pregătire juridică (fraze scurte, fără jargon), conforme cu regulile de la punctul 1. Fiecare pagină are `<title>` și `meta description` unice.

### `/` Acasă (de sus în jos)
1. **Header**: numele ca logotip tipografic (Fraunces), meniu: Despre, Domenii, Cum lucrăm, Articole, Contact. Buton „Programează o discuție”. Pe mobil: meniu tip sertar, accesibil (focus trap, Esc închide, `aria-expanded`). Header-ul devine compact la scroll.
2. **Hero** pe două coloane (pe mobil: una): stânga — supratitlu mic „Avocat · Baroul Iași”, H1 cu numele, linia animată, o propoziție concretă („Drept civil, al familiei și al muncii, pentru persoane și firme mici din Iași.”), butoanele „Programează o discuție” și „Vezi domeniile”. Dreapta — `portret-avocata` în format 4:5, cu un cadru fin decalat în culoarea accent.
3. **Domenii de practică**: grilă de 4 carduri (imaginile `domeniu-*`), fiecare cu titlu, 1–2 propoziții despre situații concrete („Ai primit o notificare de la angajator?”) și link „Află mai mult →”.
4. **Cum lucrăm**: 4 pași numerotați mare (01–04): Primul contact → Discuția inițială → Contractul de asistență juridică → Lucrul pe dosar. Pe desktop, pașii sunt legați de linia semnătură.
5. **Despre**: imaginea `birou` + un paragraf personal + link spre pagina Despre.
6. **Articole recente**: ultimele 3 articole (imaginile `articol-*`).
7. **Contact**: formularul (vezi 7) alături de datele de contact.
8. **Footer**: forma de exercitare, baroul, adresă, telefon, e-mail, linkuri spre paginile legale, „© anul curent”.

### `/despre`
Imaginea `documente` sau `portret-avocata`; text organizat pe „ce probleme rezolv și pentru cine”, apoi parcursul profesional (fictiv), apoi principii de lucru (confidențialitate, comunicare clară, termene). Bloc cu forma de exercitare și baroul.

### `/domenii` + `/domenii/[slug]`
Pagină index + câte o pagină pentru fiecare din cele 4 domenii, generate din Content Collection. Fiecare pagină de domeniu:
- introducere (ce acoperă, în cuvinte simple),
- „Situații în care te pot ajuta” (listă de 5–7 situații concrete),
- „Ce documente e bine să pregătești” (listă),
- „Întrebări frecvente” (5–6 întrebări cu răspuns, ca `<details>`/`<summary>` stilizate), cu date structurate `FAQPage`,
- CTA „Programează o discuție”.

### `/cum-lucram`
Cei 4 pași detaliați, plus o secțiune „Onorariul” care explică doar principiile (se stabilește în funcție de complexitate, se convine în scris înainte de începerea lucrului, prin contract de asistență juridică). Fără sume.

### `/articole` + `/articole/[slug]`
3 articole de test (~500–700 cuvinte fiecare), ghiduri generale în limbaj simplu, cu un disclaimer la final: „Acest articol are caracter informativ general și nu reprezintă consultanță juridică pentru situația dumneavoastră.” Pagina de articol: tipografie de lectură îngrijită, timp estimat de citire, data publicării, articole similare.

### `/contact`
Formularul + date de contact + program + hartă **încărcată doar la click** („Afișează harta” → abia atunci se încarcă un iframe OpenStreetMap). Până la click, un placeholder static cu adresa.

### Pagini legale
- `/confidentialitate` — politică de confidențialitate (șablon de test): ce date colectează formularul, scop, temei, durata de păstrare, drepturile persoanei vizate, contact. Marcat clar „Text de test — de revizuit de avocată”.
- `/mentiuni-legale` — forma de exercitare, baroul, adresă, date de contact.
- `/accesibilitate` — declarație scurtă de accesibilitate (WCAG 2.2 AA ca țintă).
- `404` — pagină simplă și elegantă, cu linia semnătură și link spre Acasă.

## 7. Formularul de contact

Câmpuri: Nume (obligatoriu), Telefon sau E-mail (cel puțin unul obligatoriu), Domeniu (select cu cele 4 domenii + „Altceva”), Mesaj scurt (max. 1000 caractere, cu contor), bifă obligatorie „Am citit [informarea privind datele personale]”.

- Mesaj vizibil deasupra butonului: „Vă rog să nu trimiteți documente sau detalii confidențiale prin acest formular. Le vom discuta la prima întâlnire.”
- Anti-spam: câmp honeypot ascuns + verificare de timp minim de completare. Fără CAPTCHA.
- Validare accesibilă: mesaje de eroare legate de câmp cu `aria-describedby`, focus pe prima eroare.
- Trimiterea: pentru test, **nu trimite nicăieri**. Fă un endpoint pregătit (`src/pages/api/contact.ts` comentat, sau o funcție izolată) și, în modul test, afișează un mesaj de confirmare: „Mesaj de test — formularul nu a trimis nimic.” Lasă un comentariu clar unde se conectează ulterior un serviciu de e-mail găzduit în UE.

## 8. SEO, date structurate, partajare

- `sitemap.xml` (`@astrojs/sitemap`) și `robots.txt`. Cât timp `testMode` e `true`, `robots.txt` blochează indexarea și fiecare pagină are `<meta name="robots" content="noindex">`.
- JSON-LD: `LegalService` (cabinetul) + `Person` (avocata) pe homepage, `FAQPage` pe paginile de domeniu, `Article` pe articole, `BreadcrumbList` pe paginile interioare.
- Open Graph + Twitter card cu `og-image`.
- URL-uri canonice, `lang="ro"`, favicon simplu (inițialele „AP” în bordo, SVG).

## 9. Accesibilitate (obligatoriu)

- WCAG 2.2 AA: contrast verificat pentru toate combinațiile de culori, inclusiv dark mode.
- Link „Sari la conținut” la începutul paginii.
- Navigare completă din tastatură, focus vizibil (contur bordo, 2px, offset).
- Un singur H1 pe pagină, ierarhie corectă a titlurilor, landmark-uri (`header`, `nav`, `main`, `footer`).
- Text alternativ descriptiv pentru imagini (pentru cele de test: descrie ce ar trebui să arate imaginea reală).
- Țintele de atingere minim 44×44px pe mobil.

## 10. Performanță — ținte

- Lighthouse ≥ 95 la Performance, Accessibility, Best Practices, SEO (mobil).
- LCP < 2.0 s, CLS < 0.05.
- Imaginea hero cu `fetchpriority="high"`, dimensiuni explicite peste tot.
- Fonturile cu `font-display: swap` și preload pentru fontul de titlu.

## 11. Structura proiectului

```
src/
  assets/test/          ← imaginile din imagini-test/
  components/           ← Header, Footer, Hero, SignatureLine, PracticeCard, Steps, ContactForm, FAQ, ArticleCard, TestBanner, SEO
  config/site.ts
  content/
    practice/           ← 4 fișiere .md
    articles/           ← 3 fișiere .md
  content.config.ts
  layouts/BaseLayout.astro
  pages/
  styles/global.css
public/ (favicon, robots se generează din config)
```

## 12. Livrare și verificare

1. Inițializează proiectul și instalează dependențele.
2. Construiește totul.
3. Rulează `npm run build` și repară toate erorile și avertismentele.
4. Pornește `npm run preview` și verifică fiecare pagină la 375px, 768px și 1440px de lățime.
5. Verifică: nicio cerere externă la încărcarea paginilor (deschide Network), diacriticele ș ț afișate corect, animațiile oprite cu `prefers-reduced-motion`.
6. Scrie un `README.md` în română: cum pornesc proiectul, unde schimb datele (`site.ts`), cum adaug un articol, cum înlocuiesc imaginile de test, ce trebuie făcut înainte de lansarea reală (lista de mai jos).

### Înainte de lansarea reală (pune lista în README)
- [ ] Date reale în `site.ts`, `testMode: false`
- [ ] Imagini reale în locul celor de test
- [ ] Toate textele citite și aprobate de avocată
- [ ] Politica de confidențialitate revizuită de avocată
- [ ] Domeniu care conține numele ei (regulă UNBR)
- [ ] Formular conectat la un serviciu de e-mail găzduit în UE
- [ ] Analiză fără cookie-uri (Plausible sau Umami), dacă se dorește
- [ ] Găzduire în UE, HTTPS
