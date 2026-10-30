@AGENTS.md

# BeePops storefront

Next.js 16 storefront for BeePops (millet protein bars & honey, Jaipur). Shopify is the backend (Storefront API via plain `fetch`, Customer Account API for login, Shopify-hosted checkout).

## Code style: small, split, composed (always follow)

**Pages only compose.** `app/**/page.tsx` and `layout.tsx` import components and put them together. No markup blocks, no styling soup, no data shaping, no helper functions in them. Target **≤ 30 lines** per page.

```tsx
// app/page.tsx — the shape every page should have
export default function Home() {
  return (
    <>
      <Hero />
      <VariantsSection />
      <FeaturedProducts />
    </>
  );
}
```

**One component per file, small files.**
- Component files: aim for **≤ 60 lines**, hard limit **80**. Over that → split into child components.
- Lib/util files: hard limit **100** lines. Split by concern (e.g. GraphQL fragments vs. queries).
- If a component has distinct visual parts (image, price, actions), each part is its own file.

**Where things live**
- `components/<area>/` — feature folders: `layout/header/`, `layout/footer/`, `product/`, `home/`, `shop/`, `cart/`, `blog/`, `about/`, `account/`.
- A multi-part component gets a folder with an `index.tsx` that composes its parts (e.g. `components/layout/footer/index.tsx`).
- `components/shared/` — reusable bits used across areas (section headings, containers, badges).
- `components/ui/` — shadcn primitives only.
- Static content (nav links, footer links, FAQ text, testimonials) goes in a `data.ts` next to the component, not inline in JSX.
- `lib/shopify/` — all Shopify access. Components never call `fetch` to Shopify directly; they call functions from `@/lib/shopify`.

**Naming:** kebab-case file names, PascalCase component names, named exports (except Next.js `page`/`layout` default exports).

**Server first:** components are Server Components by default. Add `"use client"` only to the smallest leaf that needs state, effects or browser APIs.

**Before finishing any change:** run `npx tsc --noEmit` and `pnpm lint`, and check `wc -l` on touched files against the limits above.
