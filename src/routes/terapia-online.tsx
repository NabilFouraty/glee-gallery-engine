import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/terapia-online")({
  head: () => ({
    meta: [
      { title: "Terapia online | Dott.ssa Silvia Cauzzi" },
      { name: "description", content: "Percorsi di psicoterapia online sicuri e riservati, ovunque tu sia, con la Dott.ssa Silvia Cauzzi." },
      { property: "og:title", content: "Terapia online | Dott.ssa Silvia Cauzzi" },
      { property: "og:description", content: "Percorsi di psicoterapia online sicuri e riservati, ovunque tu sia, con la Dott.ssa Silvia Cauzzi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TerapiaOnlinePage,
});

function TerapiaOnlinePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      {/* SECTION HERO EDITORIAL */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-16 lg:py-space-24">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      {/* Text Column */}
      <div className="lg:col-span-7 flex flex-col items-start gap-space-4">
      {/* Badge Somatico */}
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-secondary-container/40 text-tertiary font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[16px] text-tertiary">nest_remote</span>
      <span className="">Flessibilità e continuità clinica</span>
      </div>
      <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight">
                  Terapia a distanza
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[58ch] leading-relaxed">
                  La stessa qualità, più flessibilità. Se vivi fuori Milano, hai un’agenda impegnata, o semplicemente preferisci il comfort del tuo spazio protetto, la terapia online è un’opzione clinica efficace e rigorosa.
                </p>
      <div className="flex flex-wrap items-center gap-space-4 pt-space-2">
      <a className="inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_8px_20px_rgba(139,75,47,0.22)]" href="#prenotazione">
      <span className="">Prenota una seduta online</span>
      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
      </a>
      <a className="inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-sm" href="#come-funziona">
      <span className="material-symbols-outlined text-[18px] text-tertiary">tune</span>
      <span className="">Come funziona</span>
      </a>
      </div>
      {/* Micro Metriche di garanzia */}
      <div className="pt-space-6 flex items-center gap-space-6 text-on-surface-variant">
      <div className="flex items-center gap-space-2">
      <span className="material-symbols-outlined text-tertiary text-[20px]">verified_user</span>
      <span className="font-label-sm text-label-sm">GDPR &amp; Codice OPL</span>
      </div>
      <div className="h-4 w-px bg-outline-variant/60"></div>
      <div className="flex items-center gap-space-2">
      <span className="material-symbols-outlined text-tertiary text-[20px]">receipt_long</span>
      <span className="font-label-sm text-label-sm">Detraibile al 19%</span>
      </div>
      </div>
      </div>
      {/* Visual Mosaic Column */}
      <div className="lg:col-span-5 relative">
      <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Warm Background Geometry */}
      <div className="absolute inset-0 bg-surface-container rounded-xl rotate-1 scale-105 transform origin-center pointer-events-none"></div>
      <div className="relative bg-surface rounded-xl overflow-hidden shadow-xl p-space-3">
      <img className="w-full h-80 lg:h-96 object-cover rounded-lg" alt="Intimate, warm counseling space with a soft ceramic cup of herbal tea resting beside an open linen journal and a tablet screen displaying a tranquil therapy consultation room, illuminated by soft golden morning window light with olive green and terracotta textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMWw0OlU-rS87CStA33elB0Eg3-b-IFLTrjoyypZWRfNniGTpqIwAFLeKBkUytqUPxuKOCHfTKQ0-5LhRNkYwWrri5u1CmsKVg8TlIdrqrw1d5CzPwSaGFB8V8BZgsyJY8mymcsFe5Vdvjoz3--DcY8ATE3rK-WcqWvijJlPxJ2bmzMYLJUsj4CDBuyTYEjnfAmGrPUWR-wcFo3N-v7cEfr82MX2fqKil16Z4aGi27amnu_ZtqVRtt" />
      <div className="p-space-4 flex items-center justify-between">
      <div>
      <p className="font-headline-md text-headline-md text-on-surface">Spazio d'ascolto protetto</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Connessione riservata da Milano &amp; nel mondo</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">headset_mic</span>
      </div>
      </div>
      </div>
      {/* Floating reassurance chip */}
      <div className="absolute -bottom-6 -left-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-lg shadow-lg p-space-3 flex items-center gap-space-3 max-w-xs">
      <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-tertiary shrink-0">
      <span className="material-symbols-outlined text-[18px]">lock</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface">
                      Crittografia end-to-end senza registrazione video.
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION 3 PILASTRI / CARTE BENEFICI */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="flex flex-col items-center text-center max-w-[65ch] mx-auto mb-space-12">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-space-2">I vantaggi clinici</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Un setting terapeutico flessibile ma rigoroso
              </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-2">
                La distanza fisica non compromette la profondità analitica, offrendo continuità ovunque tu sia nel tuo cammino di cura.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6 lg:gap-space-8">
      {/* Pillar 1 */}
      <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group">
      <div>
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary mb-space-6 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[28px]">schedule</span>
      </div>
      <div className="flex items-center gap-space-2 mb-space-2">
      <span className="font-label-sm text-label-sm text-tertiary">01 / TEMPO &amp; MOBILITÀ</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Flessibilità senza confini
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Prenoti quando vuoi, senza spostamenti nel traffico milanese. Una soluzione ideale per expat italiani nel mondo, trasfertisti, lavoratori su turni e neo-genitori che necessitano di salvaguardare i propri ritmi.
                  </p>
      </div>
      <div className="pt-space-6 flex items-center gap-space-2 font-label-md text-label-md text-primary">
      <span className="">Elimina il tempo di viaggio</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Pillar 2 */}
      <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group">
      <div>
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-tertiary mb-space-6 shadow-sm group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
      <span className="material-symbols-outlined text-[28px]">encrypted</span>
      </div>
      <div className="flex items-center gap-space-2 mb-space-2">
      <span className="font-label-sm text-label-sm text-tertiary">02 / ETICA &amp; TUTELA</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Privacy e sicurezza deontologica
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Piattaforme telematiche protette conformi agli standard GDPR e al Codice Deontologico degli Psicologi Italiani. Nessuna registrazione, crittografia end-to-end e assoluta riservatezza per ogni parola condivisa.
                  </p>
      </div>
      <div className="pt-space-6 flex items-center gap-space-2 font-label-md text-label-md text-tertiary">
      <span className="">Spazio clinico blindato</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Pillar 3 */}
      <div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group">
      <div>
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary mb-space-6 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[28px]">psychology</span>
      </div>
      <div className="flex items-center gap-space-2 mb-space-2">
      <span className="font-label-sm text-label-sm text-tertiary">03 / RICERCA EVIDENCE-BASED</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Efficacia scientifica clinica
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Gli studi longitudinali internazionali confermano che l'alleanza terapeutica e la relazione analitica a distanza sono altrettanto trasformative, profonde e durature rispetto alle sedute in presenza a studio.
                  </p>
      </div>
      <div className="pt-space-6 flex items-center gap-space-2 font-label-md text-label-md text-primary">
      <span className="">Evidenze internazionali APA</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION COME FUNZIONA (3 TAPPE) */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface-container-low" id="come-funziona">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-12 gap-space-6">
      <div>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-space-2 block">Percorso chiaro</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Come funziona il percorso online
                </h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[50ch]">
                Dalla prima prenotazione all’incontro telematico protetto: tre semplici passaggi per avviare il tuo spazio di ascolto senza attriti tecnici.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8 relative">
      {/* Step 1 */}
      <div className="relative bg-surface rounded-xl p-space-8 shadow-sm flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-space-6">
      <span className="font-display-lg text-[2.5rem] leading-none text-primary/30 font-headline-lg">01</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">edit_calendar</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Prenotazione online
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Scegli comodamente giorno e fascia oraria dal calendario integrato. Riceverai conferma immediata e le indicazioni essenziali per il primo contatto.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 bg-surface-container-low/50 rounded-lg p-space-3 text-on-surface-variant font-label-sm text-label-sm flex items-center gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
      <span className="">Scelta libera di data &amp; ora</span>
      </div>
      </div>
      {/* Step 2 */}
      <div className="relative bg-surface rounded-xl p-space-8 shadow-sm flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-space-6">
      <span className="font-display-lg text-[2.5rem] leading-none text-primary/30 font-headline-lg">02</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined">link</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Ricezione link riservato
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Ricevi promemoria e un invito protetto per videochiamata crittografata (Skype, Microsoft Teams o Google Meet sicuro). Non serve installare software complessi.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 bg-surface-container-low/50 rounded-lg p-space-3 text-on-surface-variant font-label-sm text-label-sm flex items-center gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary">security</span>
      <span className="">Link monouso crittografato</span>
      </div>
      </div>
      {/* Step 3 */}
      <div className="relative bg-surface rounded-xl p-space-8 shadow-sm flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-space-6">
      <span className="font-display-lg text-[2.5rem] leading-none text-primary/30 font-headline-lg">03</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">self_improvement</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    La tua seduta protetta
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Ti connetti in un luogo tranquillo e dedicato, a ritmo con le tue necessità emotive e somatiche, con la presenza attenta e la cura della terapeuta.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 bg-surface-container-low/50 rounded-lg p-space-3 text-on-surface-variant font-label-sm text-label-sm flex items-center gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary">favorite</span>
      <span className="">Ascolto attivo di 50 minuti</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION REQUISITI TECNICI & CONSIGLI DI SETTING */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      {/* Visual Column with organic framing */}
      <div className="lg:col-span-5 order-2 lg:order-1">
      <div className="bg-surface-container-high rounded-xl p-space-6 lg:p-space-8 relative shadow-md">
      <div className="rounded-lg overflow-hidden mb-space-6">
      <img className="w-full h-72 object-cover rounded-lg" alt="Quiet sunlit reading and consultation corner with a wooden desk, notebook with pen, a steaming ceramic mug, headphones, a potted fern and soft linen curtains in warm earthy tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNs95_m4xlw3LAxuqvNNXUKlQYALgwntouDj_D5xZ44z_m2cfIHmm8-jHbXQ45NrSle1ycFqzBJFL-VlUCvamKfAYqNPwGkf4EeKDMzKv7XkqmOb8eM3PQTbxGS1-5kqVk6JtCeUlQiGyzzg4htxc273wR2H5puhT03EUIeNLZQ-KcjuQg2fCljsKDxl8Hgd9WRKnqelH8H--FlJBBj_vXk8bz55o_d8wdnYT-4_1FBCjWrtPeFSm6" />
      </div>
      <div className="flex items-center gap-space-4">
      <div className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">chair</span>
      </div>
      <div>
      <p className="font-headline-md text-[1.25rem] text-on-surface">Il tuo spazio sacro</p>
      <p className="font-body-md text-body-md text-on-surface-variant">Un rituale prima di iniziare facilita il radicamento corporeo.</p>
      </div>
      </div>
      </div>
      </div>
      {/* Checklist Column */}
      <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-space-4">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Prepararsi alla seduta</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Requisiti tecnici e consigli di setting
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[60ch]">
                  Creare un setting terapeutico casalingo è un gesto di cura verso se stessi. Bastano pochi elementi per garantire la stessa concentrazione dello studio clinico.
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4 pt-space-4">
      {/* Item 1 */}
      <div className="bg-surface-container-low p-space-4 rounded-xl flex items-start gap-space-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-[18px]">wifi</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Connessione stabile</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Wi-Fi domestico o 4G/5G affidabile per evitare interruzioni improvvise.</p>
      </div>
      </div>
      {/* Item 2 */}
      <div className="bg-surface-container-low p-space-4 rounded-xl flex items-start gap-space-3">
      <div className="w-8 h-8 rounded-full bg-secondary/15 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-[18px]">videocam</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Dispositivo con videocamera</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Computer portatile, tablet o smartphone con webcam posizionata ad altezza occhi.</p>
      </div>
      </div>
      {/* Item 3 */}
      <div className="bg-surface-container-low p-space-4 rounded-xl flex items-start gap-space-3">
      <div className="w-8 h-8 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-[18px]">headphones</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Cuffie o auricolari</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Indispensabili per preservare la riservatezza acustica e migliorare la voce.</p>
      </div>
      </div>
      {/* Item 4 */}
      <div className="bg-surface-container-low p-space-4 rounded-xl flex items-start gap-space-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-[18px]">meeting_room</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Stanza chiusa e tranquilla</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Un ambiente privato in cui sentirti libero di esprimerti senza timore di essere ascoltato.</p>
      </div>
      </div>
      {/* Item 5 */}
      <div className="bg-surface-container-low p-space-4 rounded-xl flex items-start gap-space-3 sm:col-span-2">
      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-[18px]">local_cafe</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Conforto personale &amp; appunti</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Una tisana calda, un bicchiere d’acqua e un quaderno intimo dove annotare sogni, sensazioni o pensieri emersi dopo l’incontro.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION FAQ ACCORDION */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface-container-low">
      <div className="max-w-[56rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="text-center mb-space-12">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-space-2 block">Domande frequenti</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Dubbi sul setting online?
              </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-2">
                Le risposte alle domande più comuni sulla psicoterapia a distanza.
              </p>
      </div>
      <div className="flex flex-col gap-space-4" id="faq-container">
      {/* FAQ 1 */}
      <div className="bg-surface rounded-xl overflow-hidden shadow-sm transition-all duration-200">
      <button aria-expanded="false" className="faq-toggle w-full p-space-6 flex items-center justify-between text-left gap-space-4" type="button">
      <span className="font-headline-md text-[1.25rem] text-on-surface font-semibold">La terapia online è adatta a tutti i problemi?</span>
      <span className="material-symbols-outlined text-primary text-[24px] transform transition-transform duration-200 shrink-0">expand_more</span>
      </button>
      <div className="faq-content hidden px-space-6 pb-space-6 text-on-surface-variant font-body-md text-body-md">
      <p className="">
                    La terapia online è altamente efficace per ansia, disturbi dell'umore, transizioni di vita, lutti, percorsi identitari e difficoltà relazionali. Tuttavia, in situazioni di acuzie psichiatrica severa, rischio autolesivo imminente o dissociazione profonda, si consiglia una presa in carico clinica in presenza con rete territoriale dedicata. Durante il primo colloquio conoscitivo valuteremo insieme l'adeguatezza del canale telematico per la tua specifica situazione.
                  </p>
      </div>
      </div>
      {/* FAQ 2 */}
      <div className="bg-surface rounded-xl overflow-hidden shadow-sm transition-all duration-200">
      <button aria-expanded="false" className="faq-toggle w-full p-space-6 flex items-center justify-between text-left gap-space-4" type="button">
      <span className="font-headline-md text-[1.25rem] text-on-surface font-semibold">Come avvengono la fatturazione e la detrazione sanitaria?</span>
      <span className="material-symbols-outlined text-primary text-[24px] transform transition-transform duration-200 shrink-0">expand_more</span>
      </button>
      <div className="faq-content hidden px-space-6 pb-space-6 text-on-surface-variant font-body-md text-body-md">
      <p className="">
                    Le prestazioni psicoterapeutiche online sono a tutti gli effetti prestazioni sanitarie. A ogni seduta viene emessa regolare fattura sanitaria esente IVA (art. 10 DPR 633/72). Il pagamento avviene tramite bonifico bancario tracciabile o carta, consentendoti di usufruire della piena <strong>detrazione fiscale al 19%</strong> nella dichiarazione dei redditi annuale, con trasmissione automatica al Sistema Tessera Sanitaria (salvo tua opposizione).
                  </p>
      </div>
      </div>
      {/* FAQ 3 */}
      <div className="bg-surface rounded-xl overflow-hidden shadow-sm transition-all duration-200">
      <button aria-expanded="false" className="faq-toggle w-full p-space-6 flex items-center justify-between text-left gap-space-4" type="button">
      <span className="font-headline-md text-[1.25rem] text-on-surface font-semibold">Cosa succede se la connessione cade durante la seduta?</span>
      <span className="material-symbols-outlined text-primary text-[24px] transform transition-transform duration-200 shrink-0">expand_more</span>
      </button>
      <div className="faq-content hidden px-space-6 pb-space-6 text-on-surface-variant font-body-md text-body-md">
      <p className="">
                    In caso di instabilità improvvisa della rete, disponiamo di un protocollo chiaro e rassicurante: attendiamo un minuto per il ripristino; se il blackout persiste, procediamo immediatamente via chiamata telefonica o piattaforma secondaria concordata in anticipo, recuperando i minuti persi. La continuità della relazione non viene mai lasciata in sospeso.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION CTA FINALE CHALUREUX */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface relative overflow-hidden" id="prenotazione">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="relative bg-surface-container rounded-2xl overflow-hidden shadow-xl p-space-8 lg:p-space-16">
      {/* Subtle organic decoration inside container */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-center">
      <div className="lg:col-span-8 flex flex-col gap-space-4">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Inizia il tuo cammino</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Uno spazio di cura ritagliato su di te, ovunque ti trovi
                  </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[60ch]">
                    Prenota il tuo primo colloquio conoscitivo a distanza. Insieme definiremo obiettivi, modalità e ritmo per accogliere ciò che chiede di essere ascoltato.
                  </p>
      <div className="flex flex-wrap items-center gap-space-4 pt-space-2">
      <a className="inline-flex items-center justify-center gap-space-2 px-space-8 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_8px_24px_rgba(139,75,47,0.25)]" href="/prenota">
      <span className="">Prenota ora la seduta</span>
      <span className="material-symbols-outlined text-[18px]">north_east</span>
      </a>
      <a className="inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" href="/contatti">
      <span className="material-symbols-outlined text-[18px]">mail</span>
      <span className="">Richiedi chiarimenti via mail</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
      <div className="bg-surface rounded-xl p-space-6 shadow-sm w-full max-w-sm">
      <div className="flex items-center gap-space-3 mb-space-3">
      <span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
      <span className="font-headline-md text-[1.125rem] text-on-surface">Dott.ssa Silvia Cauzzi</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed mb-space-3">
                      Iscritta all'Ordine degli Psicologi della Lombardia. Pratica clinica a orientamento junghiano con approccio etnopsicologico e somatico.
                    </p>
      <div className="pt-space-3 bg-surface-container-low rounded-lg p-space-2 text-center text-tertiary font-label-sm text-label-sm">
                      Disponibilità settimanali aperte
                    </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive JavaScript for FAQ Accordion */}
      
      </div></main>
      <SiteFooter />
    </div>
  );
}
