import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { ArrowUpRight, ArrowRight, BookOpen, Wind, PenLine, Leaf, Check, ShieldCheck, Menu, X, Heart, Home, Target, Compass, Smile, Meh, Frown, Sun, Plus, Lock, Smartphone, CloudOff } from 'lucide-react';
import journalPhoto from '@/assets/pam.jpg.asset.json';
import cloudPuff from '@/assets/cloud-puff.webp';
import cloudBank from '@/assets/cloud-bank.webp';

const APP_URL = 'https://thehealingjournal.lovable.app/';
const title = 'The Healing Journal — A Private Place to Come Back to Yourself';
const description = 'A private place to come back to yourself. Learn, find grounding tools, and journal privately on your device. Free to start, $15 once for lifetime access.';
export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, { property: 'og:url', content: 'https://healingjournal.lovable.app/' }], links: [{ rel: 'canonical', href: 'https://healingjournal.lovable.app/' }] }),
});

const founderParagraphs = [
  "I'm Pam. There was a time when I knew something wasn't right, but I couldn't explain what I was feeling or why. I felt unlike myself, and I was searching for answers I didn't yet have the words for.",
  'Then I came across a TikTok video about rose-colored glasses. Something about it made me stop and question things. I started looking more closely at my experiences, my relationships, and the things I’d been struggling to understand.',
  "But the terminology was confusing. I knew I needed to understand what had happened to me, but I didn't always know where to begin.",
  'So I started writing. I poured my thoughts into a paper journal, trying to make sense of my feelings, my experiences, and everything I was learning along the way.',
  "Three years later, I went back and read those pages. I saw a version of myself who was trying so hard to understand what she had been through. I could see the confusion, the questions, and the pain I hadn't fully understood at the time. But I could also see how much I'd grown.",
  "I wish I'd had a place that brought everything together — a place to learn, reflect, find grounding tools, and recognize my own progress. A place that helped me understand the terminology and make sense of what I was experiencing, without having to piece everything together alone.",
  "That's why I created The Healing Journal. It is the space I wish had existed. A place to understand, not perform. To reflect without having to explain yourself to anyone.",
  "I built it for the person who knows something feels wrong but can't quite explain it yet. For the person trying to understand their experiences, one small realization at a time. And for the person who might one day look back and finally see just how far they've come.",
];
const faqs = [
  ['Is it free to start?', 'Yes. The free preview does not expire and does not require a credit card. You can explore Home, one breathing tool, three Learn cards, and up to three journal entries.'],
  ['Is lifetime access a subscription?', 'No. Lifetime access is a single $15 payment, with no recurring subscription. Continue in the journal app to create your account and upgrade.'],
  ['Where are my journal entries saved?', 'Your journal entries are stored locally on the device and browser you use, not transmitted to the journal server. They do not automatically sync across devices. Clearing browser data or losing your device can mean losing these entries. Account-related information and goals may be stored in the cloud.'],
  ['Do I need to know what to write?', 'No. You can begin with a guided prompt or write freely, at a pace that feels right for you. There is no right way to start.'],
  ['Does this replace therapy?', 'No. The Healing Journal is a self-guided educational and wellness tool, not therapy, medical care, or crisis support. If you need urgent help in the US, call or text 988. Elsewhere, contact your local crisis service or emergency number.'],
];
const tabs = [Home, BookOpen, Wind, PenLine, Target, Compass];

function AccessLink({ children, variant = 'dark' }: { children: ReactNode; variant?: 'dark' | 'light' | 'outline' }) {
  return <Button asChild variant={variant === 'outline' ? 'outline' : 'default'} className={`pill-button pill-${variant}`}><a href={APP_URL} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={15} /></a></Button>;
}
function Brand() { return <a href="#top" className="journal-brand"><Leaf size={24} strokeWidth={1.4} /><span>The Healing Journal</span></a>; }
function Cloud({ className, bank = false }: { className: string; bank?: boolean }) {
  return <img src={bank ? cloudBank : cloudPuff} alt="" aria-hidden="true" className={`cloud ${className}`} width={bank ? 1920 : 960} height={bank ? 640 : 576} loading="lazy" />;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="journal-nav"><div className="journal-container nav-inner"><Brand /><nav aria-label="Main navigation" className={`nav-links${open ? ' is-open' : ''}`}>{[['Features', '#features'], ['Story', '#story'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><AccessLink>Start free</AccessLink><Button className="mobile-menu" variant="ghost" size="icon" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></div></header>;
}

function Phone({ children, className = '', label, active = 0 }: { children: ReactNode; className?: string; label: string; active?: number }) {
  return <div className={`phone ${className}`} role="img" aria-label={label}><div className="phone-notch" /><div className="phone-screen"><div className="phone-status"><span>9:41</span><span className="phone-dots"><i /><i /><i /></span></div>{children}<div className="phone-tabs">{tabs.map((Icon, i) => <span key={i} className={i === active ? 'selected' : ''}><Icon size={15} strokeWidth={1.5} /></span>)}</div></div></div>;
}
function HomeScreen() {
  return <div className="screen-body"><div className="screen-brand"><Leaf size={13} strokeWidth={1.5} />The Healing Journal</div><p className="screen-kicker">Good morning</p><h3 className="screen-title">Welcome back.</h3><p className="screen-sub">Take a breath. You are here.</p><div className="screen-card affirmation"><Sun size={16} strokeWidth={1.4} /><span>Daily affirmation</span><p>“I am allowed to grow at my own pace.”</p></div><div className="screen-card"><span className="screen-label">How are you feeling today?</span><div className="mood-row">{[Smile, Sun, Meh, Frown, Heart].map((Icon, i) => <i key={i} className={i === 1 ? 'selected' : ''}><Icon size={16} strokeWidth={1.4} /></i>)}</div></div></div>;
}
function JournalScreen() {
  return <div className="screen-body"><h3 className="screen-title large">Journal</h3><div className="screen-card prompt"><span className="screen-label">Today’s prompt</span><p>What is on your mind today?</p></div><div className="screen-list">{['A moment you want to remember', 'Something you are learning about yourself', 'Free writing'].map(item => <div key={item}><span>{item}</span><ArrowRight size={12} /></div>)}</div><div className="screen-writing">Today, I’m giving myself permission to…<i /></div><div className="screen-lock"><Lock size={11} /> Saved on this device</div></div>;
}
function RegulateScreen() {
  return <div className="screen-body center"><h3 className="screen-title large">Breathe</h3><p className="screen-sub">Come back to the present.</p><div className="breath"><span /><span /><span /><p>Breathe in</p></div><div className="screen-list">{['Guided breathing', 'Sensory grounding', 'Body scan'].map(item => <div key={item}><span>{item}</span><ArrowRight size={12} /></div>)}</div></div>;
}
function AffirmScreen() {
  return <div className="screen-body sky"><Leaf size={26} strokeWidth={1.2} /><p className="sky-quote">One day, you’ll look back and see the progress you can’t see today.</p><span className="sky-button">Begin</span></div>;
}

function FounderPhoto() { const [failed, setFailed] = useState(false); return <div className="founder-photo">{failed ? <PhotoPlaceholder label="A quiet moment with a journal" /> : <img src={journalPhoto.url} alt="Pam writing in her journal in a cozy armchair" loading="lazy" onError={() => setFailed(true)} />}</div>; }

function Index() {
  return <main className="journal-site" id="top"><Nav />
    <section className="hero">
      <div className="journal-container hero-copy">
        <span className="hero-pill">Free to start · $15 once for lifetime</span>
        <h1>A private place to<br />come back to yourself.</h1>
        <p>You don't have to have all the answers.<br />You just need a place to start.</p>
        <div className="hero-actions"><AccessLink>Start free</AccessLink><a className="soft-link" href="#features">Explore the journal <ArrowRight size={14} /></a></div>
      </div>
      <div className="hero-stage">
        <div className="hero-glow" />
        <Cloud className="cloud-hero-left" />
        <Phone className="phone-back" label="Journal screen preview" active={3}><JournalScreen /></Phone>
        <Phone className="phone-front" label="Home screen preview"><HomeScreen /></Phone>
        <Cloud className="cloud-hero-right" />
      </div>
      <div className="journal-container highlights">
        {[[BookOpen, 'Learn at', 'your own pace'], [Wind, 'Breathe', 'and ground'], [PenLine, 'Journal', 'privately']].map(([Icon, a, b]) => { const I = Icon as typeof Leaf; return <div key={a as string}><span className="icon-circle"><I size={18} strokeWidth={1.4} /></span><p>{a as string}<br />{b as string}</p></div>; })}
      </div>
      <p className="footnote">No card required · Your entries stay on your device</p>
    </section>

    <section className="block" id="features">
      <div className="journal-container">
        <div className="heading"><h2>A gentle space,<br />with peace of mind.</h2><p>Start in a few minutes.<br />Go at whatever pace feels right.</p></div>
        <div className="tri-grid">
          <article className="tint-card"><div className="widget price-widget"><span>Lifetime access</span><strong>$15</strong><em><Check size={12} /> Paid once</em></div><h3>Simple</h3><p>One payment.<br />No subscription, ever.</p></article>
          <article className="tint-card"><div className="widget"><span>How are you feeling?</span><div className="mood-row big">{[Smile, Sun, Meh, Frown, Heart].map((Icon, i) => <i key={i} className={i === 0 ? 'selected' : ''}><Icon size={17} strokeWidth={1.4} /></i>)}</div></div><h3>Gentle</h3><p>A daily affirmation and<br />a little space to pause.</p></article>
          <article className="tint-card"><div className="widget rows-widget">{[[Smartphone, 'Journal entries', 'On device'], [CloudOff, 'Auto sync', 'Off'], [Lock, 'Your words', 'Private']].map(([Icon, a, b]) => { const I = Icon as typeof Leaf; return <div key={a as string}><I size={13} /><span>{a as string}</span><em><Check size={10} /> {b as string}</em></div>; })}</div><h3>Private</h3><p>Your journal entries stay<br />on the device you use.</p></article>
        </div>
      </div>
    </section>

    <section className="block spaces">
      <div className="journal-container">
        <div className="heading"><h2>Six spaces.<br />One place to feel like you.</h2></div>
        <div className="duo-grid">
          <article className="showcase"><h3>Journal</h3><p>Your words. Your space.</p><a className="soft-link" href={APP_URL} target="_blank" rel="noopener noreferrer">Start writing <ArrowRight size={14} /></a><Phone className="phone-crop" label="Journal screen preview" active={3}><JournalScreen /></Phone></article>
          <article className="showcase"><h3>Regulate</h3><p>Breathing and grounding tools.</p><a className="soft-link" href={APP_URL} target="_blank" rel="noopener noreferrer">Take a breath <ArrowRight size={14} /></a><Phone className="phone-crop" label="Breathing tool preview" active={2}><RegulateScreen /></Phone></article>
        </div>
        <div className="orbit">
          <div className="orbit-col">{[[Home, 'Home', 'A daily affirmation, a mood check-in, and a moment to pause.'], [BookOpen, 'Learn', 'Trauma and relationship patterns explained in plain language.']].map(([Icon, t, d]) => { const I = Icon as typeof Leaf; return <div key={t as string} className="orbit-item"><span className="icon-circle"><I size={17} strokeWidth={1.4} /></span><h4>{t as string}</h4><p>{d as string}</p></div>; })}</div>
          <div className="orbit-sphere" aria-hidden="true"><span /><span /><span /><Leaf size={44} strokeWidth={1} /></div>
          <div className="orbit-col">{[[Target, 'Goals', 'Personal goals and small daily wins, at your pace.'], [Compass, 'Journey', 'Your healing timeline, moods, and a letter to your future self.']].map(([Icon, t, d]) => { const I = Icon as typeof Leaf; return <div key={t as string} className="orbit-item"><span className="icon-circle"><I size={17} strokeWidth={1.4} /></span><h4>{t as string}</h4><p>{d as string}</p></div>; })}</div>
        </div>
      </div>
    </section>

    <section className="block sky-band" id="story">
      <Cloud className="cloud-story-left" /><Cloud className="cloud-story-right" />
      <div className="journal-container">
        <div className="heading"><span className="kicker">Why I created The Healing Journal</span><h2>I built the journal<br />I wish I'd had.</h2></div>
        <article className="founder-card">
          <div className="founder-side"><FounderPhoto /><span className="founder-signature">With care, Pam</span></div>
          <div className="founder-letter">{founderParagraphs.map(p => <p key={p}>{p}</p>)}<blockquote>“One day, you'll look back and see the progress you can't see today.”</blockquote><p className="founder-closing">You don't have to figure it all out today.</p><AccessLink>Start your free journey</AccessLink></div>
        </article>
      </div>
    </section>

    <section className="block" id="privacy">
      <div className="journal-container">
        <div className="heading"><h2>Your words.<br />Your device.</h2><p>Your journal entries are stored locally on your device<br />and are not transmitted to the journal server.</p></div>
        <div className="bubbles">
          <div className="bubble"><span className="bubble-icon"><Smartphone size={18} /></span><div><strong>On your device</strong><p>Your journal entries stay in the browser and device you write them on. They do not automatically sync.</p></div></div>
          <div className="bubble right"><div><strong>Never sold</strong><p>Account-related information and goals may be stored in the cloud. We do not sell your personal data.</p></div><span className="bubble-icon"><ShieldCheck size={18} /></span></div>
          <div className="bubble"><span className="bubble-icon"><Heart size={18} /></span><div><strong>Good to know</strong><p>Clearing browser data or losing your device can mean losing local journal entries.</p></div></div>
        </div>
        <div className="center-link"><Link to="/privacy" className="soft-link">Read our privacy policy <ArrowRight size={14} /></Link></div>
      </div>
    </section>

    <section className="block pricing" id="pricing">
      <div className="journal-container">
        <div className="heading"><h2>Start free.<br />Stay as long as you like.</h2><p>No pressure. No subscription.</p></div>
        <div className="price-grid">
          <article className="price-card"><span className="kicker">Free preview</span><div className="price">$0<span>Free to start, always</span></div><ul>{['Free tier does not expire', 'Home tab', 'One breathing tool', 'Three Learn cards', 'Up to three journal entries', 'No credit card required'].map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><AccessLink variant="outline">Start free</AccessLink></article>
          <article className="price-card featured"><span className="kicker">Lifetime access</span><div className="price">$15<span>One time. Yours for a lifetime.</span></div><ul>{['Full access to paid journal features', 'All six regulation tools', 'Unlimited journaling', 'Healing timeline and goals tracker', 'Letter to Future Me', 'No recurring subscription'].map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><AccessLink>Get lifetime access</AccessLink></article>
        </div>
      </div>
    </section>

    <section className="cloud-rise" aria-labelledby="rise-title">
      <div className="journal-container heading"><h2 id="rise-title">You don't have to figure<br />everything out today.</h2></div>
      <div className="rise-stage"><Phone className="phone-rise" label="Affirmation screen preview"><AffirmScreen /></Phone><Cloud bank className="cloud-bank" /></div>
    </section>

    <section className="block faq" id="faq">
      <div className="journal-container">
        <div className="heading"><h2>Got questions?<br />Here are gentle answers.</h2></div>
        <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<Plus size={16} /></summary><p>{a}</p></details>)}</div>
      </div>
    </section>

    <section className="closing" id="how-it-works">
      <div className="journal-container closing-layout">
        <div className="steps-card"><h3>Begin in three<br />small steps.</h3><ol>{['Create your free account', 'Start where you are', 'Make the space your own'].map((s, i) => <li key={s}><span>{i + 1}</span>{s}</li>)}</ol><em className="steps-tag">No card needed <Check size={12} /></em></div>
        <Phone className="phone-closing" label="Home screen preview"><HomeScreen /></Phone>
        <div className="price-dark"><h3>One space,<br />one price.</h3><strong>$15</strong><span>Once, for lifetime access</span><AccessLink variant="light">Start free</AccessLink></div>
      </div>
    </section>

    <footer className="journal-footer"><div className="journal-container"><div className="footer-cols">
      <div><h4>Explore</h4><a href="#features">Features</a><a href="#story">Story</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
      <div><h4>Legal</h4><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/disclaimer">Disclaimer</Link></div>
      <div><h4>Contact</h4><a href="mailto:hello@thehealingjournal.app">hello@thehealingjournal.app</a><a href={APP_URL} target="_blank" rel="noopener noreferrer">Open the journal</a></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} The Healing Journal</span><span>Made with care. At your own pace.</span></div></div></footer>
  </main>;
}
