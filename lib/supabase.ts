import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const SUPABASE_SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export type BriefingRow = {
  slug: string;
  name: string | null;
  data: unknown;
  status: "draft" | "completed";
  progress: number;
  created_at: string;
  updated_at: string;
};

let _browser: SupabaseClient | null = null;
export function browserSupabase(): SupabaseClient {
  if (_browser) return _browser;
  _browser = createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: { persistSession: false },
  });
  return _browser;
}

export function serverSupabase(): SupabaseClient {
  return createClient(SUPABASE_URL, SUPABASE_SERVICE, {
    auth: { persistSession: false },
  });
}
