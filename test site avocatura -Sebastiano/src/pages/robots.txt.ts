import type { APIRoute } from "astro";
import { site } from "../config/site";

/** robots.txt generat din config: blochează indexarea cât timp testMode = true. */
export const GET: APIRoute = ({ site: astroSite }) => {
  const sitemap = new URL("/sitemap-index.xml", astroSite ?? site.domain).href;
  const body = site.testMode
    ? `# Site de test — indexarea este blocată\nUser-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
