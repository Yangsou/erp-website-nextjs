# Linting & Code Quality Guide

This project uses a strict ESLint + Prettier configuration with TypeScript for
maintaining high code quality.

## 🛠️ Tools

- **ESLint** `v9.39.1` - JavaScript/TypeScript linting with flat config
- **Prettier** `v3.6.2` - Code formatting
- **TypeScript** `v5.8.3` - Type checking
- **Husky** - Git hooks for automated checks
- **lint-staged** - Run linters on staged files only

## 📜 Available Scripts

### Linting

```bash
# Run ESLint on all files
npm run lint

# Fix auto-fixable ESLint issues
npm run lint:fix

# Strict linting (no warnings allowed)
npm run lint:strict
```

### Formatting

```bash
# Format all files
npm run format

# Check formatting without modifying files
npm run format:check
```

### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

### Combined Checks

```bash
# Run all checks (format, lint, type-check)
npm run check

# Fix format and lint issues
npm run fix

# Clean all caches
npm run clean
```

## 🎯 Strict Rules Enabled

### TypeScript Rules

- ✅ No explicit `any` types
- ✅ No unsafe operations (calls, assignments, member access)
- ✅ Enforced nullish coalescing (`??`)
- ✅ Consistent type imports/exports
- ✅ Strict naming conventions (PascalCase components, camelCase functions)
- ✅ No non-null assertions (`!`)
- ✅ No floating promises

### React/Next.js Rules

- ✅ JSX key prop validation
- ✅ Self-closing components
- ✅ Exhaustive hook dependencies
- ✅ Accessibility rules (jsx-a11y)

### Code Quality Rules

- ✅ Import organization (alphabetical with newlines)
- ✅ Complexity limits (max 15 cyclomatic complexity)
- ✅ File size limits (max 500 lines)
- ✅ Function size limits (max 150 lines)
- ✅ Max nesting depth (4 levels)
- ✅ No console.log (warnings only)

## 🚀 Performance Optimizations

### Caching

All tools use persistent caching for faster subsequent runs:

```
node_modules/.cache/
├── eslint/.eslintcache      # ESLint cache
├── prettier/.prettiercache  # Prettier cache
└── typescript/              # TypeScript incremental builds
```

**Performance Improvement:**

- ESLint: ~58% faster on cached runs
- Prettier: ~20% faster on cached runs
- TypeScript: Incremental compilation enabled

### TypeScript Parser

Uses `projectService: true` for optimized TypeScript parsing via language
service.

## 🪝 Git Hooks

### Pre-commit

Runs on every commit:

1. Formats staged files with Prettier
2. Lints and fixes staged files with ESLint
3. Fails if errors remain after auto-fix

### Commit Message

Validates commit messages follow conventional commits format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Tests
- `chore:` - Maintenance

### Pre-push

Runs TypeScript type-check before pushing to remote.

## 💡 Tips

### Fixing Unused Variables

Prefix with underscore:

```typescript
// ❌ Bad
.map((item, index) => ...)

// ✅ Good
.map((item, _index) => ...)
```

### Type Safety

```typescript
// ❌ Bad
const data: any = response.data

// ✅ Good
type ApiResponse = { data: User[] }
const data: ApiResponse = response.data
```

### Import Organization

Imports are automatically organized:

```typescript
// Built-in modules
import { useState } from 'react'

// External packages
import axios from 'axios'

// Internal imports
import { Button } from '@/components/ui/button'

// Types (always last)
import type { User } from '@/types'
```

## 🔧 VSCode Integration

Install recommended extensions:

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)

Settings are pre-configured in `.vscode/settings.json`:

- Format on save enabled
- ESLint auto-fix on save
- TypeScript workspace SDK

## 🐛 Troubleshooting

### Clear All Caches

```bash
npm run clean
```

### ESLint Not Working

```bash
# Verify ESLint config
npx eslint --print-config eslint.config.mjs

# Clear ESLint cache
rm -rf node_modules/.cache/eslint
```

### Prettier Formatting Issues

```bash
# Clear Prettier cache
rm -rf node_modules/.cache/prettier

# Re-check formatting
npm run format:check
```

### Type Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache/typescript

# Re-run type check
npm run type-check
```

## 📊 CI/CD Integration

For GitHub Actions:

```yaml
name: Lint & Type Check

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Restore cache
        uses: actions/cache@v3
        with:
          path: node_modules/.cache
          key: ${{ runner.os }}-cache-${{ hashFiles('**/package-lock.json') }}

      - name: Run checks
        run: npm run check:ci
```

## 📈 Metrics

Run `npm run lint` to see current issues in your codebase.

## 🎓 Learning Resources

- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🤝 Contributing

Before submitting PRs:

1. Run `npm run fix` to auto-fix issues
2. Run `npm run check` to verify all checks pass
3. Ensure commit messages follow conventional format
4. All pre-push hooks must pass

---

**Note:** This configuration is strict by design to maintain high code quality.
If rules are too restrictive, discuss with the team before relaxing them.
