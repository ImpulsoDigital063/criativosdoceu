'use client'

import { useState } from 'react'

const faqs = [
  { q: 'Os arquivos funcionam em qual versão do Photoshop?', a: 'Os PSDs são compatíveis com Photoshop CS6 e superiores. Recomendamos Adobe Photoshop CC para aproveitar todos os recursos de camadas, LUTs e filtros.' },
  { q: 'Preciso de experiência em design para usar?', a: 'Conhecimento básico de Photoshop é recomendado — saber navegar em camadas, substituir texto e trocar fotos é suficiente.' },
  { q: 'Como recebo os arquivos após a compra?', a: 'Após o pagamento você recebe acesso imediato à plataforma Kiwify com todos os PSDs organizados por categoria.' },
  { q: 'Com que frequência saem novos packs?', a: 'Novos PSDs são adicionados toda semana. Os assinantes recebem notificação no grupo VIP do WhatsApp.' },
  { q: 'Posso usar as artes para oferecer serviços de design?', a: 'Os packs são licenciados para uso pessoal ou institucional. Para uso comercial, entre em contato para consultar planos profissionais.' },
  { q: 'Tem garantia de reembolso?', a: 'Sim, 7 dias de garantia total. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do valor pago.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <div id="faq">
        <div className="sec-faq">
          <p className="lbl">✦ Dúvidas Frequentes</p>
          <h2 className="ttl">Perguntas <span className="ac">respondidas</span></h2>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`fq ${open === i ? 'open' : ''}`}>
                <div className="fq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="fq-arr">▾</span>
                </div>
                <div className="fq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sec-faq { padding: 96px 56px; max-width: 1280px; margin: 0 auto; }
        .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 2px; }
        .fq { background: var(--dark2); border: 1px solid transparent; transition: .25s; }
        .fq.open { border-color: rgba(200,164,74,0.18); }
        .fq-q {
          padding: 19px 24px; font-size: 14px; font-weight: 500;
          color: var(--white); cursor: pointer;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          user-select: none;
        }
        .fq-q:hover { color: var(--gold2); }
        .fq-arr { color: var(--gold); font-size: 18px; transition: transform .3s; flex-shrink: 0; }
        .fq.open .fq-arr { transform: rotate(180deg); }
        .fq-a {
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s;
          font-size: 14px; color: rgba(255,255,255,0.48); line-height: 1.85;
          padding: 0 24px;
        }
        .fq.open .fq-a { max-height: 200px; padding: 0 24px 20px; }
        @media (max-width: 960px) {
          .sec-faq { padding: 80px 28px; }
        }
      `}</style>
    </>
  )
}
