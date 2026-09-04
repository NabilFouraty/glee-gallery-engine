import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e studio a Milano | Dott.ssa Silvia Cauzzi" },
      { name: "description", content: "Studio in Indirizzo provvisorio. Telefono, email e modulo per richiedere un primo colloquio conoscitivo." },
      { property: "og:title", content: "Contatti e studio a Milano | Dott.ssa Silvia Cauzzi" },
      { property: "og:description", content: "Studio in Indirizzo provvisorio. Telefono, email e modulo per richiedere un primo colloquio conoscitivo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      {/* Subtle Ambient Glow Element */}
      <div className="relative w-full overflow-hidden">
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-48 -left-20 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none"></div>
      {/* Editorial Intro Section */}
      <section className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-12 pb-space-8">
      <div className="flex flex-col gap-space-3 max-w-[65ch]">
      <div className="inline-flex items-center gap-space-2 text-tertiary">
      <span className="material-symbols-outlined text-[18px]">nature_people</span>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-fixed-variant">Primo Contatto • Spazio d'Ascolto</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                Contatti e Studio
              </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Puoi scrivermi, telefonare o compilare il modulo sottostante per richiedere informazioni o concordare un primo incontro conoscitivo.
              </p>
      </div>
      {/* Quick Status Badges */}
      <div className="flex flex-wrap items-center gap-space-3 mt-space-6 pt-space-4 border-t-0">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm shadow-sm">
      <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                Ricevimento su appuntamento • Milano • Online
              </div>
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                Segreto professionale garantito OPL n. 03/12345
              </div>
      </div>
      </section>
      {/* Main Content Dual-Column Layout */}
      <section className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop pb-space-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-start">
      {/* Left Column: Coordonnées, Transports, Carte, Affiliations */}
      <div className="lg:col-span-5 flex flex-col gap-space-8">
      {/* Studio & Direct Contact Card */}
      <div className="bg-surface-container-low rounded-xl p-space-6 lg:p-space-8 shadow-sm flex flex-col gap-space-6 transition-all hover:shadow-md">
      <div className="flex items-start gap-space-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined text-[22px]">apartment</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Sede Principale</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-normal mt-0.5">Studio di Psicoterapia</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-1">
                        Indirizzo provvisorio<br />
      <span className="text-outline font-label-sm text-label-sm">Città Studi • Zona Lambrate / Argonne</span>
      </p>
      </div>
      </div>
      {/* Visual studio space teaser */}
      <div className="relative overflow-hidden rounded-lg aspect-[16/9] shadow-inner">
      <img className="w-full h-full object-cover" alt="A tranquil, naturally lit psychological therapy consultation room in Milan with warm terracotta ceramic accents, soft linen armchair, indoor green plants, muted earthy tones and warm wood library shelves in soft afternoon light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO0TJYVL2ENEVSEpx_xpSH4czDfJt2JltdBvt-Pnl89DbsRpfoHgzJ2MIn2W3L33H4vYwUX9f2B1dM7R7gLpj51Mhf49qbZO6QT0xJub-7DQfefgXJ3ruM6yKvpGo_KqeqBCS_il8Z5sw5KA-dE2TMQ5nqvEb4J_oYg2o4fIDs9MSgQjQCLp4XX8VTZTk5uDPx1NlWp8x-k516pERXpKoMaZU25CY0frn8S1p8jVYlkwTvhie2akhc" />
      <div className="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-space-2 py-space-1 rounded font-label-sm text-label-sm text-on-surface">
                      Interno Studio • Spazio riservato
                    </div>
      </div>
      {/* Direct Contact Numbers */}
      <div className="space-y-space-3 pt-space-2">
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0 mt-1">call</span>
      <div className="flex flex-col text-on-surface">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Recapito Telefonico Studio</span>
      <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors font-medium" href="#">Telefono provvisorio</a>
      </div>
      </div>
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0 mt-1">smartphone</span>
      <div className="flex flex-col text-on-surface">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Cellulare dedicato appuntamenti</span>
      <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors font-medium" href="#">Cellulare provvisorio</a>
      </div>
      </div>
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0 mt-1">mail</span>
      <div className="flex flex-col text-on-surface min-w-0">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Email • Posta Certificata</span>
      <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors truncate" href="#">email provvisoria</a>
      <a className="font-label-sm text-label-sm text-outline hover:text-primary transition-colors truncate" href="#">PEC provvisoria</a>
      </div>
      </div>
      </div>
      </div>
      {/* Come Arrivare / Trasporti */}
      <div className="bg-surface-container rounded-xl p-space-6 lg:p-space-8 shadow-sm flex flex-col gap-space-4">
      <div className="flex items-center gap-space-2 text-on-surface">
      <span className="material-symbols-outlined text-[22px] text-primary">directions_subway</span>
      <h3 className="font-headline-md text-headline-md">Come arrivare</h3>
      </div>
      <ul className="space-y-space-3 font-body-md text-body-md text-on-surface-variant">
      <li className="flex items-start gap-space-3">
      <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold shrink-0 mt-0.5">M2</span>
      <span className=""><strong>Metropolitana:</strong> Linea M2 Verde — Fermate <em>Piola</em> o <em>Lambrate FS</em> (a pochi minuti a piedi).</span>
      </li>
      <li className="flex items-start gap-space-3">
      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shrink-0 mt-0.5">TRAM</span>
      <span className=""><strong>Tram:</strong> Linee <strong>23</strong> e <strong>33</strong> (fermate Piazza Leonardo da Vinci / Gran Sasso).</span>
      </li>
      <li className="flex items-start gap-space-3">
      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold shrink-0 mt-0.5">BUS</span>
      <span className=""><strong>Autobus:</strong> Linee urbane <strong>54</strong> e <strong>61</strong> con fermate nelle immediate vicinanze.</span>
      </li>
      </ul>
      {/* Stylized Google Map Container */}
      <div className="mt-space-2 flex flex-col gap-space-2">
      <div className="w-full h-56 bg-cover bg-center rounded-lg shadow-inner relative overflow-hidden group" data-location="Indirizzo provvisorio">
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
      <div className="absolute bottom-3 left-3 bg-surface/95 px-space-3 py-space-1 rounded-full shadow-md text-on-surface flex items-center gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
      <span className="font-label-sm text-label-sm">Indirizzo provvisorio</span>
      </div>
      </div>
      <a className="inline-flex items-center gap-space-1 text-primary hover:text-primary-container font-label-sm text-label-sm font-medium self-end" href="#" rel="noopener noreferrer" target="_blank">
      <span className="">Apri in Google Maps</span>
      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
      </a>
      </div>
      </div>
      {/* Official Affiliations & Direct Portals */}
      <div className="bg-surface-container-low rounded-xl p-space-6 shadow-sm flex flex-col gap-space-3">
      <h3 className="font-headline-md text-headline-md text-on-surface text-base">Affiliazioni e Iscrizioni Ufficiali</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-2 pt-space-1 font-label-md text-label-md">
      <a className="flex items-center justify-between p-space-3 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface transition-all" href="https://www.miodottore.it" rel="noopener noreferrer" target="_blank">
      <span className="">Profilo MioDottore.it</span>
      <span className="material-symbols-outlined text-[18px] text-outline">north_east</span>
      </a>
      <a className="flex items-center justify-between p-space-3 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface transition-all" href="#">
      <span className="">OttoCentro Milano</span>
      <span className="material-symbols-outlined text-[18px] text-outline">north_east</span>
      </a>
      <a className="flex items-center justify-between p-space-3 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface transition-all" href="#">
      <span className="">Scuola L.I.S.T.A.</span>
      <span className="material-symbols-outlined text-[18px] text-outline">north_east</span>
      </a>
      <a className="flex items-center justify-between p-space-3 rounded-lg bg-surface hover:bg-surface-container-high text-on-surface transition-all" href="https://www.opl.it" rel="noopener noreferrer" target="_blank">
      <span className="">Ordine Psicologi Lombardia</span>
      <span className="material-symbols-outlined text-[18px] text-outline">north_east</span>
      </a>
      </div>
      </div>
      </div>
      {/* Right Column: Secure Somatic-Framed Contact Form */}
      <div className="lg:col-span-7 flex flex-col gap-space-6">
      <div className="bg-surface-container-lowest rounded-xl p-space-8 lg:p-space-12 shadow-md relative overflow-hidden">
      <div className="flex items-center justify-between pb-space-4">
      <div>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Modulo di Contatto</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal">Richiedi un primo colloquio</h2>
      </div>
      <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-tertiary shrink-0">
      <span className="material-symbols-outlined text-[26px]">edit_note</span>
      </div>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant pb-space-6">
                    Ogni percorso inizia con uno spazio di conoscenza reciproca. Compila i campi indicati per condividere la tua richiesta con serenità.
                  </p>
      {/* Interactive Form */}
      <form className="space-y-space-6" id="contactForm" onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("feedbackMessage")?.classList.remove("hidden");
        (event.currentTarget as HTMLFormElement).reset();
      }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4">
      {/* Nome e Cognome */}
      <div className="flex flex-col gap-space-1">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="fullName">
                          Nome e cognome <span className="text-primary">*</span>
      </label>
      <input className="w-full px-space-4 py-space-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-inner placeholder:text-outline transition-all" id="fullName" name="fullName" placeholder="Es. Laura Rossi" required type="text" />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-space-1">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="emailAddr">
                          Email <span className="text-primary">*</span>
      </label>
      <input className="w-full px-space-4 py-space-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-inner placeholder:text-outline transition-all" id="emailAddr" name="emailAddr" placeholder="nome@dominio.it" required type="email" />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4">
      {/* Telefono (opzionale) */}
      <div className="flex flex-col gap-space-1">
      <label className="font-label-md text-label-md text-on-surface flex justify-between" htmlFor="phoneNum">
      <span className="">Numero di telefono</span>
      <span className="text-outline font-label-sm text-label-sm font-normal">Opzionale</span>
      </label>
      <input className="w-full px-space-4 py-space-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-inner placeholder:text-outline transition-all" id="phoneNum" name="phoneNum" placeholder="+39 333 0000000" type="tel" />
      </div>
      {/* Motivo del contatto / Oggetto */}
      <div className="flex flex-col gap-space-1">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="subject">
                          Motivo del contatto <span className="text-primary">*</span>
      </label>
      <div className="relative">
      <select className="w-full px-space-4 py-space-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-inner transition-all pr-10 cursor-pointer" id="subject" name="subject" required defaultValue="">
      <option disabled value="">Seleziona un'opzione</option>
      <option value="prima-visita">Prima visita conoscitiva</option>
      <option value="terapia-online">Terapia online</option>
      <option value="supervisione">Supervisione clinica</option>
      <option value="formazione">Formazione per enti/ONG</option>
      <option value="informazioni">Informazioni generali</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
      </div>
      </div>
      </div>
      {/* Messaggio */}
      <div className="flex flex-col gap-space-1">
      <label className="font-label-md text-label-md text-on-surface flex justify-between" htmlFor="messageText">
      <span className="">Messaggio <span className="text-primary">*</span></span>
      <span className="text-outline font-label-sm text-label-sm font-normal">Massima discrezione</span>
      </label>
      <textarea className="w-full px-space-4 py-space-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-inner placeholder:text-outline transition-all resize-y" id="messageText" name="messageText" placeholder="Descrivi brevemente la tua richiesta o le disponibilità di orario per un incontro..." required rows={5}></textarea>
      </div>
      {/* Checkbox GDPR & Deontologia */}
      <div className="flex items-start gap-space-3 pt-space-2">
      <input className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary/30 accent-primary cursor-pointer shrink-0" id="privacyConsent" name="privacyConsent" required type="checkbox" />
      <label className="font-label-sm text-label-sm text-on-surface-variant leading-normal cursor-pointer select-none" htmlFor="privacyConsent">
                        Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). Sono consapevole che le informazioni saranno trattate con la massima riservatezza secondo il Codice Deontologico degli Psicologi Italiani.
                      </label>
      </div>
      {/* Submission Button & Reassurance Note */}
      <div className="flex flex-col sm:flex-row items-center gap-space-4 pt-space-2">
      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-8 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-md hover:shadow-lg active:scale-[0.98]" type="submit">
      <span className="">Invia messaggio</span>
      <span className="material-symbols-outlined text-[18px]">send</span>
      </button>
      </div>
      {/* Success Notification Feedback */}
      <div className="hidden p-space-4 rounded-lg bg-secondary-fixed/50 text-on-surface flex items-center gap-space-3 transition-all" id="feedbackMessage">
      <span className="material-symbols-outlined text-tertiary text-[24px]">task_alt</span>
      <p className="font-body-md text-body-md">
                        Grazie per il tuo messaggio. Riceverai un riscontro attento entro 24-48 ore lavorative.
                      </p>
      </div>
      {/* Reassurance Card Box */}
      <div className="flex items-center gap-space-3 p-space-4 rounded-lg bg-surface-container-high text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0">lock</span>
      <span className="font-label-sm text-label-sm">
      <strong>I tuoi dati e la tua richiesta sono protetti dal più rigoroso segreto professionale.</strong> Nessuna informazione sarà ceduta o trattata al di fuori della relazione clinica.
                      </span>
      </div>
      </form>
      </div>
      {/* Secondary Somatic Reassurance / Consultation Modality Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4">
      <div className="bg-surface-container-low p-space-6 rounded-xl flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[22px] text-tertiary mt-1">chair</span>
      <div>
      <h4 className="font-headline-md text-headline-md text-base text-on-surface">Colloquio in Studio</h4>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                        Uno spazio protetto, accogliente e silenzioso a Milano Città Studi per riannodare i fili del proprio vissuto.
                      </p>
      </div>
      </div>
      <div className="bg-surface-container-low p-space-6 rounded-xl flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[22px] text-primary mt-1">laptop_chromebook</span>
      <div>
      <h4 className="font-headline-md text-headline-md text-base text-on-surface">Consultazione Online</h4>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                        Piattaforma crittografata end-to-end per italiani all'estero o per chi necessita di flessibilità geografica.
                      </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div></main>
      <SiteFooter />
    </div>
  );
}
