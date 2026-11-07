/**
 * Datele cabinetului — un singur loc de modificat.
 * ATENȚIE: în versiunea de test toate datele sunt fictive.
 */
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

/** Numele fără prefixul „Av.” (folosit în date structurate). */
export const personName = site.name.replace(/^Av\.\s*/, "");

/** Telefonul în format pentru link-uri tel: */
export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

/** Coordonate pentru harta OpenStreetMap (fictive — centrul Iașului). */
export const mapCoords = { lat: 47.1585, lon: 27.6014 };

export const nav = [
  { href: "/despre", label: "Despre" },
  { href: "/domenii", label: "Domenii" },
  { href: "/cum-lucram", label: "Cum lucrăm" },
  { href: "/articole", label: "Articole" },
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/confidentialitate", label: "Confidențialitate" },
  { href: "/mentiuni-legale", label: "Mențiuni legale" },
  { href: "/accesibilitate", label: "Accesibilitate" },
];
