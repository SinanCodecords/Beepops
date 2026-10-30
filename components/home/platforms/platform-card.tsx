import Image from "next/image";

export function PlatformCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-cream p-5 shadow-[0_4px_18px_rgba(0,0,0,0.06)]">
      <Image src={logo} alt={name} width={56} height={56} className="size-14 object-contain" />
      <span className="text-xs font-semibold text-stone">{name}</span>
    </div>
  );
}
