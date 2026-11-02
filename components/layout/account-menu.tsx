"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout01Icon, UserIcon } from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Shown only to logged-in customers; guests go straight to the login page.
export function AccountMenu() {
  return (
    <>
      <form id="logout-form" action="/account/logout" method="post" hidden />
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label="My account"
          className="relative flex size-9 items-center justify-center rounded-full outline-none hover:bg-muted data-popup-open:bg-muted"
        >
          <HugeiconsIcon icon={UserIcon} size={18} />
          <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-amber ring-2 ring-background" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem render={<Link href="/account" />}>
            <HugeiconsIcon icon={UserIcon} size={16} />
            My profile
          </DropdownMenuItem>
          <DropdownMenuItem nativeButton render={<button type="submit" form="logout-form" />}>
            <HugeiconsIcon icon={Logout01Icon} size={16} />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
