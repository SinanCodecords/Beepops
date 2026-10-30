import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { SOCIALS } from "@/components/layout/data";
import { FooterLogo } from "@/components/layout/logo";

const CATEGORIES = [
  { label: "BeePops Mini Protein Bar", count: "01" },
  { label: "From Hive to Home", count: "02" },
  { label: "Natural vs. Added Sugars: The Sweet Truth", count: "03" },
];

const pill = "flex h-8 w-full items-center justify-between gap-3 rounded-full px-4 text-xs font-medium";

// Shared by the blog list and blog post pages.
export function BlogSidebar() {
  return (
    <aside className="space-y-8 max-lg:order-last lg:border-r lg:border-[#e5e5e5] lg:pr-6">
      <div className="text-[#101010]">
        <div className="text-[#401e16]">
          <FooterLogo />
        </div>
        <p className="mt-6 font-heading text-sm uppercase">BeePops</p>
        <p className="mt-1.5 text-xs text-[#706f6f]">hello@beepops.in</p>
        <p className="mt-3 text-sm leading-relaxed font-light text-[#706f6f]">
          Millet-based protein bars and pure mustard honey. Clean, doctor-led nutrition tailored
          beautifully for kids, elders, and families.
        </p>
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
      </div>
      <hr className="border-[#e5e5e5]" />
      <label className="flex h-9 items-center gap-3 rounded-full border border-[#e5e5e5] px-4 text-sm font-medium text-[#101010]">
        <HugeiconsIcon icon={Search01Icon} size={18} />
        <input
          type="search"
          placeholder="Search"
          aria-label="Search articles"
          className="w-full bg-transparent outline-none placeholder:text-[#101010]"
        />
      </label>
      <div>
        <p className="font-heading text-xs uppercase">Categories</p>
        <ul className="mt-5 space-y-3.5">
          <li>
            <button type="button" className={`${pill} bg-forest font-semibold text-white`}>
              All posts
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.label}>
              <button type="button" className={`${pill} border border-[#e5e5e5] text-[#4d4d44] hover:border-forest`}>
                <span className="truncate">{c.label}</span>
                <span>{c.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
