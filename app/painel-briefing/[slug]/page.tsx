import { serverSupabase } from "@/lib/supabase";
import BriefingViewer from "./BriefingViewer";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Briefing · Painel",
  robots: { index: false, follow: false, nocache: true },
};

export default async function PainelBriefingDetail({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { slug } = await params;
  const { token } = await searchParams;
  const expected = process.env.BRIEFING_VIEWER_TOKEN?.trim();

  if (!expected || token?.trim() !== expected) {
    return (
      <main className="pbd-blocked">
        <div className="pbd-blocked-card">
          <h1>Acesso restrito</h1>
          <p>Token inválido ou ausente.</p>
        </div>
        <style>{`
          .pbd-blocked { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--black); padding: 32px; }
          .pbd-blocked-card { max-width: 420px; text-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(200,164,74,0.2); border-radius: 12px; padding: 48px 32px; color: var(--white); }
          .pbd-blocked-card h1 { font-family: var(--font-bebas), sans-serif; font-size: 36px; letter-spacing: 2px; color: var(--gold); margin-bottom: 12px; }
          .pbd-blocked-card p { color: rgba(255,255,255,0.5); font-size: 14px; }
        `}</style>
      </main>
    );
  }

  const sb = serverSupabase();
  const { data: initial } = await sb
    .from("briefings")
    .select("slug, name, data, status, progress, updated_at, created_at")
    .eq("slug", slug)
    .maybeSingle();

  return (
    <main className="pbd-page">
      <div className="pbd-inner">
        <Link href={`/painel-briefing?token=${encodeURIComponent(token!)}`} className="pbd-back">
          ← Voltar pra lista
        </Link>
        <BriefingViewer slug={slug} initial={initial} />
      </div>
      <style>{`
        .pbd-page { min-height: 100vh; background: var(--black); color: var(--white); padding: 32px 24px 64px; }
        .pbd-inner { max-width: 920px; margin: 0 auto; }
        .pbd-back {
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); text-decoration: none;
          display: inline-block; margin-bottom: 24px;
          transition: color .2s;
        }
        .pbd-back:hover { color: var(--gold); }
      `}</style>
    </main>
  );
}
