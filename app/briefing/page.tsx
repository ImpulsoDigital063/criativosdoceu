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
        <span className="brief-priv">✦ Briefing Privado</span>
      </header>

      <section className="brief-hero">
        <p className="brief-eyebrow">✦ Pra Matheus Reis</p>
        <h1 className="brief-title">
          <span className="bt-line1">Vamos cravar</span>
          <span className="bt-line2">os últimos detalhes.</span>
        </h1>
        <p className="brief-sub">
          A LP, o plano de negócio e a pesquisa de mercado já estão prontos.<br />
          <strong>Esse briefing é pra você dar a direção final em cada decisão.</strong><br />
          Mostra o que temos, você escolhe ou crava o seu. Sem rodeios.
        </p>
        <div className="brief-meta">
          <span className="bm-label">Quem te enviou:</span>
          <span className="bm-value">Eduardo Barros · Impulso Digital</span>
        </div>
      </section>

      <BriefingForm />

      <footer className="brief-foot">
        ✦ Briefing privado · Criativos do Céu · 2026
      </footer>

      <style>{`
        .brief-page {
          min-height: 100vh;
          background: var(--black);
          color: var(--white);
          display: flex;
          flex-direction: column;
        }

        .brief-nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 56px;
          border-bottom: 1px solid rgba(200,164,74,0.08);
          background: rgba(3,3,3,0.92);
          backdrop-filter: blur(20px);
          position: sticky; top: 0; z-index: 100;
        }
        .brief-brand {
          display: flex; align-items: baseline; gap: 5px;
          text-decoration: none;
        }
        .bb-main {
          font-family: var(--font-bebas), sans-serif;
          font-size: 22px; letter-spacing: 3px;
          background: linear-gradient(105deg, #fff, #f5ecd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bb-do {
          font-family: var(--font-playfair), serif;
          font-style: italic; font-size: 13px;
          color: rgba(255,255,255,0.3);
        }
        .bb-ceu {
          font-family: var(--font-bebas), sans-serif;
          font-size: 22px; letter-spacing: 3px;
          background: linear-gradient(105deg, #c8a44a, #f0dfa0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .brief-priv {
          font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(200,164,74,0.3);
          padding: 5px 14px; border-radius: 4px;
          background: rgba(200,164,74,0.05);
        }

        .brief-hero {
          max-width: 760px; margin: 0 auto;
          padding: 80px 24px 56px;
          text-align: center;
        }
        .brief-eyebrow {
          font-size: 11px; letter-spacing: 5px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
        }
        .brief-title {
          font-family: var(--font-bebas), sans-serif;
          line-height: 0.92; margin-bottom: 28px;
        }
        .bt-line1 {
          display: block;
          font-size: clamp(40px, 6vw, 72px);
          color: rgba(255,255,255,0.4); letter-spacing: 2px;
        }
        .bt-line2 {
          display: block;
          font-size: clamp(48px, 8vw, 96px);
          background: linear-gradient(135deg, #c8a44a 0%, #f0dfa0 50%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
        }
        .brief-sub {
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.5);
          max-width: 620px; margin: 0 auto 28px;
        }
        .brief-sub strong { color: var(--white); }
        .brief-meta {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,164,74,0.15);
          border-radius: 4px;
        }
        .bm-label {
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .bm-value {
          font-size: 13px; color: var(--gold); font-weight: 600;
        }

        .brief-foot {
          margin-top: auto;
          padding: 32px 24px;
          text-align: center;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        @media (max-width: 640px) {
          .brief-nav { padding: 16px 20px; }
          .brief-hero { padding: 56px 20px 40px; }
        }
      `}</style>
    </main>
  );
}
