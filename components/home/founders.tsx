import Image from "next/image";
import { Eyebrow, Section, SectionHeading } from "@/components/shared/section";

const FOUNDERS = [
  {
    name: "Dr. Neerja Arora",
    title: "Medical Doctor | Public Health Leader",
    role: "Leads Strategy & Governance",
    image: "/images/founders/neerja-arora.webp",
  },
  {
    name: "Prof. Naval Arora",
    title: "Academician | Industrialist | Nutritionist",
    role: "Leads Operations & B2B Relations",
    image: "/images/founders/naval-arora.webp",
  },
];

export function Founders() {
  return (
    <Section>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Founder highlight" title="Promise makers" />
        <Eyebrow>Doctor-led · family-safe · Jaipur-born</Eyebrow>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-5">
        {FOUNDERS.map(({ name, title, role, image }) => (
          <article key={name} className="text-center">
            <div className="relative aspect-[631/368] overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <Image src={image} alt={name} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            <h3 className="mt-6 text-xl text-ink md:text-2xl">{name}</h3>
            <p className="mt-2 text-sm font-semibold text-[#c6870c]">{title}</p>
            <p className="mt-1 text-sm text-stone">{role}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
