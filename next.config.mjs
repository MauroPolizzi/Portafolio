/**
 * El sitio se publica en https://mauropolizzi.github.io/Portafolio/, o sea que
 * vive dentro de la subcarpeta /Portafolio y no en la raíz del dominio.
 * `basePath` hace que Next genere todas las rutas internas con ese prefijo.
 * Si algún día se usa un dominio propio o el repo pasa a ser un "user site",
 * alcanza con dejar BASE_PATH como cadena vacía.
 */
const BASE_PATH = "/Portafolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un sitio 100% estático en out/, que es lo que publica GitHub Pages.
  output: "export",
  // GitHub Pages no puede optimizar imágenes en el servidor.
  images: { unoptimized: true },
  basePath: BASE_PATH,
  // Se expone al navegador para poder prefijar rutas de public/ (ver src/common/asset).
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
