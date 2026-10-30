import Image from "next/image";

export function GalleryMain({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[738/592] flex-1 overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes="(min-width: 1024px) 740px, 100vw"
        className="object-contain"
      />
    </div>
  );
}
