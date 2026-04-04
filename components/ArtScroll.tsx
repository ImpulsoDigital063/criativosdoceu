'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const panels = [
  {
    src: '/portfolio-13.png',
    side: 'left',
    category: 'Cinematográfico',
    headline: 'CADA ARTE\nCONTA UMA\nHISTÓRIA',
    sub: 'Composição, luz e tipografia trabalhadas para comunicar o evangelho com força visual real.',
    accent: 'var(--gold)',
  },
  {
    src: '/portfolio-14.png',
    side: 'right',
    category: 'Editorial',
    headline: 'NÍVEL DE\nAGÊNCIA\nAO SEU ALCANCE',
    sub: 'Os mesmos recursos que designers cobram R$300 por arte — entregues prontos pra você editar.',
    accent: 'var(--electric)',
  },
  {
    src: '/portfolio-05.png',
    side: 'bottom',
    category: 'Gospel · Y2K · 3D',
    headline: 'QUALQUER\nESTILO.\nSEMPRE.',
    sub: 'Cinematográfico, editorial, teen, feminino, infantil. Um pack para todos os momentos da sua igreja.',
    accent: 'var(--crimson)',
  },
]

export default function ArtScroll() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const panels = sectionRef.current?.querySelectorAll('[data-art-panel]') ?? []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('art-visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    panels.forEach((p) => observer.observe(p))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="artscroll-section">

        {panels.map((panel, i) => {
          const isRight = panel.side === 'right'
          const isBottom = panel.side === 'bottom'

          if (isBottom) {
            return (
              <div key={i} className="art-panel art-panel-full" data-art-panel>
                {/* Image rises from bottom */}
                <div className="art-full-img">
                  <Image src={panel.src} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div className="art-full-overlay" />

                {/* Text flies in from left */}
                <div className="art-full-content">
                  <div
                    className="art-category"
                    style={{ '--art-accent': panel.accent } as React.CSSProperties}
                  >
                    <span className="art-cat-dot" />
                    {panel.category}
                  </div>
                  <div className="art-headline">
                    {panel.headline.split('\n').map((line, j) => (
                      <div key={j} className="art-hl-line">{line}</div>
                    ))}
                  </div>
                  <p className="art-sub">{panel.sub}</p>
                </div>
              </div>
            )
          }

          return (
            <div
              key={i}
              className={`art-panel art-panel-split ${isRight ? 'art-panel-reverse' : ''}`}
              data-art-panel
            >
              {/* Image — slides from its side */}
              <div className={`art-split-img art-img-from-${panel.side}`}>
                <Image src={panel.src} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                <div className="art-img-overlay" />
              </div>

              {/* Text — slides from opposite side */}
              <div className="art-split-text">
                <div
                  className="art-category"
                  style={{ '--art-accent': panel.accent } as React.CSSProperties}
                >
                  <span className="art-cat-dot" />
                  {panel.category}
                </div>
                <div className="art-headline">
                  {panel.headline.split('\n').map((line, j) => (
                    <div
                      key={j}
                      className={`art-hl-line ${j === 1 ? 'art-hl-italic' : ''}`}
                    >
                      {j === 1
                        ? <em>{line}</em>
                        : line}
                    </div>
                  ))}
                </div>
                <p className="art-sub">{panel.sub}</p>
                <div className="art-num">{String(i + 1).padStart(2, '0')}</div>
              </div>
            </div>
          )
        })}

      </section>

      <style>{`
        .artscroll-section {
          background: var(--black);
          display: flex;
          flex-direction: column;
        }

        /* ── Split panel ── */
        .art-panel-split {
          display: grid;
          grid-template-columns: 55% 45%;
          min-height: 90vh;
          overflow: hidden;
        }
        .art-panel-reverse { direction: rtl; }
        .art-panel-reverse > * { direction: ltr; }

        /* Image area */
        .art-split-img {
          position: relative;
          overflow: hidden;
        }
        .art-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            90deg,
            transparent 60%,
            var(--black) 100%
          );
          z-index: 2;
        }
        .art-panel-reverse .art-img-overlay {
          background: linear-gradient(
            -90deg,
            transparent 60%,
            var(--black) 100%
          );
        }

        /* Text area */
        .art-split-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px 80px 56px;
          position: relative;
          background: var(--black);
        }
        .art-panel-reverse .art-split-text {
          padding: 80px 56px 80px 60px;
        }
        .art-num {
          position: absolute;
          bottom: 48px; right: 48px;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 100px; line-height: 1;
          color: rgba(255,255,255,0.03);
          pointer-events: none;
        }

        /* ── Full bleed panel ── */
        .art-panel-full {
          min-height: 90vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .art-full-img {
          position: absolute; inset: 0;
          transform: translateY(0);
          will-change: transform;
        }
        .art-full-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(0deg, rgba(3,3,3,0.92) 0%, rgba(3,3,3,0.4) 40%, transparent 70%),
            linear-gradient(90deg, rgba(3,3,3,0.5) 0%, transparent 50%);
          z-index: 2;
        }
        .art-full-content {
          position: relative; z-index: 3;
          padding: 80px;
          max-width: 680px;
        }

        /* ── Shared typography ── */
        .art-category {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--art-accent, var(--gold));
          margin-bottom: 24px;
          border: 1px solid color-mix(in srgb, var(--art-accent, var(--gold)) 30%, transparent);
          padding: 4px 12px; border-radius: 2px;
          background: color-mix(in srgb, var(--art-accent, var(--gold)) 6%, transparent);
        }
        .art-cat-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--art-accent, var(--gold));
          flex-shrink: 0;
          box-shadow: 0 0 8px var(--art-accent, var(--gold));
        }
        .art-headline {
          line-height: 0.88;
          margin-bottom: 28px;
        }
        .art-hl-line {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 108px);
          color: var(--white);
          display: block;
          letter-spacing: 2px;
        }
        .art-hl-italic em {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          color: var(--gold);
          font-size: clamp(40px, 5.5vw, 84px);
          -webkit-text-stroke: 0;
          letter-spacing: 1px;
        }
        .art-sub {
          font-size: 14px; line-height: 1.85;
          color: rgba(255,255,255,0.4);
          max-width: 380px;
        }

        /* ── Scroll-triggered entrance animations ── */

        /* Split: image from left side */
        .art-img-from-left {
          transform: translateX(-60px);
          opacity: 0;
          transition: transform 1.1s cubic-bezier(.25,.46,.45,.94), opacity 1.1s;
        }
        .art-panel-reverse .art-img-from-right {
          transform: translateX(60px);
          opacity: 0;
          transition: transform 1.1s cubic-bezier(.25,.46,.45,.94), opacity 1.1s;
        }

        /* Text: slides from opposite direction */
        .art-panel-split .art-split-text {
          transform: translateX(40px);
          opacity: 0;
          transition: transform 1.1s 0.2s cubic-bezier(.25,.46,.45,.94), opacity 1.1s 0.2s;
        }
        .art-panel-reverse .art-split-text {
          transform: translateX(-40px);
        }

        /* Full bleed: image from bottom */
        .art-panel-full .art-full-img {
          transform: translateY(80px) scale(1.06);
          opacity: 0;
          transition: transform 1.3s cubic-bezier(.25,.46,.45,.94), opacity 1.2s;
        }
        .art-panel-full .art-full-content {
          transform: translateY(40px);
          opacity: 0;
          transition: transform 1s 0.3s cubic-bezier(.25,.46,.45,.94), opacity 1s 0.3s;
        }

        /* Visible state */
        .art-visible .art-img-from-left,
        .art-visible .art-img-from-right {
          transform: translateX(0);
          opacity: 1;
        }
        .art-visible .art-split-text {
          transform: translateX(0);
          opacity: 1;
        }
        .art-visible .art-full-img {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        .art-visible .art-full-content {
          transform: translateY(0);
          opacity: 1;
        }

        @media (max-width: 960px) {
          .art-panel-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .art-panel-reverse { direction: ltr; }

          /* Image becomes a 60vw tall banner on top */
          .art-split-img { min-height: 62vw; }

          /* Gradient goes bottom → transparent so image bleeds into text */
          .art-img-overlay {
            background: linear-gradient(
              0deg,
              var(--black) 0%,
              rgba(3,3,3,0.2) 55%,
              transparent 100%
            ) !important;
          }

          .art-split-text { padding: 32px 24px 56px; }
          .art-panel-reverse .art-split-text { padding: 32px 24px 56px; }

          /* Pull text up to overlap image bottom */
          .art-split-text { margin-top: -40px; position: relative; z-index: 2; }

          /* Full bleed panel */
          .art-panel-full { min-height: 80vh; }
          .art-full-content { padding: 40px 24px 56px; }

          /* Scale down headline */
          .art-hl-line { font-size: clamp(44px, 12vw, 80px); }
          .art-hl-italic em { font-size: clamp(32px, 9vw, 64px); }

          .art-num { display: none; }
          .art-category { margin-bottom: 16px; }
        }

        @media (max-width: 480px) {
          .art-split-img { min-height: 75vw; }
          .art-hl-line { font-size: clamp(40px, 13vw, 72px); }
        }
      `}</style>
    </>
  )
}
