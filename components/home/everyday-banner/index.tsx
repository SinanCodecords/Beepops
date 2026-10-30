import Image from "next/image";
import { Container } from "@/components/shared/container";
import { BannerPouches } from "./banner-pouches";
import { BannerText } from "./banner-text";

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
          <BannerText />
          <BannerPouches />
        </div>
      </Container>
    </section>
  );
}
