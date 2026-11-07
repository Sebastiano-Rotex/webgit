// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site.ts";

export default defineConfig({
  site: site.domain,
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  image: {
    // procesare locală cu sharp — nicio cerere externă
    responsiveStyles: false,
  },
});
