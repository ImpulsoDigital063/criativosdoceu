const features = [
  {
    code: 'TX',
    title: 'Texturas Premium',
    desc: 'Exclusivas em cada PSD, prontas para aplicar com um clique. Profundidade visual real.',
  },
  {
    code: 'LUT',
    title: 'LUTs Profissionais',
    desc: 'Paletas de cor e grading cinematográfico para dar o tom exato que a sua arte precisa.',
  },
  {
    code: 'BG',
    title: 'Planos de Fundo',
    desc: 'Fundos trabalhados para cada categoria. Cada arte tem construção visual própria.',
  },
  {
    code: 'ICO',
    title: 'Ícones & Elementos',
    desc: 'Biblioteca de elementos gráficos vetoriais compatíveis com cada pack do Matheus.',
  },
  {
    code: 'MK',
    title: 'Mockups Prontos',
    desc: 'Composição já montada. Você edita só foto, texto e cor. Arte pronta em minutos.',
  },
  {
    code: '∞',
    title: 'Atualizações Semanais',
    desc: 'Novos PSDs toda semana. O catálogo cresce enquanto você assina.',
  },
]

export default function WhatYouGet() {
  return (
    <>
      <section id="incluso" className="wyg-section">

        <div className="wyg-bg-word">INCLUSO</div>

        <div className="wyg-inner">

          <div className="wyg-header">
            <div>
              <p className="wyg-lbl">
                <span className="wyg-lbl-bar" />
                O que você recebe
              </p>
              <h2 className="wyg-title">
                Cada PSD entrega<br />
                <span className="wyg-title-gold">tudo incluso</span>
              </h2>
            </div>
            <p className="wyg-sub">
              Não são templates vazios. Cada arquivo já vem com todos os recursos que o Matheus usa nos projetos reais de agência.
            </p>
          </div>

          <div className="wyg-grid" data-reveal="bottom" data-delay="100">
            {features.map((f, i) => (
              <div key={f.title} className="wyg-card">
                <div className="wyg-card-num">0{i + 1}</div>
                <div className="wyg-code">{f.code}</div>
                <h3 className="wyg-feat-title">{f.title}</h3>
                <p className="wyg-feat-desc">{f.desc}</p>
                <div className="wyg-bar" />
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .wyg-section {
          background: var(--dark2);
          position: relative;
          overflow: hidden;
          padding: 120px 0;
        }

        .wyg-bg-word {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(160px, 22vw, 320px);
          color: rgba(200,164,74,0.02);
          letter-spacing: 12px; white-space: nowrap;
          pointer-events: none; z-index: 0;
        }

        .wyg-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 0 80px;
          position: relative; z-index: 1;
        }

        .wyg-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 60px;
          margin-bottom: 64px;
        }
        .wyg-lbl {
          display: flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); opacity: 0.7;
          margin-bottom: 20px;
        }
        .wyg-lbl-bar { width: 24px; height: 1px; background: var(--gold); display: block; }
        .wyg-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 96px);
          line-height: 0.88;
          color: var(--white);
        }
        .wyg-title-gold { color: var(--gold); }
        .wyg-sub {
          font-size: 14px; line-height: 1.85;
          color: rgba(255,255,255,0.35);
          max-width: 360px; flex-shrink: 0;
          padding-bottom: 4px;
        }

        /* 3-column grid */
        .wyg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .wyg-card {
          background: var(--dark3);
          padding: 40px 36px 36px;
          position: relative;
          overflow: hidden;
          transition: background .3s;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .wyg-card:hover { background: #1f1f1f; }

        /* Big number watermark */
        .wyg-card-num {
          position: absolute;
          top: -10px; right: 16px;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 100px; line-height: 1;
          color: rgba(200,164,74,0.04);
          pointer-events: none;
          transition: color .3s;
        }
        .wyg-card:hover .wyg-card-num { color: rgba(200,164,74,0.08); }

        /* Code label — the "icon" replacement */
        .wyg-code {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 3px;
          color: var(--gold);
          border: 1px solid rgba(200,164,74,0.2);
          display: inline-block;
          padding: 4px 12px; margin-bottom: 20px;
          background: rgba(200,164,74,0.05);
          border-radius: 2px;
          position: relative; z-index: 1;
        }

        .wyg-feat-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: 1px;
          color: var(--white); margin-bottom: 12px;
          position: relative; z-index: 1;
        }
        .wyg-feat-desc {
          font-size: 13px; line-height: 1.78;
          color: rgba(255,255,255,0.38);
          position: relative; z-index: 1;
        }

        /* Bottom grow bar */
        .wyg-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--gold), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }
        .wyg-card:hover .wyg-bar { transform: scaleX(1); }

        @media (max-width: 960px) {
          .wyg-grid { grid-template-columns: repeat(2, 1fr); }
          .wyg-header { flex-direction: column; align-items: flex-start; gap: 20px; margin-bottom: 40px; }
          .wyg-sub { max-width: 100%; }
          .wyg-inner { padding: 0 32px; }
          .wyg-section { padding: 80px 0; }
        }
        @media (max-width: 560px) {
          .wyg-grid { grid-template-columns: 1fr; }
          .wyg-inner { padding: 0 20px; }
          .wyg-card { padding: 32px 24px 28px; }
          .wyg-card-num { font-size: 80px; }
          .wyg-feat-title { font-size: 22px; }
        }
      `}</style>
    </>
  )
}
