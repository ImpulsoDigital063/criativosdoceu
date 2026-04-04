import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost, type Section } from '@/lib/posts'
import BackgroundFX from '@/components/BackgroundFX'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Criativos do Céu`,
    description: post.excerpt,
  }
}

const accentPalette = {
  gold:     { color: '#c8a44a', glow: 'rgba(200,164,74,0.15)',  bg: 'rgba(200,164,74,0.07)',  btnBg: 'linear-gradient(135deg,#c8a44a,#f0dfa0)' },
  crimson:  { color: '#e05a4a', glow: 'rgba(192,57,43,0.18)',   bg: 'rgba(192,57,43,0.07)',   btnBg: 'linear-gradient(135deg,#c0392b,#e05a4a)'  },
  electric: { color: '#60a5fa', glow: 'rgba(59,130,246,0.18)',  bg: 'rgba(59,130,246,0.07)',  btnBg: 'linear-gradient(135deg,#2563eb,#60a5fa)'  },
}

function renderSection(s: Section, i: number, acColor: string, acBg: string, acBtnBg: string) {
  switch (s.type) {
    case 'h2':
      return <h2 key={i} className="art-h2">{s.content}</h2>
    case 'h3':
      return <h3 key={i} className="art-h3">{s.content}</h3>
    case 'p':
      return <p key={i} className="art-p">{s.content}</p>
    case 'quote':
      return (
        <blockquote key={i} className="art-quote">
          <span className="art-quote-mark">"</span>
          {s.content}
        </blockquote>
      )
    case 'list':
      return (
        <div key={i} className="art-list-wrap">
          {s.content && <p className="art-p">{s.content}</p>}
          <ul className="art-list">
            {s.items?.map((item, j) => (
              <li key={j} className="art-list-item">
                <span className="art-li-dot" style={{ color: acColor }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    case 'callout':
      return (
        <div key={i} className="art-callout" style={{ background: acBg, borderLeftColor: acColor }}>
          <p className="art-callout-label" style={{ color: acColor }}>✦ New Pack Church Design</p>
          <p className="art-callout-text">{s.content}</p>
          {s.ctaLabel && s.ctaHref && (
            <Link href={s.ctaHref} className="art-callout-btn" style={{ background: acBtnBg }}>
              {s.ctaLabel}
            </Link>
          )}
        </div>
      )
    case 'cta-inline':
      return (
        <div key={i} className="art-cta-inline" style={{ borderColor: `${acColor}30` }}>
          <p className="aci-text">{s.content}</p>
          {s.ctaLabel && s.ctaHref && (
            <Link href={s.ctaHref} className="aci-btn" style={{ color: acColor, borderColor: `${acColor}50` }}>
              {s.ctaLabel} →
            </Link>
          )}
        </div>
      )
    case 'divider':
      return <div key={i} className="art-divider" style={{ background: `linear-gradient(90deg, transparent, ${acColor}30, transparent)` }} />
    default:
      return null
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const ac = accentPalette[post.accent]
  const others = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <BackgroundFX />

      <div className="art-wrap" style={{ '--ac': ac.color, '--ac-glow': ac.glow, '--ac-bg': ac.bg } as React.CSSProperties}>

        {/* Nav */}
        <nav className="art-nav">
          <Link href="/blog" className="art-nav-back">← Voltar ao Blog</Link>
          <Link href="/" className="art-nav-logo">
            <span className="anl-main">Criativos</span>
            <span className="anl-do">do</span>
            <span className="anl-ceu">Céu</span>
          </Link>
          <Link href="/#planos" className="art-nav-cta">Assinar Pack</Link>
        </nav>

        {/* Reading progress bar */}
        <div className="art-progress" style={{ background: ac.color }} />

        {/* Hero */}
        <header className="art-hero">
          <div className="art-hero-inner">
            <div className="art-meta">
              <span className="art-tag" style={{ background: ac.bg, color: ac.color }}>{post.category}</span>
              <span className="art-sep">·</span>
              <span className="art-read-time">{post.readTime} de leitura</span>
              <span className="art-sep">·</span>
              <span className="art-date">{post.date}</span>
            </div>
            <h1 className="art-title">{post.title}</h1>
            <p className="art-subtitle">{post.subtitle}</p>

            {/* Hero CTA */}
            <div className="art-hero-cta">
              <Link href="/#planos" className="ahc-btn" style={{ background: ac.btnBg }}>
                Conhecer o New Pack →
              </Link>
              <span className="ahc-note">Acesso imediato · Garantia de 7 dias</span>
            </div>
          </div>
          <div className="art-hero-line" style={{ background: `linear-gradient(90deg, ${ac.color}, transparent)` }} />
        </header>

        {/* Body */}
        <article className="art-body">
          <div className="art-body-inner">
            {post.body.map((section, i) => renderSection(section, i, ac.color, ac.bg, ac.btnBg))}
          </div>
        </article>

        {/* Mid-page CTA banner */}
        <div className="art-mid-cta" style={{ borderColor: `${ac.color}20`, background: `radial-gradient(ellipse at 50% 0%, ${ac.glow} 0%, transparent 70%)` }}>
          <p className="amc-label" style={{ color: ac.color }}>✦ Chega de arte amadora</p>
          <h2 className="amc-title">PSDs profissionais para a comunicação da sua igreja</h2>
          <p className="amc-sub">+30 categorias · Photoshop editável · Novos arquivos toda semana</p>
          <div className="amc-actions">
            <Link href="/#planos" className="amc-btn-primary" style={{ background: ac.btnBg }}>
              Assinar Agora
            </Link>
            <Link href="/#portfolio" className="amc-btn-secondary" style={{ color: ac.color, borderColor: `${ac.color}40` }}>
              Ver exemplos de artes
            </Link>
          </div>
        </div>

        {/* Other articles */}
        <section className="art-others">
          <div className="art-others-head">
            <p className="art-others-label">✦ Continue Lendo</p>
            <Link href="/blog" className="art-others-all" style={{ color: ac.color }}>Ver todos os artigos →</Link>
          </div>
          <div className="art-others-grid">
            {others.map((o) => {
              const oac = accentPalette[o.accent]
              return (
                <Link key={o.slug} href={`/blog/${o.slug}`} className="art-other-card">
                  <div className="aoc-bar" style={{ background: oac.color }} />
                  <div className="aoc-top">
                    <span className="aoc-cat" style={{ color: oac.color }}>{o.category}</span>
                    <span className="aoc-time">{o.readTime}</span>
                  </div>
                  <h3 className="aoc-title">{o.title}</h3>
                  <p className="aoc-excerpt">{o.excerpt}</p>
                  <span className="aoc-link" style={{ color: oac.color }}>Ler artigo →</span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="art-footer-cta" style={{ background: `radial-gradient(ellipse at 50% 100%, ${ac.glow} 0%, transparent 65%)` }}>
          <p className="afc-eye" style={{ color: ac.color }}>✦ New Pack Church Design</p>
          <h2 className="afc-title">Eleve o design da sua igreja hoje</h2>
          <p className="afc-sub">
            PSDs profissionais prontos para editar no Photoshop.<br />
            Novos arquivos toda semana. Acesso imediato. Garantia de 7 dias.
          </p>
          <div className="afc-actions">
            <Link href="/#planos" className="afc-btn-main" style={{ background: ac.btnBg }}>
              Ver Planos e Assinar
            </Link>
            <Link href="/blog" className="afc-btn-ghost" style={{ color: ac.color, borderColor: `${ac.color}35` }}>
              ← Voltar ao Blog
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .art-wrap {
          position: relative;
          z-index: 1;
          min-height: 100vh;
        }

        /* ── Progress bar ── */
        .art-progress {
          position: fixed;
          top: 0; left: 0;
          height: 2px;
          width: 0%;
          z-index: 200;
          opacity: 0.75;
          transition: none;
        }

        /* ── Nav ── */
        .art-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 56px;
          border-bottom: 1px solid rgba(200,164,74,0.08);
          position: sticky;
          top: 0;
          background: rgba(3,3,3,0.94);
          backdrop-filter: blur(20px);
          z-index: 100;
        }
        .art-nav-back {
          font-size: 11px;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color .2s;
        }
        .art-nav-back:hover { color: var(--ac); }
        .art-nav-logo {
          display: flex; align-items: baseline; gap: 5px; text-decoration: none;
        }
        .anl-main {
          font-family: var(--font-bebas), sans-serif; font-size: 20px; letter-spacing: 3px;
          background: linear-gradient(105deg,#fff,#f5ecd4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .anl-do {
          font-family: var(--font-playfair), serif; font-style: italic;
          font-size: 11px; color: rgba(255,255,255,0.3);
        }
        .anl-ceu {
          font-family: var(--font-bebas), sans-serif; font-size: 20px; letter-spacing: 3px;
          background: linear-gradient(105deg,#c8a44a,#f0dfa0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .art-nav-cta {
          font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: var(--black);
          background: linear-gradient(135deg,var(--gold),var(--gold2));
          padding: 10px 22px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .art-nav-cta:hover { opacity: .85; }

        /* ── Hero ── */
        .art-hero {
          padding: 80px 56px 64px;
          max-width: 860px;
          margin: 0 auto;
        }
        .art-meta {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 28px; flex-wrap: wrap;
        }
        .art-tag {
          font-size: 9px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
          padding: 5px 12px; border-radius: 2px;
        }
        .art-sep { color: rgba(255,255,255,0.15); font-size: 12px; }
        .art-read-time, .art-date {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 1px;
        }
        .art-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(44px, 5.5vw, 80px);
          line-height: 0.95; letter-spacing: 1px;
          color: var(--white); margin-bottom: 20px;
        }
        .art-subtitle {
          font-family: var(--font-playfair), serif; font-style: italic;
          font-size: clamp(17px, 1.8vw, 22px);
          color: var(--ac); opacity: .72; line-height: 1.5;
          margin-bottom: 36px;
        }
        .art-hero-cta {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .ahc-btn {
          display: inline-block; color: #030303; font-weight: 700;
          font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
          padding: 14px 32px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .ahc-btn:hover { opacity: .85; }
        .ahc-note {
          font-size: 11px; color: rgba(255,255,255,0.22); letter-spacing: 1px;
        }
        .art-hero-line {
          height: 1px; margin-top: 56px; opacity: .35;
        }

        /* ── Article Body ── */
        .art-body { padding: 64px 56px 80px; }
        .art-body-inner {
          max-width: 720px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 0;
        }

        .art-h2 {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(30px, 3.5vw, 46px); letter-spacing: 2px;
          color: var(--white);
          margin-top: 60px; margin-bottom: 20px;
          padding-left: 18px; border-left: 3px solid var(--ac);
        }
        .art-h3 {
          font-family: var(--font-bebas), sans-serif;
          font-size: 28px; letter-spacing: 2px;
          color: rgba(255,255,255,0.7);
          margin-top: 40px; margin-bottom: 16px;
        }
        .art-p {
          font-size: 16px; line-height: 1.95;
          color: rgba(255,255,255,0.58); margin-bottom: 22px;
        }
        .art-quote {
          position: relative;
          padding: 28px 36px 28px 52px;
          margin: 40px 0;
          border-left: 3px solid var(--ac);
          background: var(--ac-bg);
          font-family: var(--font-playfair), serif; font-style: italic;
          font-size: 18px; line-height: 1.7;
          color: rgba(255,255,255,0.75);
        }
        .art-quote-mark {
          position: absolute; top: 8px; left: 14px;
          font-size: 64px; line-height: 1;
          color: var(--ac); opacity: .25; font-family: serif;
        }
        .art-list-wrap { margin-bottom: 24px; }
        .art-list {
          list-style: none;
          display: flex; flex-direction: column; gap: 14px;
          margin-top: 16px; padding: 28px 28px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05); border-radius: 2px;
        }
        .art-list-item {
          display: flex; align-items: flex-start; gap: 14px;
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.55);
        }
        .art-li-dot { font-size: 8px; margin-top: 6px; flex-shrink: 0; }

        /* Callout */
        .art-callout {
          margin: 48px 0; padding: 36px 40px;
          border: 1px solid rgba(255,255,255,0.06);
          border-left-width: 4px; border-radius: 2px;
        }
        .art-callout-label {
          font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 12px;
        }
        .art-callout-text {
          font-size: 15px; line-height: 1.85;
          color: rgba(255,255,255,0.65); margin-bottom: 24px;
        }
        .art-callout-btn {
          display: inline-block; color: #030303; font-weight: 700;
          font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
          padding: 14px 32px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .art-callout-btn:hover { opacity: .85; }

        /* CTA inline (mid-article) */
        .art-cta-inline {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
          margin: 40px 0; padding: 24px 28px;
          border: 1px solid; border-radius: 2px;
          background: rgba(255,255,255,0.015);
        }
        .aci-text {
          font-size: 14px; line-height: 1.7;
          color: rgba(255,255,255,0.5); flex: 1; min-width: 200px;
        }
        .aci-btn {
          white-space: nowrap; font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-decoration: none;
          padding: 12px 22px; border: 1px solid; border-radius: 2px;
          transition: opacity .2s, letter-spacing .2s; flex-shrink: 0;
        }
        .aci-btn:hover { opacity: .75; letter-spacing: 2.5px; }

        /* Divider */
        .art-divider { height: 1px; margin: 48px 0; }

        /* ── Mid-page CTA Banner ── */
        .art-mid-cta {
          text-align: center;
          padding: 80px 24px;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .amc-label {
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 20px;
        }
        .amc-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(36px, 5vw, 68px); line-height: 1;
          color: var(--white); letter-spacing: 2px; margin-bottom: 12px;
        }
        .amc-sub {
          font-size: 13px; color: rgba(255,255,255,0.3);
          letter-spacing: 1.5px; margin-bottom: 36px;
        }
        .amc-actions {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }
        .amc-btn-primary {
          display: inline-block; color: #030303; font-weight: 700;
          font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
          padding: 16px 40px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .amc-btn-primary:hover { opacity: .85; }
        .amc-btn-secondary {
          display: inline-block; font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-decoration: none;
          padding: 15px 30px; border: 1px solid; border-radius: 2px;
          transition: opacity .2s;
        }
        .amc-btn-secondary:hover { opacity: .7; }

        /* ── Other articles ── */
        .art-others {
          padding: 72px 56px;
          border-top: 1px solid rgba(255,255,255,0.04);
          max-width: 1280px; margin: 0 auto;
        }
        .art-others-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 36px;
        }
        .art-others-label {
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold);
        }
        .art-others-all {
          font-size: 12px; font-weight: 700; letter-spacing: 1px; text-decoration: none;
          transition: letter-spacing .2s;
        }
        .art-others-all:hover { letter-spacing: 2px; }
        .art-others-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px;
        }
        .art-other-card {
          display: flex; flex-direction: column; gap: 12px;
          padding: 36px 32px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          text-decoration: none;
          transition: background .2s, transform .2s; position: relative; overflow: hidden;
        }
        .art-other-card:hover { background: rgba(255,255,255,0.035); transform: translateY(-3px); }
        .aoc-bar { position: absolute; top: 0; left: 0; right: 0; height: 2px; opacity: .5; }
        .aoc-top { display: flex; align-items: center; justify-content: space-between; }
        .aoc-cat { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .aoc-time { font-size: 10px; color: rgba(255,255,255,0.2); letter-spacing: 1px; }
        .aoc-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(22px, 2vw, 30px); letter-spacing: 1px;
          color: var(--white); line-height: 1.05; flex: 1;
        }
        .aoc-excerpt {
          font-size: 12px; line-height: 1.7; color: rgba(255,255,255,0.3);
        }
        .aoc-link { font-size: 12px; font-weight: 700; letter-spacing: 1px; }

        /* ── Footer CTA ── */
        .art-footer-cta {
          text-align: center; padding: 96px 24px 80px;
          border-top: 1px solid rgba(255,255,255,0.04);
          max-width: 680px; margin: 0 auto;
        }
        .afc-eye {
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 20px;
        }
        .afc-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(44px, 6vw, 80px); line-height: 1;
          color: var(--white); letter-spacing: 2px; margin-bottom: 16px;
        }
        .afc-sub {
          font-size: 14px; line-height: 1.85;
          color: rgba(255,255,255,0.32); margin-bottom: 40px;
        }
        .afc-actions {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }
        .afc-btn-main {
          display: inline-block; color: #030303; font-weight: 700;
          font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase;
          padding: 18px 48px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .afc-btn-main:hover { opacity: .88; }
        .afc-btn-ghost {
          display: inline-block; font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-decoration: none;
          padding: 17px 28px; border: 1px solid; border-radius: 2px; transition: opacity .2s;
        }
        .afc-btn-ghost:hover { opacity: .6; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .art-nav { padding: 18px 20px; }
          .art-hero { padding: 52px 22px 44px; }
          .art-body { padding: 36px 22px 56px; }
          .art-h2 { margin-top: 44px; }
          .art-quote { padding: 20px 18px 20px 36px; font-size: 16px; }
          .art-others { padding: 48px 20px; }
          .art-others-grid { grid-template-columns: 1fr; }
          .art-cta-inline { flex-direction: column; align-items: flex-start; }
          .amc-actions { flex-direction: column; }
          .afc-actions { flex-direction: column; }
        }
      `}</style>

      {/* Reading progress script */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var bar = document.querySelector('.art-progress');
          if (!bar) return;
          window.addEventListener('scroll', function() {
            var h = document.documentElement;
            var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
            bar.style.width = Math.min(pct, 100) + '%';
          }, { passive: true });
        })();
      `}} />
    </>
  )
}
