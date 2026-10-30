import { Container } from "@/components/shared/container";
import { FAQS } from "./data";
import { FaqContact } from "./faq-contact";
import { FaqItem } from "./faq-item";

export function Faq() {
  return (
    <section id="faq" className="mt-10 bg-forest py-16 md:mt-[70px] md:py-[74px]">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,470px)_1fr] lg:gap-16">
        <div>
          <h2 className="text-[32px] leading-[1.2] text-white md:text-[40px]">
            Your questions. Answered.
          </h2>
          <p className="mt-4 text-lg text-[#b6b6b6] md:text-xl">
            Contact us if you have any other questions.
          </p>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} {...f} defaultOpen={i === 0} />
          ))}
          <FaqContact />
        </div>
      </Container>
    </section>
  );
}
