const steps = [
  {
    number: '01',
    title: 'Escolha seu plano',
    desc: 'Selecione o plano mensal ou anual e finalize a compra com segurança pela plataforma Kiwify.',
    platform: 'Kiwify',
    color: '#22c55e',
  },
  {
    number: '02',
    title: 'Acesse na hora',
    desc: 'Acesso imediato à área de membros com todos os PSDs organizados por categoria no Google Drive.',
    platform: 'Google Drive',
    color: '#3b82f6',
  },
  {
    number: '03',
    title: 'Novos arquivos toda semana',
    desc: 'Toda semana o Matheus sobe arquivos novos. Você recebe notificação em primeira mão no grupo VIP.',
    platform: 'WhatsApp VIP',
    color: '#22c55e',
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="how-section">

        <div className="how-atmosphere" />
        <div className="how-grid-lines" />

        <div className="how-inner">

          <div className="how-left" data-reveal="left">
            <p className="how-lbl">
              <span className="how-lbl-bar" />
              Como funciona
            </p>
            <h2 className="how-title">
              3 passos.<br />
              <span className="how-title-blue">Simples</span><br />
              assim.
            </h2>
            <p className="how-sub">
              Da compra ao primeiro PSD editado em menos de 5 minutos.
            </p>
          </div>

          <div className="how-steps" data-reveal="right" data-delay="150">
            {steps.map((step, i) => (
              <div key={step.number} className="how-step">
                <div className="how-step-left">
                  <div className="how-num-wrap">
                    <span className="how-num">{step.number}</span>
                    <div className="how-num-ring" />
                  </div>
                  {i < steps.length - 1 && <div className="how-connector" />}
                </div>
                <div className="how-step-body">
                  <div
                    className="how-platform"
                    style={{ '--plat-color': step.color } as React.CSSProperties}
                  >
                    <span className="how-plat-dot" />
                    {step.platform}
                  </div>
                  <h3 className="how-step-title">{step.title}</h3>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .how-section {
          min-height: 100vh;
          background: var(--electric-dark);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* Blue atmospheric glow */
        .how-atmosphere {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(59,130,246,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Subtle grid lines for tech feel */
        .how-grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        .how-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 120px 80px;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 120px;
          align-items: center;
          position: relative; z-index: 1;
          width: 100%;
        }

        .how-lbl {
          display: flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: rgba(59,130,246,0.7);
          margin-bottom: 24px;
        }
        .how-lbl-bar {
          width: 24px; height: 1px;
          background: rgba(59,130,246,0.5);
          display: block;
        }
        .how-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 7vw, 108px);
          line-height: 0.88;
          color: var(--white);
          margin-bottom: 28px;
        }
        .how-title-blue {
          color: transparent;
          -webkit-text-stroke: 2px rgba(59,130,246,0.6);
          filter: drop-shadow(0 0 20px rgba(59,130,246,0.3));
        }
        .how-sub {
          font-size: 14px; line-height: 1.8;
          color: rgba(255,255,255,0.3);
        }

        /* Steps */
        .how-steps { display: flex; flex-direction: column; gap: 0; }
        .how-step {
          display: flex; gap: 36px;
          align-items: flex-start;
        }
        .how-step-left {
          display: flex; flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .how-num-wrap {
          position: relative;
          width: 64px; height: 64px;
          display: flex; align-items: center; justify-content: center;
        }
        .how-num {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 28px; letter-spacing: 2px;
          color: var(--electric);
          position: relative; z-index: 1;
          filter: drop-shadow(0 0 8px rgba(59,130,246,0.5));
        }
        .how-num-ring {
          position: absolute; inset: 0;
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 50%;
        }
        .how-connector {
          width: 1px; flex: 1; min-height: 60px;
          background: linear-gradient(180deg, rgba(59,130,246,0.25), rgba(59,130,246,0.05));
          margin: 4px 0;
        }

        .how-step-body {
          padding: 16px 0 64px;
          flex: 1;
        }
        .how-platform {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--plat-color, var(--electric));
          margin-bottom: 12px;
          border: 1px solid color-mix(in srgb, var(--plat-color, var(--electric)) 30%, transparent);
          padding: 3px 10px; border-radius: 2px;
          background: color-mix(in srgb, var(--plat-color, var(--electric)) 6%, transparent);
        }
        .how-plat-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--plat-color, var(--electric));
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--plat-color, var(--electric));
        }
        .how-step-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 32px; letter-spacing: 1px;
          color: var(--white); margin-bottom: 12px;
        }
        .how-step-desc {
          font-size: 14px; line-height: 1.85;
          color: rgba(255,255,255,0.38);
        }

        @media (max-width: 1100px) {
          .how-inner { grid-template-columns: 1fr; gap: 52px; padding: 80px 40px; }
          .how-title { font-size: clamp(52px, 8vw, 88px); }
        }
        @media (max-width: 560px) {
          .how-inner { padding: 72px 20px; }
          .how-step-body { padding-bottom: 36px; }
          .how-step { gap: 20px; }
          .how-num-wrap { width: 48px; height: 48px; }
          .how-num { font-size: 22px; }
          .how-step-title { font-size: 24px; }
          .how-tags { gap: 6px; }
        }
      `}</style>
    </>
  )
}
