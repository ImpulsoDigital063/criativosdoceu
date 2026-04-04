const verses = [
  { text: 'Salmos 23:1',         ref: 'O Senhor é o meu pastor',                    top: '8%',  left: '3%',   rotate: '-4deg',  size: '13px', delay: '0s',   dur: '40s' },
  { text: 'João 3:16',           ref: 'Porque Deus amou o mundo',                   top: '18%', left: '68%',  rotate: '3deg',   size: '11px', delay: '-8s',  dur: '48s' },
  { text: 'Filipenses 4:13',     ref: 'Tudo posso naquele que me fortalece',        top: '34%', left: '1%',   rotate: '-2deg',  size: '12px', delay: '-14s', dur: '44s' },
  { text: 'Josué 1:9',           ref: 'Sede fortes e corajosos',                    top: '50%', left: '55%',  rotate: '5deg',   size: '10px', delay: '-4s',  dur: '52s' },
  { text: 'Jeremias 29:11',      ref: 'Porque eu sei os planos que tenho para vós', top: '63%', left: '8%',   rotate: '-6deg',  size: '11px', delay: '-20s', dur: '46s' },
  { text: 'Filipenses 4:7',      ref: 'A paz de Deus que excede todo entendimento', top: '76%', left: '62%',  rotate: '2deg',   size: '10px', delay: '-10s', dur: '50s' },
  { text: 'Mateus 6:33',         ref: 'Buscai primeiro o reino de Deus',            top: '88%', left: '20%',  rotate: '-3deg',  size: '12px', delay: '-6s',  dur: '42s' },
  { text: 'Provérbios 3:5',      ref: 'Confie no Senhor de todo o seu coração',     top: '42%', left: '78%',  rotate: '4deg',   size: '11px', delay: '-18s', dur: '38s' },
  { text: 'João 14:6',           ref: 'Eu sou o caminho, a verdade e a vida',       top: '25%', left: '35%',  rotate: '-1deg',  size: '10px', delay: '-24s', dur: '56s' },
  { text: 'Salmos 46:1',         ref: 'Deus é o nosso refúgio e força',             top: '72%', left: '38%',  rotate: '6deg',   size: '11px', delay: '-12s', dur: '44s' },
]

export default function BackgroundFX() {
  return (
    <>
      <div className="bfx" aria-hidden="true">

        {/* Orbes de gradiente — se movem lentamente */}
        <div className="bfx-orb bfx-o1" />
        <div className="bfx-orb bfx-o2" />
        <div className="bfx-orb bfx-o3" />
        <div className="bfx-orb bfx-o4" />

        {/* Passagens bíblicas — texto subliminar */}
        {verses.map((v) => (
          <div
            key={v.ref}
            className="bfx-verse"
            style={{
              top: v.top,
              left: v.left,
              transform: `rotate(${v.rotate})`,
              fontSize: v.size,
              animationDuration: v.dur,
              animationDelay: v.delay,
            }}
          >
            <span className="bfx-verse-ref">{v.text}</span>
            <span className="bfx-verse-text">{v.ref}</span>
          </div>
        ))}

        {/* Partículas — 24 pontos flutuantes */}
        <div className="bfx-dot d1" /><div className="bfx-dot d2" />
        <div className="bfx-dot d3" /><div className="bfx-dot d4" />
        <div className="bfx-dot d5" /><div className="bfx-dot d6" />
        <div className="bfx-dot d7" /><div className="bfx-dot d8" />
        <div className="bfx-dot d9" /><div className="bfx-dot d10" />
        <div className="bfx-dot d11" /><div className="bfx-dot d12" />
        <div className="bfx-dot d13" /><div className="bfx-dot d14" />
        <div className="bfx-dot d15" /><div className="bfx-dot d16" />
        <div className="bfx-dot d17" /><div className="bfx-dot d18" />
        <div className="bfx-dot d19" /><div className="bfx-dot d20" />
        <div className="bfx-dot d21" /><div className="bfx-dot d22" />
        <div className="bfx-dot d23" /><div className="bfx-dot d24" />

      </div>

      <style>{`
        /* ── Camada fixa atrás de tudo ── */
        .bfx {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* ══════════════════════════════
           ORBES — gradientes em deriva
        ══════════════════════════════ */
        .bfx-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        /* Orbe 1 — dourado, lado esquerdo, deriva lenta */
        .bfx-o1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(200,164,74,0.07) 0%, transparent 70%);
          top: 10%; left: -15%;
          animation: orbDrift1 28s ease-in-out infinite;
        }
        /* Orbe 2 — dourado suave, lado direito alto */
        .bfx-o2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(232,201,106,0.05) 0%, transparent 70%);
          top: 30%; right: -10%;
          animation: orbDrift2 34s ease-in-out infinite;
        }
        /* Orbe 3 — crimson, parte baixa esquerda */
        .bfx-o3 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(192,57,43,0.04) 0%, transparent 70%);
          bottom: 5%; left: 10%;
          animation: orbDrift3 40s ease-in-out infinite;
        }
        /* Orbe 4 — azul elétrico, direita baixa */
        .bfx-o4 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%);
          bottom: 20%; right: 5%;
          animation: orbDrift4 32s ease-in-out infinite;
        }

        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(80px, 120px) scale(1.1); }
          66%       { transform: translate(-40px, 60px) scale(0.95); }
        }
        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%       { transform: translate(-100px, 80px) scale(1.08); }
          70%       { transform: translate(50px, -60px) scale(0.92); }
        }
        @keyframes orbDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30%       { transform: translate(60px, -80px) scale(1.05); }
          60%       { transform: translate(-80px, 40px) scale(0.97); }
        }
        @keyframes orbDrift4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          45%       { transform: translate(-70px, -100px) scale(1.12); }
          75%       { transform: translate(40px, 50px) scale(0.9); }
        }

        /* ══════════════════════════════
           PASSAGENS BÍBLICAS
        ══════════════════════════════ */
        .bfx-verse {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: verseFade ease-in-out infinite;
          white-space: nowrap;
        }
        .bfx-verse-ref {
          font-family: var(--font-bebas), 'Bebas Neue', sans-serif;
          font-size: 0.75em;
          letter-spacing: 3px;
          color: rgba(200,164,74,0.08);
          line-height: 1;
        }
        .bfx-verse-text {
          font-family: var(--font-playfair), 'Playfair Display', serif;
          font-style: italic;
          color: rgba(255,255,255,0.04);
          line-height: 1.3;
        }

        @keyframes verseFade {
          0%   { opacity: 0; transform: translateY(0px) rotate(var(--r, 0deg)); }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(-18px) rotate(var(--r, 0deg)); }
        }

        /* ══════════════════════════════
           PARTÍCULAS — sobem lentamente
        ══════════════════════════════ */
        .bfx-dot {
          position: absolute;
          border-radius: 50%;
          background: rgba(200,164,74,0.6);
          animation: particleRise linear infinite;
        }

        @keyframes particleRise {
          0%   { transform: translateY(0) translateX(0);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }

        /* Posições e tamanhos de cada partícula */
        .d1  { width:1.5px; height:1.5px; left:5%;   bottom:0%;  animation-duration:18s; animation-delay:-2s;  }
        .d2  { width:1px;   height:1px;   left:12%;  bottom:10%; animation-duration:22s; animation-delay:-7s;  }
        .d3  { width:2px;   height:2px;   left:18%;  bottom:5%;  animation-duration:16s; animation-delay:-4s;  box-shadow:0 0 4px rgba(200,164,74,0.8); }
        .d4  { width:1px;   height:1px;   left:26%;  bottom:20%; animation-duration:24s; animation-delay:-11s; }
        .d5  { width:1.5px; height:1.5px; left:33%;  bottom:0%;  animation-duration:19s; animation-delay:-1s;  }
        .d6  { width:1px;   height:1px;   left:41%;  bottom:15%; animation-duration:21s; animation-delay:-9s;  }
        .d7  { width:2px;   height:2px;   left:48%;  bottom:5%;  animation-duration:17s; animation-delay:-5s;  box-shadow:0 0 4px rgba(200,164,74,0.8); }
        .d8  { width:1px;   height:1px;   left:55%;  bottom:25%; animation-duration:26s; animation-delay:-13s; }
        .d9  { width:1.5px; height:1.5px; left:62%;  bottom:0%;  animation-duration:20s; animation-delay:-3s;  }
        .d10 { width:1px;   height:1px;   left:69%;  bottom:10%; animation-duration:23s; animation-delay:-8s;  }
        .d11 { width:2px;   height:2px;   left:75%;  bottom:5%;  animation-duration:15s; animation-delay:-6s;  box-shadow:0 0 4px rgba(200,164,74,0.8); }
        .d12 { width:1px;   height:1px;   left:82%;  bottom:20%; animation-duration:28s; animation-delay:-14s; }
        .d13 { width:1.5px; height:1.5px; left:89%;  bottom:0%;  animation-duration:18s; animation-delay:-10s; }
        .d14 { width:1px;   height:1px;   left:94%;  bottom:15%; animation-duration:22s; animation-delay:-2s;  }
        .d15 { width:2px;   height:2px;   left:9%;   bottom:40%; animation-duration:30s; animation-delay:-16s; box-shadow:0 0 4px rgba(200,164,74,0.8); }
        .d16 { width:1px;   height:1px;   left:30%;  bottom:50%; animation-duration:25s; animation-delay:-12s; }
        .d17 { width:1.5px; height:1.5px; left:50%;  bottom:35%; animation-duration:20s; animation-delay:-7s;  }
        .d18 { width:1px;   height:1px;   left:70%;  bottom:45%; animation-duration:27s; animation-delay:-4s;  }
        .d19 { width:2px;   height:2px;   left:88%;  bottom:30%; animation-duration:16s; animation-delay:-9s;  box-shadow:0 0 6px rgba(200,164,74,0.9); }
        .d20 { width:1px;   height:1px;   left:15%;  bottom:60%; animation-duration:32s; animation-delay:-18s; }
        .d21 { width:1.5px; height:1.5px; left:37%;  bottom:70%; animation-duration:22s; animation-delay:-6s;  }
        .d22 { width:1px;   height:1px;   left:58%;  bottom:55%; animation-duration:24s; animation-delay:-11s; }
        .d23 { width:2px;   height:2px;   left:78%;  bottom:65%; animation-duration:19s; animation-delay:-3s;  box-shadow:0 0 4px rgba(200,164,74,0.8); }
        .d24 { width:1px;   height:1px;   left:95%;  bottom:50%; animation-duration:29s; animation-delay:-15s; }

        /* Desativa em telas pequenas para performance */
        @media (max-width: 560px) {
          .bfx-dot:nth-child(n+15) { display: none; }
          .bfx-orb { filter: blur(80px); }
          .bfx-verse { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bfx { display: none; }
        }
      `}</style>
    </>
  )
}
