/**
 * Content Collections — conținutul editabil fără să atingeți codul.
 * - src/content/practice/*.md  → domeniile de practică (/domenii/[nume-fișier])
 * - src/content/articles/*.md  → articolele (/articole/[nume-fișier])
 *
 * Structura e compatibilă cu un CMS bazat pe fișiere (Keystatic sau Decap),
 * care poate fi adăugat ulterior peste aceleași foldere și câmpuri.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const practice = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/practice" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      description: z.string().max(170), // meta description
      hook: z.string(), // întrebarea concretă de pe card
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      situations: z.array(z.string()).min(5).max(7),
      documents: z.array(z.string()).min(1),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).min(5).max(6),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(170),
      pubDate: z.coerce.date(),
      image: image(),
      imageAlt: z.string(),
      practice: z.enum(["drept-civil", "dreptul-familiei", "dreptul-muncii", "drept-comercial"]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { practice, articles };
