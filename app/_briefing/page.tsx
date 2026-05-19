import type { Metadata } from "next";
import Link from "next/link";
import BriefingForm from "@/components/BriefingForm";

export const metadata: Metadata = {
  title: "Briefing · Criativos do Céu",
  description: "Briefing privado · suas respostas direcionam a finalização da LP e do plano de negócio.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function BriefingPage() {
  return (
    <main className="brief-page">
      <header className="brief-nav">
        <Link href="/" className="brief-brand">
          <span className="bb-main">Criativos</span>
          <span className="bb-do">do</span>
          <span className="bb-ceu">Céu</span>
        </Link>
        <span className="brief-priv">✦ Privado</span>
      </header>

      <section className="brief-hero">
        <p className="brief-eyebrow">Briefing · Pra Matheus Reis</p>
        <h1 className="brief-title">
          <span className="bt-line1">Vamos cravar</span>
          <span className="bt-line2">os últimos detalhes.</span>
        </h1>
        <p className="brief-sub">
          A LP, o plano de negócio e a pesquisa de mercado já estão prontos.
          <br />
          <strong>Esse briefing é pra você dar a direção final em cada decisão.</strong>
          <br />
          Mostra o que temos · você escolhe ou crava o seu · sem rodeios.
        </p>
        <div className="brief-meta">
          <span className="bm-label">Quem te enviou:</span>
          <span className="bm-value">Eduardo Barros · Impulso Digital</span>
        </div>
      </section>

      <BriefingForm />

      <footer className="brief-foot">
        Briefing privado · Criativos do Céu · 2026
      </footer>

      <style>{`
        :root {
          --bf-bg: #fafaf6;
          --bf-bg-soft: #f4efde;
          --bf-text: #1a1a1a;
          --bf-text-soft: #525252;
          --bf-text-muted: #9a958a;
          --bf-border: #e6e0cf;
          --bf-gold: #b08a3a;
          --bf-gold-deep: #8a6d2e;
        }
        .brief-page {
          min-height: 100vh;
          background: var(--bf-bg);
          color: var(--bf-text);
          display: flex;
          flex-direction: column;
          font-family: var(--font-inter), 'Inter', sans-serif;
        }

        .brief-nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 48px;
          border-bottom: 1px solid var(--bf-border);
          background: rgba(250, 250, 246, 0.94);
          backdrop-filter: blur(20px);
          position: sticky; top: 0; z-index: 100;
        }
        .brief-brand {
          display: flex; align-items: baseline; gap: 5px;
          text-decoration: none;
        }
        .bb-main {
          font-family: var(--font-bebas), sans-serif;
          font-size: 22px; letter-spacing: 0.18em;
          color: var(--bf-text);
        }
        .bb-do {
          font-family: var(--font-playfair), serif;
          font-style: italic; font-size: 13px;
          color: var(--bf-text-muted);
        }
        .bb-ceu {
          font-family: var(--font-bebas), sans-serif;
          font-size: 22px; letter-spacing: 0.18em;
          color: var(--bf-gold);
        }
        .brief-priv {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--bf-gold);
          border: 1px solid var(--bf-border);
          padding: 5px 12px;
          background: #fff;
          font-weight: 600;
        }

        .brief-hero {
          max-width: 720px; margin: 0 auto;
          padding: 88px 24px 56px;
          text-align: left;
        }
        .brief-eyebrow {
          font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--bf-gold-deep); margin-bottom: 24px;
          font-weight: 600;
        }
        .brief-title {
          font-family: var(--font-bebas), sans-serif;
          line-height: 0.92; margin-bottom: 28px;
        }
        .bt-line1 {
          display: block;
          font-size: clamp(40px, 6vw, 72px);
          color: var(--bf-text-muted); letter-spacing: 0.02em;
          font-weight: 400;
        }
        .bt-line2 {
          display: block;
          font-size: clamp(52px, 8vw, 92px);
          color: var(--bf-text);
          letter-spacing: 0.02em;
        }
        .brief-sub {
          font-size: 16px; line-height: 1.85;
          color: var(--bf-text-soft);
          max-width: 600px; margin: 0 0 28px;
        }
        .brief-sub strong { color: var(--bf-text); font-weight: 600; }
        .brief-meta {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 10px 18px;
          background: #fff;
          border: 1px solid var(--bf-border);
        }
        .bm-label {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--bf-text-muted); font-weight: 600;
        }
        .bm-value {
          font-size: 13px; color: var(--bf-text); font-weight: 600;
        }

        .brief-foot {
          margin-top: auto;
          padding: 32px 24px;
          text-align: center;
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--bf-text-muted);
          border-top: 1px solid var(--bf-border);
        }

        @media (max-width: 640px) {
          .brief-nav { padding: 16px 20px; }
          .brief-hero { padding: 56px 20px 40px; }
        }
      `}</style>
    </main>
  );
}
