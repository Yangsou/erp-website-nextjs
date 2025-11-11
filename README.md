# Ai+Di Company Website

Building Ai that reflects human consciousness and enhances our potential for
conscious living in the digital age.

This is a [Next.js](https://nextjs.org/) project for the Ai+Di Company website,
featuring a modern, conscious approach to AI technology.

## About Ai+Di

Ai+Di (Ai that reflects. Not replaces.) is dedicated to developing AI systems
that enhance human wisdom, creativity, and connection. We create tools that
respect human agency, promote well-being, and foster communities where
technology serves humanity's highest aspirations while preserving what makes us
uniquely human.

## Features

- **Modern Design**: Clean, dark theme with cyan and blue accents
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Contact Integration**: Built-in contact forms and social media links
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui with design tokens in `app/globals.css`
- **UI Conventions**: Tailwind’s `font-sans` and `font-display` map to the
  custom Prompt and Space Grotesk font faces declared in `styles/fonts.css`.
  Extend tokens by editing `tailwind.config.mjs` (colors, radius, keyframes) and
  keep shadcn component updates in sync via `components.json`.
- **Component Scaffolding**: Generate new shadcn/ui primitives via
  `pnpm dlx shadcn@latest add <component>`; they arrive pre-wired to the design
  tokens above.
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Component Library**: Custom shadcn/ui components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Workflow

- **Formatting & Linting**: Use `pnpm format` to apply Prettier and `pnpm lint`
  for ESLint checks. To automatically fix lint issues run `pnpm fix`.
- **Type Safety**: Run `pnpm type-check` before pushing to ensure the codebase
  stays type-safe.
- **Preflight QA**: Execute `pnpm check` locally before opening a PR; it runs
  the formatting check, zero-warning lint, and type-check in sequence.
- **Git Hooks**: Husky installs pre-commit (lint-staged), commit-msg
  (commitlint), and pre-push (typecheck) hooks. If hooks do not run, execute
  `pnpm prepare` once to reinstall them.
- **Commit Messages**: Follow the
  [Conventional Commits](https://www.conventionalcommits.org/) spec (e.g.,
  `feat: add hero section animation`) using one of
  `build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|types`. Hooks
  will reject non-compliant commits.

## Project Structure

- `app/` - Next.js App Router pages and layout
- `components/` - Reusable React components
- `public/` - Static assets including logos and images
- `styles/` - Global CSS and Tailwind configuration

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment

This project is optimized for deployment on Vercel, but can be deployed to any
platform that supports Next.js applications.

## Contact

For questions about this project or Ai+Di Company, please visit our website or
contact us through the provided channels.
