/**
 * lang.js — shared internationalisation engine for all sub-pages.
 *
 * Usage in any sub-page:
 *   <script src="../lang.js"></script>   (or "lang.js" if in root)
 *   Mark every translatable node with  data-i18n="key"
 *   For placeholder/aria attributes use data-i18n-placeholder="key"
 *                                       data-i18n-aria="key"
 *
 * Language priority: postMessage from parent > localStorage > 'ro'
 */

(function () {
  /* ── Translation dictionary ─────────────────────────────────── */
  const DICT = {

    /* ── welcome.html ─────────────────────────────── */
    ro: {
      "welcome.title":    "Bun venit",
      "welcome.subtitle": "Un proiect educațional dedicat celui de-Al Doilea Război Mondial",

      /* ── protagonisti.html ──────────────────────── */
      "prot.pageTitle":   "Protagoniști — Al Doilea Război Mondial",
      "prot.heading":     "Protagoniști Al Doilea Război Mondial",

      "prot.hitler.role":   "Führer al Germaniei Naziste",
      "prot.hitler.life":   "Povestea vieții",
      "prot.hitler.life.text": "Născut în 1889 în Austria, Hitler a avut o copilărie marcată de sărăcie și conflicte familiale. A încercat fără succes să devină artist la Viena, ajungând să trăiască în sărăcie și dezvoltând o ură viscerală față de evrei, pe care îi considera responsabili pentru eșecurile sale.",
      "prot.hitler.rise": "Ascensiunea la putere",
      "prot.hitler.rise.text": "După Primul Război Mondial, s-a alăturat Partidului Muncitoresc German, transformându-l în Partidul Nazist. Prin carismă, propagandă și violență, a ajuns cancelar în 1933, apoi Führer, instaurând un regim totalitar bazat pe teroare și cultul personalității.",
      "prot.hitler.influence": "Influență și decizii",
      "prot.hitler.influence.text": "Hitler a inițiat Holocaustul, a pornit Al Doilea Război Mondial prin invadarea Poloniei și a condus Germania în cele mai mari atrocități din istoria omenirii, influențând decisiv geopolitica secolului XX.",
      "prot.hitler.end": "Finalul vieții",
      "prot.hitler.end.text": "În aprilie 1945, în fața colapsului Germaniei, s-a sinucis în buncărul din Berlin, alături de Eva Braun. Cadavrul său a fost ars conform dorinței sale.",
      "prot.hitler.pdf": "Deschide PDF Adolf Hitler",

      "prot.rommel.role":   "General-Feldmareșal, \"Vulpea Deșertului\"",
      "prot.rommel.life.text": "Născut în 1891, Rommel a avut o carieră militară strălucită încă din Primul Război Mondial, fiind cunoscut pentru curaj și inovație tactică.",
      "prot.rommel.rise.text": "A devenit celebru ca autor de manuale militare și a fost promovat rapid, ajungând să comande trupele germane în Franța și apoi în Africa de Nord.",
      "prot.rommel.influence.text": "A revoluționat războiul mecanizat, fiind respectat de adversari pentru umanitate și strategie. A avut succese notabile în campania din Africa de Nord.",
      "prot.rommel.end.text": "Bănuit că ar fi implicat în atentatul împotriva lui Hitler, a fost forțat să se sinucidă în 1944 pentru a-și salva familia și reputația.",
      "prot.rommel.pdf": "Deschide PDF Erwin Rommel",

      "prot.mussolini.role":   "Duce al Italiei Fasciste",
      "prot.mussolini.life.text": "Născut în 1883, fiu de fierar, Mussolini a fost inițial socialist radical, apoi jurnalist și agitator politic.",
      "prot.mussolini.rise.text": "Profitând de criza economică și frica de comunism, a fondat Fasci di Combattimento și, în 1922, a ajuns la putere prin Marșul asupra Romei, instaurând o dictatură.",
      "prot.mussolini.influence.text": "A instaurat regimul fascist, a aliat Italia cu Germania nazistă și a contribuit la declanșarea războiului, dar armata italiană a suferit înfrângeri majore.",
      "prot.mussolini.end.text": "Capturat de partizanii italieni în aprilie 1945, a fost executat sumar, iar trupul său expus public la Milano.",
      "prot.mussolini.pdf": "Deschide PDF Benito Mussolini",

      "prot.tojo.role":   "Prim-ministru Militar al Japoniei",
      "prot.tojo.life.text": "S-a născut în 1884 într-o familie de samurai, a urmat cariera militară și a ajuns rapid în vârful ierarhiei armatei japoneze.",
      "prot.tojo.rise.text": "A devenit ministru al războiului, apoi prim-ministru în 1941, fiind principalul strateg al expansiunii imperiului japonez în Asia și Pacific.",
      "prot.tojo.influence.text": "A aprobat atacul surpriză de la Pearl Harbor și a condus Japonia în războiul total împotriva SUA și aliaților.",
      "prot.tojo.end.text": "După capitularea Japoniei, a fost arestat, judecat pentru crime de război și executat prin spânzurare în 1948.",
      "prot.tojo.pdf": "Deschide PDF Hideki Tōjō",

      "prot.churchill.role": "Prim-ministru al Marii Britanii",
      "prot.churchill.life.text": "Descendent dintr-o familie aristocrată, Churchill s-a remarcat ca ofițer, ziarist și politician în numeroase funcții publice înainte de război.",
      "prot.churchill.rise.text": "În 1940 a devenit prim-ministru, fiind ales pentru determinarea și abilitățile sale oratorice în fața pericolului nazist.",
      "prot.churchill.influence.text": "A inspirat rezistența britanică prin discursuri celebre (\"We shall never surrender\"), a consolidat alianța cu SUA și URSS, fiind arhitectul victoriei aliate.",
      "prot.churchill.end.text": "După război, a mai fost prim-ministru o scurtă perioadă, apoi s-a retras, rămânând o figură legendară a secolului XX. A murit în 1965.",
      "prot.churchill.pdf": "Deschide PDF Winston Churchill",

      "prot.roosevelt.role": "Președinte al Statelor Unite",
      "prot.roosevelt.life.text": "Născut în 1882, provenind dintr-o familie bogată, a fost afectat de poliomielită, dar nu și-a abandonat cariera politică, devenind guvernator al statului New York și apoi președinte.",
      "prot.roosevelt.rise.text": "A fost ales președinte în 1932, în plină criză economică, implementând New Deal-ul pentru relansarea economiei americane.",
      "prot.roosevelt.influence.text": "A condus SUA în timpul celui mai dificil conflict, asigurând mobilizarea totală a resurselor și stabilind relații strânse cu Churchill și Stalin.",
      "prot.roosevelt.end.text": "A murit în exercițiul funcțiunii, în aprilie 1945, cu puțin timp înainte de capitularea Germaniei, fiind singurul președinte american ales de patru ori.",
      "prot.roosevelt.pdf": "Deschide PDF Franklin D. Roosevelt",

      "prot.stalin.role": "Conducător al URSS",
      "prot.stalin.life.text": "Născut în 1878 în Georgia, fiu de cizmar, Stalin a trecut prin școli teologice, dar a devenit revoluționar bolșevic, participând la revoluția rusă.",
      "prot.stalin.rise.text": "După moartea lui Lenin, a eliminat treptat rivalii și a instaurat un regim autoritar, transformând URSS într-o superputere industrială prin represiune și teroare.",
      "prot.stalin.influence.text": "A condus cu mână de fier efortul de război sovietic, fiind decisiv în bătăliile de la Stalingrad și Berlin. Politicile sale au dus la milioane de victime, dar și la victoria asupra Germaniei naziste.",
      "prot.stalin.end.text": "A murit în 1953 de atac cerebral, lăsând o moștenire controversată de teroare, dar și de modernizare a URSS.",
      "prot.stalin.pdf": "Deschide PDF Iosif Stalin",

      "prot.table.name":     "Nume",
      "prot.table.country":  "Țara",
      "prot.table.role":     "Funcție",
      "prot.allies.title":   "Forțele Aliate",
      "prot.allies.text":    "Forțele Aliate au reprezentat coaliția statelor care s-au unit pentru a înfrânge Germania nazistă, Italia fascistă și Japonia imperială.",
      "prot.axis.title":     "Puterile Axei",
      "prot.axis.text":      "Puterile Axei au fost alianța statelor totalitare și expansioniste care au declanșat Al Doilea Război Mondial.",
      "prot.map.title":      "Hartă interactivă",
      "prot.map.conflict":   "Zone de conflict",
      "prot.map.conflictRemove": "Șterge zonele de conflict",
      "prot.map.axis":       "Forțele Axa",
      "prot.map.allies":     "Forțele Aliați",
      "prot.map.clear":      "Șterge forțele",

      /* ── biografie.html ─────────────────────────── */
      "bib.heading":     "Bibliografie",
      "bib.subtitle":    "Surse utilizate pentru documentarea evenimentelor istorice — cărți, articole, site-uri și documentare online, atent selectate.",
      "bib.recommended": "Resurse recomandate",
      "bib.hint":        "Listă selectată — folosește butoanele din dreapta pentru acțiuni rapide",
      "bib.print":       "Print / PDF",
      "bib.export":      "Export .txt",
      "bib.books":       "Cărți",
      "bib.articles":    "Articole și studii",
      "bib.online":      "Surse online",
      "bib.note.title":  "Notă pentru utilizator",
      "bib.note.text":   "Această bibliografie este orientativă. Pentru lucrări academice folosiți formatele de citare (APA, MLA, Chicago) și verificați edițiile originale. Puteți descărca lista în format text sau tipări pagina.",
      "bib.home":        "Pagina principală",
      "bib.copy":        "Copiază text",
      "bib.readmore":    "Citește mai mult",
      "bib.footer":      "Resurse și materiale istorice. Pentru uz educațional.",
      "bib.copy.alert":  "Bibliografia a fost copiată în clipboard!",
      "bib.accessed":    "accesat 2025",

      /* ── feed.html ──────────────────────────────── */
      "feed.heading":     "Feedback",
      "feed.name":        "Nume:",
      "feed.name.ph":     "Scrie numele tău",
      "feed.email":       "Email:",
      "feed.email.ph":    "exemplu@email.com",
      "feed.phone":       "Număr de telefon:",
      "feed.phone.ph":    "07XXXXXXXX",
      "feed.rateLesson":  "Apreciază lecția:",
      "feed.rateGraphics":"Apreciază grafica:",
      "feed.rateInfo":    "Apreciază informațiile:",
      "feed.message":     "Sugestii / Comentarii:",
      "feed.message.ph":  "Scrie aici părerea ta...",
      "feed.submit":      "Trimite Feedback",

      /* ── joc.html ───────────────────────────────── */
      "quiz.title":       "Quiz WWII",
      "quiz.easy":        "Ușor",
      "quiz.medium":      "Mediu",
      "quiz.hard":        "Greu",
      "quiz.score":       "Scor:",
      "quiz.question":    "Întrebarea",
      "quiz.of":          "din",
      "quiz.next":        "Următoarea",
      "quiz.restart":     "Restart",
      "quiz.correct":     "Corect!",
      "quiz.wrong":       "Greșit!",
      "quiz.finish":      "Ai terminat! Scorul tău:",

      /* ── shared label ───────────────────────────── */
      "shared.life":      "Povestea vieții",
      "shared.rise":      "Ascensiunea la putere",
      "shared.influence": "Influență și decizii",
      "shared.end":       "Finalul vieții",

      /* ── istorie.html ───────────────────────────── */
      "ist.heading":   "Istorie",
      "ist.subtitle":  "Cauzele principale care au condus la izbucnirea celui de-al Doilea Război Mondial — o prezentare sintetică, neutră și informativă.",
      "ist.causes.title": "Cauzele Al Doilea Război Mondial",
      "ist.versailles.summary": "Tratatul de la Versailles (1919) – umilința impusă Germaniei",
      "ist.versailles.body": '<ul class="list-disc list-inside"><li>Pierderea unor teritorii importante (Alsacia și Lorena către Franța, coloniile externe etc.).</li><li>Limitarea armatei la 100.000 de soldați.</li><li>Interzicerea armelor grele (avioane, tancuri).</li><li>Plata unor despăgubiri uriașe către statele învingătoare.</li></ul><p class="mt-2">Rezultat: un sentiment profund de umilință și dorință de revanșă în rândul populației germane.</p>',
      "ist.totalitarian.summary": "Ascensiunea regimurilor totalitare",
      "ist.totalitarian.body": '<section class="mb-3"><h3 class="font-semibold text-red-400">Nazismul (Germania)</h3><ul class="list-disc list-inside"><li>Lider: Adolf Hitler.</li><li>Puterea preluată în 1933, în contextul crizei economice.</li><li>Ideologie: naționalism extremist, rasism, antisemitism, revizionism teritorial.</li><li>Politici: reînarmare, Anschluss (1938), invadarea Cehoslovaciei (1939).</li></ul></section><section class="mb-3"><h3 class="font-semibold text-gray-300">Fascismul (Italia)</h3><ul class="list-disc list-inside"><li>Lider: Benito Mussolini.</li><li>Puterea preluată în 1922.</li><li>Ideologie: naționalism radical, dictatură, glorificarea statului.</li><li>Acțiuni: invadarea Etiopiei (1935), intervenția în Spania, Axa Roma–Berlin (1936).</li></ul></section><section><h3 class="font-semibold text-red-400">Militarismul în Japonia</h3><ul class="list-disc list-inside"><li>Conducere militară imperială expansionistă.</li><li>Invadarea Manciuriei (1931), apoi China (1937).</li><li>Masacrul de la Nanking (1937).</li></ul></section>',
      "ist.crisis.summary": "Criza economică mondială (1929–1933)",
      "ist.crisis.body": '<ul class="list-disc list-inside"><li>Șomaj masiv, inflație, foamete, mai ales în Germania.</li><li>Promisiuni totalitare de „ordine" și „măreție națională".</li><li>Democrațiile păreau slabe și ineficiente.</li></ul>',
      "ist.appeasement.summary": "Politica de conciliere (appeasement)",
      "ist.appeasement.body": '<ul class="list-disc list-inside"><li>Se evita confruntarea directă cu Hitler, sperând că va fi suficientă concesiunea.</li><li>Conferința de la München (1938): Sudetii cedați fără opoziție.</li><li>Nu s-a reacționat la reocuparea Rinaniei și Anschluss.</li></ul><p class="mt-2">Politică percepută de Hitler ca slăbiciune, încurajând agresiunile.</p>',
      "ist.league.summary": "Eșecul Ligii Națiunilor",
      "ist.league.body": '<ul class="list-disc list-inside"><li>Creată pentru păstrarea păcii, dar fără forță militară coerentă.</li><li>Nu a putut opri agresiunile Japoniei, Italiei și Germaniei.</li></ul>',
      "ist.pact.summary": "Pactul Ribbentrop–Molotov (23 august 1939)",
      "ist.pact.body": '<ul class="list-disc list-inside"><li>Pact de neagresiune între Germania și URSS.</li><li>Protocol secret: împărțirea Poloniei și a altor teritorii est-europene.</li></ul><p class="mt-2">A permis Germaniei să atace Polonia fără teama unui război pe două fronturi.</p>',
      "ist.timeline.title": "Cronologia Evenimentelor (1919–1939)",
      "ist.footer": "Pagina are scop informativ și critic. Sursele recomandate: lucrări istorice consacrate și arhive primare.",
      "ist.t1919": "1919-1920 – Tratatele de la Versailles",
      "ist.t1919.desc": "Germania este obligată să accepte condiții dure.",
      "ist.t1922": "1922 – Mussolini devine prim-ministru",
      "ist.t1922.desc": "Ascensiunea fascismului în Italia.",
      "ist.t1933": "1933 – Hitler devine cancelar",
      "ist.t1933.desc": "Nazismul preia puterea în Germania.",
      "ist.t1935": "1935 – Italia invadează Etiopia",
      "ist.t1935.desc": "Liga Națiunilor eșuează să intervină.",
      "ist.t1936": "1936 – Axa Roma–Berlin",
      "ist.t1936.desc": "Alianță Italia–Germania.",
      "ist.t1938": "1938 – Anschluss și Acordul de la München",
      "ist.t1938.desc": "Germania anexează Austria și obține Sudetele.",
      "ist.t1939a": "23 august 1939 – Pactul Ribbentrop–Molotov",
      "ist.t1939a.desc": "Germania și URSS împart Europa de Est.",
      "ist.t1939b": "1 septembrie 1939 – Germania invadează Polonia",
      "ist.t1939b.desc": "Începutul celui de-Al Doilea Război Mondial.",
    },

    it: {
      "welcome.title":    "Benvenuto",
      "welcome.subtitle": "Un progetto educativo dedicato alla Seconda Guerra Mondiale",

      "prot.pageTitle":   "Protagonisti — Seconda Guerra Mondiale",
      "prot.heading":     "Protagonisti della Seconda Guerra Mondiale",

      "prot.hitler.role":   "Führer della Germania Nazista",
      "prot.hitler.life.text": "Nato nel 1889 in Austria, Hitler ebbe un'infanzia segnata dalla povertà e da conflitti familiari. Tentò senza successo di diventare artista a Vienna, sviluppando un odio viscerale verso gli ebrei, che riteneva responsabili dei propri fallimenti.",
      "prot.hitler.rise.text": "Dopo la Prima Guerra Mondiale, aderì al Partito dei Lavoratori Tedeschi, trasformandolo nel Partito Nazista. Grazie a carisma, propaganda e violenza, divenne cancelliere nel 1933 e poi Führer, instaurando un regime totalitario basato sul terrore e il culto della personalità.",
      "prot.hitler.influence.text": "Hitler avviò l'Olocausto, scatenò la Seconda Guerra Mondiale invadendo la Polonia e guidò la Germania verso le più grandi atrocità della storia moderna, influenzando decisamente la geopolitica del XX secolo.",
      "prot.hitler.end.text": "Nell'aprile 1945, di fronte al crollo della Germania, si suicidò nel bunker di Berlino insieme a Eva Braun. Il suo corpo fu bruciato secondo le sue disposizioni.",
      "prot.hitler.pdf": "Apri PDF Adolf Hitler",

      "prot.rommel.role":   "Feldmaresciallo, \"La Volpe del Deserto\"",
      "prot.rommel.life.text": "Nato nel 1891, Rommel ebbe una brillante carriera militare già dalla Prima Guerra Mondiale, noto per il coraggio e l'innovazione tattica.",
      "prot.rommel.rise.text": "Divenne celebre come autore di manuali militari e fu promosso rapidamente, giungendo a comandare le truppe tedesche in Francia e poi in Africa del Nord.",
      "prot.rommel.influence.text": "Rivoluzionò la guerra meccanizzata ed era rispettato dagli avversari per umanità e strategia. Ottenne successi notevoli nella campagna del Nord Africa.",
      "prot.rommel.end.text": "Sospettato di essere coinvolto nell'attentato contro Hitler, fu costretto a suicidarsi nel 1944 per salvare la famiglia e la reputazione.",
      "prot.rommel.pdf": "Apri PDF Erwin Rommel",

      "prot.mussolini.role":   "Duce dell'Italia Fascista",
      "prot.mussolini.life.text": "Nato nel 1883, figlio di un fabbro, Mussolini fu inizialmente un socialista radicale, poi giornalista e agitatore politico.",
      "prot.mussolini.rise.text": "Approfittando della crisi economica e della paura del comunismo, fondò i Fasci di Combattimento e, nel 1922, salì al potere con la Marcia su Roma, instaurando una dittatura.",
      "prot.mussolini.influence.text": "Instaurò il regime fascista, alleò l'Italia con la Germania nazista e contribuì allo scoppio della guerra, ma l'esercito italiano subì gravi sconfitte.",
      "prot.mussolini.end.text": "Catturato dai partigiani italiani nell'aprile 1945, fu fucilato sommariamente e il suo corpo esposto pubblicamente a Milano.",
      "prot.mussolini.pdf": "Apri PDF Benito Mussolini",

      "prot.tojo.role":   "Primo Ministro Militare del Giappone",
      "prot.tojo.life.text": "Nato nel 1884 in una famiglia di samurai, intraprese la carriera militare e scalò rapidamente la gerarchia dell'esercito giapponese.",
      "prot.tojo.rise.text": "Divenne ministro della Guerra, poi primo ministro nel 1941, essendo il principale stratega dell'espansione dell'impero giapponese in Asia e nel Pacifico.",
      "prot.tojo.influence.text": "Approvò l'attacco a sorpresa su Pearl Harbor e guidò il Giappone nella guerra totale contro gli Stati Uniti e gli alleati.",
      "prot.tojo.end.text": "Dopo la resa del Giappone, fu arrestato, processato per crimini di guerra e impiccato nel 1948.",
      "prot.tojo.pdf": "Apri PDF Hideki Tōjō",

      "prot.churchill.role": "Primo Ministro del Regno Unito",
      "prot.churchill.life.text": "Discendente da una famiglia aristocratica, Churchill si distinse come ufficiale, giornalista e politico in numerosi incarichi pubblici prima della guerra.",
      "prot.churchill.rise.text": "Nel 1940 divenne primo ministro, scelto per la sua determinazione e le sue doti oratorie di fronte al pericolo nazista.",
      "prot.churchill.influence.text": "Ispirò la resistenza britannica con discorsi celebri (\"We shall never surrender\"), consolidò l'alleanza con USA e URSS, essendo l'architetto della vittoria alleata.",
      "prot.churchill.end.text": "Dopo la guerra fu ancora brevemente primo ministro, poi si ritirò, restando una figura leggendaria del XX secolo. Morì nel 1965.",
      "prot.churchill.pdf": "Apri PDF Winston Churchill",

      "prot.roosevelt.role": "Presidente degli Stati Uniti",
      "prot.roosevelt.life.text": "Nato nel 1882 da una famiglia benestante, fu colpito dalla poliomielite ma non abbandonò la carriera politica, diventando governatore di New York e poi presidente.",
      "prot.roosevelt.rise.text": "Fu eletto presidente nel 1932, in piena crisi economica, attuando il New Deal per rilanciare l'economia americana.",
      "prot.roosevelt.influence.text": "Guidò gli USA durante il conflitto più difficile, assicurando la mobilitazione totale delle risorse e stringendo forti legami con Churchill e Stalin.",
      "prot.roosevelt.end.text": "Morì in carica nell'aprile 1945, poco prima della resa della Germania, essendo l'unico presidente americano eletto quattro volte.",
      "prot.roosevelt.pdf": "Apri PDF Franklin D. Roosevelt",

      "prot.stalin.role": "Leader dell'URSS",
      "prot.stalin.life.text": "Nato nel 1878 in Georgia, figlio di un calzolaio, Stalin frequentò scuole teologiche ma divenne un rivoluzionario bolscevico, partecipando alla rivoluzione russa.",
      "prot.stalin.rise.text": "Dopo la morte di Lenin, eliminò gradualmente i rivali e instaurò un regime autoritario, trasformando l'URSS in una superpotenza industriale attraverso repressione e terrore.",
      "prot.stalin.influence.text": "Guidò con pugno di ferro lo sforzo bellico sovietico, risultando decisivo nelle battaglie di Stalingrad e Berlino. Le sue politiche causarono milioni di vittime, ma portarono anche alla vittoria sulla Germania nazista.",
      "prot.stalin.end.text": "Morì nel 1953 per un ictus, lasciando un'eredità controversa di terrore ma anche di modernizzazione dell'URSS.",
      "prot.stalin.pdf": "Apri PDF Iosif Stalin",

      "prot.table.name":    "Nome",
      "prot.table.country": "Paese",
      "prot.table.role":    "Carica",
      "prot.allies.title":  "Forze Alleate",
      "prot.allies.text":   "Le Forze Alleate rappresentavano la coalizione di stati uniti per sconfiggere la Germania nazista, l'Italia fascista e il Giappone imperiale.",
      "prot.axis.title":    "Potenze dell'Asse",
      "prot.axis.text":     "Le Potenze dell'Asse furono l'alleanza degli stati totalitari ed espansionisti che scatenarono la Seconda Guerra Mondiale.",
      "prot.map.title":     "Mappa interattiva",
      "prot.map.conflict":  "Zone di conflitto",
      "prot.map.conflictRemove": "Rimuovi le zone di conflitto",
      "prot.map.axis":      "Forze dell'Asse",
      "prot.map.allies":    "Forze Alleate",
      "prot.map.clear":     "Rimuovi le forze",

      "bib.heading":     "Bibliografia",
      "bib.subtitle":    "Fonti utilizzate per documentare gli eventi storici — libri, articoli, siti web e documentari online, attentamente selezionati.",
      "bib.recommended": "Risorse consigliate",
      "bib.hint":        "Lista selezionata — usa i pulsanti a destra per azioni rapide",
      "bib.print":       "Stampa / PDF",
      "bib.export":      "Esporta .txt",
      "bib.books":       "Libri",
      "bib.articles":    "Articoli e studi",
      "bib.online":      "Fonti online",
      "bib.note.title":  "Nota per l'utente",
      "bib.note.text":   "Questa bibliografia è orientativa. Per lavori accademici usate i formati di citazione (APA, MLA, Chicago) e verificate le edizioni originali. Potete scaricare la lista in formato testo o stampare la pagina.",
      "bib.home":        "Pagina principale",
      "bib.copy":        "Copia testo",
      "bib.readmore":    "Leggi di più",
      "bib.footer":      "Risorse e materiali storici. Per uso educativo.",
      "bib.copy.alert":  "La bibliografia è stata copiata negli appunti!",
      "bib.accessed":    "accesso 2025",

      "feed.heading":     "Feedback",
      "feed.name":        "Nome:",
      "feed.name.ph":     "Scrivi il tuo nome",
      "feed.email":       "Email:",
      "feed.email.ph":    "esempio@email.com",
      "feed.phone":       "Numero di telefono:",
      "feed.phone.ph":    "+39XXXXXXXXXX",
      "feed.rateLesson":  "Valuta la lezione:",
      "feed.rateGraphics":"Valuta la grafica:",
      "feed.rateInfo":    "Valuta le informazioni:",
      "feed.message":     "Suggerimenti / Commenti:",
      "feed.message.ph":  "Scrivi qui la tua opinione...",
      "feed.submit":      "Invia Feedback",

      "quiz.title":       "Quiz WWII",
      "quiz.easy":        "Facile",
      "quiz.medium":      "Medio",
      "quiz.hard":        "Difficile",
      "quiz.score":       "Punteggio:",
      "quiz.question":    "Domanda",
      "quiz.of":          "di",
      "quiz.next":        "Successiva",
      "quiz.restart":     "Ricomincia",
      "quiz.correct":     "Corretto!",
      "quiz.wrong":       "Sbagliato!",
      "quiz.finish":      "Hai finito! Il tuo punteggio:",

      "shared.life":      "Storia di vita",
      "shared.rise":      "Ascesa al potere",
      "shared.influence": "Influenza e decisioni",
      "shared.end":       "Fine della vita",

      /* ── istorie.html (IT) ───────────────────────── */
      "ist.heading":   "Storia",
      "ist.subtitle":  "Le principali cause che portarono allo scoppio della Seconda Guerra Mondiale — una presentazione sintetica, neutrale e informativa.",
      "ist.causes.title": "Le cause della Seconda Guerra Mondiale",
      "ist.versailles.summary": "Il Trattato di Versailles (1919) – l'umiliazione imposta alla Germania",
      "ist.versailles.body": '<ul class="list-disc list-inside"><li>Perdita di importanti territori (Alsazia e Lorena alla Francia, colonie estere, ecc.).</li><li>Riduzione dell\'esercito a 100.000 soldati.</li><li>Divieto di armi pesanti (aerei, carri armati).</li><li>Pagamento di enormi riparazioni agli stati vincitori.</li></ul><p class="mt-2">Risultato: un profondo senso di umiliazione e desiderio di rivalsa nella popolazione tedesca.</p>',
      "ist.totalitarian.summary": "L'ascesa dei regimi totalitari",
      "ist.totalitarian.body": '<section class="mb-3"><h3 class="font-semibold text-red-400">Il Nazismo (Germania)</h3><ul class="list-disc list-inside"><li>Leader: Adolf Hitler.</li><li>Presa del potere nel 1933, nel contesto della crisi economica.</li><li>Ideologia: nazionalismo estremo, razzismo, antisemitismo, revisionismo territoriale.</li><li>Politiche: riarmo, Anschluss (1938), invasione della Cecoslovacchia (1939).</li></ul></section><section class="mb-3"><h3 class="font-semibold text-gray-300">Il Fascismo (Italia)</h3><ul class="list-disc list-inside"><li>Leader: Benito Mussolini.</li><li>Presa del potere nel 1922.</li><li>Ideologia: nazionalismo radicale, dittatura, glorificazione dello Stato.</li><li>Azioni: invasione dell\'Etiopia (1935), intervento in Spagna, Asse Roma–Berlino (1936).</li></ul></section><section><h3 class="font-semibold text-red-400">Il Militarismo in Giappone</h3><ul class="list-disc list-inside"><li>Leadership militare imperiale espansionista.</li><li>Invasione della Manciuria (1931), poi della Cina (1937).</li><li>Massacro di Nanchino (1937).</li></ul></section>',
      "ist.crisis.summary": "La crisi economica mondiale (1929–1933)",
      "ist.crisis.body": '<ul class="list-disc list-inside"><li>Disoccupazione di massa, inflazione, carestia, soprattutto in Germania.</li><li>Promesse totalitarie di «ordine» e «grandezza nazionale».</li><li>Le democrazie sembravano deboli e inefficienti.</li></ul>',
      "ist.appeasement.summary": "La politica di conciliazione (appeasement)",
      "ist.appeasement.body": '<ul class="list-disc list-inside"><li>Si evitava il confronto diretto con Hitler, sperando che le concessioni bastassero.</li><li>Conferenza di Monaco (1938): i Sudeti ceduti senza opposizione.</li><li>Nessuna reazione alla rioccupazione della Renania e all\'Anschluss.</li></ul><p class="mt-2">Politica percepita da Hitler come debolezza, incoraggiando ulteriori aggressioni.</p>',
      "ist.league.summary": "Il fallimento della Società delle Nazioni",
      "ist.league.body": '<ul class="list-disc list-inside"><li>Creata per mantenere la pace, ma priva di una forza militare coerente.</li><li>Non riuscì a fermare le aggressioni di Giappone, Italia e Germania.</li></ul>',
      "ist.pact.summary": "Il Patto Ribbentrop–Molotov (23 agosto 1939)",
      "ist.pact.body": '<ul class="list-disc list-inside"><li>Patto di non aggressione tra Germania e URSS.</li><li>Protocollo segreto: spartizione della Polonia e di altri territori dell\'Europa orientale.</li></ul><p class="mt-2">Permise alla Germania di attaccare la Polonia senza il timore di una guerra su due fronti.</p>',
      "ist.timeline.title": "Cronologia degli eventi (1919–1939)",
      "ist.footer": "Pagina a scopo informativo e critico. Fonti consigliate: opere storiche consolidate e archivi primari.",
      "ist.t1919": "1919-1920 – I Trattati di Versailles",
      "ist.t1919.desc": "La Germania è costretta ad accettare condizioni severe.",
      "ist.t1922": "1922 – Mussolini diventa Primo Ministro",
      "ist.t1922.desc": "L'ascesa del fascismo in Italia.",
      "ist.t1933": "1933 – Hitler diventa Cancelliere",
      "ist.t1933.desc": "Il nazismo prende il potere in Germania.",
      "ist.t1935": "1935 – L'Italia invade l'Etiopia",
      "ist.t1935.desc": "La Società delle Nazioni non riesce a intervenire.",
      "ist.t1936": "1936 – Asse Roma–Berlino",
      "ist.t1936.desc": "Alleanza Italia–Germania.",
      "ist.t1938": "1938 – Anschluss e Accordo di Monaco",
      "ist.t1938.desc": "La Germania annette l'Austria e ottiene i Sudeti.",
      "ist.t1939a": "23 agosto 1939 – Patto Ribbentrop–Molotov",
      "ist.t1939a.desc": "Germania e URSS si spartiscono l'Europa orientale.",
      "ist.t1939b": "1° settembre 1939 – La Germania invade la Polonia",
      "ist.t1939b.desc": "Inizio della Seconda Guerra Mondiale.",
    },

    en: {
      "welcome.title":    "Welcome",
      "welcome.subtitle": "An educational project dedicated to the Second World War",

      "prot.pageTitle":   "Key Figures — Second World War",
      "prot.heading":     "Key Figures of the Second World War",

      "prot.hitler.role":   "Führer of Nazi Germany",
      "prot.hitler.life.text": "Born in 1889 in Austria, Hitler had a childhood marked by poverty and family conflict. He unsuccessfully tried to become an artist in Vienna, developing a visceral hatred of Jews, whom he blamed for his failures.",
      "prot.hitler.rise.text": "After World War I he joined the German Workers' Party, transforming it into the Nazi Party. Through charisma, propaganda and violence he became Chancellor in 1933 and then Führer, establishing a totalitarian regime built on terror and the cult of personality.",
      "prot.hitler.influence.text": "Hitler initiated the Holocaust, launched World War II by invading Poland and led Germany into the greatest atrocities in human history, decisively shaping the geopolitics of the 20th century.",
      "prot.hitler.end.text": "In April 1945, facing Germany's collapse, he committed suicide in his Berlin bunker alongside Eva Braun. His body was burned in accordance with his wishes.",
      "prot.hitler.pdf": "Open PDF Adolf Hitler",

      "prot.rommel.role":   "Field Marshal, \"The Desert Fox\"",
      "prot.rommel.life.text": "Born in 1891, Rommel had a brilliant military career from World War I, renowned for courage and tactical innovation.",
      "prot.rommel.rise.text": "He became famous as the author of military field manuals and was rapidly promoted, commanding German forces in France and then in North Africa.",
      "prot.rommel.influence.text": "He revolutionised mechanised warfare and was respected by adversaries for his humanity and strategy. He achieved notable successes in the North Africa campaign.",
      "prot.rommel.end.text": "Suspected of involvement in the plot to assassinate Hitler, he was forced to commit suicide in 1944 to protect his family and reputation.",
      "prot.rommel.pdf": "Open PDF Erwin Rommel",

      "prot.mussolini.role":   "Duce of Fascist Italy",
      "prot.mussolini.life.text": "Born in 1883, son of a blacksmith, Mussolini was initially a radical socialist, then a journalist and political agitator.",
      "prot.mussolini.rise.text": "Exploiting the economic crisis and fear of communism, he founded the Fasci di Combattimento and in 1922 came to power through the March on Rome, establishing a dictatorship.",
      "prot.mussolini.influence.text": "He established the fascist regime, allied Italy with Nazi Germany and contributed to starting the war, but the Italian military suffered major defeats.",
      "prot.mussolini.end.text": "Captured by Italian partisans in April 1945, he was summarily executed and his body displayed publicly in Milan.",
      "prot.mussolini.pdf": "Open PDF Benito Mussolini",

      "prot.tojo.role":   "Military Prime Minister of Japan",
      "prot.tojo.life.text": "Born in 1884 into a samurai family, he pursued a military career and rose rapidly through the ranks of the Japanese army.",
      "prot.tojo.rise.text": "He became Minister of War, then Prime Minister in 1941, serving as the chief strategist of the Japanese Empire's expansion across Asia and the Pacific.",
      "prot.tojo.influence.text": "He approved the surprise attack on Pearl Harbor and led Japan into total war against the United States and the Allies.",
      "prot.tojo.end.text": "Following Japan's surrender he was arrested, tried for war crimes and hanged in 1948.",
      "prot.tojo.pdf": "Open PDF Hideki Tōjō",

      "prot.churchill.role": "Prime Minister of the United Kingdom",
      "prot.churchill.life.text": "From an aristocratic family, Churchill distinguished himself as an officer, journalist and politician across many public roles before the war.",
      "prot.churchill.rise.text": "He became Prime Minister in 1940, chosen for his determination and oratorical skill in the face of the Nazi threat.",
      "prot.churchill.influence.text": "He inspired British resistance through famous speeches (\"We shall never surrender\"), consolidated the alliance with the USA and USSR, and was the architect of Allied victory.",
      "prot.churchill.end.text": "After the war he served briefly as Prime Minister again, then retired, remaining a legendary figure of the 20th century. He died in 1965.",
      "prot.churchill.pdf": "Open PDF Winston Churchill",

      "prot.roosevelt.role": "President of the United States",
      "prot.roosevelt.life.text": "Born in 1882 into a wealthy family, he was struck by polio but did not abandon his political career, becoming Governor of New York and then President.",
      "prot.roosevelt.rise.text": "He was elected President in 1932 during the depths of the economic crisis, implementing the New Deal to revive the American economy.",
      "prot.roosevelt.influence.text": "He led the USA through its most difficult conflict, securing the total mobilisation of resources and forging close ties with Churchill and Stalin.",
      "prot.roosevelt.end.text": "He died in office in April 1945, shortly before Germany's surrender — the only American president elected four times.",
      "prot.roosevelt.pdf": "Open PDF Franklin D. Roosevelt",

      "prot.stalin.role": "Leader of the USSR",
      "prot.stalin.life.text": "Born in 1878 in Georgia, son of a cobbler, Stalin attended theological schools but became a Bolshevik revolutionary and took part in the Russian Revolution.",
      "prot.stalin.rise.text": "After Lenin's death he gradually eliminated rivals and established an authoritarian regime, transforming the USSR into an industrial superpower through repression and terror.",
      "prot.stalin.influence.text": "He led the Soviet war effort with an iron fist, playing a decisive role at Stalingrad and Berlin. His policies caused millions of deaths, but also brought victory over Nazi Germany.",
      "prot.stalin.end.text": "He died in 1953 of a stroke, leaving a controversial legacy of terror but also of USSR modernisation.",
      "prot.stalin.pdf": "Open PDF Iosif Stalin",

      "prot.table.name":    "Name",
      "prot.table.country": "Country",
      "prot.table.role":    "Position",
      "prot.allies.title":  "Allied Forces",
      "prot.allies.text":   "The Allied Forces were the coalition of nations that joined together to defeat Nazi Germany, Fascist Italy and Imperial Japan.",
      "prot.axis.title":    "Axis Powers",
      "prot.axis.text":     "The Axis Powers were the alliance of totalitarian and expansionist states that started the Second World War.",
      "prot.map.title":     "Interactive map",
      "prot.map.conflict":  "Conflict zones",
      "prot.map.conflictRemove": "Remove conflict zones",
      "prot.map.axis":      "Axis forces",
      "prot.map.allies":    "Allied forces",
      "prot.map.clear":     "Clear forces",

      "bib.heading":     "Bibliography",
      "bib.subtitle":    "Sources used to document historical events — carefully selected books, articles, websites and online documentaries.",
      "bib.recommended": "Recommended resources",
      "bib.hint":        "Curated list — use the buttons on the right for quick actions",
      "bib.print":       "Print / PDF",
      "bib.export":      "Export .txt",
      "bib.books":       "Books",
      "bib.articles":    "Articles & studies",
      "bib.online":      "Online sources",
      "bib.note.title":  "Note for the reader",
      "bib.note.text":   "This bibliography is for guidance only. For academic work please use citation formats (APA, MLA, Chicago) and verify original editions. You can download the list as a text file or print the page.",
      "bib.home":        "Home page",
      "bib.copy":        "Copy text",
      "bib.readmore":    "Read more",
      "bib.footer":      "Historical resources and materials. For educational use.",
      "bib.copy.alert":  "Bibliography copied to clipboard!",
      "bib.accessed":    "accessed 2025",

      "feed.heading":     "Feedback",
      "feed.name":        "Name:",
      "feed.name.ph":     "Enter your name",
      "feed.email":       "Email:",
      "feed.email.ph":    "example@email.com",
      "feed.phone":       "Phone number:",
      "feed.phone.ph":    "+44XXXXXXXXXX",
      "feed.rateLesson":  "Rate the lesson:",
      "feed.rateGraphics":"Rate the graphics:",
      "feed.rateInfo":    "Rate the information:",
      "feed.message":     "Suggestions / Comments:",
      "feed.message.ph":  "Write your feedback here...",
      "feed.submit":      "Submit Feedback",

      "quiz.title":       "WWII Quiz",
      "quiz.easy":        "Easy",
      "quiz.medium":      "Medium",
      "quiz.hard":        "Hard",
      "quiz.score":       "Score:",
      "quiz.question":    "Question",
      "quiz.of":          "of",
      "quiz.next":        "Next",
      "quiz.restart":     "Restart",
      "quiz.correct":     "Correct!",
      "quiz.wrong":       "Wrong!",
      "quiz.finish":      "Finished! Your score:",

      "shared.life":      "Life story",
      "shared.rise":      "Rise to power",
      "shared.influence": "Influence & decisions",
      "shared.end":       "End of life",

      /* ── istorie.html (EN) ───────────────────────── */
      "ist.heading":   "History",
      "ist.subtitle":  "The main causes that led to the outbreak of the Second World War — a concise, neutral and informative overview.",
      "ist.causes.title": "Causes of the Second World War",
      "ist.versailles.summary": "The Treaty of Versailles (1919) – humiliation imposed on Germany",
      "ist.versailles.body": '<ul class="list-disc list-inside"><li>Loss of important territories (Alsace-Lorraine to France, overseas colonies, etc.).</li><li>Army limited to 100,000 soldiers.</li><li>Ban on heavy weapons (aircraft, tanks).</li><li>Payment of massive reparations to the victorious states.</li></ul><p class="mt-2">Result: a deep sense of humiliation and desire for revenge among the German population.</p>',
      "ist.totalitarian.summary": "The rise of totalitarian regimes",
      "ist.totalitarian.body": '<section class="mb-3"><h3 class="font-semibold text-red-400">Nazism (Germany)</h3><ul class="list-disc list-inside"><li>Leader: Adolf Hitler.</li><li>Power seized in 1933 amid the economic crisis.</li><li>Ideology: extreme nationalism, racism, antisemitism, territorial revisionism.</li><li>Policies: rearmament, Anschluss (1938), invasion of Czechoslovakia (1939).</li></ul></section><section class="mb-3"><h3 class="font-semibold text-gray-300">Fascism (Italy)</h3><ul class="list-disc list-inside"><li>Leader: Benito Mussolini.</li><li>Power seized in 1922.</li><li>Ideology: radical nationalism, dictatorship, glorification of the state.</li><li>Actions: invasion of Ethiopia (1935), intervention in Spain, Rome–Berlin Axis (1936).</li></ul></section><section><h3 class="font-semibold text-red-400">Militarism in Japan</h3><ul class="list-disc list-inside"><li>Expansionist imperial military leadership.</li><li>Invasion of Manchuria (1931), then China (1937).</li><li>Nanking Massacre (1937).</li></ul></section>',
      "ist.crisis.summary": "The global economic crisis (1929–1933)",
      "ist.crisis.body": '<ul class="list-disc list-inside"><li>Mass unemployment, inflation and famine, especially in Germany.</li><li>Totalitarian promises of "order" and "national greatness".</li><li>Democracies appeared weak and ineffective.</li></ul>',
      "ist.appeasement.summary": "The policy of appeasement",
      "ist.appeasement.body": '<ul class="list-disc list-inside"><li>Direct confrontation with Hitler was avoided in the hope that concessions would suffice.</li><li>Munich Conference (1938): the Sudetenland ceded without opposition.</li><li>No reaction to the remilitarisation of the Rhineland or the Anschluss.</li></ul><p class="mt-2">The policy was perceived by Hitler as weakness, encouraging further aggression.</p>',
      "ist.league.summary": "The failure of the League of Nations",
      "ist.league.body": '<ul class="list-disc list-inside"><li>Created to maintain peace, but lacking a coherent military force.</li><li>Unable to stop the aggressions of Japan, Italy and Germany.</li></ul>',
      "ist.pact.summary": "The Ribbentrop–Molotov Pact (23 August 1939)",
      "ist.pact.body": '<ul class="list-disc list-inside"><li>Non-aggression pact between Germany and the USSR.</li><li>Secret protocol: partition of Poland and other Eastern European territories.</li></ul><p class="mt-2">Allowed Germany to attack Poland without fear of a two-front war.</p>',
      "ist.timeline.title": "Timeline of Events (1919–1939)",
      "ist.footer": "This page is for informational and critical purposes. Recommended sources: established historical works and primary archives.",
      "ist.t1919": "1919–1920 – The Treaties of Versailles",
      "ist.t1919.desc": "Germany is forced to accept harsh conditions.",
      "ist.t1922": "1922 – Mussolini becomes Prime Minister",
      "ist.t1922.desc": "The rise of fascism in Italy.",
      "ist.t1933": "1933 – Hitler becomes Chancellor",
      "ist.t1933.desc": "Nazism seizes power in Germany.",
      "ist.t1935": "1935 – Italy invades Ethiopia",
      "ist.t1935.desc": "The League of Nations fails to intervene.",
      "ist.t1936": "1936 – Rome–Berlin Axis",
      "ist.t1936.desc": "Italy–Germany alliance formed.",
      "ist.t1938": "1938 – Anschluss and the Munich Agreement",
      "ist.t1938.desc": "Germany annexes Austria and gains the Sudetenland.",
      "ist.t1939a": "23 August 1939 – Ribbentrop–Molotov Pact",
      "ist.t1939a.desc": "Germany and the USSR divide Eastern Europe.",
      "ist.t1939b": "1 September 1939 – Germany invades Poland",
      "ist.t1939b.desc": "The beginning of the Second World War.",
    },
  };

  /* ── i18n engine ──────────────────────────────────────────────
     Reads locale from localStorage, applies translations, then
     listens for postMessage updates broadcast by the parent frame.
     ─────────────────────────────────────────────────────────── */

  function getLang() {
    // Allow parent frame to override via a temporary session flag
    return sessionStorage.getItem('siteLang')
        || localStorage.getItem('siteLang')
        || 'ro';
  }

  function applyLang(lang) {
    const dict = DICT[lang] || DICT.ro;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Update placeholder attributes on inputs/textareas
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Update aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    // Update innerHTML for rich content blocks (e.g. lists inside <details>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Sync the document language attribute
    document.documentElement.lang = lang;

    // Expose for scripts that need to read the current locale
    window.SITE_LANG = lang;
    window.SITE_DICT = dict;
  }

  // Apply on first load
  applyLang(getLang());

  // React to language changes broadcast from the parent iframe shell
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'set-lang' && DICT[e.data.lang]) {
      sessionStorage.setItem('siteLang', e.data.lang);
      localStorage.setItem('siteLang', e.data.lang);
      applyLang(e.data.lang);
    }
  });

  // Expose programmatic access for pages that build content dynamically
  window.i18n = function (key) {
    const dict = DICT[getLang()] || DICT.ro;
    return dict[key] !== undefined ? dict[key] : key;
  };

  window.applyLang = applyLang;
})();
