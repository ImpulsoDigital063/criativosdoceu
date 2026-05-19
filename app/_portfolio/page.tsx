import Link from 'next/link'
import BackgroundFX from '@/components/BackgroundFX'
import PortfolioGallery from '@/components/PortfolioGallery'

export const metadata = {
  title: 'Portfólio — New Pack Church Design · Criativos do Céu',
  description: 'Explore as artes do New Pack Church Design — PSDs profissionais para igrejas criados por Ressil Design.',
}

export default function PortfolioPage() {
  return (
    <>
      <BackgroundFX />

      <div className="pf-wrap">

        {/* Nav */}
        <nav className="pf-nav">
          <Link href="/" className="pf-nav-logo">
            <span className="pnl-main">Criativos</span>
            <span className="pnl-do">do</span>
            <span className="pnl-ceu">Céu</span>
          </Link>
          <div className="pf-nav-links">
            <Link href="/#incluso" className="pf-nav-link">Incluso</Link>
            <Link href="/#planos" className="pf-nav-link">Planos</Link>
            <Link href="/blog" className="pf-nav-link">Blog</Link>
          </div>
          <Link href="/#planos" className="pf-nav-cta">Assinar Pack</Link>
        </nav>

        {/* Hero header */}
        <header className="pf-hero">
          <div className="pf-hero-inner">
            <p className="pf-eye">✦ New Pack Church Design</p>
            <h1 className="pf-title">
              <span className="pft-ghost">Galeria</span>
              <span className="pft-solid">de Artes</span>
            </h1>
            <p className="pf-desc">
              15 artes do pack — clique em qualquer uma para ver em detalhe.<br />
              Todos os arquivos disponíveis em PSD editável no Photoshop.
            </p>
            <div className="pf-hero-meta">
              {['+15 PSDs', '+30 categorias', 'Novos toda semana', '7 dias de garantia'].map((tag) => (
                <span key={tag} className="pf-meta-tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        {/* Gallery */}
        <PortfolioGallery />

      </div>

      <style>{`
        .pf-wrap {
          position: relative; z-index: 1; min-height: 100vh;
          background: var(--black);
        }

        /* ── Nav ── */
        .pf-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 56px;
          border-bottom: 1px solid rgba(200,164,74,0.08);
          position: sticky; top: 0;
          background: rgba(3,3,3,0.94);
          backdrop-filter: blur(20px);
          z-index: 100;
        }
        .pf-nav-logo {
          display: flex; align-items: baseline; gap: 5px; text-decoration: none;
        }
        .pnl-main {
          font-family: var(--font-bebas), sans-serif; font-size: 22px; letter-spacing: 3px;
          background: linear-gradient(105deg,#fff,#f5ecd4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pnl-do {
          font-family: var(--font-playfair), serif; font-style: italic;
          font-size: 12px; color: rgba(255,255,255,0.3);
        }
        .pnl-ceu {
          font-family: var(--font-bebas), sans-serif; font-size: 22px; letter-spacing: 3px;
          background: linear-gradient(105deg,#c8a44a,#f0dfa0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pf-nav-links { display: flex; gap: 32px; }
        .pf-nav-link {
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); text-decoration: none; transition: color .2s;
        }
        .pf-nav-link:hover { color: var(--white); }
        .pf-nav-cta {
          font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: var(--black); background: linear-gradient(135deg,var(--gold),var(--gold2));
          padding: 10px 22px; border-radius: 2px; text-decoration: none; transition: opacity .2s;
        }
        .pf-nav-cta:hover { opacity: .85; }

        /* ── Hero ── */
        .pf-hero {
          padding: 88px 56px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .pf-hero-inner { max-width: 900px; }
        .pf-eye {
          font-size: 10px; letter-spacing: 5px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 28px;
        }
        .pf-title {
          font-family: var(--font-bebas), sans-serif;
          line-height: 0.88; margin-bottom: 24px;
        }
        .pft-ghost {
          display: block;
          font-size: clamp(72px, 11vw, 160px);
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(200,164,74,0.15);
          letter-spacing: 6px;
        }
        .pft-solid {
          display: block;
          font-size: clamp(60px, 9vw, 130px);
          background: linear-gradient(135deg, #ffffff 0%, #f5ecd4 50%, #c8a44a 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          letter-spacing: 3px;
        }
        .pf-desc {
          font-size: 15px; line-height: 1.85;
          color: rgba(255,255,255,0.35); margin-bottom: 28px;
        }
        .pf-hero-meta {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .pf-meta-tag {
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(200,164,74,0.6);
          border: 1px solid rgba(200,164,74,0.18);
          padding: 5px 12px; border-radius: 2px;
          background: rgba(200,164,74,0.04);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .pf-nav { padding: 18px 20px; }
          .pf-nav-links { display: none; }
          .pf-hero { padding: 56px 20px 44px; }
          .pft-ghost { font-size: clamp(48px, 14vw, 80px); }
          .pft-solid { font-size: clamp(40px, 12vw, 70px); }
        }
      `}</style>
    </>
  )
}
