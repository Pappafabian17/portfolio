# Portfolio Personal Fabian Pappa - Next.js 15

Portfolio web desarrollado con Next.js 15 (App Router) + TypeScript.

## Características

- Soporte multilenguaje: Español, English, Italiano
- Internacionalización manual sin librerías externas
- Estilos con CSS Modules (sin Tailwind)
- Estructura simple y mantenible

## Stack

- Next.js 15 (App Router)
- TypeScript
- CSS Modules

## Estructura del proyecto

```txt
src/
  app/
    page.tsx
    page.module.css
    globals.css
  data/
    translations.ts
  types/
    i18n.ts
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Internacionalización (sin librerías)

La app usa:

- `Locale` tipado en `src/types/i18n.ts`
- Diccionario en `src/data/translations.ts`
- Estado local + `localStorage` para persistir idioma

Idiomas disponibles:

- `es`
- `en`
- `it`

## Buenas prácticas del proyecto

- Evitar estilos inline
- Usar CSS Modules por página/componente
- Mantener textos centralizados en `translations.ts`
- Evitar dependencias innecesarias

## Git y archivos ignorados

No se suben archivos internos como:

- `AGENTS.md`
- `CLAUDE.md`
- `.claude/`
- `.trae/`
- `.env*`

Revisar `.gitignore` para más detalle.
