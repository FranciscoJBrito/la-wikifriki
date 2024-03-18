import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Francisco Brito",
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
          items: [
            { label: "Introducción", link: "/architecture/introduccion" },
            { label: "Código limpio", link: "/architecture/clean-code" },
            { label: "Paradigmas de programación", link: "/architecture/programming-paradigms" },
            { label: "Programación orientada a objetos", link: "/architecture/poo" },
            { label: "Principios de diseño", link: "/architecture/principles-design" },
            { label: "Patrones de diseño", link: "/architecture/design-patterns" },
            { label: "Principios arquitectónicos", link: "/architecture/arch-principles" },
            { label: "Estilos arquitectónicos", link: "/architecture/arch-styles" },
            { label: "Patrones arquitectónicos", link: "/architecture/arch-patterns" },
          ],
          /* autogenerate: { directory: "/architecture" } */
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
