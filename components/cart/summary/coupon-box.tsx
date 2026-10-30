export function CouponBox() {
  return (
    <form className="rounded-xl border border-border bg-white p-5">
      <label htmlFor="coupon" className="text-xs font-bold tracking-wide text-stone uppercase">
        Have a coupon code?
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="coupon"
          name="coupon"
          placeholder="Enter coupon code (e.g. ABOVE2000)"
          className="h-11 min-w-0 flex-1 rounded-lg border border-border px-4 text-[13px] text-ink outline-none placeholder:text-stone focus:border-forest"
        />
        <button
          type="button"
          className="h-11 rounded-lg bg-forest px-5 text-[13px] font-bold text-white uppercase hover:bg-forest-deep"
        >
          Apply
        </button>
      </div>
    </form>
  );
}
