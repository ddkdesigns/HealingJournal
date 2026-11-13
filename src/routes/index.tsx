import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { useState } from 'react';
import pocketPhoto from '@/assets/healing_journal_hero_pocket.jpg.asset.json';
import phonePhoto from '@/assets/healing_journal_regulate_lifestyle.jpg.asset.json';
import founderPhoto from '@/assets/healing_journal_hero_desk.jpg.asset.json';
import appLogo from '@/assets/healing_journal_logo.png.asset.json';
import { BookOpen, Wind, PenLine, Home, Target, Compass, Smartphone, Heart, ArrowRight } from 'lucide-react';
import './landing.css';

const APP_URL = 'https://thehealingjournal.lovable.app/';
const title = 'The Healing Journal — A private place to come back to yourself';
const description = 'A private place to come back to yourself. Learn, find grounding tools, and journal privately on your device. Free to start, $15 once for lifetime access.';

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { property: 'og:url', content: 'https://healingjournal.lovable.app/' },
      { property: 'og:image', content: 'https://healingjournal.lovable.app/og-image.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Healing Journal logo' },
      { name: 'twitter:image', content: 'https://healingjournal.lovable.app/og-image.png' },
      { name: 'twitter:image:alt', content: 'Healing Journal logo' },
    ],
    links: [{ rel: 'canonical', href: 'https://healingjournal.lovable.app/' }],
  }),
});

const features = [
  ['Journal', 'Your words. Your space. Start with a guided prompt or write freely.'],
  ['Home', 'A daily affirmation, a mood check-in, and a moment to pause.'],
  ['Learn', 'Trauma and relationship patterns explained in plain language.'],
  ['Regulate', 'Guided breathing and grounding tools for when you need to slow down.'],
  ['Goals', 'Personal goals and small daily wins, at your pace.'],
  ['Journey', 'Your healing timeline, moods, and a letter to your future self.'],
];

const faqs = [
  ['Is it free to start?', 'Yes. The free preview does not expire and does not require a credit card. You can explore Home, one breathing tool, three Learn cards, and up to three journal entries.'],
  ['Is lifetime access a subscription?', 'No. Lifetime access is a single $15 payment, with no recurring subscription. Continue in the journal app to create your account and upgrade.'],
  ['Where are my journal entries saved?', 'Locally on the device and browser you use, not on the journal server. They do not sync across devices, and clearing browser data or losing your device can mean losing them. Account-related information and goals may be stored in the cloud.'],
  ['Do I need to know what to write?', 'No. You can begin with a guided prompt or write freely, at a pace that feels right for you. There is no right way to start.'],
  ['Does this replace therapy?', 'No. The Healing Journal is a self-guided educational and wellness tool, not therapy, medical care, or crisis support. If you need urgent help in the US, call or text 988. Elsewhere, contact your local crisis service or emergency number.'],
];

function AccessLink({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'outline' }) {
  return (
    <Button asChild variant={variant} className={`hj-button${variant === 'outline' ? ' hj-button-outline' : ''}`}>
      <a href={APP_URL} target="_blank" rel="noopener noreferrer">{children}</a>
    </Button>
  );
}

function LandingPhoto({ src, alt, label }: { src: string; alt: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  if (failed) return <PhotoPlaceholder label={label} />;
  return (
    <div className="hj-photo-content">
      {!loaded && <PhotoPlaceholder label={label} />}
      <img src={src} alt={alt} ref={(image) => { if (image?.complete && image.naturalWidth > 0) setLoaded(true); }} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
    </div>
  );
}

function Index() {
  return (
    <main className="hj-page" id="top">
      <header className="hj-nav">
        <div className="hj-wrap hj-nav-inner">
          <a className="hj-logo" href="#top" aria-label="The Healing Journal home"><img src={appLogo.url} alt="The Healing Journal leaf logo" width="36" height="36" /><span>Healing <em>Journal</em></span></a>
          <nav aria-label="Main navigation">
            <ul><li><a href="#features">Features</a></li><li><a href="#story">Story</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul>
          </nav>
          <AccessLink>Start free</AccessLink>
        </div>
      </header>

      <section className="hj-hero">
        <div className="hj-wrap">
          <div className="hj-topline"><span>The Healing Journal</span><span>Free to start · $15 once for lifetime</span></div>
          <h1>A private place to <em>come back</em> to yourself.</h1>
          <div className="hj-hero-row">
            <p>You don’t have to have all the answers. You just need a place to start.</p>
            <div className="hj-actions"><AccessLink>Start free</AccessLink><a className="hj-button hj-button-outline" href="#features">Explore the journal</a></div>
          </div>
          <div className="hj-photo hj-hero-photo"><LandingPhoto src={pocketPhoto.url} alt="A phone showing the Healing Journal logo tucked into a back jeans pocket" label="The Healing Journal, always with you" /></div>
        </div>
      </section>

      <section className="hj-section hj-strip"><div className="hj-wrap hj-list">
        {[['01', 'Learn', 'at your own pace'], ['02', 'Breathe', 'and ground'], ['03', 'Journal', 'privately']].map(([n, word, note]) => <div className="hj-list-row" key={n}><span className="hj-label">{n}</span><b>{word}</b><em>{note}</em></div>)}
      </div></section>

      <section className="hj-section hj-intro-section"><div className="hj-wrap hj-intro">
        <h2>A gentle space, with <em>peace of mind.</em></h2>
        <div><p className="hj-lead">Start in a few minutes. Go at whatever pace feels right.</p>
          <div className="hj-list hj-simple-list">
            <div className="hj-list-row"><span className="hj-label">01</span><div><h3>Simple</h3><p>One payment. No subscription, ever.</p></div></div>
            <div className="hj-list-row"><span className="hj-label">02</span><div><h3>Gentle</h3><p>A daily affirmation and a little space to pause.</p></div></div>
            <div className="hj-list-row"><span className="hj-label">03</span><div><h3>Private</h3><p>Your journal entries stay on the device you use.</p></div></div>
          </div>
        </div>
      </div></section>

      <section className="hj-section hj-features" id="features"><div className="hj-wrap hj-feature-layout">
        <div className="hj-photo hj-feature-photo"><LandingPhoto src={phonePhoto.url} alt="The Healing Journal regulation tools displayed on a phone" label="The Healing Journal phone preview" /></div>
        <div><p className="hj-label">The app</p><h2>Six spaces. One place to <em>feel like you.</em></h2>
          <div className="hj-list">{features.map(([name, copy], i) => <div className="hj-list-row hj-feature-row" key={name}><span className="hj-label">{String(i + 1).padStart(2, '0')}</span><b>{name}</b><p>{copy}</p></div>)}</div>
          <p className="hj-cta-line"><AccessLink>Start writing</AccessLink></p>
        </div>
      </div></section>

      <section className="hj-section hj-story" id="story"><div className="hj-wrap hj-story-layout">
        <div className="hj-photo hj-story-photo"><LandingPhoto src={founderPhoto.url} alt="A woman sitting at a marble desk with a laptop in warm window light" label="A quiet moment with Pam" /></div>
        <div><p className="hj-label">Why I created The Healing Journal</p><h2>I built the journal <em>I wish I’d had.</em></h2>
          <p>Hi, I’m Pam. There was a time when I knew something wasn’t right, but I couldn’t explain what I was feeling or why. I felt unlike myself, and I was searching for answers I didn’t yet have the words for.</p>
          <p>Then I came across a TikTok video about rose-colored glasses. Something about it made me stop and question things. I started looking more closely at my experiences, my relationships, and the things I’d been struggling to understand.</p>
          <p>But the terminology was confusing. I knew I needed to understand what had happened to me, but I didn’t always know where to begin. So I started writing. I poured my thoughts into a paper journal, trying to make sense of my feelings and everything I was learning along the way.</p>
          <p>Three years later, I went back and read those pages. I saw a version of myself trying so hard to understand what she had been through. I could see the confusion, the questions, and the pain I hadn’t fully understood. But I could also see how much I’d grown.</p>
          <p>I wish I’d had a place that brought everything together: a place to learn, reflect, find grounding tools, and recognize my own progress. That’s why I created The Healing Journal. A place to understand, not perform. To reflect without having to explain yourself to anyone.</p>
          <p>I built it for the person who knows something feels wrong but can’t quite explain it yet. For the person trying to understand their experiences, one small realization at a time. And for the person who might one day look back and see just how far they’ve come.</p>
          <blockquote>One day, you’ll look back and see the progress you can’t see today.</blockquote>
          <AccessLink>Start your free journey</AccessLink>
        </div>
      </div></section>

      <section className="hj-section"><div className="hj-wrap hj-privacy">
        <p className="hj-label">Privacy</p><h2>Your words. <em>Your device.</em></h2>
        <p className="hj-privacy-lead">Your journal entries are stored locally on your device and are not transmitted to the journal server.</p>
        <div className="hj-privacy-grid">
          <div><Smartphone /><h3>On your device</h3><p>Entries stay in the browser and device you write them on. They do not automatically sync.</p></div>
          <div><Heart /><h3>Never sold</h3><p>Account-related information and goals may be stored in the cloud. We do not sell your personal data.</p></div>
          <div><Compass /><h3>Good to know</h3><p>Clearing browser data or losing your device can mean losing local journal entries.</p></div>
        </div>
        <Link className="hj-button hj-privacy-link" to="/privacy">Read our privacy policy</Link>
      </div></section>

      <section className="hj-section hj-pricing" id="pricing"><div className="hj-wrap">
        <p className="hj-label">Pricing</p><h2>Start free. <em>Stay as long as you like.</em></h2><p className="hj-lead">No pressure. No subscription.</p>
        <div className="hj-price-grid">
          <article className="hj-price-card"><h3>Free preview</h3><div className="hj-amount">$0</div><p>Free to start, always.</p><ul>{['Free tier does not expire', 'Home tab', 'One breathing tool', 'Three Learn cards', 'Up to three journal entries', 'No credit card required'].map(item => <li key={item}>{item}</li>)}</ul><AccessLink>Start free</AccessLink></article>
          <article className="hj-price-card hj-price-featured"><h3>Lifetime access</h3><div className="hj-amount">$15</div><p>One time. Yours for a lifetime.</p><ul>{['Full access to paid journal features', 'All six regulation tools', 'Unlimited journaling', 'Healing timeline and goals tracker', 'Letter to Future Me', 'No recurring subscription'].map(item => <li key={item}>{item}</li>)}</ul><AccessLink variant="outline">Get lifetime access</AccessLink></article>
        </div>
      </div></section>

      <section className="hj-section hj-faq" id="faq"><div className="hj-wrap hj-faq-layout">
        <div><p className="hj-label">FAQ</p><h2>Got questions? <em>Here are gentle answers.</em></h2></div>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </div></section>

      <footer className="hj-footer"><div className="hj-wrap">
        <nav className="hj-footer-links" aria-label="Legal and contact">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <a href="https://www.threads.com/@silentlyshifting" target="_blank" rel="noopener noreferrer">Message me on <b>Threads</b>. 🖤</a>
        </nav>
        <p className="hj-footer-copy">© {new Date().getFullYear()} The Healing Journal</p>
      </div></footer>
    </main>
  );
}
