import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — The Healing Journal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "Educational use disclaimer and crisis support information for The Healing Journal." },
      { property: "og:title", content: "Disclaimer — The Healing Journal" },
      { property: "og:description", content: "Educational use disclaimer and crisis support information for The Healing Journal." },
      { property: "og:url", content: "https://healingjournal.lovable.app/disclaimer" },
      { name: "twitter:title", content: "Disclaimer — The Healing Journal" },
      { name: "twitter:description", content: "Educational use disclaimer and crisis support information for The Healing Journal." },
    ],
    links: [{ rel: "canonical", href: "https://healingjournal.lovable.app/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <main className="min-h-screen px-6 py-24" style={{ background: "#F7F3EE", color: "#5F4B58" }}>
      <div className="mx-auto max-w-[680px]">
        <Link to="/" className="font-body story-link" style={{ color: "#9B8494", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>
          ← Back
        </Link>
        <h1 className="font-display mt-8 mb-10" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.015em", fontWeight: 400 }}>
          Disclaimer
        </h1>

        <div className="font-body font-light space-y-6" style={{ fontSize: 16, lineHeight: 1.95, color: "#5F4B58" }}>
          <p>
            The Healing Journal is for educational and informational purposes only. It is not a substitute for professional mental health care, therapy, or medical advice, and does not provide diagnosis or treatment of any kind.
          </p>
          <p>
            Nothing on this site or inside the app creates a therapist-client, doctor-patient, or counselor-client relationship. The content is general in nature and is not tailored to your specific circumstances.
          </p>
          <p>
            Always consult a qualified mental health professional regarding any condition, symptom, or decision about your care. Do not delay seeking professional help because of something you have read or used here.
          </p>
          <p>
            <strong style={{ color: "#5F4B58" }}>If you are in crisis or thinking about harming yourself:</strong> in the United States, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), or call your local emergency number immediately. Outside the US, contact your local crisis service or emergency number.
          </p>
          <p style={{ color: "#9B8494", fontSize: 14 }}>
            By using The Healing Journal you acknowledge and agree to this disclaimer.
          </p>
        </div>
      </div>
    </main>
  );
}
