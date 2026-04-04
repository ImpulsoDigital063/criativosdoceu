import Image from 'next/image'
import Link from 'next/link'

export default function WhoBehind() {
  return (
    <>
      <section className="sobre-section">

        {/* Full bleed photo — left half */}
        <div className="sobre-photo">
          <Image
            src="/matheus-foto.jpg"
            alt="Matheus Ressil"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className="sobre-photo-fade" />
          {/* Badge over photo */}
          <div className="sobre-photo-badge">Ressil Design</div>
        </div>

        {/* Right — text content */}
        <div className="sobre-content">

          {/* Giant name bleeds into photo */}
          <div className="sobre-bg-name">MATHEUS</div>

          <p className="lbl">Quem está por trás</p>

          <h2 className="sobre-title">
            Matheus<br />
            <em className="sobre-italic">Ressil</em>
          </h2>

          <p className="sobre-text">
            Designer especializado em comunicação para igrejas, com anos de experiência criando artes que vão muito além do template — cada projeto é uma composição visual pensada para comunicar o evangelho com força e identidade própria.
          </p>
          <p className="sobre-text">
            O New Pack Church Design é a forma do Matheus colocar nas mãos de qualquer designer ou secretário de mídia a mesma qualidade que ele entrega para os seus clientes.
          </p>

          {/* Style range tags */}
          <div className="sobre-styles">
            {['Cinematográfico', 'Editorial', 'Gospel', 'Teen', 'Feminino', 'Infantil', '3D', 'Y2K'].map((tag) => (
              <span key={tag} className="sobre-tag">{tag}</span>
            ))}
          </div>

          <div className="sobre-stats">
            {[{ v: 'PSD', l: 'Formato Pro' }, { v: '+30', l: 'Categorias' }, { v: '100%', l: 'Autoral' }, { v: '7d', l: 'Garantia' }].map(({ v, l }) => (
              <div key={l}>
                <div className="ss-v">{v}</div>
                <div className="ss-l">{l}</div>
              </div>
            ))}
          </div>

          {/* Ressil Design — logo + estúdio + links */}
          <div className="sobre-studio">
            <div className="sobre-studio-top">
              <div className="sobre-studio-info">
                <p className="sobre-studio-label">Estúdio por trás do pack</p>
                <a
                  href="https://www.instagram.com/ressildesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sobre-studio-logo-link"
                >
                  <Image
                    src="/logo.png"
                    alt="Ressil Design"
                    width={120}
                    height={40}
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  />
                </a>
                <p className="sobre-studio-tagline">"Toda marca tem uma história.<br />Vamos transformá-la em conteúdo."</p>
                <div className="sobre-studio-services">
                  {['Reels', 'Design', 'Social Media', 'Logos'].map((s) => (
                    <span key={s} className="sobre-svc-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sobre-studio-links">
              <a
                href="https://www.instagram.com/ressildesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-ig-btn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @ressildesign
              </a>
              <a
                href="https://www.instagram.com/matheusreis.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-ig-btn sobre-ig-ghost"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @matheusreis.co
              </a>
              <a
                href="https://www.behance.net/mtwproducoes"
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-ig-btn sobre-ig-ghost"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.836 1.348 1.71 1.348.954 0 1.315-.537 1.488-1.318h4.558zm-5.101-4.512c-.052-.543-.286-1.348-1.548-1.348-1.239 0-1.61.805-1.664 1.348h3.212zm-11.43 5.512H1V5h6.682c3.415 0 5.018 1.553 5.018 3.949 0 1.345-.602 2.267-1.719 2.818 1.479.516 2.299 1.586 2.299 3.284C13.28 18.513 11.073 18 7.195 18zM4.8 8.605v2.265h2.299c.96 0 1.622-.42 1.622-1.132 0-.71-.662-1.133-1.622-1.133H4.8zm0 5.39v2.405h2.558c1.023 0 1.741-.45 1.741-1.202 0-.752-.718-1.203-1.741-1.203H4.8z"/></svg>
                Behance
              </a>
            </div>
          </div>

        </div>

      </section>

      <style>{`
        .sobre-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--dark);
          position: relative;
          overflow: hidden;
        }

        /* Photo */
        .sobre-photo {
          position: relative;
          min-height: 100vh;
        }
        .sobre-photo-fade {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 50%, var(--dark) 100%);
          z-index: 2;
        }
        .sobre-photo-badge {
          position: absolute; bottom: 48px; left: 32px; z-index: 3;
          background: var(--gold); color: var(--black);
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 4px; text-transform: uppercase;
          padding: 10px 20px; border-radius: 2px;
        }

        /* Content */
        .sobre-content {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 80px 100px 60px;
          overflow: hidden;
        }
        .sobre-bg-name {
          position: absolute;
          top: 50%; left: -80px;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(80px, 10vw, 140px);
          color: rgba(200,164,74,0.04);
          letter-spacing: 8px;
          pointer-events: none;
          white-space: nowrap;
        }
        .sobre-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 96px);
          line-height: 0.88;
          color: var(--white);
          margin-bottom: 28px;
          position: relative; z-index: 1;
        }
        .sobre-italic {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          color: var(--gold);
        }
        .sobre-text {
          font-size: 14px; line-height: 1.9;
          color: rgba(255,255,255,0.48);
          margin-bottom: 16px;
          position: relative; z-index: 1;
          max-width: 480px;
        }

        .sobre-styles {
          display: flex; gap: 6px; flex-wrap: wrap;
          margin: 24px 0; position: relative; z-index: 1;
        }
        .sobre-tag {
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--gold); border: 1px solid rgba(200,164,74,0.2);
          padding: 4px 10px; border-radius: 2px;
          background: rgba(200,164,74,0.04);
        }

        .sobre-stats {
          display: flex; gap: 36px; flex-wrap: wrap;
          margin-top: 32px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative; z-index: 1;
        }
        .ss-v {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 44px; color: var(--gold); line-height: 1;
        }
        .ss-l { font-size: 9px; letter-spacing: 2px; color: var(--muted); text-transform: uppercase; margin-top: 4px; }

        /* ── Ressil Design studio block ── */
        .sobre-studio {
          margin-top: 36px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative; z-index: 1;
        }
        .sobre-studio-top { margin-bottom: 20px; }
        .sobre-studio-label {
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 10px;
        }
        .sobre-studio-logo-link {
          display: inline-flex; align-items: center;
          opacity: 0.75; transition: opacity .2s;
          margin-bottom: 12px;
        }
        .sobre-studio-logo-link:hover { opacity: 1; }
        .sobre-studio-tagline {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          font-size: 13px; line-height: 1.7;
          color: rgba(200,164,74,0.55);
          margin-bottom: 14px;
        }
        .sobre-studio-services {
          display: flex; gap: 6px; flex-wrap: wrap;
        }
        .sobre-svc-tag {
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 3px 8px; border-radius: 2px;
        }
        .sobre-studio-links {
          display: flex; gap: 12px; flex-wrap: wrap;
        }
        .sobre-ig-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-decoration: none; text-transform: uppercase;
          color: var(--black);
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          padding: 10px 18px; border-radius: 2px;
          transition: opacity .2s;
        }
        .sobre-ig-btn:hover { opacity: .85; }
        .sobre-ig-ghost {
          background: transparent;
          color: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .sobre-ig-ghost:hover { color: var(--white); border-color: rgba(255,255,255,0.3); }

        @media (max-width: 960px) {
          .sobre-section { grid-template-columns: 1fr; }
          .sobre-photo { min-height: 60vw; max-height: 80vw; overflow: hidden; }
          .sobre-photo-fade { background: linear-gradient(0deg, var(--dark) 0%, transparent 55%); }
          .sobre-content { padding: 48px 32px 72px; }
          .sobre-bg-name { display: none; }
          .sobre-photo-badge { bottom: 28px; left: 24px; font-size: 11px; }
        }
        @media (max-width: 560px) {
          .sobre-photo { min-height: 72vw; }
          .sobre-content { padding: 36px 20px 64px; }
          .sobre-styles { gap: 4px; }
          .sobre-stats { gap: 24px; }
        }
      `}</style>
    </>
  )
}
