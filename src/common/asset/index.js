const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefija una ruta de la carpeta public/ con el basePath del sitio.
 * Solo hace falta para archivos que se referencian por URL (PDFs, favicon):
 * las imágenes importadas desde src/assets ya reciben el prefijo solas.
 *
 * asset("/pdfs/cv.pdf") -> "/Portafolio/pdfs/cv.pdf"
 */
export const asset = (path) => `${BASE_PATH}/${String(path).replace(/^\/+/, "")}`;
