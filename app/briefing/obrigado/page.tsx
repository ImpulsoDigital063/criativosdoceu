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
          O Eduardo foi notificado na hora.<br />
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
        .ty-page {
          min-height: 100vh;
          background: var(--black);
          display: flex; align-items: center; justify-content: center;
          padding: 32px 24px;
          color: var(--white);
        }
        .ty-card {
          max-width: 560px; width: 100%;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(200,164,74,0.15);
          border-radius: 16px;
          padding: 64px 40px;
          text-align: center;
          box-shadow: 0 0 80px rgba(200,164,74,0.05);
        }
        .ty-mark {
          font-size: 56px; color: var(--gold);
          margin-bottom: 24px;
          filter: drop-shadow(0 0 24px rgba(200,164,74,0.5));
        }
        .ty-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: 72px; letter-spacing: 2px; line-height: 1;
          background: linear-gradient(135deg, #fff, #f5ecd4, #c8a44a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 28px;
        }
        .ty-sub {
          font-size: 15px; line-height: 1.85;
          color: rgba(255,255,255,0.55);
          margin-bottom: 28px;
        }
        .ty-sub strong { color: var(--gold); }
        .ty-list {
          text-align: left;
          list-style: none; padding: 0; margin: 0 0 36px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .ty-list li {
          font-size: 14px; line-height: 1.7;
          color: rgba(255,255,255,0.65);
          padding: 12px 16px;
          background: rgba(200,164,74,0.04);
          border-left: 2px solid var(--gold);
          border-radius: 0 4px 4px 0;
        }
        .ty-btn {
          display: inline-block;
          padding: 14px 40px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black);
          font-family: var(--font-bebas), sans-serif;
          font-size: 13px; letter-spacing: 3px; text-transform: uppercase;
          font-weight: 700;
          border-radius: 4px;
          text-decoration: none;
          transition: all .3s;
          box-shadow: 0 0 40px rgba(200,164,74,0.2);
        }
        .ty-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 60px rgba(200,164,74,0.5);
        }
      `}</style>
    </main>
  );
}
