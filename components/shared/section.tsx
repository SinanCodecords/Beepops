import { cn } from "@/lib/utils";
import { Container } from "./container";

type Props = React.ComponentProps<"section"> & { containerClassName?: string };

export function Section({ className, containerClassName, children, ...props }: Props) {
  return (
    <section className={cn("py-10 md:py-[35px]", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
