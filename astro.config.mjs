import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "My delightful docs site",
      social: {
        github: 'https://github.com/FranciscoJBrito/my-documentation',
        linkedin: 'https://www.linkedin.com/in/francisco-brito-b4657420a/'
      },
      sidebar: [
        {
          label: "Comenzando",
          items: [
            { label: "Getting started", link: "/getting-started" }
          ],
        },
        {
          label: "Algoritmos y estructuras de datos",
          autogenerate: { directory: "/algorithms" }
        },
        {
          label: "Diseño y arquitectura de software",
          autogenerate: { directory: "/architecture" }
        },
        {
          label: "Diseño de sistemas",
          autogenerate: { directory: "/system-design" }
        },
        {
          label: "Redes",
          autogenerate: { directory: "/networking" }
        },
        {
          label: "DevOps",
          autogenerate: { directory: "/devops" }
        },
        {
          label: "Lenguajes de programación",
          autogenerate: { directory: "/language" }
        },
        {
          label: "Frameworks",
          autogenerate: { directory: "/frameworks" }
        }
      ],
    }),
  ],
});
