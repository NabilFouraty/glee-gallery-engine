import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


function useBookingInteractions() {
  useEffect(() => {
    let currentDay = "9 Ottobre";
    let currentTime = "11:00";
    const summaryService = document.getElementById("summary-service");
    const summarySlot = document.getElementById("summary-slot");
    const selectedDayDisplay = document.getElementById("selected-day-display");
    const updateSummary = () => {
      if (summarySlot) summarySlot.textContent = currentDay + " ore " + currentTime;
    };
    const cleanups: Array<() => void> = [];
    const on = (el: Element, fn: () => void) => {
      el.addEventListener("click", fn);
      cleanups.push(() => el.removeEventListener("click", fn));
    };

    const serviceCards = Array.from(document.querySelectorAll(".service-card"));
    serviceCards.forEach((card) => {
      on(card, () => {
        serviceCards.forEach((c) =>
          c.querySelector(".service-indicator")?.classList.replace("opacity-100", "opacity-0"),
        );
        const radio = card.querySelector<HTMLInputElement>('input[type="radio"]');
        if (!radio) return;
        radio.checked = true;
        card.querySelector(".service-indicator")?.classList.replace("opacity-0", "opacity-100");
        if (summaryService) summaryService.textContent = radio.value;
      });
    });

    const dayButtons = Array.from(document.querySelectorAll(".cal-day"));
    dayButtons.forEach((btn) => {
      on(btn, () => {
        dayButtons.forEach((b) => {
          b.classList.remove("bg-primary", "text-on-primary", "font-bold", "shadow-sm");
          b.classList.add("text-on-surface");
          const dot = b.querySelector("span");
          dot?.classList.remove("bg-surface");
          dot?.classList.add("bg-tertiary");
        });
        btn.classList.remove("text-on-surface");
        btn.classList.add("bg-primary", "text-on-primary", "font-bold", "shadow-sm");
        const dot = btn.querySelector("span");
        dot?.classList.remove("bg-tertiary");
        dot?.classList.add("bg-surface");
        const parts = (btn.getAttribute("data-day") || "").split(" ");
        currentDay = (parts[0] || "") + " " + (parts[1] || "Ottobre");
        if (selectedDayDisplay) selectedDayDisplay.textContent = currentDay;
        updateSummary();
      });
    });

    const slotButtons = Array.from(document.querySelectorAll(".slot-btn"));
    slotButtons.forEach((btn) => {
      on(btn, () => {
        slotButtons.forEach((b) => {
          b.classList.remove("bg-primary", "text-on-primary", "font-bold", "shadow-md");
          b.classList.add("bg-surface", "text-on-surface");
        });
        btn.classList.remove("bg-surface", "text-on-surface");
        btn.classList.add("bg-primary", "text-on-primary", "font-bold", "shadow-md");
        currentTime = btn.getAttribute("data-time") || "11:00";
        updateSummary();
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

export const Route = createFileRoute("/prenota")({
  head: () => ({
    meta: [
      { title: "Prenota un colloquio | Dott.ssa Silvia Cauzzi" },
      { name: "description", content: "Richiedi un primo colloquio conoscitivo in studio a Milano o online con la Dott.ssa Silvia Cauzzi." },
      { property: "og:title", content: "Prenota un colloquio | Dott.ssa Silvia Cauzzi" },
      { property: "og:description", content: "Richiedi un primo colloquio conoscitivo in studio a Milano o online con la Dott.ssa Silvia Cauzzi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrenotaPage,
});

function PrenotaPage() {
  useBookingInteractions();

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-surface py-space-12 lg:py-space-16">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      <div className="lg:col-span-8 flex flex-col gap-space-4">
      <div className="inline-flex items-center gap-space-2 self-start px-space-3 py-space-1 rounded-full bg-surface-container-high text-on-tertiary-fixed-variant shadow-sm">
      <span className="material-symbols-outlined text-[18px] text-tertiary">nest_eco_leaf</span>
      <span className="font-label-sm text-label-sm">Spazio accogliente • Riservatezza deontologica</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-none">
                  Prenota un colloquio
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[65ch]">
                  Scegli la modalità e il tipo di incontro. Il primo colloquio è uno spazio conoscitivo senza impegno, utile per mettere a fuoco il tuo bisogno e capire insieme la direzione migliore.
                </p>
      <div className="flex flex-wrap items-center gap-space-6 pt-space-2 text-on-surface-variant">
      <div className="flex items-center gap-space-2 font-label-md text-label-md">
      <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
      <span className="">Consenso &amp; Privacy protetti</span>
      </div>
      <div className="flex items-center gap-space-2 font-label-md text-label-md">
      <span className="material-symbols-outlined text-tertiary text-[20px]">receipt_long</span>
      <span className="">Spesa sanitaria detraibile 19%</span>
      </div>
      <div className="flex items-center gap-space-2 font-label-md text-label-md">
      <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
      <span className="">Disdetta gratuita entro 24h</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-4 flex justify-center lg:justify-end">
      <div className="relative p-space-4 rounded-xl bg-surface-container-low shadow-md flex items-center gap-space-4 max-w-sm w-full">
      <img className="w-20 h-20 rounded-lg object-cover shrink-0" alt="Quiet and serene psychotherapy practice room in Milan with warm clay tones, a comfortable armchair, soft linen textures, and a discreet leafy plant in soft morning sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI7MNWfG6Ng9jRQBeSGPY69vjnddCb9PDv-9oxVifhgJTO5ameF52Gq7gI82KhdJS0E5E5-gS5McMFDiOvIcRt4inP3J29xTpFhknIxpf1Q7DcCUs_JKDq-Xv4v3ysPIoS77MmSgT_EX_ZZzkWRTBVz93_Urb-StpZ_S_ztxJFLXJTk5yeP7cnNkdvAiq8sZivCD3s4JiNv1M2ONiN8dWXlQU7WCVJWf_b5XXbxSVUEJwBKjRyKSFm" />
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Studio Clinico Milano</span>
      <span className="font-headline-md text-headline-md text-on-surface text-base">Indirizzo provvisorio</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">MM2 Piola / Lambrate</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-12 lg:py-space-16">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="flex flex-col gap-space-8">
      <div>
      <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Passo 1 di 2</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-1">Seleziona la tipologia di prestazione</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-1">Tutte le consulenze si svolgono in un clima protetto, guidato da ascolto analitico e sensibilità corporea.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-4" id="service-selector">
      <label className="service-card cursor-pointer relative flex flex-col p-space-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm" data-service="primo-colloquio">
      <input defaultChecked className="peer sr-only" name="service" type="radio" defaultValue="Prima visita / Colloquio conoscitivo" />
      <div className="flex items-center justify-between mb-space-4">
      <span className="material-symbols-outlined text-[28px] text-tertiary">self_improvement</span>
      <span className="px-space-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">60 min</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">Prima visita / Colloquio conoscitivo</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1">Per conoscerci, chiarire la richiesta e valutare se intraprendere un percorso condiviso.</p>
      <div className="mt-space-4 pt-space-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Disponibile Studio • Online</span>
      <span className="service-indicator font-bold text-primary opacity-100">• Selezionato</span>
      </div>
      <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:shadow-[inset_0_0_0_2px_#8b4b2f] peer-checked:bg-primary-fixed/10 transition-all"></div>
      </label>
      <label className="service-card cursor-pointer relative flex flex-col p-space-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm" data-service="psicoterapia-studio">
      <input className="peer sr-only" name="service" type="radio" defaultValue="Psicoterapia individuale in studio" />
      <div className="flex items-center justify-between mb-space-4">
      <span className="material-symbols-outlined text-[28px] text-primary">chair</span>
      <span className="px-space-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">50 min</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">Psicoterapia individuale in studio</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1">Presso lo studio di Milano (Indirizzo provvisorio, MM2 Piola/Lambrate), in un setting intimo e riparato.</p>
      <div className="mt-space-4 pt-space-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span>Presenza fisica</span>
      <span className="service-indicator font-bold text-primary opacity-0">• Selezionato</span>
      </div>
      <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:shadow-[inset_0_0_0_2px_#8b4b2f] peer-checked:bg-primary-fixed/10 transition-all"></div>
      </label>
      <label className="service-card cursor-pointer relative flex flex-col p-space-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm" data-service="terapia-online">
      <input className="peer sr-only" name="service" type="radio" defaultValue="Terapia online protetta" />
      <div className="flex items-center justify-between mb-space-4">
      <span className="material-symbols-outlined text-[28px] text-secondary">videocam</span>
      <span className="px-space-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">50 min</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">Seduta di terapia online protetta</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1">A distanza su piattaforma sicura e riservata conforme GDPR, pensata per chi vive fuori città.</p>
      <div className="mt-space-4 pt-space-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span>Stanza crittografata</span>
      <span className="service-indicator font-bold text-primary opacity-0">• Selezionato</span>
      </div>
      <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:shadow-[inset_0_0_0_2px_#8b4b2f] peer-checked:bg-primary-fixed/10 transition-all"></div>
      </label>
      <label className="service-card cursor-pointer relative flex flex-col p-space-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm" data-service="supervisione">
      <input className="peer sr-only" name="service" type="radio" defaultValue="Supervisione clinica professionale" />
      <div className="flex items-center justify-between mb-space-4">
      <span className="material-symbols-outlined text-[28px] text-outline">psychology_alt</span>
      <span className="px-space-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">60 min</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">Supervisione clinica professionale</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1">Per psicologi, psicoterapeuti, medici e operatori del settore orientati all'approccio integrato.</p>
      <div className="mt-space-4 pt-space-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-outline"></span>Intervisione • ECM</span>
      <span className="service-indicator font-bold text-primary opacity-0">• Selezionato</span>
      </div>
      <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:shadow-[inset_0_0_0_2px_#8b4b2f] peer-checked:bg-primary-fixed/10 transition-all"></div>
      </label>
      </div>
      </div>
      </div>
      </section>
      <section className="w-full bg-surface py-space-12 lg:py-space-16">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="flex flex-col gap-space-2 mb-space-8">
      <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Passo 2 di 2</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Data, orario e recapiti</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Scegli la data tra quelle evidenziate in verde tenue e seleziona lo slot orario più comodo.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start">
      <div className="lg:col-span-7 flex flex-col gap-space-6 bg-surface-container-low rounded-xl p-space-6 lg:p-space-8 shadow-sm">
      <div className="flex items-center justify-between pb-space-4">
      <div className="flex items-center gap-space-2">
      <span className="material-symbols-outlined text-tertiary">calendar_month</span>
      <h3 className="font-headline-md text-headline-md text-on-surface" id="calendar-month-label">Ottobre 2024</h3>
      </div>
      <div className="flex items-center gap-space-1">
      <button aria-label="Mese precedente" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors" type="button">
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button aria-label="Mese successivo" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors" type="button">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-label-sm text-label-sm text-outline uppercase pb-space-2">
      <div className="">Lun</div>
      <div className="">Mar</div>
      <div className="">Mer</div>
      <div className="">Gio</div>
      <div className="">Ven</div>
      <div className="">Sab</div>
      <div className="">Dom</div>
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-body-md text-body-md" id="calendar-grid">
      <div className="p-2 text-surface-dim opacity-30 cursor-not-allowed">30</div>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="1 Ottobre 2024" type="button">
                    1
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="2 Ottobre 2024" type="button">
                    2
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="3 Ottobre 2024" type="button">
                    3
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="4 Ottobre 2024" type="button">
                    4
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">5</div>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">6</div>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="7 Ottobre 2024" type="button">
                    7
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="8 Ottobre 2024" type="button">
                    8
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg bg-primary text-on-primary font-bold shadow-sm relative group" data-day="9 Ottobre 2024" type="button">
                    9
                    <span className="block w-1.5 h-1.5 rounded-full bg-surface mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="10 Ottobre 2024" type="button">
                    10
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="11 Ottobre 2024" type="button">
                    11
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">12</div>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">13</div>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="14 Ottobre 2024" type="button">
                    14
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="15 Ottobre 2024" type="button">
                    15
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="16 Ottobre 2024" type="button">
                    16
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="17 Ottobre 2024" type="button">
                    17
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="18 Ottobre 2024" type="button">
                    18
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">19</div>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">20</div>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="21 Ottobre 2024" type="button">
                    21
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="22 Ottobre 2024" type="button">
                    22
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="23 Ottobre 2024" type="button">
                    23
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="24 Ottobre 2024" type="button">
                    24
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="25 Ottobre 2024" type="button">
                    25
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">26</div>
      <div className="p-2.5 text-outline opacity-40 cursor-not-allowed">27</div>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="28 Ottobre 2024" type="button">
                    28
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="29 Ottobre 2024" type="button">
                    29
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="30 Ottobre 2024" type="button">
                    30
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <button className="cal-day p-2.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium relative group" data-day="31 Ottobre 2024" type="button">
                    31
                    <span className="block w-1.5 h-1.5 rounded-full bg-tertiary mx-auto mt-0.5"></span>
      </button>
      <div className="p-2 text-surface-dim opacity-30 cursor-not-allowed">1 Nov</div>
      <div className="p-2 text-surface-dim opacity-30 cursor-not-allowed">2 Nov</div>
      <div className="p-2 text-surface-dim opacity-30 cursor-not-allowed">3 Nov</div>
      </div>
      <div className="pt-space-4">
      <div className="flex items-center justify-between mb-space-3">
      <span className="font-label-md text-label-md text-on-surface">Fasce orarie per mercoledì <span className="font-bold text-primary" id="selected-day-display">9 Ottobre</span></span>
      <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
      <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span> 4 orari disponibili
                    </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-3" id="slot-container">
      <button className="slot-btn px-space-3 py-space-2 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" data-time="09:30" type="button">
                      09:30
                    </button>
      <button className="slot-btn px-space-3 py-space-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md transition-all text-center shadow-md font-bold" data-time="11:00" type="button">
                      11:00
                    </button>
      <button className="slot-btn px-space-3 py-space-2 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" data-time="15:30" type="button">
                      15:30
                    </button>
      <button className="slot-btn px-space-3 py-space-2 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" data-time="17:00" type="button">
                      17:00
                    </button>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-6 lg:p-space-8 shadow-md">
      <div className="flex items-center gap-space-2 mb-space-6 pb-space-4">
      <span className="material-symbols-outlined text-primary">edit_calendar</span>
      <div className="flex flex-col">
      <h3 className="font-headline-md text-headline-md text-on-surface">I tuoi dati</h3>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Riceverai un'email di riepilogo con tutte le istruzioni</p>
      </div>
      </div>
      <form className="flex flex-col gap-space-4" id="booking-form" onSubmit={(event) => {
        event.preventDefault();
        const form = document.getElementById("booking-form");
        const success = document.getElementById("booking-success");
        if (form && success) {
          form.classList.add("hidden");
          success.classList.remove("hidden");
          success.classList.add("flex");
        }
      }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-3">
      <div className="flex flex-col gap-space-1">
      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="nome">Nome *</label>
      <input className="px-space-3 py-space-2 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-md text-body-md" id="nome" placeholder="Es. Elena" required type="text" />
      </div>
      <div className="flex flex-col gap-space-1">
      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="cognome">Cognome *</label>
      <input className="px-space-3 py-space-2 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-md text-body-md" id="cognome" placeholder="Es. Rossi" required type="text" />
      </div>
      </div>
      <div className="flex flex-col gap-space-1">
      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="email">Indirizzo Email *</label>
      <input className="px-space-3 py-space-2 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-md text-body-md" id="email" placeholder="nome@esempio.it" required type="email" />
      </div>
      <div className="flex flex-col gap-space-1">
      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="telefono">Recapito Telefonico *</label>
      <input className="px-space-3 py-space-2 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-md text-body-md" id="telefono" placeholder="+39 340 0000000" required type="tel" />
      </div>
      <div className="flex flex-col gap-space-1">
      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="note">Note brevi o motivo della visita (opzionale)</label>
      <textarea className="px-space-3 py-space-2 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-md text-body-md resize-none" id="note" placeholder="Se desideri, condividi brevemente cosa ti porta a richiedere questo incontro..." rows={3}></textarea>
      </div>
      <div className="p-space-3 rounded-lg bg-surface-container-low flex flex-col gap-space-1">
      <span className="font-label-sm text-label-sm text-on-surface font-semibold">Riepilogo appuntamento selezionato:</span>
      <div className="flex flex-col text-on-surface-variant font-label-md text-label-md gap-0.5">
      <span className="font-medium text-primary" id="summary-service">Prima visita / Colloquio conoscitivo</span>
      <span className="">Data e Ora: <strong className="text-on-surface" id="summary-slot">Mercoledì 9 Ottobre ore 11:00</strong></span>
      </div>
      </div>
      <label className="flex items-start gap-space-2 cursor-pointer pt-space-1">
      <input className="mt-1 accent-primary rounded cursor-pointer" required type="checkbox" />
      <span className="font-label-sm text-label-sm text-on-surface-variant">Ho letto e accetto il trattamento dei dati personali secondo la normativa sulla privacy e il codice deontologico degli psicologi.</span>
      </label>
      <button className="w-full mt-space-2 py-space-3 px-space-6 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_16px_rgba(139,75,47,0.25)] flex items-center justify-center gap-space-2" id="submit-btn" type="submit">
      <span className="material-symbols-outlined text-[20px]">check_circle</span>
      <span className="">Conferma richiesta colloquio</span>
      </button>
      <p className="text-center font-label-sm text-label-sm text-outline">Nessun addebito immediato. Riceverai conferma personale dalla Dott.ssa Cauzzi.</p>
      </form>
      <div className="hidden flex-col items-center justify-center text-center p-space-6 gap-space-4" id="booking-success">
      <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[36px]">done</span>
      </div>
      <h4 className="font-headline-md text-headline-md text-on-surface">Richiesta inviata con successo</h4>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Grazie per la fiducia. La Dott.ssa Silvia Cauzzi ha ricevuto la tua richiesta e ti contatterà via email o telefono entro 24 ore lavorative per confermare definitivamente l'orario.
                  </p>
      <button className="mt-space-2 px-space-4 py-space-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={() => location.reload()} type="button">
                    Prenota un altro incontro
                  </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="w-full bg-surface-container-low py-space-16">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="flex flex-col gap-space-3 mb-space-12 text-center max-w-2xl mx-auto">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Trasparenza &amp; Cura</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Informazioni pratiche e trasparenza</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Ogni dettaglio è pensato per offrirti serenità, chiarezza organizzativa e continuità terapeutica.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-6">
      <div className="flex flex-col p-space-6 rounded-xl bg-surface shadow-sm">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary mb-space-4">
      <span className="material-symbols-outlined text-[24px]">schedule</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2 text-lg">Orari di ricevimento</h3>
      <ul className="font-body-md text-body-md text-on-surface-variant text-sm flex flex-col gap-space-1">
      <li className="flex justify-between">
      <span className="">Lun – Gio:</span>
      <span className="text-on-surface font-medium">9:00–13:00 / 15:00–19:00</span>
      </li>
      <li className="flex justify-between">
      <span className="">Venerdì:</span>
      <span className="text-on-surface font-medium">9:00–13:00</span>
      </li>
      <li className="flex justify-between text-outline">
      <span className="">Sab – Dom:</span>
      <span className="">Chiuso</span>
      </li>
      </ul>
      </div>
      <div className="flex flex-col p-space-6 rounded-xl bg-surface shadow-sm">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-4">
      <span className="material-symbols-outlined text-[24px]">payments</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2 text-lg">Tariffe e detraibilità</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1">
                  L'onorario è concordato individualmente nel primo colloquio. Trattandosi di prestazione sanitaria, la spesa è detraibile ai fini fiscali al 19% tramite pagamenti tracciabili. Solo pazienti privati.
                </p>
      </div>
      <div className="flex flex-col p-space-6 rounded-xl bg-surface shadow-sm">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary mb-space-4">
      <span className="material-symbols-outlined text-[24px]">event_repeat</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2 text-lg">Politica di disdetta</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1">
                  Nel rispetto del tempo reciproco e delle altre persone in attesa, la disdetta o lo spostamento della seduta devono pervenire con almeno 24 ore di anticipo.
                </p>
      </div>
      <div className="flex flex-col p-space-6 rounded-xl bg-surface shadow-sm">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-4">
      <span className="material-symbols-outlined text-[24px]">support_agent</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2 text-lg">Supporto diretto</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-space-3">
                  Per urgenze, necessità particolari di orario o chiarimenti prima della prenotazione:
                </p>
      <div className="flex flex-col gap-1 font-label-md text-label-md text-primary">
      <a className="hover:underline flex items-center gap-1" href="#"><span className="material-symbols-outlined text-[16px]">call</span>Telefono provvisorio</a>
      <a className="hover:underline flex items-center gap-1" href="#"><span className="material-symbols-outlined text-[16px]">phone_android</span>Cellulare provvisorio</a>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="w-full bg-surface py-space-12">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="p-space-8 rounded-xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-space-6">
      <div className="flex items-center gap-space-4">
      <img className="w-16 h-16 rounded-full object-cover shrink-0 shadow-sm" alt="Warm portrait of Dr. Silvia Cauzzi, psychologist and psychotherapist, with a gentle empathetic expression, wearing an earthy organic linen blazer against an organic warm studio background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kfT_ZnM0zHS0B3490QN3a7Pc85BXqFWKvItjYkfRgtTVc4RA_dJB0DYpEt7Q49vJMxKNQJOOfneUKb3CaZinFHjs42_CgRXLthkXiVpwTAgEg8wRTakFvyESMtsaeidcp_EVImW2y_oKwCF4EiIs1Hhe8CnH9CEOwJy9FVuxujI9qRs0AkQBgkOTmlAsvG2ni50LHPevUrLEciYUB3mPIhD47R32kp0rAhq6pjCkNKEYC7NZAgBT" />
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-on-surface text-lg">Hai dubbi sul percorso più adatto a te?</span>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Puoi anche scrivermi direttamente una breve email con la tua situazione.</p>
      </div>
      </div>
      <a className="px-space-6 py-space-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shrink-0 flex items-center gap-space-2" href="#">
      <span className="material-symbols-outlined text-[18px] text-tertiary">mail</span>
      <span className="">Scrivi (email provvisoria)</span>
      </a>
      </div>
      </div>
      </section>
      </div>
      </main>
      <SiteFooter />
    </div>
  );
}
