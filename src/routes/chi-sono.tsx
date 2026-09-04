import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: "Chi sono | Dott.ssa Silvia Cauzzi" },
      { name: "description", content: "Biografia, formazione junghiana ed etnopsichiatrica, missioni umanitarie e approccio clinico della Dott.ssa Silvia Cauzzi." },
      { property: "og:title", content: "Chi sono | Dott.ssa Silvia Cauzzi" },
      { property: "og:description", content: "Biografia, formazione junghiana ed etnopsichiatrica, missioni umanitarie e approccio clinico della Dott.ssa Silvia Cauzzi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChiSonoPage,
});

function ChiSonoPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      {/* Top Breathing Space & Gentle Botanical Accent */}
      <section className="relative w-full max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-12 pb-space-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      {/* Left Column: Editorial Presentation */}
      <div className="lg:col-span-7 flex flex-col items-start space-y-space-6">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-secondary-container/60 text-on-secondary-container">
      <span className="material-symbols-outlined text-[16px] text-tertiary">psychology</span>
      <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Biografia • Percorso Professionale</span>
      </div>
      <div className="space-y-space-3">
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
                  Chi sono
                </h1>
      <p className="font-headline-md text-headline-md text-primary italic font-normal">
                  L'ascolto analitico all'incrocio tra identità, ferite storiche e cura del sé.
                </p>
      </div>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[58ch]">
                Sono Silvia Cauzzi, psicologa, psicoterapeuta ed etnopsicologa. Lavoro a Milano in libera professione, ma la mia storia professionale attraversa confini geografici e culturali.
              </p>
      {/* Analytical Philosophy Anchor Pills */}
      <div className="flex flex-wrap gap-space-2 pt-space-2">
      <span className="px-space-3 py-space-1 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm">
                  Psicoterapia Junghiana
                </span>
      <span className="px-space-3 py-space-1 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm">
                  Etnopsichiatria Clinica
                </span>
      <span className="px-space-3 py-space-1 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm">
                  Trauma &amp; Emergenze Umane
                </span>
      </div>
      {/* Quote Block / Micro Highlight */}
      <div className="w-full bg-surface-container-low p-space-6 rounded-xl relative">
      <span className="material-symbols-outlined absolute top-4 right-4 text-tertiary/20 text-4xl select-none">format_quote</span>
      <p className="font-headline-md text-body-lg italic text-on-surface max-w-[54ch]">
                  “Ogni sintomo racchiude una memoria non ancora espressa e la volontà dell'individuo di ritrovare senso e interezza.”
                </p>
      <div className="mt-space-3 flex items-center gap-space-2">
      <span className="w-6 h-[1.5px] bg-primary"></span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Milano • Studio Via Illirico</span>
      </div>
      </div>
      </div>
      {/* Right Column: Tactile Framed Portrait */}
      <div className="lg:col-span-5 flex flex-col items-center">
      <div className="relative w-full max-w-md mx-auto">
      {/* Ambient organic background halo */}
      <div className="absolute -inset-4 bg-tertiary-fixed/30 rounded-2xl filter blur-xl transform -rotate-1"></div>
      <div className="relative bg-surface-container-lowest p-space-3 rounded-2xl shadow-[0_12px_32px_-4px_rgba(92,88,82,0.08),0_4px_12px_-2px_rgba(92,88,82,0.04)]">
      <div className="overflow-hidden rounded-xl aspect-square w-full">
      <img alt="Dott.ssa Silvia Cauzzi nel suo studio di Milano" className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkWXkJytH11OWDvOB9JsQN22ZKaPS8QbVx-FCn44RSMvteztL4euJxK3eIy9cFSnjuHX7Z9ulzqWZTwkfMnyr2nh0sPSul8G9W0WSMKr26qxSm4pfM4eKWQAt34ieN4mjSXR-gZ5AAsoaSO4ZxHXPsywThCcyDvcMlT4U6ng7LwBlVbR16Dcoo29i0pXEOhSrzYosyY-l243OMMPi0jj9U8yM79KJbdinxUa7xM9pM-7RtYvIoGrEN" />
      </div>
      <div className="pt-space-4 pb-space-2 px-space-2 flex flex-col">
      <div className="flex items-center justify-between">
      <span className="font-headline-md text-body-md font-semibold text-on-surface">Dott.ssa Silvia Cauzzi</span>
      <span className="inline-flex items-center text-tertiary">
      <span className="material-symbols-outlined text-[18px]">verified</span>
      </span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                      Dott.ssa Silvia Cauzzi nel suo studio di Milano
                    </p>
      </div>
      </div>
      {/* Discrete Editorial Floating Stamp */}
      <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-high/95 backdrop-blur-sm p-space-4 rounded-xl shadow-md flex items-center gap-space-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
      </div>
      <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Pratica Clinica &amp; Missioni</div>
      <div className="font-headline-md text-body-md text-on-surface font-medium">Oltre vent'anni di esperienza</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Atmospheric Wave Transition */}
      <div className="w-full h-12 bg-gradient-to-b from-transparent to-surface-container-low/50"></div>
      {/* SECTION: Percorso Professionale (Timeline) */}
      <section className="w-full bg-surface-container-low/50 py-space-16 lg:py-space-24">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="max-w-3xl mb-space-16">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-surface-container text-on-surface-variant mb-space-3">
      <span className="material-symbols-outlined text-[16px] text-primary">timeline</span>
      <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Esperienza &amp; Tappe</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Percorso Professionale
              </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-2 max-w-[62ch]">
                Un itinerario accademico, etnografico e clinico fondato sull'incontro diretto con le complessità umane, sia negli scenari geopolitici d'emergenza che nell'intimità dell'analisi junghiana.
              </p>
      </div>
      {/* Vertical Timeline Architecture */}
      <div className="relative">
      {/* Center Connecting Spine */}
      <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-outline-variant/40"></div>
      <div className="space-y-space-12">
      {/* Milestone 1: Formazione */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-space-6 items-start">
      <div className="hidden md:flex md:col-span-1 justify-center">
      <div className="w-16 h-16 rounded-full bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center shrink-0 z-10">
      <span className="material-symbols-outlined text-[26px]">school</span>
      </div>
      </div>
      <div className="md:col-span-11 bg-surface-container-lowest p-space-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-wrap items-center justify-between gap-space-2 mb-space-3">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-semibold">Origini &amp; Specializzazione</span>
      <span className="px-space-3 py-space-1 rounded-full bg-surface-container text-on-surface text-label-sm font-label-sm">Torino • Milano • Parigi</span>
      </div>
      <h3 className="font-headline-lg text-headline-md text-on-surface mb-space-4">1. Formazione Accademica ed Etnopsichiatrica</h3>
      <div className="space-y-space-4 text-on-surface-variant font-body-md text-body-md">
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">arrow_right_alt</span>
      <p className="">
                          Mi sono laureata in Psicologia Clinica presso l'<strong>Università degli Studi di Torino</strong>. Ho poi conseguito il Diploma di Specializzazione in Psicoterapia Junghiana presso la <strong>Scuola L.I.S.T.A. di Milano nel 2008</strong>, con una tesi intitolata <em className="text-on-surface">“Kamikazità”</em> ad indirizzo etnopsichiatrico-junghiano.
                        </p>
      </div>
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">arrow_right_alt</span>
      <p className="">
                          Ho completato un <strong>Master in Etnopsichiatria presso il Centro George Devereux di Parigi</strong>, approfondendo lo studio delle dimensioni culturali della sofferenza psichica e la gestione delle dinamiche transculturali nell'ascolto terapeutico.
                        </p>
      </div>
      </div>
      </div>
      </div>
      {/* Milestone 2: Esperienza umanitaria */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-space-6 items-start">
      <div className="hidden md:flex md:col-span-1 justify-center">
      <div className="w-16 h-16 rounded-full bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center shrink-0 z-10">
      <span className="material-symbols-outlined text-[26px]">public</span>
      </div>
      </div>
      <div className="md:col-span-11 bg-surface-container-lowest p-space-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-wrap items-center justify-between gap-space-2 mb-space-3">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-semibold">Dal 2001 • Teatri di crisi</span>
      <span className="px-space-3 py-space-1 rounded-full bg-secondary-container/70 text-on-secondary-container text-label-sm font-label-sm">Missioni Umanitarie</span>
      </div>
      <h3 className="font-headline-lg text-headline-md text-on-surface mb-space-4">2. Esperienza Umanitaria Internazionale</h3>
      <div className="space-y-space-4 text-on-surface-variant font-body-md text-body-md">
      <p className="">
                        Dal 2001 collaboro con <strong>Organizzazioni Non Governative internazionali</strong> in situazioni di emergenza estrema: guerre, terremoti, disastri naturali e crisi sistemiche.
                      </p>
      <div className="p-space-4 rounded-lg bg-surface-container-low flex flex-wrap gap-y-space-2 gap-x-space-6 items-center">
      <span className="font-label-md text-label-md text-on-surface font-semibold">Organizzazioni partner:</span>
      <span className="text-on-surface-variant font-body-md">• Medici Senza Frontiere (MSF)</span>
      <span className="text-on-surface-variant font-body-md">• Action contre la faim</span>
      <span className="text-on-surface-variant font-body-md">• Center for Victims of Torture (Minneapolis)</span>
      <span className="text-on-surface-variant font-body-md">• Première Urgence Aide Médicale</span>
      </div>
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">pin_drop</span>
      <p className="">
                          Le mie missioni sul campo mi hanno portato in <strong>Palestina (2001-2003), Ucraina, Congo e Pakistan</strong>, dove ho formato e supervisionato psicologi e operatori locali nell'intervento psicologico di emergenza post-guerra, violenza politica e gestione del trauma collettivo.
                        </p>
      </div>
      </div>
      </div>
      </div>
      {/* Milestone 3: Riconoscimenti */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-space-6 items-start">
      <div className="hidden md:flex md:col-span-1 justify-center">
      <div className="w-16 h-16 rounded-full bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center shrink-0 z-10">
      <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
      </div>
      </div>
      <div className="md:col-span-11 bg-surface-container-lowest p-space-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-wrap items-center justify-between gap-space-2 mb-space-3">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-semibold">Distinzioni Istituzionali</span>
      <span className="px-space-3 py-space-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-label-sm">Riconoscimenti</span>
      </div>
      <h3 className="font-headline-lg text-headline-md text-on-surface mb-space-4">3. Riconoscimenti Istituzionali &amp; Onorificenze</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4 text-on-surface-variant font-body-md text-body-md">
      <div className="bg-surface-container p-space-6 rounded-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-space-2 text-primary mb-space-2">
      <span className="material-symbols-outlined">military_tech</span>
      <span className="font-headline-md text-body-md font-semibold text-on-surface">Ordine degli Psicologi</span>
      </div>
      <p className="font-body-md text-body-md">
                            L'Ordine degli Psicologi mi ha conferito la <strong>Specializzazione in Emergenza e Trauma</strong>, riconoscendo formalmente le plurime e delicate esperienze svolte direttamente sui terreni di guerra e catastrofe.
                          </p>
      </div>
      <div className="mt-space-4 text-label-sm font-label-sm text-outline">Albo Psicologi Lombardia</div>
      </div>
      <div className="bg-surface-container p-space-6 rounded-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-space-2 text-tertiary mb-space-2">
      <span className="material-symbols-outlined">award_star</span>
      <span className="font-headline-md text-body-md font-semibold text-on-surface">Premio Chiara Callerame</span>
      </div>
      <p className="font-body-md text-body-md">
                            Nel <strong>2023 ho ricevuto il Premio Chiara Callerame</strong>, tributo assegnato per il valore umano, clinico e deontologico dimostrato nelle attività a sostegno di soggetti altamente vulnerabili.
                          </p>
      </div>
      <div className="mt-space-4 text-label-sm font-label-sm text-outline">Edizione 2023</div>
      </div>
      </div>
      </div>
      </div>
      {/* Milestone 4: Attività attuale */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-space-6 items-start">
      <div className="hidden md:flex md:col-span-1 justify-center">
      <div className="w-16 h-16 rounded-full bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center shrink-0 z-10">
      <span className="material-symbols-outlined text-[26px]">vital_signs</span>
      </div>
      </div>
      <div className="md:col-span-11 bg-surface-container-lowest p-space-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-wrap items-center justify-between gap-space-2 mb-space-3">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-semibold">Presente • Studio &amp; Docenze</span>
      <span className="px-space-3 py-space-1 rounded-full bg-surface-container text-on-surface text-label-sm font-label-sm">Attività Attuale</span>
      </div>
      <h3 className="font-headline-lg text-headline-md text-on-surface mb-space-4">4. Attività Attuale</h3>
      <div className="space-y-space-4 text-on-surface-variant font-body-md text-body-md">
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">door_front</span>
      <p className="">
                          Oggi pratico la libera professione presso il mio <strong>studio a Milano</strong>. Offro psicoterapia individuale, percorsi di terapia a distanza (online) e supervisioni cliniche mirate per colleghe e colleghi della salute mentale.
                        </p>
      </div>
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">diversity_3</span>
      <p className="">
                          Collaboro costantemente con <strong>ambulatori di associazioni milanesi</strong> per supportare comunità immigrate, nuclei rifugiati e famiglie con difficoltà complesse di integrazione e adattamento sociale.
                        </p>
      </div>
      <div className="flex items-start gap-space-3">
      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">menu_book</span>
      <p className="">
                          Sono <strong>formatrice presso l'ISPI</strong> (Istituto Superiore di Politica Internazionale), dove curo e conduco moduli specialistici dedicati all'emergenza umanitaria, alla psicologia del trauma e alle professioni nell'ambito delle migrazioni forzate.
                        </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION: Filosofia & Approccio */}
      <section className="w-full bg-surface py-space-16 lg:py-space-24">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="text-center max-w-2xl mx-auto mb-space-16">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-secondary-container/60 text-on-secondary-container mb-space-3">
      <span className="material-symbols-outlined text-[16px] text-tertiary">favorite</span>
      <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Visione Clinica</span>
      </div>
      <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface">
                Il mio approccio
              </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-2">
                Un metodo vivo, capace di accogliere l'unicità della persona oltre la semplice categorizzazione diagnostica.
              </p>
      </div>
      {/* Narrative Asymmetric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-8 items-stretch">
      {/* Card 1: La relazione e la visione junghiana */}
      <div className="bg-surface-container-low p-space-8 lg:p-space-12 rounded-xl flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:bg-surface-container transition-colors duration-300">
      <div>
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-space-6">
      <span className="material-symbols-outlined text-[24px]">psychiatry</span>
      </div>
      <h3 className="font-headline-lg text-headline-md text-on-surface mb-space-4">
                    L'incontro trasformativo tra due persone
                  </h3>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    “Non credo in terapie standardizzate. Credo nell'incontro tra due persone, nel rispetto dei tempi e delle differenze culturali. Il mio approccio junghiano mi insegna a guardare alla sofferenza non solo come a un sintomo da eliminare, ma come a un messaggio da comprendere.”
                  </p>
      </div>
      <div className="pt-space-8 mt-space-6 flex items-center justify-between text-on-surface-variant">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Psicologia Analitica</span>
      <span className="material-symbols-outlined text-primary/40">auto_stories</span>
      </div>
      </div>
      {/* Card 2: L'insegnamento delle emergenze */}
      <div className="bg-surface-container-low p-space-8 lg:p-space-12 rounded-xl flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:bg-surface-container transition-colors duration-300">
      <div>
      <div className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-space-6">
      <span className="material-symbols-outlined text-[24px]">spa</span>
      </div>
      <h3 className="font-headline-lg text-headline-md text-on-surface mb-space-4">
                    Resilienza e risorse nei contesti estremi
                  </h3>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    “Lavorare sui campi di emergenza mi ha insegnato l'importanza della resilienza e della risorsa, anche nelle situazioni più estreme. Porto questa prospettiva nel mio studio ogni giorno.”
                  </p>
      </div>
      <div className="pt-space-8 mt-space-6 flex items-center justify-between text-on-surface-variant">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary font-semibold">Somatico &amp; Etnoclinico</span>
      <span className="material-symbols-outlined text-tertiary/40">nature_people</span>
      </div>
      </div>
      </div>
      {/* Detail Anchor Callout */}
      <div className="mt-space-8 bg-surface-container-highest/50 rounded-xl p-space-6 lg:p-space-8 flex flex-col md:flex-row items-center justify-between gap-space-6">
      <div className="flex items-center gap-space-4">
      <div className="w-12 h-12 rounded-full bg-surface-container-lowest text-tertiary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">shield_with_heart</span>
      </div>
      <div>
      <h4 className="font-headline-md text-body-md font-semibold text-on-surface">Spazio Protetto e Deontologia</h4>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[50ch]">
                    Tutti i percorsi sono tutelati dal più rigoroso segreto professionale e condotti in conformità al Codice Deontologico degli Psicologi Italiani.
                  </p>
      </div>
      </div>
      <div className="flex items-center gap-space-2 text-primary font-label-md text-label-md shrink-0">
      <span className="material-symbols-outlined text-[18px]">verified_user</span>
      <span className="">Iscrizione OPL N° 03/12345</span>
      </div>
      </div>
      </div>
      </section>
      {/* SECTION: CTA Final Banner */}
      <section className="w-full bg-surface-container-high py-space-16 lg:py-space-24">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="bg-surface-container-lowest rounded-2xl p-space-8 lg:p-space-16 shadow-[0_12px_32px_-4px_rgba(92,88,82,0.08)] flex flex-col items-center text-center relative overflow-hidden">
      {/* Soft decorative glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl flex flex-col items-center">
      <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold mb-space-2">
                  Primo Contatto • Milano o Online
                </span>
      <h2 className="font-display-lg text-display-lg-mobile lg:text-headline-lg text-on-surface mb-space-4">
                  Inizia il tuo percorso con un colloquio conoscitivo
                </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-8 max-w-[50ch]">
                  Uno spazio riservato per formulare una prima domanda di senso, comprendere il disagio presente e valutare insieme la modalità terapeutica più consona.
                </p>
      <div className="flex flex-col sm:flex-row items-center gap-space-4 w-full sm:w-auto">
      <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all duration-200 shadow-[0_4px_12px_rgba(139,75,47,0.15)] hover:shadow-lg" to="/prenota">
      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
      <span className="">Prenota un primo colloquio</span>
      </Link>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors duration-200" href="mailto:studio@silviacauzzi.it">
      <span className="material-symbols-outlined text-[20px]">mail</span>
      <span className="">Scrivi per informazioni</span>
      </a>
      </div>
      <div className="mt-space-8 flex flex-wrap justify-center items-center gap-x-space-6 gap-y-space-2 font-label-sm text-label-sm text-on-surface-variant">
      <span className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                    In studio a Milano (MM2 Piola)
                  </span>
      <span className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                    Sedute protette online
                  </span>
      <span className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                    Spesa detraibile come prestazione sanitaria
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div></main>
      <SiteFooter />
    </div>
  );
}
