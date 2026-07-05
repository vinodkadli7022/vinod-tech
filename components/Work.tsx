import { WORK_PROJECTS } from "@/lib/content";

// GitHub icon — inline SVG, no external dep
function IconGitHub() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// External link icon
function IconExternalLink() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-4m-4-6h6m0 0v6m0-6L10 10"
      />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="w-full py-16 md:py-24 hairline-b">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7">
        {/* Eyebrow / Section Title */}
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-10 md:mb-14">
          Selected Projects
        </span>

        {/* Editorial Project List */}
        <div className="flex flex-col">
          {WORK_PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col gap-5 ${
                idx === 0 ? "pb-10 md:pb-12" : "py-10 md:py-12 border-t border-line"
              }`}
            >
              {/* Title & Tag Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <h3 className="font-display font-[450] text-2xl sm:text-3xl text-ink leading-none">
                  {project.title}
                </h3>
                <span
                  className={`font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-[3px] select-none w-fit ${
                    project.isAmberTag
                      ? "border-amber text-amber"
                      : "border-indigo-soft text-indigo"
                  }`}
                >
                  {project.tag}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-ink-soft leading-relaxed max-w-[840px]">
                {project.description}
              </p>

              {/* Stat Line */}
              <div className="font-mono text-xs text-muted tracking-wide flex items-center">
                <span>→&nbsp;</span>
                <span className="text-ink-soft font-semibold">{project.stat}</span>
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-2">
                {project.chips.map((chip, chipIdx) => (
                  <span
                    key={chipIdx}
                    className="font-mono text-[10px] tracking-wide text-ink-soft px-2 py-0.5 border border-line rounded-[3px] hover:border-indigo hover:text-indigo transition-colors duration-200 cursor-default select-none"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* GitHub + Live Links */}
              {(project.github || project.live) && (
                <div className="flex items-center gap-3 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft px-2.5 py-1.5 border border-line rounded-[3px] hover:border-indigo hover:text-indigo transition-colors duration-200"
                    >
                      <IconGitHub />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-indigo px-2.5 py-1.5 border border-indigo-soft rounded-[3px] hover:bg-indigo hover:text-white hover:border-indigo transition-all duration-200"
                    >
                      <IconExternalLink />
                      Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
