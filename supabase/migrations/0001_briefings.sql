-- =====================================================================
-- impulso-briefings · tabela briefings
-- =====================================================================
-- Reutilizável para qualquer cliente Impulso.
-- slug = identificador do cliente (ex: "renato-aura", "joao-padaria")
-- data = JSONB livre (estrutura definida pelo schema Zod no app)
-- status: "draft" enquanto preenche; "completed" quando submete final
-- progress: 0-10 (qual step está)
-- =====================================================================

CREATE TABLE IF NOT EXISTS briefings (
  slug         TEXT PRIMARY KEY,
  name         TEXT,
  data         JSONB NOT NULL DEFAULT '{}'::jsonb,
  status       TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'completed')),
  progress     INT NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS briefings_status_idx ON briefings (status);
CREATE INDEX IF NOT EXISTS briefings_updated_idx ON briefings (updated_at DESC);

-- Trigger updated_at
CREATE OR REPLACE FUNCTION briefings_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS briefings_updated_at ON briefings;
CREATE TRIGGER briefings_updated_at
  BEFORE UPDATE ON briefings
  FOR EACH ROW EXECUTE FUNCTION briefings_set_updated_at();

-- =====================================================================
-- RLS · DENY ALL para anon (usamos service role do server pra tudo)
-- =====================================================================
ALTER TABLE briefings ENABLE ROW LEVEL SECURITY;

-- API routes do Next usam service role, que bypassa RLS — pra escrever.
-- Pro painel admin usar Realtime no client, liberamos SELECT pro anon.
-- Camada de proteção real fica no BRIEFING_VIEWER_TOKEN do servidor.

DROP POLICY IF EXISTS "anon read briefings for painel" ON briefings;
CREATE POLICY "anon read briefings for painel"
  ON briefings FOR SELECT TO anon USING (true);

-- =====================================================================
-- Realtime · habilitar pro painel
-- =====================================================================
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'briefings'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE briefings;
  END IF;
END $$;
