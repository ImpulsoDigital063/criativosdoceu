"use client";

import { useEffect, useRef, useState } from "react";
import { browserSupabase, type BriefingRow } from "@/lib/supabase";

const TOTAL_STEPS = 10;

const BLOCOS: Array<{ titulo: string; emoji: string; campos: Array<[string, string]> }> = [
  {
    titulo: "Boas-vindas",
    emoji: "✦",
    campos: [
      ["nome", "Nome"],
      ["whatsapp", "WhatsApp"],
      ["canalDuvidas", "Canal preferido"],
      ["tempoResposta", "Tempo reservado"],
    ],
  },
  {
    titulo: "Identidade + Hero",
    emoji: "🎯",
    campos: [
      ["apresentacao", "Como ser apresentado"],
      ["apresentacaoOutro", "Apresentação · outro"],
      ["fraseMatheus", "Frase-síntese"],
      ["heroEscolha", "Hero escolhido"],
      ["heroOutro", "Hero · outro"],
      ["subtituloEscolha", "Subtítulo"],
      ["subtituloOutro", "Subtítulo · outro"],
      ["ctaEscolha", "CTA"],
      ["ctaOutro", "CTA · outro"],
    ],
  },
  {
    titulo: "Posicionamento estético",
    emoji: "🎨",
    campos: [
      ["posicionamentoEstetico", "Posicionamento"],
      ["posicionamentoOutro", "Posicionamento · outro"],
      ["referenciasMarca", "Referências de marca"],
    ],
  },
  {
    titulo: "Estilos + Categorias",
    emoji: "📐",
    campos: [
      ["estilos", "Estilos confirmados"],
      ["estiloOutro", "Estilo · outro"],
      ["categorias", "Categorias/temas"],
      ["categoriaOutro", "Categoria · outras"],
      ["numCategoriasComunicar", "N° pra comunicar"],
    ],
  },
  {
    titulo: "Portfolio",
    emoji: "🖼",
    campos: [
      ["psdHistoricos", "Histórico das 15 peças"],
      ["galeriaDecisao", "Decisão galeria"],
      ["novasPecas", "Novas peças"],
    ],
  },
  {
    titulo: "Modelo de entrega",
    emoji: "📦",
    campos: [
      ["volumeSemanal", "Volume semanal"],
      ["formatosPorPSD", "Formatos por PSD"],
      ["formatoOutro", "Formato · outro"],
      ["camadasSeparadas", "Camadas separadas"],
      ["organizacaoDrive", "Organização Drive"],
      ["organizacaoOutro", "Organização · outro"],
      ["diaUpload", "Dia de upload"],
      ["diaUploadOutro", "Dia · outro"],
      ["vipStatus", "VIP status"],
      ["vipLink", "VIP link"],
      ["vipConteudo", "VIP conteúdo planejado"],
    ],
  },
  {
    titulo: "Preço",
    emoji: "💰",
    campos: [
      ["precoEscolha", "Estratégia de preço"],
      ["precoOutro", "Preço · outro"],
      ["trialR1", "Trial R$ 1"],
      ["vitalicio", "Plano vitalício paralelo"],
    ],
  },
  {
    titulo: "Prova social + Lançamento",
    emoji: "🚀",
    campos: [
      ["provaSocialDecisao", "Decisão prova social"],
      ["depoimentosCandidatos", "Candidatos a depoimento"],
      ["depoimentosOutros", "Depoimentos · outros"],
      ["videoPrRobson", "Vídeo Pr. Robson"],
      ["videoOutro", "Vídeo · outro"],
      ["igrejasConheco", "Igrejas conhece"],
      ["igrejasTrabalho", "Igrejas trabalha/trabalhou"],
      ["igrejasContato", "Igrejas com contato"],
      ["igrejasOutras", "Outras igrejas"],
      ["capitalFe", "Capital da Fé"],
      ["capitalFeOutro", "Capital da Fé · outro"],
      ["outrosEventos", "Outros eventos"],
      ["atualizaBehance", "Behance → @matheusreis.co"],
      ["atualizaBehanceOutro", "Behance · outro"],
      ["atualizaBioRessil", "Bio @ressildesign"],
      ["atualizaBioRessilOutro", "Bio Ressil · outro"],
      ["atualizaBioPessoal", "Bio @matheusreis.co"],
      ["atualizaBioPessoalOutro", "Bio pessoal · outro"],
      ["destaquePack", "Destaque Pack"],
    ],
  },
  {
    titulo: "Tamanho da oportunidade",
    emoji: "📊",
    campos: [
      ["reacaoDados", "Reação aos dados"],
    ],
  },
  {
    titulo: "Co-criação",
    emoji: "💎",
    campos: [
      ["sonhoReal", "Sonho real"],
      ["faltando", "O que tá faltando"],
      ["ideiaOriginal", "💎 Ideia ORIGINAL"],
      ["remuneracao", "Modelo de remuneração"],
    ],
  },
];

function formatValue(v: unknown): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "boolean") return v ? "Sim" : "Não";
  if (typeof v === "number") return v === 0 ? "—" : v.toLocaleString("pt-BR");
  if (Array.isArray(v)) {
    if (v.length === 0) return "—";
    return v.join(" · ");
  }
  return String(v);
}

export default function BriefingViewer({
  slug,
  initial,
}: {
  slug: string;
  initial: BriefingRow | null;
}) {
  const [briefing, setBriefing] = useState<BriefingRow | null>(initial);
  const [pulse, setPulse] = useState(false);
  const pulseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sb = browserSupabase();
    const channel = sb
      .channel(`briefing-${slug}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "briefings",
          filter: `slug=eq.${slug}`,
        },
        (payload) => {
          if (payload.new && typeof payload.new === "object") {
            setBriefing(payload.new as BriefingRow);
            setPulse(true);
            if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
            pulseTimeout.current = setTimeout(() => setPulse(false), 1500);
          }
        }
      )
      .subscribe();
    return () => {
      sb.removeChannel(channel);
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    };
  }, [slug]);

  if (!briefing) {
    return (
      <div className="bv-empty">
        <p className="bv-empty-title">Briefing &quot;{slug}&quot; ainda não iniciado</p>
        <p className="bv-empty-sub">Quando o cliente abrir o link e responder a primeira pergunta, ele aparece aqui em tempo real.</p>
        <style>{`
          .bv-empty { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 48px 32px; text-align: center; color: var(--white); }
          .bv-empty-title { font-family: var(--font-bebas), sans-serif; font-size: 22px; letter-spacing: 1px; margin-bottom: 8px; }
          .bv-empty-sub { font-size: 13px; color: rgba(255,255,255,0.4); }
        `}</style>
      </div>
    );
  }

  const data = (briefing.data ?? {}) as Record<string, unknown>;
  const progressPct = Math.min(100, Math.round(((briefing.progress + 1) / TOTAL_STEPS) * 100));
  const updated = new Date(briefing.updated_at).toLocaleString("pt-BR");

  return (
    <div className="bv-wrap">
      <header className="bv-head">
        <div className="bv-head-top">
          <div>
            <p className="bv-slug">{briefing.slug}</p>
            <h1 className="bv-name">{briefing.name || "Cliente sem nome"}</h1>
          </div>
          <div className="bv-tags">
            {pulse && <span className="bv-pulse">⚡ atualizado agora</span>}
            <span className={`bv-status ${briefing.status === "completed" ? "bv-status-done" : "bv-status-draft"}`}>
              {briefing.status === "completed" ? "✦ enviado" : "📝 rascunho"}
            </span>
          </div>
        </div>
        <div className="bv-prog-meta">
          <span>Bloco {briefing.progress + 1} de {TOTAL_STEPS}</span>
          <span>Atualizado {updated}</span>
        </div>
        <div className="bv-bar">
          <div className="bv-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </header>

      {BLOCOS.map((bloco, idx) => {
        const filled = bloco.campos.filter(([key]) => {
          const v = data[key];
          return v !== undefined && v !== null && v !== "" && v !== 0 && !(Array.isArray(v) && v.length === 0);
        }).length;
        const hasAny = filled > 0;

        return (
          <section key={bloco.titulo} className="bv-section" style={{ opacity: hasAny ? 1 : 0.4 }}>
            <header className="bv-sec-head">
              <h2 className="bv-sec-title">
                {bloco.emoji} Bloco {idx} · {bloco.titulo}
              </h2>
              <span className="bv-sec-counter">{filled}/{bloco.campos.length}</span>
            </header>
            <dl className="bv-grid">
              {bloco.campos.map(([key, label]) => (
                <div key={key} className="bv-field">
                  <dt className="bv-field-label">{label}</dt>
                  <dd className="bv-field-value">{formatValue(data[key])}</dd>
                </div>
              ))}
            </dl>
          </section>
        );
      })}

      <p className="bv-foot">
        ✦ Esse painel atualiza em tempo real via Supabase Realtime. Quando o Matheus clicar &quot;Salvar progresso&quot; ou &quot;Salvar e próximo&quot;, você vê aqui em segundos.
      </p>

      <style>{`
        .bv-wrap { display: flex; flex-direction: column; gap: 16px; }

        .bv-head {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,164,74,0.15);
          border-radius: 12px;
          padding: 24px 28px;
        }
        .bv-head-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; margin-bottom: 18px; }
        .bv-slug {
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 4px;
        }
        .bv-name {
          font-family: var(--font-bebas), sans-serif;
          font-size: 28px; letter-spacing: 1.5px;
          color: var(--white); line-height: 1;
        }
        .bv-tags { display: flex; align-items: center; gap: 10px; }
        .bv-pulse {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          background: rgba(200,164,74,0.15); color: var(--gold);
          padding: 5px 10px; border-radius: 4px;
          animation: bvPulse 1s ease-in-out infinite;
        }
        @keyframes bvPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .bv-status {
          font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          padding: 5px 10px; border-radius: 4px;
        }
        .bv-status-done { background: rgba(200,164,74,0.15); color: var(--gold); }
        .bv-status-draft { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); }
        .bv-prog-meta { display: flex; justify-content: space-between; font-size: 11px; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        .bv-bar { height: 3px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; }
        .bv-bar-fill {
          height: 100%; background: linear-gradient(90deg, var(--gold), var(--gold2));
          transition: width .7s cubic-bezier(.4,0,.2,1);
        }

        .bv-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 22px 26px;
        }
        .bv-sec-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .bv-sec-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: 18px; letter-spacing: 1.5px; color: var(--white);
        }
        .bv-sec-counter { font-size: 11px; color: rgba(255,255,255,0.4); font-family: monospace; }
        .bv-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px 24px;
        }
        .bv-field {
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .bv-field-label {
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 4px;
        }
        .bv-field-value {
          font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.55;
          word-break: break-word;
        }
        @media (max-width: 640px) {
          .bv-grid { grid-template-columns: 1fr; }
          .bv-section { padding: 18px 20px; }
          .bv-head { padding: 20px 22px; }
        }

        .bv-foot {
          text-align: center;
          font-size: 11px; letter-spacing: 1px;
          color: rgba(255,255,255,0.3);
          padding: 20px 0 0;
        }
      `}</style>
    </div>
  );
}
