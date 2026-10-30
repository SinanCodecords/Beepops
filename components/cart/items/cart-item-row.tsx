import Image from "next/image";
import type { CartItem } from "../data";
import { CartItemInfo } from "./cart-item-info";
import { QuantityStepper } from "./quantity-stepper";

export function CartItemRow({ item }: { item: CartItem }) {
  return (
    <li className="flex gap-4 border-b border-border p-4 md:gap-6 md:px-6 md:py-6">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[#f5f1e8] md:size-[110px]">
        <Image src={item.image} alt={item.title} fill sizes="110px" className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <CartItemInfo item={item} />
        <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
          <p className="sm:text-right">
            <span className="block text-xs font-medium text-stone">Total</span>
            <span className="text-base font-bold text-forest">{item.total}</span>
          </p>
          <QuantityStepper initial={item.quantity} />
        </div>
      </div>
    </li>
  );
}
