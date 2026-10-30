import { POST_BODY } from "./data";

export function PostContent() {
  return (
    <div className="mt-12 space-y-2 text-base leading-[1.7] font-medium text-[#706f6f] md:px-2.5 md:text-lg">
      {POST_BODY.map((block) =>
        block.type === "p" ? (
          <p key={block.text}>{block.text}</p>
        ) : (
          <ul key={block.items[0]} className="list-disc space-y-1 pl-6">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
