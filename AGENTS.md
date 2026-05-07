# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only** Next.js 14 marketing landing page (no backend, no database, no external APIs).

### Services

| Service | Command | Port |
|---------|---------|------|
| Next.js dev server | `npm run dev` | 3000 |

### Quick reference

- **Install deps:** `npm install`
- **Type-check:** `npx tsc --noEmit`
- **Build:** `npm run build`
- **Dev server:** `npm run dev` (serves at http://localhost:3000)

### Notes

- There is no ESLint config or `lint` script in `package.json`. Use `npx tsc --noEmit` for static analysis.
- No `.env` files or secrets are needed; the site is purely static.
- The project uses the App Router (`app/` directory). The entire site is a single page (`app/page.tsx`) composed of components in `components/`.
- Design conventions are documented in `.claude/skills/taste-skill.md`.
