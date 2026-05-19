import Link from 'next/link'
import { posts } from '@/lib/posts'
import BackgroundFX from '@/components/BackgroundFX'

const accentColor = {
  gold:     { border: 'rgba(200,164,74,0.35)',  tag: 'rgba(200,164,74,0.12)',  text: '#c8a44a' },
  crimson:  { border: 'rgba(192,57,43,0.35)',   tag: 'rgba(192,57,43,0.12)',   text: '#e05a4a' },
  electric: { border: 'rgba(59,130,246,0.35)',  tag: 'rgba(59,130,246,0.12)',  text: '#60a5fa' },
}

export const metadata = {
  title: 'Blog — Criativos do Céu',
  description: 'Artigos sobre design de qualidade para igrejas, comunicação gospel e identidade visual cristã.',
}

export default function BlogPage() {
  return (
    <>
      <BackgroundFX />

      <div className="blog-wrap">

        {/* Nav */}
        <nav className="blog-nav">
          <Link href="/" className="blog-nav-logo">
            <span className="bnl-main">Criativos</span>
            <span className="bnl-do">do</span>
            <span className="bnl-ceu">Céu</span>
          </Link>
          <Link href="/#planos" className="blog-nav-cta">Assinar Pack</Link>
        </nav>

        {/* Header */}
        <header className="blog-header">
          <p className="blog-eyebrow">✦ Conteúdo &amp; Recursos</p>
          <h1 className="blog-title">
            <span className="bth-line1">Design que</span>
            <span className="bth-line2">Impacta</span>
          </h1>
          <p className="blog-desc">
            Reflexões sobre comunicação visual, identidade de marca e o poder do design
            <br />na construção do reino — para igrejas de todos os tamanhos.
          </p>
        </header>

        {/* Cards */}
        <section className="blog-grid">
          {posts.map((post, i) => {
            const ac = accentColor[post.accent]
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{
                '--card-border': ac.border,
                '--card-tag-bg': ac.tag,
                '--card-accent': ac.text,
                animationDelay: `${i * 0.12}s`,
              } as React.CSSProperties}>
                {/* Accent bar */}
                <div className="bc-bar" style={{ background: ac.text }} />

                {/* Meta */}
                <div className="bc-meta">
                  <span className="bc-tag" style={{ background: ac.tag, color: ac.text }}>{post.category}</span>
                  <span className="bc-time">{post.readTime} de leitura</span>
                </div>

                {/* Content */}
                <h2 className="bc-title">{post.title}</h2>
                <p className="bc-excerpt">{post.excerpt}</p>

                {/* Footer */}
                <div className="bc-foot">
                  <span className="bc-date">{post.date}</span>
                  <span className="bc-read" style={{ color: ac.text }}>
                    Ler artigo →
                  </span>
                </div>
              </Link>
            )
          })}
        </section>

        {/* CTA strip */}
        <div className="blog-cta-strip">
          <p className="bcs-label">✦ New Pack Church Design</p>
          <h2 className="bcs-title">Pronto para elevar o design da sua igreja?</h2>
          <Link href="/#planos" className="bcs-btn">Ver Planos e Assinar</Link>
        </div>

      </div>

      <style>{`
        .blog-wrap {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        /* ── Nav ── */
        .blog-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 56px;
          border-bottom: 1px solid rgba(200,164,74,0.08);
          position: sticky;
          top: 0;
          background: rgba(3,3,3,0.92);
          backdrop-filter: blur(20px);
          z-index: 100;
        }
        .blog-nav-logo {
          display: flex;
          align-items: baseline;
          gap: 5px;
          text-decoration: none;
        }
        .bnl-main {
          font-family: var(--font-bebas), sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          background: linear-gradient(105deg, #fff, #f5ecd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bnl-do {
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }
        .bnl-ceu {
          font-family: var(--font-bebas), sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          background: linear-gradient(105deg, #c8a44a, #f0dfa0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blog-nav-cta {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--black);
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          padding: 10px 22px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity .2s;
        }
        .blog-nav-cta:hover { opacity: .85; }

        /* ── Header ── */
        .blog-header {
          text-align: center;
          padding: 96px 24px 72px;
          max-width: 800px;
          margin: 0 auto;
        }
        .blog-eyebrow {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
        }
        .blog-title {
          display: flex;
          flex-direction: column;
          font-family: var(--font-bebas), sans-serif;
          line-height: 0.88;
          margin-bottom: 28px;
        }
        .bth-line1 {
          font-size: clamp(64px, 9vw, 120px);
          color: rgba(255,255,255,0.18);
          letter-spacing: 4px;
        }
        .bth-line2 {
          font-size: clamp(80px, 12vw, 164px);
          background: linear-gradient(135deg, #c8a44a 0%, #f0dfa0 45%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
        }
        .blog-desc {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(255,255,255,0.38);
        }

        /* ── Grid ── */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
        }

        /* ── Card ── */
        .blog-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 44px 36px 36px;
          background: rgba(255,255,255,0.015);
          border: 1px solid var(--card-border);
          text-decoration: none;
          transition: background .3s, transform .3s;
          overflow: hidden;
          animation: cardIn .6s ease both;
        }
        .blog-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.03) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity .3s;
        }
        .blog-card:hover {
          background: rgba(255,255,255,0.03);
          transform: translateY(-4px);
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .bc-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0.6;
        }
        .bc-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .bc-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .bc-time {
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 1px;
        }
        .bc-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(28px, 2.5vw, 36px);
          letter-spacing: 1px;
          line-height: 1.05;
          color: var(--white);
          margin-bottom: 18px;
          flex: 1;
        }
        .bc-excerpt {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255,255,255,0.35);
          margin-bottom: 32px;
          flex: 2;
        }
        .bc-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 20px;
        }
        .bc-date {
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 1px;
        }
        .bc-read {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: letter-spacing .2s;
        }
        .blog-card:hover .bc-read { letter-spacing: 2px; }

        /* ── CTA Strip ── */
        .blog-cta-strip {
          text-align: center;
          padding: 96px 24px;
          border-top: 1px solid rgba(200,164,74,0.08);
          max-width: 640px;
          margin: 80px auto 0;
        }
        .bcs-label {
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .bcs-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1;
          color: var(--white);
          margin-bottom: 36px;
          letter-spacing: 2px;
        }
        .bcs-btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 18px 44px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity .2s;
        }
        .bcs-btn:hover { opacity: .88; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); padding: 0 28px; }
        }
        @media (max-width: 640px) {
          .blog-nav { padding: 20px 20px; }
          .blog-grid { grid-template-columns: 1fr; padding: 0 16px; }
          .blog-card { padding: 32px 24px 28px; }
        }
      `}</style>
    </>
  )
}
