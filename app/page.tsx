import { formatPrice, getProducts } from "@/lib/shopify";

// Temporary home page: proves the Shopify connection. The real design lands in Step 2.
export default async function Home() {
  const products = await getProducts({ first: 12 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-tangerine uppercase">
        Connected to Shopify
      </p>
      <h1 className="mt-2 text-5xl text-forest">Snack smart, stay strong</h1>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <li key={p.id} className="rounded-xl bg-cream px-4 py-3 text-sm">
            <span className="font-medium">{p.title}</span>
            <span className="ml-2 text-muted-foreground">
              {formatPrice(p.priceRange.minVariantPrice)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
