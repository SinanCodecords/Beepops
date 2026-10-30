type Props = { eyebrow: string; title: string };

export function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-tangerine uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-5xl text-forest">{title}</h2>
    </div>
  );
}
