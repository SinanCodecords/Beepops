import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

type Props = { title: string; text: string; icon: IconSvgElement };

export function ValueCard({ title, text, icon }: Props) {
  return (
    <article className="rounded-xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
      <span className="flex size-12 items-center justify-center rounded-full bg-amber text-white">
        <HugeiconsIcon icon={icon} size={20} />
      </span>
      <h3 className="mt-6 text-base leading-7 text-ink">{title}</h3>
      <p className="mt-3 leading-[22px] text-[#5a6858]">{text}</p>
    </article>
  );
}
