const problems = [
  {
    pain: 'Artes amadoras afastam membros',
    detail: 'Posts sem identidade visual passam a impressão de descuido — as pessoas percebem antes de entrar na igreja.',
    solution: 'PSDs com qualidade de agência, prontos em minutos.',
  },
  {
    pain: 'Sem tempo para criar do zero toda semana',
    detail: 'O secretário de mídia da maioria das igrejas é voluntário. Horas no Photoshop toda semana não é sustentável.',
    solution: 'Troque foto, texto e cor — arte pronta em 5 minutos.',
  },
  {
    pain: 'Designer caro demais para a realidade da igreja',
    detail: 'Contratar um designer custa R$150–300 por arte. Para uma arte por semana, são até R$1.200 por mês.',
    solution: 'Menos de R$1,50 por dia — acesso a tudo.',
  },
]

export default function Problem() {
  return (
    <>
      <section className="prob-section">

        {/* Background atmospheric */}
        <div className="prob-atmosphere" />
        <div className="prob-vignette" />

        {/* Big BG word */}
        <div className="prob-bg-word">PROBLEMA</div>

        <div className="prob-inner">

          {/* Top label */}
          <div className="prob-top">
            <div className="prob-lbl">
              <span className="prob-lbl-dot" />
              O problema
            </div>
            <div className="prob-lbl-line" />
          </div>

          {/* Giant headline */}
          <div className="prob-headline" data-reveal="left">
            <span className="prob-h-1">Sua igreja</span>
            <span className="prob-h-2">merece</span>
            <span className="prob-h-3">
              <span className="prob-h-outline">comunicar</span>
            </span>
            <span className="prob-h-4">melhor<span className="prob-dot">.</span></span>
          </div>

          {/* Problem cards */}
          <div className="prob-cards" data-reveal="bottom" data-delay="200">
            {problems.map((p, i) => (
              <div key={i} className="prob-card">
                <div className="prob-card-top">
                  <span className="prob-index">0{i + 1}</span>
                  <span className="prob-x">×</span>
                  <h3 className="prob-pain">{p.pain}</h3>
                </div>
                <p className="prob-detail">{p.detail}</p>
                <div className="prob-sol">
                  <span className="prob-arrow">→</span>
                  <span>{p.solution}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .prob-section {
          min-height: 100vh;
          background: var(--crimson-dark);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* Red radial atmosphere */
        .prob-atmosphere {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 20% 50%, rgba(192,57,43,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 80% at 80% 20%, rgba(192,57,43,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .prob-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
        }

        /* Faint giant word */
        .prob-bg-word {
          position: absolute;
          right: -60px; bottom: -80px;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(120px, 18vw, 260px);
          color: rgba(192,57,43,0.06);
          line-height: 1; letter-spacing: 4px;
          pointer-events: none; white-space: nowrap;
          z-index: 0;
        }

        .prob-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 100px 80px;
          position: relative; z-index: 1;
          width: 100%;
        }

        /* Top label */
        .prob-top {
          display: flex; align-items: center; gap: 20px;
          margin-bottom: 64px;
        }
        .prob-lbl {
          display: flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: rgba(255,255,255,0.35); white-space: nowrap;
        }
        .prob-lbl-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--crimson);
          box-shadow: 0 0 10px rgba(192,57,43,0.8);
          flex-shrink: 0;
        }
        .prob-lbl-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(192,57,43,0.3), transparent);
        }

        /* Headline */
        .prob-headline {
          display: flex; flex-direction: column;
          line-height: 0.85;
          margin-bottom: 80px;
        }
        .prob-h-1, .prob-h-2, .prob-h-3, .prob-h-4 {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 10vw, 148px);
          letter-spacing: 2px;
          display: block;
        }
        .prob-h-1 { color: rgba(255,255,255,0.15); }
        .prob-h-2 { color: rgba(255,255,255,0.4); }
        .prob-h-3 { color: var(--white); }
        .prob-h-outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.25);
        }
        .prob-h-4 { color: var(--crimson); }
        .prob-dot { color: rgba(255,255,255,0.5); }

        /* Cards */
        .prob-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(192,57,43,0.12);
        }
        .prob-card {
          background: rgba(13,1,1,0.95);
          padding: 40px 36px;
          border-top: 1px solid rgba(192,57,43,0.15);
          transition: background .3s;
          position: relative;
        }
        .prob-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--crimson), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .prob-card:hover { background: rgba(20,2,2,0.98); }
        .prob-card:hover::before { opacity: 1; }

        .prob-card-top {
          display: flex; align-items: flex-start; gap: 12px;
          margin-bottom: 16px;
        }
        .prob-index {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 11px; letter-spacing: 2px;
          color: rgba(192,57,43,0.5);
          flex-shrink: 0; margin-top: 3px;
        }
        .prob-x {
          font-size: 18px; color: var(--crimson);
          font-weight: 700; flex-shrink: 0; margin-top: -1px;
        }
        .prob-pain {
          font-size: 16px; font-weight: 600; line-height: 1.35;
          color: var(--white);
        }
        .prob-detail {
          font-size: 13px; line-height: 1.8;
          color: rgba(255,255,255,0.32);
          margin-bottom: 24px;
          padding-left: 28px;
        }
        .prob-sol {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 12px; color: rgba(200,164,74,0.85);
          letter-spacing: .5px; padding-left: 28px;
        }
        .prob-arrow {
          font-size: 14px; flex-shrink: 0;
          color: var(--gold);
        }

        @media (max-width: 960px) {
          .prob-cards { grid-template-columns: 1fr; background: none; gap: 1px; }
          .prob-inner { padding: 80px 32px; }
          .prob-headline { margin-bottom: 48px; }
          .prob-top { margin-bottom: 40px; }
        }
        @media (max-width: 640px) {
          .prob-cards { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .prob-inner { padding: 64px 20px; }
          .prob-cards { grid-template-columns: 1fr; }
          .prob-card { padding: 28px 24px; }
          .prob-headline { margin-bottom: 36px; }
          .prob-bg-word { font-size: 28vw; bottom: -20px; right: -10px; }
        }
      `}</style>
    </>
  )
}
