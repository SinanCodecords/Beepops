import Image from "next/image";
import { Container } from "@/components/shared/container";
import { BLOG_HERO } from "./data";

export function BlogHero() {
  return (
    <Container className="pt-8 md:pt-[70px]">
      <div className="relative overflow-hidden rounded-xl bg-honey px-6 py-10 text-forest md:min-h-[440px] md:px-10 md:py-11">
        <Image
          src="/images/blog/banner-splash.webp"
          alt=""
          width={648}
          height={648}
          sizes="50vw"
          className="pointer-events-none absolute top-[-28%] left-[49.4%] w-[50.4%] opacity-60 mix-blend-multiply max-md:hidden"
        />
        <div className="relative max-w-[700px]">
          <p className="text-lg font-bold uppercase md:text-2xl">{BLOG_HERO.eyebrow}</p>
          <h1 className="mt-4 text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.15] md:mt-6">
            {BLOG_HERO.title}
          </h1>
          <p className="mt-6 text-base font-medium uppercase md:text-2xl">{BLOG_HERO.subtitle}</p>
        </div>
      </div>
    </Container>
  );
}
