import { FooterLogo } from "@/components/layout/logo";
import { BLOG_AUTHOR } from "../data";
import { SidebarSocials } from "./sidebar-socials";

export function SidebarAuthor() {
  return (
    <div className="text-[#101010]">
      <div className="text-[#401e16]">
        <FooterLogo />
      </div>
      <p className="mt-6 font-heading text-sm uppercase">{BLOG_AUTHOR.name}</p>
      <p className="mt-1.5 text-xs text-[#706f6f]">{BLOG_AUTHOR.email}</p>
      <p className="mt-3 text-sm leading-relaxed font-light text-[#706f6f]">{BLOG_AUTHOR.bio}</p>
      <SidebarSocials />
    </div>
  );
}
