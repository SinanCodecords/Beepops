import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-8", className)} {...props} />;
}

type SectionProps = React.ComponentProps<"section"> & { containerClassName?: string };

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-10 md:py-[35px]", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm font-extrabold tracking-[0.18em] text-amber uppercase", className)}
      {...props}
    />
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  titleClassName,
}: HeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn("mt-3 text-[28px] leading-[1.15] text-forest md:text-[40px]", titleClassName)}
      >
        {title}
      </h2>
    </div>
  );
}
