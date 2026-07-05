import { STACK_CATEGORIES } from "@/lib/content";

export default function Stack() {
  return (
    <section id="stack" className="w-full py-16 md:py-24 hairline-b">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7">

        {/* Section eyebrow */}
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-10 md:mb-14">
          Technical Stack
        </span>

        {/* Category rows */}
        <div className="flex flex-col">
          {STACK_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-5 md:py-6 ${
                idx !== 0 ? "border-t border-line" : ""
              }`}
            >
              {/* Category label */}
              <div className="sm:w-[140px] shrink-0 pt-0.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted font-semibold">
                  {category.label}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="font-mono text-[11px] tracking-wide text-ink-soft px-2.5 py-1 border border-line bg-white rounded-[3px] hover:border-indigo hover:text-indigo transition-colors duration-200 cursor-default select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
