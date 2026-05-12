# AGENTS.md

## Project Overview

Nuxt 4 application with TypeScript using a hexagonal (ports & adapters) architecture organized via Nuxt Layers. The project is in early stages — no pages, components, or API routes exist yet. Mock data is in Russian.

## Tech Stack

- **Runtime:** Nuxt 4, Vue 3, Vue Router 5
- **Language:** TypeScript (target ES2024)
- **UI:** radix-vue (headless components, installed but unused)
- **Linter/Formatter:** Biome 2.4.15 (no ESLint, no Prettier)
- **Mock Data:** @faker-js/faker (Russian locale)
- **Package Manager:** npm

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview production build
npx biome check .  # Lint + format check
npx biome check --write .  # Lint + format fix
npx biome format --write . # Format only
npx biome lint --write .   # Lint only
npx tsc --noEmit   # Typecheck (after nuxt prepare)
```

No test commands exist yet (no test framework installed).

## Code Style

- **Indentation:** Tabs
- **Quotes:** Double quotes
- **Semicolons:** No semicolons (Biome default for JS/TS)
- **Imports:** Auto-organized (Biome assist enabled)
- **Linter:** Biome recommended rules, `noStaticOnlyClass` is OFF (factory classes use static methods)
- **Do not add comments** unless explicitly requested

## Architecture

### Nuxt Layers

Each domain lives in `layers/<domain>/app/` and is registered via `nuxt.config.ts` extends.

### Hexagonal Pattern (per layer)

```
layers/<domain>/app/
├── dto/                    # Data Transfer Objects (interfaces)
│   └── <name>.dto.ts
├── services/
│   ├── ports/              # Interfaces (contracts)
│   │   └── <name>-service.port.ts
│   └── adapters/           # Implementations
│       ├── <name>-service-<type>.adapter.ts
│       └── mock/           # Mock adapter data & fixtures
│           ├── mock-<name>.data.ts
│           └── <util>.util.ts
└── factories/              # Service instantiation (singleton pattern)
    └── <name>-service.factory.ts
```

### Conventions

- **Ports** are TypeScript interfaces named `I<Name>Service` (e.g. `IPlanTypesService`)
- **Adapters** implement port interfaces, named `<Name>Service<Mock|Api>Adapter`
- **DTOs** are interfaces prefixed with `I`, named `I<Name>DTO`
- **Factories** use a static `create()` method returning a singleton. Currently all factories return mock adapters.
- **Mock data** files export const arrays. Utility functions for generating random mock data go in `mock/` with a `.util.ts` suffix.
- **Cross-layer imports** are allowed from DTOs (e.g. `catalog.dto.ts` imports from both `regions.dto.ts` and `subscription-plans.dto.ts`). Adapters may import mock data from other layers.

### Current Layers

| Layer | Purpose | Ports | Adapters |
|---|---|---|---|
| `plans` | Subscription plan types & plans | `IPlanTypesService`, `ISubscriptionPlansService` | Mock adapters |
| `regions` | Geographic regions | `IRegionsService` | Mock adapter |
| `catalog` | Cross-domain composition | None yet | None yet |

### Cross-layer Dependencies

```
catalog.dto → regions.dto, plan-types.dto, subscription-plans.dto
subscription-plans.dto → regions.dto (by ID), plan-types.dto
mock-subscription-plans.data → mock-regions.data, mock-plan-types.data
```

## Important Files

- `nuxt.config.ts` — Nuxt configuration, layers registered via `extends`
- `biome.json` — Linter/formatter config
- `tsconfig.json` — Root TypeScript config (references `.nuxt/` configs)
- `app/app.vue` — App entry point (currently default Nuxt welcome)
