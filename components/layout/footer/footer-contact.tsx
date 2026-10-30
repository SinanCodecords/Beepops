import { HugeiconsIcon } from "@hugeicons/react";
import { ColumnTitle } from "./column-title";
import { CONTACTS } from "./data";

export function FooterContact() {
  return (
    <div>
      <ColumnTitle>Get in touch</ColumnTitle>
      <ul className="space-y-3 text-sm text-white/75">
        {CONTACTS.map(({ href, label, icon }) => {
          const content = (
            <>
              <HugeiconsIcon icon={icon} size={16} className="mt-0.5 shrink-0" />
              {label}
            </>
          );
          return (
            <li key={label} className="flex gap-2.5">
              {href ? (
                <a href={href} className="flex gap-2.5 hover:text-white">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
