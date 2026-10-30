"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { MobileNav } from "./mobile-nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
      >
        <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
      </button>
      {open && <MobileNav onNavigate={() => setOpen(false)} />}
    </div>
  );
}
