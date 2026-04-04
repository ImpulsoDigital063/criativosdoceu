'use client'

const plans = [
  {
    name: 'Mensal',
    period: 'Cancele quando quiser',
    price: '37',
    cents: ',90',
    note: 'por mês · acesso via Kiwify',
    featured: false,
    cta: 'Assinar Mensal',
    link: 'https://pay.kiwify.com.br/VJItdsy',
    features: [
      'Acesso a todos os PSDs via Kiwify',
      'Novos arquivos toda semana no Drive',
      'Texturas, LUTs e fundos inclusos',
      'Grupo VIP no WhatsApp',
      'Cancele quando quiser',
      'Garantia de 7 dias',
    ],
  },
  {
    name: 'Anual',
    period: '12 meses · Melhor custo-benefício',
    price: '197',
    cents: ',00',
    note: 'pagamento único · equivale a R$16,41/mês',
    featured: true,
    cta: 'Garantir Acesso Anual',
    link: 'https://pay.kiwify.com.br/JleoMKc',
    features: [
      'Acesso completo a todos os PSDs via Kiwify',
      'Novos arquivos toda semana no Drive',
      'Texturas, LUTs, fundos e ícones',
      'Mockups prontos para edição',
      'Grupo VIP no WhatsApp',
      'Acesso prioritário a novos packs',
      'Garantia de 7 dias',
    ],
  },
]

export default function Plans() {
  return (
    <>
      <section id="planos" className="plans-section">

        <div className="plans-glow-top" />

        <div className="plans-inner">

          {/* Header */}
          <div className="plans-header">
            <p className="plans-lbl">
              <span className="plans-lbl-bar" />
              Planos
            </p>
            <h2 className="plans-title">
              Escolha seu<br />
              <span className="plans-title-gold">acesso</span>
            </h2>
            <p className="plans-sub">
              Tudo isso valeria <strong>R$890+</strong> com um designer. Aqui você paga uma fração.
            </p>
          </div>

          {/* Plan cards */}
          <div className="plans-grid" data-reveal="bottom" data-delay="100">

            {/* Monthly — secondary */}
            <div className="plan-monthly">
              <div className="plan-m-name">{plans[0].name}</div>
              <div className="plan-m-period">{plans[0].period}</div>

              <div className="plan-m-price">
                <span className="plan-m-cur">R$</span>
                <span className="plan-m-val">{plans[0].price}</span>
                <span className="plan-m-cts">{plans[0].cents}</span>
              </div>
              <div className="plan-m-note">{plans[0].note}</div>

              <ul className="plan-m-feats">
                {plans[0].features.map((f) => (
                  <li key={f}>
                    <span className="plan-feat-dot" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={plans[0].link} className="plan-m-cta">
                {plans[0].cta}
              </a>
              <p className="plan-secure">🔒 Pagamento seguro via Kiwify</p>
            </div>

            {/* Annual — featured, full gold treatment */}
            <div className="plan-annual">
              <div className="plan-a-glow" />
              <div className="plan-a-badge">✦ MAIS POPULAR</div>

              <div className="plan-a-top">
                <div>
                  <div className="plan-a-name">{plans[1].name}</div>
                  <div className="plan-a-period">{plans[1].period}</div>
                </div>
                <div className="plan-a-save">
                  <span>ECONOMIZE</span>
                  <span className="plan-a-save-val">57%</span>
                </div>
              </div>

              <div className="plan-a-price">
                <span className="plan-a-cur">R$</span>
                <span className="plan-a-val">{plans[1].price}</span>
                <span className="plan-a-cts">{plans[1].cents}</span>
              </div>
              <div className="plan-a-note">{plans[1].note}</div>

              <div className="plan-a-divider" />

              <ul className="plan-a-feats">
                {plans[1].features.map((f) => (
                  <li key={f}>
                    <span className="plan-a-icon">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={plans[1].link} className="plan-a-cta">
                <span>{plans[1].cta}</span>
                <span className="plan-a-cta-arrow">→</span>
              </a>
              <p className="plan-a-secure">🔒 Pagamento seguro via Kiwify · Pix, Cartão ou Boleto</p>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .plans-section {
          min-height: 100vh;
          background: var(--dark);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .plans-glow-top {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse at 50% 0%, rgba(200,164,74,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .plans-inner {
          max-width: 1400px; margin: 0 auto;
          padding: 120px 80px;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 80px;
          align-items: center;
          position: relative; z-index: 1;
          width: 100%;
        }

        .plans-lbl {
          display: flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); opacity: 0.7;
          margin-bottom: 20px;
        }
        .plans-lbl-bar { width: 24px; height: 1px; background: var(--gold); display: block; }
        .plans-title {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 96px);
          line-height: 0.88;
          color: var(--white);
          margin-bottom: 24px;
        }
        .plans-title-gold { color: var(--gold); }
        .plans-sub {
          font-size: 14px; line-height: 1.8;
          color: rgba(255,255,255,0.35);
        }
        .plans-sub strong { color: var(--white); }

        /* --- Grid --- */
        .plans-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 3px;
          align-items: stretch;
        }

        /* --- Monthly --- */
        .plan-monthly {
          background: var(--dark2);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
        }
        .plan-m-name {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: 3px; color: rgba(255,255,255,0.5);
          margin-bottom: 4px;
        }
        .plan-m-period { font-size: 10px; letter-spacing: 1.5px; color: var(--muted); margin-bottom: 28px; }
        .plan-m-price { display: flex; align-items: flex-start; gap: 2px; line-height: 1; }
        .plan-m-cur {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 22px; color: rgba(200,164,74,0.6); margin-top: 8px;
        }
        .plan-m-val {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 72px; color: rgba(200,164,74,0.7); line-height: 1;
        }
        .plan-m-cts {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 28px; color: rgba(200,164,74,0.7); margin-top: 12px;
        }
        .plan-m-note { font-size: 11px; color: var(--muted); margin: 8px 0 28px; }
        .plan-m-feats { list-style: none; flex: 1; border-top: 1px solid rgba(255,255,255,0.04); }
        .plan-m-feats li {
          padding: 10px 0; font-size: 12px; color: rgba(255,255,255,0.4);
          border-bottom: 1px solid rgba(255,255,255,0.03);
          display: flex; gap: 10px; align-items: center;
        }
        .plan-feat-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: rgba(200,164,74,0.4); flex-shrink: 0;
        }
        .plan-m-cta {
          display: block; text-align: center; padding: 14px;
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          border: 1px solid rgba(200,164,74,0.2); color: rgba(200,164,74,0.6);
          text-decoration: none; border-radius: 2px; margin-top: 24px;
          transition: all .3s;
        }
        .plan-m-cta:hover { border-color: rgba(200,164,74,0.4); color: var(--gold); background: rgba(200,164,74,0.04); }

        /* --- Annual --- */
        .plan-annual {
          background: linear-gradient(145deg, #171106, #0d0900);
          border: 1px solid rgba(200,164,74,0.3);
          padding: 52px 44px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow:
            0 0 80px rgba(200,164,74,0.08),
            inset 0 1px 0 rgba(200,164,74,0.15);
        }
        .plan-a-glow {
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 400px; height: 200px;
          background: radial-gradient(ellipse at 50% 0%, rgba(200,164,74,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .plan-a-badge {
          position: absolute; top: -1px; right: 44px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black);
          font-size: 9px; font-weight: 700; letter-spacing: 3px;
          padding: 5px 20px;
          border-radius: 0 0 4px 4px;
        }
        .plan-a-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 32px; position: relative;
        }
        .plan-a-name {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 36px; letter-spacing: 3px; color: var(--gold);
          margin-bottom: 4px;
        }
        .plan-a-period { font-size: 10px; letter-spacing: 1.5px; color: rgba(200,164,74,0.5); }
        .plan-a-save {
          display: flex; flex-direction: column; align-items: flex-end;
          border: 1px solid rgba(200,164,74,0.2); padding: 10px 16px;
          border-radius: 2px; background: rgba(200,164,74,0.05);
        }
        .plan-a-save span:first-child {
          font-size: 7px; letter-spacing: 3px; color: rgba(200,164,74,0.5);
        }
        .plan-a-save-val {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 36px; color: var(--gold); line-height: 1;
        }

        .plan-a-price {
          display: flex; align-items: flex-start; gap: 4px;
          line-height: 1; position: relative;
        }
        .plan-a-cur {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 32px; color: var(--gold); margin-top: 10px;
        }
        .plan-a-val {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 100px; color: var(--gold); line-height: 1;
          filter: drop-shadow(0 0 30px rgba(200,164,74,0.25));
        }
        .plan-a-cts {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 44px; color: var(--gold); margin-top: 20px;
        }
        .plan-a-note { font-size: 11px; color: rgba(200,164,74,0.4); margin: 10px 0 0; }

        .plan-a-divider {
          height: 1px; margin: 28px 0;
          background: linear-gradient(90deg, rgba(200,164,74,0.2), transparent);
        }

        .plan-a-feats { list-style: none; flex: 1; }
        .plan-a-feats li {
          padding: 10px 0; font-size: 13px; color: rgba(255,255,255,0.6);
          border-bottom: 1px solid rgba(200,164,74,0.06);
          display: flex; gap: 12px; align-items: flex-start; line-height: 1.5;
        }
        .plan-a-icon { color: var(--gold); font-size: 7px; margin-top: 5px; flex-shrink: 0; }

        .plan-a-cta {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700; font-size: 12px;
          letter-spacing: 2.5px; text-transform: uppercase;
          padding: 20px 36px; border-radius: 2px; text-decoration: none;
          margin-top: 32px; position: relative;
          box-shadow: 0 0 60px rgba(200,164,74,0.25);
          transition: all .4s cubic-bezier(.4,0,.2,1);
          overflow: hidden;
        }
        .plan-a-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .plan-a-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 100px rgba(200,164,74,0.4);
        }
        .plan-a-cta:hover::before { opacity: 1; }
        .plan-a-cta-arrow { font-size: 16px; transition: transform .3s; }
        .plan-a-cta:hover .plan-a-cta-arrow { transform: translateX(4px); }

        .plan-secure, .plan-a-secure {
          font-size: 10px; color: var(--muted); text-align: center; margin-top: 14px; letter-spacing: .5px;
        }
        .plan-a-secure { color: rgba(200,164,74,0.3); }

        @media (max-width: 1100px) {
          .plans-inner { grid-template-columns: 1fr; padding: 80px 40px; gap: 48px; }
          .plans-grid { grid-template-columns: 1fr; max-width: 640px; }
        }
        @media (max-width: 640px) {
          .plan-a-top { flex-direction: column; gap: 16px; }
          .plan-a-save { align-self: flex-start; flex-direction: row; align-items: center; gap: 12px; padding: 8px 14px; }
          .plan-a-save span:first-child { margin: 0; }
          .plan-a-save-val { font-size: 28px; }
        }
        @media (max-width: 560px) {
          .plans-inner { padding: 72px 20px; }
          .plan-annual { padding: 36px 24px; }
          .plan-monthly { padding: 36px 24px; }
          .plan-a-val { font-size: 80px; }
          .plan-a-cts { font-size: 36px; margin-top: 14px; }
          .plan-a-cur { font-size: 26px; }
        }
      `}</style>
    </>
  )
}
