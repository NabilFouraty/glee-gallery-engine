import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dott.ssa Silvia Cauzzi | Psicologa e Psicoterapeuta a Milano" },
      { name: "description", content: "Psicologa, psicoterapeuta junghiana ed etnopsicologa a Milano e online: ascolto, cura del trauma e percorsi individuali." },
      { property: "og:title", content: "Dott.ssa Silvia Cauzzi | Psicologa e Psicoterapeuta a Milano" },
      { property: "og:description", content: "Psicologa, psicoterapeuta junghiana ed etnopsicologa a Milano e online: ascolto, cura del trauma e percorsi individuali." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      {/* SECTION HERO */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-12 lg:py-space-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[28rem] h-[28rem] rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      {/* Left Column: Copy & CTAs */}
      <div className="lg:col-span-7 flex flex-col items-start gap-space-6">
      <div className="inline-flex items-center gap-space-2 px-space-4 py-space-2 rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
      <span className="material-symbols-outlined text-[18px] text-tertiary">psychology_alt</span>
      <span className="font-label-sm text-label-sm tracking-wide">Studio di Psicoterapia a Milano &amp; Sedute Online</span>
      </div>
      <div className="flex flex-col gap-space-2">
      <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight">
                    Silvia Cauzzi
                  </h1>
      <p className="font-headline-md text-headline-md text-primary font-light italic">
                    Psicologa • Psicoterapeuta • Etnopsicologa • Art Therapist
                  </p>
      </div>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[58ch]">
                  A Milano e online. Uno spazio di ascolto per chi attraversa momenti difficili: ansia, stress, trauma, o la sfida di ricominciare in un nuovo paese. Non serve avere tutto sotto controllo per chiedere aiuto.
                </p>
      {/* Dual CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-4 w-full sm:w-auto pt-space-2">
      <a className="inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" href="/prenota">
      <span className="">Prenota un colloquio conoscitivo</span>
      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
      </a>
      <a className="inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-surface-container-highest hover:bg-secondary-container text-on-surface font-label-md text-label-md shadow-sm transition-all" href="#aree-intervento">
      <span className="">Scopri le aree di intervento</span>
      <span className="material-symbols-outlined text-[18px] text-tertiary">arrow_downward</span>
      </a>
      </div>
      {/* Microcopy reassuring points */}
      <div className="pt-space-4 flex flex-wrap items-center gap-x-space-6 gap-y-space-2 text-on-surface-variant font-label-sm text-label-sm">
      <span className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                    Primo colloquio senza impegno
                  </span>
      <span className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
                    Riservatezza garantita
                  </span>
      <span className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[16px] text-tertiary">videocam</span>
                    In studio o via Skype
                  </span>
      </div>
      </div>
      {/* Right Column: Prominent Portrait */}
      <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[28rem] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl bg-surface-container-high p-2">
      <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
      <img alt="Dott.ssa Silvia Cauzzi nel suo studio di psicoterapia a Milano" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkWXkJytH11OWDvOB9JsQN22ZKaPS8QbVx-FCn44RSMvteztL4euJxK3eIy9cFSnjuHX7Z9ulzqWZTwkfMnyr2nh0sPSul8G9W0WSMKr26qxSm4pfM4eKWQAt34ieN4mjSXR-gZ5AAsoaSO4ZxHXPsywThCcyDvcMlT4U6ng7LwBlVbR16Dcoo29i0pXEOhSrzYosyY-l243OMMPi0jj9U8yM79KJbdinxUa7xM9pM-7RtYvIoGrEN" />
      </div>
      {/* Floating Trust Badge */}
      <div className="absolute bottom-6 -left-4 sm:left-4 right-4 sm:right-auto bg-surface/95 backdrop-blur-md px-space-4 py-space-3 rounded-xl shadow-lg flex items-center gap-space-3 max-w-[18rem]">
      <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
      <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface leading-tight">
                      Oltre 25 anni di esperienza clinica e umanitaria
                    </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION "THE BRIDGE" */}
      <section className="w-full py-space-12 bg-surface">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="relative bg-surface-container rounded-2xl p-space-8 lg:p-space-12 shadow-sm text-center max-w-4xl mx-auto overflow-hidden">
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-secondary-fixed/20 pointer-events-none"></div>
      <span className="material-symbols-outlined text-tertiary text-[36px] mb-space-4 opacity-80">psychiatry</span>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[62ch] mx-auto mb-space-6">
                Forse stai cercando qualcuno che ti ascolti senza giudicare. Che ti aiuti a capire perché ti senti così, e soprattutto, che ti accompagni a sentirti meglio.
              </p>
      <div className="inline-block relative">
      <p className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary italic font-light max-w-[50ch] mx-auto leading-relaxed">
                  “Il primo passo è spesso il più difficile. Ma è anche quello che cambia tutto.”
                </p>
      <div className="h-0.5 w-24 bg-primary-container/40 mx-auto mt-space-4"></div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION AREE DI INTERVENTO */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface-container-low" id="aree-intervento">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="text-center max-w-2xl mx-auto mb-space-12 flex flex-col items-center gap-space-2">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold">Percorsi clinici</span>
      <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-on-surface">Come posso aiutarti</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                Percorsi terapeutici personalizzati che rispettano i tuoi ritmi interiori
              </p>
      </div>
      {/* 3 Elevated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6 lg:gap-space-8">
      {/* Card 1: Ansia e Panico */}
      <div className="group bg-surface-container-lowest rounded-2xl p-space-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div>
      <div className="w-14 h-14 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-on-secondary-fixed mb-space-6 group-hover:bg-primary-fixed transition-colors">
      <span className="material-symbols-outlined text-[28px] text-primary">air</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3 group-hover:text-primary transition-colors">
                    Ansia e panico
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-6">
                    Quando il pensiero corre, il respiro si blocca e il corpo sembra tradirti. L'ansia può essere gestita, e si può imparare a stare meglio.
                  </p>
      </div>
      <div>
      <a className="inline-flex items-center gap-space-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors" href="/aree-di-intervento/ansia">
      <span className="">Scopri di più</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* Card 2: Trauma ed emergenza */}
      <div className="group bg-surface-container-lowest rounded-2xl p-space-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-tertiary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div>
      <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-space-6 group-hover:bg-tertiary-fixed-dim transition-colors">
      <span className="material-symbols-outlined text-[28px] text-tertiary">healing</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3 group-hover:text-tertiary transition-colors">
                    Trauma ed emergenza
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-6">
                    Esperienze difficili, passato recente o lontano, che continuano a influenzare il presente. Ho lavorato sui campi di emergenza umanitaria in Palestina, Ucraina, Congo e Pakistan.
                  </p>
      </div>
      <div>
      <a className="inline-flex items-center gap-space-2 font-label-md text-label-md text-tertiary hover:text-on-tertiary-fixed-variant font-semibold transition-colors" href="/aree-di-intervento/trauma-e-emergenza">
      <span className="">Scopri di più</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* Card 3: Migrazione e Adattamento */}
      <div className="group bg-surface-container-lowest rounded-2xl p-space-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div>
      <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-space-6 group-hover:bg-primary-fixed-dim transition-colors">
      <span className="material-symbols-outlined text-[28px] text-primary">public</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3 group-hover:text-primary transition-colors">
                    Migrazione e adattamento
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-6">
                    Vivere tra due mondi, la nostalgia, la fatica di ricostruire un senso di appartenenza. Un sostegno per immigrati e famiglie in difficoltà di adattamento sociale.
                  </p>
      </div>
      <div>
      <a className="inline-flex items-center gap-space-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors" href="/aree-di-intervento/migrazione">
      <span className="">Scopri di più</span>
      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION ABOUT PREVIEW */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-16 items-center">
      {/* Left: Warm Atmospheric Still Life Image */}
      <div className="lg:col-span-5 order-2 lg:order-1">
      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-surface-container">
      <img className="w-full h-full object-cover" alt="A serene and literary psychotherapy study interior still life. Stacks of antique and modern psychoanalytic books, a hardbound linen clinical journal with a fountain pen, delicate dried botanical herbs in a ceramic vase, and soft afternoon sunlight casting warm geometric shadows across raw wooden desk surfaces. Earthy terracotta and olive tones, quiet contemplative atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9n2yPi9eWOHjylXNXu8MMLgz2h5gUb_DO0wES27YyzXvnUYSbUSOtliTmWn-khhjtOeZERYAz5GFUXwYz7s_GupGKXiCRk0BHqynOTGAVWGnpMLC41ecR_Aif9PBrF5Izmg5tNIoob63ppwz-ZDuH0g7DiHDmQKQ13mkRLpum0YmYuptL_Kd_EH2a6R7dwo4sJrQc55UO0rfq6DI_CpKHmv6xnJkNZwhsvwqgxGuHsryEI9mAOC8D" />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 p-space-4 rounded-xl bg-surface/90 backdrop-blur-sm shadow-md">
      <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-semibold">Approccio Clinico</p>
      <p className="font-headline-md text-headline-md text-on-surface mt-1 leading-snug">Psicologia Analitica &amp; Mediazione Culturale</p>
      </div>
      </div>
      </div>
      {/* Right: Chi Sono Text & Quote */}
      <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start gap-space-6">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Biografia • Visione</span>
      <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-on-surface">Chi sono</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[60ch]">
                  Mi chiamo Silvia e lavoro come psicologa e psicoterapeuta a Milano. Da oltre vent'anni accompagno persone attraverso percorsi di cambiamento. La mia formazione junghiana si intreccia con l'etnopsichiatria e l'esperienza internazionale sui campi di emergenza.
                </p>
      <div className="w-full p-space-6 bg-surface-container rounded-xl shadow-inner border-l-4 border-l-primary flex flex-col gap-space-2">
      <p className="font-headline-md text-headline-md text-primary font-light italic">
                    Psicologa • Psicoterapeuta • Etnopsicologa • Art Therapist
                  </p>
      <span className="font-label-sm text-label-sm text-on-surface-variant self-end">— Silvia Cauzzi</span>
      </div>
      <div className="pt-space-2">
      <a className="inline-flex items-center gap-space-2 px-space-6 py-space-3 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-md text-label-md transition-all shadow-sm" href="/chi-sono">
      <span className="">Conosci il mio percorso</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION TRUST & LOGISTICS */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface-container-low">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-4">
      <div className="flex flex-col gap-space-2">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold">Organizzazione delle sedute</span>
      <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-on-surface">Informazioni pratiche</h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[40ch]">
                La trasparenza organizzativa garantisce uno spazio sicuro, prevedibile e sereno in cui intraprendere il lavoro interiore.
              </p>
      </div>
      {/* 4 Practical Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-6">
      {/* Dove */}
      <div className="bg-surface-container-lowest p-space-6 rounded-xl shadow-sm flex flex-col gap-space-3 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[24px]">location_on</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">Dove</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Via Illirico 18, 20133 Milano<br />
      <span className="font-label-sm text-label-sm text-outline">(MM2 Piola / Lambrate)</span>
      </p>
      </div>
      {/* Quando */}
      <div className="bg-surface-container-lowest p-space-6 rounded-xl shadow-sm flex flex-col gap-space-3 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined text-[24px]">schedule</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">Quando</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Lun–Gio 9:00–13:00 / 15:00–19:00<br />
                  Ven 9:00–13:00
                </p>
      </div>
      {/* Come */}
      <div className="bg-surface-container-lowest p-space-6 rounded-xl shadow-sm flex flex-col gap-space-3 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[24px]">devices</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">Come</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  In studio a Milano, oppure online via Skype e piattaforme protette con crittografia.
                </p>
      </div>
      {/* Per chi */}
      <div className="bg-surface-container-lowest p-space-6 rounded-xl shadow-sm flex flex-col gap-space-3 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined text-[24px]">group</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">Per chi</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Adulti, professionisti della salute mentale (supervisioni), immigrati e nuclei familiari.
                </p>
      </div>
      </div>
      {/* Badges banner */}
      <div className="bg-surface-container rounded-xl p-space-6 shadow-sm flex flex-col lg:flex-row items-center justify-center text-center gap-space-4 lg:gap-space-8 text-on-surface">
      <div className="flex items-center gap-space-2 font-label-md text-label-md text-on-surface">
      <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0">verified</span>
      <span className="">Iscritta all'Ordine degli Psicologi della Lombardia</span>
      </div>
      <span className="hidden lg:inline text-outline">•</span>
      <div className="flex items-center gap-space-2 font-label-md text-label-md text-on-surface">
      <span className="material-symbols-outlined text-[20px] text-primary shrink-0">medical_services</span>
      <span className="">Specializzazione in Emergenza e Trauma</span>
      </div>
      <span className="hidden lg:inline text-outline">•</span>
      <div className="flex items-center gap-space-2 font-label-md text-label-md text-on-surface">
      <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0">military_tech</span>
      <span className="">Premio Chiara Callerame 2023</span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION TESTIMONIANZE */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="text-center max-w-2xl mx-auto mb-space-12 flex flex-col items-center gap-space-2">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Esperienze condivise</span>
      <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-on-surface">
                Cosa dicono chi ha iniziato questo percorso
              </h2>
      </div>
      {/* 3 Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8">
      {/* Testimonial 1 */}
      <div className="bg-surface-container-low rounded-2xl p-space-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
      <span className="material-symbols-outlined text-outline-variant text-[48px] absolute -top-2 -left-2 opacity-30 select-none">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10 italic mb-space-6">
                  “Per la prima volta mi sono sentita ascoltata davvero, senza fretta.”
                </p>
      <div className="flex items-center gap-space-3 pt-space-4 border-t border-transparent">
      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-semibold">M</div>
      <div>
      <p className="font-headline-md text-headline-md text-on-surface leading-tight">M.</p>
      <p className="font-label-sm text-label-sm text-outline">34 anni</p>
      </div>
      </div>
      </div>
      {/* Testimonial 2 */}
      <div className="bg-surface-container-low rounded-2xl p-space-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
      <span className="material-symbols-outlined text-outline-variant text-[48px] absolute -top-2 -left-2 opacity-30 select-none">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10 italic mb-space-6">
                  “La supervisione con Silvia ha cambiato il mio modo di lavorare con i traumi. Mi ha dato strumenti concreti e una prospettiva nuova.”
                </p>
      <div className="flex items-center gap-space-3 pt-space-4 border-t border-transparent">
      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-semibold">R</div>
      <div>
      <p className="font-headline-md text-headline-md text-on-surface leading-tight">Dott.ssa R.</p>
      <p className="font-label-sm text-label-sm text-outline">Psicologa clinica</p>
      </div>
      </div>
      </div>
      {/* Testimonial 3 */}
      <div className="bg-surface-container-low rounded-2xl p-space-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
      <span className="material-symbols-outlined text-outline-variant text-[48px] absolute -top-2 -left-2 opacity-30 select-none">format_quote</span>
      <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10 italic mb-space-6">
                  “Essere seguito online mi ha permesso di non rinunciare alla terapia nonostante i miei turni impossibili.”
                </p>
      <div className="flex items-center gap-space-3 pt-space-4 border-t border-transparent">
      <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-semibold">L</div>
      <div>
      <p className="font-headline-md text-headline-md text-on-surface leading-tight">L.</p>
      <p className="font-label-sm text-label-sm text-outline">41 anni</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION CTA FINALE */}
      <section className="w-full py-space-16 lg:py-space-24 bg-surface-container-low">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="relative bg-gradient-to-br from-primary-fixed to-surface-container-highest rounded-3xl p-space-8 lg:p-space-16 shadow-lg overflow-hidden">
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-primary/10 pointer-events-none blur-2xl"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-space-6">
      <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
      <span className="material-symbols-outlined text-[24px]">favorite</span>
      </div>
      <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-on-surface">
                  Pronto a fare il primo passo?
                </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[55ch]">
                  Non serve avere le idee chiare. Il primo colloquio è un incontro conoscitivo, senza impegno, per capire se possiamo lavorare insieme.
                </p>
      <div className="flex flex-col sm:flex-row items-center gap-space-4 pt-space-4 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-8 py-space-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:shadow-xl transition-all" href="/prenota">
      <span className="">Prenota un appuntamento</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-8 py-space-4 rounded-full bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm hover:shadow-md transition-all" href="/contatti">
      <span className="material-symbols-outlined text-[18px] text-tertiary">mail</span>
      <span className="">Scrivimi un messaggio</span>
      </a>
      </div>
      <p className="font-label-sm text-label-sm text-outline mt-space-2">
                  Studio in Via Illirico 18 a Milano e sedute individuali online
                </p>
      </div>
      </div>
      </div>
      </section>
      </div></main>
      <SiteFooter />
    </div>
  );
}
