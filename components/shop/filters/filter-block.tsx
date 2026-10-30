import { cn } from "@/lib/utils";

type Props = { title: string; className?: string; children: React.ReactNode };

export function FilterBlock({ title, className, children }: Props) {
  return (
    <div
      role="group"
      aria-label={title}
      className={cn("border-b border-[#dee2e6] py-6 first:pt-0 last:border-0 last:pb-0", className)}
    >
      <p className="mb-3 text-[13.5px] font-extrabold text-ink uppercase">{title}</p>
      {children}
    </div>
  );
}
