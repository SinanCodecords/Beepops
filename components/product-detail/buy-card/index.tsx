import { BuyActions } from "./buy-actions";
import { ProductBadges } from "./product-badges";
import { ProductIdentity } from "./product-identity";
import { ProductPriceRow } from "./product-price-row";
import { PurchaseOptions } from "./purchase-options";
import { TrustBadges } from "./trust-badges";

export function BuyCard() {
  return (
    <div className="rounded-3xl border border-[#e5e5e5] bg-white p-5 md:p-6 lg:sticky lg:top-28">
      <ProductBadges />
      <ProductIdentity />
      <ProductPriceRow />
      <PurchaseOptions />
      <BuyActions />
      <TrustBadges />
    </div>
  );
}
