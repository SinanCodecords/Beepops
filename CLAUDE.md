@AGENTS.md

# BeePops storefront

Next.js 16 storefront for BeePops (millet protein bars & honey, Jaipur). Shopify is the backend (Storefront API via plain `fetch`, Customer Account API for login, Shopify-hosted checkout).

## Code style: few, purposeful files (always follow)

**Pages only compose.** `app/**/page.tsx` and `layout.tsx` import components and put them together. No markup blocks, no styling soup, no data shaping, no helper functions in them. Target **≤ 30 lines** per page.

```tsx
// app/page.tsx — the shape every page should have
export default function Home() {
  return (
    <>
      <Hero />
      <Variants />
      <FeaturedSnacks />
    </>
  );
}
```

**One file per section or feature, not per tiny piece.**
- A section (hero, FAQ, footer, cart summary…) lives in **one file**. Its small parts (a card, a row, a title) are plain non-exported functions in that same file.
- Only create a new file when it earns it:
  1. it is **reused** by another file, or
  2. it needs **`"use client"`** (client code must be its own file — keep all of a section's client bits together in one file), or
  3. the file would pass **~150 lines**.
- Never make a file that only wraps or re-returns another component.
- Lib/util files: hard limit **100** lines. Split by concern (e.g. GraphQL fragments vs. queries).

**Where things live**
- `components/<area>/` — one folder per area with several files (`layout/`, `shared/`, `home/`, `shop/`, `product-detail/`, `cart/`, `blog/`, `account/`). Files inside are flat. An area that fits in one file is just `components/<area>.tsx` (e.g. `about.tsx`, `locations.tsx`).
- An area with several sections has an `index.ts` barrel so pages import from `@/components/<area>`.
- `components/shared/` — reusable bits used across areas (section, section heading, buttons, star rating).
- `components/ui/` — shadcn primitives only.
- Static content (nav links, FAQ text, testimonials) is a `const` at the top of the section file. Move it to the area's `data.ts` only when it is long or used by several files.
- `lib/shopify/` — all Shopify access. Components never call `fetch` to Shopify directly; they call functions from `@/lib/shopify`.

**Naming:** kebab-case file names, PascalCase component names, named exports (except Next.js `page`/`layout` default exports).

**Server first:** components are Server Components by default. Add `"use client"` only to the part that needs state, effects or browser APIs.

**Before finishing any change:** run `npx tsc --noEmit` and `pnpm lint`, and check `wc -l` on touched files and make sure no file exists only to wrap another.
