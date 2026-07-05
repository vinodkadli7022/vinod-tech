import { CONTACT_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="w-full pt-16 pb-12 md:pt-24 md:pb-16 bg-cream-2/20">
      <div className="max-w-[920px] mx-auto px-6 sm:px-7 flex flex-col gap-12 md:gap-16">
        {/* Call to Action Heading */}
        <div className="max-w-[720px]">
          <h2 className="font-display font-[450] text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Have something worth{" "}
            <span className="text-indigo italic font-normal">
              routing to an agent
            </span>
            ? Let's talk.
          </h2>
        </div>

        {/* Underlined Monospaced Contact Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs sm:text-sm">
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="underline underline-offset-4 decoration-line hover:decoration-indigo hover:text-indigo transition-colors duration-200"
          >
            Email
          </a>
          <a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-line hover:decoration-indigo hover:text-indigo transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={CONTACT_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-line hover:decoration-indigo hover:text-indigo transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Bottom Bar: Location & Copyright/Motto */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[10px] sm:text-xs text-muted uppercase tracking-widest">
          <div>Bengaluru, India</div>
          <div className="normal-case sm:uppercase">Built with intent, not a template.</div>
        </div>
      </div>
    </footer>
  );
}
