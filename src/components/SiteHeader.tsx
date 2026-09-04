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
            className="inline-flex items-center justify-center px-space-4 py-space-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_12px_rgba(139,75,47,0.15)]"
            to="/prenota"
          >
            Prenota un colloquio
          </Link>
        </div>
      </div>
    </header>
  );
}
