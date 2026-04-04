'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/portfolio-${String(i + 1).padStart(2, '0')}.png`,
  alt: `Arte ${i + 1} — New Pack Church Design`,
}))

// Mosaic layout: assign size variants to images for visual interest
const sizeMap: Record<number, string> = {
  1: 'tall', 2: 'normal', 3: 'normal', 4: 'wide', 5: 'normal',
  6: 'tall', 7: 'normal', 8: 'normal', 9: 'wide', 10: 'normal',
  11: 'normal', 12: 'tall', 13: 'normal', 14: 'wide', 15: 'normal',
}

export default function PortfolioGallery() {
  const [active, setActive] = useState<number | null>(null)

  const open  = (id: number) => setActive(id)
  const close = useCallback(() => setActive(null), [])
  const prev  = useCallback(() => setActive(a => a === null ? null : a === 1 ? 15 : a - 1), [])
  const next  = useCallback(() => setActive(a => a === null ? null : a === 15 ? 1 : a + 1), [])

  useEffect(() => {
    if (active === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [active, close, prev, next])

  const activeImg = active !== null ? images[active - 1] : null

  return (
    <>
      {/* Grid */}
      <div className="pg-grid">
        {images.map((img) => (
          <button
            key={img.id}
            className={`pg-item pg-${sizeMap[img.id]}`}
            onClick={() => open(img.id)}
            aria-label={`Ver ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="pg-item-overlay">
              <span className="pg-item-num">0{img.id > 9 ? img.id : '0' + img.id}</span>
              <span className="pg-item-zoom">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8v6M8 11h6"/>
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* CTA strip below grid */}
      <div className="pg-cta">
        <p className="pg-cta-eye">✦ Todos os arquivos em PSD editável</p>
        <h2 className="pg-cta-title">Quero criar artes como essas</h2>
        <p className="pg-cta-sub">Acesso imediato a todas as artes + novos arquivos toda semana</p>
        <Link href="/#planos" className="pg-cta-btn">Ver Planos e Assinar</Link>
      </div>

      {/* Lightbox */}
      {active !== null && activeImg && (
        <div className="lb-backdrop" onClick={close} role="dialog" aria-modal="true">
          <div className="lb-box" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button className="lb-close" onClick={close} aria-label="Fechar">✕</button>

            {/* Counter */}
            <div className="lb-counter">
              <span className="lb-num">{String(active).padStart(2, '0')}</span>
              <span className="lb-sep">/</span>
              <span className="lb-total">15</span>
            </div>

            {/* Image */}
            <div className="lb-img-wrap">
              <Image
                key={active}
                src={activeImg.src}
                alt={activeImg.alt}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Prev / Next */}
            <button className="lb-arrow lb-prev" onClick={prev} aria-label="Anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="lb-arrow lb-next" onClick={next} aria-label="Próxima">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Bottom bar */}
            <div className="lb-bar">
              <p className="lb-title">{activeImg.alt}</p>
              <Link href="/#planos" className="lb-cta" onClick={close}>
                Assinar e ter acesso a esta arte →
              </Link>
            </div>

            {/* Thumbnail strip */}
            <div className="lb-thumbs">
              {images.map((img) => (
                <button
                  key={img.id}
                  className={`lb-thumb ${img.id === active ? 'lb-thumb-active' : ''}`}
                  onClick={() => setActive(img.id)}
                  aria-label={`Ver arte ${img.id}`}
                >
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="60px" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      <style>{`
        /* ── Grid ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 3px;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
        }
        .pg-tall  { grid-row: span 2; }
        .pg-wide  { grid-column: span 2; }
        .pg-normal {}

        /* ── Grid item ── */
        .pg-item {
          position: relative;
          overflow: hidden;
          background: var(--dark3);
          border: none; cursor: pointer; padding: 0;
          display: block;
        }
        .pg-item-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0);
          display: flex; align-items: flex-end; justify-content: space-between;
          padding: 16px 20px;
          transition: background .3s;
        }
        .pg-item:hover .pg-item-overlay {
          background: rgba(0,0,0,0.55);
        }
        .pg-item-num {
          font-family: var(--font-bebas), sans-serif;
          font-size: 13px; letter-spacing: 3px;
          color: rgba(255,255,255,0);
          transition: color .3s;
        }
        .pg-item:hover .pg-item-num { color: rgba(255,255,255,0.5); }

        .pg-item-zoom {
          color: rgba(255,255,255,0);
          transition: color .3s, transform .3s;
          display: flex;
        }
        .pg-item:hover .pg-item-zoom {
          color: var(--gold);
          transform: scale(1.1);
        }

        /* Scale on hover */
        .pg-item img { transition: transform .6s cubic-bezier(.25,.46,.45,.94) !important; }
        .pg-item:hover img { transform: scale(1.06) !important; }

        /* ── CTA strip ── */
        .pg-cta {
          text-align: center;
          padding: 96px 24px;
          border-top: 1px solid rgba(200,164,74,0.1);
          background: radial-gradient(ellipse at 50% 0%, rgba(200,164,74,0.05) 0%, transparent 60%);
        }
        .pg-cta-eye {
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 20px;
        }
        .pg-cta-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(44px, 6vw, 80px); line-height: 1;
          color: var(--white); letter-spacing: 2px; margin-bottom: 14px;
        }
        .pg-cta-sub {
          font-size: 14px; color: rgba(255,255,255,0.32);
          line-height: 1.7; margin-bottom: 36px;
        }
        .pg-cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700;
          font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase;
          padding: 18px 48px; border-radius: 2px; text-decoration: none;
          transition: opacity .2s;
        }
        .pg-cta-btn:hover { opacity: .88; }

        /* ── Lightbox ── */
        .lb-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.97);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          animation: lbIn .2s ease;
        }
        @keyframes lbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lb-box {
          position: relative;
          width: 100%; height: 100%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }

        .lb-close {
          position: absolute; top: 24px; right: 28px;
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.4); font-size: 18px;
          transition: color .2s; z-index: 10;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
        }
        .lb-close:hover { color: var(--white); }

        .lb-counter {
          position: absolute; top: 28px; left: 32px;
          display: flex; align-items: baseline; gap: 4px; z-index: 10;
        }
        .lb-num {
          font-family: var(--font-bebas), sans-serif;
          font-size: 28px; color: var(--gold); line-height: 1;
        }
        .lb-sep { font-size: 12px; color: rgba(255,255,255,0.2); }
        .lb-total { font-size: 12px; color: rgba(255,255,255,0.3); letter-spacing: 1px; }

        .lb-img-wrap {
          position: relative;
          width: min(90vw, 900px);
          height: min(72vh, 650px);
          animation: imgIn .25s ease;
        }
        @keyframes imgIn {
          from { opacity: 0; transform: scale(.97); }
          to   { opacity: 1; transform: scale(1); }
        }

        .lb-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5); cursor: pointer;
          width: 52px; height: 52px; border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, color .2s, border-color .2s;
        }
        .lb-arrow:hover {
          background: rgba(200,164,74,0.12);
          border-color: rgba(200,164,74,0.3);
          color: var(--gold);
        }
        .lb-prev { left: 24px; }
        .lb-next { right: 24px; }

        .lb-bar {
          display: flex; align-items: center; justify-content: space-between;
          width: min(90vw, 900px); margin-top: 20px;
          padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap; gap: 12px;
        }
        .lb-title {
          font-size: 11px; letter-spacing: 2px;
          color: rgba(255,255,255,0.25); text-transform: uppercase;
        }
        .lb-cta {
          font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
          color: var(--gold); text-decoration: none;
          transition: letter-spacing .2s;
        }
        .lb-cta:hover { letter-spacing: 3px; }

        /* Thumbnails */
        .lb-thumbs {
          display: flex; gap: 4px; margin-top: 16px;
          width: min(90vw, 900px);
          overflow-x: auto; padding-bottom: 4px;
          scrollbar-width: thin; scrollbar-color: rgba(200,164,74,0.3) transparent;
        }
        .lb-thumb {
          position: relative; flex-shrink: 0;
          width: 56px; height: 40px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 1px; overflow: hidden;
          cursor: pointer; background: none; padding: 0;
          opacity: 0.45; transition: opacity .2s, border-color .2s;
        }
        .lb-thumb:hover { opacity: 0.75; }
        .lb-thumb-active {
          opacity: 1 !important;
          border-color: var(--gold) !important;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pg-grid { grid-template-columns: repeat(3, 1fr); padding: 0 28px; }
        }
        @media (max-width: 640px) {
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 180px;
            padding: 0 3px; gap: 3px;
          }
          .pg-tall { grid-row: span 1; }
          .pg-wide { grid-column: span 1; }
          .lb-prev { left: 8px; }
          .lb-next { right: 8px; }
          .lb-arrow { width: 40px; height: 40px; }
          .lb-img-wrap { width: 96vw; height: 60vh; }
          .lb-bar { width: 96vw; }
          .lb-thumbs { width: 96vw; }
          .lb-thumb { width: 44px; height: 32px; }
        }
      `}</style>
    </>
  )
}
