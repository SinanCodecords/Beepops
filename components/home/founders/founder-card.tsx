import Image from "next/image";

type Props = { name: string; title: string; role: string; image: string };

export function FounderCard({ name, title, role, image }: Props) {
  return (
    <article className="text-center">
      <div className="relative aspect-[631/368] overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <Image src={image} alt={name} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
      </div>
      <h3 className="mt-6 text-xl text-ink md:text-2xl">{name}</h3>
      <p className="mt-2 text-sm font-semibold text-[#c6870c]">{title}</p>
      <p className="mt-1 text-sm text-stone">{role}</p>
    </article>
  );
}
