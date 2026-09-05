import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/aree-di-intervento", label: "Aree di intervento" },
  { to: "/terapia-online", label: "Terapia online" },
  { to: "/formazione", label: "Formazione" },
  { to: "/contatti", label: "Contatti" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="h-20 max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-4">
        <div className="flex items-center gap-space-3 shrink-0">
          <Link
            className="font-headline-md text-headline-md leading-none text-on-surface hover:text-primary transition-colors tracking-tight whitespace-nowrap"
            to="/"
          >
            Dott.ssa Silvia Cauzzi
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-space-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
              activeProps={{ className: "text-primary font-bold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-space-3 shrink-0">
          <Link
            className="hidden lg:inline-flex items-center justify-center px-space-4 py-space-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_12px_rgba(139,75,47,0.15)]"
            to="/prenota"
          >
            Prenota un colloquio
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-on-surface hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "more_vert"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Chiudi menu"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-on-surface/30 backdrop-blur-sm"
        />
        <nav
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-surface shadow-2xl pt-24 px-space-6 flex flex-col gap-space-1 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary py-space-3 border-b border-outline-variant/40 transition-colors"
              activeProps={{ className: "text-primary font-bold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mt-space-6 inline-flex items-center justify-center px-space-4 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_12px_rgba(139,75,47,0.15)]"
            to="/prenota"
            onClick={() => setMenuOpen(false)}
          >
            Prenota un colloquio
          </Link>
        </nav>
      </div>
    </header>
  );
}
