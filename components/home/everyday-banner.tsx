import Image from "next/image";
import { Container } from "@/components/shared/section";

// md+ positions are percentages of the banner in Figma (1286 x 440).
const POUCHES = [
  {
    src: "/images/banner/pouch-energy-bars.webp",
    w: 230,
    h: 283,
    className: "left-[22%] top-0 w-[30%] md:left-[58.5%] md:top-[-6%] md:w-[17.9%]",
  },
  {
    src: "/images/banner/pouch-honey-jam.webp",
    w: 279,
    h: 328,
    className: "left-0 top-[30%] w-[38%] md:left-[49%] md:top-[38%] md:w-[21.7%]",
  },
  {
    src: "/images/banner/pouch-protein-bars.webp",
    w: 433,
    h: 542,
    className: "right-0 top-[8%] w-[50%] md:left-[66.3%] md:top-[6%] md:w-[33.7%]",
  },
];

export function EverydayBanner() {
  return (
    <section className="py-10 md:py-[35px]">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-honey px-6 pt-8 md:min-h-[440px] md:py-9">
          <Image
            src="/images/banner/splash.webp"
            alt=""
            width={2154}
            height={2154}
            sizes="84vw"
            className="pointer-events-none absolute top-[-55%] left-[16.7%] h-auto w-[84%] max-md:hidden"
          />
          <div className="relative z-10">
            <Image src="/images/brand/logo-full.webp" alt="BeePops" width={104} height={76} />
            <h2 className="mt-6 text-[40px] leading-[1.05] text-forest md:text-6xl">
              Everyday!
              <br />
              Everyone!
            </h2>
            <p className="mt-6 text-lg font-semibold text-[#253427] uppercase md:text-2xl">
              Clean nutrition
              <br />
              Real ingredients – real food
            </p>
          </div>
          <div aria-hidden className="relative -mx-6 h-72 md:absolute md:inset-0 md:mx-0 md:h-auto">
            {POUCHES.map((p) => (
              <Image
                key={p.src}
                src={p.src}
                alt=""
                width={p.w * 2}
                height={p.h * 2}
                sizes="(min-width: 768px) 30vw, 50vw"
                className={`absolute h-auto ${p.className}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
