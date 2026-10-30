import { FooterLogo } from "../logo";
import { BADGES } from "./data";

export function FooterBrand() {
  return (
    <div>
      <FooterLogo />
      <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/70">
        Millet-based protein bars and pure mustard honey. Clean, doctor-led nutrition tailored
        beautifully for kids, elders, and families.
      </p>
      <div className="mt-5 flex gap-2">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="rounded-md border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
