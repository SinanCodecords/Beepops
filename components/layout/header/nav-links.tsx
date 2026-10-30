"use client";

import { usePathname } from "next/navigation";
import { NavList } from "./nav-list";

// Reads the URL, so the header wraps it in <Suspense> (needed on dynamic routes).
export function NavLinks() {
  return <NavList pathname={usePathname()} />;
}
