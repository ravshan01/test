# AGENTS.md

## Project Overview

Nuxt 4 application with TypeScript using a layered hexagonal architecture. The app currently renders a catalog page at `/catalog` with a mode switcher, region selector, subscription plan sections/cards, and empty states. The root route `/` redirects to `/catalog`. Domain data is mock data in Russian.

## Tech Stack

- **Runtime:** Nuxt `^4.4.4`, Vue `^3.5.33`, Vue Router `^5.0.6`
- **Language:** TypeScript `^6.0.3`, target `ES2024`
- **State:** Pinia `^3.0.4` via `@pinia/nuxt`
- **UI:** `radix-vue` headless primitives, local Vue components, CSS Modules where used
- **Styling:** CSS custom properties, `the-new-css-reset`, Inter Display font from `public/fonts/`
- **Linter/Formatter:** Biome `2.4.15` (no ESLint, no Prettier)
- **Mock Data:** `@faker-js/faker` with Russian locale data. Current mock data is generated at module-load time, not per request.
- **Package Manager:** npm (`package-lock.json` is committed)

## Commands

```bash
npm run dev              # Start Nuxt dev server
npm run build            # Production build
npm run generate         # Static site generation
npm run preview          # Preview production build
npx biome check .        # Lint + format check
npx biome check --write . # Lint + format fix
npx biome format --write . # Format only
npx biome lint --write . # Lint only
npx nuxt prepare         # Regenerate .nuxt types/config
npx tsc --noEmit         # Typecheck after Nuxt types exist
```

No test framework or test command exists yet.

## Code Style

- **Indentation:** Tabs
- **Quotes:** Double quotes in JS/TS
- **Semicolons:** Omit semicolons
- **Imports:** Let Biome organize imports (`assist.actions.source.organizeImports` is enabled)
- **Linter:** Biome recommended rules; `noStaticOnlyClass`, `noNonNullAssertion`, and `noSvgWithoutTitle` are disabled
- **Comments:** Do not add comments unless explicitly requested or needed to clarify non-obvious logic
- **CSS:** Prefer CSS Modules named `<ComponentName>.module.css` and imported as `styles` for reusable components. Existing pages may still use scoped CSS.
- **Static assets:** Keep component-local images in an `images/` folder and import them through Vite, e.g. `import icon from "./images/icon.svg"`. Keep fonts in `public/fonts/`.
- **Formatting note:** Some existing Vue files are not fully Biome-formatted yet. New edits should follow Biome style rather than copying inconsistent spacing or single quotes.

## Nuxt Layers

The root `nuxt.config.ts` registers layers via `extends` in this order:

```ts
[
	"./layers/ui",
	"./layers/regions",
	"./layers/plans",
	"./layers/catalog",
]
```

Current layers:

- `layers/ui` — global design tokens/styles and shared UI components (`UiProvider`, `UiTooltip`, icons)
- `layers/regions` — region DTO, service port/adapter/factory, region selector component
- `layers/plans` — plan type, plan group, and subscription plan DTOs, services, factories, subscription card component
- `layers/catalog` — catalog composition service, page, mode switcher, catalog-specific plan sections, empty states, composables, store, grouping utilities

Layer-local `nuxt.config.ts` files currently export empty `defineNuxtConfig({})`; root config owns modules, global CSS, route rules, and layer registration.

## Architecture

Domain layers follow a ports-and-adapters pattern where applicable:

```text
layers/<domain>/app/
├── dto/                    # Data Transfer Object interfaces
│   └── <name>.dto.ts
├── services/
│   ├── ports/              # Service interfaces/contracts
│   │   └── <name>-service.port.ts
│   └── adapters/           # Implementations
│       ├── <name>-service-<type>.adapter.ts
│       └── mock/           # Mock data, fixtures, helper utilities
│           ├── mock-<name>.data.ts
│           └── <util>.util.ts
├── factories/              # Service instantiation
│   └── <name>-service.factory.ts
├── components/             # Vue components
│   └── <ComponentName>/
│       ├── <ComponentName>.vue
│       ├── <ComponentName>.module.css
│       ├── use-<component>.ts
│       ├── utils/
│       ├── components/     # Component-local subcomponents
│       └── images/
├── composables/            # Vue composables
│   └── use-<name>.ts
├── stores/                 # Pinia stores
│   └── <name>.store.ts
├── utils/                  # Pure utilities
│   └── <name>.util.ts
└── pages/                  # Nuxt pages
    └── <name>.vue
```

Not every layer contains every directory. The `ui` layer is component/style focused and does not use service ports.

## Naming Conventions

- **DTOs:** Interfaces are prefixed with `I`, for example `IRegionDTO`, `IPlanTypeDTO`, `IPlanGroupDTO`, `ISubscriptionPlanDTO`, `ICatalogDTO`.
- **Ports:** Service interfaces are named `I<Name>Service`, for example `IRegionsService`, `IPlanTypesService`.
- **Adapters:** Implement ports and are named `<Name>Service<Mock|Api>Adapter`.
- **Factories:** Expose `create()` plus `getInstance()`. Existing factories cache through a static `instance` field and currently return mock adapters.
- **Mock data:** Export `const` arrays from `mock-<name>.data.ts`; mock helper utilities use the `.util.ts` suffix.
- **Composables:** Use `use-<name>.ts`. Current catalog split:
  - `use-catalog-fetch.ts` — raw `useAsyncData` service call
  - `use-catalog-data.ts` — fetch plus Pinia cache population
  - `use-catalog-view.ts` — view-state composition for the page
- **Component hooks:** Use `use-<component>.ts` colocated with the component when view logic is specific to that component.
- **Utils:** Keep framework-free pure functions in `utils/` with a `.util.ts` suffix. Component-specific utilities may live in a component-local `utils/` folder.

## Imports and Aliases

- Cross-layer imports commonly use Nuxt aliases:
  - `#layers/<layer>/app/...` in several components/composables
  - `~~/layers/<layer>/app/...` in services/factories/DTO imports
- Prefer existing aliases used by the surrounding file when editing.
- Cross-layer DTO imports are allowed where DTOs describe aggregate data.
- Adapters may compose other services through ports/factories instead of directly reaching into UI or store code.

## Current Cross-Layer Dependencies

```text
catalog.dto -> regions.dto, plan-types.dto, plan-groups.dto, subscription-plans.dto
plan-groups.dto -> regions.dto by ID, plan-types.dto by ID
subscription-plans.dto -> plan-groups.dto by ID
mock-plan-groups.data -> mock-regions.data, mock-plan-types.data
mock-subscription-plans.data -> mock-plan-groups.data
catalog-service-mock.adapter -> regions, plan types, plan groups, subscription plans services injected by constructor
catalog-service.factory -> RegionsServiceFactory, PlanTypesServiceFactory, PlanGroupsServiceFactory, SubscriptionPlansServiceFactory
```
