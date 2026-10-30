import Image from "next/image";
import { POST } from "./data";

export function PostCover() {
  return (
    <div className="mt-12 rounded-[18px] bg-[#f9f9f9] p-2 md:p-3">
      <div className="relative aspect-[928/575] overflow-hidden rounded-2xl bg-[#e5e5e5]">
        <Image
          src={POST.cover}
          alt={POST.title}
          fill
          preload
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
