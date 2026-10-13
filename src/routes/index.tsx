import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { ArrowUpRight, BookOpen, Sparkles, LockOpen, Check, Leaf, AlertCircle } from "lucide-react";
import journalPhoto from "@/assets/journal.jpg.asset.json";
import mountainPhoto from "@/assets/mountains.jpg.asset.json";

const APP_URL = "https://thehealingjournal.lovable.app/";
const description = "A quiet, private companion for women who are still carrying what happened — and are ready to begin to understand it. Free to start, $15 for lifetime access.";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Healing Journal — A Private Space for Healing" },
      { name: "description", content: description },
      { property: "og:title", content: "The Healing Journal — A Private Space for Healing" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://healingjournal.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://healingjournal.lovable.app/" }],
  }),
});

function AccessLink({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <Button asChild variant={secondary ? "outline" : "default"} className={`access-button${secondary ? " access-outline" : ""}`}><a href={APP_URL} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16} /></a></Button>;
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}
function LandingPhoto({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={`landing-photo ${className}`}>{failed ? <PhotoPlaceholder label={alt} icon={BookOpen} className="photo-fallback" /> : <img src={src} alt={alt} onError={() => setFailed(true)} />}</div>;
}
const featureRows = [
  { name: "Learn", description: "CPTSD, gaslighting, trauma bonding, fawning — in plain language, no clinical jargon, no judgment." },
  { name: "Regulate", description: "Guided breathing, grounding, body scan, cold water reset, trauma release shaking, and an SOS crisis tool." },
  { name: "Journal", description: "Guided prompts or free writing. Saved privately on your device only — never transmitted to any server." },
  { name: "Journey", description: "Your full healing timeline, mood chart, and a Letter to Future Me that unseals on a date you choose." },
];
function Index() {
  return <main className="journal-site journal-minimal" id="top">
    <header className="journal-nav"><a href="#top" className="journal-brand">The Healing Journal</a><AccessLink>Start free</AccessLink></header>
    <section className="journal-hero"><div className="landing-column">
      <LandingPhoto src={journalPhoto.url} alt="An open journal on a warm wooden desk" className="hero-photo" />
      <Eyebrow>A private space for healing</Eyebrow>
      <h1>You don't need the right words.<br />You just need a place to start.</h1>
      <p className="hero-subtitle">A quiet, private companion for women who are still carrying what happened — and are ready to begin to understand it.</p>
      <div className="stacked-actions"><AccessLink>Create your free account</AccessLink><Button asChild variant="outline" className="access-button access-outline"><a href="#how-it-works">See how it works<ArrowUpRight size={16} /></a></Button></div>
      <p className="micro-text">Free to start · No card required · Upgrade once for $15 · Lifetime access</p>
    </div></section>
    <section className="landing-section mirror-section"><div className="landing-column section-divider">
      <Eyebrow>You might recognise this</Eyebrow><h2>Something changed you.<br />And you're still feeling it.</h2>
      <p>Maybe you replay conversations long after they happened. Maybe you question whether it was really that bad. Maybe you're completely fine one moment and suddenly overwhelmed the next — and you don't fully understand why.</p>
      <p className="mirror-reassurance">There is nothing wrong with you. Your body is doing exactly what it learned to do to survive.</p>
    </div></section>
    <section className="landing-section paths-section" id="how-it-works"><div className="landing-column section-divider">
      <Eyebrow>Choose your path</Eyebrow><h2>Start where you are.</h2>
      <div className="path-list" id="pricing">
        <article className="path-card"><div className="path-icon"><Sparkles size={20} strokeWidth={1.5} /></div><div className="path-content"><Eyebrow>Free — no card needed</Eyebrow><h3>Start exploring</h3><p>Daily affirmation, mood check-in, one breathing tool, and a first look inside the journal.</p><Button asChild variant="link" className="path-link"><a href={APP_URL} target="_blank" rel="noopener noreferrer">Begin free <ArrowUpRight size={16} /></a></Button></div></article>
        <article className="path-card path-featured"><div className="path-icon"><LockOpen size={20} strokeWidth={1.5} /></div><div className="path-content"><Eyebrow>$15 one-time · Lifetime access</Eyebrow><h3>Full access</h3><p>All six regulation tools, unlimited journaling, healing timeline, goals tracker, AI thought reframing, ambient sounds, and Letter to Future Me.</p><p className="path-note">One payment. Yours forever. No subscription ever.</p><Button asChild variant="link" className="path-link"><a href={APP_URL} target="_blank" rel="noopener noreferrer">Get lifetime access <ArrowUpRight size={16} /></a></Button></div></article>
      </div>
    </div></section>
    <section className="creator-section"><div className="landing-column"><div className="creator-avatar" aria-hidden="true">P</div><Eyebrow>A note from the creator</Eyebrow><h2><em>I built this because I needed it — and it didn't exist.</em></h2><div className="creator-copy"><p>I'm Pam. For a long time I didn't have words for what I had been through. I just knew something was different — and I couldn't explain why I still felt it even after I walked away.</p><p>The Healing Journal is the space I wish had existed. A place to understand, not perform. To reflect without having to explain yourself to anyone.</p></div></div></section>
    <section className="landing-section features-section"><div className="landing-column">
      <LandingPhoto src={mountainPhoto.url} alt="A serene mountain landscape beneath a soft evening sky" className="features-photo" />
      <Eyebrow>What's inside</Eyebrow><h2>Six spaces. One private place.</h2><p className="features-subtitle">No performing your healing. No right way to use it.</p>
      <div className="feature-rows">{featureRows.map(f => <div className="feature-row" key={f.name}><span className="feature-dot" aria-hidden="true" /><div><h3>{f.name}</h3><p>{f.description}</p></div></div>)}</div>
    </div></section>
    <section className="quote-section"><div className="landing-column"><span className="quote-mark" aria-hidden="true">“</span><blockquote>You don't have to become someone new.<br />You get to come back to yourself.</blockquote><p className="quote-credit">— The Healing Journal</p></div></section>
    <section className="privacy-section"><div className="landing-column"><Eyebrow>Your privacy</Eyebrow><h2>What you write stays with you.</h2><p>Your journal entries are saved on your device only — never on our servers, never seen by anyone else, including us.</p><ul className="privacy-checks">{["Saved locally on your device", "Never stored on our servers", "Delete your entries anytime"].map(row => <li key={row}><span><Check size={12} /></span>{row}</li>)}</ul></div></section>
    <section className="final-section"><div className="landing-column"><h2><em>You don't have to figure<br />everything out today.</em></h2><p>Maybe today you just need somewhere quiet to put your thoughts. The space will be here whenever you are ready.</p><div className="stacked-actions"><AccessLink>Start free — no card needed</AccessLink><AccessLink secondary>Get lifetime access — $15</AccessLink></div><p className="micro-text">Private · Self-guided · Educational tool only</p></div></section>
    <section className="disclaimer-band"><p><AlertCircle size={13} aria-hidden="true" />Disclaimer: The Healing Journal is for educational and informational purposes only. It is not a substitute for professional mental health care, therapy, or medical advice, and does not provide diagnosis or treatment of any kind. Always consult a qualified professional. Crisis support: call or text 988.</p></section>
    <footer className="journal-footer"><div className="footer-top"><a href="#top" className="journal-brand"><Leaf size={24} strokeWidth={1.4} /><span>The Healing Journal</span></a><div className="footer-links"><Link to="/disclaimer">Disclaimer</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><a href="mailto:hello@thehealingjournal.app">Contact</a></div></div><div className="footer-wordmark" aria-hidden="true">The Healing Journal</div><p>© {new Date().getFullYear()} · Educational tool only</p></footer>
  </main>;
}
