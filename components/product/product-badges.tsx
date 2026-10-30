export function ProductBadges({ discount, soldOut }: { discount: number; soldOut: boolean }) {
  return (
    <>
      {discount > 0 && (
        <span className="absolute top-3 left-3 rounded-md bg-amber px-2 py-0.5 text-[10px] font-bold text-forest uppercase">
          {discount}% off
        </span>
      )}
      {soldOut && (
        <span className="absolute top-3 right-3 rounded-md bg-foreground/80 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
          Sold out
        </span>
      )}
    </>
  );
}
