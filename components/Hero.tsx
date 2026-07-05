import { HERO_CONTENT, CONTACT_LINKS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="w-full pt-12 pb-16 md:pt-20 md:pb-24 hairline-b">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">

          {/* Left Column: Text Content */}
          <div className="flex-1 w-full md:max-w-[580px]">
            {/* Eyebrow */}
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4 md:mb-6">
              {HERO_CONTENT.eyebrow}
            </span>

            {/* H1 */}
            <h1 className="font-display font-[450] text-5xl sm:text-6xl tracking-tight leading-[1.05] text-ink">
              {HERO_CONTENT.name}
              <span className="block text-indigo italic font-normal mt-2 sm:mt-3">
                {HERO_CONTENT.tagline}
              </span>
            </h1>

            {/* Subline */}
            <p className="mt-6 md:mt-8 font-sans text-base sm:text-lg text-ink-soft leading-relaxed">
              {HERO_CONTENT.subline}
            </p>

            {/* Meta row */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-y-2 font-mono text-[11px] sm:text-xs text-muted">
              {HERO_CONTENT.meta.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  {idx > 0 && <span className="mx-3 text-line select-none">•</span>}
                  <span className="tracking-widest">→ {item}</span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-6">
              <a
                href={CONTACT_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-indigo px-3 py-1.5 border border-indigo-soft rounded-[3px] hover:bg-indigo hover:text-white hover:border-indigo transition-all duration-200"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Right Column: Headshot with blueprint offset box */}
          <div className="relative w-[200px] sm:w-[260px] md:w-[380px] max-w-full shrink-0 mx-auto md:mx-0 select-none pb-4 pr-4 mt-6 md:mt-0">
            {/* Offset alignment box — blueprint feel */}
            <div className="absolute inset-0 border border-line translate-x-4 translate-y-4 rounded-[3px] z-0" />

            {/* Photo — blends into cream background */}
            <img
              src="/profile.jpg"
              alt="Vinodkumar"
              className="relative z-10 w-full h-auto grayscale contrast-[1.08] brightness-[1.02] mix-blend-multiply opacity-90 object-cover object-top aspect-[3/4]"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
