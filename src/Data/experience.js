import educariaLogo from "@/assets/images/logos/educaria_argentina_logo.jpeg";
import freelanceLogo from "@/assets/images/logos/liberoprofessionista_logo.jpeg";

/**
 * Experiencia laboral. Se muestra en el orden de esta lista (lo más reciente primero).
 *
 * Para agregar una experiencia:
 *   1. Copiá el logo en src/assets/images/logos/ e importalo arriba.
 *   2. Agregá un bloque nuevo al principio de la lista.
 *
 * Campos:
 *   start / end : fechas ISO "AAAA-MM-DD". end: null significa "actualidad".
 *   url         : opcional. Si está, el logo y el nombre enlazan ahí.
 *   role        : puesto.
 *   summary     : descripción de la empresa o del trabajo.
 *   highlights  : lista de logros. Cada uno se muestra como una viñeta.
 *
 * Los textos se escriben en los dos idiomas: { es: "...", en: "..." }.
 */
export const experience = [
  {
    company: "Educaria",
    url: "https://www.linkedin.com/company/educaria-euro/",
    logo: educariaLogo,
    start: "2021-09-01",
    end: "2025-03-30",
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Educaria dispone de soluciones adaptadas para todo tipo de Instituciones Educativas, colegios, escuelas infantiles, centros de formación profesional, academias, escuelas de negocio, universidades o bibliotecas.",
      en: "Educaria offers tailored solutions for all types of educational institutions, including schools, preschools, vocational training centers, academies, business schools, universities, and libraries.",
    },
    highlights: [
      {
        es: "Participé en desarrollo, mantenibilidad de plataformas educativas y software interno.",
        en: "I participated in the development and maintenance of educational platforms and internal software.",
      },
      {
        es: "Participé en la creación de una aplicación para la migración de datos de nuevos clientes, optimizando tiempos y reduciendo errores del proceso de migración anterior.",
        en: "I participated in the creation of an application for migrating new client data, optimizing time and reducing errors from the previous migration process.",
      },
      {
        es: "Implementé interfaces dinámicas, mejorando la experiencia de usuario.",
        en: "I implemented dynamic interfaces, improving the user experience.",
      },
      {
        es: "Diseñé y optimicé bases de datos, asegurando la integridad de los datos.",
        en: "I designed and optimized databases, ensuring data integrity.",
      },
      {
        es: "Automaticé pruebas unitarias y de integración, contribuyendo al desarrollo de un framework para disminuir el tiempo de desarrollo de los tests.",
        en: "I automated unit and integration tests, contributing to the development of a framework to reduce test development time.",
      },
      {
        es: "Gestioné versiones de código y participé en reuniones ágiles de planificación y estimación.",
        en: "I managed code versions and participated in agile planning and estimation meetings.",
      },
      {
        es: "Además, trabajé en despliegue e integración continuos, garantizando procesos eficientes en entornos colaborativos.",
        en: "I also worked on continuous deployment and integration, ensuring efficient processes in collaborative environments.",
      },
    ],
  },
  {
    company: "Freelance",
    url: null,
    logo: freelanceLogo,
    start: "2019-01-05",
    end: "2019-12-12",
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Sistemas de gestión.",
      en: "Management Systems.",
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
  },
];
