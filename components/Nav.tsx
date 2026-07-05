"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled || isOpen
          ? "bg-cream/90 backdrop-blur-md hairline-b py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[920px] mx-auto px-6 sm:px-7 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-ink group focus-visible:outline-none"
        >
          <span className="group-hover:text-indigo transition-colors duration-200">
            VINODKUMAR
          </span>
        </a>

        {/* Desktop Links (Hidden on mobile < 640px) */}
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

        {/* Mobile Hamburger Button (Visible on mobile < 640px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-ink hover:text-indigo transition-colors duration-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Menu (Hamburger) Icon
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      {isOpen && (
        <div className="sm:hidden w-full px-6 py-5 bg-cream/95 backdrop-blur-md flex flex-col gap-4 font-sans text-xs font-semibold uppercase tracking-widest border-t border-line mt-4">
          <a
            href="#work"
            onClick={() => setIsOpen(false)}
            className="text-ink-soft hover:text-indigo py-1 transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#now"
            onClick={() => setIsOpen(false)}
            className="text-ink-soft hover:text-indigo py-1 transition-colors duration-200"
          >
            Now
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-ink-soft hover:text-indigo py-1 transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#honors"
            onClick={() => setIsOpen(false)}
            className="text-ink-soft hover:text-indigo py-1 transition-colors duration-200"
          >
            Honors
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-ink-soft hover:text-indigo py-1 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
