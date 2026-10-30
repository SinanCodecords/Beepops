import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { FlaskConicalIcon, Leaf01Icon, Recycle01Icon } from "@hugeicons/core-free-icons";
import { Container, Section, SectionHeading } from "@/components/shared/section";

const BRAND_PARAGRAPHS = [
  "Born from a love for pure ingredients and playful flavors, BeePops believes every kid deserves treats made with care. Our candy isn't just something to eat; it's something to enjoy, share, and smile about.",
  "We create lollipops, candies, and confections that delight — combining bold flavors with wholesome ingredients. We craft every treat with intention, so every bite is unmistakably BeePops, pop after pop.",
];

const VALUES = [
  {
    title: "Quality Ingredients",
    text: "We craft each bar using pure Himalayan honey, organically grown native millets, and real fruits. No refined sugars, no maida, and absolutely zero compromises on raw quality.",
    icon: Leaf01Icon,
  },
  {
    title: "Nutritionist Formulating",
    text: "We collaborate deeply with clinical pediatric and adult nutritionists to build wholesome recipes. Our macronutrients are driven by real ingredients rather than synthetic fillers.",
    icon: FlaskConicalIcon,
  },
  {
    title: "Sustainability Focus",
    text: "Responsibly sourced crops that empower local smallholders. Our packaging is constructed using eco-friendly, recyclable wrappers styled with biodegradable, minimal inks.",
    icon: Recycle01Icon,
  },
];

export function StoryHero() {
  return (
    <Container className="pt-8 md:pt-[70px]">
      <div className="relative overflow-hidden rounded-xl bg-honey px-6 py-12 md:px-10 md:py-16 lg:min-h-[438px] lg:py-[53px]">
        {/* Figma: 645px pattern at 49% left, bleeding off the top of the card. */}
        <Image
          src="/images/about/story-pattern.webp"
          alt=""
          width={900}
          height={900}
          preload
          className="pointer-events-none absolute top-[-28%] left-[49%] hidden w-[50.4%] opacity-25 md:block"
        />
        <div className="relative max-w-[656px] text-[#2f4737]">
          <p className="text-lg font-bold uppercase md:text-2xl">Our story</p>
          <h1 className="mt-4 text-[34px] leading-[1.25] md:mt-6 md:text-[60px] md:leading-[1.6]">
            Pure ingredients, real growth
          </h1>
          <p className="mt-4 font-medium uppercase md:mt-2 md:text-[19px] md:leading-[1.3]">
            BeePops began in a home kitchen with grandma&rsquo;s millet ladoo recipe and a dislike
            for sugary snacks, so we made our own.
          </p>
        </div>
      </div>
    </Container>
  );
}

export function BrandStatement() {
  return (
    <Container className="grid gap-4 pt-12 md:pt-[85px] lg:grid-cols-[200px_1fr] lg:gap-10">
      <p className="font-heading text-[11px] leading-[21px] text-[#888] uppercase">The brand</p>
      <div>
        <p className="text-2xl leading-snug font-medium text-black md:text-[34px] md:leading-[48px]">
          BeePops is a fun-loving candy brand for kids with a taste for adventure. We craft
          lollipops and treats that pop with flavor, turning everyday moments into sweet little
          celebrations.
        </p>
        <div className="mt-6 grid gap-4 text-[15px] leading-6 text-[#888] md:grid-cols-2 md:gap-12">
          {BRAND_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}

export function StoryPhoto() {
  return (
    <Container className="pt-10 md:pt-[47px]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-[1278/624]">
        <Image
          src="/images/about/kitchen.webp"
          alt="A grandmother and child making millet ladoos together in a home kitchen"
          fill
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="object-cover"
        />
      </div>
    </Container>
  );
}

export function Values() {
  return (
    <Section className="md:pt-[70px]">
      <SectionHeading eyebrow="What we stand for" title="Mindful wellness" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {VALUES.map(({ title, text, icon }) => (
          <article
            key={title}
            className="rounded-xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-amber text-white">
              <HugeiconsIcon icon={icon} size={20} />
            </span>
            <h3 className="mt-6 text-base leading-7 text-ink">{title}</h3>
            <p className="mt-3 leading-[22px] text-[#5a6858]">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
