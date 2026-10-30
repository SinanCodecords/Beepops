export function RatingBar({ stars, percent }: { stars: number; percent: number }) {
  return (
    <div className="flex items-center gap-2 text-[10.5px]">
      <span className="w-2.5 font-semibold text-ink">{stars}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-[3px] bg-[#f0f0ee]">
        <div className="h-full rounded-[3px] bg-amber" style={{ width: `${percent}%` }} />
      </div>
      <span className="w-7 text-right text-[#706f6f]">{percent}%</span>
    </div>
  );
}
