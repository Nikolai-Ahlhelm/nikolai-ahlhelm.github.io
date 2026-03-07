import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.nikolai-ahlhelm.de",
  integrations: [tailwind()],
  output: "static"
});
