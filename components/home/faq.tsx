import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowRight02Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Only the first answer is in the Figma file; the rest are placeholders to confirm.
const FAQS = [
  {
    q: "What is BeePops?",
    a: "BeePops is an Indian healthy snacking brand focused on creating nutritious, convenient, and delicious snacks made with wholesome ingredients. Our products include millet-based protein bars and honey sticks designed for people who want healthier alternatives to conventional processed snacks.",
  },
  {
    q: "What makes BeePops different from other snack brands?",
    a: "Our snacks are doctor-led and made with millets, pure honey and real ingredients — no refined sugar, no artificial flavours and no preservatives.",
  },
  {
    q: "Are BeePops snacks suitable for kids?",
    a: "Yes. BeePops is made to be family-safe, with clean ingredients that work for kids, adults and elders alike.",
  },
  {
    q: "Where can I buy BeePops?",
    a: "Right here on our website, and on Amazon, Flipkart, Meesho, Blinkit, Tata 1mg, JioMart and IndiaMART.",
  },
  {
    q: "Do you offer bulk or business orders?",
    a: "Yes. Use the Request a Quote form above or write to hello@beepops.in and we will get back to you.",
  },
];

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
          <Accordion defaultValue={[FAQS[0].q]} className="gap-3 overflow-visible rounded-none border-0">
            {FAQS.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="rounded-xl border border-white/25 px-2 data-open:bg-transparent"
              >
                <AccordionTrigger className="group items-center px-4 py-5 font-sans text-lg font-medium tracking-normal text-white normal-case hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                  {q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-forest">
                    <HugeiconsIcon icon={Add01Icon} size={16} className="group-aria-expanded:hidden" />
                    <HugeiconsIcon icon={MinusSignIcon} size={16} className="hidden group-aria-expanded:block" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pr-10 pb-5 leading-relaxed text-[#f3f3f3]">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex flex-col gap-4 rounded-xl border border-white/25 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-medium text-white">Still have a question in mind?</p>
              <p className="mt-1 text-sm text-[#f3f3f3]">Contact us if you have any other questions.</p>
            </div>
            <Link
              href="mailto:hello@beepops.in"
              className="inline-flex h-11 items-center gap-2 self-start rounded-full bg-white pr-1.5 pl-4 text-[13px] font-medium text-forest uppercase sm:self-auto"
            >
              Contact us
              <span className="flex size-8 items-center justify-center rounded-full bg-forest text-white">
                <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
