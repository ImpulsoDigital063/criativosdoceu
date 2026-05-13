import { serverSupabase } from "@/lib/supabase";
import BriefingViewer from "./BriefingViewer";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Briefing · Painel",
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
.pbd-blocked { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bf-bg); padding: 32px; font-family: var(--font-inter), sans-serif; }
.pbd-blocked-card { max-width: 420px; text-align: center; background: #fff; border: 1px solid var(--bf-border); padding: 48px 32px; color: var(--bf-text); }
.pbd-blocked-card h1 { font-family: var(--font-bebas), sans-serif; font-size: 36px; letter-spacing: 0.02em; color: var(--bf-text); margin-bottom: 12px; }
.pbd-blocked-card p { color: var(--bf-text-soft); font-size: 14px; }

.pbd-page { min-height: 100vh; background: var(--bf-bg); color: var(--bf-text); padding: 40px 24px 64px; font-family: var(--font-inter), sans-serif; }
.pbd-inner { max-width: 880px; margin: 0 auto; }
.pbd-back { font-size: 12px; letter-spacing: 0.04em; color: var(--bf-text-muted); text-decoration: none; display: inline-block; margin-bottom: 24px; transition: color .2s; }
.pbd-back:hover { color: var(--bf-gold-deep); }
`;

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
        <style>{STYLES}</style>
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
      <style>{STYLES}</style>
    </main>
  );
}
