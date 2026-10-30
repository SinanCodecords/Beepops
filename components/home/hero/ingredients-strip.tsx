import Image from "next/image";

export function IngredientsStrip() {
  return (
    <div aria-hidden className="pointer-events-none relative -mb-[12%] w-full">
      <Image
        src="/images/hero/ingredients-strip.webp"
        alt=""
        width={2880}
        height={1150}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
