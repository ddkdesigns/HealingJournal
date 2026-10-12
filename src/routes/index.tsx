import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import {
  ArrowUpRight, Plus, Brain, CloudRain, Waves,
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
      { title: "The Healing Journal — A Private Place to Come Back to Yourself" },
      { name: "description", content: "A private, self-guided space for women to reflect, learn, and come back to themselves. Free to start, $15 for lifetime access." },
      { property: "og:title", content: "The Healing Journal — A Private Place to Come Back to Yourself" },
      { property: "og:description", content: "A private, self-guided space for women to reflect, learn, and come back to themselves. Free to start, $15 for lifetime access." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://healingjournal.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://healingjournal.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const BEACONS = "https://thehealingjournal.lovable.app/";


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
      "Works in any browser",
      "No subscription",
      "Lifetime access",
    ],
  },
];

const faqs = [
  { q: "Is this the same as therapy?",        a: "No. The Healing Journal is an educational, self-guided wellness tool for reflection, learning, and personal awareness. It isn't a replacement for professional mental health care or clinical treatment." },
  { q: "Do I need a diagnosis to use it?",    a: "No. You don't need a diagnosis, the right words, or a clear explanation of what happened. If you simply want a quiet place to understand yourself better, you are welcome here." },
  { q: "Is my journal actually private?",     a: "Yes. Your journal entries are saved locally on your own device, not on our servers. Your words aren't content to be shared or sold. You can delete them whenever you choose." },
  { q: "What happens when I upgrade?",        a: "One payment of $15 unlocks the full experience for life. No monthly subscription and no recurring charges. It works in any web browser, and your entries stay saved on the device you write them on." },
];

function AccessLink({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <Button asChild variant={secondary ? "outline" : "default"} className="access-button"><a href={BEACONS} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16} /></a></Button>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function Nav() {
  return <header className="journal-nav">
    <a href="#top" className="journal-brand"><Leaf size={22} strokeWidth={1.4} /><span>The Healing Journal</span></a>
    <nav aria-label="Main navigation"><a href="#inside">Inside the journal</a><a href="#how-it-works">How it works</a><a href="#pricing">See plans</a></nav>
    <AccessLink>Get Lifetime Access — $15</AccessLink>
  </header>;
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((f, i) => <div className="faq-item" key={f.q}>
    <Button variant="ghost" className="faq-trigger" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}><span>{f.q}</span><Plus className={open === i ? "is-open" : ""} /></Button>
    <div id={`faq-${i}`} className="faq-answer" hidden={open !== i}><p>{f.a}</p></div>
  </div>)}</div>;
}

function Index() {
  useReveal();
  return <main className="journal-site" id="top">
    <Nav />
    <section className="journal-hero">
      <PhotoPlaceholder label="Hero photography" className="hero-photo" />
      <div className="hero-content reveal">
        <Eyebrow>The Healing Journal</Eyebrow>
        <h1>A private place to come back <em>to yourself.</em></h1>
        <p className="hero-subtitle">You don't have to have all the answers. You just need a place to start.</p>
        <div className="hero-actions"><AccessLink>Create Your Free Account</AccessLink><Button asChild variant="ghost" className="text-button"><a href="#how-it-works">See How It Works <ArrowUpRight size={16} /></a></Button></div>
        <p className="hero-note">Free to start · No card required · Upgrade once for $15 · Lifetime access</p>
      </div>
    </section>

    <section className="editorial-section intro-section">
      <div className="section-heading reveal"><Eyebrow>Welcome to your space</Eyebrow><h2>A journal that does more than give you <em>a blank page.</em></h2></div>
      <div className="editorial-split">
        <PhotoPlaceholder label="A quiet moment" className="intro-photo reveal" />
        <div className="editorial-copy reveal">
          <p>Maybe you've spent years trying to understand what happened.</p>
          <p>Maybe you've questioned your own memory, your reactions, your feelings, or whether what you experienced was really "that bad."</p>
          <p>Maybe you're simply tired of carrying everything in your head.</p>
          <p className="copy-emphasis">You're not alone. And you don't have to figure it all out at once.</p>
          <p>The Healing Journal is a private, interactive space created for women who are ready to slow down, understand their experiences, reconnect with themselves, and make space for what comes next.</p>
          <div className="copy-divider" />
          <p>The Healing Journal brings reflection, education, regulation tools, and progress tracking together in one private digital space.</p>
          <p>No pressure to perform your healing. No pretending you're okay when you're not.</p>
          <p>No perfectly curated version of yourself required. Just you. Exactly where you are.</p>
        </div>
      </div>
    </section>

    <section className="editorial-section mirror-section">
      <div className="section-heading reveal"><Eyebrow>You've been holding a lot</Eyebrow><h2>You don't have to carry it all <em>in your head anymore.</em></h2><p>Maybe you recognize yourself here.</p></div>
      <div className="mirror-grid">{mirrorRows.map((r, i) => { const Icon = r.icon; return <div className="mirror-item reveal" key={r.text}><div className="item-index"><span>0{i + 1}</span><Icon size={20} strokeWidth={1.2} /></div><p>{r.text}</p></div>; })}</div>
      <div className="mirror-closing reveal"><p className="copy-emphasis">There's nothing wrong with you for still being affected by what you experienced.</p><p>You don't have to rush yourself through it. You deserve a private place to understand it.</p></div>
    </section>

    <section className="editorial-section features-section" id="inside">
      <div className="section-heading reveal"><Eyebrow>Inside the journal</Eyebrow><h2>Everything you need, <em>in one private space.</em></h2><p>Six spaces, made to meet you exactly where you are right now.</p></div>
      <div className="feature-grid">{features.map((f) => { const Icon = f.icon; return <article className="feature-item reveal" key={f.label}><PhotoPlaceholder label={f.label} /><div className="feature-label"><Icon size={17} strokeWidth={1.4} /><Eyebrow>{f.label}</Eyebrow></div><h3>{f.title}</h3><p>{f.body}</p></article>; })}</div>
    </section>

    <section className="quote-section">
      <div className="quote-inner reveal"><Eyebrow>The Healing Journal</Eyebrow><h2>You don't have to become someone new.<br /><em>You get to come back to yourself.</em></h2>
      <div className="quote-copy"><p>Healing isn't always obvious. Sometimes it looks like setting one boundary. Leaving one conversation. Sleeping peacefully for the first time in a while.</p><p>Recognizing a pattern you couldn't see before. Choosing yourself without explaining why.</p><p className="copy-emphasis">Or simply realizing: "I don't feel the way I used to."</p><p>The Healing Journal gives you a place to notice those moments, because progress deserves to be seen.</p></div><p className="quote-credit">— The Healing Journal</p></div>
    </section>

    <section className="editorial-section how-section" id="how-it-works">
      <div className="section-heading reveal"><Eyebrow>How it works</Eyebrow><h2>Start small. <em>You don't have to commit to your entire journey today.</em></h2><p>Just create a space for yourself.</p></div>
      <div className="steps-grid">{steps.map((s) => { const Icon = s.icon; return <article className="step-item reveal" key={s.num}><div className="step-number">{s.num}</div><div className="feature-label"><Icon size={18} /><Eyebrow>Step {s.num}</Eyebrow></div><h3>{s.title}</h3><p>{s.body}</p></article>; })}</div>
    </section>

    <section className="privacy-section">
      <div className="privacy-inner"><div className="reveal"><ShieldCheck size={30} strokeWidth={1.2} /><Eyebrow>Your privacy matters</Eyebrow><h2>Your journal should actually <em>feel private.</em></h2></div>
      <div className="reveal"><p>What you write here belongs to you. Your journal entries are saved locally on your own device, not on our servers. Your words aren't content. They're not something to be shared, sold, or used to tell your story to someone else. They're yours. You can delete them from your device whenever you choose.</p><ul className="privacy-checks">{["Saved locally on your device", "Never stored on our servers", "Delete your entries anytime"].map(row => <li key={row}><Check size={17} />{row}</li>)}</ul></div></div>
    </section>

    <section className="editorial-section faq-section"><div className="section-heading reveal"><Eyebrow>Frequently asked</Eyebrow><h2>Questions you <em>might have.</em></h2></div><Faq /></section>

    <section className="editorial-section welcome-section"><PhotoPlaceholder label="Room to begin" className="welcome-photo reveal" /><div className="reveal"><h2>You don't need a diagnosis <em>to begin.</em></h2><div className="editorial-copy"><p>You don't have to know exactly what happened. You don't have to have the right words. And you certainly don't have to prove your experience to anyone.</p><p>If you know something changed you. If you know you're still carrying something. If you simply want a quiet place to understand yourself better...</p><p className="copy-emphasis">You are welcome here.</p></div></div></section>

    <section className="editorial-section disclaimer-section"><div className="disclaimer-inner reveal"><div><Eyebrow>Important</Eyebrow><h3>This isn't therapy.</h3></div><p>The Healing Journal is an educational, self-guided wellness tool designed to support reflection, learning, and personal awareness. It isn't a replacement for professional mental health care or clinical treatment. Think of it as a private space to pause, reflect, learn, and keep track of your own journey. <Link to="/disclaimer">Read the full disclaimer</Link>.</p></div></section>

    <section className="pricing-section" id="pricing"><div className="editorial-section"><div className="section-heading reveal"><Eyebrow>Choose your space</Eyebrow><h2>Start free. <em>Upgrade when you're ready.</em></h2><p>One payment. Yours forever. No subscription.</p></div><div className="pricing-grid">{tiers.map(t => <article className={`price-card reveal ${t.featured ? "featured" : ""}`} key={t.name}><div className="price-card-heading"><Eyebrow>{t.name}</Eyebrow>{t.featured && <span className="chosen-label">Most chosen</span>}</div><div className="price">{t.price}</div><p className="price-subtitle">{t.sub}</p><ul>{t.features.map(f => <li key={f}><Check size={16} /><span>{f}</span></li>)}</ul><AccessLink secondary={t.featured}>{t.cta}</AccessLink></article>)}</div><div className="pricing-assurances"><span><Lock size={14} />Saved on your device</span><span><InfinityIcon size={14} />Lifetime access</span><span><Smartphone size={14} />Works in any browser</span><span><ShieldCheck size={14} />One-time purchase</span></div></div></section>

    <section className="final-section"><div className="reveal"><h2>You don't have to figure everything out <em>today.</em></h2><p>Maybe today you just need somewhere quiet to put your thoughts. Maybe tomorrow you'll understand something you couldn't understand today. Maybe six months from now, you'll look back and realize you were already changing.</p><p>Start wherever you are. The space will be here when you're ready.</p><AccessLink>Begin Your Journal</AccessLink><Eyebrow>Private · Interactive · Self-guided</Eyebrow></div></section>

    <footer className="journal-footer"><div className="footer-top"><a href="#top" className="journal-brand"><Leaf size={24} strokeWidth={1.4} /><span>The Healing Journal</span></a><div className="footer-links"><Link to="/disclaimer">Disclaimer</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><a href="mailto:hello@thehealingjournal.app">Contact</a></div></div><div className="footer-wordmark" aria-hidden="true">The Healing Journal</div><p>© {new Date().getFullYear()} · Educational tool only</p></footer>
  </main>;
}
