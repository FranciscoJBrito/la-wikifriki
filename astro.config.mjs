import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: '',
      logo: {
        light: './public/logo-light.svg',
        dark: './public/logo-dark.svg',
      },
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
          items: [
            { label: "Introducción", link: "/networking/introduccion" },
            { label: "Modelo OSI", link: "/networking/osi-model" },
            { label: "TCP/IP", link: "/networking/tcp-ip" },
            { label: "DNS", link: "/networking/dns" },
            { label: "HTTP", link: "/networking/http" },
            { label: "HTTPS", link: "/networking/https" },
            { label: "FTP", link: "/networking/ftp" },
            { label: "SMTP", link: "/networking/smtp" },
            { label: "POP3", link: "/networking/pop3" },
            { label: "IMAP", link: "/networking/imap" },
            { label: "SSH", link: "/networking/ssh" },
            { label: "VPN", link: "/networking/vpn" },
            { label: "Firewall", link: "/networking/firewall" },
            { label: "Load Balancer", link: "/networking/load-balancer" },
            { label: "Reverse Proxy", link: "/networking/reverse-proxy" },
            { label: "Forward Proxy", link: "/networking/forward-proxy" },
            { label: "Gateway", link: "/networking/gateway" },
            { label: "Router", link: "/networking/router" },
            { label: "Switch", link: "/networking/switch" },
          ],
        },
        {
          label: "DevOps",
          items: [
            { label: "Introducción", link: "/devops/introduccion" },
            { label: "Sistemas operativos", link: "/devops/operative-systems" },
            { label: "Uso de la terminal", link: "/devops/terminal" },
            { label: "Sistema de control de versiones", link: "/devops/version-control-system" },
            { label: "VPS Hosting", link: "/devops/vps" },
            { label: "Como configurar...?", items: [
              { label: "Proxy reverso", link: "/devops/reverse-proxy" },
              { label: "Forward Proxy (Proxy de reenvió)", link: "/devops/forward-proxy" },
              { label: "Firewall (Cortafuego)", link: "/devops/firewall" },
              { label: "Balanceador de carga (Load balancer )", link: "/devops/load-balancer" },
              { label: "Caching server", link: "/devops/caching" },
            ]},
            { label: "Contenedores", link: "/devops/containers" },
            { label: "Proveedores en la nube", link: "/devops/cloud-providers" },
            { label: "Redes, Seguridad y protocolos", link: "/devops/network-security-protocols" },
            { label: "Serverless", link: "/devops/serverless" },
            { label: "Infrastructure provisioning ", link: "/devops/infrastructure-provisioning" },
            { label: "Configuration management", link: "/devops/configuration-management" },
            { label: "CI/CD", link: "/devops/ci-cd" },
            { label: "Infrastructure monitoring", link: "/devops/infrastructure-monitoring" },
            { label: "Application monitoring", link: "/devops/application-monitoring" },
            { label: "Orquestación de containers", link: "/devops/containers-orchestration" },
          ],
        },
        {
          label: "Lenguajes de programación",
          items: [
            { label: "Introducción", link: "/language/introduccion" },
            { label: "JavaScript", link: "/language/javascript" },
            { label: "Ruby", link: "/language/ruby" },
            { label: "TypeScript", link: "/language/typescript" },
            { label: "Python", link: "/language/python" },
          ]
        },
        {
          label: "Frameworks",
          autogenerate: { directory: "/frameworks" }
        }
      ],
    }),
  ],
});
