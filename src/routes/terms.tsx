import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — The Healing Journal" },
      { name: "description", content: "Terms of use for The Healing Journal." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-20" style={{ background: '#F5F0FA', color: '#2D1B4E' }}>
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="font-body text-sm" style={{ color: '#7A5FB8' }}>← Back</Link>
        <h1 className="font-display mt-6 mb-6" style={{ fontSize: 36 }}>Terms of Use</h1>
        <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7 }}>
          By using The Healing Journal, you agree it is an educational tool, not a medical or
          therapeutic service. Use it at your own discretion and seek qualified professional
          care for any health concerns.
        </p>
      </div>
    </main>
  );
}
