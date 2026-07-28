import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, Building2, Code2, Layers, Map, MousePointer2, PenTool, Rocket, Search, Settings2, Sparkles, TrendingUp, Users, Workflow, Zap } from "lucide-react";
import heroPhoto from "./assets/petra-pavlisova.jpg";

const stages = [
  {
    id: "agency",
    year: "01",
    label: "Web project foundation",
    title: "Agency experience: websites that actually get built",
    subtitle: "Škoda Auto · BMW · Velo e-shop · Korejská energie",
    icon: Layers,
    accent: "from-sky-500 to-cyan-400",
    summary:
      "From agency delivery I understand how web redesign projects move from brief and structure to UX, development, testing and launch — not only as a pretty concept, but as a real delivery process.",
    bullets: [
      "Collaboration on larger web development and redesign projects",
      "Client requirements, UX/design cooperation and development handover",
      "Iterative delivery cycles, priorities, feedback and launch readiness",
    ],
    csobAngle:
      "Useful for ČSOB: I already know the reality of redesign projects — dependencies, decisions, stakeholder changes and practical constraints.",
  },
  {
    id: "nespresso",
    year: "02",
    label: "Corporate web ownership",
    title: "Nespresso CZ/SK: web operations with business impact",
    subtitle: "B2B/B2C platforms · CMS · PDP · campaigns · localization",
    icon: Settings2,
    accent: "from-indigo-500 to-blue-500",
    summary:
      "In my current role I connect business, marketing, HQ and IT through daily web execution: campaign pages, homepage updates, product content, tracking, localization and troubleshooting.",
    bullets: [
      "CMS/Pagebuilder execution across CZ, SK, CZEN and SKEN variants",
      "Campaign tracking, homepage banners, landing pages and PDP updates",
      "Jira/Confluence documentation, incident follow-up and platform issue handling",
    ],
    csobAngle:
      "Useful for ČSOB: I can bridge business requirements and technical platform reality without losing detail, timing or ownership.",
  },
  {
    id: "discovery",
    year: "03",
    label: "ČSOB redesign discovery",
    title: "Step 1: understand the public web as a product",
    subtitle: "Users · business goals · regulatory needs · existing content",
    icon: Search,
    accent: "from-violet-500 to-fuchsia-500",
    summary:
      "For a public web redesign, I would start by mapping key audiences, business goals, current pain points, content ownership and conversion goals — before jumping into visual design.",
    bullets: [
      "Map public, business and corporate user journeys",
      "Identify content gaps, duplication, friction and high-impact entry points",
      "Align marketing, product teams, legal/regulatory and IT expectations",
    ],
    csobAngle:
      "My role: structure the chaos into a shared product view — what matters, why, for whom and how we measure success.",
  },
  {
    id: "roadmap",
    year: "04",
    label: "Roadmap & backlog",
    title: "Step 2: turn requirements into a manageable delivery system",
    subtitle: "Backlog · user stories · acceptance criteria · prioritization",
    icon: Workflow,
    accent: "from-emerald-500 to-teal-400",
    summary:
      "The redesign needs a clear backlog, prioritization logic and acceptance criteria. This is where my Jira/Confluence and stakeholder coordination experience becomes directly useful.",
    bullets: [
      "Translate business and user needs into structured user stories",
      "Define acceptance criteria: content, UX, tracking, mobile, SEO, compliance",
      "Prioritize based on impact, dependencies and release readiness",
    ],
    csobAngle:
      "My role: make sure the redesign is not just a creative exercise, but a controlled and transparent delivery process.",
  },
  {
    id: "ux",
    year: "05",
    label: "UX & conversion",
    title: "Step 3: design for clarity, trust and conversion",
    subtitle: "Navigation · content hierarchy · lead generation · digital sales",
    icon: PenTool,
    accent: "from-orange-500 to-amber-400",
    summary:
      "A bank public web has to be trustworthy, easy to navigate and commercially useful. I would focus on content clarity, user paths, campaign entry points and measurable conversions.",
    bullets: [
      "Improve navigation, layout logic and findability of key products",
      "Connect UX decisions with business KPIs and conversion tracking",
      "Keep content understandable, compliant and easy to maintain",
    ],
    csobAngle:
      "My role: connect UX/design with business outcomes, content reality and platform maintainability.",
  },
  {
    id: "launch",
    year: "06",
    label: "Launch & optimization",
    title: "Step 4: launch, measure, learn, improve",
    subtitle: "QA · tracking · release readiness · continuous optimization",
    icon: Rocket,
    accent: "from-rose-500 to-red-400",
    summary:
      "A redesign does not end at launch. It needs QA, tracking validation, issue handling, performance review and continuous improvements based on real user behavior.",
    bullets: [
      "Launch readiness checks: content, mobile, SEO, tracking and legal/regulatory details",
      "Post-launch issue triage and structured feedback collection",
      "Continuous UX and conversion improvements based on data",
    ],
    csobAngle:
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
  {
    name: "Revolut",
    icon: Zap,
    lesson: "Zvládá komplexnost bez zahlcení — postupné odkrývání funkcí, jasná hierarchie akcí.",
  },
  {
    name: "Monzo",
    icon: TrendingUp,
    lesson: "Radikální transparentnost — okamžité notifikace, kategorizace výdajů, lidský tón místo institucionálního.",
  },
  {
    name: "N26",
    icon: Sparkles,
    lesson: "Minimalistická estetika + rychlá funkčnost. Karta/podpora nikdy dál než 2 kliky.",
  },
  {
    name: "Nubank",
    icon: Users,
    lesson: "Lokalizace a teplý, ne sterilní minimalismus — jednoduchost jako důvěra, ne chudoba.",
  },
];

/* ---------- COLORFUL VARIANT ---------- */

function StageCardColor({ stage, active, onClick }) {
  const Icon = stage.icon;
  return (
    <button
      onClick={onClick}
      className={`group relative min-w-[290px] max-w-[290px] rounded-3xl border p-5 text-left transition-all duration-300 ${
        active
          ? "border-blue-300 bg-white shadow-2xl shadow-blue-100"
          : "border-slate-200 bg-white/70 shadow-lg shadow-slate-100 hover:-translate-y-1 hover:bg-white"
      }`}
    >
      <div className={`absolute -top-3 left-5 rounded-full bg-gradient-to-r ${stage.accent} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
        {stage.year}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stage.label}</p>
          <h3 className="mt-2 text-lg font-bold leading-tight text-slate-900">{stage.title}</h3>
        </div>
        <div className={`rounded-2xl bg-gradient-to-br ${stage.accent} p-3 text-white shadow-md`}>
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

function MiniBrowserColor({ activeStage }) {
  const stage = stages[activeStage];
  return (
    <motion.div
      key={stage.id}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
        <div className="ml-3 flex-1 rounded-full bg-white px-4 py-1.5 text-xs text-slate-400 shadow-inner">
          csob-public-web-redesign / {stage.id}
        </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden p-6">
        <motion.div
          className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${stage.accent} opacity-20 blur-2xl`}
          animate={{ scale: [1, 1.12, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div className="absolute bottom-6 left-7 right-7 h-2 rounded-full bg-slate-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div
            className={`h-2 rounded-full bg-gradient-to-r ${stage.accent}`}
            initial={{ width: 0 }}
            animate={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_0.8fr]">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${stage.accent} px-4 py-2 text-sm font-bold text-white shadow-lg`}>
              <MousePointer2 size={16} /> Active stage {stage.year}
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">{stage.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">{stage.summary}</p>

            <div className="mt-6 space-y-3">
              {stage.bullets.map((bullet, i) => (
                <motion.div key={bullet} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-3 rounded-2xl border border-slate-100 bg-white/80 p-3 shadow-sm">
                  <BadgeCheck className="mt-0.5 shrink-0 text-blue-600" size={18} />
                  <span className="text-sm leading-relaxed text-slate-700">{bullet}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">ČSOB redesign angle</p>
            <p className="mt-3 text-lg font-bold leading-snug text-slate-900">{stage.csobAngle}</p>

            <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <Map size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Candidate value</p>
                  <p className="text-xs leading-relaxed text-slate-500">Not a standard CV entry — this explains how my experience maps to redesign ownership.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {proofPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="text-blue-700" size={18} />
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{point.label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-800">{point.value}</p>
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

function ColorVariant({ active, setActive, progress }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_50%,#f8fafc_100%)] text-slate-900">
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
              <Code2 size={21} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Petra Pavlišová</p>
              <p className="text-xs text-slate-500">Interactive CV for web channel ownership</p>
            </div>
          </div>
          <div className="hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur md:block">
            Redesign mindset · CMS reality · Product ownership
          </div>
        </nav>

        <section className="grid gap-8 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <Sparkles size={16} /> Not a CV. A redesign journey.
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-6xl">
              From web delivery to public web ownership.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              A compact interactive presentation showing how my agency web redesign background and current Nespresso eBusiness experience connect to a ČSOB public web redesign role: discovery, backlog, UX, CMS reality, tracking and continuous optimization.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setActive(2)} className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-800">
                Start redesign journey
              </button>
              <button onClick={() => setActive(0)} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5">
                View experience base
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-2xl shadow-blue-100 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">Journey progress</p>
              <p className="text-sm font-black text-blue-700">{progress}%</p>
            </div>
            <div className="mt-3 h-3 rounded-full bg-slate-100">
              <motion.div className="h-3 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {proofPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="rounded-3xl bg-white p-4 shadow-sm">
                    <Icon className="text-blue-700" size={20} />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{point.label}</p>
                    <p className="mt-1 text-base font-black text-slate-900">{point.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16">
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Horizontal timeline</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Choose a stage of the redesign story</h2>
            </div>
          </div>
          <div className="relative overflow-x-auto pb-5">
            <div className="relative flex gap-5 pr-8">
              {stages.map((stage, i) => (
                <StageCardColor key={stage.id} stage={stage} active={i === active} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-7 lg:grid-cols-[1fr]">
          <AnimatePresence mode="wait">
            <MiniBrowserColor activeStage={active} />
          </AnimatePresence>
        </section>

        <div className="mt-16">
          <RedesignConcept />
          <CompetitiveStudy />
        </div>
      </main>
    </div>
  );
}

/* ---------- MINIMAL VARIANT ---------- */

function StageCardMinimal({ stage, active, onClick }) {
  const Icon = stage.icon;
  return (
    <button
      onClick={onClick}
      className={`group relative min-w-[290px] max-w-[290px] border p-5 text-left transition-all duration-300 ${
        active ? "border-neutral-900 bg-white" : "border-neutral-300 bg-white/60 hover:-translate-y-1 hover:bg-white hover:border-neutral-500"
      }`}
    >
      <div className="absolute -top-3 left-5 border border-neutral-900 bg-[#faf9f6] px-3 py-1 font-serif text-xs font-medium text-neutral-900">
        {stage.year}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">{stage.label}</p>
          <h3 className="mt-2 font-serif text-lg leading-tight text-neutral-900">{stage.title}</h3>
        </div>
        <div className="border border-neutral-300 p-3 text-neutral-700">
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{stage.subtitle}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-neutral-900">
        Explore stage <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
      </div>
    </button>
  );
}

function MiniBrowserMinimal({ activeStage }) {
  const stage = stages[activeStage];
  return (
    <motion.div
      key={stage.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden border border-neutral-300 bg-white"
    >
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-5 py-3">
        <span className="h-3 w-3 rounded-full border border-neutral-400" />
        <span className="h-3 w-3 rounded-full border border-neutral-400" />
        <span className="h-3 w-3 rounded-full border border-neutral-400" />
        <div className="ml-3 flex-1 border border-neutral-200 bg-white px-4 py-1.5 text-xs text-neutral-400">
          csob-public-web-redesign / {stage.id}
        </div>
      </div>

      <div className="relative min-h-[360px] p-6">
        <motion.div className="absolute bottom-6 left-7 right-7 h-[2px] bg-neutral-200" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="h-[2px] bg-neutral-900" initial={{ width: 0 }} animate={{ width: `${((activeStage + 1) / stages.length) * 100}%` }} transition={{ duration: 0.6, ease: "easeOut" }} />
        </motion.div>

        <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900">
              <MousePointer2 size={16} /> Active stage {stage.year}
            </div>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-neutral-900">{stage.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">{stage.summary}</p>

            <div className="mt-6 space-y-3">
              {stage.bullets.map((bullet, i) => (
                <motion.div key={bullet} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-3 border border-neutral-200 p-3">
                  <BadgeCheck className="mt-0.5 shrink-0 text-neutral-700" size={18} />
                  <span className="text-sm leading-relaxed text-neutral-700">{bullet}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">ČSOB redesign angle</p>
            <p className="mt-3 font-serif text-lg leading-snug text-neutral-900">{stage.csobAngle}</p>

            <div className="mt-6 border border-neutral-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="border border-neutral-300 p-3 text-neutral-700">
                  <Map size={21} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Candidate value</p>
                  <p className="text-xs leading-relaxed text-neutral-500">Not a standard CV entry — this explains how my experience maps to redesign ownership.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {proofPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="border border-neutral-200 bg-white p-3">
                    <Icon className="text-neutral-700" size={18} />
                    <p className="mt-2 text-[11px] uppercase tracking-wide text-neutral-400">{point.label}</p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">{point.value}</p>
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

function MinimalVariant({ active, setActive, progress }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-neutral-900 text-neutral-900">
              <Sparkles size={19} />
            </div>
            <div>
              <p className="font-serif text-base text-neutral-900">Petra Pavlišová</p>
              <p className="text-xs text-neutral-500">Interactive CV for web channel ownership</p>
            </div>
          </div>
          <div className="hidden border border-neutral-300 px-4 py-2 text-xs uppercase tracking-[0.15em] text-neutral-500 md:block">
            Redesign mindset · CMS reality · Product ownership
          </div>
        </nav>

        <section className="grid gap-10 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 text-xs uppercase tracking-[0.15em] text-neutral-600">
              <Sparkles size={14} /> Not a CV. A redesign journey.
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-neutral-950 md:text-6xl">
              From web delivery to public web ownership.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              A compact interactive presentation showing how my agency web redesign background and current Nespresso eBusiness experience connect to a ČSOB public web redesign role: discovery, backlog, UX, CMS reality, tracking and continuous optimization.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setActive(2)} className="border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800">
                Start redesign journey
              </button>
              <button onClick={() => setActive(0)} className="border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5">
                View experience base
              </button>
            </div>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden border border-neutral-300 bg-neutral-100">
              <img src={heroPhoto} alt="Petra Pavlišová" className="h-full w-full object-cover grayscale" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-neutral-400">
              <span>Journey progress</span>
              <span className="font-serif text-sm text-neutral-900">{progress}%</span>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16">
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-4 border-t border-neutral-900 pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Horizontal timeline</p>
              <h2 className="mt-2 font-serif text-2xl text-neutral-950">Choose a stage of the redesign story</h2>
            </div>
          </div>
          <div className="relative overflow-x-auto pb-5">
            <div className="relative flex gap-5 pr-8">
              {stages.map((stage, i) => (
                <StageCardMinimal key={stage.id} stage={stage} active={i === active} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-7 lg:grid-cols-[1fr]">
          <AnimatePresence mode="wait">
            <MiniBrowserMinimal activeStage={active} />
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

/* ---------- APP with switcher ---------- */

function BeforeMock() {
  return (
    <div className="border border-neutral-300 bg-white text-left">
      <div className="flex items-center gap-4 border-b border-neutral-200 bg-[#0a3a7a] px-4 py-3 text-xs font-semibold text-white">
        <span>LOGO BANKY</span>
        <span className="hidden md:inline">Osobní účty</span>
        <span className="hidden md:inline">Spoření</span>
        <span className="hidden md:inline">Půjčky</span>
        <span className="hidden md:inline">Pojištění</span>
        <span className="hidden md:inline">Firmy a podnikatelé</span>
        <span className="hidden md:inline">Kariéra</span>
        <span className="ml-auto rounded bg-white/20 px-2 py-1">Přihlásit se</span>
      </div>
      <div className="grid gap-3 bg-[#0a3a7a] px-4 py-8 text-white md:grid-cols-2">
        <div>
          <p className="text-2xl font-bold leading-snug">
            Získejte hypotéku s výhodným úrokem již od 4,49 % p.a.*
          </p>
          <p className="mt-2 text-xs text-white/70">
            *Platí při sjednání životního pojištění a aktivním používání platební karty. Podrobné podmínky viz sazebník.
          </p>
          <button className="mt-4 rounded bg-white px-4 py-2 text-xs font-bold text-[#0a3a7a]">
            Sjednat online
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          {["Kalkulačka", "Pobočky", "Kurzovní lístek", "Infolinka", "Aplikace", "Formuláře"].map((t) => (
            <div key={t} className="rounded border border-white/20 bg-white/10 p-2 text-center">{t}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4">
        {["Běžný účet", "Spořicí účet", "Stavební spoření", "Investice", "Kreditní karta", "Pojištění", "Leasing", "Penzijní spoření"].map((t) => (
          <div key={t} className="border border-neutral-200 p-3 text-center text-[11px] font-medium text-neutral-700">
            {t}
          </div>
        ))}
      </div>
      <p className="border-t border-neutral-200 p-4 text-[10px] leading-relaxed text-neutral-400">
        Hustá horní navigace s mnoha položkami, dlouhé právní texty hned v hero sekci, mřížka produktových dlaždic bez jasné priority, málo bílého prostoru — typický vzor tradičního korporátního bankovního webu.
      </p>
    </div>
  );
}

function AfterMock() {
  return (
    <div className="border border-neutral-300 bg-white text-left">
      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
        <span className="font-serif text-sm">banka</span>
        <button className="border border-neutral-900 px-4 py-1.5 text-xs font-medium">Přihlásit se</button>
      </div>
      <div className="px-6 py-14">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Hypotéky</p>
        <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight text-neutral-900">
          Spočítejte si hypotéku za 2 minuty.
        </h3>
        <button className="mt-6 border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-medium text-white">
          Spustit kalkulačku
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 px-6 py-8">
        {["Účty", "Spoření", "Hypotéky"].map((t) => (
          <div key={t} className="text-sm font-medium text-neutral-800">{t}</div>
        ))}
      </div>
      <p className="border-t border-neutral-200 p-4 text-[10px] leading-relaxed text-neutral-400">
        Jeden jasný cíl na obrazovku, jedna primární akce, minimum navigačních položek, generózní bílý prostor — princip "reduced cognitive load" z moderního fintech UX.
      </p>
    </div>
  );
}

function RedesignConcept() {
  const [mode, setMode] = useState("before");
  return (
    <section className="mb-16 border-t border-neutral-900 pt-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Redesign concept</p>
          <h2 className="mt-2 font-serif text-2xl text-neutral-950">Before → After</h2>
        </div>
        <div className="flex overflow-hidden rounded-full border border-neutral-300 text-xs font-medium">
          <button
            onClick={() => setMode("before")}
            className={`px-4 py-2 transition ${mode === "before" ? "bg-neutral-900 text-white" : "text-neutral-600"}`}
          >
            Before
          </button>
          <button
            onClick={() => setMode("after")}
            className={`px-4 py-2 transition ${mode === "after" ? "bg-neutral-900 text-white" : "text-neutral-600"}`}
          >
            After
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {mode === "before" ? <BeforeMock /> : <AfterMock />}
        </motion.div>
      </AnimatePresence>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
        Ilustrativní srovnání principů, ne skutečný obsah konkrétní banky — cílem je ukázat rozdíl mezi hustou, produktově orientovanou strukturou a přehledným, úkolově orientovaným redesignem.
      </p>
    </section>
  );
}

function CompetitiveStudy() {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Market context</p>
        <h2 className="mt-2 font-serif text-2xl text-neutral-950">Konkurenční prostředí a UX role models</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-800">
            <Building2 size={16} /> Hlavní konkurence na trhu ČR
          </div>
          <div className="divide-y divide-neutral-200 border border-neutral-200">
            {competitors.map((c) => (
              <div key={c.name} className="p-3">
                <p className="text-sm font-medium text-neutral-900">{c.name}</p>
                <p className="text-xs text-neutral-500">{c.owner}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">{c.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-800">
            <Sparkles size={16} /> Globální UX role models (fintech)
          </div>
          <div className="divide-y divide-neutral-200 border border-neutral-200">
            {uxRoleModels.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.name} className="flex gap-3 p-3">
                  <Icon className="mt-0.5 shrink-0 text-neutral-500" size={16} />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{r.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">{r.lesson}</p>
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

export default function App() {
  const [variant, setVariant] = useState("minimal");
  const [active, setActive] = useState(0);
  const progress = useMemo(() => Math.round(((active + 1) / stages.length) * 100), [active]);

  return (
    <div className="relative">
      <div className="fixed right-4 top-4 z-50 flex overflow-hidden rounded-full border border-neutral-300 bg-white text-xs font-medium shadow-md">
        <button
          onClick={() => setVariant("minimal")}
          className={`px-4 py-2 transition ${variant === "minimal" ? "bg-neutral-900 text-white" : "text-neutral-600"}`}
        >
          Minimal
        </button>
        <button
          onClick={() => setVariant("color")}
          className={`px-4 py-2 transition ${variant === "color" ? "bg-blue-700 text-white" : "text-neutral-600"}`}
        >
          Original
        </button>
      </div>

      {variant === "minimal" ? (
        <MinimalVariant active={active} setActive={setActive} progress={progress} />
      ) : (
        <ColorVariant active={active} setActive={setActive} progress={progress} />
      )}
    </div>
  );
}