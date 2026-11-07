import { site, personName } from "../config/site";

const url = (p = "/") => new URL(p, site.domain).href;

export function legalServiceLd(image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": url("/#cabinet"),
    name: site.form,
    url: url("/"),
    telephone: site.phone.replace(/\s+/g, ""),
    email: site.email,
    ...(image ? { image } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.replace(/,\s*Iași$/, ""),
      addressLocality: site.city,
      addressCountry: "RO",
    },
    areaServed: { "@type": "City", name: site.city },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    founder: { "@id": url("/#avocat") },
  };
}

export function personLd(image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": url("/#avocat"),
    name: personName,
    honorificPrefix: "Av.",
    jobTitle: "Avocat",
    ...(image ? { image } : {}),
    memberOf: { "@type": "Organization", name: site.bar },
    worksFor: { "@id": url("/#cabinet") },
    url: url("/despre"),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function articleLd(a: { title: string; description: string; pubDate: Date; path: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.pubDate.toISOString(),
    dateModified: a.pubDate.toISOString(),
    inLanguage: "ro-RO",
    mainEntityOfPage: url(a.path),
    image: a.image,
    author: { "@type": "Person", name: personName, url: url("/despre") },
    publisher: { "@type": "LegalService", name: site.form, url: url("/") },
  };
}
