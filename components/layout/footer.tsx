import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  Call02Icon,
  Facebook01Icon,
  InstagramIcon,
  Location01Icon,
  Mail01Icon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { Logo } from "./logo";

const EXPLORE = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Why BeePops" },
  { href: "/blog", label: "Blog" },
  { href: "/#bulk-orders", label: "Bulk Orders" },
  { href: "/#faq", label: "FAQ" },
];

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook01Icon },
  { href: "https://youtube.com", label: "YouTube", icon: YoutubeIcon },
];

const LEGAL = [
  { href: "/policies/privacy-policy", label: "Privacy" },
  { href: "/policies/terms-of-service", label: "Terms" },
  { href: "/policies/shipping-policy", label: "Shipping" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase">
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* CTA band */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
          <div>
            <h2 className="text-5xl text-white md:text-6xl">Snack smarter?</h2>
            <p className="mt-4 max-w-md text-sm text-white/75">
              Clean, all-natural nutrition for kids, adults and families. Enjoy honest
              ingredients without a sugar crash.
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

        {/* Columns */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.4fr]">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/70">
              Millet-based protein bars and pure mustard honey. Clean, doctor-led nutrition
              tailored beautifully for kids, elders, and families.
            </p>
            <div className="mt-5 flex gap-2">
              {["100% Organic", "No Added Sugar"].map((badge) => (
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
              {EXPLORE.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Get in touch</ColumnTitle>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a href="mailto:hello@beepops.in" className="flex gap-2.5 hover:text-white">
                  <HugeiconsIcon icon={Mail01Icon} size={16} className="mt-0.5" />
                  hello@beepops.in
                </a>
              </li>
              <li>
                <a href="tel:+919557108284" className="flex gap-2.5 hover:text-white">
                  <HugeiconsIcon icon={Call02Icon} size={16} className="mt-0.5" />
                  +91 95571 08284
                </a>
              </li>
              <li className="flex gap-2.5">
                <HugeiconsIcon icon={Location01Icon} size={16} className="mt-0.5 shrink-0" />
                607 Royal Ensign, C-Scheme, Jaipur 302001
              </li>
            </ul>
          </div>

          <div>
            <ColumnTitle>Stay in the loop</ColumnTitle>
            <p className="text-sm text-white/75">
              Get wholesome clean-eating tips, recipes &amp; exclusive product launch offers.
            </p>
            {/* Newsletter signup is wired up in Step 9. */}
            <div className="mt-5 flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 pr-1 pl-4">
              <HugeiconsIcon icon={Mail01Icon} size={16} className="shrink-0 text-white/70" />
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="button"
                className="h-10 rounded-full bg-white px-5 text-sm font-medium text-forest hover:bg-white/90"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
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
            {LEGAL.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
