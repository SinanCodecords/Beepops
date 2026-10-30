import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, align = "left", className, titleClassName }: Props) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 text-[28px] leading-[1.15] text-forest md:text-[40px]",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
