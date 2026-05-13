import Link from "next/link";
import { serverSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Painel Briefings · Criativos do Céu",
  robots: { index: false, follow: false, nocache: true },
};

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
        <style>{`
          .pb-blocked { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--black); padding: 32px; }
          .pb-blocked-card { max-width: 420px; text-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(200,164,74,0.2); border-radius: 12px; padding: 48px 32px; }
          .pb-blocked-card h1 { font-family: var(--font-bebas), sans-serif; font-size: 36px; letter-spacing: 2px; color: var(--gold); margin-bottom: 12px; }
          .pb-blocked-card p { color: rgba(255,255,255,0.5); font-size: 14px; }
        `}</style>
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
          <p className="pb-eyebrow">✦ Impulso Digital · Painel</p>
          <h1 className="pb-title">Briefings de cliente</h1>
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
                      {b.status === "completed" ? "✦ enviado" : "📝 rascunho"}
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

      <style>{`
        .pb-page { min-height: 100vh; background: var(--black); color: var(--white); padding: 32px 24px 64px; }
        .pb-inner { max-width: 920px; margin: 0 auto; }
        .pb-head { margin-bottom: 48px; }
        .pb-eyebrow {
          font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 12px;
        }
        .pb-title {
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(36px, 5vw, 56px); letter-spacing: 2px;
          background: linear-gradient(135deg, #fff, #f5ecd4, #c8a44a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1; margin-bottom: 8px;
        }
        .pb-sub { font-size: 14px; color: rgba(255,255,255,0.45); }

        .pb-empty {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 48px 32px;
          text-align: center;
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }

        .pb-list { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; }
        .pb-item {
          display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;
          padding: 18px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          text-decoration: none;
          transition: all .25s;
        }
        .pb-item:hover { border-color: rgba(200,164,74,0.4); background: rgba(200,164,74,0.04); }
        .pb-item-name {
          font-family: var(--font-bebas), sans-serif;
          font-size: 20px; letter-spacing: 1.5px; color: var(--white);
          margin-bottom: 4px;
        }
        .pb-item-slug { font-size: 11px; color: rgba(200,164,74,0.6); letter-spacing: 1px; margin-left: 8px; font-family: monospace; }
        .pb-item-time { font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 0.5px; }
        .pb-item-meta { display: flex; align-items: center; gap: 12px; }
        .pb-status {
          font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          padding: 4px 10px; border-radius: 4px;
        }
        .pb-status-done { background: rgba(200,164,74,0.15); color: var(--gold); }
        .pb-status-draft { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); }
        .pb-progress {
          font-size: 11px; color: rgba(255,255,255,0.4); font-family: monospace;
        }

        .pb-foot {
          margin-top: 48px; padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          font-size: 11px; letter-spacing: 1.5px;
          color: rgba(255,255,255,0.25);
        }
      `}</style>
    </main>
  );
}
