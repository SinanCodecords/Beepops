import { getProducts } from "@/lib/shopify";
import { ProductCard } from "./product-card";

export async function ProductGrid({ limit = 50 }: { limit?: number }) {
  const products = await getProducts({ first: limit });
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
