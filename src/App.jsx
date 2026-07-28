import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, Code2, Layers, Map, MousePointer2, PenTool, Rocket, Search, Settings2, Sparkles, Workflow } from "lucide-react";

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

function StageCard({ stage, active, onClick }) {
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

function MiniBrowser({ activeStage }) {
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
        <motion.div
          className="absolute bottom-6 left-7 right-7 h-2 rounded-full bg-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
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
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-white/80 p-3 shadow-sm"
                >
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
              {proofPoints.slice(0, 4).map((point) => {
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

export default function InteractiveCVConcept() {
  const [active, setActive] = useState(0);

  const progress = useMemo(() => Math.round(((active + 1) / stages.length) * 100), [active]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_50%,#f8fafc_100%)] text-slate-900">
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-200">
              <Code2 size={21} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Petra Pavlisova</p>
              <p className="text-xs text-slate-500">Interactive CV for web channel ownership</p>
            </div>
          </div>
          <div className="hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur md:block">
            Redesign mindset · CMS reality · Product ownership
          </div>
        </nav>

        <section className="grid gap-8 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm"
            >
              <Sparkles size={16} /> Not a CV. A redesign journey.
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-6xl"
            >
              From web delivery to public web ownership.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
            >
              A compact interactive presentation showing how my agency web redesign background and current Nespresso eBusiness experience connect to a ČSOB public web redesign role: discovery, backlog, UX, CMS reality, tracking and continuous optimization.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setActive(2)}
                className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Start redesign journey
              </button>
              <button
                onClick={() => setActive(0)}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5"
              >
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
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
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
            <div className="hidden text-right text-sm text-slate-500 md:block">
              Click cards · animate details · tell a role story
            </div>
          </div>

          <div className="relative overflow-x-auto pb-5">
            <div className="absolute left-0 right-0 top-[50%] hidden h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent md:block" />
            <div className="relative flex gap-5 pr-8">
              {stages.map((stage, i) => (
                <StageCard key={stage.id} stage={stage} index={i} active={i === active} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-7 lg:grid-cols-[1fr]">
          <AnimatePresence mode="wait">
            <MiniBrowser activeStage={active} />
          </AnimatePresence>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Design language</p>
            <h3 className="mt-3 text-xl font-black text-slate-900">Bank-friendly, not boring</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Clean white cards, blue trust palette, soft gradients and subtle motion. Professional enough for a bank, but more memorable than a PDF CV.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Animation idea</p>
            <h3 className="mt-3 text-xl font-black text-slate-900">GSAP-ready structure</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">This prototype uses Framer Motion. In a production version, GSAP ScrollTrigger could pin the timeline and animate each stage horizontally while the browser mockup transforms.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Interview value</p>
            <h3 className="mt-3 text-xl font-black text-slate-900">Shows how you think</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Instead of repeating a CV, this presents your actual redesign logic: discovery, backlog, UX, delivery, launch and optimization.</p>
          </div>
        </section>
      </main>
    </div>
  );
}