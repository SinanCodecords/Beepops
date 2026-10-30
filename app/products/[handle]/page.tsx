import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductDetailPage } from "@/components/product-detail";
import { getProduct, getProducts } from "@/lib/shopify";

// Every product is prerendered at build time; new ones render on first visit.
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }: PageProps<"/products/[handle]">): Promise<Metadata> {
  const product = await getProduct((await params).handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    openGraph: { images: product.featuredImage ? [product.featuredImage.url] : [] },
  };
}

export default function ProductPage({ params }: PageProps<"/products/[handle]">) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      {params.then(({ handle }) => <ProductDetailPage handle={handle} />)}
    </Suspense>
  );
}
