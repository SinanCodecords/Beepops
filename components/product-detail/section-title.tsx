export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-sans text-lg font-extrabold tracking-normal text-forest normal-case md:text-xl">
      {children}
    </h2>
  );
}
