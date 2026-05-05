import { createFileRoute } from "@tanstack/react-router";
import {
  BookHeart, Sparkles, ChevronDown, Heart, Brain, CloudRain, Waves,
  SearchX, MessageCircleOff, Moon, Compass, Sun, Wind, BookOpen,
  AlertCircle, Home, PenLine, Target, Milestone, Quote, ShieldCheck,
  Lock, Infinity as InfinityIcon, Smartphone,
} from "lucide-react";
import { Orbs } from "@/components/Orbs";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Healing Journal — A private space for your healing" },
      { name: "description", content: "A private digital companion for women healing from CPTSD, narcissistic abuse, and nervous system dysregulation." },
    ],
  }),
});

const mirrorRows = [
  { icon: Brain, text: "You overthink every interaction and do not know why." },
  { icon: CloudRain, text: "You feel guilty for things that were never your fault." },
  { icon: Waves, text: "You are either numb or overwhelmed — there is no in between." },
  { icon: SearchX, text: "You have searched for answers more times than you would like to admit." },
  { icon: MessageCircleOff, text: "You know something happened to you. You just do not always have the words for it." },
  { icon: Moon, text: "You are tired of holding all of this alone." },
];

const features = [
  { icon: Home, color: "#B088F9", rgb: "176,136,249", title: "Home — Your Daily Anchor", body: "A personalised greeting using your first name, the time of day, and where you are in your journey. Rotating affirmations written for trauma survivors. Daily mood check-in, intention setting, and calm quick-access to every section." },
  { icon: BookOpen, color: "#89A4F7", rgb: "137,164,247", title: "Learn — Understand What Happened to You", body: "A full educational library covering CPTSD, narcissistic abuse, gaslighting, manipulation, trauma bonding, fawning, love bombing, intermittent reinforcement, and more — in plain everyday language with no clinical jargon and no judgment." },
  { icon: Wind, color: "#F0A8C8", rgb: "240,168,200", title: "Regulate — When Your Body Will Not Calm Down", body: "Six guided nervous system tools: animated breathing, sensory grounding, trauma-informed body scan, cold water reset, trauma release shaking, and an SOS crisis tool — each with a plain explanation of what it is and how it works." },
  { icon: PenLine, color: "#F5C87A", rgb: "245,200,122", title: "Journal — Your Private Protected Space", body: "Twenty trauma-informed prompts rotating daily. Free writing always available. Mood tagging. Every entry encrypted and saved to your personal cloud account. No one else can read your words — ever." },
  { icon: Target, color: "#B088F9", rgb: "176,136,249", title: "Goals — The Small Victories That Actually Matter", body: "Personal healing goals entirely your own. Visual progress tracking with a slider. Ten daily win checkboxes that reset each morning. A streak counter for every day you show up for yourself." },
  { icon: Milestone, color: "#89A4F7", rgb: "137,164,247", title: "Journey — Watch Yourself Heal", body: "A visual timeline of every entry written. A mood trend chart. A Then vs Now comparison of your first and most recent entry. A Letter to Future Me that seals today and unlocks on a date you choose." },
];

function Index() {
  useReveal();

  return (
    <div className="relative">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: 'rgba(13,13,26,0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-2.5">
          <BookHeart size={20} style={{ color: '#B088F9' }} />
          <span className="font-display font-light text-[15px] md:text-[17px]" style={{ color: '#F0EEF8', letterSpacing: '2px' }}>
            The Healing Journal
          </span>
        </div>
        <a href="#cta" className="cta-btn font-body font-medium text-[13px] px-6 py-2.5 inline-block">
          Get Access — $27
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0A2E 0%, #0D0D1A 40%, #0A1628 100%)' }}>
        <Orbs />
        <div className="relative z-10 max-w-[800px] text-center flex flex-col items-center">
          <div className="reveal glass-pill inline-flex items-center gap-2 px-5 py-2 mb-7"
            style={{ background: 'rgba(240,168,200,0.10)', border: '1px solid rgba(240,168,200,0.20)' }}>
            <Sparkles size={14} style={{ color: '#F0A8C8' }} />
            <span className="font-body text-[12px] uppercase" style={{ color: '#F0A8C8', letterSpacing: '3px' }}>
              A private space for your healing
            </span>
          </div>
          <h1 className="reveal font-display font-normal leading-[1.25]" style={{ color: '#F0EEF8', fontSize: 'clamp(38px, 6vw, 62px)', maxWidth: 720, transitionDelay: '0.15s' }}>
            You are not too much.<br />You were surrounded<br />by too little.
          </h1>
          <p className="reveal font-italic mt-6" style={{ fontSize: 18, color: 'rgba(240,238,248,0.65)', lineHeight: 1.9, maxWidth: 540, transitionDelay: '0.3s' }}>
            The Healing Journal is a private digital companion for women healing from CPTSD, narcissistic abuse, and nervous system dysregulation.
          </p>
          <a href="#cta" className="reveal cta-btn inline-block mt-10 font-body font-medium text-[16px]"
            style={{ padding: '17px 52px', transitionDelay: '0.45s' }}>
            Get Instant Access — $27
          </a>
          <p className="reveal font-body mt-3.5 text-[11px]" style={{ color: 'rgba(240,238,248,0.38)', transitionDelay: '0.55s' }}>
            One-time purchase · Lifetime access · Any device · No app store needed
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-bounce">
          <ChevronDown size={20} style={{ color: 'rgba(255,255,255,0.25)' }} />
        </div>
      </section>

      {/* MIRROR */}
      <section className="relative py-[100px] md:py-[100px] py-[60px] px-6 overflow-hidden" style={{ background: '#0D0D1A' }}>
        <Orbs />
        <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center text-center">
          <div className="reveal glass-pill inline-flex items-center gap-2 px-5 py-2 mb-6"
            style={{ background: 'rgba(240,168,200,0.10)', border: '1px solid rgba(240,168,200,0.20)' }}>
            <Heart size={13} style={{ color: '#F0A8C8' }} />
            <span className="font-body text-[10px] uppercase" style={{ color: '#F0A8C8', letterSpacing: '3px' }}>
              does this sound familiar
            </span>
          </div>
          <h2 className="reveal font-display font-normal" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: '#F0EEF8', lineHeight: 1.4, marginBottom: 24 }}>
            You left. Or maybe you stayed.<br />Either way, something in you<br />never fully came back.
          </h2>
          <p className="reveal font-italic mb-12" style={{ fontSize: 16, color: 'rgba(240,238,248,0.58)', lineHeight: 2.0, maxWidth: 580 }}>
            You know the feeling. That low hum of anxiety that never fully goes away. The way certain words, silences, or expressions send your body into a panic it cannot explain. The exhaustion of being hypervigilant in every room you walk into.
          </p>
          <div className="w-full flex flex-col items-center gap-2.5">
            {mirrorRows.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="reveal glass glass-hover w-full max-w-[580px] flex items-center gap-3.5"
                  style={{ borderRadius: 16, padding: '16px 22px', transitionDelay: `${i * 0.08}s` }}>
                  <Icon size={16} style={{ color: '#B088F9', flexShrink: 0 }} />
                  <span className="font-body text-[14px] text-left" style={{ color: '#F0EEF8', lineHeight: 1.5 }}>{r.text}</span>
                </div>
              );
            })}
          </div>
          <p className="reveal font-display italic mt-12" style={{ fontSize: 24, color: '#F5C87A' }}>
            You found this for a reason.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: '#13132A' }}>
        <Orbs />
        <div className="relative z-10 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal glass-pill inline-flex items-center gap-2 px-5 py-2 mb-6"
              style={{ background: 'rgba(137,164,247,0.10)', border: '1px solid rgba(137,164,247,0.20)' }}>
              <Compass size={13} style={{ color: '#89A4F7' }} />
              <span className="font-body text-[10px] uppercase" style={{ color: '#89A4F7', letterSpacing: '3px' }}>introducing</span>
            </div>
            <h2 className="reveal font-display font-normal" style={{ fontSize: 'clamp(28px, 4vw, 38px)', color: '#F0EEF8', lineHeight: 1.35, marginBottom: 22 }}>
              A private space that finally makes sense of what you have been through.
            </h2>
            <div className="reveal font-body font-light space-y-5" style={{ fontSize: 15, color: 'rgba(240,238,248,0.65)', lineHeight: 1.95 }}>
              <p>The Healing Journal is not therapy. It is not a course. It is not another self-help book telling you to journal your way to happiness.</p>
              <p>It is a private, interactive digital companion built specifically for women navigating CPTSD, narcissistic abuse recovery, trauma bonding, and nervous system dysregulation.</p>
              <p>It gives you a place to understand what happened to you, tools to calm your body when it spirals, and a private journal to document your healing so you can one day look back and see how far you came.</p>
            </div>
          </div>
          <div className="reveal relative flex items-center justify-center">
            <div className="absolute" style={{ width: 200, height: 200, background: '#9B4DCA', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }} />
            <div className="glass relative" style={{ width: 260, height: 480, borderRadius: 40, padding: 16 }}>
              <div className="flex flex-col gap-3 h-full">
                <div className="glass" style={{ borderRadius: 14, padding: 14 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sun size={14} style={{ color: '#F5C87A' }} />
                    <span className="font-body text-[11px]" style={{ color: '#F0EEF8' }}>Good evening</span>
                  </div>
                  <p className="font-italic text-[10px]" style={{ color: 'rgba(240,238,248,0.6)' }}>You came back. That matters.</p>
                </div>
                <div className="glass" style={{ borderRadius: 14, padding: 14 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Wind size={14} style={{ color: '#B088F9' }} />
                    <span className="font-body text-[11px]" style={{ color: '#F0EEF8' }}>4-7-8 Breathing</span>
                  </div>
                  <div className="flex justify-center py-3">
                    <div className="breath-pulse" style={{ width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle, #B088F9, #6B4DE8)' }} />
                  </div>
                </div>
                <div className="glass flex-1" style={{ borderRadius: 14, padding: 14 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} style={{ color: '#F0A8C8' }} />
                    <span className="font-body text-[11px]" style={{ color: '#F0EEF8' }}>Today's Entry</span>
                  </div>
                  <div className="space-y-2">
                    <div style={{ height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.08)', width: '75%' }} />
                    <div style={{ height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.08)', width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-6 py-5" style={{ background: 'rgba(245,200,122,0.07)', borderTop: '1px solid rgba(245,200,122,0.18)', borderBottom: '1px solid rgba(245,200,122,0.18)' }}>
        <div className="max-w-[700px] mx-auto flex items-start gap-3 text-center">
          <AlertCircle size={14} style={{ color: '#F5C87A', flexShrink: 0, marginTop: 4 }} />
          <p className="font-body text-[12px] text-left" style={{ color: 'rgba(245,200,122,0.80)', lineHeight: 1.8 }}>
            Disclaimer: The Healing Journal is for educational and informational purposes only. It is not a substitute for professional mental health care, therapy, or medical advice, and does not provide diagnosis or treatment of any kind. Always consult a qualified professional. Crisis support: call or text 988.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-[100px] px-6 overflow-hidden" style={{ background: '#0D0D1A' }}>
        <Orbs />
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <h2 className="reveal font-display font-normal text-center" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: '#F0EEF8', marginBottom: 14 }}>
            Everything inside The Healing Journal
          </h2>
          <p className="reveal font-body font-light text-center" style={{ fontSize: 15, color: 'rgba(240,238,248,0.55)', marginBottom: 56 }}>
            Six tabs. One private space. Everything you need for exactly where you are right now.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="reveal glass glass-hover" style={{ padding: 28, transitionDelay: `${i * 0.07}s` }}>
                  <div className="flex items-center justify-center mb-[18px]"
                    style={{ width: 48, height: 48, borderRadius: 14, background: `rgba(${f.rgb},0.15)`, border: `1px solid rgba(${f.rgb},0.25)` }}>
                    <Icon size={22} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-display font-normal mb-2.5" style={{ fontSize: 19, color: '#F0EEF8' }}>{f.title}</h3>
                  <p className="font-body font-light" style={{ fontSize: 13, color: 'rgba(240,238,248,0.60)', lineHeight: 1.9 }}>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative px-6 overflow-hidden" style={{ background: '#13132A', padding: '120px 24px' }}>
        <Orbs />
        <div className="absolute font-display select-none pointer-events-none" style={{ fontSize: 220, color: 'rgba(176,136,249,0.07)', top: 20, left: 40, lineHeight: 1 }}>"</div>
        <div className="relative z-10 max-w-[680px] mx-auto">
          <div className="reveal glass text-center" style={{ padding: 60, borderColor: 'rgba(176,136,249,0.2)' }}>
            <Quote size={28} style={{ color: '#B088F9', margin: '0 auto 28px' }} />
            <p className="font-display italic font-normal" style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: '#F0EEF8', lineHeight: 1.5 }}>
              For the first time, I read something that did not make me feel broken. It made me feel finally understood.
            </p>
            <div className="mt-8 font-body text-[12px] uppercase" style={{ color: 'rgba(240,238,248,0.5)', letterSpacing: '3px' }}>
              — A reader, year one of healing
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="relative py-[120px] px-6 overflow-hidden" style={{ background: '#0D0D1A' }}>
        <Orbs />
        <div className="relative z-10 max-w-[720px] mx-auto text-center">
          <h2 className="reveal font-display font-normal" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#F0EEF8', lineHeight: 1.25, marginBottom: 24 }}>
            Your healing does not have to wait another day.
          </h2>
          <p className="reveal font-italic" style={{ fontSize: 17, color: 'rgba(240,238,248,0.65)', lineHeight: 1.9, marginBottom: 40 }}>
            One small step today. A private space that meets you where you are.
          </p>
          <a href="#" className="reveal cta-btn inline-block font-body font-medium text-[17px]" style={{ padding: '20px 60px' }}>
            Get Instant Access — $27
          </a>
          <div className="reveal mt-10 flex flex-wrap justify-center gap-6 text-[12px] font-body" style={{ color: 'rgba(240,238,248,0.5)' }}>
            <span className="flex items-center gap-2"><Lock size={13} style={{ color: '#B088F9' }} /> Encrypted & private</span>
            <span className="flex items-center gap-2"><InfinityIcon size={13} style={{ color: '#89A4F7' }} /> Lifetime access</span>
            <span className="flex items-center gap-2"><Smartphone size={13} style={{ color: '#F0A8C8' }} /> Any device</span>
            <span className="flex items-center gap-2"><ShieldCheck size={13} style={{ color: '#F5C87A' }} /> One-time purchase</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center" style={{ background: '#0D0D1A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <BookHeart size={16} style={{ color: '#B088F9' }} />
          <span className="font-display font-light text-[14px]" style={{ color: '#F0EEF8', letterSpacing: '2px' }}>The Healing Journal</span>
        </div>
        <p className="font-body text-[11px]" style={{ color: 'rgba(240,238,248,0.35)' }}>
          © {new Date().getFullYear()} The Healing Journal. Made with care for those still healing.
        </p>
      </footer>
    </div>
  );
}
