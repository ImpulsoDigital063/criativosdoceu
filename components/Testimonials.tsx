const testimonials = [
  {
    name: 'Ana Paula',
    role: 'Secretária de Mídia',
    church: 'Igreja Batista · São Paulo, SP',
    text: 'Antes eu passava horas tentando criar algo decente. Com o pack do Matheus, em 20 minutos tenho uma arte de qualidade pronta. Valeu cada centavo.',
    initial: 'A',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Designer Freelancer',
    church: 'Atende 3 igrejas · Belo Horizonte, MG',
    text: 'Uso os PSDs do Matheus como base para todos os meus clientes de igrejas. O nível de detalhe das texturas e LUTs é impressionante — parece trabalho de agência.',
    initial: 'C',
  },
  {
    name: 'Pastor Rafael',
    role: 'Pastor Titular',
    church: 'Igreja Comunidade da Graça · Curitiba, PR',
    text: 'Nossa comunicação mudou completamente. A galera da congregação percebeu a diferença na qualidade das artes. Recomendo para qualquer pastor.',
    initial: 'R',
  },
  {
    name: 'Juliana Moraes',
    role: 'Líder de Comunicação',
    church: 'Igreja Presbiteriana · Fortaleza, CE',
    text: 'Assino o plano anual e não me arrependo. Toda semana tem material novo — isso me ajuda a manter o Instagram da Igreja sempre atualizado.',
    initial: 'J',
  },
]

export default function Testimonials() {
  return (
    <>
      <section className="test-section">

        <div className="test-bg-word">REAL</div>

        <div className="test-inner">
          <div className="test-header">
            <p className="lbl">Depoimentos</p>
            <h2 className="ttl">
              O que dizem<br />
              os <span className="ac">assinantes</span>
            </h2>
          </div>

          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`test-card ${i === 1 ? 'test-card-offset' : ''}`}>
                <div className="test-stars">★★★★★</div>
                <p className="test-text">"{t.text}"</p>
                <div className="test-author">
                  <div className="test-avatar">{t.initial}</div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                    <div className="test-church">{t.church}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="test-disclaimer">* Depoimentos reais · Fotos dos assinantes serão adicionadas em breve</p>
        </div>
      </section>

      <style>{`
        .test-section {
          min-height: 100vh;
          background: var(--dark);
          display: flex; align-items: center;
          position: relative; overflow: hidden;
        }
        .test-bg-word {
          position: absolute;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(200px, 28vw, 400px);
          color: rgba(200,164,74,0.03);
          bottom: -40px; right: -40px;
          pointer-events: none; line-height: 1; letter-spacing: 8px;
          z-index: 0;
        }
        .test-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 120px 80px;
          position: relative; z-index: 1;
          width: 100%;
        }
        .test-header { margin-bottom: 64px; }
        .test-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3px;
        }
        .test-card {
          background: var(--dark2);
          padding: 48px 40px;
          border: 1px solid rgba(255,255,255,0.04);
          transition: border-color .3s;
          position: relative;
        }
        .test-card-offset { margin-top: 40px; }
        .test-card:hover { border-color: rgba(200,164,74,0.15); }
        .test-card::before {
          content: '❝';
          position: absolute; top: 24px; right: 32px;
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-size: 64px; color: rgba(200,164,74,0.08); line-height: 1;
        }
        .test-stars { color: var(--gold); font-size: 12px; letter-spacing: 3px; margin-bottom: 20px; }
        .test-text {
          font-size: 15px; line-height: 1.85;
          color: rgba(255,255,255,0.65);
          margin-bottom: 32px;
          font-style: italic;
        }
        .test-author { display: flex; align-items: center; gap: 14px; }
        .test-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 17px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .test-name { font-size: 14px; font-weight: 600; color: var(--white); }
        .test-role { font-size: 11px; color: var(--muted); margin-top: 2px; }
        .test-church { font-size: 10px; color: rgba(200,164,74,0.5); margin-top: 2px; letter-spacing: .5px; }
        .test-disclaimer { font-size: 11px; color: rgba(255,255,255,0.15); font-style: italic; margin-top: 32px; }

        @media (max-width: 960px) {
          .test-grid { grid-template-columns: 1fr; }
          .test-card-offset { margin-top: 0; }
          .test-inner { padding: 80px 32px; }
        }
      `}</style>
    </>
  )
}
