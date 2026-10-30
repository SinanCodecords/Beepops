import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm font-extrabold tracking-[0.18em] text-amber uppercase", className)}
      {...props}
    />
  );
}
