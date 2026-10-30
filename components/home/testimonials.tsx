import Image from "next/image";
import { Section, SectionHeading } from "@/components/shared/section";
import { StarRating } from "@/components/shared/star-rating";

const TESTIMONIALS = [
  {
    quote: "I'm trading regular chocolate for BeePops Healthy Snacks for my toddler!",
    name: "Aastha Bhatia",
    role: "Parent",
    image: "/images/testimonials/aastha-bhatia.webp",
  },
  {
    quote: "I'm a new mom, and BeePops Bars are my go-to quick snack for protein on the run!",
    name: "Asha Yadav",
    role: "New Mom",
    image: "/images/testimonials/asha-yadav.webp",
  },
  {
    quote: "Finally a snack I can carry on long trips without the sugar crash.",
    name: "Happy Customer",
    role: "Traveller",
    image: "/images/testimonials/customer-3.webp",
  },
];

export function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow="Happy faces" title="Loved by many" />
      <div className="-mr-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:-mr-8">
        {TESTIMONIALS.map(({ quote, name, role, image }) => (
          <figure
            key={name}
            className="grid w-[85vw] max-w-[709px] shrink-0 snap-start grid-cols-2 overflow-hidden rounded-xl border border-border bg-cream md:h-[472px]"
          >
            <div className="relative min-h-72">
              <Image src={image} alt={name} fill sizes="(min-width: 768px) 354px, 42vw" className="object-cover" />
            </div>
            <div className="flex flex-col p-4 md:p-5">
              <span aria-hidden className="h-14 font-logo text-[110px] leading-[0.9] text-black/10 md:h-28 md:text-[220px]">
                &rdquo;
              </span>
              <blockquote className="mt-auto text-sm text-[#5c5749] md:text-2xl">{quote}</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <StarRating />
                <p className="mt-2 text-base font-bold text-ink md:text-[22px]">{name}</p>
                <p className="text-xs text-stone md:text-base">{role}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
