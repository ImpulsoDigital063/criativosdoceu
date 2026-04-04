export default function ValueAnchor() {
  return (
    <>
      <section className="va-section">

        <div className="va-atmosphere" />

        <div className="va-inner">

          <div className="va-left" data-reveal="left">
            <p className="va-lbl">
              <span className="va-lbl-bar" />
              Compare e decida
            </p>
            <h2 className="va-title">
              Quanto custa<br />
              <span className="va-title-red">não ter</span><br />
              <span className="va-title-outline">isso?</span>
            </h2>
            <p className="va-desc">
              Cada arte que sua igreja publica sem qualidade profissional é uma oportunidade perdida.
            </p>
          </div>

          <div className="va-right" data-reveal="right" data-delay="150">

            {/* "Eles" — designer options */}
            <div className="va-block va-block-bad">
              <div className="va-block-label">
                <span className="va-block-dot va-dot-red" />
                Contratar designer
              </div>
              <div className="va-rows">
                <div className="va-row">
                  <span className="va-row-label">1 arte avulsa</span>
                  <span className="va-row-val va-val-muted">R$150–300</span>
                </div>
                <div className="va-row">
                  <span className="va-row-label">4 artes por mês</span>
                  <span className="va-row-val va-val-muted">R$600–1.200<span className="va-per">/mês</span></span>
                </div>
                <div className="va-row">
                  <span className="va-row-label">12 meses</span>
                  <span className="va-row-val va-val-muted">R$7.200–14.400<span className="va-per">/ano</span></span>
                </div>
              </div>
            </div>

            {/* VS divider */}
            <div className="va-vs">
              <div className="va-vs-line" />
              <span className="va-vs-text">VS</span>
              <div className="va-vs-line" />
            </div>

            {/* "Ressil" — gold options */}
            <div className="va-block va-block-good">
              <div className="va-block-glow" />
              <div className="va-block-label va-label-gold">
                <span className="va-block-dot va-dot-gold" />
                Pack Ressil Design
              </div>
              <div className="va-rows">
                <div className="va-row">
                  <span className="va-row-label">Plano mensal</span>
                  <span className="va-row-val va-val-gold">
                    R$37<span className="va-cts">,90</span><span className="va-per">/mês</span>
                  </span>
                </div>
                <div className="va-row">
                  <span className="va-row-label">Plano anual</span>
                  <span className="va-row-val va-val-gold">
                    R$16<span className="va-cts">,41</span><span className="va-per">/mês</span>
                  </span>
                </div>
                <div className="va-row va-row-highlight">
                  <span className="va-row-label va-label-strong">Artes ilimitadas incluídas</span>
                  <span className="va-row-val va-val-gold va-val-big">∞</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="va-note-bar">
          <span className="va-note-icon">✦</span>
          Com o plano anual você economiza <strong>mais de R$14.000/ano</strong> em relação a contratar um designer para 4 artes por mês.
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
        .va-title-red { color: var(--crimson); }
        .va-title-outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.2);
        }
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
        }
        .va-row:last-child { border-bottom: none; }
        .va-row-highlight { background: rgba(200,164,74,0.03); padding: 12px 8px; border-radius: 2px; }

        .va-row-label {
          font-size: 13px; color: rgba(255,255,255,0.45);
        }
        .va-label-strong { color: rgba(255,255,255,0.7); font-weight: 500; }
        .va-row-val {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 24px; line-height: 1;
        }
        .va-val-muted { color: rgba(255,255,255,0.2); }
        .va-val-gold { color: var(--gold); }
        .va-val-big { font-size: 40px; filter: drop-shadow(0 0 10px rgba(200,164,74,0.4)); }
        .va-cts { font-size: 16px; }
        .va-per { font-family: var(--font-inter), sans-serif; font-size: 10px; letter-spacing: 1px; opacity: 0.7; margin-left: 2px; }

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
          .va-row-val { font-size: 20px; }
          .va-val-big { font-size: 32px; }
          .va-block { padding: 24px 20px; }
          .va-vs { padding: 0 20px; }
        }
        @media (max-width: 560px) {
          .va-inner { padding: 0 20px 72px; }
          .va-note-bar { padding: 20px; flex-wrap: wrap; font-size: 12px; }
          .va-note-icon { display: none; }
          .va-row-label { font-size: 12px; }
        }
      `}</style>
    </>
  )
}
