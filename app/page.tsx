import { ProductCard } from "@/components/product/product-card";
import { getProducts } from "@/lib/shopify";

// Temporary home page: shows every Shopify product as it will look in the shop.
// The real design lands in Step 2.
export default async function Home() {
  const products = await getProducts({ first: 50 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-tangerine uppercase">
        Live from Shopify
      </p>
      <h1 className="mt-2 text-5xl text-forest">All products</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Showing {products.length} products
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
