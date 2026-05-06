import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Healing Journal" },
      { name: "description", content: "How The Healing Journal protects your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20" style={{ background: '#f5eef0', color: '#1a1a2e' }}>
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="font-body text-sm" style={{ color: '#5e81ac' }}>← Back</Link>
        <h1 className="font-display mt-6 mb-6" style={{ fontSize: 36 }}>Privacy Policy</h1>
        <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7 }}>
          Your journal entries are encrypted and stored locally on your device. We do not sell,
          share, or analyze your personal data. You own your content and can export or delete it
          at any time.
        </p>
      </div>
    </main>
  );
}
