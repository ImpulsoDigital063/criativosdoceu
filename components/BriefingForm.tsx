"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  briefingSchema,
  briefingDefaults,
  type BriefingData,
  CANAL_DUVIDAS,
  TEMPO_RESPOSTA,
  APRESENTACAO,
  HERO_OPCOES,
  SUBTITULO_HERO,
  CTA_HERO,
  POSICIONAMENTO_ESTETICO,
  ESTILOS,
  CATEGORIAS,
  VOLUME_SEMANAL,
  FORMATOS_POR_PSD,
  ORGANIZACAO_DRIVE,
  DIA_UPLOAD,
  VIP_STATUS,
  PRECO_OPCOES,
  TRIAL_R1,
  VITALICIO,
  PROVA_SOCIAL_DECISAO,
  DEPOIMENTOS_CANDIDATOS,
  VIDEO_PR_ROBSON,
  IGREJAS_ALVO,
  CAPITAL_FE,
  ATUALIZA_BEHANCE,
  ATUALIZA_BIO_RESSIL,
  ATUALIZA_BIO_PESSOAL,
  DESTAQUE_PACK,
  GALERIA_DECISAO,
} from "@/lib/briefing-schema";

const STORAGE_KEY = "criativosdoceu-briefing-v1";
const BRIEFING_SLUG = "ressil-matheus";
const TOTAL_STEPS = 10;

const BLOCOS = [
  { titulo: "Boas-vindas", subtitulo: "Confirmação rápida pra começar", emoji: "✦" },
  { titulo: "Identidade + Hero", subtitulo: "Como você aparece e o hero da home", emoji: "🎯" },
  { titulo: "Posicionamento estético", subtitulo: "Cult-modern, tradicional ou híbrido", emoji: "🎨" },
  { titulo: "Estilos + Categorias", subtitulo: "Quais entrega + substitui '+30 categorias'", emoji: "📐" },
  { titulo: "Portfolio", subtitulo: "Histórico das 15 peças + galeria", emoji: "🖼" },
  { titulo: "Modelo de entrega", subtitulo: "Volume, formatos, Drive, VIP", emoji: "📦" },
  { titulo: "Preço", subtitulo: "Estratégia comercial", emoji: "💰" },
  { titulo: "Prova social + Lançamento", subtitulo: "Depoimentos + Palmas + correções", emoji: "🚀" },
  { titulo: "Tamanho da oportunidade", subtitulo: "Dados reais de mercado · BR + Palmas", emoji: "📊" },
  { titulo: "Co-criação", subtitulo: "Sua hora de propor · não só responder", emoji: "💎" },
] as const;

type SaveState = "idle" | "saving" | "saved" | "error";

export default function BriefingForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BriefingData>(briefingDefaults);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [loaded, setLoaded] = useState(false);
  const lastHash = useRef<string>("");

  // Load: server primeiro, fallback localStorage
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/briefing/draft?slug=${BRIEFING_SLUG}`, {
          cache: "no-store",
        });
        if (!cancelled && res.ok) {
          const json = await res.json();
          if (json.briefing?.data) {
            setData({ ...briefingDefaults, ...(json.briefing.data as BriefingData) });
            setStep(Math.min(TOTAL_STEPS - 1, json.briefing.progress ?? 0));
            lastHash.current = JSON.stringify(json.briefing.data);
            setLoaded(true);
            return;
          }
        }
      } catch {}
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && !cancelled) {
          const parsed = JSON.parse(saved);
          setData({ ...briefingDefaults, ...parsed.data });
          setStep(parsed.step ?? 0);
        }
      } catch {}
      if (!cancelled) setLoaded(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // localStorage backup
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step }));
    } catch {}
  }, [data, step]);

  function set<K extends keyof BriefingData>(key: K, value: BriefingData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(key: keyof BriefingData, value: string) {
    setData((prev) => {
      const current = (prev[key] as string[]) ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: next as BriefingData[typeof key] };
    });
  }

  async function persistDraft(): Promise<boolean> {
    setSaveState("saving");
    try {
      const res = await fetch("/api/briefing/draft", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: BRIEFING_SLUG,
          name: data.nome || null,
          data,
          progress: step,
          status: "draft",
        }),
      });
      if (!res.ok) throw new Error("falha");
      lastHash.current = JSON.stringify(data);
      setSaveState("saved");
      setTimeout(() => setSaveState("idle"), 2500);
      return true;
    } catch {
      setSaveState("error");
      setTimeout(() => setSaveState("idle"), 4000);
      return false;
    }
  }

  async function handleSaveAndNext() {
    await persistDraft();
    setStep(Math.min(TOTAL_STEPS - 1, step + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    setError(null);
    const parsed = briefingSchema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      setError(`Algo faltando: ${first?.message ?? "verifica os campos"}`);
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/api/briefing/draft", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: BRIEFING_SLUG,
          name: data.nome || null,
          data: parsed.data,
          progress: TOTAL_STEPS - 1,
          status: "completed",
        }),
      });
      const res = await fetch("/api/briefing/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("falha");
      localStorage.removeItem(STORAGE_KEY);
      router.push("/briefing/obrigado");
    } catch {
      setError("Falha no envio. Tenta de novo ou manda print pro Eduardo.");
      setSubmitting(false);
    }
  }

  const bloco = BLOCOS[step];
  const isLast = step === TOTAL_STEPS - 1;

  return (
    <div className="bf-wrap">
      {/* Header progress */}
      <div className="bf-progress">
        <div className="bf-progress-top">
          <span className="bf-bloco-tag">
            <span className="bf-bloco-emoji">{bloco.emoji}</span>
            {bloco.titulo}
          </span>
          <span className="bf-step-counter">{step + 1} de {TOTAL_STEPS}</span>
        </div>
        <div className="bf-bar">
          <div className="bf-bar-fill" style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }} />
        </div>
        <p className="bf-bloco-sub">{bloco.subtitulo}</p>
      </div>

      {!loaded && <p className="bf-loading">Carregando suas respostas anteriores…</p>}

      {loaded && (
        <div className="bf-content">
          {step === 0 && <Bloco0 data={data} set={set} />}
          {step === 1 && <Bloco1Hero data={data} set={set} />}
          {step === 2 && <Bloco2Estetica data={data} set={set} />}
          {step === 3 && <Bloco3Estilos data={data} set={set} toggle={toggle} />}
          {step === 4 && <Bloco4Portfolio data={data} set={set} />}
          {step === 5 && <Bloco5Entrega data={data} set={set} toggle={toggle} />}
          {step === 6 && <Bloco6Preco data={data} set={set} />}
          {step === 7 && <Bloco7Lancamento data={data} set={set} toggle={toggle} />}
          {step === 8 && <Bloco8Dados data={data} set={set} />}
          {step === 9 && <Bloco9Cocriacao data={data} set={set} />}
        </div>
      )}

      {error && <div className="bf-error">{error}</div>}

      {/* Botão salvar progresso */}
      {loaded && !isLast && (
        <button type="button" onClick={persistDraft} disabled={saveState === "saving"} className="bf-save-btn">
          {saveState === "saving" && "💾 Salvando…"}
          {saveState === "saved" && "✅ Salvo no servidor"}
          {saveState === "error" && "⚠️ Erro · tenta de novo"}
          {saveState === "idle" && "💾 Salvar progresso deste bloco"}
        </button>
      )}

      {/* Navegação */}
      <div className="bf-nav">
        <button
          type="button"
          onClick={() => { setStep(Math.max(0, step - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          disabled={step === 0 || submitting}
          className="bf-btn-back"
        >
          ← Voltar
        </button>

        {isLast ? (
          <button type="button" onClick={handleSubmit} disabled={submitting} className="bf-btn-submit">
            {submitting ? "Enviando…" : "✦ Enviar briefing"}
          </button>
        ) : (
          <button type="button" onClick={handleSaveAndNext} disabled={saveState === "saving"} className="bf-btn-next">
            Salvar e próximo →
          </button>
        )}
      </div>

      <style>{`
        .bf-wrap { max-width: 760px; margin: 0 auto; padding: 0 24px 80px; }

        /* Progress */
        .bf-progress { margin-bottom: 40px; padding-top: 8px; }
        .bf-progress-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .bf-bloco-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-bebas), sans-serif;
          font-size: 14px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--gold);
        }
        .bf-bloco-emoji { font-size: 18px; }
        .bf-step-counter {
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .bf-bar {
          height: 2px; background: rgba(200,164,74,0.1); border-radius: 2px;
          overflow: hidden; margin-bottom: 12px;
        }
        .bf-bar-fill {
          height: 100%; background: linear-gradient(90deg, var(--gold), var(--gold2));
          transition: width .5s cubic-bezier(.4,0,.2,1);
        }
        .bf-bloco-sub { font-size: 13px; color: rgba(255,255,255,0.45); }

        .bf-loading { text-align: center; color: rgba(255,255,255,0.4); padding: 60px 0; font-size: 14px; }

        /* Content */
        .bf-content { display: flex; flex-direction: column; gap: 28px; }

        /* Error */
        .bf-error {
          margin-top: 24px; padding: 14px 18px; border-radius: 8px;
          background: rgba(220,38,38,0.10); border: 1px solid rgba(220,38,38,0.30);
          color: #ff8080; font-size: 14px;
        }

        /* Save btn */
        .bf-save-btn {
          width: 100%; margin-top: 32px; padding: 14px;
          background: rgba(200,164,74,0.06);
          border: 1px solid rgba(200,164,74,0.25);
          color: var(--gold);
          font-family: var(--font-bebas), sans-serif;
          font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase;
          border-radius: 4px; cursor: pointer; transition: all .2s;
        }
        .bf-save-btn:hover:not(:disabled) {
          background: rgba(200,164,74,0.12);
          border-color: rgba(200,164,74,0.5);
        }
        .bf-save-btn:disabled { opacity: 0.5; }

        /* Nav */
        .bf-nav {
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          margin-top: 24px; padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .bf-btn-back, .bf-btn-next, .bf-btn-submit {
          font-family: var(--font-bebas), sans-serif;
          letter-spacing: 2.5px; text-transform: uppercase; font-size: 13px;
          padding: 14px 28px; border-radius: 4px; cursor: pointer;
          transition: all .25s; border: none;
        }
        .bf-btn-back {
          background: transparent; color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .bf-btn-back:hover:not(:disabled) { color: var(--white); border-color: rgba(255,255,255,0.3); }
        .bf-btn-back:disabled { opacity: 0.3; cursor: not-allowed; }
        .bf-btn-next, .bf-btn-submit {
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: var(--black); font-weight: 700;
          box-shadow: 0 0 30px rgba(200,164,74,0.2);
        }
        .bf-btn-next:hover:not(:disabled), .bf-btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 50px rgba(200,164,74,0.4);
        }
        .bf-btn-next:disabled, .bf-btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 560px) {
          .bf-wrap { padding: 0 16px 60px; }
          .bf-btn-back, .bf-btn-next, .bf-btn-submit { padding: 12px 18px; font-size: 11px; letter-spacing: 2px; }
        }
      `}</style>

      <FormStyles />
    </div>
  );
}

// =====================================================================
// SHARED FORM PRIMITIVES
// =====================================================================

function FormStyles() {
  return (
    <style>{`
      .bf-q { margin-bottom: 28px; }
      .bf-q-title {
        font-family: var(--font-bebas), sans-serif;
        font-size: 18px; letter-spacing: 2px;
        color: var(--white); margin-bottom: 10px;
        line-height: 1.3;
      }
      .bf-q-hint {
        font-size: 13px; line-height: 1.7;
        color: rgba(255,255,255,0.4);
        margin-bottom: 16px;
      }
      .bf-q-hint strong { color: var(--gold); font-weight: 600; }
      .bf-q-hint em { color: rgba(232,201,106,0.8); font-style: normal; }

      /* Input/textarea */
      .bf-input, .bf-textarea {
        width: 100%; padding: 12px 16px;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 4px;
        color: var(--white); font-size: 14px;
        font-family: var(--font-inter), 'Inter', sans-serif;
        transition: border-color .2s;
      }
      .bf-textarea { min-height: 100px; resize: vertical; line-height: 1.6; }
      .bf-input:focus, .bf-textarea:focus {
        outline: none; border-color: rgba(200,164,74,0.5);
        background: rgba(255,255,255,0.05);
      }
      .bf-input::placeholder, .bf-textarea::placeholder { color: rgba(255,255,255,0.2); }

      /* Radio/Checkbox options */
      .bf-opts { display: flex; flex-direction: column; gap: 8px; }
      .bf-opt {
        display: flex; align-items: flex-start; gap: 12px;
        padding: 14px 16px; border-radius: 6px;
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.06);
        cursor: pointer; transition: all .2s;
      }
      .bf-opt:hover { background: rgba(255,255,255,0.04); border-color: rgba(200,164,74,0.2); }
      .bf-opt.selected {
        background: rgba(200,164,74,0.08);
        border-color: rgba(200,164,74,0.5);
      }
      .bf-opt input[type="radio"], .bf-opt input[type="checkbox"] {
        appearance: none;
        width: 18px; height: 18px; flex-shrink: 0;
        border: 1.5px solid rgba(200,164,74,0.4);
        background: transparent;
        cursor: pointer; margin: 0; margin-top: 2px;
        position: relative; transition: all .2s;
      }
      .bf-opt input[type="radio"] { border-radius: 50%; }
      .bf-opt input[type="checkbox"] { border-radius: 3px; }
      .bf-opt input[type="radio"]:checked,
      .bf-opt input[type="checkbox"]:checked {
        background: var(--gold); border-color: var(--gold);
      }
      .bf-opt input[type="radio"]:checked::after {
        content: ''; position: absolute;
        inset: 4px; border-radius: 50%; background: var(--black);
      }
      .bf-opt input[type="checkbox"]:checked::after {
        content: '✓'; position: absolute;
        top: 50%; left: 50%; transform: translate(-50%, -50%);
        color: var(--black); font-size: 12px; font-weight: 700; line-height: 1;
      }
      .bf-opt-label {
        flex: 1; font-size: 14px; line-height: 1.55;
        color: rgba(255,255,255,0.85);
      }

      /* Block subtitle */
      .bf-block-intro {
        background: rgba(200,164,74,0.04);
        border-left: 2px solid var(--gold);
        padding: 14px 18px;
        font-size: 13px; line-height: 1.7;
        color: rgba(255,255,255,0.65);
        margin-bottom: 24px;
        border-radius: 0 4px 4px 0;
      }
      .bf-block-intro strong { color: var(--gold); }
      .bf-block-intro em { color: var(--white); font-style: normal; }

      /* Highlight callout */
      .bf-callout {
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        padding: 16px 20px; border-radius: 6px;
        font-size: 13px; line-height: 1.7;
        color: rgba(255,255,255,0.55);
        margin-bottom: 16px;
      }
      .bf-callout-warn {
        background: rgba(192,57,43,0.06);
        border-color: rgba(192,57,43,0.25);
      }
      .bf-callout-warn::before {
        content: '⚠️'; margin-right: 8px;
      }

      /* Data bloco (bloco 8) */
      .bf-data-section { margin-bottom: 32px; }
      .bf-data-h {
        font-family: var(--font-bebas), sans-serif;
        font-size: 18px; letter-spacing: 2px; color: var(--gold);
        margin-bottom: 14px;
      }
      .bf-data-grid {
        display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
      }
      .bf-data-card {
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        padding: 16px; border-radius: 6px;
      }
      .bf-data-num {
        font-family: var(--font-bebas), sans-serif;
        font-size: 28px; color: var(--gold); line-height: 1;
        margin-bottom: 6px;
      }
      .bf-data-label {
        font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
        color: rgba(255,255,255,0.4); line-height: 1.5;
      }
      @media (max-width: 560px) {
        .bf-data-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

// Generic helpers
type SetFn = <K extends keyof BriefingData>(key: K, value: BriefingData[K]) => void;
type ToggleFn = (key: keyof BriefingData, value: string) => void;

function Radio({ name, value, current, onChange, label }: { name: string; value: string; current: string; onChange: (v: string) => void; label: string }) {
  const selected = current === value;
  return (
    <label className={`bf-opt ${selected ? "selected" : ""}`}>
      <input type="radio" name={name} value={value} checked={selected} onChange={() => onChange(value)} />
      <span className="bf-opt-label">{label}</span>
    </label>
  );
}

function Check({ value, checked, onToggle, label }: { value: string; checked: boolean; onToggle: () => void; label: string }) {
  return (
    <label className={`bf-opt ${checked ? "selected" : ""}`}>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span className="bf-opt-label">{label}</span>
    </label>
  );
}

// =====================================================================
// BLOCO 0 · Boas-vindas
// =====================================================================

function Bloco0({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        Olha, Matheus — montamos a base inteira. Esse briefing é pra você finalizar os detalhes com a gente. Cada bloco mostra o que já está pronto + opções pra você escolher ou cravar a sua direção. <strong>Sem certo/errado, sem rodeios.</strong>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Seu nome completo</p>
        <input className="bf-input" type="text" value={data.nome} onChange={(e) => set("nome", e.target.value)} placeholder="Ex: Matheus Reis" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">WhatsApp pra alinhar</p>
        <input className="bf-input" type="tel" value={data.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="(63) 9 ____-____" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Canal preferido pra dúvidas durante o preenchimento</p>
        <div className="bf-opts">
          {CANAL_DUVIDAS.map((o) => (
            <Radio key={o} name="canal" value={o} current={data.canalDuvidas} onChange={(v) => set("canalDuvidas", v)} label={o} />
          ))}
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Quanto tempo você reservou pra responder isso?</p>
        <div className="bf-opts">
          {TEMPO_RESPOSTA.map((o) => (
            <Radio key={o} name="tempo" value={o} current={data.tempoResposta} onChange={(v) => set("tempoResposta", v)} label={o} />
          ))}
        </div>
      </div>

      <p className="bf-q-hint" style={{ marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
        ↓ Tudo é salvo automaticamente. Você pode pausar e voltar quando quiser.
      </p>
    </>
  );
}

// =====================================================================
// BLOCO 1 · Identidade + Hero
// =====================================================================

function Bloco1Hero({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        Aqui você define <strong>como aparece</strong> na LP e qual o <strong>hero da home</strong>. Mostramos o que tá no ar hoje + 2-3 opções fortes baseadas no que descobrimos sobre você (Base Church + Behance + bio Insta).
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Como você prefere ser apresentado</p>
        <p className="bf-q-hint">Hoje a LP diz: <em>"Designer especializado em comunicação para igrejas, com anos de experiência criando artes que vão muito além do template"</em></p>
        <div className="bf-opts">
          {APRESENTACAO.map((o) => (
            <Radio key={o} name="apresentacao" value={o} current={data.apresentacao} onChange={(v) => set("apresentacao", v)} label={o} />
          ))}
          <Radio name="apresentacao" value="D · Outro" current={data.apresentacao} onChange={(v) => set("apresentacao", v)} label="D · Outro (descrevo abaixo)" />
        </div>
        {data.apresentacao === "D · Outro" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.apresentacaoOutro || ""} onChange={(e) => set("apresentacaoOutro", e.target.value)} placeholder="Como você quer aparecer..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Frase-síntese sua na LP</p>
        <p className="bf-q-hint">Hoje você tem no rodapé do "Sobre" a frase do Ressil: <em>"Toda marca tem uma história. Vamos transformá-la em conteúdo."</em> Quer manter? Trocar? Ter uma só pro Criativos do Céu?</p>
        <textarea className="bf-textarea" value={data.fraseMatheus || ""} onChange={(e) => set("fraseMatheus", e.target.value)} placeholder="Sua frase aqui... (deixa em branco se quiser manter a atual)" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Hero principal da home</p>
        <p className="bf-q-hint">Hoje: <em>"Chega de artes amadoras. A sua igreja merece templates profissionais prontos para editar — sem contratar designer, sem horas no zero."</em></p>
        <div className="bf-opts">
          {HERO_OPCOES.map((o) => (
            <Radio key={o} name="hero" value={o} current={data.heroEscolha} onChange={(v) => set("heroEscolha", v)} label={o} />
          ))}
          <Radio name="hero" value="D · Outro" current={data.heroEscolha} onChange={(v) => set("heroEscolha", v)} label="D · Outro (cravo abaixo)" />
        </div>
        {data.heroEscolha === "D · Outro" && (
          <textarea className="bf-textarea" style={{ marginTop: 10 }} value={data.heroOutro || ""} onChange={(e) => set("heroOutro", e.target.value)} placeholder="Sua headline..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Subtítulo do Hero</p>
        <div className="bf-opts">
          {SUBTITULO_HERO.map((o) => (
            <Radio key={o} name="subhero" value={o} current={data.subtituloEscolha} onChange={(v) => set("subtituloEscolha", v)} label={o} />
          ))}
          <Radio name="subhero" value="C · Outro" current={data.subtituloEscolha} onChange={(v) => set("subtituloEscolha", v)} label="C · Outro" />
        </div>
        {data.subtituloEscolha === "C · Outro" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.subtituloOutro || ""} onChange={(e) => set("subtituloOutro", e.target.value)} placeholder="Subtítulo..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">CTA primário (botão grande)</p>
        <div className="bf-opts">
          {CTA_HERO.map((o) => (
            <Radio key={o} name="cta" value={o} current={data.ctaEscolha} onChange={(v) => set("ctaEscolha", v)} label={o} />
          ))}
          <Radio name="cta" value="D · Outro" current={data.ctaEscolha} onChange={(v) => set("ctaEscolha", v)} label="D · Outro" />
        </div>
        {data.ctaEscolha === "D · Outro" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.ctaOutro || ""} onChange={(e) => set("ctaOutro", e.target.value)} placeholder="Texto do botão..." />
        )}
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 2 · Posicionamento estético
// =====================================================================

function Bloco2Estetica({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        Decisão de marca grande. <strong>A pesquisa nacional mostrou: 100% dos concorrentes BR estão em estética gospel tradicional (laranja/dourado, pomba, tipografia serifada). Ninguém atende a igreja jovem urbana com estética cult-modern</strong> (paredes pretas, paleta neutra, tipografia limpa) — que é exatamente o que você entrega na Base Church.
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Qual posicionamento estético você quer cravar pra marca</p>
        <div className="bf-opts">
          {POSICIONAMENTO_ESTETICO.map((o) => (
            <Radio key={o} name="estetica" value={o} current={data.posicionamentoEstetico} onChange={(v) => set("posicionamentoEstetico", v)} label={o} />
          ))}
          <Radio name="estetica" value="D · Outro" current={data.posicionamentoEstetico} onChange={(v) => set("posicionamentoEstetico", v)} label="D · Outro (me explica abaixo)" />
        </div>
        {data.posicionamentoEstetico === "D · Outro" && (
          <textarea className="bf-textarea" style={{ marginTop: 10 }} value={data.posicionamentoOutro || ""} onChange={(e) => set("posicionamentoOutro", e.target.value)} placeholder="Sua visão de posicionamento..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Referências de marca</p>
        <p className="bf-q-hint">Tem alguma igreja, marca ou designer que pra você é <em>"isso aqui é onde Criativos do Céu quer chegar"</em>?</p>
        <textarea className="bf-textarea" value={data.referenciasMarca || ""} onChange={(e) => set("referenciasMarca", e.target.value)} placeholder="Ex: Hillsong, Lagoinha Alpha, Bethel, marcas fora de igreja..." />
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 3 · Estilos + Categorias
// =====================================================================

function Bloco3Estilos({ data, set, toggle }: { data: BriefingData; set: SetFn; toggle: ToggleFn }) {
  return (
    <>
      <div className="bf-block-intro">
        A LP atual mistura <strong>estilo</strong> (linguagem visual) e <strong>categoria</strong> (pra que tipo de evento). Vamos separar pra ficar claro. E o famoso <strong>"+30 categorias"</strong> — nunca listamos quais. Vamos cravar agora.
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Estilos que você entrega de fato</p>
        <p className="bf-q-hint">Hoje a LP lista 8. Marca os que ficam + adiciona os que faltam (vimos na Base que tem "Masculino" e "Missões" também):</p>
        <div className="bf-opts">
          {ESTILOS.map((o) => (
            <Check key={o} value={o} checked={data.estilos.includes(o)} onToggle={() => toggle("estilos", o)} label={o} />
          ))}
        </div>
        <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.estiloOutro || ""} onChange={(e) => set("estiloOutro", e.target.value)} placeholder="Outro estilo: ____" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Categorias/temas (substitui o "+30 categorias")</p>
        <p className="bf-q-hint">Marca o que você entrega ou pretende entregar. Vamos chegar nos "+30" reais — ou ajustar pra número honesto:</p>
        <div className="bf-opts">
          {CATEGORIAS.map((o) => (
            <Check key={o} value={o} checked={data.categorias.includes(o)} onToggle={() => toggle("categorias", o)} label={o} />
          ))}
        </div>
        <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.categoriaOutro || ""} onChange={(e) => set("categoriaOutro", e.target.value)} placeholder="Outras categorias: ____ (separa por vírgula)" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Número final pra comunicar na LP</p>
        <p className="bf-q-hint">Com base no que você marcou: que número você quer ver no Hero/TrustStrip? Ex: "+25 categorias", "+30 categorias", "20 templates por mês"...</p>
        <input className="bf-input" type="text" value={data.numCategoriasComunicar || ""} onChange={(e) => set("numCategoriasComunicar", e.target.value)} placeholder="Ex: +25 categorias" />
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 4 · Portfolio
// =====================================================================

function Bloco4Portfolio({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        A galeria atual da LP mostra <strong>15 peças com nomes próprios</strong> (A Porta · Recomeços com Propósito · Curso de Noivos · XTRM · Teen · E Depois da Luta + 9). A gente precisa saber de onde elas saíram pra LP ficar genuína.
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Histórico das 15 peças do portfolio</p>
        <p className="bf-q-hint">Pra cada uma, me conta de onde veio: foi pra Base Church? Pra outra igreja real? Foi feita só pra portfolio? (Pode escrever em formato livre — uma linha por peça)</p>
        <textarea className="bf-textarea" style={{ minHeight: 180 }} value={data.psdHistoricos || ""} onChange={(e) => set("psdHistoricos", e.target.value)} placeholder={`Ex:\n1. A Porta — feita pra Base Church série de pregação março/2026\n2. Recomeços com Propósito — pra Igreja X\n3. Curso de Noivos — portfolio\n...`} />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Galeria principal — proposta</p>
        <p className="bf-q-hint">Sugestão forte: substituir parte das 15 atuais pelos <strong>top 5 da Base Church</strong> (incluindo o viral "Sobre sua família" com 14.742 plays). Topa?</p>
        <div className="bf-opts">
          {GALERIA_DECISAO.map((o) => (
            <Radio key={o} name="galeria" value={o} current={data.galeriaDecisao} onChange={(v) => set("galeriaDecisao", v)} label={o} />
          ))}
          <Radio name="galeria" value="D · Outro" current={data.galeriaDecisao} onChange={(v) => set("galeriaDecisao", v)} label="D · Outro (descrevo abaixo)" />
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Novas peças/obras-primas</p>
        <p className="bf-q-hint">Tem peças não publicadas no portfolio Behance que você considera "obra-prima" e gostaria de incluir? Pode mandar link do Drive ou descrição:</p>
        <textarea className="bf-textarea" value={data.novasPecas || ""} onChange={(e) => set("novasPecas", e.target.value)} placeholder="Ex: link drive + descrição das peças..." />
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 5 · Modelo de entrega
// =====================================================================

function Bloco5Entrega({ data, set, toggle }: { data: BriefingData; set: SetFn; toggle: ToggleFn }) {
  return (
    <>
      <div className="bf-block-intro">
        Operação concreta: <strong>quantos PSDs por semana</strong>, em quais formatos, como organizar Drive, dia de upload, grupo VIP. Você havia falado em <strong>5/semana</strong> — confirma?
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Volume semanal de PSDs novos</p>
        <div className="bf-opts">
          {VOLUME_SEMANAL.map((o) => (
            <Radio key={o} name="volume" value={o} current={data.volumeSemanal} onChange={(v) => set("volumeSemanal", v)} label={o} />
          ))}
          <Radio name="volume" value="Outro" current={data.volumeSemanal} onChange={(v) => set("volumeSemanal", v)} label="Outro" />
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Formatos em cada PSD entregue</p>
        <p className="bf-q-hint">Pra cada peça lançada na semana, em quantos formatos sai?</p>
        <div className="bf-opts">
          {FORMATOS_POR_PSD.map((o) => (
            <Check key={o} value={o} checked={data.formatosPorPSD.includes(o)} onToggle={() => toggle("formatosPorPSD", o)} label={o} />
          ))}
        </div>
        <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.formatoOutro || ""} onChange={(e) => set("formatoOutro", e.target.value)} placeholder="Outro formato: ____" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Camadas separadas (texturas + LUTs + fundos + ícones)</p>
        <p className="bf-q-hint">A LP promete que cada PSD vem com tudo organizado em camadas separadas. Confirma?</p>
        <div className="bf-opts">
          <Radio name="camadas" value="sim" current={data.camadasSeparadas} onChange={(v) => set("camadasSeparadas", v as "sim" | "vou_ajustar")} label="Sim, entrega assim mesmo" />
          <Radio name="camadas" value="vou_ajustar" current={data.camadasSeparadas} onChange={(v) => set("camadasSeparadas", v as "sim" | "vou_ajustar")} label="Vou ajustar pra entregar assim" />
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Organização das pastas no Google Drive</p>
        <div className="bf-opts">
          {ORGANIZACAO_DRIVE.map((o) => (
            <Radio key={o} name="org" value={o} current={data.organizacaoDrive} onChange={(v) => set("organizacaoDrive", v)} label={o} />
          ))}
          <Radio name="org" value="Outro" current={data.organizacaoDrive} onChange={(v) => set("organizacaoDrive", v)} label="Outro" />
        </div>
        {data.organizacaoDrive === "Outro" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.organizacaoOutro || ""} onChange={(e) => set("organizacaoOutro", e.target.value)} placeholder="Como você quer organizar..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Dia da semana de upload (Drive + VIP)</p>
        <div className="bf-opts">
          {DIA_UPLOAD.map((o) => (
            <Radio key={o} name="dia" value={o} current={data.diaUpload} onChange={(v) => set("diaUpload", v)} label={o} />
          ))}
          <Radio name="dia" value="Outro" current={data.diaUpload} onChange={(v) => set("diaUpload", v)} label="Outro" />
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Grupo VIP WhatsApp — status</p>
        <div className="bf-opts">
          {VIP_STATUS.map((o) => (
            <Radio key={o} name="vip" value={o} current={data.vipStatus} onChange={(v) => set("vipStatus", v)} label={o} />
          ))}
        </div>
        {data.vipStatus === "Já existe" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.vipLink || ""} onChange={(e) => set("vipLink", e.target.value)} placeholder="Link do grupo..." />
        )}
        <textarea className="bf-textarea" style={{ marginTop: 10 }} value={data.vipConteudo || ""} onChange={(e) => set("vipConteudo", e.target.value)} placeholder="Conteúdo planejado pro VIP (lives, behind-the-scenes, prévias...)" />
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 6 · Preço
// =====================================================================

function Bloco6Preco({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        Hoje: <strong>R$ 37,90/mês · R$ 197/ano</strong>. A pesquisa nacional mostrou 3 problemas:<br />
        <strong>1.</strong> R$ 197/ano coincide com KDG vitalício (líder) — cliente compara e fica em dúvida.<br />
        <strong>2.</strong> Concorrente direto (Marcelo Leão · PSD Gospel Top) cobra R$ 30/mês — sem reposicionamento estamos R$ 8 acima sem diferencial claro.<br />
        <strong>3.</strong> Você está abaixo do Design Santo TCs Master (R$ 497/ano = R$ 41/mês) que é o player premium especializado.
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Sua estratégia de preço</p>
        <div className="bf-opts">
          {PRECO_OPCOES.map((o) => (
            <Radio key={o} name="preco" value={o} current={data.precoEscolha} onChange={(v) => set("precoEscolha", v)} label={o} />
          ))}
          <Radio name="preco" value="D · Outro" current={data.precoEscolha} onChange={(v) => set("precoEscolha", v)} label="D · Outro (me explica abaixo)" />
        </div>
        {data.precoEscolha === "D · Outro" && (
          <textarea className="bf-textarea" style={{ marginTop: 10 }} value={data.precoOutro || ""} onChange={(e) => set("precoOutro", e.target.value)} placeholder="Sua estratégia..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Trial pago R$ 1 nos primeiros 7 dias</p>
        <p className="bf-q-hint">Mata objeção "vou testar" sem queimar margem. Topa?</p>
        <div className="bf-opts">
          {TRIAL_R1.map((o) => (
            <Radio key={o} name="trial" value={o} current={data.trialR1} onChange={(v) => set("trialR1", v)} label={o} />
          ))}
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Plano único vitalício (R$ 497-997) como opção paralela</p>
        <p className="bf-q-hint">Concorrentes BR usam (KDG R$ 197 vitalício, Pack Do Design R$ 19,90). Vale testar paralelo à assinatura?</p>
        <div className="bf-opts">
          {VITALICIO.map((o) => (
            <Radio key={o} name="vitalicio" value={o} current={data.vitalicio} onChange={(v) => set("vitalicio", v)} label={o} />
          ))}
        </div>
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 7 · Prova social + Lançamento Palmas
// =====================================================================

function Bloco7Lancamento({ data, set, toggle }: { data: BriefingData; set: SetFn; toggle: ToggleFn }) {
  return (
    <>
      <div className="bf-callout bf-callout-warn">
        Hoje a LP tem 4 depoimentos fictícios (Ana Paula · Carlos Eduardo · Pastor Rafael · Juliana Moraes) com disclaimer "fotos serão adicionadas em breve". Risco de imagem. A pesquisa mostrou que concorrentes top usam REAIS ou nenhum.
      </div>

      <div className="bf-q">
        <p className="bf-q-title">O que fazer com a seção de depoimentos</p>
        <div className="bf-opts">
          {PROVA_SOCIAL_DECISAO.map((o) => (
            <Radio key={o} name="prova" value={o} current={data.provaSocialDecisao} onChange={(v) => set("provaSocialDecisao", v)} label={o} />
          ))}
          <Radio name="prova" value="Outro" current={data.provaSocialDecisao} onChange={(v) => set("provaSocialDecisao", v)} label="Outro" />
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Candidatos a depoimentos reais</p>
        <p className="bf-q-hint">Se for coletar reais, quem você sugere? (pode marcar vários)</p>
        <div className="bf-opts">
          {DEPOIMENTOS_CANDIDATOS.map((o) => (
            <Check key={o} value={o} checked={(data.depoimentosCandidatos || []).includes(o)} onToggle={() => toggle("depoimentosCandidatos", o)} label={o} />
          ))}
        </div>
        <textarea className="bf-textarea" style={{ marginTop: 10 }} value={data.depoimentosOutros || ""} onChange={(e) => set("depoimentosOutros", e.target.value)} placeholder="Outros nomes (líder de mídia de outra igreja, etc.):" />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Vídeo-depoimento Pr. Robson Correa</p>
        <p className="bf-q-hint">Proposta da pesquisa Palmas — seria gatilho zero do lançamento. Você consegue gravar com ele?</p>
        <div className="bf-opts">
          {VIDEO_PR_ROBSON.map((o) => (
            <Radio key={o} name="video" value={o} current={data.videoPrRobson} onChange={(v) => set("videoPrRobson", v)} label={o} />
          ))}
        </div>
        {data.videoPrRobson === "Não, prefiro outra abordagem" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.videoOutro || ""} onChange={(e) => set("videoOutro", e.target.value)} placeholder="Que abordagem você prefere..." />
        )}
      </div>

      <div className="bf-block-intro">
        <strong>Lançamento Palmas-first.</strong> Pesquisa local mapeou 17 igrejas evangélicas com Insta · identificou 7 Tier A/B com fit cult-modern · cravou 10 alvos pra piloto. <strong>Zero concorrente local especializado em pack PSD pra igreja.</strong>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Quais dessas 10 igrejas você CONHECE</p>
        <div className="bf-opts">
          {IGREJAS_ALVO.map((o) => (
            <Check key={`c-${o}`} value={o} checked={(data.igrejasConheco || []).includes(o)} onToggle={() => toggle("igrejasConheco", o)} label={o} />
          ))}
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Quais você JÁ trabalhou ou trabalha</p>
        <div className="bf-opts">
          {IGREJAS_ALVO.map((o) => (
            <Check key={`t-${o}`} value={o} checked={(data.igrejasTrabalho || []).includes(o)} onToggle={() => toggle("igrejasTrabalho", o)} label={o} />
          ))}
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Quais você tem CONTATO direto (pastor/líder de mídia)</p>
        <div className="bf-opts">
          {IGREJAS_ALVO.map((o) => (
            <Check key={`co-${o}`} value={o} checked={(data.igrejasContato || []).includes(o)} onToggle={() => toggle("igrejasContato", o)} label={o} />
          ))}
        </div>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Igrejas-amigas que faltam na lista</p>
        <p className="bf-q-hint">Que igrejas em Palmas/Tocantins você já fez trabalho ou tem relação que NÃO estão na lista de 10?</p>
        <textarea className="bf-textarea" value={data.igrejasOutras || ""} onChange={(e) => set("igrejasOutras", e.target.value)} placeholder="Nome · estilo · seu contato lá..." />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">"Edição Capital da Fé" — pack temático</p>
        <p className="bf-q-hint">Próxima edição fev/2027 · 45.200 pessoas em 4 dias. Lançar pack temático limitado como ativação?</p>
        <div className="bf-opts">
          {CAPITAL_FE.map((o) => (
            <Radio key={o} name="capitalfe" value={o} current={data.capitalFe} onChange={(v) => set("capitalFe", v)} label={o} />
          ))}
        </div>
        {data.capitalFe === "Prefiro mirar outro evento" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.capitalFeOutro || ""} onChange={(e) => set("capitalFeOutro", e.target.value)} placeholder="Qual evento..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Outros eventos Palmas pra atacar</p>
        <p className="bf-q-hint">Cidade Conference (jun/2026) · Congresso Abala (abr/2026) · UMADs CIADSETA/CONEMAD-TO · aniversários de igrejas. Algum você quer atacar primeiro?</p>
        <textarea className="bf-textarea" value={data.outrosEventos || ""} onChange={(e) => set("outrosEventos", e.target.value)} placeholder="Eventos prioritários..." />
      </div>

      <div className="bf-block-intro">
        <strong>3 correções identificadas nas bios:</strong>
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Behance lista @matheusreis.design — mas esse handle não existe no Insta. O ativo é @matheusreis.co</p>
        <div className="bf-opts">
          {ATUALIZA_BEHANCE.map((o) => (
            <Radio key={o} name="behance" value={o} current={data.atualizaBehance} onChange={(v) => set("atualizaBehance", v)} label={o} />
          ))}
        </div>
        {data.atualizaBehance === "Outro" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.atualizaBehanceOutro || ""} onChange={(e) => set("atualizaBehanceOutro", e.target.value)} placeholder="Sua abordagem..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Bio @ressildesign não menciona Criativos do Céu — link aponta Behance</p>
        <div className="bf-opts">
          {ATUALIZA_BIO_RESSIL.map((o) => (
            <Radio key={o} name="biores" value={o} current={data.atualizaBioRessil} onChange={(v) => set("atualizaBioRessil", v)} label={o} />
          ))}
        </div>
        {data.atualizaBioRessil === "Quero outra abordagem" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.atualizaBioRessilOutro || ""} onChange={(e) => set("atualizaBioRessilOutro", e.target.value)} placeholder="Sua abordagem..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Bio @matheusreis.co também sem link Criativos do Céu</p>
        <div className="bf-opts">
          {ATUALIZA_BIO_PESSOAL.map((o) => (
            <Radio key={o} name="biopes" value={o} current={data.atualizaBioPessoal} onChange={(v) => set("atualizaBioPessoal", v)} label={o} />
          ))}
        </div>
        {data.atualizaBioPessoal === "Outro" && (
          <input className="bf-input" style={{ marginTop: 10 }} type="text" value={data.atualizaBioPessoalOutro || ""} onChange={(e) => set("atualizaBioPessoalOutro", e.target.value)} placeholder="Sua abordagem..." />
        )}
      </div>

      <div className="bf-q">
        <p className="bf-q-title">Destaque "Pack" dedicado no @ressildesign</p>
        <p className="bf-q-hint">Hoje tem 11 destaques (4 "Reels" + 4 "Criativos" + outros). Zero destaque "Pack" ou "Cliente". Topa criar um dedicado pro Criativos do Céu?</p>
        <div className="bf-opts">
          {DESTAQUE_PACK.map((o) => (
            <Radio key={o} name="destaque" value={o} current={data.destaquePack} onChange={(v) => set("destaquePack", v)} label={o} />
          ))}
        </div>
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 8 · Tamanho da oportunidade (DADOS)
// =====================================================================

function Bloco8Dados({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        <strong>Não é pra te convencer — você já viu o mercado.</strong> É só pra alinhar a régua do que estamos construindo. Tudo aqui vem de pesquisa com fonte (IBGE 2022 · IPEA · Exame · Gospel Power 2025 · varredura de 12 concorrentes BR + Palmas).
      </div>

      <div className="bf-data-section">
        <p className="bf-data-h">Mercado nacional</p>
        <div className="bf-data-grid">
          <div className="bf-data-card"><div className="bf-data-num">47,4M</div><div className="bf-data-label">Evangélicos no Brasil (26,9% pop · Censo 2022)</div></div>
          <div className="bf-data-card"><div className="bf-data-num">88,5k</div><div className="bf-data-label">Igrejas com CNPJ ativo (IPEA)</div></div>
          <div className="bf-data-card"><div className="bf-data-num">52-62k</div><div className="bf-data-label">Igrejas com Insta ativo (estimativa)</div></div>
          <div className="bf-data-card"><div className="bf-data-num">R$ 21,5 bi</div><div className="bf-data-label">Mercado gospel BR/ano (Gospel Power)</div></div>
          <div className="bf-data-card"><div className="bf-data-num">58%</div><div className="bf-data-label">Evangélicos dizem que fé influencia compra</div></div>
          <div className="bf-data-card"><div className="bf-data-num">250-500k</div><div className="bf-data-label">PSDs/artes consumidos por mês BR (estimativa)</div></div>
        </div>
      </div>

      <div className="bf-data-section">
        <p className="bf-data-h">Mercado endereçável</p>
        <div className="bf-data-grid">
          <div className="bf-data-card"><div className="bf-data-num">R$ 10,8M</div><div className="bf-data-label">TAM/ano · todas igrejas Insta × R$ 197</div></div>
          <div className="bf-data-card"><div className="bf-data-num">R$ 1,08M</div><div className="bf-data-label">SAM/ano · 10% pagariam premium</div></div>
          <div className="bf-data-card"><div className="bf-data-num">R$ 45k</div><div className="bf-data-label">SOM ano 1 · 100 assinantes</div></div>
          <div className="bf-data-card"><div className="bf-data-num">12</div><div className="bf-data-label">Concorrentes diretos BR mapeados</div></div>
        </div>
      </div>

      <div className="bf-data-section">
        <p className="bf-data-h">Concorrência principal</p>
        <div className="bf-callout">
          <strong style={{ color: "var(--gold)" }}>KDG PRO</strong> · R$ 197 vitalício · líder · estética gospel tradicional<br />
          <strong style={{ color: "var(--gold)" }}>Design Santo TCs Master</strong> · R$ 497/ano · premium · só "templates de culto"<br />
          <strong style={{ color: "var(--gold)" }}>PSD Gospel Top (Marcelo Leão)</strong> · R$ 30/mês · 2 PSDs/dia útil · sem identidade<br />
          <strong style={{ color: "var(--gold)" }}>Maior Instagram</strong> · @_igrejapost · apenas 3.901 seguidores · janela aberta
        </div>
      </div>

      <div className="bf-data-section">
        <p className="bf-data-h">Mercado Palmas-TO (você está dentro)</p>
        <div className="bf-data-grid">
          <div className="bf-data-card"><div className="bf-data-num">36,8%</div><div className="bf-data-label">Evangélicos · 6º entre capitais BR</div></div>
          <div className="bf-data-card"><div className="bf-data-num">17</div><div className="bf-data-label">Igrejas mapeadas com Insta · 50-80 estimadas com demanda</div></div>
          <div className="bf-data-card"><div className="bf-data-num">0</div><div className="bf-data-label">Concorrentes locais especializados em pack PSD</div></div>
          <div className="bf-data-card"><div className="bf-data-num">45.200</div><div className="bf-data-label">Pessoas no Capital da Fé 2026 (4 dias)</div></div>
        </div>
      </div>

      <div className="bf-data-section">
        <p className="bf-data-h">Custo de design em Palmas hoje</p>
        <div className="bf-callout">
          <strong>Voluntário</strong> · R$ 0 (mas amador)<br />
          <strong>Freela avulso</strong> · R$ 50-100/peça → R$ 400-800/mês<br />
          <strong>Agência local (TOPO, PMW)</strong> · R$ 1.500-3.000/mês<br />
          <strong style={{ color: "var(--gold)" }}>Criativos do Céu R$ 37,90 = 10-50x mais barato · com qualidade Base Church</strong>
        </div>
      </div>

      <div className="bf-data-section">
        <p className="bf-data-h">Gap competitivo cravado</p>
        <div className="bf-callout">
          <em>"100% dos concorrentes BR vendem estética gospel tradicional. Ninguém atende a igreja jovem urbana cult-modern — exatamente onde você já opera na Base Church. <strong style={{ color: "var(--gold)" }}>Você é o único player BR com prova social de igreja real nessa estética.</strong>"</em>
        </div>
      </div>

      <div className="bf-q" style={{ marginTop: 32 }}>
        <p className="bf-q-title">Sua reação aos dados</p>
        <p className="bf-q-hint">Olha esses números — algum te surpreende? Algum você acha que está errado? Algum dado que você tem que devíamos adicionar?</p>
        <textarea className="bf-textarea" style={{ minHeight: 140 }} value={data.reacaoDados || ""} onChange={(e) => set("reacaoDados", e.target.value)} placeholder="Pode escrever livre..." />
      </div>
    </>
  );
}

// =====================================================================
// BLOCO 9 · Co-criação
// =====================================================================

function Bloco9Cocriacao({ data, set }: { data: BriefingData; set: SetFn }) {
  return (
    <>
      <div className="bf-block-intro">
        Aqui você é sócio, não cliente respondendo. <strong>As respostas literais vão direto pra LP/plano.</strong> 4 perguntas abertas — pode escrever o quanto quiser.
      </div>

      <div className="bf-q">
        <p className="bf-q-title">1 · O sonho real</p>
        <p className="bf-q-hint">Imagina o Criativos do Céu daqui 1 ano. Qual cenário você consideraria <em>"ganhei"</em>? (n° de assinantes? receita? impacto em quantas igrejas? sua presença pessoal/profissional? algo diferente?)</p>
        <textarea className="bf-textarea" style={{ minHeight: 120 }} value={data.sonhoReal || ""} onChange={(e) => set("sonhoReal", e.target.value)} placeholder="Sem censura..." />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">2 · O que tá faltando</p>
        <p className="bf-q-hint">Tirando tudo que você marcou nos blocos acima — o que você acha que está faltando no projeto pra ele bombar? Pode ser técnico, estratégico, de comunicação, de produto, qualquer coisa.</p>
        <textarea className="bf-textarea" style={{ minHeight: 120 }} value={data.faltando || ""} onChange={(e) => set("faltando", e.target.value)} placeholder="O que falta..." />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">3 · Sua ideia ORIGINAL</p>
        <p className="bf-q-hint">Qual a sua ideia mais maluca/diferente/autoral pro Criativos do Céu que você ainda não falou com ninguém? Aquela coisa que só você toparia fazer.</p>
        <textarea className="bf-textarea" style={{ minHeight: 120 }} value={data.ideiaOriginal || ""} onChange={(e) => set("ideiaOriginal", e.target.value)} placeholder="Solta a ideia..." />
      </div>

      <div className="bf-q">
        <p className="bf-q-title">4 · Modelo de remuneração</p>
        <p className="bf-q-hint">Atual: permuta (você + Eduardo construindo juntos). Quando o Criativos do Céu começar a faturar, como você imagina a divisão? (% receita / pró-labore fixo / sociedade formal / outro)</p>
        <textarea className="bf-textarea" style={{ minHeight: 120 }} value={data.remuneracao || ""} onChange={(e) => set("remuneracao", e.target.value)} placeholder="Sua visão..." />
      </div>

      <div className="bf-callout" style={{ marginTop: 32, textAlign: "center", borderColor: "rgba(200,164,74,0.3)", background: "rgba(200,164,74,0.04)" }}>
        ✦ Quando enviar, eu recebo notificação na hora. Em até 7 dias entrego: plano de negócio reescrito + LP atualizada com suas direções + cronograma de lançamento Palmas com as 10 igrejas-alvo.<br />
        <strong style={{ color: "var(--gold)" }}>Vamos cravar.</strong>
      </div>
    </>
  );
}
