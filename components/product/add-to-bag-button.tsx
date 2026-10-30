// Wired to the Shopify cart in Step 5.
export function AddToBagButton({ disabled }: { disabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="h-8 shrink-0 rounded-full bg-forest px-4 text-xs font-medium text-white transition-colors hover:bg-forest-deep disabled:opacity-50"
    >
      Add To Bag
    </button>
  );
}
