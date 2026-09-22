import { useTranslation } from "react-i18next";

/**
 * Los archivos de contenido (src/Data) guardan los textos como { es, en }.
 * Este hook devuelve el idioma activo y `tx`, que elige el texto correcto.
 *
 * const { tx } = useContent();
 * tx({ es: "Hola", en: "Hi" })  ->  "Hola" si la interfaz está en español
 */
export const useContent = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("es") ? "es" : "en";

  const tx = (value) => {
    if (typeof value === "string") return value;
    return value?.[lang] ?? value?.en ?? "";
  };

  return { lang, tx };
};
