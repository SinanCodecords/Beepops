import { Container } from "@/components/shared/container";
import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterContact } from "./footer-contact";
import { FooterCta } from "./footer-cta";
import { FooterExplore } from "./footer-explore";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <Container>
        <FooterCta />
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.4fr]">
          <FooterBrand />
          <FooterExplore />
          <FooterContact />
          <FooterNewsletter />
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}
