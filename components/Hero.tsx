import Image from 'next/image'

// Coluna A — imagens ímpares
const colA = [
  '/portfolio-01.png',
  '/portfolio-05.png',
  '/portfolio-09.png',
  '/portfolio-11.png',
  '/portfolio-13.png',
  '/portfolio-03.png',
  '/portfolio-07.png',
]

// Coluna B — imagens pares (começa meio ciclo à frente)
const colB = [
  '/portfolio-06.png',
  '/portfolio-10.png',
  '/portfolio-02.png',
  '/portfolio-14.png',
  '/portfolio-08.png',
  '/portfolio-12.png',
  '/portfolio-04.png',
]

// Duplicamos para loop infinito sem corte
const trackA = [...colA, ...colA]
const trackB = [...colB, ...colB]

export default function Hero() {
  return (
    <>
      <section id="topo" className="hero-section">

        {/* ── Carrossel mobile (fundo) ── */}
        <div className="hero-mob-carousel" aria-hidden="true">
          <div className="hero-mob-track">
            {trackA.map((src, i) => (
              <div key={i} className="hero-mob-item">
                <Image src={src} alt="" fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Overlays cinematográficos ── */}
        <div className="hero-ov-left" />
        <div className="hero-ov-bottom" />
        <div className="hero-ov-top" />
        <div className="hero-ov-vignette" />
        <div className="hero-beam" />

        {/* ── Conteúdo ── */}
        <div className="hero-content">

          {/* NEW PACK — badge editorial */}
          <div className="ht-newpack-wrap">
            <div className="ht-newpack-badge">
              <span className="ht-newpack-star">✦</span>
              <span className="ht-newpack-text">NEW PACK</span>
            </div>
            <div className="ht-newpack-rule" />
          </div>

          {/* Bloco tipográfico principal */}
          <div className="hero-title-block">

            {/* ✦ gigante decorativo de fundo */}
            <div className="ht-bg-star" aria-hidden="true">✦</div>

            {/* CHURCH — peça central */}
            <div className="ht-church-wrap">
              <span className="ht-church">CHURCH</span>
            </div>

            {/* DESIGN — gradiente branco → ouro */}
            <div className="ht-design-wrap">
              <span className="ht-design">DESIGN</span>
              <span className="ht-design-sub">Church Pack</span>
            </div>

            {/* by Ressil Design — após DESIGN */}
            <div className="ht-byline-bar">
              <div className="ht-byline-line" />
              <em className="ht-byline">by Ressil Design</em>
              <div className="ht-byline-line ht-byline-fade" />
            </div>

          </div>

          <p className="hero-desc">
            Chega de artes amadoras. A sua igreja merece{' '}
            <strong>templates profissionais prontos para editar</strong>{' '}
            — sem contratar designer, sem horas no zero.
          </p>

          <div className="hero-btns">
            <a href="#planos" className="hero-btn-primary">
              Quero Meus PSDs Agora
              <span className="hero-btn-arrow">→</span>
            </a>
            <a href="#portfolio" className="hero-btn-ghost">↓ Ver os Projetos</a>
          </div>
          <p className="hero-trust">Acesso imediato · Garantia de 7 dias · Seguro via Kiwify</p>

          <div className="hero-stats">
            {[
              { v: 'PSD', l: 'Arquivos Pro' },
              { v: '+30', l: 'Categorias' },
              { v: '100%', l: 'Editável' },
              { v: '7d', l: 'Garantia' },
            ].map(({ v, l }) => (
              <div key={l} className="hero-stat">
                <div className="hs-v">{v}</div>
                <div className="hs-l">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Carrossel desktop (lado direito) ── */}
        <div className="hero-carousel" aria-hidden="true">
          <div className="hero-carousel-fade-left" />
          <div className="hero-carousel-fade-top" />
          <div className="hero-carousel-fade-bottom" />

          {/* Coluna A — rola mais devagar */}
          <div className="hc-col">
            <div className="hc-track hc-track-a">
              {trackA.map((src, i) => (
                <div key={i} className="hc-item">
                  <Image src={src} alt="" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Coluna B — rola mais rápido, offset de meio ciclo */}
          <div className="hc-col">
            <div className="hc-track hc-track-b">
              {trackB.map((src, i) => (
                <div key={i} className="hc-item">
                  <Image src={src} alt="" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <style>{`
        /* ── Section ── */
        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 68px;
          background: var(--black);
        }

        /* ══════════════════════════════
           CARROSSEL DESKTOP
        ══════════════════════════════ */
        .hero-carousel {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 44%;
          display: flex;
          gap: 6px;
          overflow: hidden;
          z-index: 2;
        }

        /* Fades que suavizam as bordas do carrossel */
        .hero-carousel-fade-left {
          position: absolute; left: 0; top: 0; bottom: 0; width: 120px;
          background: linear-gradient(90deg, var(--black), transparent);
          z-index: 10; pointer-events: none;
        }
        .hero-carousel-fade-top {
          position: absolute; top: 0; left: 0; right: 0; height: 180px;
          background: linear-gradient(180deg, var(--black), transparent);
          z-index: 10; pointer-events: none;
        }
        .hero-carousel-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 200px;
          background: linear-gradient(0deg, var(--black), transparent);
          z-index: 10; pointer-events: none;
        }

        .hc-col {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hc-track {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-shrink: 0;
        }
        .hc-track-a { animation: scrollUp 32s linear infinite; }
        .hc-track-b { animation: scrollUp 24s linear infinite; animation-delay: -12s; }

        .hc-item {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          flex-shrink: 0;
          overflow: hidden;
          filter: brightness(0.75) saturate(1.2);
          transition: filter .4s;
        }
        .hc-item:hover { filter: brightness(1) saturate(1.3); }

        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        /* ══════════════════════════════
           CARROSSEL MOBILE (fundo)
        ══════════════════════════════ */
        .hero-mob-carousel {
          display: none;
          position: absolute; inset: 0;
          overflow: hidden;
          z-index: 1;
        }
        .hero-mob-track {
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: scrollUp 40s linear infinite;
          filter: brightness(0.5) saturate(1.3);
        }
        .hero-mob-item {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
          overflow: hidden;
        }

        /* ══════════════════════════════
           OVERLAYS
        ══════════════════════════════ */
        .hero-ov-left {
          position: absolute; left: 0; top: 0; bottom: 0; width: 65%;
          background: linear-gradient(90deg, var(--black) 30%, rgba(3,3,3,0.85) 65%, transparent 100%);
          z-index: 3; pointer-events: none;
        }
        .hero-ov-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(0deg, var(--black) 0%, transparent 100%);
          z-index: 3; pointer-events: none;
        }
        .hero-ov-top {
          position: absolute; top: 0; left: 0; right: 0; height: 25%;
          background: linear-gradient(180deg, rgba(3,3,3,0.95) 0%, transparent 100%);
          z-index: 3; pointer-events: none;
        }
        .hero-ov-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 100% at 30% 50%, transparent 20%, rgba(0,0,0,0.5) 100%);
          z-index: 3; pointer-events: none;
        }
        .hero-beam {
          position: absolute; top: 0; bottom: 0; left: 52%;
          width: 1px;
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(200,164,74,0.12) 20%,
            rgba(200,164,74,0.28) 50%,
            rgba(200,164,74,0.12) 80%,
            transparent 100%);
          z-index: 4; pointer-events: none;
          box-shadow: 0 0 40px 6px rgba(200,164,74,0.06);
        }

        /* ══════════════════════════════
           CONTEÚDO
        ══════════════════════════════ */
        .hero-content {
          position: relative; z-index: 10;
          padding: 56px 72px 80px;
          max-width: 720px;
          width: 100%;
        }

        /* ── NEW PACK badge ── */
        .ht-newpack-wrap {
          display: flex; align-items: center; gap: 20px;
          margin-bottom: 28px;
        }
        .ht-newpack-badge {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 8px 18px;
          position: relative;
          flex-shrink: 0;
          border: 1px solid rgba(200,164,74,0.28);
          background: rgba(200,164,74,0.04);
        }
        .ht-newpack-star {
          font-size: 8px; color: var(--gold);
          filter: drop-shadow(0 0 5px rgba(200,164,74,0.9));
          flex-shrink: 0;
          animation: npPulse 2.5s ease-in-out infinite;
        }
        @keyframes npPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .ht-newpack-text {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 18px; letter-spacing: 6px;
          background: linear-gradient(105deg, #c8a44a, #f0dfa0, #c8a44a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ht-newpack-rule {
          flex: 1; height: 1px; max-width: 80px;
          background: linear-gradient(90deg, rgba(200,164,74,0.18), transparent);
        }

        /* ── Bloco tipográfico ── */
        .hero-title-block {
          position: relative;
          margin-bottom: 32px;
        }

        /* ✦ gigante de fundo */
        .ht-bg-star {
          position: absolute;
          right: -80px; top: 50%;
          transform: translateY(-50%);
          font-size: clamp(200px, 30vw, 420px);
          line-height: 1;
          color: rgba(200,164,74,0.03);
          pointer-events: none; user-select: none;
          z-index: 0;
        }

        /* ── CHURCH — peça central ── */
        .ht-church-wrap {
          position: relative; z-index: 1;
          line-height: 0.82;
          margin-bottom: -2px;
        }
        .ht-church {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(104px, 14.5vw, 204px);
          letter-spacing: 0.06em;
          display: block;
          background: linear-gradient(135deg, #c8a44a 0%, #f0dfa0 38%, #ffffff 68%, #f5ecd4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 60px rgba(200,164,74,0.28));
          white-space: nowrap;
        }

        /* ── by Ressil Design — após DESIGN ── */
        .ht-byline-bar {
          display: flex; align-items: center; gap: 16px;
          margin-top: 16px;
          position: relative; z-index: 1;
        }
        .ht-byline-line {
          height: 1px; width: 36px; flex-shrink: 0;
          background: rgba(200,164,74,0.45);
        }
        .ht-byline-fade {
          flex: 1;
          background: linear-gradient(90deg, rgba(200,164,74,0.2), transparent);
          max-width: 200px;
        }
        .ht-byline {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(15px, 1.6vw, 21px);
          letter-spacing: 2px;
          white-space: nowrap;
          background: linear-gradient(90deg, #c8a44a, #f0dfa0, #c8a44a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 14px rgba(200,164,74,0.3));
        }

        /* ── DESIGN — gradiente branco → ouro ── */
        .ht-design-wrap {
          position: relative; z-index: 1;
          line-height: 0.84;
          display: flex; align-items: baseline; gap: 20px;
        }
        .ht-design {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(88px, 12vw, 172px);
          letter-spacing: 0.04em;
          display: block;
          background: linear-gradient(105deg, #ffffff 0%, #f5ecd4 45%, #c8a44a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          flex-shrink: 0;
        }
        .ht-design::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0;
          width: 55%; height: 2px;
          background: linear-gradient(90deg, var(--gold), rgba(200,164,74,0.3), transparent);
        }
        .ht-design-sub {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(12px, 1.2vw, 16px);
          letter-spacing: 1.5px;
          white-space: nowrap;
          align-self: flex-end;
          padding-bottom: 12px;
          background: linear-gradient(90deg, rgba(245,236,212,0.4), rgba(200,164,74,0.25));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Descrição */
        .hero-desc {
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.42);
          max-width: 420px; margin-bottom: 36px;
        }
        .hero-desc strong {
          color: rgba(255,255,255,0.95);
          font-weight: 600;
          background: linear-gradient(135deg, var(--white), rgba(232,201,106,0.9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Botões */
        .hero-btns { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 12px;
          letter-spacing: 2.5px; text-transform: uppercase;
          padding: 17px 36px; border-radius: 2px; text-decoration: none;
          box-shadow:
            0 0 50px rgba(200,164,74,0.3),
            0 0 100px rgba(200,164,74,0.1);
          transition: all .35s cubic-bezier(.4,0,.2,1);
          position: relative; overflow: hidden;
        }
        .hero-btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 80px rgba(200,164,74,0.55), 0 0 160px rgba(200,164,74,0.15);
        }
        .hero-btn-primary:hover::before { opacity: 1; }
        .hero-btn-arrow {
          font-size: 16px; transition: transform .3s;
          position: relative; z-index: 1;
        }
        .hero-btn-primary:hover .hero-btn-arrow { transform: translateX(4px); }

        .hero-btn-ghost {
          color: rgba(255,255,255,0.4); font-size: 13px;
          text-decoration: none; transition: color .2s; letter-spacing: 1px;
        }
        .hero-btn-ghost:hover { color: var(--white); }
        .hero-trust {
          font-size: 10px; color: rgba(255,255,255,0.25);
          letter-spacing: 1px; margin-top: 14px;
        }

        /* Stats */
        .hero-stats {
          display: flex; gap: 32px; flex-wrap: wrap;
          margin-top: 48px; padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .hero-stat {}
        .hs-v {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 36px; line-height: 1;
          background: linear-gradient(135deg, #ffffff 0%, #f5ecd4 50%, #c8a44a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 10px rgba(200,164,74,0.25));
        }
        .hs-l {
          font-size: 9px; letter-spacing: 2px;
          color: rgba(255,255,255,0.25); text-transform: uppercase; margin-top: 4px;
        }

        /* ══════════════════════════════
           RESPONSIVE
        ══════════════════════════════ */
        @media (max-width: 1100px) {
          .hero-carousel { width: 40%; }
          .hero-ov-left { width: 70%; }
          .hero-content { padding: 56px 40px 80px; }
          .hero-beam { left: 58%; }
        }

        @media (max-width: 900px) {
          .hero-carousel { display: none; }
          .hero-mob-carousel { display: block; }
          .hero-ov-left {
            width: 100%;
            background: linear-gradient(180deg, rgba(3,3,3,0.72) 0%, rgba(3,3,3,0.5) 50%, rgba(3,3,3,0.78) 100%);
          }
          .hero-ov-vignette { opacity: 0.7; }
          .hero-content { padding: 60px 32px 80px; max-width: 100%; }
          .hero-beam { display: none; }
          .ht-bg-star { display: none; }
        }

        @media (max-width: 640px) {
          .ht-church { font-size: clamp(80px, 18vw, 130px); letter-spacing: 0.04em; }
          .ht-design { font-size: clamp(68px, 15vw, 112px); }
          .ht-design-sub { display: none; }
          .ht-mid-bar { margin: 6px 0 4px; }
        }

        @media (max-width: 640px) {
          .ht-newpack-text { font-size: 16px; letter-spacing: 5px; }
          .ht-byline { font-size: 14px; }
        }

        @media (max-width: 560px) {
          .hero-content { padding: 52px 20px 72px; }
          .ht-church { font-size: clamp(72px, 19vw, 110px); }
          .ht-design { font-size: clamp(60px, 16vw, 96px); }
          .ht-design-sub { display: none; }
          .ht-newpack-wrap { margin-bottom: 18px; }
          .ht-newpack-text { font-size: 14px; letter-spacing: 4px; }
          .ht-newpack-rule { display: none; }
          .ht-byline-line, .ht-byline-fade { display: none; }
          .ht-byline { font-size: 14px; }
          .hero-stats { gap: 20px; }
          .hs-v { font-size: 28px; }
          .hero-btn-primary { padding: 15px 26px; font-size: 11px; letter-spacing: 2px; }
          .hero-btn-arrow { display: none; }
          .hero-desc { font-size: 14px; max-width: 100%; }
        }
      `}</style>
    </>
  )
}
