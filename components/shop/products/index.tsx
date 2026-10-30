import { ResultsBar } from "./results-bar";
import { SHOP_PRODUCTS } from "./data";
import { ShopCard } from "./shop-card";

export function ShopProducts() {
  return (
    <div className="min-w-0 space-y-6">
      <ResultsBar />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {SHOP_PRODUCTS.map((product, i) => (
          <ShopCard key={product.href} product={product} preload={i < 3} />
        ))}
      </div>
    </div>
  );
}
