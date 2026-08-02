<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may
all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation
notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Project-Specific Overrides

This repository intentionally uses Next.js's optional `src/` application root
and Bun as its package manager. In the reusable guidance below, references to
`app/`, `components/`, `server/`, `types/`, and `utils/` resolve to `src/app/`,
`src/components/`, `src/server/`, `src/types/`, and `src/utils/` for this
project. The existing `src/` layout is canonical and must not be moved to
root-level application folders.

Use Bun for dependency management and verification. Project commands use
`bun run`, and the lockfile is `bun.lock`.

## Reusable Project Style

### Purpose

This section is intended to be portable across projects. Copy it into other
repositories to preserve the same coding style, file organization, import
ordering, and verification habits. Project-specific rules elsewhere in an
`AGENTS.md` file override this reusable guidance.

### Formatting

Follow the project's Prettier configuration. The expected defaults are:

- Use 2-space indentation.
- Use semicolons.
- Use single quotes in JavaScript, TypeScript, and JSX.
- Use a 120-character print width for code.
- Use an 80-character print width for Markdown and MDX.
- Do not use trailing commas.
- Always include parentheses around arrow function parameters.
- Keep bracket spacing enabled.
- Use `endOfLine: "auto"`.
- Use `proseWrap: "always"`.
- Use `prettier-plugin-tailwindcss` so Prettier sorts Tailwind classes.

Portable Prettier config:

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxSingleQuote": true,
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "auto",
  "proseWrap": "always",
  "overrides": [
    {
      "files": ["*.md", "*.mdx"],
      "options": {
        "printWidth": 80
      }
    }
  ],
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

The block above stays portable, so it omits one project-specific key. Tailwind
v4 has no JavaScript config file for `prettier-plugin-tailwindcss` to read, so a
project on v4 must point the plugin at its CSS entry or theme classes such as
`bg-surface` will not sort. This repository's `.prettierrc.json` adds:

```json
{
  "tailwindStylesheet": "./src/app/globals.css"
}
```

### File Tree And Placement

- Prefer a root-level Next.js App Router structure. Do not introduce `src/`,
  `pages/`, `lib/`, or generic catch-all folders unless the project already uses
  them or the user explicitly asks.
- `app/` contains routes, layouts, loading states, metadata, and API route
  handlers.
- Keep route files thin. Pages and layouts should compose components, load data,
  redirect or call `notFound()`, and define metadata.
- `components/` contains reusable UI. Use `components/<feature>/` when a feature
  grows beyond one or two files.
- Feature UI controllers and hooks stay colocated with that feature, for example
  `components/businessCards/useBusinessCardScannerController.ts`.
- `server/actions/` contains server actions and authenticated server-side
  mutations.
- `server/fetches/` contains external data-fetching wrappers.
- `utils/` contains reusable non-UI logic, route handler helpers, integration
  clients, and domain utilities.
- Use `utils/<feature>/` for feature-specific helper modules.
- `types/` contains shared domain type declarations, usually one `.d.ts` file
  per domain.
- `public/` contains static assets.
- Avoid new broad folders like `helpers`, `misc`, or `shared` when an existing
  domain folder is clearer.

### Naming And Exports

- React components use PascalCase filenames and PascalCase function names.
- Hooks and controllers use lower camel case and start with `use`.
- Utility files and utility functions use lower camel case.
- Constants that are configuration-like use `UPPER_SNAKE_CASE`.
- Next.js route files keep framework-required names: `page.tsx`, `layout.tsx`,
  `loading.tsx`, and `route.ts`.
- Default-export primary React components and Next route components.
- Prefer named exports for utilities, server actions, fetchers, and shared
  constants.
- Keep props interfaces near the component unless reused across modules.
- Put shared domain contracts in `types/<domain>.d.ts`.
- Use small barrel files only when they create a useful client/server boundary
  or simplify a feature import.

### Import Ordering

Order file directives and imports in these sections:

1. File directives first, such as `'use client';` or `'use server';`.
2. Side-effect imports first, such as `import 'server-only';` or
   `import './globals.css';`.
3. Capitalized non-bracketed imports, such as
   `import Banner from '@/components/Banner';`.
4. Lowercase non-bracketed imports, including namespace imports such as
   `import parse from 'html-react-parser';` or `import * as d3 from 'd3';`.
5. Capitalized bracketed value imports, such as
   `import { SeoWizard } from '@/components/seo/SeoWizard';`.
6. Lowercase bracketed value imports, such as
   `import { fetchEventById } from '@/utils/seo/strapi';`.
7. Type imports, such as `import type { Metadata } from 'next';`.

Use exactly one blank line between each non-empty import section, and do not add
blank lines between imports inside the same section. After arranging imports
into these sections, apply the same cleanup/sort behavior as LazyVim's
`<leader>co` Organize Imports action for TypeScript/JavaScript files: run the
LSP `source.organizeImports` code action, or mirror its result manually. This
may remove unused imports and sort import declarations and named import
specifiers within each contiguous import section.

Keep the section structure above as the primary grouping rule; do not let
organize-imports collapse everything into one block. Split mixed named imports
by casing, and split mixed value/type imports so all `import type` declarations
are last. Use `@/` for cross-directory imports. Use relative imports for files
within the same feature folder. Exclude generated `next-env.d.ts`.

### TypeScript And React

- Keep TypeScript strict and avoid `any`; use `unknown` plus guards for external
  data.
- Prefer explicit return types on exported async functions, fetchers, actions,
  and shared utilities.
- Prefer Server Components by default.
- Add `'use client';` only when the file uses hooks, browser APIs, event
  handlers, or client-only libraries.
- Use `server-only` for modules that must never be imported into client bundles.
- Use `Promise.all` for independent async work.
- Keep request-time data access explicit with `connection()` when a page must
  opt out of static prerendering.
- Use `cacheLife` and `cacheTag` for cacheable server data where appropriate.

### Server Actions And API Routes

- Server actions begin with `'use server';`.
- Authenticate server-side with existing helpers such as `auth`, `checkAuth`, or
  `requireAuth`; never rely only on client-side checks.
- The contact action is intentionally public. It must validate, normalize, and
  bound every field on the server before performing database or email side
  effects, and it must return only the result shape needed by the form.
- API route handlers should stay thin and delegate reusable behavior to
  `utils/*Route.ts` helpers when logic is shared.
- Return typed action results for expected user-facing failures.
- Throw only for exceptional states or framework control flow.

### UI And Tailwind

- Use Tailwind CSS v4 utilities and project theme tokens from
  `src/app/globals.css`.
- Prefer existing shared components such as `GlassPanel`, `SectionHeading`,
  `ProjectPage`, `GlassButton`, `GlassButtonLink`, and `StyledLink` before
  creating new primitives.
- Keep layout structure simple: `container mx-auto px-4`, responsive grids,
  consistent gaps, and semantic HTML.
- Use project colors through tokens such as `dark-purple`, `caribbean-current`,
  `dark-cyan`, `champagne`, `desert-sand`, `davys-gray`, `bittersweet`,
  `naples-yellow`, `cerulean`, `verdigris`, and `project-slate`.
- Prefer the existing `react-icons` packages for new icons.
- Keep controls accessible with labels, `aria-*` where needed, and
  keyboard-friendly behavior.
- Let Prettier sort Tailwind classes.
- Always use Tailwind's canonical class names. Resolve every
  `suggestCanonicalClasses` diagnostic and prefer a built-in utility over an
  equivalent arbitrary value.

### Comments And Error Handling

- Add comments only for non-obvious platform behavior, data contracts,
  auth/caching reasons, or edge cases.
- Keep comments short and useful.
- Log synchronously before returning or throwing.
- Do not add post-response background work.

### Verification

- For code changes, run `bun run lint`.
- Run `bun run build` when changing routing, server actions, API handlers, auth,
  caching, or TypeScript contracts.
- Run `bun run check` before handing off a complete implementation sweep.
- For docs-only `AGENTS.md` changes, no automated test is required; review the
  rendered Markdown and `git diff`.

## Docs Planning Artifacts

Do not track planning documents under `docs/` in Git. `.gitignore` excludes docs
Markdown files whose names contain `plan` or `Plan`, including nested paths such
as `docs/type-cleanup-plan.md`.
