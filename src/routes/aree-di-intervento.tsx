import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


function toggleSymptomDetail(id: string) {
  document.getElementById(id)?.classList.toggle("hidden");
}

function toggleFaq(id: string) {
  const content = document.getElementById(id);
  if (!content) return;
  const icon = document.getElementById("icon-" + id);
  const button = content.previousElementSibling;
  const isClosed = content.classList.contains("hidden");
  content.classList.toggle("hidden", !isClosed);
  button?.setAttribute("aria-expanded", isClosed ? "true" : "false");
  icon?.classList.toggle("rotate-180", isClosed);
}

export const Route = createFileRoute("/aree-di-intervento")({
  head: () => ({
    meta: [
      { title: "Aree di intervento | Dott.ssa Silvia Cauzzi" },
      { name: "description", content: "Ansia, attacchi di panico, trauma, lutto e percorsi di crescita: le aree di intervento dello studio di Milano." },
      { property: "og:title", content: "Aree di intervento | Dott.ssa Silvia Cauzzi" },
      { property: "og:description", content: "Ansia, attacchi di panico, trauma, lutto e percorsi di crescita: le aree di intervento dello studio di Milano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AreeDiInterventoPage,
});

function AreeDiInterventoPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
      {/* Subtle organic ambient aura */}
      <div className="relative w-full overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-80 right-0 w-[28rem] h-[28rem] rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-8 pb-space-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Percorso di navigazione" className="flex items-center gap-space-2 mb-space-8 text-on-surface-variant font-label-sm text-label-sm">
      <a className="hover:text-primary transition-colors flex items-center gap-space-1" href="/">
      <span className="material-symbols-outlined text-[16px] text-outline">home</span>
      <span className="">Home</span>
      </a>
      <span className="text-outline">/</span>
      <a className="hover:text-primary transition-colors" href="/aree-di-intervento">Aree di intervento</a>
      <span className="text-outline">/</span>
      <span aria-current="page" className="text-primary font-semibold">Ansia e attacchi di panico</span>
      </nav>
      {/* Section 1: Hero & Empathetic Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      <div className="lg:col-span-7 flex flex-col gap-space-4">
      <div className="inline-flex items-center gap-space-2 self-start px-space-3 py-space-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[16px] text-tertiary">spa</span>
      <span className="">Spazio clinico a orientamento analitico e somatico</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                  Ansia e attacchi <span className="italic font-headline-lg text-primary">di panico</span>
      </h1>
      <p className="font-headline-md text-headline-md text-on-surface-variant leading-snug">
                  Non sei solo. L’ansia può essere gestita, e si può imparare a ritrovare la calma.
                </p>
      <div className="mt-space-2 p-space-6 rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-3 relative">
      <div className="absolute -left-2 top-6 w-1 h-12 bg-primary rounded-full"></div>
      <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                    Il cuore che batte all’impazzata. La sensazione di non riuscire a respirare. Il pensiero che corre verso il peggio, anche quando tutto intorno sembra a posto.
                  </p>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Se stai vivendo questo, sai quanto possa essere stancante e spaventoso. Ma l’ansia non è una debolezza o un difetto del carattere. È il tuo sistema di allarme biologico che è rimasto acceso troppo a lungo, chiedendo ascolto e rielaborazione.
                  </p>
      <div className="flex items-center gap-space-4 pt-space-2">
      <a className="inline-flex items-center gap-space-2 px-space-6 py-space-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_16px_rgba(139,75,47,0.18)]" href="/prenota">
      <span className="">Prenota un primo colloquio</span>
      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
      </a>
      <span className="font-label-sm text-label-sm text-outline flex items-center gap-space-1">
      <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
                      Milano Piola • Online
                    </span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-5 relative">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high aspect-[4/5] flex items-center justify-center">
      <img className="w-full h-full object-cover" alt="Calm studio consultation room with morning daylight illuminating a soft linen armchair, unglazed terracotta vase with dried olive branches on an organic wooden side table, creating a serene, somatic therapeutic atmosphere with earthy warm tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjEg7SRTB3JfM-gEd3BgkNg1Mnzf9HO6hXDYpj0XjJg4h_UEXZS0Wh2MVBnbz8b2I44xrPY3CjaOiiKROs2nG7NMM1ia4yA3n38pzQoH26sehQdFcdOUIA6VVaKYP8-29pNtz3jqbyzhz7AJEpFXQKBiw87iPWPpyuE0IrS30k2PC7eRwLqeq9UX2gutjCMBS62XyWO_KKPuujMQ0nxjACG4cDQaldUHB5Cz39hj8ySQ6sx8zQZzoy" />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 p-space-4 rounded-xl bg-surface/90 backdrop-blur-md shadow-md">
      <div className="flex items-center gap-space-3">
      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
      <span className="material-symbols-outlined text-[20px]">air</span>
      </div>
      <div>
      <p className="font-label-md text-label-md text-on-surface font-bold leading-tight">Regolazione Neurovegetativa</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Lavoriamo insieme sul corpo, prima ancora che sui pensieri.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
      {/* Section 2: Interactive Symptom Exploration with Somatic Resonance */}
      <section className="w-full bg-surface-container-low py-space-16 transition-colors">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-4">
      <div>
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest block mb-space-1">Riconoscere i segnali</span>
      <h2 className="font-display-lg text-headline-lg text-on-surface">Come si manifesta l’ansia</h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-[50ch]">
                L’ansia assume forme diverse: pensieri ricorrenti, risposte fisiche involontarie o comportamenti di evitamento. Clicca sulle manifestazioni per approfondirne l’impatto clinico.
              </p>
      </div>
      {/* Interactive Symptom Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6" id="symptoms-container">
      {/* Symptom Card 1 */}
      <div className="p-space-6 rounded-xl bg-surface hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer" onClick={() => toggleSymptomDetail("sym-1")}>
      <div className="flex flex-col gap-space-3">
      <div className="w-12 h-12 rounded-full bg-secondary-container/60 text-tertiary flex items-center justify-center group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">psychology</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    Ansia generalizzata e preoccupazione costante
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Un flusso ininterrotto di “e se accadesse il peggio?”. Sensazione di allerta perpetua anche nei momenti di quiete apparente.
                  </p>
      <div className="hidden mt-space-2 pt-space-3 text-on-surface-variant font-label-md text-label-md bg-surface-container-high/50 p-space-3 rounded-lg" id="sym-1">
      <span className="font-semibold text-primary block mb-1">Riflesso clinico:</span> Sovraccarico cognitivo cronico, ipervigilanza delle funzioni sensoriali ed esaurimento delle riserve emotive.
                  </div>
      </div>
      <div className="flex items-center justify-between pt-space-4 text-tertiary font-label-sm text-label-sm">
      <span className="inline-flex items-center gap-1">Livello cognitivo</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">expand_more</span>
      </div>
      </div>
      {/* Symptom Card 2 */}
      <div className="p-space-6 rounded-xl bg-surface hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer" onClick={() => toggleSymptomDetail("sym-2")}>
      <div className="flex flex-col gap-space-3">
      <div className="w-12 h-12 rounded-full bg-primary-fixed/60 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">bolt</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    Attacchi di panico improvvisi
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Ondate acute e travolgenti di terrore che raggiungono il picco in pochi minuti. La paura viscerale di morire, svenire o perdere il controllo.
                  </p>
      <div className="hidden mt-space-2 pt-space-3 text-on-surface-variant font-label-md text-label-md bg-surface-container-high/50 p-space-3 rounded-lg" id="sym-2">
      <span className="font-semibold text-primary block mb-1">Riflesso clinico:</span> Scarica adrenergica massiva dell’amigdala. Si impara a navigarla senza combatterla, decodificando l'innesco emotivo.
                  </div>
      </div>
      <div className="flex items-center justify-between pt-space-4 text-primary font-label-sm text-label-sm">
      <span className="inline-flex items-center gap-1">Episodico acuto</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">expand_more</span>
      </div>
      </div>
      {/* Symptom Card 3 */}
      <div className="p-space-6 rounded-xl bg-surface hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer" onClick={() => toggleSymptomDetail("sym-3")}>
      <div className="flex flex-col gap-space-3">
      <div className="w-12 h-12 rounded-full bg-secondary-container/60 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">diversity_3</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    Fobia sociale o specifiche
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Il timore persistente del giudizio altrui, dell’umiliazione in pubblico o l’evitamento di spazi chiusi, folle o situazioni precise.
                  </p>
      <div className="hidden mt-space-2 pt-space-3 text-on-surface-variant font-label-md text-label-md bg-surface-container-high/50 p-space-3 rounded-lg" id="sym-3">
      <span className="font-semibold text-primary block mb-1">Riflesso clinico:</span> Restringimento graduale del proprio raggio vitale; l’evitamento allevia nel breve ma amplifica la paura nel lungo periodo.
                  </div>
      </div>
      <div className="flex items-center justify-between pt-space-4 text-secondary font-label-sm text-label-sm">
      <span className="inline-flex items-center gap-1">Relazionale &amp; Spaziale</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">expand_more</span>
      </div>
      </div>
      {/* Symptom Card 4 */}
      <div className="p-space-6 rounded-xl bg-surface hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer" onClick={() => toggleSymptomDetail("sym-4")}>
      <div className="flex flex-col gap-space-3">
      <div className="w-12 h-12 rounded-full bg-tertiary-fixed/60 text-tertiary flex items-center justify-center group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">vital_signs</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    Sintomi fisici e somatizzazioni
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Tachicardia, “nodo alla gola”, vertigini, formicolii, diaframma bloccato e tensione muscolare costante a collo e spalle.
                  </p>
      <div className="hidden mt-space-2 pt-space-3 text-on-surface-variant font-label-md text-label-md bg-surface-container-high/50 p-space-3 rounded-lg" id="sym-4">
      <span className="font-semibold text-primary block mb-1">Riflesso clinico:</span> Il corpo archivia ciò che la mente razionale silenzia. Fondamentale il lavoro di scioglimento somatico.
                  </div>
      </div>
      <div className="flex items-center justify-between pt-space-4 text-tertiary font-label-sm text-label-sm">
      <span className="inline-flex items-center gap-1">Risposta Corporea</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">expand_more</span>
      </div>
      </div>
      {/* Symptom Card 5 */}
      <div className="p-space-6 rounded-xl bg-surface hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer" onClick={() => toggleSymptomDetail("sym-5")}>
      <div className="flex flex-col gap-space-3">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">bedtime</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    Insonnia e calo di concentrazione
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Difficoltà ad addormentarsi per via del rimuginio notturno, risvegli precoci con senso d’angoscia e annebbiamento mentale diurno.
                  </p>
      <div className="hidden mt-space-2 pt-space-3 text-on-surface-variant font-label-md text-label-md bg-surface-container-high/50 p-space-3 rounded-lg" id="sym-5">
      <span className="font-semibold text-primary block mb-1">Riflesso clinico:</span> Alterazione del ciclo circadiano e sovraccarico dei recettori dello stress. Recuperare il riposo rigenera la lucidità.
                  </div>
      </div>
      <div className="flex items-center justify-between pt-space-4 text-on-surface-variant font-label-sm text-label-sm">
      <span className="inline-flex items-center gap-1">Ritmi circadiani</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">expand_more</span>
      </div>
      </div>
      {/* Dynamic Resonant Insight Card */}
      <div className="p-space-6 rounded-xl bg-secondary-fixed/30 flex flex-col justify-between shadow-sm relative overflow-hidden">
      <div className="flex flex-col gap-space-2">
      <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">Un promemoria fondamentale</span>
      <h3 className="font-headline-md text-headline-md text-on-secondary-fixed-variant">
                    Nessuno di questi sintomi è “colpa tua”
                  </h3>
      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    Sono meccanismi di difesa che hanno perso la sincronia con il presente. Attraverso la psicoterapia, possiamo restituire a corpo e mente il loro ritmo naturale.
                  </p>
      </div>
      <div className="pt-space-4">
      <a className="inline-flex items-center gap-space-2 text-primary font-label-md text-label-md font-bold hover:underline" href="/contatti">
      <span className="">Parla della tua situazione con la Dott.ssa Cauzzi</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 3: Come può aiutarti la terapia */}
      <section className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-24">
      <div className="flex flex-col gap-space-12">
      <div className="max-w-[65ch]">
      <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-space-1">Il percorso clinico</span>
      <h2 className="font-display-lg text-headline-lg text-on-surface">Come può aiutarti la terapia</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-2">
                La stanza di terapia è un laboratorio sicuro dove decodificare i messaggi dell’ansia, dotarsi di strumenti pratici e recuperare autonomia vitale.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-6">
      {/* Benefit Card 1 */}
      <div className="p-space-6 rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-space-4">
      <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-tertiary shadow-sm">
      <span className="material-symbols-outlined text-[24px]">psychiatry</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">
                    1. Comprendere le origini
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Andiamo oltre il sintomo superficiale per comprendere radici spesso più profonde di quanto sembri: conflitti inconsci, transizioni bloccate o antiche ferite relazionali.
                  </p>
      </div>
      <div className="pt-space-4 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">check_circle</span>
      <span className="">Consapevolezza e radici</span>
      </div>
      </div>
      {/* Benefit Card 2 */}
      <div className="p-space-6 rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-space-4">
      <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm">
      <span className="material-symbols-outlined text-[24px]">self_improvement</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">
                    2. Tecniche corporee concrete
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Imparare strumenti somatici di grounding, ancoraggio respiratorio e disattivazione del panico da usare autonomamente quando senti salire l’onda.
                  </p>
      </div>
      <div className="pt-space-4 text-primary font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">check_circle</span>
      <span className="">Pratiche di autoregolazione</span>
      </div>
      </div>
      {/* Benefit Card 3 */}
      <div className="p-space-6 rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-space-4">
      <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-tertiary shadow-sm">
      <span className="material-symbols-outlined text-[24px]">restart_alt</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">
                    3. Ridurre l’impatto quotidiano
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Smontare l’ansia anticipatoria e interrompere il circolo vizioso degli evitamenti, tornando a viaggiare, lavorare e socializzare senza terrore.
                  </p>
      </div>
      <div className="pt-space-4 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">check_circle</span>
      <span className="">Espansione dello spazio di vita</span>
      </div>
      </div>
      {/* Benefit Card 4 */}
      <div className="p-space-6 rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-space-4">
      <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm">
      <span className="material-symbols-outlined text-[24px]">favorite</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">
                    4. Ritrovare la sicurezza interna
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Ricostruire la fiducia nella propria capacità di abitare le emozioni, ripristinando un profondo senso di calma e centratura interiore.
                  </p>
      </div>
      <div className="pt-space-4 text-primary font-label-sm text-label-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">check_circle</span>
      <span className="">Riconnessione stabile</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 4: Il mio approccio (Editorial Split Layout) */}
      <section className="w-full bg-surface-container-high/40 py-space-16">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
      {/* Visual Column with Overlapping Editorial Elements */}
      <div className="lg:col-span-5 relative">
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-surface">
      <img className="w-full h-full object-cover" alt="Quiet introspective therapy room with natural light falling over ceramic pottery, notebook with handwritten reflections, soft woolen throw on a chaise lounge, peaceful and grounding ambiance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr2Oi5JgFU-muNIiKdpu8irF8tAxreRHgiL0b4XZ0HMJEyNtJGQeUQCXHZ02Pb8Hp5BAGmVTVVE73J-sfDTw3ovguWPkUD6bI2fn6f09FKIE4IM0XiATgi1rbyX_KL-p59J-2GB2FctXWwQkLNsOvnASwwWaKrAMjUH5Z4mM4RRathFHJjSHXnxJFMZkU_AQlX1F25Jc6rhLnoaDeGmi-WXEVD6MANIl0jmdUWnZN-4DaW019Y0hFs" />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent"></div>
      </div>
      {/* Tactile Badge floating */}
      <div className="hidden sm:block absolute -bottom-6 -right-6 p-space-6 bg-surface rounded-xl shadow-xl max-w-[280px]">
      <p className="font-headline-md text-headline-md text-primary leading-tight mb-space-1">“L’ansia è un messaggero.”</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Non si tratta di soffocarlo, ma di ascoltare ciò che chiede di cambiare.</p>
      </div>
      </div>
      {/* Narrative Column */}
      <div className="lg:col-span-7 flex flex-col gap-space-6">
      <div>
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest block mb-space-1">Metodo Integrato</span>
      <h2 className="font-display-lg text-headline-lg text-on-surface">Il mio approccio</h2>
      </div>
      <div className="p-space-6 rounded-xl bg-surface shadow-sm">
      <p className="font-headline-md text-headline-md text-primary mb-space-3 italic">
                    “L’obiettivo non è solo calmarti, ma capire cosa l’ansia sta cercando di dirti, trovando nuovi modi per rispondere alla vita.”
                  </p>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Utilizzo un <strong>approccio junghiano integrato con tecniche di gestione dello stress e della sintomatologia somatica</strong>. 
                    Nella prospettiva analitica di C.G. Jung, il sintomo ansioso non è un errore da cancellare asetticamente: è un segnale psichico vitale che indica che una parte fondamentale di te è stata trascurata o che il tuo equilibrio attuale non è più sostenibile.
                  </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4">
      <div className="p-space-4 rounded-lg bg-surface-container flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[24px] text-tertiary shrink-0 mt-0.5">filter_vintage</span>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface font-bold">Psicologia Analitica</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Esplorazione dei significati simbolici, dei sogni e degli archetipi che alimentano l’angoscia.</p>
      </div>
      </div>
      <div className="p-space-4 rounded-lg bg-surface-container flex items-start gap-space-3">
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">accessibility_new</span>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface font-bold">Integrazione Somatica</h4>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Pratiche di respirazione diaframmatica, rilassamento progressivo e centratura corporea.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 5: FAQ Accordion */}
      <section className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-24">
      <div className="flex flex-col gap-space-8 max-w-[54rem] mx-auto">
      <div className="text-center">
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest block mb-space-1">Chiarezza &amp; Trasparenza</span>
      <h2 className="font-display-lg text-headline-lg text-on-surface">Domande frequenti sull’ansia</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-2">
                Affrontare il percorso psicologico con cognizione e serenità fin dal primo incontro.
              </p>
      </div>
      <div className="flex flex-col gap-space-4" id="faq-accordion">
      {/* FAQ 1 */}
      <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden transition-all">
      <button aria-controls="faq-1" aria-expanded={false} className="w-full p-space-6 flex items-center justify-between text-left gap-space-4 cursor-pointer hover:bg-surface-container-high transition-colors" onClick={() => toggleFaq("faq-1")} type="button">
      <span className="font-headline-md text-headline-md text-on-surface">Quanto dura un percorso per l’ansia?</span>
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 transition-transform duration-200" id="icon-faq-1">expand_more</span>
      </button>
      <div className="hidden px-space-6 pb-space-6 text-on-surface-variant font-body-md text-body-md leading-relaxed" id="faq-1">
                  Dipende dalla persona, dalla complessità della storia di vita e dall’intensità con cui l’ansia si manifesta. Spesso, attraverso l’apprendimento delle tecniche di de-escalation e contenimento, alcuni miglioramenti concreti si percepiscono già dopo poche settimane. Un lavoro più profondo di ristrutturazione dei significati richiede mesi. Definiamo insieme obiettivi e tempistiche realistiche durante il primo colloquio conoscitivo.
                </div>
      </div>
      {/* FAQ 2 */}
      <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden transition-all">
      <button aria-controls="faq-2" aria-expanded={false} className="w-full p-space-6 flex items-center justify-between text-left gap-space-4 cursor-pointer hover:bg-surface-container-high transition-colors" onClick={() => toggleFaq("faq-2")} type="button">
      <span className="font-headline-md text-headline-md text-on-surface">Devo prendere farmaci?</span>
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 transition-transform duration-200" id="icon-faq-2">expand_more</span>
      </button>
      <div className="hidden px-space-6 pb-space-6 text-on-surface-variant font-body-md text-body-md leading-relaxed" id="faq-2">
                  Io sono psicologa e psicoterapeuta, non un medico psichiatra, quindi non prescrivo farmaci. Molte forme di ansia e panico rispondono in modo eccellente alla sola psicoterapia e al lavoro somatico. Tuttavia, qualora il livello di sofferenza fosse invalidante o ostacolasse l’avvio del lavoro clinico, valuteremo insieme con la massima trasparenza l’opportunità di un consulto medico specialistico di supporto.
                </div>
      </div>
      {/* FAQ 3 */}
      <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden transition-all">
      <button aria-controls="faq-3" aria-expanded={false} className="w-full p-space-6 flex items-center justify-between text-left gap-space-4 cursor-pointer hover:bg-surface-container-high transition-colors" onClick={() => toggleFaq("faq-3")} type="button">
      <span className="font-headline-md text-headline-md text-on-surface">E se ho un attacco di panico durante la seduta?</span>
      <span className="material-symbols-outlined text-[24px] text-primary shrink-0 transition-transform duration-200" id="icon-faq-3">expand_more</span>
      </button>
      <div className="hidden px-space-6 pb-space-6 text-on-surface-variant font-body-md text-body-md leading-relaxed" id="faq-3">
                  Lo spazio terapeutico è un luogo protetto e privo di giudizio. Se dovesse manifestarsi un attacco di panico in seduta — sia in presenza a Milano sia online — non sarai solo ad affrontarlo. Useremo quel momento reale per mettere in pratica le tecniche di autoregolazione, rallentare il ritmo respiratorio e sperimentare sul campo che la crisi passa sempre e può essere attraversata con fiducia.
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 6: Dedicated CTA & Related Areas Hub */}
      <section className="w-full bg-surface-container-low py-space-16 transition-colors">
      <div className="max-w-[72rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
      {/* High-warmth Invitation Card */}
      <div className="rounded-2xl bg-gradient-to-br from-surface-container via-surface-bright to-secondary-container/20 p-space-8 lg:p-space-12 shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-8">
      <div className="flex flex-col gap-space-3 max-w-[55ch]">
      <span className="inline-flex items-center gap-space-2 text-primary font-label-md text-label-md">
      <span className="material-symbols-outlined text-[20px]">wb_twilight</span>
      <span className="">Un percorso a piccoli passi</span>
      </span>
      <h2 className="font-display-lg text-headline-lg text-on-surface">
                  Pronto a fare il primo passo verso la serenità?
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Il primo colloquio è un tempo dedicato a te, senza aspettative prestabilite. Possiamo incontrarci nello studio di Milano (zona Piola/Lambrate) oppure online tramite piattaforma protetta.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-space-4 shrink-0 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2 px-space-8 py-space-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-lg hover:shadow-xl transition-all" href="/prenota">
      <span className="">Prenota un primo colloquio</span>
      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </a>
      <span className="font-label-sm text-label-sm text-outline text-center">Nessun vincolo di continuità • Risposta entro 24h</span>
      </div>
      </div>
      {/* Cross-navigation to Other Specialty Areas */}
      <div className="mt-space-12 pt-space-8 border-t-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-4">
      <div className="flex items-center gap-space-2 text-on-surface-variant font-label-md text-label-md">
      <span className="material-symbols-outlined text-[18px] text-tertiary">hub</span>
      <span className="font-semibold text-on-surface">Esplora altre aree di intervento:</span>
      </div>
      <div className="flex flex-wrap items-center gap-space-3">
      <a className="px-space-4 py-space-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="/">
                  Trauma ed emergenza
                </a>
      <span className="text-outline">•</span>
      <a className="px-space-4 py-space-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="/">
                  Migrazione &amp; Etnopsicologia
                </a>
      <span className="text-outline">•</span>
      <a className="px-space-4 py-space-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="/">
                  Stress e burnout
                </a>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Logic for Symptoms & FAQ */}
      
      </div></main>
      <SiteFooter />
    </div>
  );
}
