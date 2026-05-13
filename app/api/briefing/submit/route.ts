import { NextResponse } from "next/server";
import { Resend } from "resend";
import { briefingSchema, type BriefingData } from "@/lib/briefing-schema";

const TO_EMAIL = "edubchaves5@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Criativos do Ceu <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = briefingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("[briefing-criativosdoceu] RESEND_API_KEY não configurado");
      return NextResponse.json({
        ok: true,
        warning: "email não enviado (configurar RESEND_API_KEY)",
      });
    }

    const resend = new Resend(apiKey);
    const html = renderBriefingEmail(data);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `✦ Briefing Criativos do Céu preenchido — ${data.nome}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[briefing-criativosdoceu] erro:", error);
    return NextResponse.json(
      { error: "Erro ao processar briefing" },
      { status: 500 }
    );
  }
}

// =====================================================================
// HELPERS
// =====================================================================

function escape(text: string | undefined | null): string {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fmtList(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return "<em style='color:#999'>—</em>";
  return `<ul style='margin:4px 0 0 18px;padding:0'>${arr
    .map((x) => `<li>${escape(x)}</li>`)
    .join("")}</ul>`;
}

function fmtRow(label: string, value: string | number | undefined): string {
  const v = value === 0 || value === "" || value == null ? "—" : value;
  return `<tr>
    <td style='padding:8px 14px 8px 0;color:#888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;width:230px;vertical-align:top'>${label}</td>
    <td style='padding:8px 0;font-size:14px;color:#1a1a1a;line-height:1.6'>${escape(String(v))}</td>
  </tr>`;
}

function fmtTextarea(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<div style="margin:12px 0">
    <p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;color:#888;letter-spacing:0.06em">${label}</p>
    <div style="background:#0f0f0f;color:#eee;padding:14px 18px;border-radius:8px;border-left:3px solid #c8a44a;line-height:1.7;font-size:14px;white-space:pre-wrap">${escape(value)}</div>
  </div>`;
}

function renderBriefingEmail(d: BriefingData): string {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f5f5f5; color: #1a1a1a; padding: 24px; margin: 0; }
.container { max-width: 760px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 36px; box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
h1 { color: #c8a44a; margin: 0 0 6px; font-size: 28px; letter-spacing: 0.02em; }
h2 { color: #1a1a1a; margin: 36px 0 14px; font-size: 17px; padding-bottom: 10px; border-bottom: 2px solid #c8a44a; letter-spacing: 0.04em; text-transform: uppercase; }
h3 { color: #444; margin: 18px 0 6px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
.card { background: #fafafa; padding: 16px 20px; border-radius: 10px; margin-bottom: 12px; border: 1px solid rgba(0,0,0,0.06); }
table { border-collapse: collapse; width: 100%; }
.highlight { background: #fef9e6; border-left: 4px solid #c8a44a; padding: 14px 18px; border-radius: 8px; margin: 12px 0; font-size:14px; line-height:1.7; }
.diamond { background: #1a1a1a; color: #fff; padding: 18px 22px; border-radius: 12px; margin: 14px 0; border-left: 4px solid #c8a44a; }
.diamond p { color: #c8a44a; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin:0 0 6px; }
.diamond div { color: #f0e9d5; line-height:1.7; font-size:15px; white-space: pre-wrap; }
ul { margin: 4px 0 4px 18px; padding: 0; }
.footer { margin-top: 36px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
.tag { display: inline-block; background: #c8a44a; color: #fff; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.06em; vertical-align: middle; margin-left: 8px; }
</style>
</head>
<body>
<div class="container">
  <h1>✦ Briefing Criativos do Céu</h1>
  <p style="color:#666; margin: 0 0 4px;"><strong>${escape(d.nome)}</strong> respondeu o briefing — base pra finalizar a LP, plano de negócio e cronograma de lançamento.</p>
  <p style="color:#888; margin: 0 0 24px; font-size:13px;">WhatsApp: ${escape(d.whatsapp)} · Canal preferido: ${escape(d.canalDuvidas)} · Tempo reservado: ${escape(d.tempoResposta)}</p>

  <h2>1 · Identidade + Hero</h2>
  <div class="card"><table>
    ${fmtRow("Como ser apresentado", d.apresentacao)}
    ${d.apresentacaoOutro ? fmtRow("Apresentação · outro", d.apresentacaoOutro) : ""}
    ${fmtRow("Frase-síntese", d.fraseMatheus)}
    ${fmtRow("Hero escolhido", d.heroEscolha)}
    ${d.heroOutro ? fmtRow("Hero · outro", d.heroOutro) : ""}
    ${fmtRow("Subtítulo escolhido", d.subtituloEscolha)}
    ${d.subtituloOutro ? fmtRow("Subtítulo · outro", d.subtituloOutro) : ""}
    ${fmtRow("CTA escolhido", d.ctaEscolha)}
    ${d.ctaOutro ? fmtRow("CTA · outro", d.ctaOutro) : ""}
  </table></div>

  <h2>2 · Posicionamento estético</h2>
  <div class="highlight"><strong>Escolha:</strong> ${escape(d.posicionamentoEstetico)}</div>
  ${d.posicionamentoOutro ? `<div class="card"><strong>Outro:</strong> ${escape(d.posicionamentoOutro)}</div>` : ""}
  ${fmtTextarea("Referências de marca", d.referenciasMarca)}
  <div class="card"><table>
    ${fmtRow("Visual da LP", d.visualLP)}
    ${d.visualLPOutro ? fmtRow("Visual · outro", d.visualLPOutro) : ""}
    ${fmtRow("Logo da marca", d.logoDecisao)}
    ${d.logoDecisaoOutro ? fmtRow("Logo · outro", d.logoDecisaoOutro) : ""}
  </table></div>

  <h2>3 · Estilos + Categorias</h2>
  <h3>Estilos confirmados</h3>
  <div class="card">${fmtList(d.estilos)}${d.estiloOutro ? `<p style="margin:8px 0 0;font-size:13px"><strong>Outro:</strong> ${escape(d.estiloOutro)}</p>` : ""}</div>
  <h3>Categorias / temas (substitui "+30")</h3>
  <div class="card">${fmtList(d.categorias)}${d.categoriaOutro ? `<p style="margin:8px 0 0;font-size:13px"><strong>Outros:</strong> ${escape(d.categoriaOutro)}</p>` : ""}</div>
  ${d.numCategoriasComunicar ? `<div class="card"><strong>N° pra comunicar:</strong> ${escape(d.numCategoriasComunicar)}</div>` : ""}

  <h2>4 · Portfolio (15 PSDs)</h2>
  ${fmtTextarea("Histórico de cada peça", d.psdHistoricos)}
  <div class="card"><table>
    ${fmtRow("Decisão galeria", d.galeriaDecisao)}
  </table></div>
  ${fmtTextarea("Novas peças/portfolios", d.novasPecas)}

  <h2>5 · Modelo de entrega</h2>
  <div class="card"><table>
    ${fmtRow("Volume semanal", d.volumeSemanal)}
    ${fmtRow("Camadas separadas (textura/LUT/fundo)", d.camadasSeparadas === "sim" ? "Sim" : "Vai ajustar")}
    ${fmtRow("Organização Drive", d.organizacaoDrive)}
    ${d.organizacaoOutro ? fmtRow("Organização · outro", d.organizacaoOutro) : ""}
    ${fmtRow("Dia de upload", d.diaUpload)}
    ${d.diaUploadOutro ? fmtRow("Dia · outro", d.diaUploadOutro) : ""}
    ${fmtRow("VIP status", d.vipStatus)}
    ${d.vipLink ? fmtRow("VIP link", d.vipLink) : ""}
  </table></div>
  <h3>Formatos por PSD</h3>
  <div class="card">${fmtList(d.formatosPorPSD)}${d.formatoOutro ? `<p style="margin:8px 0 0;font-size:13px"><strong>Outro:</strong> ${escape(d.formatoOutro)}</p>` : ""}</div>
  ${fmtTextarea("Conteúdo planejado pro VIP", d.vipConteudo)}

  <h2>6 · Preço</h2>
  <div class="card"><table>
    ${fmtRow("Estratégia de preço", d.precoEscolha)}
    ${d.precoOutro ? fmtRow("Preço · outro", d.precoOutro) : ""}
    ${fmtRow("Trial R$ 1 / 7 dias", d.trialR1)}
    ${fmtRow("Plano vitalício paralelo", d.vitalicio)}
  </table></div>

  <h2>7 · Prova social</h2>
  <div class="card"><table>
    ${fmtRow("Decisão prova social", d.provaSocialDecisao)}
    ${fmtRow("Vídeo Pr. Robson", d.videoPrRobson)}
    ${d.videoOutro ? fmtRow("Vídeo · outro", d.videoOutro) : ""}
  </table></div>
  <h3>Candidatos a depoimento</h3>
  <div class="card">${fmtList(d.depoimentosCandidatos)}${d.depoimentosOutros ? `<p style="margin:8px 0 0;font-size:13px"><strong>Outros:</strong> ${escape(d.depoimentosOutros)}</p>` : ""}</div>

  <h2>8 · Lançamento Palmas</h2>
  <h3>Igrejas que conheço</h3>
  <div class="card">${fmtList(d.igrejasConheco)}</div>
  <h3>Igrejas que já trabalhei</h3>
  <div class="card">${fmtList(d.igrejasTrabalho)}</div>
  <h3>Igrejas com contato direto</h3>
  <div class="card">${fmtList(d.igrejasContato)}</div>
  ${fmtTextarea("Outras igrejas que faltam na lista", d.igrejasOutras)}
  <div class="card"><table>
    ${fmtRow("Capital da Fé 2027 · pack temático", d.capitalFe)}
    ${d.capitalFeOutro ? fmtRow("Capital da Fé · outro", d.capitalFeOutro) : ""}
  </table></div>
  ${fmtTextarea("Outros eventos pra atacar", d.outrosEventos)}
  <h3>Correções identificadas</h3>
  <div class="card"><table>
    ${fmtRow("Behance → IG ativo", d.atualizaBehance)}
    ${d.atualizaBehanceOutro ? fmtRow("Behance · outro", d.atualizaBehanceOutro) : ""}
    ${fmtRow("Bio @ressildesign", d.atualizaBioRessil)}
    ${d.atualizaBioRessilOutro ? fmtRow("Bio Ressil · outro", d.atualizaBioRessilOutro) : ""}
    ${fmtRow("Bio @matheusreis.co", d.atualizaBioPessoal)}
    ${d.atualizaBioPessoalOutro ? fmtRow("Bio pessoal · outro", d.atualizaBioPessoalOutro) : ""}
    ${fmtRow("Destaque 'Pack' no Ressil", d.destaquePack)}
  </table></div>

  <h2>9 · Reação aos dados de mercado</h2>
  ${fmtTextarea("O que o Matheus achou dos números", d.reacaoDados)}

  <h2>10 · Co-criação</h2>
  ${d.sonhoReal ? `<div class="card"><p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;color:#888;letter-spacing:0.06em">Sonho real · 12m</p><p style="margin:0;line-height:1.7;white-space:pre-wrap">${escape(d.sonhoReal)}</p></div>` : ""}
  ${d.faltando ? `<div class="card"><p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;color:#888;letter-spacing:0.06em">O que tá faltando</p><p style="margin:0;line-height:1.7;white-space:pre-wrap">${escape(d.faltando)}</p></div>` : ""}
  ${d.ideiaOriginal ? `<div class="diamond"><p>💎 Ideia ORIGINAL do Matheus</p><div>${escape(d.ideiaOriginal)}</div></div>` : ""}
  ${d.remuneracao ? `<div class="card"><p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;color:#888;letter-spacing:0.06em">Modelo de remuneração futuro</p><p style="margin:0;line-height:1.7;white-space:pre-wrap">${escape(d.remuneracao)}</p></div>` : ""}

  <div class="footer">
    Enviado automaticamente via criativosdoceu.com/briefing<br>
    Criativos do Céu · Impulso Digital · ${new Date().toLocaleString("pt-BR")}
  </div>
</div>
</body>
</html>`;
}
