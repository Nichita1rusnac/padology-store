# Студия падологии (Padolog)

React SPA for the Padolog studio site. Built with Vite, TypeScript, React Router, shadcn/ui, and Tailwind CSS.

## Requirements

- **Node.js** 18+ and **npm** (or [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install Node)

## Setup and run

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (output in `dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

- `src/` — app source
  - `components/` — reusable UI (including `components/ui` for shadcn)
  - `widgets/` — page sections (Header, Footer, HeroSection, etc.)
  - `pages/` — route pages
  - `shared/` — shared state, i18n, etc.
  - `lib/`, `hooks/` — utilities and hooks
- `public/` — static assets (images)
