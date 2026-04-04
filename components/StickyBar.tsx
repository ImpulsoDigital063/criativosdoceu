'use client'

import { useEffect, useState } from 'react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#topo')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className={`sticky-bar ${visible ? 'show' : ''}`}>
        <div className="st-nm">New Pack Church Design</div>
        <a href="#planos" className="btn-gold-sm">Assinar Agora</a>
      </div>

      <style>{`
        .sticky-bar {
          position: fixed; bottom: 0; left: 0; right: 0;
          background: rgba(8,8,8,0.97);
          border-top: 1px solid rgba(200,164,74,0.18);
          padding: 13px 56px;
          display: flex; justify-content: space-between; align-items: center;
          z-index: 400;
          backdrop-filter: blur(16px);
          transform: translateY(100%);
          transition: transform .4s;
          flex-wrap: wrap; gap: 12px;
        }
        .sticky-bar.show { transform: translateY(0); }
        .st-nm { font-family: var(--font-bebas); font-size: 19px; letter-spacing: 2px; }
        .st-sub { font-size: 10px; color: var(--muted); letter-spacing: 1px; }
        .st-px { font-family: var(--font-bebas); font-size: 28px; color: var(--gold); }
        .btn-gold-sm {
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 12px 28px; border-radius: 2px; text-decoration: none;
          transition: all .2s;
        }
        .btn-gold-sm:hover { background: var(--gold2); }
        @media (max-width: 960px) {
          .sticky-bar { padding: 13px 20px; }
        }
        @media (max-width: 560px) {
          .sticky-bar {
            padding: 8px 16px;
            gap: 8px;
          }
          .st-nm { font-size: 13px; letter-spacing: 1px; }
          .st-sub { display: none; }
          .st-px { font-size: 20px; }
          .btn-gold-sm {
            padding: 8px 18px;
            font-size: 10px;
            letter-spacing: 1.5px;
          }
        }
      `}</style>
    </>
  )
}
