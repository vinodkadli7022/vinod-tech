"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Run once on mount to handle initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md hairline-b py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[920px] mx-auto px-6 sm:px-7 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-ink group focus-visible:outline-none"
        >
          <span className="group-hover:text-indigo transition-colors duration-200">
            VINODKUMAR
          </span>
        </a>

        {/* Links (Hidden on mobile < 640px) */}
        <nav className="hidden sm:flex items-center gap-5 font-sans text-xs font-semibold uppercase tracking-wider">
          <a
            href="#work"
            className="text-ink-soft hover:text-indigo transition-colors duration-200"
          >
            Work
          </a>
          <span className="text-muted/60 select-none">•</span>
          <a
            href="#now"
            className="text-ink-soft hover:text-indigo transition-colors duration-200"
          >
            Now
          </a>
          <span className="text-muted/60 select-none">•</span>
          <a
            href="#experience"
            className="text-ink-soft hover:text-indigo transition-colors duration-200"
          >
            Experience
          </a>
          <span className="text-muted/60 select-none">•</span>
          <a
            href="#honors"
            className="text-ink-soft hover:text-indigo transition-colors duration-200"
          >
            Honors
          </a>
          <span className="text-muted/60 select-none">•</span>
          <a
            href="#contact"
            className="text-ink-soft hover:text-indigo transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
