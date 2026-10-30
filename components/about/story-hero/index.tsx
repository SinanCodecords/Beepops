import Image from "next/image";
import { Container } from "@/components/shared/container";
import { STORY } from "./data";

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
          <p className="text-lg font-bold uppercase md:text-2xl">{STORY.eyebrow}</p>
          <h1 className="mt-4 text-[34px] leading-[1.25] md:mt-6 md:text-[60px] md:leading-[1.6]">
            {STORY.title}
          </h1>
          <p className="mt-4 font-medium uppercase md:mt-2 md:text-[19px] md:leading-[1.3]">
            {STORY.text}
          </p>
        </div>
      </div>
    </Container>
  );
}
