import Image from 'next/image'

export default function FinalCTA() {
  return (
    <>
      <section className="fcta-section">

        {/* Full bleed background image */}
        <div className="fcta-bg">
          <Image src="/portfolio-01.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        {/* Color overlays */}
        <div className="fcta-overlay-dark" />
        <div className="fcta-overlay-gold" />
        <div className="fcta-overlay-crimson" />
        <div className="fcta-scanlines" />

        {/* Content */}
        <div className="fcta-inner">

          <div className="fcta-eyebrow">
            <span className="fcta-eyebrow-line" />
            <span>Pronto para começar?</span>
            <span className="fcta-eyebrow-line" />
          </div>

          <div className="fcta-headline">
            <div className="fcta-h1">TRANSFORME</div>
            <div className="fcta-h2">
              <em>a comunicação</em>
            </div>
            <div className="fcta-h3">
              <span className="fcta-h3-white">DA SUA </span>
              <span className="fcta-h3-outline">IGREJA</span>
            </div>
          </div>

          <div className="fcta-divider">
            <span className="fcta-div-dot" />
            <span className="fcta-div-line" />
            <span className="fcta-div-dot" />
          </div>

          <p className="fcta-desc">
            Acesso imediato · Novos arquivos toda semana · Garantia de 7 dias sem risco
          </p>

          <a href="#planos" className="fcta-btn">
            <span className="fcta-btn-text">Quero Meus PSDs Agora</span>
            <span className="fcta-btn-arrow">→</span>
          </a>

          <p className="fcta-trust">
            Pagamento seguro via Kiwify &nbsp;·&nbsp; Pix, Cartão ou Boleto
          </p>

        </div>

      </section>

      <style>{`
        .fcta-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fcta-bg {
          position: absolute; inset: 0;
          filter: brightness(0.4) saturate(0.8);
        }

        /* Dramatic layered overlays */
        .fcta-overlay-dark {
          position: absolute; inset: 0;
          background: rgba(3,3,3,0.55);
          z-index: 1;
        }
        .fcta-overlay-gold {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,164,74,0.18) 0%, transparent 70%);
          z-index: 2;
        }
        .fcta-overlay-crimson {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(0deg, rgba(192,57,43,0.15) 0%, transparent 100%);
          z-index: 2;
        }

        /* Scanline texture */
        .fcta-scanlines {
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.04) 3px,
            rgba(0,0,0,0.04) 4px
          );
          pointer-events: none;
          z-index: 3;
        }

        .fcta-inner {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          padding: 80px 40px;
          max-width: 1000px; width: 100%;
        }

        /* Eyebrow with lines */
        .fcta-eyebrow {
          display: flex; align-items: center; gap: 20px;
          font-size: 9px; letter-spacing: 5px; text-transform: uppercase;
          color: rgba(200,164,74,0.7);
          margin-bottom: 48px;
        }
        .fcta-eyebrow-line {
          display: block; width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,164,74,0.4), transparent);
        }

        /* Massive headline */
        .fcta-headline { margin-bottom: 40px; }
        .fcta-h1 {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 11vw, 168px);
          color: var(--white); letter-spacing: 4px;
          line-height: 0.85;
          text-shadow: 0 0 80px rgba(200,164,74,0.15);
        }
        .fcta-h2 {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(36px, 5.5vw, 84px);
          color: var(--gold);
          line-height: 1.1;
          filter: drop-shadow(0 0 30px rgba(200,164,74,0.4));
          margin: 4px 0;
        }
        .fcta-h3 {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 11vw, 168px);
          letter-spacing: 4px;
          line-height: 0.85;
        }
        .fcta-h3-white { color: var(--white); }
        .fcta-h3-outline {
          color: transparent;
          -webkit-text-stroke: 3px rgba(200,164,74,0.6);
          filter: drop-shadow(0 0 24px rgba(200,164,74,0.25));
        }

        /* Decorative divider */
        .fcta-divider {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 28px;
        }
        .fcta-div-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--gold); opacity: 0.5;
        }
        .fcta-div-line {
          width: 120px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,164,74,0.4), transparent);
        }

        .fcta-desc {
          font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 52px;
          line-height: 2;
        }

        /* CTA Button — full gold block */
        .fcta-btn {
          display: inline-flex; align-items: center; gap: 16px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold2) 100%);
          color: var(--black);
          font-weight: 700; font-size: 13px; letter-spacing: 3px;
          text-transform: uppercase; text-decoration: none;
          padding: 22px 64px;
          border-radius: 2px;
          box-shadow:
            0 0 60px rgba(200,164,74,0.3),
            0 0 120px rgba(200,164,74,0.1);
          transition: all .4s cubic-bezier(.4,0,.2,1);
          position: relative;
          overflow: hidden;
        }
        .fcta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .fcta-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow:
            0 0 100px rgba(200,164,74,0.5),
            0 0 200px rgba(200,164,74,0.15);
        }
        .fcta-btn:hover::before { opacity: 1; }
        .fcta-btn-text { position: relative; z-index: 1; }
        .fcta-btn-arrow {
          position: relative; z-index: 1;
          font-size: 18px;
          transition: transform .3s;
        }
        .fcta-btn:hover .fcta-btn-arrow { transform: translateX(4px); }

        .fcta-trust {
          margin-top: 24px;
          font-size: 10px; letter-spacing: 1.5px;
          color: rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          .fcta-h1 { font-size: clamp(52px, 14vw, 120px); }
          .fcta-h2 { font-size: clamp(32px, 8vw, 72px); }
          .fcta-h3 { font-size: clamp(52px, 14vw, 120px); }
          .fcta-eyebrow-line { width: 32px; }
        }
        @media (max-width: 480px) {
          .fcta-inner { padding: 72px 20px; }
          .fcta-btn { padding: 18px 32px; font-size: 11px; letter-spacing: 2px; }
          .fcta-btn-arrow { display: none; }
          .fcta-eyebrow { gap: 12px; font-size: 8px; }
          .fcta-desc { font-size: 11px; letter-spacing: 1px; margin-bottom: 36px; }
          .fcta-headline { margin-bottom: 28px; }
        }
      `}</style>
    </>
  )
}
