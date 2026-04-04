import Image from 'next/image'

export default function FeatureSpread() {
  return (
    <>
      <div className="spread-wrap">
        {/* Full bleed image */}
        <div className="spread-img">
          <Image src="/portfolio-01.png" alt="New Pack Church Design" fill style={{ objectFit: 'cover' }} />
        </div>

        {/* Overlays */}
        <div className="spread-fade-left" />
        <div className="spread-fade-right" />
        <div className="spread-fade-bottom" />

        {/* Content */}
        <div className="spread-content">
          <p className="spread-tag">✦ Qualidade de agência</p>
          <div className="spread-title">
            <span className="spread-t1">DESIGN</span>
            <span className="spread-t2">QUE</span>
            <span className="spread-t3">IMPACTA</span>
          </div>
          <p className="spread-desc">
            Cada PSD foi criado com os mesmos recursos que o Matheus usa nos projetos reais — texturas, LUTs, composição e tipografia de alto nível.
          </p>
          <a href="#planos" className="spread-cta">Garantir Acesso</a>
        </div>
      </div>

      <style>{`
        .spread-wrap {
          position: relative;
          height: 640px;
          overflow: hidden;
          background: var(--black);
        }
        .spread-img {
          position: absolute; inset: 0;
          filter: brightness(0.35) saturate(1.2) contrast(1.1);
        }
        .spread-fade-left {
          position: absolute; left: 0; top: 0; bottom: 0; width: 50%;
          background: linear-gradient(90deg, var(--black) 0%, transparent 100%);
          z-index: 2;
        }
        .spread-fade-right {
          position: absolute; right: 0; top: 0; bottom: 0; width: 30%;
          background: linear-gradient(-90deg, var(--black) 0%, transparent 100%);
          z-index: 2;
        }
        .spread-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(0deg, var(--black) 0%, transparent 100%);
          z-index: 2;
        }
        .spread-content {
          position: relative; z-index: 10;
          height: 100%;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 0 80px 72px;
          max-width: 700px;
        }
        .spread-tag {
          font-size: 10px; letter-spacing: 4px;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 16px;
        }
        .spread-title {
          display: flex; flex-direction: column;
          line-height: 0.85; margin-bottom: 28px;
        }
        .spread-t1 {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 9vw, 130px);
          color: var(--white); letter-spacing: 4px;
        }
        .spread-t2 {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(48px, 6vw, 86px);
          color: var(--gold); letter-spacing: 2px;
        }
        .spread-t3 {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 9vw, 130px);
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.25);
          letter-spacing: 4px;
        }
        .spread-desc {
          font-size: 14px; line-height: 1.8;
          color: rgba(255,255,255,0.45);
          max-width: 400px; margin-bottom: 36px;
        }
        .spread-cta {
          display: inline-block;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 11px;
          letter-spacing: 2.5px; text-transform: uppercase;
          padding: 14px 36px; border-radius: 2px;
          text-decoration: none; transition: all .3s;
          box-shadow: 0 0 40px rgba(200,164,74,0.2);
          width: fit-content;
        }
        .spread-cta:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(200,164,74,0.45); }
        @media (max-width: 960px) {
          .spread-wrap { height: 520px; }
          .spread-content { padding: 0 32px 56px; }
        }
        @media (max-width: 560px) {
          .spread-wrap { height: 460px; }
          .spread-content { padding: 0 24px 48px; }
        }
      `}</style>
    </>
  )
}
