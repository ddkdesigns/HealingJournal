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

const BEACONS = "https://thehealingjournal.lovable.app/";

const OLIVE  = "#5F4B58";
const SAGE   = "#9B8494";
const MOSS   = "#B98286";
const PALE   = "#DDE5DC";
const IVORY  = "#F7F3EE";

const mirrorRows = [
  { icon: Brain,             text: "You replay conversations long after they happened." },
  { icon: CloudRain,         text: "You question whether you were the problem." },
  { icon: Waves,             text: "You feel guilty for setting boundaries." },
  { icon: SearchX,           text: "You can be completely fine one moment, and suddenly overwhelmed the next." },
  { icon: MessageCircleOff,  text: "You understand what happened, but your body still reacts like it is happening now." },
  { icon: Moon,              text: "You have read the books and saved the posts, and some days you still do not know what you are feeling." },
];

const features = [
  { icon: Home,      label: "Home",     title: "A place to begin your day.",                                  body: "Check in with yourself, set an intention, see a daily affirmation, and quickly access the tools you need." },
  { icon: BookOpen,  label: "Learn",    title: "Put words to what you've experienced.",                        body: "Explore plain-language education around CPTSD, narcissistic abuse, gaslighting, trauma bonding, fawning, manipulation, and more. No complicated clinical language. No judgment." },
  { icon: Wind,      label: "Regulate", title: "For the moments when your body needs help slowing down.",      body: "Explore guided breathing, sensory grounding, body scans, cold-water resets, trauma-release movement, and an SOS tool." },
  { icon: PenLine,   label: "Journal",  title: "Your words. Your space. Your story.",                          body: "Use guided prompts or simply write what's on your mind. Capture your thoughts, moods, realizations, and the things you aren't ready to say out loud." },
  { icon: Target,    label: "Goals",    title: "Healing doesn't have to mean huge milestones.",                body: "Set personal goals, track the small wins, and notice the days you showed up for yourself, even when showing up felt hard." },
  { icon: Milestone, label: "Journey",  title: "See the progress you couldn't see while you were living it.",  body: "Look back at your entries, notice changes in your mood, compare where you started to where you are now, and write a letter to the future version of you." },
];

const steps = [
  { num: "01", icon: KeyRound,    title: "Create your free account", body: "Sign up in under a minute. No credit card. No commitment." },
  { num: "02", icon: Feather,     title: "Explore the journal",      body: "Take a mood check-in, explore the Learn section, try a regulation tool, and get a feel for the space." },
  { num: "03", icon: ShoppingBag, title: "Make it yours",            body: "When you're ready, unlock the full experience for one payment of $15. No monthly subscription. No recurring charges. Lifetime access." },
];

const tiers = [
  {
    name: "Free preview", price: "$0", sub: "Start without a commitment",
    cta: "Start Free", href: BEACONS, featured: false,
    features: [
      "Personal home with daily affirmation",
      "Daily mood check-in",
      "A look inside the Learn section",
      "One guided breathing tool",
    ],
  },
  {
    name: "Lifetime access", price: "$15", sub: "One payment · Yours forever",
    cta: "Get Lifetime Access — $15", href: BEACONS, featured: true,
    features: [
      "Full educational library",
      "Six regulation tools",
      "Private journal + guided prompts",
      "Personal goals + daily wins",
      "Healing journey timeline",
      "Letter to Future Me",
      "Any device",
      "No subscription",
      "Lifetime access",
    ],
  },
];

const faqs = [
  { q: "Is this the same as therapy?",        a: "No. The Healing Journal is an educational, self-guided wellness tool for reflection, learning, and personal awareness. It isn't a replacement for professional mental health care or clinical treatment." },
  { q: "Do I need a diagnosis to use it?",    a: "No. You don't need a diagnosis, the right words, or a clear explanation of what happened. If you simply want a quiet place to understand yourself better, you are welcome here." },
  { q: "Is my journal actually private?",     a: "Yes. Your journal is stored in your private encrypted account. Your words aren't content to be shared or sold. You can permanently delete your account and your data whenever you choose." },
  { q: "What happens when I upgrade?",        a: "One payment of $15 unlocks the full experience for life. No monthly subscription and no recurring charges. It works in any web browser, on any device." },
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
        background: condensed ? "rgba(252,250,247,0.82)" : "transparent",
        backdropFilter: condensed ? "blur(18px)" : "none",
        borderBottom: condensed ? "1px solid rgba(53,51,55,0.08)" : "1px solid transparent",
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
        Get Lifetime Access — $15
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
          <div key={i} className="reveal" style={{ borderTop: i === 0 ? "1px solid rgba(53,51,55,0.12)" : undefined, borderBottom: "1px solid rgba(53,51,55,0.12)", transitionDelay: `${i * 0.06}s` }}>
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
          <span className="inline-flex items-center gap-2 font-body" style={{ padding: "8px 18px", borderRadius: 999, border: `1px solid ${PALE}`, color: SAGE, fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 500, background: "rgba(252,250,247,0.6)", backdropFilter: "blur(10px)" }}>
            <Sparkles size={11} /> The Healing Journal
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
          A private place to come back{" "}
          <span className="font-italic" style={{ color: SAGE }}>to yourself.</span>
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
          You don't have to have all the answers. You just need a place to start.
        </p>

        <div className="reveal font-body font-light mt-10 mx-auto flex flex-col gap-4" style={{ fontSize: 16, color: SAGE, lineHeight: 1.95, maxWidth: 620, transitionDelay: "0.4s" }}>
          <p>Maybe you've spent years trying to understand what happened.</p>
          <p>Maybe you've questioned your own memory, your reactions, your feelings, or whether what you experienced was really "that bad."</p>
          <p>Maybe you're simply tired of carrying everything in your head.</p>
          <p style={{ color: OLIVE }}>You're not alone. And you don't have to figure it all out at once.</p>
          <p>The Healing Journal is a private, interactive space created for women who are ready to slow down, understand their experiences, reconnect with themselves, and make space for what comes next.</p>
        </div>

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
              boxShadow: "0 14px 40px rgba(53,51,55,0.18)",
              transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), background 0.5s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 22px 60px rgba(53,51,55,0.28)"; e.currentTarget.style.background = SAGE; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(53,51,55,0.18)"; e.currentTarget.style.background = OLIVE; }}
          >
            Create Your Free Account
          </a>
          <a
            href="#pricing"
            className="font-body story-link"
            style={{ color: OLIVE, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500, padding: "18px 12px" }}
          >
            See How It Works
          </a>
        </div>

        <p className="reveal font-body mt-6" style={{ fontSize: 10, color: MOSS, letterSpacing: "0.2em", textTransform: "uppercase", transitionDelay: "0.65s" }}>
          Free to start · No card required · Upgrade once for $15 · Lifetime access
        </p>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-bounce">
          <ChevronDown size={18} style={{ color: MOSS }} />
        </div>
      </section>

      {/* MIRROR — does this sound familiar */}
      <section className="relative px-6" style={{ padding: "200px 24px 200px" }}>
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-24">
            <Eyebrow color={MOSS}>You&apos;ve been holding a lot</Eyebrow>
            <h2
              className="reveal font-display mt-8"
              style={{ color: OLIVE, fontSize: "clamp(34px, 5.2vw, 66px)", lineHeight: 1.08, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}
            >
              You don't have to carry it all{" "}
              <span className="font-italic" style={{ color: SAGE }}>in your head anymore.</span>
            </h2>
            <p className="reveal font-italic mt-10 mx-auto" style={{ fontSize: 18, color: SAGE, lineHeight: 1.95, maxWidth: 620, transitionDelay: "0.25s" }}>
              Maybe you recognize yourself here.
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
                    borderTop: i === 0 ? "1px solid rgba(53,51,55,0.10)" : undefined,
                    borderBottom: "1px solid rgba(53,51,55,0.10)",
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
            There's nothing wrong with you for still being affected by what you experienced.
          </p>
          <p className="reveal font-body font-light text-center mt-8 mx-auto" style={{ fontSize: 16, color: SAGE, lineHeight: 1.95, maxWidth: 560 }}>
            You don't have to rush yourself through it. You deserve a private place to understand it.
          </p>
        </div>
      </section>

      {/* INTRODUCING — dark olive cinematic band */}
      <section className="relative px-6" style={{ background: OLIVE, color: IVORY, padding: "200px 24px" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <Eyebrow color={MOSS}>Welcome to your space</Eyebrow>
          <h2 className="reveal font-display mt-8" style={{ fontSize: "clamp(34px, 5.2vw, 68px)", lineHeight: 1.08, letterSpacing: "-0.015em", fontWeight: 400, color: IVORY, transitionDelay: "0.1s" }}>
            A journal that does more than
            <br />
            give you{" "}
            <span className="font-italic" style={{ color: MOSS }}>a blank page.</span>
          </h2>

          <div className="reveal mt-16 grid md:grid-cols-3 gap-12 text-left" style={{ transitionDelay: "0.25s" }}>
            <p className="font-body font-light" style={{ fontSize: 15, lineHeight: 2, color: "rgba(252,250,247,0.82)" }}>
              The Healing Journal brings reflection, education, regulation tools, and progress tracking together in one private digital space.
            </p>
            <p className="font-body font-light" style={{ fontSize: 15, lineHeight: 2, color: "rgba(252,250,247,0.82)" }}>
              No pressure to perform your healing. No pretending you're okay when you're not.
            </p>
            <p className="font-body font-light" style={{ fontSize: 15, lineHeight: 2, color: "rgba(252,250,247,0.82)" }}>
              No perfectly curated version of yourself required. Just you. Exactly where you are.
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
                background: "rgba(252,250,247,0.08)",
                border: "1px solid rgba(252,250,247,0.18)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div style={{ borderRadius: 14, padding: 14, background: "rgba(252,250,247,0.10)", border: "1px solid rgba(252,250,247,0.12)" }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Sun size={13} style={{ color: MOSS }} />
                  <span className="font-body" style={{ color: IVORY, fontSize: 11 }}>Good evening</span>
                </div>
                <p className="font-italic" style={{ color: "rgba(252,250,247,0.7)", fontSize: 10 }}>You came back. That matters.</p>
              </div>
              <div style={{ borderRadius: 14, padding: 14, background: "rgba(252,250,247,0.10)", border: "1px solid rgba(252,250,247,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Wind size={13} style={{ color: MOSS }} />
                  <span className="font-body" style={{ color: IVORY, fontSize: 11 }}>4-7-8 Breathing</span>
                </div>
                <div className="flex justify-center py-3">
                  <div className="breath-pulse" style={{ width: 40, height: 40, borderRadius: "50%", background: `radial-gradient(circle, ${MOSS}, ${SAGE})` }} />
                </div>
              </div>
              <div className="flex-1" style={{ borderRadius: 14, padding: 14, background: "rgba(252,250,247,0.10)", border: "1px solid rgba(252,250,247,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={13} style={{ color: MOSS }} />
                  <span className="font-body" style={{ color: IVORY, fontSize: 11 }}>Today's Entry</span>
                </div>
                <div className="space-y-2">
                  <div style={{ height: 5, borderRadius: 4, background: "rgba(252,250,247,0.18)" }} />
                  <div style={{ height: 5, borderRadius: 4, background: "rgba(252,250,247,0.18)", width: "78%" }} />
                  <div style={{ height: 5, borderRadius: 4, background: "rgba(252,250,247,0.18)", width: "60%" }} />
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
              Everything you need, <span className="font-italic" style={{ color: SAGE }}>in one private space.</span>
            </h2>
            <p className="reveal font-body font-light mt-6" style={{ fontSize: 16, color: SAGE, lineHeight: 1.9, transitionDelay: "0.2s" }}>
              Six spaces, made to meet you exactly where you are right now.
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
                    borderTop: "1px solid rgba(53,51,55,0.10)",
                    transitionDelay: `${(i % 2) * 0.1 + Math.floor(i / 2) * 0.05}s`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Icon size={20} style={{ color: SAGE, transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} />
                    <span className="font-body" style={{ color: MOSS, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500 }}>
                      {f.label}
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
            You don't have to become someone new.<br />
            <span style={{ color: SAGE }}>You get to come back to yourself.</span>
          </p>
          <div className="reveal font-body font-light mt-12 mx-auto flex flex-col gap-3" style={{ fontSize: 16, color: OLIVE, lineHeight: 1.95, maxWidth: 620, transitionDelay: "0.15s" }}>
            <p>Healing isn't always obvious. Sometimes it looks like setting one boundary. Leaving one conversation. Sleeping peacefully for the first time in a while.</p>
            <p>Recognizing a pattern you couldn't see before. Choosing yourself without explaining why.</p>
            <p className="font-italic">Or simply realizing: "I don't feel the way I used to."</p>
            <p>The Healing Journal gives you a place to notice those moments, because progress deserves to be seen.</p>
          </div>
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
              Start small. <span className="font-italic" style={{ color: SAGE }}>You don't have to commit to your entire journey today.</span>
            </h2>
            <p className="reveal font-body font-light mt-6" style={{ fontSize: 16, color: SAGE, lineHeight: 1.9, transitionDelay: "0.2s" }}>
              Just create a space for yourself.
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
            Your journal should actually <span className="font-italic" style={{ color: MOSS }}>feel private.</span>
          </h2>
          <p className="reveal font-body font-light mt-8 mx-auto" style={{ fontSize: 16, color: "rgba(252,250,247,0.82)", lineHeight: 2, maxWidth: 620, transitionDelay: "0.2s" }}>
            What you write here belongs to you. Your journal is stored in your private encrypted account. Your words aren't content. They're not something to be shared, sold, or used to tell your story to someone else. They're yours. You can also permanently delete your account and your data whenever you choose.
          </p>
          <div className="reveal flex flex-col items-center gap-3 mt-12" style={{ transitionDelay: "0.3s" }}>
            {[
              "Private encrypted storage",
              "Individual account access",
              "Full data deletion available",
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
            <Eyebrow>Choose your space</Eyebrow>
            <h2 className="reveal font-display mt-8" style={{ color: OLIVE, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.015em", fontWeight: 400, transitionDelay: "0.1s" }}>
              Start free. <span className="font-italic" style={{ color: SAGE }}>Upgrade when you're ready.</span>
            </h2>
            <p className="reveal font-body font-light mt-6" style={{ fontSize: 16, color: SAGE, lineHeight: 1.9, transitionDelay: "0.2s" }}>
              One payment. Yours forever. No subscription.
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
                  border: t.featured ? "1px solid rgba(252,250,247,0.12)" : `1px solid ${PALE}`,
                  boxShadow: t.featured ? "0 30px 80px rgba(53,51,55,0.30)" : "0 10px 30px rgba(53,51,55,0.06)",
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
                <p className="font-body mb-10" style={{ color: t.featured ? "rgba(252,250,247,0.65)" : MOSS, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {t.sub}
                </p>

                <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 font-body font-light" style={{ color: t.featured ? "rgba(252,250,247,0.88)" : SAGE, fontSize: 14, lineHeight: 1.55 }}>
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
            You don't have to figure everything out <span className="font-italic" style={{ color: SAGE }}>today.</span>
          </h2>
          <p className="reveal font-italic mt-8 mx-auto" style={{ fontSize: 18, color: SAGE, lineHeight: 1.9, maxWidth: 520, transitionDelay: "0.15s" }}>
            Maybe today you just need somewhere quiet to put your thoughts. Maybe tomorrow you'll understand something you couldn't understand today. Maybe six months from now, you'll look back and realize you were already changing.
          </p>
          <p className="reveal font-body font-light mt-6 mx-auto" style={{ fontSize: 16, color: SAGE, lineHeight: 1.95, maxWidth: 520, transitionDelay: "0.22s" }}>
            Start wherever you are. The space will be here when you're ready.
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
                boxShadow: "0 14px 40px rgba(53,51,55,0.18)",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), background 0.5s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 22px 60px rgba(53,51,55,0.28)"; e.currentTarget.style.background = SAGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(53,51,55,0.18)"; e.currentTarget.style.background = OLIVE; }}
            >
              Begin Your Journal
            </a>
          </div>
          <p className="reveal font-body mt-8" style={{ fontSize: 10, color: MOSS, letterSpacing: "0.24em", textTransform: "uppercase", transitionDelay: "0.4s" }}>
            Private · Interactive · Self-guided
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16" style={{ borderTop: "1px solid rgba(53,51,55,0.10)", background: IVORY }}>
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
