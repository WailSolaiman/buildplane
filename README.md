# Buildplane

Marketing site for **Buildplane** — a fictional Brooklyn studio portfolio built with React. It ships as a static SPA: product/brand studio narrative, work grid, about, journal, and a contact page with a static form.

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) for client-side routes
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://www.framer.com/motion/) for scroll and UI motion (`MotionConfig` respects `prefers-reduced-motion`)
- [Lucide React](https://lucide.dev/) for icons

## Routes

| Path        | Page        |
| ----------- | ----------- |
| `/`         | Home        |
| `/studio`   | Studio work |
| `/about`    | About       |
| `/journal`  | Journal     |
| `/reach-us` | Contact     |

## Project layout

- **`src/pages/`** — Route-level components (mostly layout + mapping over data).
- **`src/content/`** — Copy and asset paths per domain (`site.ts`, `home.ts`, `studio.ts`, `journal.ts`, `about.ts`, `reachUs.ts`). One file per area; swap text or image filenames here.
- **`src/components/`** — Shared UI (`Nav`, `Hero`, `ThemeToggle`, `PageHeader`, home sections, motion helpers).
- **`src/theme/`** — `ThemeContext` for light/dark; `data-theme` on `<html>` drives CSS variables in `src/index.css`.
- **`public/`** — Static files served as-is: `favicon.svg`, `icons.svg`, and image folders such as `home/`, `studio/`, `about/`, `journal/` referenced from content modules.

Global site facts (name, email, address, team size) live in **`src/content/site.ts`**.

## Hero video

The home hero uses **Mux** player embeds (URLs in `src/components/Hero.tsx`). Replace those URLs if you use different assets.

## Requirements

- Node.js compatible with Vite 8 (current LTS recommended).

## License

Private / unpublished — adjust if you open-source the repo.

## Creator

**Wail Solaiman** — [wailsolaiman.com](https://wailsolaiman.com)
