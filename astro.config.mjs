import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Francisco Brito",
      customCss: [
        './src/styles/custom.css',
      ],
      defaultLocale: 'es',
      social: {
        github: 'https://github.com/FranciscoJBrito/my-documentation',
        linkedin: 'https://www.linkedin.com/in/francisco-brito-b4657420a/'
      },
      sidebar: [
        {
          label: "Comenzando",
          items: [
            { label: "Bienvenidos", link: "/getting-started" }
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
          items: [
            { label: "Introducción", link: "/system-design/introduccion" },
            { label: "Clustering", link: "/system-design/clustering" },
            { label: "Caching", link: "/system-design/caching" },
            { label: "CDN", link: "/system-design/cdn" },
            { label: "Proxy", link: "/system-design/proxy" },
            { label: "CAP Theorem", link: "/system-design/cap-theorem" },
            { label: "Queues", link: "/system-design/queues" },
            { label: "REST", link: "/system-design/rest" },
            { label: "GraphQL", link: "/system-design/graphql" },
            { label: "gRPC", link: "/system-design/grpc" },
            { label: "Cloud design patterns", link: "/system-design/cloud-design-patterns" },
            { label: "Long Polling", link: "/system-design/long-polling" },
            { label: "Short Polling", link: "/system-design/short-polling" },
            { label: "Web Sockets", link: "/system-design/web-sockets" },
            { label: "SSE", link: "/system-design/sse" }          
          ],
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
