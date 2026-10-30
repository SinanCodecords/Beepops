import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { SOCIALS } from "@/components/layout/data";
import { FooterLogo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

const CATEGORIES = [
  { label: "BeePops Mini Protein Bar", count: "01" },
  { label: "From Hive to Home", count: "02" },
  { label: "Natural vs. Added Sugars: The Sweet Truth", count: "03" },
];

const pill = "h-8 w-full justify-between gap-3 px-4 text-xs";

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
      <InputGroup className="border-[#e5e5e5] bg-transparent">
        <InputGroupAddon>
          <HugeiconsIcon icon={Search01Icon} size={18} className="text-[#101010]" />
        </InputGroupAddon>
        <InputGroupInput
          type="search"
          placeholder="Search"
          aria-label="Search articles"
          className="font-medium placeholder:text-[#101010]"
        />
      </InputGroup>
      <div>
        <p className="font-heading text-xs uppercase">Categories</p>
        <ul className="mt-5 space-y-3.5">
          <li>
            <Button className={`${pill} font-semibold`}>All posts</Button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.label}>
              <Button variant="outline" className={`${pill} border-[#e5e5e5] bg-transparent text-[#4d4d44] hover:border-forest`}>
                <span className="truncate">{c.label}</span>
                <span>{c.count}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
