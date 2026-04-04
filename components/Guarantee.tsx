export default function Guarantee() {
  return (
    <>
      <div className="guarantee-wrap">
        <div className="guarantee-inner">
          <div className="guarantee-badge">7</div>
          <div className="guarantee-content">
            <p className="lbl">✦ Garantia incondicional</p>
            <h2 className="ttl" style={{ fontSize: 'clamp(36px,4vw,58px)' }}>
              7 dias ou seu<br /><span className="ac">dinheiro de volta</span>
            </h2>
            <p className="guarantee-text">
              Compramos com total segurança. Se por qualquer motivo você não ficar satisfeito com o New Pack Church Design nos primeiros 7 dias após a compra, devolvemos <strong>100% do valor pago</strong> — sem perguntas, sem burocracia.
            </p>
            <p className="guarantee-text">
              Basta entrar em contato pelo WhatsApp ou e-mail e o reembolso é processado em até 5 dias úteis.
            </p>
            <a href="#planos" className="guarantee-cta">Quero garantir meu acesso</a>
            <div className="guarantee-seals">
              <span className="guarantee-seal">🔒 Kiwify</span>
              <span className="guarantee-seal">💳 Cartão</span>
              <span className="guarantee-seal">⚡ Pix</span>
              <span className="guarantee-seal">📄 Boleto</span>
            </div>
            <p className="guarantee-kiwify">Processado com segurança pela Kiwify</p>
          </div>
        </div>
      </div>

      <style>{`
        .guarantee-wrap {
          background: linear-gradient(135deg, var(--dark2), rgba(200,164,74,0.04));
          border-top: 1px solid rgba(200,164,74,0.15);
          border-bottom: 1px solid rgba(200,164,74,0.15);
        }
        .guarantee-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 96px 56px;
          display: flex; align-items: center; gap: 72px;
        }
        .guarantee-badge {
          font-family: var(--font-bebas);
          font-size: 140px; line-height: 1;
          color: transparent;
          -webkit-text-stroke: 2px var(--gold);
          opacity: 0.4;
          flex-shrink: 0;
          user-select: none;
        }
        .guarantee-content { max-width: 580px; }
        .guarantee-text {
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .guarantee-text strong { color: var(--white); }
        .guarantee-cta {
          display: inline-block;
          margin-top: 32px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 16px 38px; border-radius: 2px; text-decoration: none;
          transition: all .3s;
          box-shadow: 0 0 40px rgba(200,164,74,0.2);
        }
        .guarantee-cta:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(200,164,74,0.4); }
        .guarantee-seals { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
        .guarantee-seal {
          font-size: 11px; color: var(--muted);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 5px 12px; border-radius: 2px;
          background: rgba(255,255,255,0.03);
        }
        .guarantee-kiwify { font-size: 10px; color: rgba(255,255,255,0.2); margin-top: 10px; letter-spacing: .5px; }
        @media (max-width: 960px) {
          .guarantee-inner { flex-direction: row; align-items: flex-start; gap: 32px; padding: 72px 32px; }
          .guarantee-badge { font-size: 100px; }
        }
        @media (max-width: 640px) {
          .guarantee-inner { flex-direction: column; gap: 8px; padding: 64px 20px; }
          .guarantee-badge { font-size: 80px; align-self: center; }
          .guarantee-content { max-width: 100%; }
          .guarantee-seals { gap: 8px; }
        }
      `}</style>
    </>
  )
}
