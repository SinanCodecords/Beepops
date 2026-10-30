import Image from "next/image";

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

export function BannerPouches() {
  return (
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
  );
}
