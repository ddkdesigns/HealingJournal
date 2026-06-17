import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — The Healing Journal" },
      { name: "description", content: "Educational use disclaimer for The Healing Journal." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <main className="min-h-screen px-6 py-20" style={{ background: '#FDFDF1', color: '#39442B' }}>
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="font-body text-sm" style={{ color: '#6F7F5C' }}>← Back</Link>
        <h1 className="font-display mt-6 mb-6" style={{ fontSize: 36 }}>Disclaimer</h1>
        <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7 }}>
          The Healing Journal is for educational and informational purposes only. It is not a
          substitute for professional mental health care, therapy, or medical advice, and does
          not provide diagnosis or treatment of any kind. Always consult a qualified professional.
          If you are in crisis, call or text 988.
        </p>
      </div>
    </main>
  );
}
