import { NextResponse } from "next/server";
import { serverSupabase } from "@/lib/supabase";

const SLUG_REGEX = /^[a-z0-9-]{2,40}$/;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug")?.toLowerCase().trim();
  if (!slug || !SLUG_REGEX.test(slug)) {
    return NextResponse.json({ error: "slug inválido" }, { status: 400 });
  }

  const sb = serverSupabase();
  const { data, error } = await sb
    .from("briefings")
    .select("slug, name, data, status, progress, updated_at")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ briefing: data ?? null });
}

export async function PUT(request: Request) {
  let body: {
    slug?: string;
    name?: string | null;
    data?: unknown;
    progress?: number;
    status?: "draft" | "completed";
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "json inválido" }, { status: 400 });
  }

  const slug = body.slug?.toLowerCase().trim();
  if (!slug || !SLUG_REGEX.test(slug)) {
    return NextResponse.json({ error: "slug inválido" }, { status: 400 });
  }

  const progress = Math.max(0, Math.min(20, Number(body.progress ?? 0)));
  const status = body.status === "completed" ? "completed" : "draft";

  const sb = serverSupabase();
  const { data, error } = await sb
    .from("briefings")
    .upsert(
      {
        slug,
        name: body.name ?? null,
        data: body.data ?? {},
        progress,
        status,
      },
      { onConflict: "slug" }
    )
    .select("slug, status, progress, updated_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, briefing: data });
}
