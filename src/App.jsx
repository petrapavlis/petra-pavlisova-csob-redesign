import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Layers,
  MousePointer2,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* ============ DATA ============ */

const stages = [
  {
    id: "agency",
    year: "01",
    label: "Web project foundation",
    title: "Agency experience: websites that actually get built",
    subtitle: "Škoda Auto · BMW · Velo e-shop · Korejská energie",
    icon: Layers,
    summary:
      "From agency delivery I understand how web redesign projects move from brief and structure to UX, development, testing and launch — not only as a pretty concept, but as a real delivery process.",
    bullets: [
      "Collaboration on larger web development and redesign projects",
      "Client requirements, UX/design cooperation and development handover",
      "Iterative delivery cycles, priorities, feedback and launch readiness",
    ],
    angle:
      "Useful for ČSOB: I already know the reality of redesign projects — dependencies, decisions, stakeholder changes and practical constraints.",
  },
  {
    id: "nespresso",
    year: "02",
    label: "Corporate web ownership",
    title: "Nespresso CZ/SK: web operations with business impact",
    subtitle: "B2B/B2C platforms · CMS · PDP · campaigns · localization",
    icon: Settings2,
    summary:
      "In my current role I connect business, marketing, HQ and IT through daily web execution: campaign pages, homepage updates, product content, tracking, localization and troubleshooting.",
    bullets: [
      "CMS/Pagebuilder execution across CZ, SK, CZEN and SKEN variants",
      "Campaign tracking, homepage banners, landing pages and PDP updates",
      "Jira/Confluence documentation, incident follow-up and platform issue handling",
    ],
    angle:
      "Useful for ČSOB: I can bridge business requirements and technical platform reality without losing detail, timing or ownership.",
  },
  {
    id: "discovery",
    year: "03",
    label: "ČSOB redesign discovery",
    title: "Step 1: understand the public web as a product",
    subtitle: "Users · business goals · regulatory needs · existing content",
    icon: Search,
    summary:
      "For a public web redesign, I would start by mapping key audiences, business goals, current pain points, content ownership and conversion goals — before jumping into visual design.",
    bullets: [
      "Map public, business and corporate user journeys",
      "Identify content gaps, duplication, friction and high-impact entry points",
      "Align marketing, product teams, legal/regulatory and IT expectations",
    ],
    angle:
      "My role: structure the chaos into a shared product view — what matters, why, for whom and how we measure success.",
  },
  {
    id: "roadmap",
    year: "04",
    label: "Roadmap & backlog",
    title: "Step 2: turn requirements into a manageable delivery system",
    subtitle: "Backlog · user stories · acceptance criteria · prioritization",
    icon: Workflow,
    summary:
      "The redesign needs a clear backlog, prioritization logic and acceptance criteria. This is where my Jira/Confluence and stakeholder coordination experience becomes directly useful.",
    bullets: [
      "Translate business and user needs into structured user stories",
      "Define acceptance criteria: content, UX, tracking, mobile, SEO, compliance",
      "Prioritize based on impact, dependencies and release readiness",
    ],
    angle:
      "My role: make sure the redesign is not just a creative exercise, but a controlled and transparent delivery process.",
  },
  {
    id: "ux",
    year: "05",
    label: "UX & conversion",
    title: "Step 3: design for clarity, trust and conversion",
    subtitle: "Navigation · content hierarchy · lead generation · digital sales",
    icon: MousePointer2,
    summary:
      "A bank public web has to be trustworthy, easy to navigate and commercially useful. I would focus on content clarity, user paths, campaign entry points and measurable conversions.",
    bullets: [
      "Improve navigation, layout logic and findability of key products",
      "Connect UX decisions with business KPIs and conversion tracking",
      "Keep content understandable, compliant and easy to maintain",
    ],
    angle:
      "My role: connect UX/design with business outcomes, content reality and platform maintainability.",
  },
  {
    id: "launch",
    year: "06",
    label: "Launch & optimization",
    title: "Step 4: launch, measure, learn, improve",
    subtitle: "QA · tracking · release readiness · continuous optimization",
    icon: Rocket,
    summary:
      "A redesign does not end at launch. It needs QA, tracking validation, issue handling, performance review and continuous improvements based on real user behavior.",
    bullets: [
      "Launch readiness checks: content, mobile, SEO, tracking and legal/regulatory details",
      "Post-launch issue triage and structured feedback collection",
      "Continuous UX and conversion improvements based on data",
    ],
    angle:
      "My role: keep ownership after go-live — not only deliver the redesign, but make the public web better over time.",
  },
];

const competitors = [
  { name: "Česká spořitelna", owner: "Erste Group (AT)", note: "Nejvíce klientů (~4,5 mil.), silný retail, moderní appka" },
  { name: "Komerční banka", owner: "Société Générale (FR) → převod vlastnictví", note: "3. největší dle klientů i bilance, probíhá změna vlastníka" },
  { name: "UniCredit Bank", owner: "UniCredit (IT)", note: "Střední velikost, firemní i retail segment" },
  { name: "Raiffeisenbank", owner: "RBI (AT)", note: "Považována za technologického lídra trhu" },
  { name: "MONETA Money Bank", owner: "sloučení s Air Bank", note: "Digital-first pozice, jednoduché UX jako diferenciátor" },
  { name: "mBank", owner: "Commerzbank (DE, přes PL)", note: "Referenční UX na CEE trhu, čistá appka" },
];

const uxRoleModels = [
  { name: "Revolut", icon: Zap, lesson: "Zvládá komplexnost bez zahlcení — postupné odkrývání funkcí, jasná hierarchie akcí." },
  { name: "Monzo", icon: TrendingUp, lesson: "Radikální transparentnost — okamžité notifikace, kategorizace výdajů, lidský tón." },
  { name: "N26", icon: Sparkles, lesson: "Minimalistická estetika + rychlá funkčnost. Podpora nikdy dál než 2 kliky." },
  { name: "Nubank", icon: Users, lesson: "Lokalizace a teplý, ne sterilní minimalismus — jednoduchost jako důvěra, ne chudoba." },
];

/* ============ SECTION 1: MOJE CESTA (stálá prezentace) ============ */

function StageCard({ stage, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group min-w-[280px] max-w-[280px] rounded-3xl border-2 p-5 text-left transition-all duration-300 ${
              active
                ? "scale-[1.04] border-blue-600 bg-white shadow-2xl shadow-blue-200"
                : "border-slate-200 bg-white/70 opacity-70 hover:-translate-y-1 hover:bg-white hover:opacity-100"
            }`}
    >
      <span className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-md">
        {stage.year}
      </span>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">{stage.label}</p>
      <h3 className="mt-2 text-lg font-bold leading-tight text-slate-900">{stage.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{stage.subtitle}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
        Explore stage <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
      </div>
    </button>
  );
}

function MiniBrowser({ activeStage }) {
  const stage = stages[activeStage];
  return (
    <motion.div
      key={stage.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-blue-200" />
        <span className="h-3 w-3 rounded-full bg-cyan-200" />
        <span className="h-3 w-3 rounded-full bg-emerald-200" />
        <div className="ml-3 flex-1 rounded-full bg-white px-4 py-1.5 text-xs text-slate-400 shadow-inner">
          petra-pavlisova / {stage.id}
        </div>
      </div>
      <div className="relative p-6">
        <div className="grid items-start gap-5 md:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-md">
              <MousePointer2 size={16} /> Active stage {stage.year}
            </div>
            <h2 className="mt-5 text-2xl font-black leading-tight text-slate-950">{stage.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{stage.summary}</p>
            <div className="mt-5 space-y-2">
              {stage.bullets.map((bullet, i) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-white/80 p-3 shadow-sm"
                >
                  <BadgeCheck className="mt-0.5 shrink-0 text-blue-600" size={18} />
                  <span className="text-sm leading-relaxed text-slate-700">{bullet}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-3 h-fit self-start rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 shadow-lg shadow-blue-200">
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">ČSOB redesign angle</p>
            <p className="mt-3 text-lg font-bold leading-snug text-white">{stage.angle}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PresentationSection({ active, setActive, progress }) {
  const goPrev = () => setActive((a) => (a > 0 ? a - 1 : a));
  const goNext = () => setActive((a) => (a < stages.length - 1 ? a + 1 : a));

  return (
    <header className="mx-auto max-w-6xl px-6 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-200/70 pb-6">
        <p className="text-lg font-bold text-slate-900">Petra Pavlisová</p>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Moje roadmapa</span>
          <div className="h-2 w-40 rounded-full bg-slate-200">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-sm font-black text-blue-700">{progress}%</span>
        </div>
      </div>

      <section className="pt-12">
        <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
          From owning a brand's web to owning a bank's public web.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
          A compact interactive presentation connecting my experience and vision on the way to a ČSOB public web redesign role.
        </p>
      </section>

      <section className="pb-4 pt-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">Moje roadmapa</p>
        <div className="flex gap-5 overflow-x-auto px-4 pb-6 pt-3">
                  {stages.map((stage, i) => (
                    <StageCard key={stage.id} stage={stage} active={i === active} onClick={() => setActive(i)} />
                  ))}
                </div>

        <div className="relative mt-2 px-2 md:px-14">
          <AnimatePresence mode="wait">
            <MiniBrowser activeStage={active} />
          </AnimatePresence>

          <button
            onClick={goPrev}
            disabled={active === 0}
            aria-label="Předchozí fáze"
            className="absolute -left-1 top-1/2 -translate-y-1/2 text-slate-300 transition hover:-translate-x-1 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-0 md:left-0"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>
          <button
            onClick={goNext}
            disabled={active === stages.length - 1}
            aria-label="Další fáze"
            className="absolute -right-1 top-1/2 -translate-y-1/2 text-slate-300 transition hover:translate-x-1 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-0 md:right-0"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>
      </section>
    </header>
  );
}

/* ============ SECTION 2: CASE STUDY — BEFORE / AFTER ============ */

function BeforeSiteMock() {
  return (
    <div className="border border-[#cfe6f3] bg-white">
      <div className="flex items-center gap-3 border-b border-[#cfe6f3] bg-[#003366] px-4 py-1.5 text-[9px] font-medium text-white/70">
        <span>Osobní</span>
        <span>Firmy a instituce</span>
        <span>O bance</span>
        <span className="ml-auto">CZ | EN</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-b border-[#cfe6f3] bg-[#003366] px-4 py-3 text-[10px] font-semibold text-white">
        <span className="text-xs font-bold">LOGO BANKY</span>
        <span>Účty a karty</span>
        <span>Spoření a investice</span>
        <span>Půjčky a hypotéky</span>
        <span>Pojištění</span>
        <span>Penzijní produkty</span>
        <span>Leasing</span>
        <span className="ml-auto rounded bg-[#0099cc] px-2 py-1">Přihlásit se</span>
      </div>
      <div className="bg-[#ebf6fd] px-4 py-6">
        <p className="text-lg font-bold leading-snug text-[#003366]">
          Hypotéka s garantovaným úrokem již od 4,49 % p.a.*
        </p>
        <p className="mt-1 max-w-md text-[9px] leading-relaxed text-[#003366]/60">
          *Uvedená sazba platí při sjednání životního pojištění, aktivním používání platební karty a splnění dalších podmínek. Kompletní informace naleznete v aktuálním sazebníku a obchodních podmínkách produktu.
        </p>
        <div className="mt-3 flex gap-2">
          <button className="bg-[#e56100] px-4 py-2 text-[10px] font-bold text-white">Sjednat online</button>
          <button className="border border-[#003366]/30 px-4 py-2 text-[10px] font-bold text-[#003366]">Spočítat splátku</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4">
        {[
          "Běžný účet",
          "Spořicí účet",
          "Stavební spoření",
          "Podílové fondy",
          "Kreditní karta",
          "Životní pojištění",
          "Operativní leasing",
          "Penzijní spoření",
        ].map((t) => (
          <div key={t} className="border border-[#cfe6f3] p-3 text-center text-[9px] font-medium leading-snug text-[#003366]">
            {t}
          </div>
        ))}
      </div>
      <p className="border-t border-[#cfe6f3] p-3 text-[8px] leading-relaxed text-[#003366]/40">
        Tato prezentace je ilustrativní srovnávací koncept, nikoliv skutečný obsah webu žádné konkrétní banky. Všechny sazby, produkty a texty jsou smyšlené a slouží pouze pro demonstraci principů struktury a UX.
      </p>
    </div>
  );
}

function AfterSiteMock() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-10 blur-3xl" />
      <div className="relative flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">b</div>
          <span className="text-sm font-bold text-slate-900">banka</span>
        </div>
        <div className="hidden gap-5 text-xs font-medium text-slate-500 md:flex">
          <span>Spoření</span>
          <span>Půjčky</span>
          <span>Pojištění</span>
        </div>
        <button className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm shadow-blue-200">
          Přihlásit se
        </button>
      </div>

      <div className="relative px-6 py-12">
        <h3 className="max-w-md text-2xl font-black leading-tight text-slate-900">
          Potřebujete půjčit na bydlení?
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
          Spočítáme splátku za 2 minuty. Bez papírování předem, bez závazků.
        </p>
        <button className="mt-6 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200">
          Spočítat hypotéku
        </button>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { icon: ShieldCheck, label: "Bez skrytých poplatků" },
            { icon: Clock, label: "Odpověď do 24 hodin" },
            { icon: BadgeCheck, label: "Nic nepodepisujete dopředu" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <span key={c.label} className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-700">
                <Icon size={13} /> {c.label}
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative grid grid-cols-3 gap-4 border-t border-slate-100 px-6 py-6">
        {["Chci spořit", "Chci si půjčit", "Chci se pojistit"].map((t) => (
          <div key={t} className="rounded-2xl bg-blue-50 p-3 text-center text-xs font-medium text-blue-700">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyItWorksPanel() {
  const before = [
    "6+ rovnocenných položek v hlavní navigaci najednou",
    "Právní disclaimer hned vedle hlavní nabídky, ještě než uživatel ví, o co jde",
    "8 produktových dlaždic stejné velikosti — nic neříká, co je pro mě důležité",
    "Odborný žargon v názvech produktů bez vysvětlení",
  ];
  const after = [
    "Jedna otázka, jedna odpověď: co řeším a co mám udělat teď",
    "Odpovědi na to, co lidi fakt zajímá: kolik to stojí, jak dlouho to trvá, co budu potřebovat",
    "Důvěra řešena rovnou — bez skrytých poplatků, žádné papírování předem",
    "Tři jasné cesty místo deseti rovnocenných možností",
  ];
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-[#cfe6f3] bg-[#ebf6fd] p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-[#003366]/60">Co plete a odrazuje</p>
        <ul className="mt-3 space-y-2">
          {before.map((b) => (
            <li key={b} className="text-xs leading-relaxed text-[#003366]">— {b}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Co lidi skutečně zajímá</p>
        <ul className="mt-3 space-y-2">
          {after.map((a) => (
            <li key={a} className="text-xs leading-relaxed text-blue-900">— {a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompetitiveStudy() {
  return (
    <section className="mt-14">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Market context</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950">Konkurenční prostředí a UX role models</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
            <Building2 size={16} /> Hlavní konkurence na trhu ČR
          </div>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
            {competitors.map((c) => (
              <div key={c.name} className="p-3">
                <p className="text-sm font-bold text-slate-900">{c.name}</p>
                <p className="text-xs text-slate-400">{c.owner}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
            <Sparkles size={16} /> Globální UX role models (fintech)
          </div>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
            {uxRoleModels.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.name} className="flex gap-3 p-3">
                  <Icon className="mt-0.5 shrink-0 text-blue-600" size={16} />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{r.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{r.lesson}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  const [mode, setMode] = useState("before");
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Case study</p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">ČSOB public web — redesign koncept</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Ilustrativní srovnání principů: jak dnes typicky vypadá struktura velkého bankovního webu (Before) a jak by mohla vypadat po redesignu zaměřeném na srozumitelnost pro běžného člověka (After).
        </p>

        <div className="mt-8 inline-flex overflow-hidden rounded-full border border-slate-300 text-xs font-bold shadow-sm">
          <button
            onClick={() => setMode("before")}
            className={`px-5 py-2.5 transition ${mode === "before" ? "bg-[#003366] text-white" : "text-slate-600"}`}
          >
            Before redesign
          </button>
          <button
            onClick={() => setMode("after")}
            className={`px-5 py-2.5 transition ${mode === "after" ? "bg-blue-600 text-white" : "text-slate-600"}`}
          >
            After redesign
          </button>
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {mode === "before" ? <BeforeSiteMock /> : <AfterSiteMock />}
            </motion.div>
          </AnimatePresence>
        </div>

        <WhyItWorksPanel />
        <CompetitiveStudy />
      </div>
    </section>
  );
}

/* ============ APP ============ */

export default function App() {
  const [active, setActive] = useState(0);
  const progress = useMemo(() => Math.round(((active + 1) / stages.length) * 100), [active]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_50%,#f8fafc_100%)] text-slate-900">
      <PresentationSection active={active} setActive={setActive} progress={progress} />
      <main className="pb-16 pt-6">
        <CaseStudySection />
      </main>
    </div>
  );
}