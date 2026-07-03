export type Locale = "en" | "es"

export const translations = {
  en: {
    // Header
    portfolioYear: "PORTFOLIO / 2026",
    availableForWork: "Available for work",
    location: "Colombia",
    currently: "CURRENTLY",
    position: "COBOL Developer",
    company: "@ Nuek",
    years: "2026 — Present",
    focus: "FOCUS",

    // Hero description
    heroDescription: ["Software Developer at the intersection of", "Legacy systems", "and", "modern technology.", "Expert in", "robust COBOL logic", "with a modern vision for tech evolution."],

    // Work section
    selectedWork: "Professional Experience",
    workYears: "2022 — 2026",
    jobs: [
      {
        year: "2026",
        role: "COBOL Developer",
        company: "Nuek",
        description: "Development of COBOL applications (Online and Batch). Efficient management of large data volumes using VSAM files and process automation via JCL in an IBM environment.",
        stack: ["COBOL", "VSAM", "Mainframe", "SQL"]
      },
      {
        year: "2024",
        role: "COBOL Developer",
        company: "Banco de Bogotá",
        description: "Development of COBOL applications (Online and Batch). Efficient management of large data volumes using VSAM files and process automation via JCL in an IBM environment.",
        stack: ["COBOL", "JCL", "CICS", "VSAM", "Mainframe"]
      },
      {
        year: "2022",
        role: "Junior Software Engineer",
        company: "NTT DATA",
        description: "Coding, testing, and optimization of enterprise software modules. Resolution of critical errors and improvement of execution times in key processes.",
        stack: ["COBOL", "JCL", "Mainframe", "DB2", "SQL", "Git"]
      }
    ],

    // Thoughts section
    recentThoughts: "Featured Projects",
    readMore: "View Code",
    projects: [
      {
        title: "Portfolio Next.js",
        description: "Modern personal website built with Next.js 14, Tailwind CSS, and TypeScript. Features internationalization and dark mode.",
        date: "Dec 2025",
        language: "TypeScript",
        url: "https://github.com/erickfierro/portfolio"
      },
      {
        title: "Sales Statistics Calculator",
        description: "Sales statistics calculator. It provides an efficient solution for calculating and analyzing sales data, allowing users to gain valuable insights into their product and sales performance.",
        date: "Dec 2025",
        language: "COBOL",
        url: "https://github.com/erickfierro/cobol-sales-statistics-calculator"
      }
    ],

    // Connect section
    letsConnect: "Let's Connect",
    connectDescription:
      "Always interested in new opportunities, collaborations, and conversations about technology and design.",
    elsewhere: "ELSEWHERE",

    // Footer
    copyright: "© 2025 Erick Fierro. All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS",

    // Navigation
    navigateTo: "Navigate to",
  },
  es: {
    // Header
    portfolioYear: "PORTAFOLIO / 2026",
    availableForWork: "Disponible para trabajar",
    location: "Colombia",
    currently: "ACTUALMENTE",
    position: "Desarrollador COBOL",
    company: "@ Nuek",
    years: "2026 — Presente",
    focus: "ENFOQUE",

    // Hero description
    heroDescription: ["Desarrollador de Software en la intersección entre", "sistemas Legacy", "y", "tecnología moderna.", "Experto en", "lógica COBOL robusta", "con una visión actual para la evolución tecnológica."],

    // Work section
    selectedWork: "Experiencia Profesional",
    workYears: "2022 — 2026",
    jobs: [
      {
        year: "2026",
        role: "COBOL Developer",
        company: "Nuek",
        description: "Desarrollo de aplicaciones COBOL (Online y Batch). Gestión eficiente de grandes volúmenes de datos con archivos VSAM y automatización de procesos mediante JCL en entorno IBM.",
        stack: ["COBOL", "VSAM", "Mainframe", "SQL"]
      },
      {
        year: "2024",
        role: "COBOL Developer",
        company: "Banco de Bogotá",
        description: "Desarrollo de aplicaciones COBOL (Online y Batch). Gestión eficiente de grandes volúmenes de datos con archivos VSAM y automatización de procesos mediante JCL en entorno IBM.",
        stack: ["COBOL", "JCL", "CICS", "VSAM", "Mainframe"]
      },
      {
        year: "2022",
        role: "Junior Software Engineer",
        company: "NTT DATA",
        description: "Codificación, pruebas y optimización de módulos de software empresarial. Resolución de errores críticos y mejora de tiempos de ejecución en procesos clave.",
        stack: ["COBOL", "JCL", "Mainframe", "DB2", "SQL", "Git"]
      }
    ],

    // Thoughts section
    recentThoughts: "Proyectos Destacados",
    readMore: "Ver Código",
    projects: [
      {
        title: "Portafolio Next.js",
        description: "Sitio web personal moderno construido con Next.js 14, Tailwind CSS y TypeScript. Incluye internacionalización y modo oscuro.",
        date: "Dec 2025",
        language: "TypeScript",
        url: "https://github.com/erickfierro/portfolio"
      },
      {
        title: "Calculadora De Estadísticas De Ventas",
        description: "Calculadora de estadísticas de ventas. Ofrece una solución eficiente para calcular y analizar datos de ventas, lo que permite a los usuarios obtener información valiosa sobre el rendimiento de sus productos y ventas.",
        date: "Dec 2025",
        language: "COBOL",
        url: "https://github.com/erickfierro/cobol-sales-statistics-calculator"
      }
    ],

    // Connect section
    letsConnect: "Conectemos",
    connectDescription:
      "Siempre interesado en nuevas oportunidades, colaboraciones y conversaciones sobre tecnología y diseño.",
    elsewhere: "EN OTROS LUGARES",

    // Footer
    copyright: "© 2025 Erick Fierro. Todos los derechos reservados.",
    builtWith: "Construido con Next.js & Tailwind CSS",

    // Navigation
    navigateTo: "Navegar a",
  },
} as const

export type Translations = typeof translations.en
