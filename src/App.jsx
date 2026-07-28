import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Layers,
  MousePointer2,
  Rocket,
  Search,
  Settings2,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

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

const proofPoints = [
  { label: "Agency web redesigns", value: "Škoda · BMW · Velo", icon: Sparkles },
  { label: "Corporate CMS ownership", value: "Nespresso CZ/SK", icon: Layers },
  { label: "Delivery tools", value: "Jira · Confluence", icon: Workflow },
  { label: "Web performance mindset", value: "Tracking · Funnel · UX", icon: BarChart3 },
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
  { name: "N26", icon: Sparkles, lesson: "Minimalistická estetika + rychlá funkčnost. Karta/podpora nikdy dál než 2 kliky." },
  { name: "Nubank", icon: Users, lesson: "Lokalizace a teplý, ne sterilní minimalismus — jednoduchost jako důvěra, ne chudoba." },
];

/* ============ BEFORE (dense, corporate) ============ */

function StageCardBefore({ stage, active, onClick }) {
  const Icon = stage.icon;
  return (
    <button
      onClick={onClick}
      className={`min-w-[260px] max-w-[260px] border p-4 text-left transition ${
        active ? "border-[#0099cc] bg-white" : "border-[#cfe6f3] bg-white/60 hover:bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="bg-[#003366] px-2 py-0.5 text-[10px] font-bold text-white">{stage.year}</span>
        <Icon size={16} className="text-[#003366]" />
      </div>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-[#003366]/60">{stage.label}</p>
      <h3 className="mt-1 text-sm font-bold leading-snug text-[#003366]">{stage.title}</h3>
      <p className="mt-2 text-xs leading-snug text-[#003366]/70">{stage.subtitle}</p>
    </button>
  );
}

function MiniBrowserBefore({ activeStage }) {
  const stage = stages[activeStage];
  return (
    <div className="border border-[#cfe6f3] bg-white">
      <div className="border-b border-[#cfe6f3] bg-[#ebf6fd] px-4 py-2 text-[11px] font-bold text-[#003366]/60">
        csob-public-web-redesign / {stage.id}
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="inline-block bg-[#0099cc] px-3 py-1 text-xs font-bold text-white">
            Active stage {stage.year}
          </div>
          <h2 className="mt-3 text-xl font-bold text-[#003366]">{stage.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#003366]/80">{stage.summary}</p>
          <div className="mt-4 space-y-2">
            {stage.bullets.map((b) => (
              <div key={b} className="flex gap-2 border border-[#cfe6f3] bg-[#ebf6fd] p-2 text-xs text-[#003366]">
                <BadgeCheck size={14} className="mt-0.5 shrink-0 text-[#0099cc]" />
                {b}
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[#cfe6f3] bg-[#ebf6fd] p-4">
          <p className="text-[10px] font-bold uppercase text-[#003366]/60">ČSOB redesign angle</p>
          <p className="mt-2 text-sm font-bold text-[#003366]">{stage.angle}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {proofPoints.map((p) => (
              <div key={p.label} className="border border-[#cfe6f3] bg-white p-2">
                <p className="text-[9px] font-bold uppercase text-[#003366]/50">{p.label}</p>
                <p className="text-xs font-bold text-[#003366]">{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeSiteMock() {
  return (
    <div className="border border-[#cfe6f3] bg-white">
      <div className="flex items-center gap-4 border-b border-[#cfe6f3] bg-[#003366] px-4 py-3 text-[11px] font-semibold text-white">
        <span>LOGO BANKY</span>
        <span className="hidden md:inline">Osobní účty</span>
        <span className="hidden md:inline">Spoření</span>
        <span className="hidden md:inline">Půjčky</span>
        <span className="hidden md:inline">Firmy</span>
        <span className="ml-auto rounded bg-[#0099cc] px-2 py-1">Přihlásit se</span>
      </div>
      <div className="grid gap-2 bg-[#ebf6fd] px-4 py-8 md:grid-cols-2">
        <div>
          <p className="text-xl font-bold leading-snug text-[#003366]">Hypotéka již od 4,49 % p.a.*</p>
          <p className="mt-2 text-[10px] text-[#003366]/60">*Podrobné podmínky viz sazebník.</p>
          <button className="mt-4 bg-[#e56100] px-4 py-2 text-xs font-bold text-white">
            Sjednat online
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[9px]">
          {["Kalkulačka", "Pobočky", "Kurzy", "Infolinka", "Appka", "Formuláře"].map((t) => (
            <div key={t} className="border border-[#cfe6f3] bg-white p-2 text-center text-[#003366]">{t}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4">
        {["Běžný účet", "Spoření", "Investice", "Karta", "Pojištění", "Leasing", "Penze", "Stavební spoření"].map((t) => (
          <div key={t} className="border border-[#cfe6f3] p-3 text-center text-[10px] font-medium text-[#003366]">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforeVariant({ active, setActive }) {
  return (
    <div className="min-h-screen bg-[#ebf6fd] text-[#003366]">
      <header className="border-b border-[#cfe6f3] bg-[#003366] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-sm font-bold">Petra Pavlišová</p>
          <p className="text-xs text-white/70">Interactive CV — current state</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-[#003366]">
          From web delivery to public web ownership.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#003366]/70">
          A compact presentation connecting agency redesign background and current Nespresso eBusiness ownership with a ČSOB public web redesign role.
        </p>

        <section className="mt-10">
          <p className="mb-3 text-xs font-bold uppercase text-[#003366]/60">Choose a stage</p>          <div className="flex gap-3 overflow-x-auto pb-3">
            {stages.map((stage, i) => (
              <StageCardBefore key={stage.id} stage={stage} active={i === active} onClick={() => setActive(i)} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <MiniBrowserBefore activeStage={active} />
        </section>

        <section className="mt-10">
          <p className="mb-3 text-xs font-bold uppercase text-slate-500">Web dnes vypadá takto</p>
          <BeforeSiteMock />
        </section>
      </main>
    </div>
  );
}

/* ============ AFTER (fresh, modern) ============ */

function StageCardAfter({ stage, active, onClick }) {
  const Icon = stage.icon;
  return (
    <button
      onClick={onClick}
      className={`group relative min-w-[280px] max-w-[280px] rounded-3xl border p-5 text-left transition-all duration-300 ${
        active ? "border-blue-300 bg-white shadow-xl shadow-blue-100" : "border-slate-200 bg-white/70 hover:-translate-y-1 hover:bg-white"
      }`}
    >
      <div className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-md">
        {stage.year}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{stage.label}</p>
          <h3 className="mt-2 text-lg font-bold leading-tight text-slate-900">{stage.title}</h3>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 text-white shadow-md">
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{stage.subtitle}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
        Explore stage <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
      </div>
    </button>
  );
}

function MiniBrowserAfter({ activeStage }) {
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
          csob-public-web-redesign / {stage.id}
        </div>
      </div>
      <div className="relative p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_0.8fr]">
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
          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">ČSOB redesign angle</p>
            <p className="mt-3 text-lg font-bold leading-snug text-slate-900">{stage.angle}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {proofPoints.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="text-blue-600" size={18} />
                    <p className="mt-2 text-[11px] font-semibold uppercase text-slate-400">{p.label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-800">{p.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
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
        <button className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm shadow-blue-200">
          Přihlásit se
        </button>
      </div>
      <div className="relative px-6 py-12">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
          Nová hypoteční kalkulačka
        </span>
        <h3 className="mt-4 max-w-md text-2xl font-black leading-tight text-slate-900">
          Spočítejte si hypotéku za 2 minuty.
        </h3>
        <button className="mt-5 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200">
          Spustit kalkulačku
        </button>
      </div>
      <div className="relative grid grid-cols-3 gap-4 border-t border-slate-100 px-6 py-6">
        {["Účty", "Spoření", "Hypotéky"].map((t) => (
          <div key={t} className="rounded-2xl bg-blue-50 p-3 text-center text-xs font-medium text-blue-700">
            {t}
          </div>
        ))}
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

function AfterVariant({ active, setActive, progress }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_50%,#f8fafc_100%)] text-slate-900">
      <header className="mx-auto max-w-6xl px-6 pt-10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-slate-900">Petra Pavlišová</p>
          <p className="hidden text-xs font-semibold text-slate-500 md:block">Redesign mindset · CMS reality · Product ownership</p>
        </div>

        <section className="grid gap-8 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <Sparkles size={16} /> Not a CV. A redesign journey.
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
              From web delivery to public web ownership.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              A compact interactive presentation connecting my agency web redesign background and current Nespresso eBusiness experience with a ČSOB public web redesign role.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-xl shadow-blue-100 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">Journey progress</p>
              <p className="text-sm font-black text-blue-700">{progress}%</p>
            </div>
            <div className="mt-3 h-3 rounded-full bg-slate-100">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {proofPoints.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="text-blue-600" size={18} />
                    <p className="mt-2 text-[11px] font-semibold uppercase text-slate-400">{p.label}</p>
                    <p className="mt-1 text-sm font-black text-slate-900">{p.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">Choose a stage</p>
        <div className="flex gap-5 overflow-x-auto pb-4">
          {stages.map((stage, i) => (
            <StageCardAfter key={stage.id} stage={stage} active={i === active} onClick={() => setActive(i)} />
          ))}
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <MiniBrowserAfter activeStage={active} />
          </AnimatePresence>
        </div>

        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Redesign concept</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">Jak by web mohl vypadat po redesignu</h2>
          <div className="mt-6">
            <AfterSiteMock />
          </div>
        </section>

        <CompetitiveStudy />
      </main>
    </div>
  );
}

/* ============ APP with Before/After switcher ============ */

export default function App() {
  const [mode, setMode] = useState("after");
  const [active, setActive] = useState(0);
  const progress = useMemo(() => Math.round(((active + 1) / stages.length) * 100), [active]);

  return (
    <div className="relative">
      <div className="fixed right-4 top-4 z-50 flex overflow-hidden rounded-full border border-slate-300 bg-white text-xs font-bold shadow-md">
        <button
          onClick={() => setMode("before")}
          className={`px-4 py-2 transition ${mode === "before" ? "bg-blue-900 text-white" : "text-slate-600"}`}
        >
          Before redesign
        </button>
        <button
          onClick={() => setMode("after")}
          className={`px-4 py-2 transition ${mode === "after" ? "bg-blue-600 text-white" : "text-slate-600"}`}
        >
          After redesign
        </button>
      </div>

      {mode === "before" ? (
        <BeforeVariant active={active} setActive={setActive} />
      ) : (
        <AfterVariant active={active} setActive={setActive} progress={progress} />
      )}
    </div>
  );
}