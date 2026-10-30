import { HugeiconsIcon } from "@hugeicons/react";
import { SOCIALS } from "@/components/layout/footer/data";

export function SidebarSocials() {
  return (
    <div className="mt-5 flex gap-3">
      {SOCIALS.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-10 items-center justify-center rounded-full border border-[#e5e5e5] text-[#706f6f] transition-colors hover:border-forest hover:text-forest"
        >
          <HugeiconsIcon icon={icon} size={18} />
        </a>
      ))}
    </div>
  );
}
