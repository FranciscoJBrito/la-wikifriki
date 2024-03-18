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
          items: [
            { label: "Introducción", link: "/algorithms/introduccion" },
            { label: "Fundamentos de la programación", link: "/algorithms/programming-fundamentals" },
            { label: "Estructura de datos", link: "/algorithms/data-structure" },
            { label: "Estructura de datos básica", link: "/algorithms/basic-data-structure" },
            { label: "Complejidad algorítmica", link: "/algorithms/algorithmic-complexity" },
            { label: "Algoritmos de clasificación", link: "/algorithms/classification-algorithms" },
            { label: "Algoritmos de búsqueda", link: "/algorithms/search-algorithms" },
            { label: "Árbol de estructura de datos", link: "/algorithms/data-structure-tree" },

          ],
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
