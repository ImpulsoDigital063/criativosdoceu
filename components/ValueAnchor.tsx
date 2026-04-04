export default function ValueAnchor() {
  return (
    <>
      <section className="va-section">

        <div className="va-atmosphere" />

        <div className="va-inner">

          <div className="va-left" data-reveal="left">
            <p className="va-lbl">
              <span className="va-lbl-bar" />
              Para quem cria
            </p>
            <h2 className="va-title">
              Do conceito<br />
              à arte final.<br />
              <span className="va-title-gold">Mais rápido.</span>
            </h2>
            <p className="va-desc">
              Seja você parte da equipe da igreja ou o designer que a atende — o pack coloca nas suas mãos os PSDs, texturas e recursos que transformam horas de trabalho em minutos de criação.
            </p>
          </div>

          <div className="va-right" data-reveal="right" data-delay="150">

            {/* Sem o pack */}
            <div className="va-block va-block-bad">
              <div className="va-block-label">
                <span className="va-block-dot va-dot-red" />
                Sem o pack
              </div>
              <div className="va-rows">
                <div className="va-row">
                  <span className="va-row-label">Horas construindo elementos do zero</span>
                </div>
                <div className="va-row">
                  <span className="va-row-label">Recursos genéricos que limitam o resultado</span>
                </div>
                <div className="va-row">
                  <span className="va-row-label">Cada estilo novo, um projeto do zero</span>
                </div>
                <div className="va-row">
                  <span className="va-row-label">Consistência visual difícil de manter</span>
                </div>
              </div>
            </div>

            {/* VS divider */}
            <div className="va-vs">
              <div className="va-vs-line" />
              <span className="va-vs-text">VS</span>
              <div className="va-vs-line" />
            </div>

            {/* Com o pack */}
            <div className="va-block va-block-good">
              <div className="va-block-glow" />
              <div className="va-block-label va-label-gold">
                <span className="va-block-dot va-dot-gold" />
                Com o pack
              </div>
              <div className="va-rows">
                <div className="va-row">
                  <span className="va-row-label va-label-light">PSDs prontos para editar e entregar</span>
                  <span className="va-row-icon">✦</span>
                </div>
                <div className="va-row">
                  <span className="va-row-label va-label-light">Texturas, LUTs e fundos cinematográficos inclusos</span>
                  <span className="va-row-icon">✦</span>
                </div>
                <div className="va-row">
                  <span className="va-row-label va-label-light">Jovens · Feminino · Infantil · Editorial · Missões</span>
                  <span className="va-row-icon">✦</span>
                </div>
                <div className="va-row va-row-highlight">
                  <span className="va-row-label va-label-strong">Identidade visual consistente em todos os momentos</span>
                  <span className="va-row-icon va-icon-gold">✦</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="va-note-bar">
          <span className="va-note-icon">✦</span>
          Mais tempo criando. Menos tempo construindo. <strong>O mesmo talento, entregando muito mais.</strong>
          <span className="va-note-icon">✦</span>
        </div>

      </section>

      <style>{`
        .va-section {
          background: var(--dark);
          position: relative;
          overflow: hidden;
          padding: 120px 0 0;
        }

        .va-atmosphere {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(200,164,74,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .va-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 0 80px 100px;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 100px;
          align-items: center;
          position: relative; z-index: 1;
        }

        .va-lbl {
          display: flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); opacity: 0.7;
          margin-bottom: 20px;
        }
        .va-lbl-bar { width: 24px; height: 1px; background: var(--gold); display: block; }

        .va-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 96px);
          line-height: 0.88;
          color: var(--white);
          margin-bottom: 24px;
        }
        .va-title-gold { color: var(--gold); }
        .va-desc {
          font-size: 14px; line-height: 1.85;
          color: rgba(255,255,255,0.35);
        }

        /* Right — comparison blocks */
        .va-right {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .va-block {
          padding: 32px 36px;
          border: 1px solid rgba(255,255,255,0.04);
          position: relative;
        }
        .va-block-bad { background: var(--dark2); }
        .va-block-good {
          background: linear-gradient(135deg, #161007, #0d0900);
          border-color: rgba(200,164,74,0.25);
          overflow: hidden;
        }
        .va-block-glow {
          position: absolute; top: 0; right: 0;
          width: 300px; height: 150px;
          background: radial-gradient(ellipse at 100% 0%, rgba(200,164,74,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .va-block-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 20px;
        }
        .va-label-gold { color: rgba(200,164,74,0.7); }
        .va-block-dot {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0;
        }
        .va-dot-red {
          background: var(--crimson);
          box-shadow: 0 0 8px rgba(192,57,43,0.5);
        }
        .va-dot-gold {
          background: var(--gold);
          box-shadow: 0 0 8px rgba(200,164,74,0.6);
        }

        .va-rows { display: flex; flex-direction: column; gap: 0; }
        .va-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          gap: 12px;
        }
        .va-row:last-child { border-bottom: none; }
        .va-row-highlight { background: rgba(200,164,74,0.03); padding: 12px 8px; border-radius: 2px; }

        .va-row-label {
          font-size: 13px; color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }
        .va-label-light { color: rgba(255,255,255,0.55); }
        .va-label-strong { color: rgba(255,255,255,0.75); font-weight: 500; }

        .va-row-icon {
          font-size: 7px;
          color: rgba(200,164,74,0.25);
          flex-shrink: 0;
        }
        .va-icon-gold {
          color: rgba(200,164,74,0.6);
          filter: drop-shadow(0 0 6px rgba(200,164,74,0.4));
        }

        /* VS */
        .va-vs {
          display: flex; align-items: center; gap: 16px;
          padding: 0 36px;
          background: var(--dark);
          border-left: 1px solid rgba(255,255,255,0.04);
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .va-vs-line { flex: 1; height: 1px; background: rgba(255,255,255,0.04); }
        .va-vs-text {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 14px; letter-spacing: 4px;
          color: rgba(255,255,255,0.12); padding: 12px 0;
        }

        /* Bottom note bar */
        .va-note-bar {
          border-top: 1px solid rgba(200,164,74,0.08);
          background: rgba(200,164,74,0.02);
          padding: 20px 80px;
          display: flex; align-items: center; justify-content: center; gap: 16px;
          font-size: 13px; color: rgba(255,255,255,0.35);
          text-align: center; line-height: 1.6;
          position: relative; z-index: 1;
        }
        .va-note-bar strong { color: var(--white); }
        .va-note-icon { color: rgba(200,164,74,0.4); font-size: 8px; flex-shrink: 0; }

        @media (max-width: 1100px) {
          .va-inner { grid-template-columns: 1fr; gap: 40px; padding: 0 40px 80px; }
          .va-section { padding: 80px 0 0; }
          .va-note-bar { padding: 20px 32px; }
          .va-title { font-size: clamp(48px, 8vw, 80px); }
        }
        @media (max-width: 640px) {
          .va-row-label { font-size: 12px; }
          .va-block { padding: 24px 20px; }
          .va-vs { padding: 0 20px; }
        }
        @media (max-width: 560px) {
          .va-inner { padding: 0 20px 72px; }
          .va-note-bar { padding: 20px; flex-wrap: wrap; font-size: 12px; }
          .va-note-icon { display: none; }
        }
      `}</style>
    </>
  )
}
