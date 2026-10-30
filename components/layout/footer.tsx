import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { BADGES, CONTACTS, EXPLORE_LINKS, LEGAL_LINKS, SOCIALS } from "./data";
import { FooterLogo } from "./logo";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <Container>
        <FooterCta />
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.4fr]">
          <div>
            <FooterLogo />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/70">
              Millet-based protein bars and pure mustard honey. Clean, doctor-led nutrition
              tailored beautifully for kids, elders, and families.
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
          <div>
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="space-y-3 text-sm text-white/75">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <FooterContact />
          <FooterNewsletter />
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase">
      {children}
    </p>
  );
}

function FooterCta() {
  return (
    <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
      <div>
        <h2 className="text-5xl text-white md:text-6xl">Snack smarter?</h2>
        <p className="mt-4 max-w-md text-sm text-white/75">
          Clean, all-natural nutrition for kids, adults and families. Enjoy honest ingredients
          without a sugar crash.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/shop"
          className="flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-forest transition-colors hover:bg-white/90"
        >
          Shop Our Bars
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
        </Link>
        <Link
          href="/about"
          className="flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium transition-colors hover:bg-white/10"
        >
          Read Our Story
        </Link>
      </div>
    </div>
  );
}

function FooterContact() {
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

function FooterBottom() {
  return (
    <div className="flex flex-col items-center gap-5 py-8 text-xs text-white/75 md:flex-row md:justify-between">
      <p>© 2025 BeePops. MN Essentials LLP. All rights reserved.</p>
      <div className="flex gap-2">
        {SOCIALS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"
          >
            <HugeiconsIcon icon={icon} size={16} />
          </a>
        ))}
      </div>
      <div className="flex gap-5">
        {LEGAL_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
