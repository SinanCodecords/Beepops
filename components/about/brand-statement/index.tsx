import { Container } from "@/components/shared/container";
import { BRAND } from "./data";

export function BrandStatement() {
  return (
    <Container className="grid gap-4 pt-12 md:pt-[85px] lg:grid-cols-[200px_1fr] lg:gap-10">
      <p className="font-heading text-[11px] leading-[21px] text-[#888] uppercase">{BRAND.tag}</p>
      <div>
        <p className="text-2xl leading-snug font-medium text-black md:text-[34px] md:leading-[48px]">
          {BRAND.statement}
        </p>
        <div className="mt-6 grid gap-4 text-[15px] leading-6 text-[#888] md:grid-cols-2 md:gap-12">
          {BRAND.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}
