import Image from "next/image";
import { Section, SectionHeading } from "@/components/shared/section";

const PLATFORMS = [
  { name: "Amazon", logo: "/images/platforms/amazon.webp" },
  { name: "Flipkart", logo: "/images/platforms/flipkart.webp" },
  { name: "Meesho", logo: "/images/platforms/meesho.webp" },
  { name: "Blinkit", logo: "/images/platforms/blinkit.webp" },
  { name: "Tata 1mg", logo: "/images/platforms/tata-1mg.webp" },
  { name: "JioMart", logo: "/images/platforms/jiomart.webp" },
  { name: "IndiaMART", logo: "/images/platforms/indiamart.webp" },
];

export function Platforms() {
  return (
    <Section className="my-10 bg-honey py-16 md:my-[35px] md:py-[68px]">
      <SectionHeading
        eyebrow="Clean eating going viral"
        title="On all major platforms"
        align="center"
        className="[&>p]:text-[#3a593e]"
      />
      <p className="mt-4 text-center text-[#5c5749] md:text-lg">
        Keep up with BeePops — catch us wherever you shop!
      </p>
      <div className="mx-auto mt-12 grid max-w-[1216px] grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
        {PLATFORMS.map(({ name, logo }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 rounded-xl bg-cream p-5 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
          >
            <Image src={logo} alt={name} width={56} height={56} className="size-14 object-contain" />
            <span className="text-xs font-semibold text-stone">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
