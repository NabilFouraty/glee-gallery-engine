import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/formazione")({
  head: () => ({
    meta: [
      { title: "Formazione e percorso | Dott.ssa Silvia Cauzzi" },
      { name: "description", content: "Formazione, specializzazioni e attività scientifica della Dott.ssa Silvia Cauzzi, psicoterapeuta a Milano." },
      { property: "og:title", content: "Formazione e percorso | Dott.ssa Silvia Cauzzi" },
      { property: "og:description", content: "Formazione, specializzazioni e attività scientifica della Dott.ssa Silvia Cauzzi, psicoterapeuta a Milano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormazionePage,
});

function FormazionePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      {/* Top Academic Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-low pt-space-12 pb-space-16">
      <div className="absolute -top-32 right-[-10%] w-[38rem] h-[38rem] rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[28rem] h-[28rem] rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      <div className="lg:col-span-7 flex flex-col items-start gap-space-4">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm shadow-sm">
      <span className="material-symbols-outlined text-[16px] text-tertiary" style={{"fontVariationSettings": "'FILL' 1"}}>school</span>
      <span className="">Attività accademica &amp; docenze</span>
      </div>
      <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight max-w-[18ch]">
                  Formazione e supervisione di équipe
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[54ch]">
                  Condividere ciò che ho imparato in oltre vent'anni di clinica e missioni sul campo è parte integrante del mio lavoro. Tengo moduli e seminari per professionisti della salute mentale, operatori umanitari, associazioni e studenti.
                </p>
      <div className="flex flex-wrap items-center gap-space-4 pt-space-2">
      <a className="inline-flex items-center gap-space-2 px-space-6 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-md" href="#progetta">
      <span className="material-symbols-outlined text-[18px]">co_present</span>
      <span className="">Richiedi un modulo formativo</span>
      </a>
      <a className="inline-flex items-center gap-space-2 px-space-6 py-space-3 rounded-full bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-sm" href="#temi">
      <span className="material-symbols-outlined text-[18px] text-secondary">download_for_offline</span>
      <span className="">Scarica compendio formativo</span>
      </a>
      </div>
      <div className="flex items-center gap-space-6 pt-space-4 text-outline">
      <div className="flex items-center gap-space-2">
      <span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Accreditamento ECM su richiesta</span>
      </div>
      <div className="flex items-center gap-space-2">
      <span className="material-symbols-outlined text-tertiary text-[20px]">groups</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">In presenza o FAD sincrona</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 relative">
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container-high">
      <img className="w-full h-full object-cover" alt="An atmospheric photograph of Dr. Silvia Cauzzi conducting a reflective interactive masterclass seminar for humanitarian psychologists, soft natural morning window lighting, unglazed terracotta notebooks and botanical touches on wooden tables, warm scholarly serene atmosphere, terracotta and muted sage color accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4hoy5pLFrlgCtjISkm7OepCjmg_2CpUkCSICKo3fJHskVZgCBtccxIaDQEriJmuF4V9VV-iiq6hSgIZUi1YGJtUM0Dkwz5icNw3JCvyr0vQePpmyJNXGqAW6-YgX7b2CKozYrl7Zr04DiBTLgbRWJyp5DimCwDcvQriI8THHFSXH5s7wSU2k3Cp9PPQ-WdhHG05AnecelELEblnI9DxevDHNFLGJ-t0bcdmxiFh54wkQMKn515d60" />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-6">
      <div className="p-space-4 rounded-lg bg-surface/90 backdrop-blur-md shadow-md text-on-surface">
      <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider mb-space-1">Metodologia Didattica</p>
      <p className="font-headline-md text-headline-md leading-snug">Casi clinici reali, simulazioni etnopsicologiche &amp; debriefing somatico.</p>
      </div>
      </div>
      </div>
      <div className="hidden sm:block absolute -bottom-6 -left-8 bg-surface-container-lowest p-space-4 rounded-xl shadow-lg max-w-[220px]">
      <div className="flex items-center gap-space-2 text-primary mb-1">
      <span className="material-symbols-outlined text-[20px]">history_edu</span>
      <span className="font-label-md text-label-md text-on-surface">20+ Anni</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant leading-snug">Esperienza di campo e docenza clinica sul trauma.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Institutional Collaborations Section */}
      <section className="w-full py-space-16 bg-surface">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-4 mb-space-12">
      <div>
      <span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase block mb-space-1">Riconoscimento Istituzionale</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Dove insegno &amp; collaborazioni istituzionali</h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[42ch]">
                Percorsi accademici e programmi di perfezionamento per enti non governativi, scuole di specializzazione e atenei.
              </p>
      </div>
      {/* Featured Card: ISPI */}
      <div className="bg-surface-container-low rounded-xl p-space-8 lg:p-space-12 shadow-sm relative overflow-hidden mb-space-8">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start relative z-10">
      <div className="lg:col-span-5 flex flex-col gap-space-4">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-surface text-primary font-label-sm text-label-sm self-start shadow-sm">
      <span className="material-symbols-outlined text-[16px]">verified</span>
      <span className="">Docente d'eccellenza</span>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                    ISPI — Istituto per gli Studi di Politica Internazionale
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Incarichi di docenza all'interno dei Master e Corsi Executive dedicati alle emergenze umanitarie, al soccorso in aree di conflitto e alle politiche migratorie integrate.
                  </p>
      <div className="p-space-4 rounded-lg bg-surface-container flex items-center gap-space-3 mt-space-2">
      <span className="material-symbols-outlined text-[28px] text-tertiary">military_tech</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface">Winter &amp; Spring School</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Milano, Palazzo Clerici &amp; Formazione FAD Internazionale</p>
      </div>
      </div>
      </div>
      <div className="lg:col-span-7 flex flex-col gap-space-4">
      <span className="font-label-md text-label-md text-tertiary tracking-wide uppercase">Moduli specialistici tenuti in master e corsi executive</span>
      <div className="space-y-space-3">
      <div className="p-space-4 rounded-lg bg-surface shadow-sm hover:shadow-md transition-all flex items-start gap-space-4">
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">emergency</span>
      <div className="flex flex-col">
      <h4 className="font-headline-md text-headline-md text-on-surface">
                          Emergenza umanitaria e intervento psicologico post-catastrofe e post-conflitto
                        </h4>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                          Protocolli di Psychological First Aid (PFA), debriefing nei primi 30 giorni e strutturazione dei presidi territoriali d'ascolto per popolazioni sfollate.
                        </p>
      </div>
      </div>
      <div className="p-space-4 rounded-lg bg-surface shadow-sm hover:shadow-md transition-all flex items-start gap-space-4">
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">travel_explore</span>
      <div className="flex flex-col">
      <h4 className="font-headline-md text-headline-md text-on-surface">
                          Professioni della migrazione ed etnopsichiatria applicata
                        </h4>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                          Decodifica dell'esperienza migratoria, sincretismo sintomatologico, intersezioni tra dispositivo giuridico d'asilo e dissociazione da trauma estremo.
                        </p>
      </div>
      </div>
      <div className="p-space-4 rounded-lg bg-surface shadow-sm hover:shadow-md transition-all flex items-start gap-space-4">
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">shield_with_heart</span>
      <div className="flex flex-col">
      <h4 className="font-headline-md text-headline-md text-on-surface">
                          Trauma complesso, violenza estrema e resilienza individuale e collettiva
                        </h4>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                          Modelli junghiani ed etnopsicologici di reintegrazione simbolica, elaborazione del lutto non ritualizzato e supporto alle reti comunitarie.
                        </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Additional Academic Badges / Co-partners */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-4">
      <div className="p-space-4 rounded-lg bg-surface-container flex flex-col items-center justify-center text-center">
      <span className="font-headline-md text-headline-md text-on-surface">L.I.S.T.A.</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Scuola Analisi Junghiana</span>
      </div>
      <div className="p-space-4 rounded-lg bg-surface-container flex flex-col items-center justify-center text-center">
      <span className="font-headline-md text-headline-md text-on-surface">Otto Centro</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Milano Clinica Psicosomatica</span>
      </div>
      <div className="p-space-4 rounded-lg bg-surface-container flex flex-col items-center justify-center text-center">
      <span className="font-headline-md text-headline-md text-on-surface">ASST / Sanità</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Formazione Continua ECM</span>
      </div>
      <div className="p-space-4 rounded-lg bg-surface-container flex flex-col items-center justify-center text-center">
      <span className="font-headline-md text-headline-md text-on-surface">Ong Internazionali</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Missioni &amp; Supervisioni</span>
      </div>
      </div>
      </div>
      </section>
      {/* Target Audience / A chi è rivolta la formazione */}
      <section className="w-full py-space-16 bg-surface-container-high/60">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="max-w-[60ch] mb-space-12">
      <span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase block mb-space-1">Destinatari</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">A chi è rivolta la formazione</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-2">
                I percorsi sono calibrati sia sulle competenze diagnostiche degli specialisti sia sulla pratica operativa quotidiana di chi agisce in prima linea nei contesti d'emergenza e accoglienza.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-6">
      {/* Profile 1 */}
      <div className="bg-surface rounded-xl p-space-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-4">
      <span className="material-symbols-outlined text-[24px] text-tertiary">psychology</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">
                    Psicologi, psicoterapeuti e medici in formazione
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Approfondimenti metodologici sull'etnopsicologia clinica, la psicotraumatologia junghiana e la cura delle somatizzazioni complesse.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 border-t-0">
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
      <span className="">Focus diagnostico &amp; transferale</span>
      </span>
      </div>
      </div>
      {/* Profile 2 */}
      <div className="bg-surface rounded-xl p-space-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-4">
      <span className="material-symbols-outlined text-[24px] text-tertiary">diversity_3</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">
                    Operatori di ONG, cooperative sociali e mediatori culturali
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Strumenti per interpretare il disagio psichico oltre la barriera linguistica e costruire relazioni d'aiuto solide e culturalmente sensibili.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 border-t-0">
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
      <span className="">Dispositivi di mediazione &amp; cura</span>
      </span>
      </div>
      </div>
      {/* Profile 3 */}
      <div className="bg-surface rounded-xl p-space-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-4">
      <span className="material-symbols-outlined text-[24px] text-tertiary">cottage</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">
                    Operatori dell'accoglienza rifugiati e richiedenti asilo
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Gestione delle dinamiche comunitarie nei centri di accoglienza (CAS/SAI), decodifica dei traumi da rotta migratoria e prevenzione delle crisi acute.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 border-t-0">
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
      <span className="">Gestione contesti di convivenza</span>
      </span>
      </div>
      </div>
      {/* Profile 4 */}
      <div className="bg-surface rounded-xl p-space-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-4">
      <span className="material-symbols-outlined text-[24px] text-tertiary">health_and_safety</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-2">
                    Professionisti della salute pubblica e soccorso d'emergenza
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Infermieri, medici d'urgenza, vigili del fuoco e soccorritori: gestione del panico collettivo, stabilizzazione psichica immediata e igiene emotiva.
                  </p>
      </div>
      <div className="mt-space-6 pt-space-4 border-t-0">
      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
      <span className="">Primo soccorso psicologico (PFA)</span>
      </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Core Modules / I temi chiave dei moduli */}
      <section className="w-full py-space-16 bg-surface" id="temi">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="text-center max-w-[65ch] mx-auto mb-space-16">
      <span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase block mb-space-1">Curricula Didattici</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">I temi chiave dei moduli</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-2">
                Ogni modulo unisce rigore epistemologico, studio di cartelle cliniche e laboratori di attivazione personale per garantire apprendimenti immediatamente spendibili.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-8">
      {/* Module Card 1 */}
      <div className="bg-surface-container-low rounded-xl p-space-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="flex items-center justify-between gap-space-4 mb-space-4">
      <span className="px-space-3 py-space-1 rounded-full bg-surface text-primary font-label-sm text-label-sm">Modulo 01 • 16-24 Ore</span>
      <span className="material-symbols-outlined text-[24px] text-tertiary">neurology</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Clinica del trauma acuto e vicariante
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-4">
                    Dalla risposta neurovegetativa d'allarme alla memoria corporea congelata. Come intervenire sul sintomo post-traumatico senza generare retraumatizzazione durante la presa in carico.
                  </p>
      <div className="space-y-space-2 bg-surface p-space-4 rounded-lg">
      <p className="font-label-md text-label-md text-on-surface font-bold">Obiettivi pedagogici:</p>
      <ul className="font-body-md text-body-md text-on-surface-variant space-y-1">
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Mappatura del sistema nervoso autonomo (teoria polivagale applicata).</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Tecniche di grounding e de-escalation rapida degli stati dissociativi.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Protocolli di monitoraggio per la Secondary Traumatic Stress Disorder negli operatori.</span>
      </li>
      </ul>
      </div>
      </div>
      <div className="mt-space-6 flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-outline">Formula: Residenziale o Webinar interattivo</span>
      <a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" href="#progetta">
      <span className="">Programma dettagliato</span>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Module Card 2 */}
      <div className="bg-surface-container-low rounded-xl p-space-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="flex items-center justify-between gap-space-4 mb-space-4">
      <span className="px-space-3 py-space-1 rounded-full bg-surface text-primary font-label-sm text-label-sm">Modulo 02 • 12-20 Ore</span>
      <span className="material-symbols-outlined text-[24px] text-tertiary">public</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Etnopsichiatria e decodifica dei codici culturali del malessere
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-4">
                    Superare l'etnocentrismo diagnostico occidentale. Comprendere la valenza culturale degli spiriti, degli attacchi di panico culturalmente modellati e del corpo come teatro simbolico.
                  </p>
      <div className="space-y-space-2 bg-surface p-space-4 rounded-lg">
      <p className="font-label-md text-label-md text-on-surface font-bold">Obiettivi pedagogici:</p>
      <ul className="font-body-md text-body-md text-on-surface-variant space-y-1">
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Metodologia complementista di Georges Devereux e Tobie Nathan.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Co-costruzione del dispositivo di consultazione con il mediatore linguistico-culturale.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Riconoscimento delle sindromi culturalmente caratterizzate (es. ataque de nervios, jinn possession).</span>
      </li>
      </ul>
      </div>
      </div>
      <div className="mt-space-6 flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-outline">Formula: Seminari clinici &amp; role playing</span>
      <a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" href="#progetta">
      <span className="">Programma dettagliato</span>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Module Card 3 */}
      <div className="bg-surface-container-low rounded-xl p-space-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="flex items-center justify-between gap-space-4 mb-space-4">
      <span className="px-space-3 py-space-1 rounded-full bg-surface text-primary font-label-sm text-label-sm">Modulo 03 • 8-12 Ore</span>
      <span className="material-symbols-outlined text-[24px] text-tertiary">spa</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Prevenzione del burnout per operatori d'aiuto
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-4">
                    Sviluppare un'ecologia del lavoro d'aiuto. Individuare per tempo il logoramento empatico, il cinismo difensivo e restaurare i confini tra sé e l'utente vulnerabile.
                  </p>
      <div className="space-y-space-2 bg-surface p-space-4 rounded-lg">
      <p className="font-label-md text-label-md text-on-surface font-bold">Obiettivi pedagogici:</p>
      <ul className="font-body-md text-body-md text-on-surface-variant space-y-1">
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Misurazione precoce della fatica di compassione e stress cronico.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Esercizi di scarico somatico tra un colloquio clinico e il successivo.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Costruzione di patti di cura inter-collegiali all'interno del gruppo di lavoro.</span>
      </li>
      </ul>
      </div>
      </div>
      <div className="mt-space-6 flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-outline">Formula: Workshop esperienziale intensivo</span>
      <a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" href="#progetta">
      <span className="">Programma dettagliato</span>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      {/* Module Card 4 */}
      <div className="bg-surface-container-low rounded-xl p-space-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div>
      <div className="flex items-center justify-between gap-space-4 mb-space-4">
      <span className="px-space-3 py-space-1 rounded-full bg-surface text-primary font-label-sm text-label-sm">Modulo 04 • Percorsi Continui</span>
      <span className="material-symbols-outlined text-[24px] text-tertiary">sync_alt</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-3">
                    Supervisione clinica di équipe multidisciplinari
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-4">
                    Uno spazio terzo, rigoroso e protetto dove analizzare casi bloccati, dinamiche di proiezione istituzionale e conflitti di ruolo tra operatori, educatori e medici.
                  </p>
      <div className="space-y-space-2 bg-surface p-space-4 rounded-lg">
      <p className="font-label-md text-label-md text-on-surface font-bold">Obiettivi pedagogici:</p>
      <ul className="font-body-md text-body-md text-on-surface-variant space-y-1">
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Lettura delle difese di gruppo e dell'ansia da impotenza istituzionale.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Riformulazione dell'alleanza terapeutica con l'utenza complessa o resistente.</span>
      </li>
      <li className="flex items-start gap-space-2">
      <span className="material-symbols-outlined text-[16px] text-tertiary mt-1">check_circle</span>
      <span className="">Report periodici con indicatori di benessere e coesione del team.</span>
      </li>
      </ul>
      </div>
      </div>
      <div className="mt-space-6 flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-outline">Formula: Incontri mensili o quindicinali</span>
      <a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" href="#progetta">
      <span className="">Programma dettagliato</span>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Visual Case Experience & Methodology Section */}
      <section className="w-full py-space-16 bg-surface-container">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1">
      <div className="grid grid-cols-2 gap-space-4">
      <div className="flex flex-col gap-space-4">
      <div className="rounded-xl overflow-hidden shadow-md h-48 bg-surface-container-high">
      <img className="w-full h-full object-cover" alt="Close up of clinical psychotraumatology analytical textbooks, handwritten field diaries, unglazed terracotta mug on a solid oak table, soft documentary cinematic aesthetic, calm academic atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyiJF961x6RPLgZKv7ajjsNTliRgqt31uSfCeiHzSZYDwPvBU-xjp9lEe-zs8UjGsjTNW8evlS-93e6BOEssIcMs2T7NREvcbCaHGnaNwRZbo0sP7XRIjkS5OP-iS2VAM8kfLJEGsw-jWnoCN-EjjlQ5_JKK_Otnsq9AzbDLsiPh5mBe9-WdiClP2uNmTYXMlD9UuEu_zsUUXZNzUkA5aSXlfO4uFbFlYONz2PgP8Rlpc6mydyF6uS" />
      </div>
      <div className="p-space-6 rounded-xl bg-surface shadow-sm">
      <span className="material-symbols-outlined text-[28px] text-tertiary mb-space-2">psychiatry</span>
      <h4 className="font-headline-md text-headline-md text-on-surface">Approccio Jungiano</h4>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Integrazione dell'inconscio collettivo e della dimensione archetipica nella lettura del dolore.</p>
      </div>
      </div>
      <div className="flex flex-col gap-space-4 pt-space-6">
      <div className="p-space-6 rounded-xl bg-surface-container-low shadow-sm">
      <span className="material-symbols-outlined text-[28px] text-primary mb-space-2">handshake</span>
      <h4 className="font-headline-md text-headline-md text-on-surface">Campo Umanitario</h4>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Competenze nate dalle missioni sul campo, non da formulari astratti.</p>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md h-48 bg-surface-container-high">
      <img className="w-full h-full object-cover" alt="A round table discussion in a brightly lit, minimalist seminar room with soft sage and earthy terracotta walls, humanitarian workers and clinical supervisors collaborating thoughtfully over notes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNnnNzRHLNe3elvNmJF88Gu3nd8Oz91Nf08Loidp4n2fTTNUstBMlpacj4dt4ZzBah2iCi_AsbuMzl5Ch7hxetwyOfBzSg-als0j7b7m4VO5Xln2mYv08mKBlIPhMrA_l5n8l-CWIE8PcYCL_8-aiW8SsHkdrA9R94AHUdRWpca8jJHj7s6vQcyp96Z0WsV6P_pYi0NgwPU0dTHisAww7nKquzudgsYPi4Io_63E2ZP6ChkP_62c6r" />
      </div>
      </div>
      </div>
      </div>
      <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-space-4">
      <span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase">Come lavoriamo insieme</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Oltre la teoria: una postura clinica radicata e sostenibile
                </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                  La formazione non si riduce alla trasmissione nozionistica di slide. Nei contesti di forte vulnerabilità umana, ciò che protegge l'operatore e sostiene l'utente è la capacità di mantenere presenza, ascoltare le reazioni somatiche e costruire una cornice simbolica condivisa.
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4 pt-space-4">
      <div className="p-space-4 rounded-lg bg-surface shadow-sm">
      <p className="font-headline-md text-headline-md text-primary font-bold">100%</p>
      <p className="font-body-md text-body-md text-on-surface mt-1">Casi reali de-identificati e tratti dall'attività clinica quotidiana.</p>
      </div>
      <div className="p-space-4 rounded-lg bg-surface shadow-sm">
      <p className="font-headline-md text-headline-md text-tertiary font-bold">Flessibile</p>
      <p className="font-body-md text-body-md text-on-surface mt-1">Moduli modulabili da mezza giornata a percorsi annuali accreditati.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Testimonial Section */}
      <section className="w-full py-space-16 bg-surface">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="bg-surface-container-low rounded-2xl p-space-8 lg:p-space-16 relative shadow-sm overflow-hidden">
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary-fixed/20 pointer-events-none blur-2xl"></div>
      <div className="relative z-10 max-w-[80ch] mx-auto flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-surface text-primary flex items-center justify-center mb-space-6 shadow-sm">
      <span className="material-symbols-outlined text-[28px]">format_quote</span>
      </div>
      <blockquote className="font-headline-lg text-headline-lg text-on-surface leading-relaxed italic mb-space-6">
                  “La Dott.ssa Cauzzi unisce una solida e rigorosa matrice accademica all'immediatezza viscerale di chi conosce il trauma perché lo ha toccato nei campi profughi e nelle periferie del mondo. I suoi interventi per i nostri corsisti ISPI non offrono solo risposte cliniche, ma trasformano radicalmente lo sguardo con cui gli operatori approcciano l'essere umano ferito.”
                </blockquote>
      <div className="flex flex-col items-center gap-1">
      <cite className="not-italic font-label-md text-label-md text-on-surface font-bold">Coordinamento Didattico • Area Emergenze e Sviluppo</cite>
      <span className="font-label-sm text-label-sm text-outline">Ente di Alta Formazione per le Relazioni Internazionali • Milano</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* CTA Banner: Progetta un percorso */}
      <section className="w-full py-space-16 bg-surface-container-high relative overflow-hidden" id="progetta">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
      <div className="bg-primary text-on-primary rounded-2xl p-space-8 lg:p-space-16 shadow-xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-center relative z-10">
      <div className="lg:col-span-8 flex flex-col gap-space-4">
      <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-full bg-surface/20 text-on-primary font-label-sm text-label-sm self-start backdrop-blur-sm">
      <span className="material-symbols-outlined text-[16px]">handshake</span>
      <span className="">Collaborazione Istituzionale • Supervisione</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                    Progetta un percorso per la tua équipe o organizzazione
                  </h2>
      <p className="font-body-lg text-body-lg text-on-primary/90 max-w-[55ch]">
                    Hai bisogno di una docenza monografica, un corso di aggiornamento professionale con crediti ECM, o di avviare una supervisione periodica per i tuoi operatori? Definiamo insieme obiettivi, tempi e metodologia.
                  </p>
      <div className="flex flex-wrap gap-space-4 pt-space-2">
      <div className="flex items-center gap-space-2 font-label-sm text-label-sm text-on-primary/80">
      <span className="material-symbols-outlined text-[18px]">check</span>
      <span className="">Analisi preliminare del fabbisogno formativo</span>
      </div>
      <div className="flex items-center gap-space-2 font-label-sm text-label-sm text-on-primary/80">
      <span className="material-symbols-outlined text-[18px]">check</span>
      <span className="">Interventi in tutta Italia &amp; all'estero</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-space-4">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-3 px-space-8 py-space-4 rounded-full bg-surface hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all shadow-lg text-center" href="/contatti">
      <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
      <span className="">Contatta per una proposta</span>
      </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-6 py-space-3 rounded-full bg-primary-container hover:bg-primary-container/80 text-on-primary font-label-md text-label-md transition-all text-center" href="tel:+390239834097">
      <span className="material-symbols-outlined text-[18px]">call</span>
      <span className="">+39 02 39834097</span>
      </a>
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
