const profiles = [
  {
    tag: 'Criativo',
    title: 'Designer\nde Igreja',
    desc: 'Você cria as artes da sua comunidade e quer elevar o nível sem passar horas do zero em cada peça.',
    accent: 'Eleva o nível',
  },
  {
    tag: 'Gestor',
    title: 'Secretário\nde Mídia',
    desc: 'Você cuida das redes sociais da igreja e precisa de material profissional pronto para editar toda semana.',
    accent: 'Ganha tempo',
  },
  {
    tag: 'Liderança',
    title: 'Pastor\nou Líder',
    desc: 'Você quer que a comunicação da sua Igreja transmita seriedade e identidade visual forte.',
    accent: 'Transmite autoridade',
  },
  {
    tag: 'Negócio',
    title: 'Designer\nFreelancer',
    desc: 'Você atende igrejas como cliente e precisa de recursos profissionais para entregar qualidade de agência.',
    accent: 'Escala clientes',
  },
]

export default function ForWho() {
  return (
    <>
      <section id="para-quem" className="forwho-section">

        <div className="fw-header">
          <p className="lbl">Para quem é</p>
          <h2 className="fw-headline">
            Este pack foi feito<br />
            <span className="ac">para você</span>
          </h2>
        </div>

        <div className="fw-cards" data-reveal="bottom" data-delay="100">
          {profiles.map((p, i) => (
            <div key={p.title} className="fw-card">
              <div className="fw-card-num">0{i + 1}</div>
              <div className="fw-card-inner">
                <span className="fw-tag">{p.tag}</span>
                <h3 className="fw-title">
                  {p.title.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h3>
                <p className="fw-desc">{p.desc}</p>
                <div className="fw-accent">
                  <span className="fw-accent-dot" />
                  {p.accent}
                </div>
              </div>
              <div className="fw-card-bar" />
            </div>
          ))}
        </div>

        <div className="fw-footnote">
          <div className="fw-fn-line" />
          <p className="fw-fn-text">× Não é para você se não tiver acesso ao Adobe Photoshop ou nunca abriu um PSD</p>
          <div className="fw-fn-line" />
        </div>

      </section>

      <style>{`
        .forwho-section {
          background: var(--dark);
          padding: 120px 80px;
          overflow: hidden;
          position: relative;
        }
        .forwho-section::before {
          content: 'PARA QUEM';
          position: absolute;
          bottom: -60px; right: -20px;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(100px, 15vw, 200px);
          color: rgba(200,164,74,0.025);
          pointer-events: none;
          line-height: 1;
          letter-spacing: 4px;
          white-space: nowrap;
        }

        .fw-header {
          max-width: 1400px; margin: 0 auto 64px;
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 40px;
          position: relative; z-index: 1;
        }
        .fw-headline {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 96px);
          line-height: 0.88;
          color: var(--white);
        }

        .fw-cards {
          max-width: 1400px; margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          position: relative; z-index: 1;
        }

        .fw-card {
          background: var(--dark2);
          padding: 48px 32px 40px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background .4s;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .fw-card:hover { background: var(--dark3); }

        /* Large background number */
        .fw-card-num {
          position: absolute;
          top: -20px; right: -8px;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(100px, 10vw, 150px);
          line-height: 1;
          color: rgba(200,164,74,0.055);
          pointer-events: none;
          transition: color .4s;
          letter-spacing: -2px;
        }
        .fw-card:hover .fw-card-num { color: rgba(200,164,74,0.1); }

        /* Gold bottom bar that grows on hover */
        .fw-card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold2), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }
        .fw-card:hover .fw-card-bar { transform: scaleX(1); }

        /* Left glow line */
        .fw-card::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, rgba(200,164,74,0.4) 50%, transparent 100%);
          opacity: 0;
          transition: opacity .4s;
        }
        .fw-card:hover::before { opacity: 1; }

        .fw-card-inner { position: relative; z-index: 1; }

        .fw-tag {
          display: inline-block;
          font-size: 8px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--gold); border: 1px solid rgba(200,164,74,0.2);
          padding: 3px 8px; border-radius: 1px;
          background: rgba(200,164,74,0.05);
          margin-bottom: 20px;
        }

        .fw-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 3vw, 52px);
          letter-spacing: 1px;
          color: var(--white);
          line-height: 0.92;
          margin-bottom: 20px;
        }

        .fw-desc {
          font-size: 12px; line-height: 1.85;
          color: rgba(255,255,255,0.4);
          margin-bottom: 24px;
        }

        .fw-accent {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--gold); opacity: 0.7;
        }
        .fw-accent-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
          box-shadow: 0 0 6px rgba(200,164,74,0.8);
        }

        .fw-footnote {
          max-width: 1400px; margin: 48px auto 0;
          display: flex; align-items: center; gap: 24px;
          position: relative; z-index: 1;
        }
        .fw-fn-line {
          flex: 1; height: 1px;
          background: rgba(255,255,255,0.06);
        }
        .fw-fn-text {
          font-size: 11px; color: rgba(255,255,255,0.2);
          font-style: italic; white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .fw-cards { grid-template-columns: repeat(2, 1fr); }
          .forwho-section { padding: 80px 40px; }
          .fw-header { flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
          .fw-footnote { flex-direction: column; gap: 8px; }
          .fw-fn-line { display: none; }
        }
        @media (max-width: 640px) {
          .fw-card { min-height: 300px; padding: 36px 24px 32px; }
          .fw-title { font-size: clamp(32px, 8vw, 44px); }
        }
        @media (max-width: 480px) {
          .fw-cards { grid-template-columns: 1fr; }
          .forwho-section { padding: 72px 20px; }
          .fw-card { min-height: 260px; }
        }
      `}</style>
    </>
  )
}
