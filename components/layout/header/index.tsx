import { Container } from "@/components/shared/container";
import { Logo } from "../logo";
import { AnnouncementBar } from "./announcement-bar";
import { HeaderActions } from "./header-actions";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-30">
      <AnnouncementBar />
      <div className="relative border-b border-border/60 bg-background">
        <Container className="flex h-16 items-center gap-6">
          <MobileMenu />
          <Logo />
          <NavLinks />
          <HeaderActions />
        </Container>
      </div>
    </header>
  );
}
