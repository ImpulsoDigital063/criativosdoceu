import Image from 'next/image'

export default function Portfolio() {
  return (
    <>
      <div className="port-bg" id="portfolio">
        <div className="port-inner">
          <p className="lbl">✦ Portfólio</p>
          <h2 className="ttl">Design que fala<br /><span className="ac">por si mesmo</span></h2>
          <p className="body-text">Cada arte criada com Photoshop, texturas, LUTs e os mesmos recursos do New Pack Church Design.</p>
        </div>

        {/* Editorial grid — inspired by Matheus's own layout style */}
        <div className="port-editorial">

          {/* Row 1 — slides in from left */}
          <div className="port-row port-row-1" data-reveal="left">
            <div className="pi pi-large">
              <Image src="/portfolio-01.png" alt="A Porta" fill className="pi-img" />
              <div className="pi-ov" />
            </div>
            <div className="port-col">
              <div className="pi pi-medium">
                <Image src="/portfolio-06.png" alt="Recomeços com Propósito" fill className="pi-img" />
                <div className="pi-ov" />
              </div>
              <div className="pi pi-medium">
                <Image src="/portfolio-08.png" alt="Curso de Noivos" fill className="pi-img" />
                <div className="pi-ov" />
              </div>
            </div>
          </div>

          {/* Row 2 — slides in from bottom */}
          <div className="port-row port-row-2" data-reveal="bottom" data-delay="100">
            {['/portfolio-02.png', '/portfolio-04.png', '/portfolio-09.png', '/portfolio-07.png'].map((src, i) => (
              <div key={i} className="pi pi-equal">
                <Image src={src} alt={`Projeto ${i}`} fill className="pi-img" />
                <div className="pi-ov" />
              </div>
            ))}
          </div>

          {/* Row 3 — slides in from right */}
          <div className="port-row port-row-3" data-reveal="right" data-delay="100">
            <div className="port-col">
              <div className="pi pi-medium">
                <Image src="/portfolio-05.png" alt="XTRM" fill className="pi-img" />
                <div className="pi-ov" />
              </div>
              <div className="pi pi-medium">
                <Image src="/portfolio-11.png" alt="Teen" fill className="pi-img" />
                <div className="pi-ov" />
              </div>
            </div>
            <div className="pi pi-large">
              <Image src="/portfolio-10.png" alt="E Depois da Luta" fill className="pi-img" />
              <div className="pi-ov" />
            </div>
          </div>

          {/* Row 4 — slides in from bottom */}
          <div className="port-row port-row-4" data-reveal="bottom" data-delay="150">
            {['/portfolio-03.png', '/portfolio-12.png', '/portfolio-15.png'].map((src, i) => (
              <div key={i} className="pi pi-wide">
                <Image src={src} alt={`Projeto ${i}`} fill className="pi-img" />
                <div className="pi-ov" />
              </div>
            ))}
          </div>

        </div>

        <div className="port-cta-wrap">
          <a href="#planos" className="port-cta">Ver tudo no pack — Garantir Acesso</a>
        </div>
      </div>

      <style>{`
        .port-bg { background: var(--dark); }
        .port-inner { max-width: 1280px; margin: 0 auto; padding: 96px 56px 52px; }

        .port-editorial {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 4px 4px;
        }

        .port-row {
          display: flex;
          gap: 4px;
          width: 100%;
        }

        /* Row 1 & 3: large + stacked col */
        .port-row-1, .port-row-3 { height: 620px; }
        .pi-large { flex: 1.4; }
        .port-col { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .pi-medium { flex: 1; }

        /* Row 2: 4 equal */
        .port-row-2 { height: 400px; }
        .pi-equal { flex: 1; }

        /* Row 4: 3 wide */
        .port-row-4 { height: 480px; }
        .pi-wide { flex: 1; }

        /* Base card */
        .pi {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .pi-img {
          object-fit: cover;
          transition: transform .6s cubic-bezier(.25,.46,.45,.94), filter .4s;
          filter: brightness(0.88) saturate(1.1);
        }
        .pi-ov {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,.55) 0%, transparent 50%);
          opacity: 0; transition: opacity .4s;
        }
        .pi:hover .pi-img {
          transform: scale(1.05);
          filter: brightness(1) saturate(1.15);
        }
        .pi:hover .pi-ov { opacity: 1; }

        .port-cta-wrap {
          display: flex;
          justify-content: center;
          padding: 52px 56px 96px;
        }
        .port-cta {
          border: 1px solid rgba(200,164,74,0.4);
          color: var(--gold);
          font-size: 12px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 14px 40px; border-radius: 2px;
          text-decoration: none; transition: all .3s;
        }
        .port-cta:hover {
          background: var(--gold);
          color: var(--black);
        }

        @media (max-width: 960px) {
          .port-inner { padding: 80px 28px 40px; }
          .port-row-1, .port-row-3 { height: auto; flex-direction: column; }
          .port-row-2 { height: auto; flex-wrap: wrap; }
          .port-row-4 { height: auto; flex-direction: column; }
          .pi-large { min-height: 400px; }
          .pi-medium { min-height: 220px; }
          .pi-equal { min-height: 260px; flex-basis: calc(50% - 2px); }
          .pi-wide { min-height: 320px; }
          .port-col { flex-direction: row; }
          .port-cta-wrap { padding: 40px 28px 80px; }
        }
        @media (max-width: 560px) {
          .port-col { flex-direction: column; }
          .pi-equal { flex-basis: 100%; }
        }
      `}</style>
    </>
  )
}
