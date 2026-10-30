import {
  BulkOrder,
  EverydayBanner,
  Faq,
  FeaturedSnacks,
  Founders,
  HappyFaces,
  Hero,
  Journal,
  Platforms,
  PureIngredients,
  Testimonials,
  Variants,
  Wellness,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Variants />
      <FeaturedSnacks />
      <EverydayBanner />
      <Testimonials />
      <HappyFaces />
      <Platforms />
      <PureIngredients />
      <Wellness />
      <Founders />
      <Journal />
      <BulkOrder />
      <Faq />
    </>
  );
}
