import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, ChevronDown, Brain, CloudRain, Waves,
  SearchX, MessageCircleOff, Moon, Sun, Wind, BookOpen,
  Home, PenLine, Target, Milestone, ShieldCheck,
  Lock, Infinity as InfinityIcon, Smartphone,
  KeyRound, Feather, Check, Leaf, ShoppingBag,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Healing Journal" },
      { name: "description", content: "A private educational wellness app for women healing from CPTSD, narcissistic abuse, and nervous system dysregulation." },
      { property: "og:title", content: "The Healing Journal" },
      { property: "og:description", content: "A private educational wellness app for women healing from CPTSD, narcissistic abuse, and nervous system dysregulation." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const BEACONS = "https://shop.beacons.ai/silentlyshifting/c481e8d0-d034-4b61-bed2-b53e7cc68a10";

const OLIVE  = "#39442B";
const SAGE   = "#6F7F5C";
const MOSS   = "#A4AD94";
const PALE   = "#D9DCCF";
const IVORY  = "#FDFDF1";

const mirrorRows = [
  { icon: Brain,             text: "You overthink every interaction and do not know why." },
  { icon: CloudRain,         text: "You feel guilty for things that were never your fault." },
  { icon: Waves,             text: "You are either numb or overwhelmed — there is no in between." },
  { icon: SearchX,           text: "You have searched for answers more times than you would like to admit." },
  { icon: MessageCircleOff,  text: "You know something happened to you. You just do not always have the words for it." },
  { icon: Moon,              text: "You are tired of holding all of this alone." },
];

const features = [
  { icon: Home,      title: "Home — Your Daily Anchor",                       body: "A personalised greeting using your first name, the time of day, and where you are in your journey. Rotating affirmations written for trauma survivors. Daily mood check-in, intention setting, and calm quick-access to every section." },
  { icon: BookOpen,  title: "Learn — Understand What Happened to You",        body: "A full educational library covering CPTSD, narcissistic abuse, gaslighting, manipulation, trauma bonding, fawning, love bombing, intermittent reinforcement, and more — in plain everyday language with no clinical jargon and no judgment." },
  { icon: Wind,      title: "Regulate — When Your Body Will Not Calm Down",   body: "Six guided nervous system tools: animated breathing, sensory grounding, trauma-informed body scan, cold water reset, trauma release shaking, and an SOS crisis tool — each with a plain explanation of what it is and how it works." },
  { icon: PenLine,   title: "Journal — Your Private Protected Space",         body: "Twenty trauma-informed prompts rotating daily. Free writing always available. Mood tagging. Every entry encrypted and saved to your personal cloud account. No one else can read your words — ever." },
  { icon: Target,    title: "Goals — The Small Victories That Actually Matter", body: "Personal healing goals entirely your own. Visual progress tracking with a slider. Ten daily win checkboxes that reset each morning. A streak counter for every day you show up for yourself." },
  { icon: Milestone, title: "Journey — Watch Yourself Heal",                  body: "A visual timeline of every entry written. A mood trend chart. A Then vs Now comparison of your first and most recent entry. A Letter to Future Me that seals today and unlocks on a date you choose." },
];

const steps = [
  { num: "01", icon: KeyRound,    title: "Create your free account",  body: "Sign up in under a minute with just your email. No card, no commitment. Your private space is created instantly." },
  { num: "02", icon: Feather,     title: "Explore the app for free",  body: "Try the daily affirmation, take a mood check-in, and preview the Learn library and a guided breathing tool — so you can feel the space before you decide." },
  { num: "03", icon: ShoppingBag, title: "Unlock everything for life", body: "When you're ready, upgrade once for $15 to unlock the full Learn library, all six regulation tools, the private journal, goals, and your healing journey timeline. One payment, lifetime access." },
];

const tiers = [
  {
    name: "Free preview", price: "$0", sub: "Always free · No card needed",
    cta: "Create free account", href: BEACONS, featured: false,
    features: [
      "Personal home with daily affirmation",
      "Daily mood check-in",
      "Preview of the Learn library",
      "One guided breathing tool",
    ],
  },
  {
    name: "Lifetime access", price: "$15", sub: "One-time · Yours forever",
    cta: "Get Instant Access — $15", href: BEACONS, featured: true,
    features: [
      "Full Learn library — CPTSD, narcissistic abuse, more",
      "All six nervous-system regulation tools",
      "Private encrypted journal with 20 prompts",
      "Goals, streaks & daily wins",
      "Journey timeline & Letter to Future Me",
      "Any device · No app store · No subscription",
    ],
  },
];

const faqs = [
  { q: "Is this the same as therapy?",            a: "No. The Healing Journal is an educational self-guided wellness tool. It does not provide clinical treatment and does not create a therapist-client relationship of any kind. It is a private space to learn, reflect, and document — not a replacement for professional mental health support." },
  { q: "What if I am not sure I have CPTSD?",     a: "You do not need a diagnosis to use this app. Many women who find The Healing Journal most useful have never been formally diagnosed. They simply know that something happened, that they have not fully recovered, and that they want a private space to begin to understand it." },
  { q: "Is my journal actually private?",         a: "Yes. Your entries are encrypted and stored in your personal cloud account. No one else can access them — including the creator. You can also delete your entire account and all data permanently at any time from inside the app." },
  { q: "What do I receive after purchasing?",     a: "You receive an instant download PDF containing your unique personal access code and step-by-step setup instructions. The app works in any web browser on any device. No app store, no subscription, no expiry date." },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Nav() {
  const y = useScrollY();
  const condensed = y > 40;
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        paddingTop: condensed ? 14 : 22,
        paddingBottom: condensed ? 14 : 22,
        background: condensed ? "rgba(253,253,241,0.82)" : "transparent",
        backdropFilter: condensed ? "blur(18px)" : "none",
        borderBottom: condensed ? "1px solid rgba(57,68,43,0.08)" : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <Leaf size={18} style={{ color: OLIVE }} />
        <span className="font-body" style={{ color: OLIVE, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500 }}>
          The Healing Journal
        </span>
      </div>
      <a
        href={BEACONS}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body"
        style={{
          padding: "10px 22px",
          borderRadius: 999,
          background: OLIVE,
          color: IVORY,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 500,
          transition: "background 0.5s ease, transform 0.5s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = SAGE; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = OLIVE; }}
      >
        Get Access — $15
      </a>
    </nav>
  );
}

function Eyebrow({ children, color = SAGE }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-body reveal inline-block" style={{ color, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 500 }}>
      {children}
    </span>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-[720px] mx-auto">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="reveal" style={{ borderTop: i === 0 ? "1px solid rgba(57,68,43,0.12)" : undefined, borderBottom: "1px solid rgba(57,68,43,0.12)", transitionDelay: `${i * 0.06}s` }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left"
              style={{ padding: "28px 4px", cursor: "pointer", background: "transparent", border: "none" }}
            >
              <span className="font-display" style={{ color: OLIVE, fontSize: 22, lineHeight: 1.4, fontWeight: 400 }}>{f.q}</span>
              <span style={{ color: SAGE, fontSize: 22, lineHeight: 1, transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", marginLeft: 24, flexShrink: 0 }}>+</span>
            </button>
            <div style={{ maxHeight: isOpen ? 600 : 0, overflow: "hidden", transition: "max-height 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
              <p className="font-body font-light" style={{ padding: "0 4px 32px", maxWidth: 580, fontSize: 15, color: SAGE, lineHeight: 1.95 }}>
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Index() {
  useReveal();
  const y = useScrollY();

  return (
    <div className="relative w-full overflow-x-hidden" style={{ background: IVORY, color: OLIVE }}>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ paddingTop: 120, paddingBottom: 80 }}>
        {/* ambient drift */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            style={{
              position: "absolute", top: "12%", left: "18%", width: 520, height: 520, borderRadius: "50%",
              background: SAGE, filter: "blur(140px)", opacity: 0.22,
              transform: `translate3d(0, ${y * -0.15}px, 0)`,
              transition: "transform 0.1s linear",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: "8%", right: "12%", width: 600, height: 600, borderRadius: "50%",
              background: MOSS, filter: "blur(160px)", opacity: 0.28,
              transform: `translate3d(0, ${y * -0.08}px, 0)`,
              transition: "transform 0.1s linear",
            }}
          />
        </div>

        <div className="reveal mb-10" style={{ transitionDelay: "0.05s" }}>
          <span className="inline-flex items-center gap-2 font-body" style={{ padding: "8px 18px", borderRadius: 999, border: `1px solid ${PALE}`, color: SAGE, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 500, background: "rgba(253,253,241,0.6)", backdropFilter: "blur(10px)" }}>
            <Sparkles size={11} /> A private space for your healing
          </span>
        </div>

        <h1
          className="reveal font-display"
          style={{
            color: OLIVE,
            fontSize: "clamp(44px, 8.5vw, 124px)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            maxWidth: 1080,
            transitionDelay: "0.15s",
          }}
        >
          You are not too much.
          <br />
          You were surrounded by{" "}
          <span className="font-italic" style={{ color: SAGE }}>too little.</span>
        </h1>

        <p
          className="reveal font-italic mt-10"
          style={{
            fontSize: "clamp(17px, 1.4vw, 21px)",
            color: SAGE,
            lineHeight: 1.85,
            maxWidth: 580,
            transitionDelay: "0.32s",
          }}
        >
          The Healing Journal is a private digital companion for women healing from CPTSD, narcissistic abuse, and nervous system dysregulation.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center gap-4 mt-14" style={{ transitionDelay: "0.5s" }}>
          <a
            href={BEACONS}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{
              padding: "18px 38px",
              borderRadius: 999,
              background: OLIVE,
              color: IVORY,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              boxShadow: "0 14px 40px rgba(57,68,43,0.18)",
              transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), background 0.5s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 22px 60px rgba(57,68,43,0.28)"; e.currentTarget.style.background = SAGE; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(57,68,43,0.18)"; e.currentTarget.style.background = OLIVE; }}
          >
            Create free account
          </a>
          <a
            href="#pricing"
            className="font-body story-link"
            style={{ color: OLIVE, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500, padding: "18px 12px" }}
          >
            See plans
          </a>
        </div>

        <p className="reveal font-body mt-6" style={{ fontSize: 10, color: MOSS, letterSpacing: "0.2em", textTransform: "uppercase", transitionDelay: "0.65s" }}>
          Free to start · Upgrade once for $15 · Lifetime access
        </p>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-bounce">
          <ChevronDown size={18} style={{ color: MOSS }} />
        </div>
      </section>

      {/* MIRROR — does this sound familiar */}
      <section className="relative px-6" style={{ padding: "200px 24px 200px" }}>
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-24">
            <Eyebrow color={MOSS}>Does this sound familiar</Eyebrow>
            <h2
              className="reveal font-display mt-8"
              style={{ color: OLIVE, fontSize: "clamp(34px, 5.2vw, 66px)", lineHeight: 1.08, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}
            >
              You left. Or maybe you stayed.
              <br />
              Either way, something in you{" "}
              <span className="font-italic" style={{ color: SAGE }}>never fully came back.</span>
            </h2>
            <p className="reveal font-italic mt-10 mx-auto" style={{ fontSize: 18, color: SAGE, lineHeight: 1.95, maxWidth: 620, transitionDelay: "0.25s" }}>
              That low hum of anxiety that never quite goes away. The way certain words, silences, or expressions send your body into a panic it cannot explain. The exhaustion of being hypervigilant in every room you walk into.
            </p>
          </div>

          <div className="flex flex-col">
            {mirrorRows.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={i}
                  className="reveal flex items-baseline gap-8 md:gap-12"
                  style={{
                    padding: "32px 4px",
                    borderTop: i === 0 ? "1px solid rgba(57,68,43,0.10)" : undefined,
                    borderBottom: "1px solid rgba(57,68,43,0.10)",
                    transitionDelay: `${i * 0.08}s`,
                  }}
                >
                  <span className="font-body shrink-0" style={{ color: MOSS, fontSize: 11, letterSpacing: "0.28em", fontWeight: 500, width: 30 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon size={18} style={{ color: SAGE, flexShrink: 0, transform: "translateY(4px)" }} />
                  <p className="font-display" style={{ color: OLIVE, fontSize: "clamp(20px, 2.2vw, 28px)", lineHeight: 1.45, fontWeight: 400 }}>
                    {r.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="reveal font-display italic text-center mt-24" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: SAGE, lineHeight: 1.5 }}>
            You found this for a reason.
          </p>
        </div>
      </section>

      {/* INTRODUCING — dark olive cinematic band */}
      <section className="relative px-6" style={{ background: OLIVE, color: IVORY, padding: "200px 24px" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <Eyebrow color={MOSS}>Introducing</Eyebrow>
          <h2 className="reveal font-display mt-8" style={{ fontSize: "clamp(34px, 5.2vw, 68px)", lineHeight: 1.08, letterSpacing: "-0.015em", fontWeight: 400, color: IVORY, transitionDelay: "0.1s" }}>
            A private space that finally
            <br />
            makes sense of{" "}
            <span className="font-italic" style={{ color: MOSS }}>what you have been through.</span>
          </h2>

          <div className="reveal mt-16 grid md:grid-cols-3 gap-12 text-left" style={{ transitionDelay: "0.25s" }}>
            <p className="font-body font-light" style={{ fontSize: 15, lineHeight: 2, color: "rgba(253,253,241,0.82)" }}>
              The Healing Journal is not therapy. It is not a course. It is not another self-help book telling you to journal your way to happiness.
            </p>
            <p className="font-body font-light" style={{ fontSize: 15, lineHeight: 2, color: "rgba(253,253,241,0.82)" }}>
              It is a private, interactive digital companion built specifically for women navigating CPTSD, narcissistic abuse recovery, trauma bonding, and nervous system dysregulation.
            </p>
            <p className="font-body font-light" style={{ fontSize: 15, lineHeight: 2, color: "rgba(253,253,241,0.82)" }}>
              A place to understand what happened, to calm your body when it spirals, and to document your healing so you can one day look back and see how far you came.
            </p>
          </div>

          {/* phone mockup */}
          <div className="reveal mt-24 mx-auto relative" style={{ width: 280, height: 540, transitionDelay: "0.4s" }}>
            <div
              style={{
                position: "absolute", inset: -40, borderRadius: "50%",
                background: SAGE, filter: "blur(80px)", opacity: 0.45,
              }}
            />
            <div
              className="relative h-full flex flex-col gap-3 p-4"
              style={{
                borderRadius: 40,
                background: "rgba(253,253,241,0.08)",
                border: "1px solid rgba(253,253,241,0.18)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div style={{ borderRadius: 14, padding: 14, background: "rgba(253,253,241,0.10)", border: "1px solid rgba(253,253,241,0.12)" }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Sun size={13} style={{ color: MOSS }} />
                  <span className="font-body" style={{ color: IVORY, fontSize: 11 }}>Good evening</span>
                </div>
                <p className="font-italic" style={{ color: "rgba(253,253,241,0.7)", fontSize: 10 }}>You came back. That matters.</p>
              </div>
              <div style={{ borderRadius: 14, padding: 14, background: "rgba(253,253,241,0.10)", border: "1px solid rgba(253,253,241,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Wind size={13} style={{ color: MOSS }} />
                  <span className="font-body" style={{ color: IVORY, fontSize: 11 }}>4-7-8 Breathing</span>
                </div>
                <div className="flex justify-center py-3">
                  <div className="breath-pulse" style={{ width: 40, height: 40, borderRadius: "50%", background: `radial-gradient(circle, ${MOSS}, ${SAGE})` }} />
                </div>
              </div>
              <div className="flex-1" style={{ borderRadius: 14, padding: 14, background: "rgba(253,253,241,0.10)", border: "1px solid rgba(253,253,241,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={13} style={{ color: MOSS }} />
                  <span className="font-body" style={{ color: IVORY, fontSize: 11 }}>Today's Entry</span>
                </div>
                <div className="space-y-2">
                  <div style={{ height: 5, borderRadius: 4, background: "rgba(253,253,241,0.18)" }} />
                  <div style={{ height: 5, borderRadius: 4, background: "rgba(253,253,241,0.18)", width: "78%" }} />
                  <div style={{ height: 5, borderRadius: 4, background: "rgba(253,253,241,0.18)", width: "60%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-6" style={{ padding: "200px 24px" }}>
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-24 max-w-[700px] mx-auto">
            <Eyebrow>Inside the journal</Eyebrow>
            <h2 className="reveal font-display mt-8" style={{ color: OLIVE, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}>
              Six rooms. <span className="font-italic" style={{ color: SAGE }}>One private home.</span>
            </h2>
            <p className="reveal font-body font-light mt-6" style={{ fontSize: 16, color: SAGE, lineHeight: 1.9, transitionDelay: "0.2s" }}>
              Everything you need for exactly where you are right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="reveal group"
                  style={{
                    padding: "44px 4px",
                    borderTop: "1px solid rgba(57,68,43,0.10)",
                    transitionDelay: `${(i % 2) * 0.1 + Math.floor(i / 2) * 0.05}s`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Icon size={20} style={{ color: SAGE, transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} />
                    <span className="font-body" style={{ color: MOSS, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500 }}>
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>
                  <h3 className="font-display mb-4" style={{ color: OLIVE, fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.25, fontWeight: 400 }}>
                    {f.title}
                  </h3>
                  <p className="font-body font-light" style={{ fontSize: 14, color: SAGE, lineHeight: 1.95, maxWidth: 460 }}>
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative px-6" style={{ padding: "200px 24px", background: PALE }}>
        <div className="max-w-[820px] mx-auto text-center">
          <div className="font-display select-none" style={{ fontSize: 140, color: SAGE, opacity: 0.25, lineHeight: 0.6, height: 60, marginBottom: 20 }}>
            "
          </div>
          <p className="reveal font-display italic" style={{ color: OLIVE, fontSize: "clamp(26px, 3.4vw, 42px)", lineHeight: 1.5, fontWeight: 400 }}>
            You did not imagine it.<br />
            You were not too sensitive.<br />
            You were not too much.<br />
            You were in something real —<br />
            and you survived it. <span style={{ color: SAGE }}>Now you get to heal.</span>
          </p>
          <div className="reveal mt-16 font-body" style={{ color: MOSS, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 500, transitionDelay: "0.2s" }}>
            — The Healing Journal
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps */}
      <section className="relative px-6" style={{ padding: "200px 24px" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-32 max-w-[640px] mx-auto">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="reveal font-display mt-8" style={{ color: OLIVE, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}>
              Start free. <span className="font-italic" style={{ color: SAGE }}>Upgrade when you're ready.</span>
            </h2>
            <p className="reveal font-body font-light mt-6" style={{ fontSize: 16, color: SAGE, lineHeight: 1.9, transitionDelay: "0.2s" }}>
              No card to begin, no pressure to upgrade. Feel the space first, decide later.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="reveal grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-16 items-start"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="font-display" style={{ color: PALE, fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
                    {s.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <Icon size={18} style={{ color: SAGE }} />
                      <span className="font-body" style={{ color: MOSS, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500 }}>
                        Step {s.num}
                      </span>
                    </div>
                    <h3 className="font-display mb-5" style={{ color: OLIVE, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.2, fontWeight: 400 }}>
                      {s.title}
                    </h3>
                    <p className="font-body font-light" style={{ fontSize: 16, color: SAGE, lineHeight: 1.95, maxWidth: 560 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRIVACY PROMISE */}
      <section className="relative px-6" style={{ padding: "180px 24px", background: OLIVE, color: IVORY }}>
        <div className="max-w-[760px] mx-auto text-center">
          <ShieldCheck size={28} style={{ color: MOSS, margin: "0 auto 24px" }} />
          <Eyebrow color={MOSS}>Your privacy matters</Eyebrow>
          <h2 className="reveal font-display mt-8" style={{ color: IVORY, fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.15, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}>
            What you write here belongs to <span className="font-italic" style={{ color: MOSS }}>no one but you.</span>
          </h2>
          <p className="reveal font-body font-light mt-8 mx-auto" style={{ fontSize: 16, color: "rgba(253,253,241,0.82)", lineHeight: 2, maxWidth: 620, transitionDelay: "0.2s" }}>
            Every journal entry you write is stored in your private encrypted cloud account. No one — including the creator of this app — can read your words. Your healing history is not a data point. It is not sold, shared, or seen. It is yours. Completely and always.
          </p>
          <div className="reveal flex flex-col items-center gap-3 mt-12" style={{ transitionDelay: "0.3s" }}>
            {[
              "Private encrypted cloud storage",
              "Unique access code — one account, one person",
              "Full data deletion available anytime from inside the app",
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check size={15} style={{ color: MOSS, flexShrink: 0 }} />
                <span className="font-body" style={{ color: IVORY, fontSize: 14 }}>{row}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6" style={{ padding: "200px 24px" }}>
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-20">
            <Eyebrow>Frequently asked</Eyebrow>
            <h2 className="reveal font-display mt-8" style={{ color: OLIVE, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.1, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}>
              Questions you <span className="font-italic" style={{ color: SAGE }}>might have.</span>
            </h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative px-6" style={{ padding: "180px 24px 200px", background: PALE }}>
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-20 max-w-[640px] mx-auto">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="reveal font-display mt-8" style={{ color: OLIVE, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}>
              A plan that <span className="font-italic" style={{ color: SAGE }}>grows with you.</span>
            </h2>
            <p className="reveal font-body font-light mt-6" style={{ fontSize: 16, color: SAGE, lineHeight: 1.9, transitionDelay: "0.2s" }}>
              Start free today. Upgrade once — never again — when the space feels like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[860px] mx-auto items-stretch">
            {tiers.map((t, i) => (
              <div
                key={i}
                className="reveal relative flex flex-col"
                style={{
                  padding: "48px 38px",
                  borderRadius: 32,
                  background: t.featured ? OLIVE : IVORY,
                  color: t.featured ? IVORY : OLIVE,
                  border: t.featured ? "1px solid rgba(253,253,241,0.12)" : `1px solid ${PALE}`,
                  boxShadow: t.featured ? "0 30px 80px rgba(57,68,43,0.30)" : "0 10px 30px rgba(57,68,43,0.06)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                {t.featured && (
                  <div
                    className="absolute top-5 right-5 font-body"
                    style={{ padding: "6px 12px", borderRadius: 999, background: MOSS, color: OLIVE, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600 }}
                  >
                    Most chosen
                  </div>
                )}
                <div className="font-body mb-5" style={{ color: t.featured ? MOSS : MOSS, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500 }}>
                  {t.name}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display" style={{ fontSize: 64, lineHeight: 1, letterSpacing: "-0.02em", color: t.featured ? IVORY : OLIVE }}>{t.price}</span>
                </div>
                <p className="font-body mb-10" style={{ color: t.featured ? "rgba(253,253,241,0.65)" : MOSS, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {t.sub}
                </p>

                <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 font-body font-light" style={{ color: t.featured ? "rgba(253,253,241,0.88)" : SAGE, fontSize: 14, lineHeight: 1.55 }}>
                      <Check size={14} style={{ color: t.featured ? MOSS : SAGE, flexShrink: 0, marginTop: 4 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-body"
                  style={{
                    padding: "16px 24px",
                    borderRadius: 999,
                    background: t.featured ? IVORY : OLIVE,
                    color: t.featured ? OLIVE : IVORY,
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.opacity = "0.9"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.opacity = "1"; }}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 font-body" style={{ color: SAGE, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <span className="flex items-center gap-2"><Lock size={12} /> Encrypted & private</span>
            <span className="flex items-center gap-2"><InfinityIcon size={12} /> Lifetime access</span>
            <span className="flex items-center gap-2"><Smartphone size={12} /> Any device</span>
            <span className="flex items-center gap-2"><ShieldCheck size={12} /> One-time purchase</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6" style={{ padding: "180px 24px", background: IVORY }}>
        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="reveal font-display" style={{ color: OLIVE, fontSize: "clamp(40px, 6.5vw, 84px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 400 }}>
            Begin where <span className="font-italic" style={{ color: SAGE }}>you are.</span>
          </h2>
          <p className="reveal font-italic mt-8 mx-auto" style={{ fontSize: 18, color: SAGE, lineHeight: 1.9, maxWidth: 520, transitionDelay: "0.15s" }}>
            One small, private decision. The space will be here when you're ready.
          </p>
          <div className="reveal mt-12" style={{ transitionDelay: "0.3s" }}>
            <a
              href={BEACONS}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-block"
              style={{
                padding: "20px 44px",
                borderRadius: 999,
                background: OLIVE,
                color: IVORY,
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
                boxShadow: "0 14px 40px rgba(57,68,43,0.18)",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), background 0.5s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 22px 60px rgba(57,68,43,0.28)"; e.currentTarget.style.background = SAGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(57,68,43,0.18)"; e.currentTarget.style.background = OLIVE; }}
            >
              Get Instant Access — $15
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16" style={{ borderTop: "1px solid rgba(57,68,43,0.10)", background: IVORY }}>
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <Leaf size={16} style={{ color: OLIVE }} />
            <span className="font-body" style={{ color: OLIVE, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 500 }}>
              The Healing Journal
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body" style={{ color: SAGE, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>
            <Link to="/disclaimer" className="story-link" style={{ color: SAGE }}>Disclaimer</Link>
            <Link to="/privacy" className="story-link" style={{ color: SAGE }}>Privacy</Link>
            <Link to="/terms" className="story-link" style={{ color: SAGE }}>Terms</Link>
            <a href="mailto:hello@thehealingjournal.app" className="story-link" style={{ color: SAGE }}>Contact</a>
          </div>
          <div className="font-body" style={{ color: MOSS, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            © {new Date().getFullYear()} · Educational tool only
          </div>
        </div>
      </footer>
    </div>
  );
}
