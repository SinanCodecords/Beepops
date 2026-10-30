import Image from "next/image";

export function BannerText() {
  return (
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
  );
}
