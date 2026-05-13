import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recebido · Criativos do Céu",
  description: "Briefing recebido com sucesso.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="ty-page">
      <div className="ty-card">
        <div className="ty-mark">✦</div>
        <h1 className="ty-title">Recebido.</h1>
        <p className="ty-sub">
          O Eduardo foi notificado na hora.
          <br />
          Em até <strong>7 dias</strong> ele entrega:
        </p>
        <ul className="ty-list">
          <li>Plano de negócio reescrito com suas direções</li>
          <li>LP atualizada com o hero, preço e posicionamento que você cravou</li>
          <li>Cronograma de lançamento Palmas com as 10 igrejas-alvo</li>
        </ul>
        <Link href="/" className="ty-btn">Voltar pra home</Link>
      </div>

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
        .ty-page {
          min-height: 100vh;
          background: var(--bf-bg);
          display: flex; align-items: center; justify-content: center;
          padding: 32px 24px;
          color: var(--bf-text);
          font-family: var(--font-inter), 'Inter', sans-serif;
        }
        .ty-card {
          max-width: 560px; width: 100%;
          background: #fff;
          border: 1px solid var(--bf-border);
          padding: 64px 44px;
          text-align: center;
        }
        .ty-mark {
          font-size: 40px; color: var(--bf-gold);
          margin-bottom: 28px;
        }
        .ty-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: 72px; letter-spacing: 0.02em; line-height: 1;
          color: var(--bf-text);
          margin-bottom: 28px;
        }
        .ty-sub {
          font-size: 15px; line-height: 1.85;
          color: var(--bf-text-soft);
          margin-bottom: 28px;
        }
        .ty-sub strong { color: var(--bf-gold-deep); }
        .ty-list {
          text-align: left;
          list-style: none; padding: 0; margin: 0 0 36px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .ty-list li {
          font-size: 14px; line-height: 1.7;
          color: var(--bf-text-soft);
          padding: 12px 18px;
          background: var(--bf-bg-soft);
          border-left: 2px solid var(--bf-gold);
        }
        .ty-btn {
          display: inline-block;
          padding: 14px 36px;
          background: var(--bf-text);
          color: var(--bf-bg);
          font-family: var(--font-inter), sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: background .2s;
        }
        .ty-btn:hover {
          background: var(--bf-gold-deep);
        }
      `}</style>
    </main>
  );
}
