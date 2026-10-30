export function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase">
      {children}
    </p>
  );
}
