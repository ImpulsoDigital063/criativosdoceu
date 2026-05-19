import Link from "next/link";
import { serverSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Painel Briefings · Criativos do Céu",
  robots: { index: false, follow: false, nocache: true },
};

const STYLES = `
:root {
  --bf-bg: #fafaf6;
  --bf-bg-soft: #f4efde;
  --bf-text: #1a1a1a;
  --bf-text-soft: #525252;
  --bf-text-muted: #9a958a;
  --bf-border: #e6e0cf;
  --bf-gold: #b08a3a;
  --bf-gold-deep: #8a6d2e;
}
.pb-blocked { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bf-bg); padding: 32px; font-family: var(--font-inter), sans-serif; }
.pb-blocked-card { max-width: 420px; text-align: center; background: #fff; border: 1px solid var(--bf-border); padding: 48px 32px; color: var(--bf-text); }
.pb-blocked-card h1 { font-family: var(--font-bebas), sans-serif; font-size: 36px; letter-spacing: 0.02em; color: var(--bf-text); margin-bottom: 12px; }
.pb-blocked-card p { color: var(--bf-text-soft); font-size: 14px; }

.pb-page { min-height: 100vh; background: var(--bf-bg); color: var(--bf-text); padding: 40px 24px 64px; font-family: var(--font-inter), sans-serif; }
.pb-inner { max-width: 880px; margin: 0 auto; }
.pb-head { margin-bottom: 48px; }
.pb-eyebrow { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--bf-gold-deep); margin-bottom: 12px; font-weight: 600; }
.pb-title { font-family: var(--font-bebas), sans-serif; font-size: clamp(36px, 5vw, 56px); letter-spacing: 0.02em; color: var(--bf-text); line-height: 1; margin-bottom: 8px; }
.pb-sub { font-size: 14px; color: var(--bf-text-soft); }

.pb-empty { background: #fff; border: 1px solid var(--bf-border); padding: 48px 32px; text-align: center; color: var(--bf-text-soft); font-size: 14px; }

.pb-list { list-style: none; display: flex; flex-direction: column; gap: 8px; padding: 0; }
.pb-item { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; padding: 18px 22px; background: #fff; border: 1px solid var(--bf-border); text-decoration: none; transition: all .2s; }
.pb-item:hover { border-color: var(--bf-gold); }
.pb-item-name { font-family: var(--font-bebas), sans-serif; font-size: 20px; letter-spacing: 0.04em; color: var(--bf-text); margin-bottom: 4px; }
.pb-item-slug { font-size: 11px; color: var(--bf-text-muted); letter-spacing: 0.04em; margin-left: 8px; font-family: monospace; font-weight: 400; }
.pb-item-time { font-size: 11px; color: var(--bf-text-muted); letter-spacing: 0.02em; }
.pb-item-meta { display: flex; align-items: center; gap: 12px; }
.pb-status { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; padding: 4px 10px; }
.pb-status-done { background: var(--bf-bg-soft); color: var(--bf-gold-deep); }
.pb-status-draft { background: #f0eadc; color: var(--bf-text-soft); }
.pb-progress { font-size: 11px; color: var(--bf-text-muted); font-family: monospace; }

.pb-foot { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--bf-border); text-align: center; font-size: 11px; letter-spacing: 0.14em; color: var(--bf-text-muted); }
`;

export default async function PainelBriefingsIndex({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const expected = process.env.BRIEFING_VIEWER_TOKEN?.trim();
  if (!expected || token?.trim() !== expected) {
    return (
      <main className="pb-blocked">
        <div className="pb-blocked-card">
          <h1>Acesso restrito</h1>
          <p>Token inválido ou ausente.</p>
        </div>
        <style>{STYLES}</style>
      </main>
    );
  }

  const sb = serverSupabase();
  const { data: briefings } = await sb
    .from("briefings")
    .select("slug, name, status, progress, updated_at, created_at")
    .order("updated_at", { ascending: false });

  return (
    <main className="pb-page">
      <div className="pb-inner">
        <header className="pb-head">
          <p className="pb-eyebrow">Impulso Digital · Painel</p>
          <h1 className="pb-title">Briefings</h1>
          <p className="pb-sub">Lista em tempo real dos briefings preenchidos por clientes Impulso.</p>
        </header>

        {!briefings || briefings.length === 0 ? (
          <div className="pb-empty">
            <p>Nenhum briefing iniciado ainda. Quando o cliente abrir o link e responder a primeira pergunta, ele aparece aqui.</p>
          </div>
        ) : (
          <ul className="pb-list">
            {briefings.map((b) => (
              <li key={b.slug}>
                <Link href={`/painel-briefing/${b.slug}?token=${encodeURIComponent(token!)}`} className="pb-item">
                  <div>
                    <p className="pb-item-name">
                      {b.name || b.slug} <span className="pb-item-slug">/{b.slug}</span>
                    </p>
                    <p className="pb-item-time">Atualizado {new Date(b.updated_at).toLocaleString("pt-BR")}</p>
                  </div>
                  <div className="pb-item-meta">
                    <span className={`pb-status ${b.status === "completed" ? "pb-status-done" : "pb-status-draft"}`}>
                      {b.status === "completed" ? "✦ enviado" : "rascunho"}
                    </span>
                    <span className="pb-progress">bloco {(b.progress ?? 0) + 1}/10</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <footer className="pb-foot">Impulso Digital · Painel privado · Não compartilhe esse link</footer>
      </div>

      <style>{STYLES}</style>
    </main>
  );
}
