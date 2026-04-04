import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className="footer-wrap">
        <div className="foot-inner">

          {/* Brand — Criativos do Céu */}
          <div className="foot-brand-col">
            <div className="foot-wordmark">
              <span className="foot-wm-main">Criativos</span>
              <span className="foot-wm-do">do</span>
              <span className="foot-wm-ceu">Céu</span>
            </div>
            <p className="foot-tag" style={{ marginTop: 12 }}>New Pack Church Design<br />PSDs profissionais para igrejas</p>

            {/* Ressil Design logo + crédito */}
            <div className="foot-ressil">
              <span className="foot-ressil-label">criado por</span>
              <a
                href="https://www.instagram.com/ressildesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="foot-ressil-link"
              >
                <Image
                  src="/logo.png"
                  alt="Ressil Design"
                  width={96}
                  height={32}
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="foot-links">
            <p className="foot-col-title">Menu</p>
            {[['#incluso', 'O que está incluso'], ['#portfolio', 'Portfólio'], ['#planos', 'Planos'], ['#faq', 'Dúvidas']].map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="/blog" className="foot-blog-link">Blog ✦</a>
          </div>

          {/* Redes */}
          <div className="foot-links">
            <p className="foot-col-title">Redes</p>
            <a href="https://www.instagram.com/ressildesign/" target="_blank" rel="noopener noreferrer">
              Instagram — Ressil Design
            </a>
            <a href="https://www.instagram.com/matheusreis.co/" target="_blank" rel="noopener noreferrer">
              Instagram — Matheus Reis
            </a>
            <a href="https://www.behance.net/mtwproducoes" target="_blank" rel="noopener noreferrer">
              Behance — Portfólio
            </a>
            <a href="#">WhatsApp VIP</a>
            <a href="#">Kiwify</a>
          </div>

          {/* Info */}
          <div>
            <p className="foot-tag">© 2026 Criativos do Céu</p>
            <p className="foot-tag" style={{ marginTop: 16 }}>Entrega digital via Kiwify<br />Garantia de 7 dias</p>
          </div>

        </div>

        <div className="foot-btm">
          <span>© 2026 Criativos do Céu · New Pack Church Design</span>
          <span>Todos os direitos reservados</span>
        </div>
      </footer>

      <style>{`
        .footer-wrap {
          background: var(--dark);
          border-top: 1px solid rgba(200,164,74,0.1);
          padding: 56px 56px 32px;
        }
        .foot-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: flex-start;
          flex-wrap: wrap; gap: 36px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* Brand col */
        .foot-brand-col { max-width: 240px; }

        /* Wordmark */
        .foot-wordmark {
          display: flex; align-items: baseline; gap: 6px;
          margin-bottom: 4px;
        }
        .foot-wm-main {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 28px; letter-spacing: 3px;
          background: linear-gradient(105deg, #ffffff, #f5ecd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .foot-wm-do {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          font-size: 14px;
          color: rgba(255,255,255,0.3);
        }
        .foot-wm-ceu {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 28px; letter-spacing: 3px;
          background: linear-gradient(105deg, #c8a44a, #f0dfa0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Ressil logo block */
        .foot-ressil {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .foot-ressil-label {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          white-space: nowrap;
        }
        .foot-ressil-link {
          display: flex;
          align-items: center;
          opacity: 0.55;
          transition: opacity .2s;
        }
        .foot-ressil-link:hover { opacity: 1; }

        .foot-tag { font-size: 13px; color: var(--muted); line-height: 1.6; }
        .foot-col-title {
          font-size: 11px; letter-spacing: 2px; color: var(--muted);
          text-transform: uppercase; margin-bottom: 16px;
        }
        .foot-links a {
          display: block; color: var(--muted); font-size: 13px;
          text-decoration: none; margin-bottom: 9px; transition: color .2s;
        }
        .foot-links a:hover { color: var(--white); }
        .foot-blog-link { color: rgba(200,164,74,0.5) !important; }
        .foot-blog-link:hover { color: var(--gold) !important; }
        .foot-btm {
          max-width: 1280px; margin: 20px auto 0;
          display: flex; justify-content: space-between; flex-wrap: wrap;
          gap: 8px; font-size: 10px; color: rgba(255,255,255,0.18); letter-spacing: 1px;
        }

        @media (max-width: 960px) {
          .footer-wrap { padding: 48px 28px 28px; }
          .foot-brand-col { max-width: 100%; }
        }
      `}</style>
    </>
  )
}
