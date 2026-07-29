import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Layers,
  Link2,
  Mail,
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
import heroPhoto from "./assets/petra-pavlisova.jpg";

/* ============ DATA (CZ / EN) ============ */

const stagesByLang = {
  cz: [
    {
      id: "agency",
      year: "01",
      label: "Základ webových projektů",
      title: "Agenturní zkušenost: weby, které se opravdu dostanou do provozu",
      subtitle: "Škoda Auto · BMW · VELO, Vuse, glo™ a neo™",
      icon: Layers,
      summary:
        "Z agenturní praxe rozumím tomu, jak se redesign webu posouvá od zadání a struktury přes UX, vývoj, testování až po launch — nejen jako hezký koncept, ale jako reálný dodávkový proces.",
      bullets: [
        "Spolupráce na větších projektech vývoje a redesignu webu",
        "Požadavky klienta, spolupráce s UX/designem a předání do vývoje",
        "Iterativní dodávkové cykly, priority, zpětná vazba a připravenost na launch",
      ],
      angle:
        "Užitečné pro ČSOB: Už teď znám realitu redesign projektů — závislosti, rozhodnutí, změny stakeholderů a praktická omezení.",
    },
    {
      id: "nespresso",
      year: "02",
      label: "Vlastnictví firemního webu",
      title: "Nespresso CZ/SK: provoz webu s dopadem na byznys",
      subtitle: "B2B/B2C platformy · CMS · PLP · PDP · Landing pages · Kampaně",
      icon: Settings2,
      summary:
        "Ve své současné roli propojuji business, marketing, HQ a IT přes každodenní exekuci webu: kampaňové stránky, aktualizace homepage, produktový obsah, tracking, lokalizaci a řešení problémů.",
      bullets: [
        "Exekuce webu napříč CZ, SK, CZEN a SKEN variantami + nově PL a PLEN",
        "Tracking kampaní, homepage bannery, landing pages a aktualizace PDP",
        "Dokumentace v Jira/Confluence, řešení incidentů a platformových problémů",
      ],
      angle:
        "Užitečné pro ČSOB: Umím propojit byznys požadavky s technickou realitou platformy, aniž bych ztratila detail, timing nebo ownership.",
    },
    {
      id: "discovery",
      year: "03",
      label: "Discovery redesignu ČSOB",
      title: "Pochopit public web ČSOB jako produkt",
      subtitle: "Uživatelé · byznys cíle · regulatorní požadavky · existující obsah",
      icon: Search,
      summary:
        "U redesignu public webu bych začala zmapováním klíčových cílových skupin, byznys cílů, současných problémů, vlastnictví obsahu a konverzních cílů — ještě předtím, než se pustím do vizuálního designu.",
      bullets: [
        "Zmapovat cesty veřejných, firemních i korporátních uživatelů",
        "Identifikovat mezery v obsahu, duplicity, tření a vysoce dopadová vstupní místa",
        "Sladit očekávání marketingu, produktových týmů, legal/regulatoriky a IT",
      ],
      angle:
        "Moje role: Strukturovat chaos do sdíleného pohledu na produkt. Co je důležité, proč, pro koho a jak měříme úspěch.",
    },
    {
      id: "roadmap",
      year: "04",
      label: "Roadmapa & backlog",
      title: "Proměnit požadavky v zvladatelný dodávkový systém",
      subtitle: "Backlog · user stories · akceptační kritéria · prioritizace",
      icon: Workflow,
      summary:
        "Redesign potřebuje jasný backlog, prioritizační logiku a akceptační kritéria. Přesně tady se zúročí moje zkušenost s Jira/Confluence a koordinací stakeholderů.",
      bullets: [
        "Převést byznys a uživatelské potřeby do strukturovaných user stories",
        "Definovat akceptační kritéria: obsah, UX, tracking, mobil, SEO, compliance",
        "Prioritizovat podle dopadu, závislostí a připravenosti na release",
      ],
      angle:
        "Moje role: Zajistit, že redesign není jen kreativní cvičení, ale řízený a transparentní dodávkový proces.",
    },
    {
      id: "ux",
      year: "05",
      label: "UX & konverze",
      title: "Navrhnout pro srozumitelnost, důvěru a konverzi",
      subtitle: "Navigace · hierarchie obsahu · lead generation · digitální prodej",
      icon: MousePointer2,
      summary:
        "Public web banky musí být důvěryhodný, snadno navigovatelný a komerčně užitečný. Zaměřila bych se na srozumitelnost obsahu, uživatelské cesty, vstupní body kampaní a měřitelné konverze.",
      bullets: [
        "Zlepšit navigaci, logiku layoutu a dohledatelnost klíčových produktů",
        "Propojit UX rozhodnutí s byznys KPI a trackingem konverzí",
        "Udržet obsah srozumitelný, compliant a snadno spravovatelný",
      ],
      angle:
        "Moje role: Propojit UX/design s byznys výsledky, realitou obsahu a udržovatelností platformy.",
    },
    {
      id: "launch",
      year: "06",
      label: "Launch & optimalizace",
      title: "Spustit, měřit, učit se, zlepšovat",
      subtitle: "QA · tracking · připravenost na release · kontinuální optimalizace",
      icon: Rocket,
      summary:
        "Redesign nekončí launchem. Potřebuje QA, validaci trackingu, řešení problémů, review výkonu a kontinuální zlepšování na základě reálného chování uživatelů.",
      bullets: [
        "Kontroly připravenosti na launch: obsah, mobil, SEO, tracking a legal/regulatorní detaily",
        "Post-launch řešení problémů a strukturovaný sběr zpětné vazby",
        "Kontinuální zlepšování UX a konverzí na základě dat",
      ],
      angle:
        "Moje role: Udržet ownership i po go-live. Nejen dodat redesign, ale zlepšovat public web dlouhodobě.",
    },
  ],
  en: [
    {
      id: "agency",
      year: "01",
      label: "Web project foundation",
      title: "Agency experience: websites that actually get built",
      subtitle: "Škoda Auto · BMW · VELO, Vuse, glo™ and neo™",
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
      subtitle: "B2B/B2C platforms · CMS · PLP · PDP · Landing pages · Campaigns",
      icon: Settings2,
      summary:
        "In my current role I connect business, marketing, HQ and IT through daily web execution: campaign pages, homepage updates, product content, tracking, localization and troubleshooting.",
      bullets: [
        "Web execution across CZ, SK, CZEN and SKEN variants + newly PL and PLEN",
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
      title: "Understand the ČSOB public web as a product",
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
        "My role: Structure the chaos into a shared product view. What matters, why, for whom and how we measure success.",
    },
    {
      id: "roadmap",
      year: "04",
      label: "Roadmap & backlog",
      title: "Turn requirements into a manageable delivery system",
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
      title: "Design for clarity, trust and conversion",
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
      title: "Launch, measure, learn, improve",
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
        "My role: Keep ownership after go-live. Not only deliver the redesign, but make the public web better over time.",
    },
  ],
};

const competitorsByLang = {
  cz: [
    { name: "Česká spořitelna", owner: "Erste Group (AT)", note: "Nejvíce klientů (~4,5 mil.), silný retail, moderní appka" },
    { name: "Komerční banka", owner: "Société Générale (FR) → převod vlastnictví", note: "3. největší dle klientů i bilance, probíhá změna vlastníka" },
    { name: "UniCredit Bank", owner: "UniCredit (IT)", note: "Střední velikost, firemní i retail segment" },
    { name: "Raiffeisenbank", owner: "RBI (AT)", note: "Považována za technologického lídra trhu" },
    { name: "MONETA Money Bank", owner: "sloučení s Air Bank", note: "Digital-first pozice, jednoduché UX jako diferenciátor" },
    { name: "mBank", owner: "Commerzbank (DE, přes PL)", note: "Referenční UX na CEE trhu, čistá appka" },
  ],
  en: [
    { name: "Česká spořitelna", owner: "Erste Group (AT)", note: "Most clients (~4.5M), strong retail, modern app" },
    { name: "Komerční banka", owner: "Société Générale (FR) → ownership transfer", note: "3rd largest by clients and assets, ownership change in progress" },
    { name: "UniCredit Bank", owner: "UniCredit (IT)", note: "Mid-size, corporate and retail segment" },
    { name: "Raiffeisenbank", owner: "RBI (AT)", note: "Considered a technology leader in the market" },
    { name: "MONETA Money Bank", owner: "merged with Air Bank", note: "Digital-first position, simple UX as differentiator" },
    { name: "mBank", owner: "Commerzbank (DE, via PL)", note: "UX reference point in the CEE market, clean app" },
  ],
};

const uxRoleModelsByLang = {
  cz: [
    { name: "Revolut", icon: Zap, lesson: "Zvládá komplexnost bez zahlcení — postupné odkrývání funkcí, jasná hierarchie akcí." },
    { name: "Monzo", icon: TrendingUp, lesson: "Radikální transparentnost — okamžité notifikace, kategorizace výdajů, lidský tón." },
    { name: "N26", icon: Sparkles, lesson: "Minimalistická estetika + rychlá funkčnost. Podpora nikdy dál než 2 kliky." },
    { name: "Nubank", icon: Users, lesson: "Lokalizace a teplý, ne sterilní minimalismus — jednoduchost jako důvěra, ne chudoba." },
  ],
  en: [
    { name: "Revolut", icon: Zap, lesson: "Handles complexity without overwhelming — progressive disclosure, clear action hierarchy." },
    { name: "Monzo", icon: TrendingUp, lesson: "Radical transparency — instant notifications, spend categorization, human tone." },
    { name: "N26", icon: Sparkles, lesson: "Minimalist aesthetics + fast functionality. Support never more than 2 taps away." },
    { name: "Nubank", icon: Users, lesson: "Localization and warm, non-sterile minimalism — simplicity as trust, not as lack." },
  ],
};

const bringBulletsByLang = {
  cz: [
    "Schopnost převést byznys, marketingové a regulatorní požadavky do strukturované dodávky webu",
    "Dokumentace, prioritizace a sledování problémů přes Jira/Confluence",
    "Silný ownership mindset: od plánování a exekuce po post-launch optimalizaci",
  ],
  en: [
    "Ability to translate business, marketing and regulatory requirements into structured web delivery",
    "Jira/Confluence-based documentation, prioritization and issue follow-up",
    "Strong ownership mindset: from planning and execution to post-launch optimization",
  ],
};

const UI = {
  cz: {
    roadmapLabel: "Moje cesta",
    progressLabel: "Na cestě",
    heroLine1: "Jak uvažuji o redesignu webu.",
    heroLine2: "Bigger web. Bigger step.",
    heroSub:
      "Koncept interaktivního CV, které propojuje mé zkušenosti s redesignem webových stránek agentury, současné zkušenosti s provozováním e-businessu a způsob uvažování, který bych vnesla do veřejného kanálu ČSOB.",
    activeStage: "Aktivní fáze",
    exploreStage: "Zobrazit fázi",
    csobAngle: "Úhel pohledu pro ČSOB",
    caseStudyLabel: "Case study",
    caseStudyTitle: "ČSOB Účty a karty — redesign koncept",
    caseStudyIntro:
      "ČSOB má oproti řadě konkurentů solidní a přehlednou strukturu — orientace na webu funguje dobře. Redesign proto neřeší chaos, ale zlidštění tónu a vizuální modernizaci: srovnání konkrétní podstránky (účty/karty) dnes (Before) a po zjednodušení a osvěžení vzhledu (After), inspirované přehledností nabídky u Revolutu.",
    caseStudyDisclaimer:
      "Jde o zjednodušený ilustrativní příklad mého uvažování nad vizuálním a obsahovým směřováním, nikoliv o závěr založený na UX výzkumu, datech nebo jiných relevantních podkladech.",
    beforeBtn: "Before redesign",
    afterBtn: "After redesign",
    illustrativeNote: "Ilustrativní srovnávací koncept, nikoliv skutečný obsah webu žádné konkrétní banky.",
    todayApproach: "Dnešní přístup",
    whereToGo: "Kam by šlo jít dál",
    marketContextLabel: "Market context",
    marketContextTitle: "Konkurenční prostředí a UX role models",
    competitorsTitle: "Hlavní konkurence na trhu ČR",
    roleModelsTitle: "Globální UX role models (fintech)",
    disclaimerText:
      "Toto není oficiální návrh redesignu webu ČSOB. Jde o mnou iniciovaný interaktivní koncept, který ukazuje, jak přemýšlím o vlastnictví public webu, redesignové exekuci a správě digitálního kanálu.",
    fitLabel: "Proč se na tuto roli hodím",
    fitTitle: "Why this role fits my profile",
    bringLabel: "Co bych přinesla",
    bringTitle: "Co bych přinesla redesignu public webu ČSOB",
    ctaTitle: "Máte zájem o celý profil?",
    ctaText: "Podívejte se na můj LinkedIn profil, nebo mě kontaktujte pro kompletní CV.",
    ctaLinkedin: "LinkedIn profil",
    ctaContact: "Kontakt na vyžádání",
  },
  en: {
    roadmapLabel: "My journey",
    progressLabel: "On the way",
    heroLine1: "How I think about a web redesign.",
    heroLine2: "Bigger web. Bigger step.",
    heroSub:
      "An interactive CV concept connecting my agency web redesign experience, current eBusiness ownership background and they type of thinking I would bring to the ČSOB public web channel.",
    activeStage: "Active stage",
    exploreStage: "Explore stage",
    csobAngle: "ČSOB redesign angle",
    caseStudyLabel: "Case study",
    caseStudyTitle: "ČSOB Accounts & Cards — redesign concept",
    caseStudyIntro:
      "ČSOB has a solid, clear structure compared to many competitors — orientation on the site already works well. The redesign isn't about fixing chaos, but about humanizing the tone and refreshing the visuals: a comparison of one specific subpage (accounts/cards) today (Before) and after simplification and a visual refresh (After), inspired by the clarity of Revolut's offering.",
    caseStudyDisclaimer:
      "This is a simplified, illustrative example of my thinking on visual and content direction, not a conclusion based on UX research, data, or other relevant sources.",
    beforeBtn: "Before redesign",
    afterBtn: "After redesign",
    illustrativeNote: "Illustrative comparison concept, not the actual content of any specific bank's website.",
    todayApproach: "Today's approach",
    whereToGo: "Where it could go next",
    marketContextLabel: "Market context",
    marketContextTitle: "Competitive landscape and UX role models",
    competitorsTitle: "Main competitors in the Czech market",
    roleModelsTitle: "Global fintech UX role models",
    disclaimerText:
      "This is not an official ČSOB redesign proposal. It is a self-initiated interactive concept created to show how I think about public web ownership, redesign delivery and digital channel management.",
    fitLabel: "Why this role fits",
    fitTitle: "Why this role fits my profile",
    bringLabel: "What I would bring",
    bringTitle: "What I would bring to the ČSOB public web redesign",
    ctaTitle: "Interested in the full profile?",
    ctaText: "View my LinkedIn profile or contact me for the full CV.",
    ctaLinkedin: "LinkedIn profile",
    ctaContact: "Contact available on request",
  },
};

/* ============ SECTION 1: MOJE CESTA / MY JOURNEY ============ */

function StageCard({ stage, active, onClick, t }) {
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
        {t.exploreStage} <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
      </div>
    </button>
  );
}

function MiniBrowser({ activeStage, stages, t }) {
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
              <MousePointer2 size={16} /> {t.activeStage} {stage.year}
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
          <div className="mt-14 h-fit self-start rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 shadow-lg shadow-blue-200">
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">{t.csobAngle}</p>
            <p className="mt-3 text-lg font-bold leading-snug text-white">{stage.angle}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroGraphic() {
  const nodes = [
    { x: 20, y: 130 },
    { x: 80, y: 60 },
    { x: 130, y: 150 },
    { x: 185, y: 95 },
    { x: 235, y: 155 },
    { x: 295, y: 35 },
  ];
  const pathD = nodes
    .map((n, i) => {
      if (i === 0) return `M ${n.x} ${n.y}`;
      const prev = nodes[i - 1];
      const midX = (prev.x + n.x) / 2;
      return `Q ${midX} ${prev.y}, ${midX} ${(prev.y + n.y) / 2} T ${n.x} ${n.y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 320 180"
      className="hidden w-full max-w-sm justify-self-center md:block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroLine" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke="url(#heroLine)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 6"
        opacity="0.8"
      />
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === nodes.length - 1 ? 9 : 5.5}
          fill={i === nodes.length - 1 ? "#2563eb" : "#ffffff"}
          stroke="#2563eb"
          strokeWidth="2.5"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
    </svg>
  );
}

function PresentationSection({ active, setActive, progress, lang, setLang, stages, t }) {
  const goPrev = () => setActive((a) => (a > 0 ? a - 1 : a));
  const goNext = () => setActive((a) => (a < stages.length - 1 ? a + 1 : a));

  return (
    <header className="mx-auto max-w-6xl px-6 pt-10">
      <div className="border-b border-slate-200/70 pb-6">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={heroPhoto}
                alt="Petra Pavlisová"
                className="h-12 w-12 rounded-full object-cover shadow-sm grayscale"
              />
              <p className="text-base font-bold text-slate-900">Petra Pavlisová</p>
            </div>
            <div className="flex overflow-hidden rounded-full border border-slate-300 text-xs font-bold shadow-sm">
              <button
                onClick={() => setLang("cz")}
                className={`px-3 py-1.5 transition ${lang === "cz" ? "bg-blue-700 text-white" : "text-slate-500"}`}
              >
                CZ
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition ${lang === "en" ? "bg-blue-700 text-white" : "text-slate-500"}`}
              >
                EN
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {t.progressLabel}
            </span>
            <div className="h-2 flex-1 rounded-full bg-slate-200">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm font-black text-blue-700">{progress}%</span>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          <div className="flex items-center gap-3">
            <img
              src={heroPhoto}
              alt="Petra Pavlisová"
              className="h-14 w-14 rounded-full object-cover shadow-sm grayscale"
            />
            <p className="text-lg font-bold text-slate-900">Petra Pavlisová</p>
          </div>

          <div className="flex items-center gap-3 justify-self-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {t.progressLabel}
            </span>
            <div className="h-2 w-40 rounded-full bg-slate-200">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm font-black text-blue-700">{progress}%</span>
          </div>

          <div className="flex justify-end">
            <div className="flex overflow-hidden rounded-full border border-slate-300 text-xs font-bold shadow-sm">
              <button
                onClick={() => setLang("cz")}
                className={`px-3 py-1.5 transition ${lang === "cz" ? "bg-blue-700 text-white" : "text-slate-500"}`}
              >
                CZ
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition ${lang === "en" ? "bg-blue-700 text-white" : "text-slate-500"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="grid gap-8 pt-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
            {t.heroLine1}
            <br />
            <span className="text-2xl font-bold text-blue-700 md:text-3xl">{t.heroLine2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">{t.heroSub}</p>
        </div>
        <HeroGraphic />
      </section>

      <section className="pb-4 pt-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">{t.roadmapLabel}</p>
        <div className="stage-scroll flex gap-5 overflow-x-auto px-4 pb-6 pt-3">
          {stages.map((stage, i) => (
            <StageCard key={stage.id} stage={stage} active={i === active} onClick={() => setActive(i)} t={t} />
          ))}
        </div>

        <div className="relative mt-2 px-2 md:px-14">
          <AnimatePresence mode="wait">
            <MiniBrowser activeStage={active} stages={stages} t={t} />
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

function BeforeSiteMock({ lang }) {
  const copy = {
    cz: {
      nav1: "Lidé", nav2: "Firmy a podnikatelé", nav3: "Velké firmy", nav4: "Premium",
      main1: "Účty a karty", main2: "Půjčky", main3: "Pojištění", main4: "Spoření", main5: "Investice", main6: "Bydlení",
      login: "Přihlášení", pageTitle: "Účty a karty",
      promoTitle: "Plus Konto a Poštovní účet", promoSub: "Bankovní účet s vedením zdarma",
      f1: "— Až 3 000 Kč v odměnách k novému účtu", f2: "— Online sjednání za pár minut", f3: "— Výhody a odměny ve Světě výhod",
      cta: "Více o účtu a podmínkách akce",
      tiles: ["Osobní účet", "Studentský účet", "Kreditní karta", "Operativní leasing", "Stavební spoření", "Životní pojištění", "Podílové fondy", "Penzijní spoření"],
    },
    en: {
      nav1: "People", nav2: "Business", nav3: "Large corporates", nav4: "Premium",
      main1: "Accounts & Cards", main2: "Loans", main3: "Insurance", main4: "Savings", main5: "Investments", main6: "Housing",
      login: "Log in", pageTitle: "Accounts & Cards",
      promoTitle: "Plus Account and Postal Account", promoSub: "Bank account with free maintenance",
      f1: "— Up to 3,000 CZK in rewards for a new account", f2: "— Online setup in a few minutes", f3: "— Benefits and rewards in the Rewards World",
      cta: "More about the account and promo terms",
      tiles: ["Personal account", "Student account", "Credit card", "Operating lease", "Building savings", "Life insurance", "Mutual funds", "Pension savings"],
    },
  }[lang];

  return (
    <div className="border border-[#cfe6f3] bg-white">
      <div className="flex items-center gap-3 border-b border-[#cfe6f3] bg-[#003366] px-4 py-1.5 text-[9px] font-medium text-white/70">
        <span>{copy.nav1}</span>
        <span>{copy.nav2}</span>
        <span>{copy.nav3}</span>
        <span>{copy.nav4}</span>
        <span className="ml-auto">{lang === "cz" ? "EN" : "CZ"}</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-b border-[#cfe6f3] bg-white px-4 py-3 text-[10px] font-semibold text-[#003366]">
        <span className="text-xs font-bold">LOGO BANKY</span>
        <span className="border-b-2 border-[#003366] pb-1">{copy.main1}</span>
        <span>{copy.main2}</span>
        <span>{copy.main3}</span>
        <span>{copy.main4}</span>
        <span>{copy.main5}</span>
        <span>{copy.main6}</span>
        <span className="ml-auto rounded bg-[#e56100] px-2 py-1 text-white">{copy.login}</span>
      </div>
      <div className="bg-[#003366] px-4 py-3 text-sm font-bold text-white">{copy.pageTitle}</div>
      <div className="grid gap-3 bg-[#ebf6fd] p-4 md:grid-cols-[1.1fr_1fr]">
        <div className="flex aspect-[16/10] items-center justify-center bg-[#cfe6f3] text-[9px] text-[#003366]/40">
          [ lifestyle fotografie ]
        </div>
        <div>
          <p className="text-xs font-bold text-[#003366]">{copy.promoTitle}</p>
          <p className="mt-1 text-sm font-bold text-[#003366]">{copy.promoSub}</p>
          <ul className="mt-2 space-y-1 text-[9px] text-[#003366]/70">
            <li>{copy.f1}</li>
            <li>{copy.f2}</li>
            <li>{copy.f3}</li>
          </ul>
          <button className="mt-3 bg-[#003366] px-3 py-1.5 text-[9px] font-bold text-white">{copy.cta}</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4">
        {copy.tiles.map((tl) => (
          <div key={tl} className="border border-[#cfe6f3] p-3 text-center text-[9px] font-medium leading-snug text-[#003366]">
            {tl}
          </div>
        ))}
      </div>
    </div>
  );
}

function AfterSiteMock({ lang }) {
  const copy = {
    cz: {
      nav1: "Účty", nav2: "Karty", nav3: "Hypotéky", cta: "Otevřít účet",
      title: "Najděte účet, který vám sedí.", sub: "Porovnejte 3 účty a vyberte za pár vteřin — bez čtení sazebníku.",
      plans: [
        { name: "Základní", price: "Zdarma", tone: "border-[#cfe6f3]", features: ["Platební karta zdarma", "Správa v appce"] },
        { name: "Plus", price: "99 Kč / měsíc", tone: "border-[#0099cc]", features: ["Bez poplatků v zahraničí", "Pojištění nákupů"] },
        { name: "Premium", price: "249 Kč / měsíc", tone: "border-[#003366]", features: ["Prioritní podpora", "Cestovní pojištění"] },
      ],
      select: "Vybrat",
      chips: ["Založení za 5 minut", "Bez poplatku za vedení", "Zrušení kdykoliv"],
    },
    en: {
      nav1: "Accounts", nav2: "Cards", nav3: "Mortgages", cta: "Open an account",
      title: "Find the account that fits you.", sub: "Compare 3 accounts and choose in seconds — no need to read the price list.",
      plans: [
        { name: "Basic", price: "Free", tone: "border-[#cfe6f3]", features: ["Free debit card", "Manage in the app"] },
        { name: "Plus", price: "€4 / month", tone: "border-[#0099cc]", features: ["No fees abroad", "Purchase insurance"] },
        { name: "Premium", price: "€10 / month", tone: "border-[#003366]", features: ["Priority support", "Travel insurance"] },
      ],
      select: "Select",
      chips: ["Set up in 5 minutes", "No maintenance fee", "Cancel anytime"],
    },
  }[lang];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#003366] text-xs font-bold text-white">b</div>
          <span className="text-sm font-bold text-[#003366]">banka</span>
        </div>
        <div className="hidden gap-5 text-xs font-medium text-[#003366]/60 md:flex">
          <span>{copy.nav1}</span>
          <span>{copy.nav2}</span>
          <span>{copy.nav3}</span>
        </div>
        <button className="rounded-full bg-[#e56100] px-4 py-1.5 text-xs font-bold text-white shadow-sm">{copy.cta}</button>
      </div>

      <div className="px-6 py-10">
        <h3 className="text-2xl font-black leading-tight text-[#003366]">{copy.title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">{copy.sub}</p>
      </div>

      <div className="grid gap-4 border-t border-slate-100 p-6 md:grid-cols-3">
        {copy.plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border-2 ${p.tone} p-4`}>
            <p className="text-sm font-bold text-[#003366]">{p.name}</p>
            <p className="mt-1 text-xs font-medium text-[#0099cc]">{p.price}</p>
            <ul className="mt-3 space-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-slate-600">— {f}</li>
              ))}
            </ul>
            <button className="mt-4 w-full rounded-full border border-[#003366] py-1.5 text-xs font-bold text-[#003366]">
              {copy.select}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-slate-100 px-6 py-5">
        {copy.chips.map((c) => (
          <span key={c} className="rounded-full bg-[#ebf6fd] px-3 py-1.5 text-[11px] font-medium text-[#003366]">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function WhyItWorksPanel({ lang, t }) {
  const items = {
    cz: {
      before: [
        "Solidní, přehledná struktura — orientace funguje, ale tón zůstává formální a produktově orientovaný",
        "Disclaimer a podmínky hned u hlavní nabídky, ještě než uživatel ví, jestli je produkt pro něj",
        "Více produktů vedle sebe se stejnou vizuální váhou — volba je na uživateli",
        "Odborné názvy produktů předpokládají, že uživatel ví, co hledá",
      ],
      after: [
        "Stejná nabídka, srozumitelnější vstup: jedna otázka, jedna odpověď",
        "Rovnou to, co lidi zajímá nejvíc — kolik to stojí, jak dlouho to trvá, co budu potřebovat",
        "Důvěra řešena aktivně — bez skrytých poplatků, žádné papírování předem",
        "Méně rovnocenných voleb najednou, jasnější první krok",
      ],
    },
    en: {
      before: [
        "Solid, clear structure — orientation works, but the tone stays formal and product-oriented",
        "Disclaimer and terms right next to the main offer, before the user knows if the product is for them",
        "Multiple products side by side with equal visual weight — the choice is left to the user",
        "Technical product names assume the user already knows what they're looking for",
      ],
      after: [
        "Same offering, clearer entry point: one question, one answer",
        "Straight to what people care about most — cost, time, what's needed",
        "Trust addressed proactively — no hidden fees, no paperwork upfront",
        "Fewer equally-weighted choices at once, clearer first step",
      ],
    },
  }[lang];

  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-[#cfe6f3] bg-[#ebf6fd] p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-[#003366]/60">{t.todayApproach}</p>
        <ul className="mt-3 space-y-2.5">
          {items.before.map((b) => (
            <li key={b} className="flex gap-2 text-xs leading-relaxed text-[#003366]">
              <Circle size={6} className="mt-1.5 shrink-0 fill-[#003366]/40 text-[#003366]/40" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">{t.whereToGo}</p>
        <ul className="mt-3 space-y-2.5">
          {items.after.map((a) => (
            <li key={a} className="flex gap-2 text-xs leading-relaxed text-blue-900">
              <TrendingUp size={13} className="mt-0.5 shrink-0 text-blue-600" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompetitiveStudy({ competitors, uxRoleModels, t }) {
  return (
    <section className="mt-20">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-700">{t.marketContextLabel}</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950">{t.marketContextTitle}</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
            <Building2 size={16} /> {t.competitorsTitle}
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
            <Sparkles size={16} /> {t.roleModelsTitle}
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

function WhatIBringSection({ t, bullets }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-4">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-700">{t.bringLabel}</p>
      <h2 className="mt-2 max-w-2xl text-2xl font-black leading-tight text-slate-950">{t.bringTitle}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
            <BadgeCheck className="mt-0.5 shrink-0 text-blue-600" size={18} />
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}

function FinalCTA({ t }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-black text-white">{t.ctaTitle}</h2>
        <p className="mt-3 text-base text-white/80">{t.ctaText}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/petra-pavlis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5"
          >
            <Link2 size={16} /> {t.ctaLinkedin}
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white">
            <Mail size={16} /> {t.ctaContact}
          </span>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/60">{t.disclaimerText}</p>
      </div>
    </section>
  );
}

function CaseStudySection({ lang, t, competitors, uxRoleModels }) {
  const [mode, setMode] = useState("before");
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">{t.caseStudyLabel}</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">{t.caseStudyTitle}</h2>
          </div>
          <div className="inline-flex overflow-hidden rounded-full border border-slate-300 text-xs font-bold shadow-sm">
            <button
              onClick={() => setMode("before")}
              className={`px-5 py-2.5 transition ${mode === "before" ? "bg-[#0099cc] text-white" : "text-slate-600"}`}
            >
              {t.beforeBtn}
            </button>
            <button
              onClick={() => setMode("after")}
              className={`px-5 py-2.5 transition ${mode === "after" ? "bg-[#003366] text-white" : "text-slate-600"}`}
            >
              {t.afterBtn}
            </button>
          </div>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{t.caseStudyIntro}</p>
        <p className="mt-3 max-w-2xl text-xs italic leading-relaxed text-slate-400">{t.caseStudyDisclaimer}</p>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + lang}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {mode === "before" ? <BeforeSiteMock lang={lang} /> : <AfterSiteMock lang={lang} />}
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">{t.illustrativeNote}</p>

        <WhyItWorksPanel lang={lang} t={t} />
        <CompetitiveStudy competitors={competitors} uxRoleModels={uxRoleModels} t={t} />
      </div>
    </section>
  );
}

/* ============ APP ============ */

export default function App() {
  const [lang, setLang] = useState("cz");
  const [active, setActive] = useState(0);

  const stages = stagesByLang[lang];
  const competitors = competitorsByLang[lang];
  const uxRoleModels = uxRoleModelsByLang[lang];
  const t = UI[lang];

  const progress = useMemo(() => Math.round(((active + 1) / stages.length) * 100), [active, stages.length]);

  const bringBullets = bringBulletsByLang[lang];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_50%,#f8fafc_100%)] text-slate-900">
      <PresentationSection
        active={active}
        setActive={setActive}
        progress={progress}
        lang={lang}
        setLang={setLang}
        stages={stages}
        t={t}
      />
      <div className="pt-6">
        <WhatIBringSection t={t} bullets={bringBullets} />
      </div>
      <main className="pb-6 pt-10">
        <CaseStudySection lang={lang} t={t} competitors={competitors} uxRoleModels={uxRoleModels} />
      </main>
      <FinalCTA t={t} />
    </div>
  );
}
