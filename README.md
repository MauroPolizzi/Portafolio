# Portfolio — Mauro Polizzi

Sitio personal hecho con Next.js 14 (Pages Router) y Tailwind CSS.
Se publica como sitio estático en **https://mauropolizzi.github.io/Portafolio/**.

---

## Requisitos

- **Node 22** (la versión está fijada en [`.nvmrc`](.nvmrc))
- **npm** (el lockfile es `package-lock.json`; no usar yarn)

```bash
npm install
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en **http://localhost:3000/Portafolio** |
| `npm run lint` | ESLint con las reglas de Next |
| `npm run build` | Genera el sitio estático en `out/` |

> La URL de desarrollo incluye `/Portafolio` porque el sitio vive en una subcarpeta
> de github.io. Está configurado con `basePath` en [`next.config.mjs`](next.config.mjs).

---

## Cómo agregar o cambiar contenido

Casi todo el contenido está separado de los componentes, en `src/Data/`.

### Una experiencia laboral

1. Poné el logo en `src/assets/images/logos/`.
2. Agregá un bloque al principio de la lista en [`src/Data/experience.js`](src/Data/experience.js)
   (se muestran en el orden de la lista, lo más reciente primero).

```js
{
  company: "Empresa",
  url: "https://...",            // opcional: enlace del logo
  logo: logoImportadoArriba,
  start: "2025-01-15",           // AAAA-MM-DD
  end: null,                     // null = actualidad
  role: { es: "Puesto", en: "Role" },
  summary: { es: "...", en: "..." },
  highlights: [{ es: "...", en: "..." }],
}
```

La duración ("3 años y 6 meses") se calcula sola a partir de las fechas.

### Datos personales, enlaces o CV

[`src/Data/profile.js`](src/Data/profile.js): nombre, frases del efecto de tipeo,
email, LinkedIn y rutas de los PDF del CV.

Para actualizar el CV, reemplazá el archivo en `public/pdfs/`. Si mantenés el mismo
nombre de archivo no hay que tocar código.

### Habilidades y tecnologías

[`src/Data/data.js`](src/Data/data.js) (`expertiseData`): cada entrada es un título y
un ícono de [react-icons](https://react-icons.github.io/react-icons/).

### Textos de la interfaz

[`src/translate/es.json`](src/translate/es.json) y [`en.json`](src/translate/en.json):
títulos de sección, botones y los párrafos de "Sobre mí". **Las dos versiones tienen
que tener las mismas claves.**

### Imágenes

| Dónde | Para qué |
| --- | --- |
| `src/assets/images/` | Imágenes que usan los componentes (se importan). Si el nombre está mal, **el build falla**, que es lo que queremos |
| `public/` | Archivos servidos por URL: PDFs del CV, favicon |

Las rutas de `public/` se escriben con el helper `asset()` de
[`src/common/asset`](src/common/asset/index.js) para que incluyan el `basePath`.

---

## Publicación

Es automática. No hay que compilar ni subir archivos a mano.

```text
git commit + git push a master
        ↓
GitHub Actions (.github/workflows/deploy.yml)
        ↓
npm ci  →  npm run lint  →  npm run build
        ↓
Deploy a GitHub Pages
```

- El progreso se ve en la pestaña **Actions** del repositorio.
- **Si el lint o el build fallan, no se publica nada** y el sitio queda con la última
  versión que funcionaba. GitHub avisa por email.
- En un pull request el workflow solo valida, no publica.
- También se puede lanzar a mano desde Actions → *Build & Deploy* → *Run workflow*.

### Volver atrás

```bash
git revert <commit>
git push
```

El workflow vuelve a correr y republica la versión anterior.

### Configuración de GitHub Pages

En *Settings → Pages*, **Source** tiene que estar en **GitHub Actions**.
La rama `gh-port` es el método viejo de publicación (archivos compilados a mano) y
ya no se usa.

---

## Notas técnicas

- `output: 'export'` genera HTML estático: no hay servidor, ni API routes, ni SSR.
- Las imágenes van con `images.unoptimized` porque Pages no puede optimizarlas.
- Google Analytics se carga desde [`src/pages/_app.js`](src/pages/_app.js) y **solo en
  producción**, así las visitas locales no se cuentan.
- El idioma (es/en) se cambia en el cliente con i18next.
