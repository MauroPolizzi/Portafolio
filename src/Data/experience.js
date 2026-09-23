import educariaLogo from "@/assets/images/logos/educaria_argentina_logo.jpeg";
import freelanceLogo from "@/assets/images/logos/liberoprofessionista_logo.jpeg";
import lfilogo from "@/assets/images/logos/lficl_logo.jpeg";
// Cuando tengas el logo de LFi, copialo en src/assets/images/logos/ y descomentá
// esta línea, y poné `logo: lfiLogo` en el bloque de LFi.
// import lfiLogo from "@/assets/images/logos/lfi_logo.jpeg";

/**
 * Experiencia laboral. Se muestra en el orden de esta lista (lo más reciente primero).
 * El contenido replica el perfil de LinkedIn (profile-linkedin.pdf).
 *
 * Para agregar una experiencia:
 *   1. Copiá el logo en src/assets/images/logos/ e importalo arriba.
 *   2. Agregá un bloque nuevo al principio de la lista.
 *
 * Campos:
 *   start / end : fechas ISO "AAAA-MM-DD". end: null significa "actualidad".
 *   url         : opcional. Si está, el logo y el nombre enlazan ahí.
 *   logo        : opcional. Si falta, se muestran las iniciales de la empresa.
 *   location    : opcional. País o ciudad del puesto.
 *   role        : puesto.
 *   summary     : descripción de la empresa o del trabajo.
 *   groups      : opcional. Equipos o etapas dentro de la misma empresa, cada uno
 *                 con su `label` y su propia lista de `highlights`.
 *   highlights  : lista de logros. Cada uno se muestra como una viñeta.
 *   techStack   : opcional. Tecnologías usadas. Se muestran como etiquetas.
 *
 * Los textos se escriben en los dos idiomas: { es: "...", en: "..." }.
 * `techStack` es la excepción: son nombres propios y van como strings.
 */
export const experience = [
  {
    company: "LFi",
    url: "https://www.linkedin.com/company/lficl/",
    logo: lfilogo,
    location: {
      es: "Chile",
      en: "Chile",
    },
    start: "2025-11-01",
    end: "2026-09-30",
    role: {
      es: ".NET Backend Developer",
      en: ".NET Backend Developer",
    },
    summary: {
      es: "Incorporado como Mid Senior Backend .NET en una célula de 6 personas (2 backend, 2 frontend, 1 especialista en contenidos, 1 PM), para un cliente corporativo del sector de seguridad y salud laboral en Chile.",
      en: "Joined as a Mid-Senior .NET Backend Developer in a 6-person squad (2 backend, 2 frontend, 1 content specialist, 1 PM) for a corporate client in the occupational health and safety sector in Chile.",
    },
    highlights: [
      {
        es: "Desarrollo y mantenimiento de Web APIs en C# y .NET Framework 4.8, con integraciones a servicios externos.",
        en: "Development and maintenance of Web APIs in C# and .NET Framework 4.8, with integrations to external services.",
      },
      {
        es: "Integré la API de OpenAI —integración del servicio y diseño de prompts— en un chatbot en producción con 50–100 usuarios semanales.",
        en: "Integrated the OpenAI API —service integration and prompt design— into a production chatbot with 50–100 weekly users.",
      },
      {
        es: "Reestructuré el proyecto Web API separándolo en capas de servicios y controllers, sobre un sistema en producción.",
        en: "Restructured the Web API project into service and controller layers, on a system already in production.",
      },
      {
        es: "Refactoricé clases anidadas que generaban archivos de más de 1.000 líneas, separándolas en clases con responsabilidad única.",
        en: "Refactored nested classes that produced files of more than 1,000 lines, splitting them into single-responsibility classes.",
      },
      {
        es: "Definí los criterios mínimos de seguridad de los features de backend y resolví los hallazgos reportados por el equipo de ciberseguridad del cliente.",
        en: "Defined the minimum security criteria for backend features and resolved the findings reported by the client's cybersecurity team.",
      },
      {
        es: "Impulsé y establecí la documentación técnica y funcional del equipo en Azure DevOps Wiki, donde no existía documentación previa.",
        en: "Drove and established the team's technical and functional documentation in Azure DevOps Wiki, where no previous documentation existed.",
      },
      {
        es: "Documenté features en registro técnico y funcional para los stakeholders del cliente.",
        en: "Documented features in technical and functional records for the client's stakeholders.",
      },
      {
        es: "Configuración y gestión de contenidos sobre Sitefinity CMS.",
        en: "Configuration and content management on Sitefinity CMS.",
      },
      {
        es: "Interlocución directa con los analistas de producto del cliente para definición de features, análisis de bugs y flujos de proceso.",
        en: "Direct liaison with the client's product analysts for feature definition, bug analysis, and process flows.",
      },
    ],
    techStack: [
      "C#",
      ".NET Framework 4.8",
      "ASP.NET Web API",
      "SQL Server",
      "Sitefinity CMS",
      "OpenAI API",
      "Azure DevOps",
      "Git",
    ],
  },
  {
    company: "Educaria",
    url: "https://www.linkedin.com/company/educaria-euro/",
    logo: educariaLogo,
    location: {
      es: "España",
      en: "Spain",
    },
    start: "2021-09-01",
    end: "2025-03-31",
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Educaria dispone de soluciones adaptadas para todo tipo de Instituciones Educativas. Durante mi experiencia trabajé en 3 equipos, participando en desarrollo, migraciones, testing, optimización y mantenimiento de plataformas educativas.",
      en: "Educaria offers solutions tailored to all types of educational institutions. During my time there, I worked across three teams, participating in the development, migration, testing, optimization, and maintenance of educational platforms.",
    },
    groups: [
      {
        label: {
          es: "Equipo LATAM (11 personas: 8 desarrolladores, 2 QA, 1 PO)",
          en: "LATAM Team (11 people: 8 developers, 2 QA, 1 PO)",
        },
        highlights: [
          {
            es: "Desarrollo y mantenimiento de funcionalidades con C#, .NET Framework 4.6 y .NET Core 3.0.",
            en: "Development and maintenance of functionalities using C#, .NET Framework 4.6, and .NET Core 3.0.",
          },
          {
            es: "Desarrollo de interfaces con ASP.NET Web Forms, jQuery, Ajax y JavaScript.",
            en: "Interface development using ASP.NET Web Forms, jQuery, Ajax, and JavaScript.",
          },
          {
            es: "Control de versiones con TFS y Git en equipos distribuidos.",
            en: "Version control with TFS and Git in distributed teams.",
          },
        ],
      },
      {
        label: {
          es: "Equipo de Migraciones (4 personas: 3 desarrolladores, 1 PM)",
          en: "Migration Team (4 people: 3 developers, 1 PM)",
        },
        highlights: [
          {
            es: "Co-desarrollé una aplicación para migración y adaptación de datos durante el onboarding de nuevos clientes. El proceso pasó de 1–2 días de trabajo manual a 5–10 minutos automatizados, con 85–90 % de integridad verificada y trazabilidad mediante logging. Utilizada con 30–40 clientes y volúmenes de 150.000–200.000 registros por base de datos.",
            en: "Co-developed an application for data migration and adaptation during new client onboarding. The process shifted from 1–2 days of manual work to 5–10 minutes of automation, achieving 85–90% verified integrity and traceability via logging. It was used with 30–40 clients, handling volumes of 150,000–200,000 records per database.",
          },
          {
            es: "Evalué y propuse la librería para manejo de archivos CSV, reemplazando una dependencia de terceros por System.Data.Common.",
            en: "Evaluated and proposed the library for handling CSV files, replacing a third-party dependency with System.Data.Common.",
          },
          {
            es: "Interlocución con soporte para definición de funcionalidades, análisis de bugs y flujos de proceso.",
            en: "Liaison with the support team for feature definition, bug analysis, and process flows.",
          },
        ],
      },
      {
        label: {
          es: "Equipo de España (16 personas: 12 desarrolladores, 2 QA, 2 PM)",
          en: "Spain Team (16 people: 12 developers, 2 QA, 2 PM)",
        },
        highlights: [
          {
            es: "Co-desarrollé un framework interno de testing que redujo la creación de tests de 1–2 horas a 5–10 minutos. Fue adoptado por 2 equipos (20 desarrolladores) y utilizado para crear ~1.000 tests unitarios y de integración.",
            en: "Co-developed an internal testing framework that cut test creation from 1–2 hours to 5–10 minutes. It was adopted by 2 teams (20 developers) and used to create ~1,000 unit and integration tests.",
          },
          {
            es: "Desarrollo con C#/.NET, consultas complejas en T-SQL, procedimientos almacenados y transacciones. Optimicé consultas reduciendo tiempos de ~30 a ~5 segundos.",
            en: "Development with C#/.NET, complex T-SQL queries, stored procedures, and transactions. Optimized queries, cutting run times from ~30 to ~5 seconds.",
          },
          {
            es: "Pruebas unitarias e integración con MSTest y xUnit, mocking y cobertura por módulo.",
            en: "Unit and integration testing with MSTest and xUnit, mocking, and per-module coverage.",
          },
          {
            es: "Diagnóstico y resolución de fallos en pipelines CI/CD con Jenkins.",
            en: "Diagnosis and resolution of failures in CI/CD pipelines with Jenkins.",
          },
          {
            es: "Participación en estimaciones, planificación y refinamiento bajo Scrum.",
            en: "Participation in estimation, planning, and refinement under Scrum.",
          },
          {
            es: "Acompañamiento a nuevos integrantes en flujos de negocio y módulos.",
            en: "Onboarding support for new team members on business flows and modules.",
          },
        ],
      },
    ],
    techStack: [
      "C#",
      ".NET Framework 4.8",
      ".NET Core 3.0",
      "ASP.NET Web API",
      "SQL Server",
      "T-SQL",
      "Git",
    ],
  },
  {
    company: "Freelancer",
    url: null,
    logo: freelanceLogo,
    location: {
      es: "Argentina",
      en: "Argentina",
    },
    start: "2019-03-01",
    end: "2019-12-31",
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Sistemas de gestión.",
      en: "Management systems.",
    },
    highlights: [
      {
        es: "Sistema de gestión para consultorio medico. Trabajé en equipo para desarrollar un sistema web para la gestión de un consultorio médico, permitiendo la administración eficiente de doctores, pacientes y turnos. Implementé funcionalidades para la asignación y control de citas médicas, optimizando la organización y mejorando la experiencia de usuarios.",
        en: "Management system for a medical office. I worked as part of a team to develop a web-based system for managing a medical office, enabling efficient management of doctors, patients, and appointments. I implemented features for scheduling and managing medical appointments, optimizing organization and improving the user experience.",
      },
      {
        es: "Sistema de gestión para local gastronómico. Trabajé en equipo para desarrollar una aplicación para la gestión integral de un local gastronómico, mejorando el control de stock, administración de empleados, gestión de clientes, ventas en el local y pedidos.",
        en: "Management system for a restaurant. I worked as part of a team to develop an application for the comprehensive management of a restaurant, improving inventory control, employee management, customer management, on-site sales, and ordering.",
      },
    ],
    techStack: [
      "C#",
      "Windows Forms",
      ".NET Core 2.2",
      "SQL Server",
      "React 16.8",
      "Ajax",
      "jQuery",
      "JavaScript",
      "TFS",
    ],
  },
];
