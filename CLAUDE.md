# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- **Dev server:** `bun run dev` (Next.js with Turbopack)
- **Build:** `bun run build`
- **Start production:** `bun run start`
- **Lint:** `bun run lint`
- **DB schema push:** `bun run push` (Drizzle Kit → Turso)

Package manager is **Bun** (not npm/yarn).

## Architecture

**Next.js 15 App Router** portfolio site (TypeScript, React 19) deployed on Vercel.

### Content Strategy

- **Guides** are MDX files at `src/app/guides/[guide]/page.mdx`, wrapped in the `MarkdownPage` component
- **Projects** are statically defined in `src/app/projects/page.tsx` with individual detail pages in `src/app/projects/[project-folder]/page.tsx`
- **Photography** galleries live under `src/app/photography/` organized by month
- Custom MDX component overrides in `src/mdx-components.tsx` (internal links → `StyledLink`, external links get custom styling)

### Data Flow & Server Actions

- Contact form uses TanStack React Form + Zod validation (`src/zod-schemas/contact.ts`)
- Server actions in `src/server/actions/`: `messages.ts` writes to Turso SQLite via Drizzle ORM, `email.ts` sends via Resend
- Database schema defined in `src/db/schema/`, client initialized in `src/db/index.ts`

### Styling

- **Tailwind CSS 4** with inline theme in `src/app/globals.css` using CSS custom properties for a custom color palette (dark-purple, caribbean-current, champagne, bittersweet, etc.)
- Custom CSS classes in globals.css: `.comic-shadow`, `.gradient_underline`, `.nice-hover`, `.pop` (glassmorphism)
- Fonts: Roboto (interactive elements), Lexend (body)
- Prettier with Tailwind plugin handles class sorting

### Component Organization

- `src/components/ui/` — shared reusable components (CodeBlock, StyledLink, ButtonLink, ImageSlider, etc.)
- `src/components/home/` — homepage sections (Intro, Experience, Education, Freelance, RecentProjects)
- `src/components/forms/` — contact form with custom field components and `useAppForm` hook
- `src/components/header/`, `src/components/footer/` — layout components
- Page-specific components colocated with their features (projects/, photography/, about/)

### Key Patterns

- Path aliases: `@/*` → `./src/*`, `@/public/*` → `./public/*`
- View transitions via `next-view-transitions` (wraps router in root layout)
- React Compiler enabled (experimental)
- TypeScript strict mode; type definitions in `src/types/`
- `ButtonLink` has multiple color variants (default, colorSwap, colorSwap2, colorSwap3, colorSwap4, red)

### Environment Variables

- `DATABASE_URL` — Turso SQLite connection
- `DATABASE_AUTH_TOKEN` — Turso auth
- `RESEND_API_KEY` — email service
