import Image from "next/image";
import { Container } from "@/components/shared/container";

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
