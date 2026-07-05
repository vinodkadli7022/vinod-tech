import { NOW_CONTENT } from "@/lib/content";

export default function Now() {
  return (
    <section id="now" className="w-full py-16 md:py-24 hairline-b">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7">
        {/* Section Heading */}
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-10 md:mb-14">
          Current Focus
        </span>

        {/* Panel with solid ink border, no border radius, custom background */}
        <div className="border-2 border-ink bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-5">
          {/* Header: Pulsing Indigo Dot & Label */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo pulse-dot shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold text-ink">
              {NOW_CONTENT.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-[450] text-2xl sm:text-3xl text-ink leading-none">
            {NOW_CONTENT.title}
          </h3>

          {/* Copy */}
          <p className="font-sans text-sm sm:text-base text-ink-soft leading-relaxed max-w-[780px]">
            {NOW_CONTENT.description}
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {NOW_CONTENT.chips.map((chip, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] tracking-wide text-ink-soft px-2 py-0.5 border border-line rounded-[3px] hover:border-indigo hover:text-indigo transition-colors duration-200 cursor-default select-none"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
