import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";

type Props = { q: string; a: string; defaultOpen?: boolean };

// Native <details>: works without JavaScript; `name` keeps only one open at a time.
export function FaqItem({ q, a, defaultOpen }: Props) {
  return (
    <details name="faq" open={defaultOpen} className="group rounded-xl border border-white/25 px-6 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
        {q}
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-forest">
          <HugeiconsIcon icon={Add01Icon} size={16} className="group-open:hidden" />
          <HugeiconsIcon icon={MinusSignIcon} size={16} className="hidden group-open:block" />
        </span>
      </summary>
      <p className="mt-3 pr-10 text-sm leading-relaxed text-[#f3f3f3]">{a}</p>
    </details>
  );
}
