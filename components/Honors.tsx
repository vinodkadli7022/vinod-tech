import { HONORS_LIST } from "@/lib/content";

export default function Honors() {
  return (
    <section id="honors" className="w-full py-16 md:py-24 hairline-b">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7">
        {/* Section Heading */}
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-10 md:mb-14">
          Honors & Recognitions
        </span>

        {/* 3-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {HONORS_LIST.map((item, idx) => {
            const isWinner = item.award.toLowerCase() === "won";
            return (
              <div
                key={idx}
                className="hairline-all bg-white p-6 sm:p-7 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  {/* Eyebrow Status Badge */}
                  <span
                    className={`font-mono text-[9px] uppercase tracking-widest font-bold border px-2 py-0.5 rounded-[3px] w-fit select-none ${
                      isWinner
                        ? "border-amber text-amber"
                        : "border-indigo-soft text-indigo"
                    }`}
                  >
                    {item.award}
                  </span>

                  {/* Event Name */}
                  <h3 className="font-display font-[450] text-lg sm:text-xl text-ink leading-tight">
                    {item.event}
                  </h3>
                </div>

                {/* Event Description */}
                <p className="font-sans text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
