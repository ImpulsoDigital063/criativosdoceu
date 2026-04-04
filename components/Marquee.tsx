const items = [
  'NEW PACK CHURCH DESIGN', '✦', 'RESSIL DESIGN', '✦',
  'PSDs PROFISSIONAIS', '✦', 'PHOTOSHOP', '✦',
  'DESIGN AUTORAL', '✦', 'TEXTURAS · LUTS · ÍCONES', '✦',
  'IGREJAS', '✦', 'NOVO TODA SEMANA', '✦',
]
const repeated = [...items, ...items]

export default function Marquee() {
  return (
    <>
      <div className="marquee-bar">
        <div className="marquee-inner">
          {repeated.map((item, i) => (
            <span key={i} className={item === '✦' ? 'mq-dot' : 'mq-item'}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-bar {
          background: var(--gold);
          padding: 13px 0;
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid rgba(232,201,106,0.3);
        }
        .marquee-inner {
          display: inline-flex;
          align-items: center;
          animation: marquee 28s linear infinite;
        }
        .mq-item {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 4px;
          color: var(--black);
          padding: 0 20px;
        }
        .mq-dot {
          font-size: 10px;
          color: rgba(0,0,0,0.35);
          padding: 0 4px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}
