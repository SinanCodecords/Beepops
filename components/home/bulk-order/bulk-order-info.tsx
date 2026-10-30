import { ContactList } from "./contact-list";

export function BulkOrderInfo() {
  return (
    <div>
      <span className="inline-block rounded-full bg-[#fed43e] px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-[#3d523c] uppercase">
        For business
      </span>
      <h2 className="mt-6 max-w-[476px] text-[32px] leading-[1.3] text-[#1f1d1b] md:text-[42px]">
        Have a bulk order? Let&rsquo;s talk!
      </h2>
      <p className="mt-6 leading-relaxed text-[#6b6560]">
        For bulk orders, retail partnerships, or custom product inquiries, we&rsquo;re just a
        message away. Whether you need 50 or 5,000 units, we&rsquo;re ready to deliver clean-label
        wellness with care and consistency.
      </p>
      <ContactList />
    </div>
  );
}
