import Link from 'next/link'
import { posts } from '@/lib/posts'

const accentMap = {
  gold:     { color: '#c8a44a', tag: 'rgba(200,164,74,0.10)', bar: '#c8a44a' },
  electric: { color: '#60a5fa', tag: 'rgba(59,130,246,0.10)',  bar: '#60a5fa' },
  crimson:  { color: '#e05a4a', tag: 'rgba(192,57,43,0.10)',   bar: '#e05a4a' },
}

export default function BlogTeaser() {
  return (
    <>
      <section className="bt-section" id="blog">
        <div className="bt-inner">

          {/* Header */}
          <div className="bt-head" data-reveal="bottom">
            <p className="lbl">Conhecimento</p>
            <h2 className="bt-title">
              <span className="btt-ghost">Design</span>
              <span className="btt-solid">que Transforma</span>
            </h2>
            <p className="bt-desc">
              Artigos sobre comunicação visual, identidade gospel e o impacto do design
              na vida das igrejas brasileiras.
            </p>
          </div>

          {/* Cards */}
          <div className="bt-grid">
            {posts.map((post, i) => {
              const ac = accentMap[post.accent]
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bt-card"
                  data-reveal="bottom"
                  data-delay={`${i * 100}ms`}
                  style={{ '--btc-ac': ac.color, '--btc-tag': ac.tag } as React.CSSProperties}
                >
                  {/* Top accent bar */}
                  <div className="btc-bar" style={{ background: ac.bar }} />

                  {/* Category + time */}
                  <div className="btc-meta">
                    <span className="btc-tag" style={{ background: ac.tag, color: ac.color }}>
                      {post.category}
                    </span>
                    <span className="btc-time">{post.readTime}</span>
                  </div>

                  {/* Content */}
                  <h3 className="btc-title">{post.title}</h3>
                  <p className="btc-excerpt">{post.excerpt}</p>

                  {/* Footer */}
                  <div className="btc-foot">
                    <span className="btc-date">{post.date}</span>
                    <span className="btc-cta" style={{ color: ac.color }}>Ler artigo →</span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Bottom actions */}
          <div className="bt-actions" data-reveal="bottom">
            <Link href="/blog" className="bt-btn-ghost">
              Ver todos os artigos
            </Link>
            <Link href="/#planos" className="bt-btn-gold">
              Assinar o Pack
            </Link>
          </div>

        </div>
      </section>

      <style>{`
        .bt-section {
          background: var(--dark2);
          border-top: 1px solid rgba(200,164,74,0.07);
          border-bottom: 1px solid rgba(200,164,74,0.07);
          padding: 112px 56px;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        /* Subtle gold radial behind section */
        .bt-section::before {
          content: '';
          position: absolute;
          top: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 600px;
          background: radial-gradient(ellipse, rgba(200,164,74,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        .bt-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .bt-head {
          margin-bottom: 64px;
        }
        .bt-title {
          font-family: var(--font-bebas), sans-serif;
          line-height: 0.88;
          margin-bottom: 20px;
        }
        .btt-ghost {
          display: block;
          font-size: clamp(64px, 9vw, 128px);
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(200,164,74,0.18);
          letter-spacing: 4px;
        }
        .btt-solid {
          display: block;
          font-size: clamp(56px, 7.5vw, 112px);
          background: linear-gradient(135deg, #ffffff 0%, #f5ecd4 45%, #c8a44a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
        }
        .bt-desc {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.35);
          max-width: 520px;
        }

        /* ── Grid ── */
        .bt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-bottom: 48px;
        }

        /* ── Card ── */
        .bt-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px 32px 32px;
          background: rgba(255,255,255,0.012);
          border: 1px solid rgba(255,255,255,0.05);
          text-decoration: none;
          overflow: hidden;
          transition: background .3s, transform .3s, border-color .3s;
        }
        .bt-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.025) 0%, transparent 55%);
          opacity: 0;
          transition: opacity .3s;
          pointer-events: none;
        }
        .bt-card:hover {
          background: rgba(255,255,255,0.028);
          transform: translateY(-5px);
          border-color: var(--btc-ac, rgba(200,164,74,0.2));
        }
        .bt-card:hover::after { opacity: 1; }

        .btc-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: .55;
        }
        .btc-meta {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 22px;
        }
        .btc-tag {
          font-size: 9px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; padding: 4px 10px; border-radius: 2px;
        }
        .btc-time {
          font-size: 10px; color: rgba(255,255,255,0.2); letter-spacing: 1px;
        }
        .btc-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(24px, 2.2vw, 32px); letter-spacing: 1px;
          line-height: 1.05; color: var(--white);
          margin-bottom: 16px; flex: 1;
        }
        .btc-excerpt {
          font-size: 13px; line-height: 1.8;
          color: rgba(255,255,255,0.32);
          margin-bottom: 28px; flex: 2;
        }
        .btc-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 18px;
        }
        .btc-date { font-size: 10px; color: rgba(255,255,255,0.18); letter-spacing: 1px; }
        .btc-cta {
          font-size: 12px; font-weight: 700; letter-spacing: 1px;
          transition: letter-spacing .2s;
        }
        .bt-card:hover .btc-cta { letter-spacing: 2px; }

        /* ── Actions ── */
        .bt-actions {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .bt-btn-ghost {
          display: inline-block;
          font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          padding: 14px 32px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px; text-decoration: none;
          transition: color .2s, border-color .2s;
        }
        .bt-btn-ghost:hover { color: var(--white); border-color: rgba(255,255,255,0.25); }
        .bt-btn-gold {
          display: inline-block;
          font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: var(--black);
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          padding: 14px 36px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .bt-btn-gold:hover { opacity: .88; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bt-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .bt-section { padding: 72px 20px; }
          .bt-grid { grid-template-columns: 1fr; }
          .bt-card { padding: 32px 22px 26px; }
          .btt-ghost { font-size: clamp(48px, 14vw, 80px); }
          .btt-solid { font-size: clamp(40px, 12vw, 72px); }
          .bt-actions { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  )
}
