import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ChevronDown, Heart, Brain, CloudRain, Waves,
  SearchX, MessageCircleOff, Moon, Compass, Sun, Wind, BookOpen,
  AlertCircle, Home, PenLine, Target, Milestone, Quote, ShieldCheck,
  Lock, Infinity as InfinityIcon, Smartphone, ChevronRight, ShoppingBag,
  KeyRound, Feather, Check, HeartHandshake, Leaf,
} from "lucide-react";
import { Orbs } from "@/components/Orbs";
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

const TEXT = '#1a1a3e';
const TEXT_SOFT = 'rgba(26,26,62,0.68)';
const TEXT_FAINT = 'rgba(26,26,62,0.45)';
const TEXT_GHOST = 'rgba(26,26,62,0.30)';
const VIOLET = '#6b5fb5';
const PERIWINKLE = '#8b7fc9';
const ROSE = '#9b87d4';
const GOLD = '#e8c547';

const BG_LIGHT = '#f5f1e8';
const BG_LIGHTER = '#ebe4f5';

const mirrorRows = [
  { icon: Brain, text: "You overthink every interaction and do not know why." },
  { icon: CloudRain, text: "You feel guilty for things that were never your fault." },
  { icon: Waves, text: "You are either numb or overwhelmed — there is no in between." },
  { icon: SearchX, text: "You have searched for answers more times than you would like to admit." },
  { icon: MessageCircleOff, text: "You know something happened to you. You just do not always have the words for it." },
  { icon: Moon, text: "You are tired of holding all of this alone." },
];

const features = [
  { icon: Home, color: VIOLET, rgb: "163,130,132", title: "Home — Your Daily Anchor", body: "A personalised greeting using your first name, the time of day, and where you are in your journey. Rotating affirmations written for trauma survivors. Daily mood check-in, intention setting, and calm quick-access to every section." },
  { icon: BookOpen, color: PERIWINKLE, rgb: "94,129,172", title: "Learn — Understand What Happened to You", body: "A full educational library covering CPTSD, narcissistic abuse, gaslighting, manipulation, trauma bonding, fawning, love bombing, intermittent reinforcement, and more — in plain everyday language with no clinical jargon and no judgment." },
  { icon: Wind, color: ROSE, rgb: "163,130,132", title: "Regulate — When Your Body Will Not Calm Down", body: "Six guided nervous system tools: animated breathing, sensory grounding, trauma-informed body scan, cold water reset, trauma release shaking, and an SOS crisis tool — each with a plain explanation of what it is and how it works." },
  { icon: PenLine, color: GOLD, rgb: "94,129,172", title: "Journal — Your Private Protected Space", body: "Twenty trauma-informed prompts rotating daily. Free writing always available. Mood tagging. Every entry encrypted and saved to your personal cloud account. No one else can read your words — ever." },
  { icon: Target, color: VIOLET, rgb: "163,130,132", title: "Goals — The Small Victories That Actually Matter", body: "Personal healing goals entirely your own. Visual progress tracking with a slider. Ten daily win checkboxes that reset each morning. A streak counter for every day you show up for yourself." },
  { icon: Milestone, color: PERIWINKLE, rgb: "94,129,172", title: "Journey — Watch Yourself Heal", body: "A visual timeline of every entry written. A mood trend chart. A Then vs Now comparison of your first and most recent entry. A Letter to Future Me that seals today and unlocks on a date you choose." },
];

const steps = [
  { num: "01", icon: KeyRound, color: VIOLET, rgb: "107,95,181", title: "Create your free account", body: "Sign up in under a minute with just your email. No card, no commitment. Your private space is created instantly." },
  { num: "02", icon: Feather, color: ROSE, rgb: "155,135,212", title: "Explore the app for free", body: "Try the daily affirmation, take a mood check-in, and preview the Learn library and a guided breathing tool — so you can feel the space before you decide." },
  { num: "03", icon: ShoppingBag, color: GOLD, rgb: "232,197,71", title: "Unlock everything for life", body: "When you're ready, upgrade once for $15 to unlock the full Learn library, all six regulation tools, the private journal, goals, and your healing journey timeline. One payment, lifetime access." },
];

const tiers = [
  {
    name: "Free preview",
    price: "$0",
    sub: "Always free · No card needed",
    cta: "Create free account",
    href: "https://shop.beacons.ai/silentlyshifting/c481e8d0-d034-4b61-bed2-b53e7cc68a10",
    featured: false,
    features: [
      "Personal home with daily affirmation",
      "Daily mood check-in",
      "Preview of the Learn library",
      "One guided breathing tool",
    ],
  },
  {
    name: "Lifetime access",
    price: "$15",
    sub: "One-time · Yours forever",
    cta: "Get Instant Access — $15",
    href: "https://shop.beacons.ai/silentlyshifting/c481e8d0-d034-4b61-bed2-b53e7cc68a10",
    featured: true,
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
  { q: "Is this the same as therapy?", a: "No. The Healing Journal is an educational self-guided wellness tool. It does not provide clinical treatment and does not create a therapist-client relationship of any kind. It is a private space to learn, reflect, and document — not a replacement for professional mental health support." },
  { q: "What if I am not sure I have CPTSD?", a: "You do not need a diagnosis to use this app. Many women who find The Healing Journal most useful have never been formally diagnosed. They simply know that something happened, that they have not fully recovered, and that they want a private space to begin to understand it." },
  { q: "Is my journal actually private?", a: "Yes. Your entries are encrypted and stored in your personal cloud account. No one else can access them — including the creator. You can also delete your entire account and all data permanently at any time from inside the app." },
  { q: "What do I receive after purchasing?", a: "You receive an instant download PDF containing your unique personal access code and step-by-step setup instructions. The app works in any web browser on any device. No app store, no subscription, no expiry date." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-[700px] mx-auto flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="reveal glass" style={{ borderRadius: 18, transitionDelay: `${i * 0.06}s` }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left"
              style={{ padding: '22px 26px', cursor: 'pointer', background: 'transparent', border: 'none' }}
            >
              <span className="font-body text-[15px]" style={{ color: TEXT }}>{f.q}</span>
              <ChevronDown size={18} style={{ color: VIOLET, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            <div style={{ maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
              <p className="font-body font-light" style={{ padding: '0 26px 22px', fontSize: 14, color: TEXT_SOFT, lineHeight: 1.9 }}>
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

  return (
    <div className="relative mx-auto" style={{ background: BG_LIGHT, maxWidth: 1280, boxShadow: '0 0 80px rgba(0,0,0,0.35)' }}>
      {/* NAV */}
      <nav className="sticky top-0 z-[100] flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: 'rgba(245,241,232,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(107,95,181,0.15)' }}>
        <div className="flex items-center gap-2.5">
          <Leaf size={20} style={{ color: VIOLET }} />
          <span className="font-display font-light text-[15px] md:text-[17px]" style={{ color: TEXT, letterSpacing: '2px' }}>
            The Healing Journal
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-block font-body text-[13px]" style={{ color: TEXT_SOFT }}>
            Pricing
          </a>
          <a href="https://shop.beacons.ai/silentlyshifting/c481e8d0-d034-4b61-bed2-b53e7cc68a10" target="_blank" rel="noopener noreferrer" className="cta-btn font-body font-medium text-[13px] px-6 py-2.5 inline-block">
            Get Access — $15
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f5f1e8 0%, #ebe4f5 60%, #d9cdf0 100%)' }}>
        <Orbs />
        <div className="relative z-10 max-w-[800px] text-center flex flex-col items-center">
          <div className="reveal glass-pill inline-flex items-center gap-2 px-5 py-2 mb-7">
            <Sparkles size={14} style={{ color: ROSE }} />
            <span className="font-body text-[12px] uppercase" style={{ color: ROSE, letterSpacing: '3px' }}>
              A private space for your healing
            </span>
          </div>
          <h1 className="reveal font-display font-normal leading-[1.25]" style={{ color: TEXT, fontSize: 'clamp(38px, 6vw, 62px)', maxWidth: 720, transitionDelay: '0.15s' }}>
            You are not too much. You were surrounded by too little.
          </h1>
          <p className="reveal font-italic mt-6" style={{ fontSize: 18, color: TEXT_SOFT, lineHeight: 1.9, maxWidth: 540, transitionDelay: '0.3s' }}>
            The Healing Journal is a private digital companion for women healing from CPTSD, narcissistic abuse, and nervous system dysregulation.
          </p>
          <a href="https://shop.beacons.ai/silentlyshifting/c481e8d0-d034-4b61-bed2-b53e7cc68a10" target="_blank" rel="noopener noreferrer" className="reveal cta-btn inline-block mt-10 font-body font-medium text-[16px]"
            style={{ padding: '17px 52px', transitionDelay: '0.45s' }}>
            Get Instant Access — $15
          </a>
          <p className="reveal font-body mt-3.5 text-[11px]" style={{ color: TEXT_FAINT, transitionDelay: '0.55s' }}>
            One-time purchase · Lifetime access · Any device · No app store needed
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-bounce">
          <ChevronDown size={20} style={{ color: TEXT_GHOST }} />
        </div>
      </section>

      {/* MIRROR */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: BG_LIGHT }}>
        <Orbs />
        <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center text-center">
          <div className="reveal glass-pill inline-flex items-center gap-2 px-5 py-2 mb-6">
            <Heart size={13} style={{ color: ROSE }} />
            <span className="font-body text-[10px] uppercase" style={{ color: ROSE, letterSpacing: '3px' }}>
              does this sound familiar
            </span>
          </div>
          <h2 className="reveal font-display font-normal" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: TEXT, lineHeight: 1.4, marginBottom: 24 }}>
            You left. Or maybe you stayed.&nbsp;Either way, something in you <br />never fully came back.
          </h2>
          <p className="reveal font-italic mb-12" style={{ fontSize: 16, color: TEXT_SOFT, lineHeight: 2.0, maxWidth: 580 }}>
            You know the feeling. That low hum of anxiety that never fully goes away. The way certain words, silences, or expressions send your body into a panic it cannot explain. The exhaustion of being hypervigilant in every room you walk into.
          </p>
          <div className="w-full flex flex-col items-center gap-2.5">
            {mirrorRows.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="reveal glass glass-hover w-full max-w-[580px] flex items-center gap-3.5"
                  style={{ borderRadius: 16, padding: '16px 22px', transitionDelay: `${i * 0.08}s` }}>
                  <Icon size={16} style={{ color: VIOLET, flexShrink: 0 }} />
                  <span className="font-body text-[14px] text-left" style={{ color: TEXT, lineHeight: 1.5 }}>{r.text}</span>
                </div>
              );
            })}
          </div>
          <p className="reveal font-display italic mt-12" style={{ fontSize: 24, color: GOLD }}>
            You found this for a reason.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: BG_LIGHTER }}>
        <Orbs />
        <div className="relative z-10 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal glass-pill inline-flex items-center gap-2 px-5 py-2 mb-6">
              <Compass size={13} style={{ color: PERIWINKLE }} />
              <span className="font-body text-[10px] uppercase" style={{ color: PERIWINKLE, letterSpacing: '3px' }}>introducing</span>
            </div>
            <h2 className="reveal font-display font-normal" style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: TEXT, lineHeight: 1.35, marginBottom: 22 }}>
              A private space that finally makes sense of what you have been through.
            </h2>
            <div className="reveal font-body font-light space-y-5" style={{ fontSize: 15, color: TEXT_SOFT, lineHeight: 1.95 }}>
              <p>The Healing Journal is not therapy. It is not a course. It is not another self-help book telling you to journal your way to happiness.</p>
              <p>It is a private, interactive digital companion built specifically for women navigating CPTSD, narcissistic abuse recovery, trauma bonding, and nervous system dysregulation.</p>
              <p>It gives you a place to understand what happened to you, tools to calm your body when it spirals, and a private journal to document your healing so you can one day look back and see how far you came.</p>
            </div>
          </div>
          <div className="reveal relative flex items-center justify-center">
            <div className="absolute" style={{ width: 260, height: 260, background: '#d4c5c7', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.55 }} />
            <div className="glass relative" style={{ width: 260, height: 480, borderRadius: 40, padding: 16 }}>
              <div className="flex flex-col gap-3 h-full">
                <div className="glass" style={{ borderRadius: 14, padding: 14 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sun size={14} style={{ color: GOLD }} />
                    <span className="font-body text-[11px]" style={{ color: TEXT }}>Good evening</span>
                  </div>
                  <p className="font-italic text-[10px]" style={{ color: TEXT_SOFT }}>You came back. That matters.</p>
                </div>
                <div className="glass" style={{ borderRadius: 14, padding: 14 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Wind size={14} style={{ color: VIOLET }} />
                    <span className="font-body text-[11px]" style={{ color: TEXT }}>4-7-8 Breathing</span>
                  </div>
                  <div className="flex justify-center py-3">
                    <div className="breath-pulse" style={{ width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle, #a38284, #5e81ac)' }} />
                  </div>
                </div>
                <div className="glass flex-1" style={{ borderRadius: 14, padding: 14 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} style={{ color: ROSE }} />
                    <span className="font-body text-[11px]" style={{ color: TEXT }}>Today's Entry</span>
                  </div>
                  <div className="space-y-2">
                    <div style={{ height: 6, borderRadius: 4, background: 'rgba(26,26,46,0.10)' }} />
                    <div style={{ height: 6, borderRadius: 4, background: 'rgba(26,26,46,0.10)', width: '75%' }} />
                    <div style={{ height: 6, borderRadius: 4, background: 'rgba(26,26,46,0.10)', width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-6 py-5" style={{ background: 'rgba(94,129,172,0.08)', borderTop: '1px solid rgba(94,129,172,0.20)', borderBottom: '1px solid rgba(94,129,172,0.20)' }}>
        <div className="max-w-[700px] mx-auto flex items-start gap-3">
          <AlertCircle size={14} style={{ color: GOLD, flexShrink: 0, marginTop: 4 }} />
          <p className="font-body text-[12px] text-left" style={{ color: 'rgba(120,85,20,0.95)', lineHeight: 1.8 }}>
            Disclaimer: The Healing Journal is for educational and informational purposes only. It is not a substitute for professional mental health care, therapy, or medical advice, and does not provide diagnosis or treatment of any kind. Always consult a qualified professional. Crisis support: call or text 988.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: BG_LIGHT }}>
        <Orbs />
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <h2 className="reveal font-display font-normal text-center" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: TEXT, marginBottom: 14 }}>
            Everything inside...The Healing Journal
          </h2>
          <p className="reveal font-body font-light text-center" style={{ fontSize: 15, color: TEXT_SOFT, marginBottom: 56 }}>
            Six tabs. One private space. Everything you need for exactly where you are right now.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="reveal glass glass-hover" style={{ padding: 28, transitionDelay: `${i * 0.07}s` }}>
                  <div className="flex items-center justify-center mb-[18px]"
                    style={{ width: 48, height: 48, borderRadius: 14, background: `rgba(${f.rgb},0.15)`, border: `1px solid rgba(${f.rgb},0.30)` }}>
                    <Icon size={22} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-display font-normal mb-2.5" style={{ fontSize: 19, color: TEXT }}>{f.title}</h3>
                  <p className="font-body font-light" style={{ fontSize: 13, color: TEXT_SOFT, lineHeight: 1.9 }}>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative px-6 overflow-hidden" style={{ background: BG_LIGHTER, padding: '120px 24px' }}>
        <Orbs />
        <div className="absolute font-display select-none pointer-events-none" style={{ fontSize: 220, color: 'rgba(163,130,132,0.10)', top: 20, left: 40, lineHeight: 1 }}>"</div>
        <div className="relative z-10 max-w-[680px] mx-auto">
          <div className="reveal glass text-center" style={{ padding: 60, borderColor: 'rgba(163,130,132,0.25)' }}>
            <Quote size={28} style={{ color: VIOLET, margin: '0 auto 28px' }} />
            <p className="font-display italic font-normal" style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: TEXT, lineHeight: 1.85 }}>
              You did not imagine it.<br />
              You were not too sensitive.<br />
              You were not too much.<br />
              You were in something real —<br />
              and you survived it.<br />
              Now you get to heal.
            </p>
            <div className="mt-8 font-body text-[11px] uppercase" style={{ color: TEXT_FAINT, letterSpacing: '2.5px' }}>
              The Healing Journal
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: BG_LIGHT }}>
        <Orbs />
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <h2 className="reveal font-display font-normal text-center" style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: TEXT, marginBottom: 56 }}>
            Getting started takes less than two minutes.
          </h2>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row items-center gap-5 md:gap-3 flex-1">
                  <div className="reveal glass flex-1 w-full" style={{ padding: 32, borderRadius: 24, transitionDelay: `${i * 0.1}s` }}>
                    <div className="font-body" style={{ fontSize: 11, fontWeight: 500, color: VIOLET, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 16 }}>
                      {s.num}
                    </div>
                    <div className="glass flex items-center justify-center" style={{ width: 52, height: 52, borderRadius: '50%', background: `rgba(${s.rgb},0.15)`, border: `1px solid rgba(${s.rgb},0.30)`, marginBottom: 18 }}>
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <h3 className="font-display font-normal" style={{ fontSize: 19, color: TEXT, marginBottom: 10 }}>{s.title}</h3>
                    <p className="font-body font-light" style={{ fontSize: 13, color: TEXT_SOFT, lineHeight: 1.9 }}>{s.body}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ChevronRight size={24} style={{ color: 'rgba(163,130,132,0.45)', flexShrink: 0 }} className="hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRIVACY PROMISE */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: BG_LIGHTER }}>
        <Orbs />
        <div className="relative z-10 max-w-[680px] mx-auto">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 300, height: 300, background: '#5e81ac', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.30, pointerEvents: 'none' }} />
          <div className="reveal glass relative text-center" style={{ padding: 56, borderColor: 'rgba(94,129,172,0.30)' }}>
            <ShieldCheck size={36} style={{ color: PERIWINKLE, margin: '0 auto 20px' }} />
            <div className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 mb-5" style={{ background: 'rgba(94,129,172,0.10)', border: '1px solid rgba(94,129,172,0.25)' }}>
              <span className="font-body text-[10px] uppercase" style={{ color: PERIWINKLE, letterSpacing: '3px' }}>your privacy matters</span>
            </div>
            <h2 className="font-display font-normal" style={{ fontSize: 32, color: TEXT, lineHeight: 1.4, marginBottom: 22 }}>
              What you write here belongs to no one but you.
            </h2>
            <p className="font-body font-light" style={{ fontSize: 15, color: TEXT_SOFT, lineHeight: 1.95, marginBottom: 36 }}>
              Every journal entry you write is stored in your private encrypted cloud account. No one — including the creator of this app — can read your words. Your healing history is not a data point. It is not sold, shared, or seen. It is yours. Completely and always.
            </p>
            <div className="flex flex-col items-center gap-3">
              {[
                "Private encrypted cloud storage",
                "Unique access code — one account, one person",
                "Full data deletion available anytime from inside the app",
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check size={16} style={{ color: PERIWINKLE, flexShrink: 0 }} />
                  <span className="font-body text-[14px]" style={{ color: TEXT }}>{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: BG_LIGHT }}>
        <Orbs />
        <div className="relative z-10">
          <h2 className="reveal font-display font-normal text-center" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: TEXT, marginBottom: 48 }}>
            Questions you might have
          </h2>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="purchase" className="relative px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #ebe4f5 0%, #f5f1e8 60%, #d9cdf0 100%)', padding: '140px 24px' }}>
        <Orbs />
        <div className="relative z-10 max-w-[640px] mx-auto">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 400, height: 400, background: '#a38284', borderRadius: '50%', filter: 'blur(140px)', opacity: 0.25, pointerEvents: 'none' }} />
          <div className="reveal glass relative text-center" style={{ padding: '70px 56px', borderColor: 'rgba(163,130,132,0.30)' }}>
            <HeartHandshake size={40} style={{ color: ROSE, margin: '0 auto 24px' }} />
            <h2 className="font-display font-normal italic" style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: TEXT, lineHeight: 1.4, marginBottom: 24 }}>
              You have been carrying this for long enough.
            </h2>
            <p className="font-body font-light" style={{ fontSize: 16, color: TEXT_SOFT, lineHeight: 1.95, maxWidth: 480, margin: '0 auto 44px' }}>
              The Healing Journal is not a cure. It is not a promise. It is a place — private, safe, and entirely yours — to begin to understand what happened, to calm the body that is still responding to a threat that is no longer there, and to document the journey so that one day you can look back and see how far you came.
              <br /><br />
              You deserve that. Even now. Especially now.
            </p>
            <a href="https://shop.beacons.ai/silentlyshifting/c481e8d0-d034-4b61-bed2-b53e7cc68a10" target="_blank" rel="noopener noreferrer" className="cta-btn inline-block font-body font-medium text-[17px]" style={{ padding: '18px 60px' }}>
              Get Instant Access— $15
            </a>
            <p className="font-body" style={{ marginTop: 16, fontSize: 11, color: TEXT_FAINT }}>
              One-time purchase · Lifetime access · Any device · No app store needed
            </p>
            <p className="font-body" style={{ marginTop: 12, fontSize: 10, color: TEXT_GHOST, maxWidth: 480, margin: '12px auto 0' }}>
              Educational tool only. Not a substitute for professional mental health care. For crisis support: call or text 988.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-[12px] font-body" style={{ color: TEXT_FAINT }}>
              <span className="flex items-center gap-2"><Lock size={13} style={{ color: VIOLET }} /> Encrypted & private</span>
              <span className="flex items-center gap-2"><InfinityIcon size={13} style={{ color: PERIWINKLE }} /> Lifetime access</span>
              <span className="flex items-center gap-2"><Smartphone size={13} style={{ color: ROSE }} /> Any device</span>
              <span className="flex items-center gap-2"><ShieldCheck size={13} style={{ color: GOLD }} /> One-time purchase</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center" style={{ background: 'rgba(26,26,46,0.06)', borderTop: '1px solid rgba(26,26,46,0.10)' }}>
        <div className="flex items-center justify-center mb-4">
          <Leaf size={18} style={{ color: VIOLET, marginRight: 8 }} />
          <span className="font-display font-light" style={{ fontSize: 15, color: 'rgba(26,26,46,0.65)', letterSpacing: '2px' }}>The Healing Journal</span>
        </div>
        <p className="font-body" style={{ fontSize: 11, color: 'rgba(26,26,46,0.40)' }}>
          <Link to="/disclaimer" className="hover:underline" style={{ color: 'inherit' }}>Disclaimer</Link>
          {' · '}
          <Link to="/privacy" className="hover:underline" style={{ color: 'inherit' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/terms" className="hover:underline" style={{ color: 'inherit' }}>Terms of Use</Link>
          {' · '}
          <a href="mailto:hello@thehealingjournal.app" className="hover:underline" style={{ color: 'inherit' }}>Contact</a>
        </p>
        <p className="font-body" style={{ marginTop: 12, fontSize: 10, color: 'rgba(26,26,46,0.30)' }}>
          The Healing Journal — Educational tool only — Not professional medical advice
        </p>
      </footer>
    </div>
  );
}
