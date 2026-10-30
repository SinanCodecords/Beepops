import { formatPrice, type Money } from "@/lib/shopify";

type Props = { price: Money; compareAt: Money | null; showFrom?: boolean };

export function ProductPrice({ price, compareAt, showFrom }: Props) {
  const onSale = compareAt && Number(compareAt.amount) > Number(price.amount);
  return (
    <p className="flex items-baseline gap-1.5">
      <span className="text-base font-bold">
        {showFrom && <span className="text-xs font-medium">From </span>}
        {formatPrice(price)}
      </span>
      {onSale && (
        <span className="text-xs text-muted-foreground line-through">
          {formatPrice(compareAt)}
        </span>
      )}
    </p>
  );
}
