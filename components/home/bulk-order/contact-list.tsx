import { HugeiconsIcon } from "@hugeicons/react";
import { CONTACTS } from "./data";

export function ContactList() {
  return (
    <ul className="mt-10 space-y-6">
      {CONTACTS.map(({ label, value, href, icon }) => (
        <li key={label} className="flex items-center gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-ink">
            <HugeiconsIcon icon={icon} size={18} />
          </span>
          <div>
            <p className="text-xs font-bold tracking-wide text-[#6b6560] uppercase">{label}</p>
            {href ? (
              <a href={href} className="font-semibold text-[#1f1d1b] hover:underline">
                {value}
              </a>
            ) : (
              <p className="font-semibold text-[#1f1d1b]">{value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
