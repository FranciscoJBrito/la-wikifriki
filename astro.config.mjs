import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "My delightful docs site",
      sidebar: [
        {
          label: "Comenzando",
          items: [
            { label: "Getting started", link: "/getting-started" }
          ],
        },
      ],
    }),
  ],
});
