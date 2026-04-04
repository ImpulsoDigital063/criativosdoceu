'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '/#incluso',   label: 'Incluso' },
  { href: '/portfolio',  label: 'Portfólio' },
  { href: '/#planos',    label: 'Planos' },
  { href: '/#faq',       label: 'FAQ' },
  { href: '/blog',       label: 'Blog', gold: true },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  // Fecha ao redimensionar para desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Trava scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)
  const toggle = () => setOpen(o => !o)

  return (
    <>
      <nav className="nav">

        {/* Wordmark */}
        <a href="/" className="nav-brand" onClick={close}>
          <span className="nav-brand-main">Criativos</span>
          <span className="nav-brand-connector">do</span>
          <span className="nav-brand-accent">Céu</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map(({ href, label, gold }) => (
            <a key={href} href={href} className={`nav-link${gold ? ' nav-link-blog' : ''}`}>
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="/#planos" className="nav-cta nav-cta-desktop">Assinar Agora</a>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-burger${open ? ' is-open' : ''}`}
          onClick={toggle}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className="nb-l1" />
          <span className="nb-l2" />
          <span className="nb-l3" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${open ? ' is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`nav-drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div className="nd-inner">
          <div className="nd-links">
            {links.map(({ href, label, gold }) => (
              <a
                key={href}
                href={href}
                className={`nd-link${gold ? ' nd-link-gold' : ''}`}
                onClick={close}
              >
                <span className="nd-link-num">{String(links.indexOf(links.find(l => l.href === href)!) + 1).padStart(2,'0')}</span>
                {label}
              </a>
            ))}
          </div>

          <div className="nd-foot">
            <a href="/#planos" className="nd-cta" onClick={close}>
              Assinar Agora
            </a>
            <p className="nd-note">Acesso imediato · Garantia de 7 dias</p>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Barra de navegação ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          height: 68px; padding: 0 56px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(5,5,5,0.92);
          backdrop-filter: blur(20px) saturate(1.5);
          -webkit-backdrop-filter: blur(20px) saturate(1.5);
          border-bottom: 1px solid rgba(200,164,74,0.08);
        }

        /* Wordmark */
        .nav-brand {
          display: flex; align-items: baseline; gap: 6px;
          text-decoration: none; flex-shrink: 0; line-height: 1;
        }
        .nav-brand-main {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 24px; letter-spacing: 3px;
          background: linear-gradient(105deg, #fff, #f5ecd4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .nav-brand-connector {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic; font-size: 13px;
          color: rgba(255,255,255,0.35); letter-spacing: 1px;
        }
        .nav-brand-accent {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 24px; letter-spacing: 3px;
          background: linear-gradient(105deg, #c8a44a, #f0dfa0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 10px rgba(200,164,74,0.3));
        }

        /* Desktop links */
        .nav-links { display: flex; gap: 36px; }
        .nav-link {
          color: rgba(255,255,255,0.45); font-size: 11px;
          letter-spacing: 2px; text-transform: uppercase;
          text-decoration: none; transition: color .2s; position: relative;
        }
        .nav-link::after {
          content: ''; position: absolute;
          bottom: -4px; left: 0; right: 0; height: 1px;
          background: var(--gold); transform: scaleX(0); transition: transform .25s;
        }
        .nav-link:hover { color: var(--white); }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link-blog { color: rgba(200,164,74,0.6); }
        .nav-link-blog:hover { color: var(--gold); }

        /* Desktop CTA */
        .nav-cta {
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 11px;
          letter-spacing: 2.5px; text-transform: uppercase;
          padding: 10px 24px; border-radius: 2px;
          text-decoration: none; transition: all .2s; white-space: nowrap;
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 0 28px rgba(200,164,74,0.3); }

        /* ── Hamburger button ── */
        .nav-burger {
          display: none;
          width: 44px; height: 44px;
          flex-direction: column; justify-content: center; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer; padding: 0;
          border-radius: 2px; transition: background .2s; flex-shrink: 0;
        }
        .nav-burger:hover { background: rgba(255,255,255,0.05); }

        .nav-burger span {
          display: block;
          width: 24px; height: 2px;
          background: rgba(255,255,255,0.75);
          border-radius: 2px;
          transition:
            transform .32s cubic-bezier(.23,1,.32,1),
            opacity   .32s cubic-bezier(.23,1,.32,1),
            background .2s;
          transform-origin: center;
        }

        /* X state */
        .nav-burger.is-open .nb-l1 { transform: translateY(8px) rotate(45deg);  background: var(--gold); }
        .nav-burger.is-open .nb-l2 { opacity: 0; transform: scaleX(0); }
        .nav-burger.is-open .nb-l3 { transform: translateY(-8px) rotate(-45deg); background: var(--gold); }

        /* ── Backdrop ── */
        .nav-backdrop {
          position: fixed; inset: 0; top: 68px; z-index: 489;
          background: rgba(0,0,0,0.5);
          opacity: 0; pointer-events: none;
          transition: opacity .35s;
        }
        .nav-backdrop.is-open { opacity: 1; pointer-events: auto; }

        /* ── Drawer ── */
        .nav-drawer {
          position: fixed;
          top: 68px; left: 0; right: 0; bottom: 0;
          z-index: 490;
          background: rgba(4,4,4,0.98);
          backdrop-filter: blur(24px);
          display: flex; flex-direction: column;
          transform: translateX(100%);
          visibility: hidden;
          transition:
            transform .38s cubic-bezier(.23,1,.32,1),
            visibility .38s;
          overflow-y: auto;
        }
        .nav-drawer.is-open {
          transform: translateX(0);
          visibility: visible;
        }

        /* Inner layout */
        .nd-inner {
          display: flex; flex-direction: column; justify-content: space-between;
          flex: 1; min-height: 0;
          padding: 40px 32px 52px;
        }

        /* Links */
        .nd-links { display: flex; flex-direction: column; }
        .nd-link {
          display: flex; align-items: baseline; gap: 16px;
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(38px, 11vw, 56px);
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color .22s, padding-left .22s;
          line-height: 1;
        }
        .nd-link:last-child { border-bottom: none; }
        .nd-link:hover, .nd-link:focus { color: var(--white); padding-left: 6px; }
        .nd-link-gold { color: rgba(200,164,74,0.45); }
        .nd-link-gold:hover { color: var(--gold) !important; }

        .nd-link-num {
          font-size: 11px; letter-spacing: 2px;
          color: rgba(255,255,255,0.15);
          align-self: center;
          flex-shrink: 0;
        }
        .nd-link:hover .nd-link-num { color: rgba(200,164,74,0.4); }

        /* Footer CTA */
        .nd-foot {
          display: flex; flex-direction: column; gap: 14px;
          padding-top: 32px;
          border-top: 1px solid rgba(200,164,74,0.15);
          margin-top: 24px;
        }
        .nd-cta {
          display: block; text-align: center;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700;
          font-size: 14px; letter-spacing: 3px; text-transform: uppercase;
          padding: 18px 24px; border-radius: 2px; text-decoration: none;
          transition: opacity .2s;
        }
        .nd-cta:hover { opacity: .88; }
        .nd-note {
          text-align: center; font-size: 11px;
          color: rgba(255,255,255,0.18); letter-spacing: 1.5px;
        }

        /* ── Breakpoints ── */
        @media (max-width: 960px) {
          .nav { padding: 0 20px; }
          .nav-links { display: none; }
          .nav-cta-desktop { display: none; }
          .nav-burger { display: flex; }
        }
        @media (max-width: 400px) {
          .nav-brand-main, .nav-brand-accent { font-size: 20px; }
          .nd-inner { padding: 32px 24px 40px; }
        }
      `}</style>
    </>
  )
}
