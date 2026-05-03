"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ButtonLink } from "@/components/ui/Button";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-white shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="logo_explobyte_negro.png" alt="logo-explobyte" className="w-25 h-25"/>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-3 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ButtonLink variant="ghost" size="sm" href="#contacto">
            Contacto
          </ButtonLink>
          <ButtonLink variant="primary" size="sm" href="#cta">
            Empezar proyecto
          </ButtonLink>
        </div>

        <button
          className="md:hidden p-2 text-ink-3 hover:text-blue-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 2, transformOrigin: "0 0", transform: `scaleX(${progress})`,
          background: "linear-gradient(90deg, #4b8afe, #78a7fe)",
          opacity: scrolled ? 1 : 0, transition: "opacity 0.3s ease" }}
        aria-hidden="true"
      />

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink-3 hover:text-blue-500 text-sm py-1 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <ButtonLink variant="primary" size="sm" href="#cta" className="justify-center mt-2">
            Empezar proyecto
          </ButtonLink>
        </div>
      )}
    </nav>
  );
}
