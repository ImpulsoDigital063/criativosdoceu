const stats = [
  { value: 'PSD', label: 'Formato Profissional' },
  { value: '+30', label: 'Categorias de Arte' },
  { value: 'Semanal', label: 'Novos Arquivos' },
  { value: '7 dias', label: 'Garantia Total' },
]

export default function TrustStrip() {
  return (
    <>
      <div className="trust-strip">
        {stats.map((s, i) => (
          <div key={s.label} className="trust-item">
            {i > 0 && <div className="trust-sep" />}
            <span className="trust-value">{s.value}</span>
            <span className="trust-label">{s.label}</span>
          </div>
        ))}
      </div>
      <style>{`
        .trust-strip {
          background: var(--dark2);
          border-top: 1px solid rgba(200,164,74,0.08);
          border-bottom: 1px solid rgba(200,164,74,0.08);
          padding: 22px 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .trust-item {
          display: flex; align-items: center; gap: 20px;
          padding: 0 40px;
        }
        .trust-sep { width: 1px; height: 32px; background: rgba(200,164,74,0.1); }
        .trust-value {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 26px; color: var(--gold); line-height: 1;
          white-space: nowrap;
        }
        .trust-label {
          font-size: 10px; letter-spacing: 2px;
          color: var(--muted); text-transform: uppercase;
        }
        @media (max-width: 960px) {
          .trust-strip { padding: 20px 24px; flex-wrap: wrap; gap: 4px; }
          .trust-item { padding: 8px 20px; }
          .trust-sep { display: none; }
        }
      `}</style>
    </>
  )
}
