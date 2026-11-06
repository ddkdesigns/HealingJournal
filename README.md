# HealingJournal

Build a stunning glassmorphism landing page for 

The Healing Journal app inside this Lovable project. 

This is a separate single-page marketing site — 

not the app itself. It exists solely to convert 

visitors into buyers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESIGN SYSTEM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STRICT COLOUR RULE:

No green of any kind anywhere on this page.

No sage, no forest, no mint, no olive, 

no emerald, no teal. Zero green.

COLOUR PALETTE:

Primary background: #0D0D1A (deep midnight navy)

Secondary background: #13132A (dark indigo)

Glass panel background: rgba(255,255,255,0.06)

Glass panel border: rgba(255,255,255,0.12)

Glass panel hover: rgba(255,255,255,0.10)

Gradient 1 (hero): 

linear-gradient(135deg, #1A0A2E 0%, #0D0D1A 40%, #0A1628 100%)

Gradient 2 (accent orbs):

- Orb 1: #9B4DCA (deep violet/purple)

- Orb 2: #6B4DE8 (indigo)

- Orb 3: #C4628A (dusty rose)

- Orb 4: #4D7BE8 (periwinkle blue)

- Orb 5: #E8944D (warm amber)

Primary accent: #B088F9 (soft violet)

Secondary accent: #89A4F7 (periwinkle)

Tertiary accent: #F0A8C8 (blush rose)

Warm accent: #F5C87A (champagne gold)

Text primary: #F0EEF8 (soft white with 

slight violet warmth)

Text secondary: rgba(240,238,248,0.65)

Text muted: rgba(240,238,248,0.40)

CTA button gradient: 

linear-gradient(135deg, #9B4DCA, #6B4DE8)

CTA button shadow: 

0 8px 40px rgba(155,77,202,0.45)

CTA hover shadow: 

0 12px 50px rgba(155,77,202,0.65)

GLASSMORPHISM RULES — apply to every panel:

background: rgba(255,255,255,0.06)

backdrop-filter: blur(24px)

-webkit-backdrop-filter: blur(24px)

border: 1px solid rgba(255,255,255,0.12)

border-radius: 24px

box-shadow: 

  0 8px 32px rgba(0,0,0,0.3),

  inset 0 1px 0 rgba(255,255,255,0.1)

GLASS HOVER STATE:

background: rgba(255,255,255,0.10)

border: 1px solid rgba(255,255,255,0.18)

transform: translateY(-2px)

transition: all 0.35s ease

AMBIENT ORB LIGHTING:

Place large blurred radial gradient orbs 

behind all content as fixed background 

elements. They should be visible through 

the glass panels creating depth and glow.

Orbs use position absolute, 

border-radius 50%, 

filter: blur(120px), 

opacity 0.18-0.25.

They should shift very slowly using a 

CSS animation — 25s infinite alternate 

ease-in-out — giving the page a living, 

breathing quality.

Orb positions:

- Top left: 600px circle, color #9B4DCA

- Top right: 500px circle, color #4D7BE8  

- Center: 700px circle, color #6B4DE8 

  at opacity 0.12

- Bottom left: 400px circle, color #C4628A

- Bottom right: 500px circle, color #E8944D 

  at opacity 0.15

FONTS:

Import from Google Fonts:

Playfair Display — weights 300, 400, 

400 italic, 500 italic

DM Sans — weights 300, 400, 500

Lora — 400 italic

Headings: Playfair Display weight 400

Body: DM Sans weight 300-400

Accent/quotes: Lora italic

App name: Playfair Display weight 300, 

letter-spacing 3px

NO EMOJIS ANYWHERE ON THIS PAGE.

Use Lucide icons exclusively for all 

iconography. Import from lucide-react.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GLOBAL LAYOUT RULES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Single long-scroll page. No routing. 

No navigation links except a floating 

top bar with the app name and one CTA.

Max content width: 1100px, centered.

All sections have generous padding: 

100px top and bottom on desktop, 

60px on mobile.

Scroll-triggered animations on all 

sections: opacity 0 to 1, 

translateY 30px to 0, 

duration 0.7s ease, 

staggered on grouped elements 

using Intersection Observer.

Smooth scroll behaviour on the 

html element.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1 — FLOATING NAV BAR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Position: fixed top, full width, z-index 100.

Background: rgba(13,13,26,0.7)

backdrop-filter: blur(20px)

border-bottom: 1px solid rgba(255,255,255,0.08)

Padding: 16px 40px

Display: flex, space-between, align center.

Left side:

- Lucide icon: BookHeart, size 20px, 

  color #B088F9

- App name: "The Healing Journal"

  Playfair Display, weight 300, 

  font-size 17px, color #F0EEF8, 

  letter-spacing 2px

  Both sit inline with 10px gap.

Right side:

- Single button: "Get Access — $15"

  Gradient background (CTA gradient above)

  DM Sans, 13px, weight 500, white

  border-radius: 50px

  padding: 10px 24px

  box-shadow: CTA button shadow above

  Hover: lifts with stronger shadow

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 2 — HERO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full viewport height (100vh).

Background: Gradient 1.

Ambient orbs behind content.

All content centered vertically 

and horizontally.

Top label (animate in first):

Lucide icon: Sparkles, size 14px, 

color #F0A8C8, inline before text.

Text: "A private space for your healing"

DM Sans, 12px, weight 400, 

color #F0A8C8, letter-spacing 3px, 

uppercase, margin-bottom 28px.

Wrapped in a glass pill:

background rgba(240,168,200,0.1)

border 1px solid rgba(240,168,200,0.2)

border-radius 50px, padding 8px 20px.

Main headline (animate in second, 

0.15s delay):

Playfair Display, weight 400, 

font-size 62px desktop / 38px mobile,

line-height 1.25,

color #F0EEF8,

max-width 720px, centered.

"You are not too much.

You were surrounded

by too little."

Subheadline (animate in third, 

0.3s delay):

Lora italic, font-size 18px, 

color rgba(240,238,248,0.65),

line-height 1.9, max-width 540px, 

centered, margin-top 24px.

"The Healing Journal is a private 

digital companion for women healing 

from CPTSD, narcissistic abuse, 

and nervous system dysregulation."

CTA button (animate in fourth, 

0.45s delay):

"Get Instant Access — $27"

Gradient: linear-gradient(135deg, 

#9B4DCA, #6B4DE8)

DM Sans, 16px, weight 500, white

border-radius: 50px

padding: 17px 52px

box-shadow: CTA button shadow

Hover: translateY(-2px), 

stronger shadow

margin-top: 40px

Small text below button:

DM Sans, 11px, 

color rgba(240,238,248,0.38),

margin-top 14px:

"One-time purchase · Lifetime access · 

Any device · No app store needed"

Scroll indicator at bottom of hero:

Lucide icon: ChevronDown, 

size 20px, 

color rgba(255,255,255,0.25),

centered, animated bounce 

(translateY 0 to 8px, 

1.8s infinite ease-in-out)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 3 — THE MIRROR MOMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: make the reader feel 

completely seen before introducing 

the product. Most emotionally 

important section.

Background: #0D0D1A with orbs visible.

Centered, max-width 700px.

Label above heading:

Lucide icon: Heart, size 13px, 

color #F0A8C8, inline.

"does this sound familiar"

DM Sans, 10px, uppercase, 

letter-spacing 3px, color #F0A8C8.

Glass pill same as hero label.

Heading:

Playfair Display, weight 400, 

font-size 40px desktop / 28px mobile,

color #F0EEF8, line-height 1.4, 

centered, margin-bottom 24px.

"You left. Or maybe you stayed.

Either way, something in you

never fully came back."

Subtext:

Lora italic, 16px, 

color rgba(240,238,248,0.58),

line-height 2.0, centered, 

max-width 580px, margin-bottom 48px.

"You know the feeling. That low hum 

of anxiety that never fully goes away. 

The way certain words, silences, or 

expressions send your body into a panic 

it cannot explain. The exhaustion of 

being hypervigilant in every room 

you walk into."

Statement rows — 6 glass pills 

stacked vertically, each animating 

in with staggered delay.

Each pill:

Glass panel styles (full glassmorphism)

border-radius: 16px

padding: 16px 22px

display: flex, align-items: center, 

gap: 14px

width: 100%, max-width: 580px, 

centered, margin-bottom 10px.

Left of each pill:

Lucide icon, size 16px, 

color #B088F9, flexShrink 0.

Right: DM Sans, 14px, weight 400, 

color #F0EEF8, line-height 1.5.

Row 1: icon: Brain

"You overthink every interaction 

and do not know why."

Row 2: icon: CloudRain

"You feel guilty for things that 

were never your fault."

Row 3: icon: Waves

"You are either numb or overwhelmed — 

there is no in between."

Row 4: icon: SearchX

"You have searched for answers more 

times than you would like to admit."

Row 5: icon: MessageCircleOff

"You know something happened to you. 

You just do not always have 

the words for it."

Row 6: icon: Moon

"You are tired of holding 

all of this alone."

Closing line below the pills:

Playfair Display, weight 400, 

italic, font-size 24px, 

color #F5C87A, centered, 

margin-top 48px.

"You found this for a reason."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 4 — WHAT THIS IS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #13132A.

Two-column layout on desktop 

(50/50), single column on mobile.

Left column — copy:

Label: Lucide icon: Compass, 

size 13px, color #89A4F7.

"introducing" — DM Sans, 10px, 

uppercase, letter-spacing 3px, 

color #89A4F7. Glass pill.

Heading: Playfair Display, 400, 

font-size 38px, color #F0EEF8, 

line-height 1.35, margin-bottom 22px.

"A private space that finally 

makes sense of what 

you have been through."

Body: DM Sans, weight 300, 15px, 

color rgba(240,238,248,0.65), 

line-height 1.95.

"The Healing Journal is not therapy. 

It is not a course. It is not another 

self-help book telling you to journal 

your way to happiness.

It is a private, interactive digital 

companion built specifically for women 

navigating CPTSD, narcissistic abuse 

recovery, trauma bonding, and nervous 

system dysregulation.

It gives you a place to understand 

what happened to you, tools to calm 

your body when it spirals, and a 

private journal to document your 

healing so you can one day look back 

and see how far you came."

Right column — decorative glass device:

Build a stylised phone frame using 

pure CSS and glassmorphism — 

no real screenshots.

Outer frame: glass panel, 

width 260px, height 480px, 

border-radius 40px, 

centered in column.

Inside the frame show 3 stacked 

mini glass cards representing 

the app UI:

Card 1 (top): 

Lucide icon: Sun, size 14px, 

color #F5C87A.

DM Sans 11px "Good evening" 

color #F0EEF8.

Lora italic 10px 

"You came back. That matters." 

color rgba(240,238,248,0.6).

Card 2 (middle):

Lucide icon: Wind, size 14px, 

color #B088F9.

DM Sans 11px "4-7-8 Breathing" 

color #F0EEF8.

Small animated circle — 

pulsing gently in violet.

Card 3 (bottom):

Lucide icon: BookOpen, size 14px, 

color #F0A8C8.

DM Sans 11px "Today's Entry" 

color #F0EEF8.

Two short muted lines 

as text placeholder bars 

(glass rectangles, 

border-radius 4px).

Place a soft violet-purple 

glow orb behind the phone frame: 

200px, color #9B4DCA, 

blur 80px, opacity 0.3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 5 — DISCLAIMER BAND

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full width band.

Background: rgba(245,200,122,0.07)

border-top: 1px solid 

rgba(245,200,122,0.18)

border-bottom: 1px solid 

rgba(245,200,122,0.18)

padding: 20px 24px.

Lucide icon: AlertCircle, 

size 14px, color #F5C87A, 

inline before text, flexShrink 0.

DM Sans, 12px, weight 400,

color rgba(245,200,122,0.80),

line-height 1.8, 

max-width 700px, centered.

"Disclaimer: The Healing Journal is 

for educational and informational 

purposes only. It is not a substitute 

for professional mental health care, 

therapy, or medical advice, and does 

not provide diagnosis or treatment 

of any kind. Always consult a 

qualified professional. 

Crisis support: call or text 988."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 6 — FEATURES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #0D0D1A, orbs visible.

Section heading: Playfair Display, 

400, 40px, color #F0EEF8, 

centered, margin-bottom 14px.

"Everything inside 

The Healing Journal"

Subheading: DM Sans, 300, 15px, 

color rgba(240,238,248,0.55), 

centered, margin-bottom 56px.

"Six tabs. One private space. 

Everything you need for exactly 

where you are right now."

2-column grid on desktop, 

1 column on mobile, gap 20px.

6 glass feature cards — 

full glassmorphism styles.

Each card: padding 28px, 

border-radius 24px.

Hover: glass hover state above.

Cards animate in staggered on scroll.

Each card layout:

- Icon container: width 48px, 

  height 48px, border-radius 14px,

  glass panel style, 

  display flex, centered.

  Icon size 22px.

  margin-bottom 18px.

- Title: Playfair Display, 400, 

  19px, color #F0EEF8, 

  margin-bottom 10px.

- Body: DM Sans, 300, 13px, 

  color rgba(240,238,248,0.60), 

  line-height 1.9.

CARD 1:

Icon: Home, color #B088F9

Icon container gradient: 

rgba(176,136,249,0.15) bg, 

border rgba(176,136,249,0.25)

Title: "Home — Your Daily Anchor"

Body: "A personalised greeting 

using your first name, the time 

of day, and where you are in your 

journey. Rotating affirmations 

written for trauma survivors. 

Daily mood check-in, intention 

setting, and calm quick-access 

to every section."

CARD 2:

Icon: BookOpen, color #89A4F7

Icon container: 

rgba(137,164,247,0.15) bg,

border rgba(137,164,247,0.25)

Title: "Learn — Understand What 

Happened to You"

Body: "A full educational library 

covering CPTSD, narcissistic abuse, 

gaslighting, manipulation, trauma 

bonding, fawning, love bombing, 

intermittent reinforcement, and more — 

in plain everyday language with 

no clinical jargon and no judgment."

CARD 3:

Icon: Wind, color #F0A8C8

Icon container: 

rgba(240,168,200,0.15) bg,

border rgba(240,168,200,0.25)

Title: "Regulate — When Your Body 

Will Not Calm Down"

Body: "Six guided nervous system 

tools: animated breathing, sensory 

grounding, trauma-informed body scan, 

cold water reset, trauma release 

shaking, and an SOS crisis tool — 

each with a plain explanation of 

what it is and how it works."

CARD 4:

Icon: PenLine, color #F5C87A

Icon container: 

rgba(245,200,122,0.15) bg,

border rgba(245,200,122,0.25)

Title: "Journal — Your Private 

Protected Space"

Body: "Twenty trauma-informed 

prompts rotating daily. Free writing 

always available. Mood tagging. 

Every entry encrypted and saved to 

your personal cloud account. 

No one else can read your words — 

ever."

CARD 5:

Icon: Target, color #B088F9

Icon container: 

rgba(176,136,249,0.15) bg,

border rgba(176,136,249,0.25)

Title: "Goals — The Small Victories 

That Actually Matter"

Body: "Personal healing goals 

entirely your own. Visual progress 

tracking with a slider. Ten daily 

win checkboxes that reset each 

morning. A streak counter for 

every day you show up for yourself."

CARD 6:

Icon: Milestone, color #89A4F7

Icon container: 

rgba(137,164,247,0.15) bg,

border rgba(137,164,247,0.25)

Title: "Journey — Watch Yourself Heal"

Body: "A visual timeline of every 

entry written. A mood trend chart. 

A Then vs Now comparison of your 

first and most recent entry. 

A Letter to Future Me that seals 

today and unlocks on a date 

you choose."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 7 — PULL QUOTE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full width. Background: #13132A.

Large ambient orbs behind content.

Centered. Padding 120px top and bottom.

Decorative quotation mark:

Playfair Display, 220px, 

color rgba(176,136,249,0.07),

position absolute, top-left 

of section, not interactive.

Glass panel centered:

max-width 680px, padding 60px,

full glassmorphism styles,

border-color rgba(176,136,249,0.2).

Lucide icon: Quote, size 28px, 

color #B088F9, margin-bottom 28px, 

centered.

Quote text: Playfair Display, 

400, italic, font-size 28px 

desktop / 20px mobile, 

color #F0EEF8, line-

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://healingjournal.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/99dfc4b0-baa3-4aa3-b277-c37784701c2a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
