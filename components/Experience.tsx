import { EXPERIENCE_TIMELINE } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 hairline-b">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7">
        {/* Section Heading */}
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-10 md:mb-14">
          Experience & Education
        </span>

        {/* Timeline Entries */}
        <div className="flex flex-col gap-10 md:gap-12">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start"
            >
              {/* Date Column (Left on Desktop, Stacked on Mobile) */}
              <div className="sm:w-[180px] shrink-0 font-mono text-xs sm:text-sm tracking-widest text-muted">
                {item.years}
              </div>

              {/* Content Column (Right on Desktop, Stacked on Mobile) */}
              <div className="flex-1 flex flex-col gap-1.5">
                <h3 className="font-display font-[450] text-lg sm:text-xl text-ink leading-tight">
                  {item.role}
                </h3>
                <span className="font-mono text-xs font-bold text-indigo uppercase tracking-widest">
                  {item.company}
                </span>
                <p className="font-sans text-sm sm:text-base text-ink-soft leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
