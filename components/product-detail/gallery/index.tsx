"use client";

import { useState } from "react";
import { PRODUCT } from "../data";
import { GalleryMain } from "./gallery-main";
import { GalleryThumbs } from "./gallery-thumbs";

export function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-8">
      <GalleryThumbs images={PRODUCT.images} active={active} onSelect={setActive} />
      <GalleryMain src={PRODUCT.images[active]} alt={PRODUCT.title} />
    </div>
  );
}
