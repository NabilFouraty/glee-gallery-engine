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

type DrawerItem = {
  to: string;
  title: string;
  subtitle: string;
  icon: string;
  exact?: boolean;
};

const drawerItems: DrawerItem[] = [
  {
    to: "/",
    title: "Home",
    subtitle: "Accoglienza & approccio clinico",
    icon: "home",
    exact: true,
  },
  {
    to: "/chi-sono",
    title: "Chi sono",
    subtitle: "Percorso formativo & specializzazione L.I.S.T.A.",
    icon: "person",
  },
  {
    to: "/aree-di-intervento",
    title: "Interventi",
    subtitle: "Ansia, attacchi di panico e transizioni",
    icon: "schedule",
  },
  {
    to: "/terapia-online",
    title: "Terapia online",
    subtitle: "Piattaforma criptata conforme GDPR",
    icon: "desktop_windows",
  },
  {
    to: "/formazione",
    title: "Formazione",
    subtitle: "Docenze, supervisioni & pubblicazioni",
    icon: "menu_book",
  },
  {
    to: "/contatti",
    title: "Contatti",
    subtitle: "Studio a Milano & online",
    icon: "location_on",
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

    </header>

    {/* Mobile / tablet drawer */}
    <div
      className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Mobile / tablet drawer inner */}
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
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between gap-space-3 px-space-4 h-20 border-b border-outline-variant/40 shrink-0">
            <div className="flex flex-col min-w-0">
              <span className="font-headline-md text-lg text-on-surface leading-none whitespace-nowrap">
                Dott.ssa Silvia Cauzzi
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">
                Psicologa Psicoterapeuta
              </span>
            </div>
            <button
              type="button"
              aria-label="Chiudi menu"
              onClick={() => setMenuOpen(false)}
              className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-space-4 py-space-6 flex flex-col">
            {/* Credential header */}
            <div className="pb-space-4 border-b border-outline-variant/40">
              <div className="flex items-center justify-between gap-space-3 mb-space-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-label-md bg-tertiary-fixed/40 text-on-tertiary-fixed-variant border border-tertiary-fixed-dim/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  Iscritta OPL N° 12345
                </span>
                <span className="text-xs text-on-surface-variant whitespace-nowrap">
                  Milano & Online
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl text-on-surface leading-tight">
                Navigazione Principale
              </h2>
              <p className="text-xs text-on-surface-variant mt-1">
                Approccio junghiano ed etno-sistemico per il benessere emotivo
              </p>
            </div>

            {/* Vertical nav cards */}
            <nav
              aria-label="Menu principale"
              className="my-space-6 flex flex-col gap-space-2 flex-1"
            >
              {drawerItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  activeOptions={{ exact: item.exact ?? false }}
                  className="group flex items-center justify-between gap-space-3 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/50 hover:border-primary/40 hover:bg-primary-fixed/20 transition-all"
                  activeProps={{
                    className:
                      "group flex items-center justify-between gap-space-3 p-3.5 rounded-xl bg-primary-fixed/40 border border-primary/40 shadow-sm transition-all",
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        {item.icon}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-headline-md text-base text-on-surface group-hover:text-primary transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-on-surface-variant truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-base text-tertiary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0">
                    chevron_right
                  </span>
                </Link>
              ))}
            </nav>

            {/* Bottom actions */}
            <div className="pt-space-4 border-t border-outline-variant/40 flex flex-col gap-space-3">
              <Link
                to="/prenota"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-sm shadow-sm transition-colors"
              >
                <span className="material-symbols-outlined text-lg">
                  calendar_month
                </span>
                Prenota un primo colloquio
              </Link>
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between text-xs text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Studio attivo a Milano</span>
                </div>
                <span className="text-primary font-label-md">
                  Contatti in aggiornamento
                </span>
              </div>
              <p className="text-[10px] text-center text-on-surface-variant/80 pt-1">
                Prestazione sanitaria detraibile ai fini fiscali — Codice
                Deontologico CNOP
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
