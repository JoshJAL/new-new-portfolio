# Joshua Levine Portfolio

Personal portfolio built with Next.js App Router, React, TypeScript, Tailwind
CSS, and MDX. The contact form stores messages in Turso through Drizzle ORM and
sends confirmation email through Resend.

## Setup

Install dependencies with Bun:

```bash
bun install
```

Copy the environment template and fill in the local values:

```bash
cp .env.example .env.local
```

The application uses these variables:

- `CONTACT_RATE_LIMIT_SECRET`: secret of at least 32 random bytes used to hash
  contact rate-limit keys. Generate one with `openssl rand -base64 32`.
- `DATABASE_URL`: Turso/libSQL database URL.
- `DATABASE_AUTH_TOKEN`: Turso/libSQL authentication token.
- `RESEND_API_KEY`: Resend API key used for contact confirmation email.

Start the development server:

```bash
bun run dev
```

The site is available at <http://localhost:3000>.

## Commands

- `bun run dev`: start the Turbopack development server.
- `bun run build`: create a production build.
- `bun run start`: serve the production build.
- `bun run format`: format the repository with Prettier.
- `bun run format:check`: verify repository formatting.
- `bun run lint`: run ESLint with zero warnings allowed.
- `bun run typecheck`: regenerate Next.js route types and run TypeScript.
- `bun run test`: run the Bun test suite.
- `bun run check`: run the complete verification pipeline.
- `bun run push`: push Drizzle schemas manually when a database change is
  intentional. This command is never part of routine verification.

## Architecture

The project uses Next.js's optional `src/` application root:

- `src/app/` contains App Router pages, layouts, metadata routes, global CSS,
  and MDX guide content.
- `src/components/` contains feature components and reusable UI.
- `src/server/actions/` contains the public contact Server Action.
- `src/types/` contains shared domain contracts.
- `src/utils/` contains site configuration, sitemap traversal, contact logic,
  environment validation, the database client, and Drizzle schemas.
- `src/mdx-components.tsx` remains at the `src/` root as required by Next.js.
- `public/` contains portfolio images and guide/project artwork.

The public contact action validates and normalizes every value on the server
before any side effect. A database failure is returned to the form as a safe
error. Once a message is stored, confirmation-email failure is logged but is not
surfaced as a failed submission, preventing retries from duplicating the
message.
