import { z } from "zod";

// =====================================================================
// BRIEFING CRIATIVOS DO CÉU · Matheus Ressil — V1 (13/05/2026)
// =====================================================================
// 10 blocos consultivos. Mostra o que já está pronto, pede direção.
// Não terapia, não pep talk — só decisões táticas + dados de mercado.
// =====================================================================

// ─────────────────────────────────────────────────────────────────
// OPÇÕES PRÉ-DEFINIDAS
// ─────────────────────────────────────────────────────────────────

export const CANAL_DUVIDAS = [
  "WhatsApp",
  "DM Insta",
  "Áudio",
  "Vou só responder aqui",
] as const;

export const TEMPO_RESPOSTA = [
  "20-30 min (resposta rápida)",
  "1h+ (vou caprichar)",
  "Em partes ao longo do dia",
] as const;

export const APRESENTACAO = [
  "A · Atual — Designer especializado em comunicação para igrejas",
  "B · Insider Base Church — Creative Director, Singer & Preacher da Base Church · Palmas-TO",
  "C · Híbrido bio Insta — Cristão · Cantor & Comunicador · Designer pra Igrejas",
] as const;

export const HERO_OPCOES = [
  "A · Atual — Chega de artes amadoras. A sua igreja merece templates profissionais prontos para editar.",
  "B · Padrão Base — PSDs prontos pro culto. Padrão Base Church, todo mês no seu Photoshop.",
  "C · Insider — PSDs feitos pelo Creative Director da Base Church. Pra sua igreja comunicar como referência.",
] as const;

export const SUBTITULO_HERO = [
  "A · Atual — Sem contratar designer, sem horas no zero",
  "B · Direto — X PSDs novos por semana · estética cult-modern · sem clichê gospel",
] as const;

export const CTA_HERO = [
  "A · Quero meus PSDs Agora (atual)",
  "B · Testar 7 dias por R$ 1",
  "C · Garantir Acesso",
] as const;

export const POSICIONAMENTO_ESTETICO = [
  "A · Cult-modern puro — Pra igreja Gen Z urbana · estética minimalista · sem clichê gospel",
  "B · Híbrido com peso cult-modern — entrega os 2, mas vende como moderno",
  "C · Gospel tradicional — entra direto na briga com KDG/Design Santo",
] as const;

export const ESTILOS = [
  "Cinematográfico",
  "Editorial",
  "Gospel tradicional",
  "Teen / Jovem (Cultasso na Base)",
  "Feminino (Rede de Mulheres / Dia das Mães)",
  "Infantil",
  "3D",
  "Y2K",
  "Masculino (Rede de Homens)",
  "Missões",
] as const;

export const CATEGORIAS = [
  "Culto Domingo",
  "Culto Quarta / Meio de semana",
  "Santa Ceia",
  "Batismo",
  "Convite '1ª vez aqui?'",
  "Pós-culto / 'Domingo extraordinário'",
  "Versículo bíblico (cards)",
  "Série de pregação",
  "Conferência / Congresso",
  "Semana de Oração",
  "Vigília",
  "Rede de Jovens",
  "Rede de Homens",
  "Rede de Mulheres",
  "Rede Kids / Infantil",
  "Dia das Mães",
  "Dia dos Pais",
  "Páscoa",
  "Natal / Cantata",
  "Aniversário da igreja",
  "Missões / Mission Trip",
  "Casamento / Curso de Noivos",
  "Logos / Branding (sub-marcas)",
  "Stories diários",
  "Pauta semanal",
  "Capa de YouTube / lives",
] as const;

export const VOLUME_SEMANAL = [
  "3/semana (~12/mês · ~144/ano)",
  "4/semana",
  "5/semana (~20/mês · ~240/ano)",
  "7/semana (1/dia)",
] as const;

export const FORMATOS_POR_PSD = [
  "Feed 1:1 (1080×1080)",
  "Story 9:16",
  "Capa 16:9 (YouTube/wide)",
  "Pacote completo (os 3 juntos)",
] as const;

export const ORGANIZACAO_DRIVE = [
  "Por estilo (Cinematográfico / Editorial / etc)",
  "Por categoria (Culto / Conferência / Datas / etc)",
  "Por mês (Maio 2026 / Junho 2026 / ...)",
  "Híbrido por mês + categoria",
] as const;

export const DIA_UPLOAD = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta (fechando a semana pra igreja preparar domingo)",
  "Vou postando ao longo da semana",
] as const;

export const VIP_STATUS = [
  "Já existe",
  "Ainda vou criar — me ajudem com setup",
] as const;

export const PRECO_OPCOES = [
  "A · Manter R$ 37,90/mês · R$ 197/ano",
  "B · Premium R$ 47/mês · R$ 297/ano (recomendado)",
  "C · Agressivo lançamento R$ 27 1º mês → R$ 37,90",
] as const;

export const TRIAL_R1 = [
  "Sim",
  "Não",
  "Quero entender melhor antes de decidir",
] as const;

export const VITALICIO = [
  "Sim, vamos testar",
  "Não, só assinatura",
  "Daqui 3-6 meses",
] as const;

export const PROVA_SOCIAL_DECISAO = [
  "Remover seção até ter depoimentos reais",
  "Substituir por screenshots Insta da Base Church (top posts)",
  "Coletar 3-5 depoimentos reais",
] as const;

export const DEPOIMENTOS_CANDIDATOS = [
  "Pastor Robson Correa (endossante interno Base)",
  "Pastora Fabiana Correa",
  "Eu mesmo (como criador, falando sobre o pack)",
] as const;

export const VIDEO_PR_ROBSON = [
  "Sim, gravo essa semana",
  "Sim, mas vou conversar com ele primeiro",
  "Não, prefiro outra abordagem",
] as const;

export const IGREJAS_ALVO = [
  "Base Church (case 0)",
  "Lagoinha Palmas (@lagoinhapalmasto)",
  "Igreja Esperança TO (@igrejaesperancato)",
  "Igreja Fonte da Vida (@fontedavidapalmas)",
  "Igreja Batista Lago Norte (@iblnpalmas)",
  "IPI Central de Palmas (@ipipalmas)",
  "Bola de Neve Palmas",
  "1ª Igreja Batista de Palmas (@pibdepalmas)",
  "ICEB Metropolitana",
  "New Level (Rede Jovens Base)",
] as const;

export const CAPITAL_FE = [
  "Sim, topo criar pack temático",
  "Sim, mas vamos definir escopo juntos",
  "Prefiro mirar outro evento",
  "Ainda não — focar em mensal primeiro",
] as const;

export const ATUALIZA_BEHANCE = [
  "Sim, atualizar pra @matheusreis.co",
  "Não, vou criar @matheusreis.design",
  "Outro",
] as const;

export const ATUALIZA_BIO_RESSIL = [
  "Sim, trocar pra criativosdoceu.com",
  "Quero outra abordagem",
] as const;

export const ATUALIZA_BIO_PESSOAL = [
  "Sim, adicionar Criativos do Céu",
  "Outro",
] as const;

export const DESTAQUE_PACK = [
  "Sim, monto destaque dedicado",
  "Sim, com sua ajuda na curadoria",
  "Não, prefiro outra abordagem",
] as const;

export const GALERIA_DECISAO = [
  "Substituir 5 peças por screenshots da Base",
  "Misturar (manter as 15 + adicionar 5 da Base)",
  "Manter as 15 atuais",
] as const;

// ─────────────────────────────────────────────────────────────────
// SCHEMA Zod — 10 blocos
// ─────────────────────────────────────────────────────────────────

export const briefingSchema = z.object({
  // BLOCO 0 · Identificação
  nome: z.string().min(2, "Como te chamamos?"),
  whatsapp: z.string().min(8, "WhatsApp pra alinhar"),
  canalDuvidas: z.string().min(1),
  tempoResposta: z.string().min(1),

  // BLOCO 1 · Identidade + Hero
  apresentacao: z.string().min(1, "Escolhe como ser apresentado"),
  apresentacaoOutro: z.string().optional(),
  fraseMatheus: z.string().optional(),
  heroEscolha: z.string().min(1),
  heroOutro: z.string().optional(),
  subtituloEscolha: z.string().min(1),
  subtituloOutro: z.string().optional(),
  ctaEscolha: z.string().min(1),
  ctaOutro: z.string().optional(),

  // BLOCO 2 · Posicionamento estético
  posicionamentoEstetico: z.string().min(1),
  posicionamentoOutro: z.string().optional(),
  referenciasMarca: z.string().optional(),

  // BLOCO 3 · Estilos + Categorias
  estilos: z.array(z.string()).min(1, "Confirma pelo menos 1 estilo"),
  estiloOutro: z.string().optional(),
  categorias: z.array(z.string()).min(1, "Marca pelo menos 1 categoria"),
  categoriaOutro: z.string().optional(),
  numCategoriasComunicar: z.string().optional(),

  // BLOCO 4 · Portfolio (15 PSDs)
  psdHistoricos: z.string().optional(),
  galeriaDecisao: z.string().min(1),
  novasPecas: z.string().optional(),

  // BLOCO 5 · Modelo de entrega
  volumeSemanal: z.string().min(1),
  formatosPorPSD: z.array(z.string()).min(1),
  formatoOutro: z.string().optional(),
  camadasSeparadas: z.enum(["sim", "vou_ajustar"]),
  organizacaoDrive: z.string().min(1),
  organizacaoOutro: z.string().optional(),
  diaUpload: z.string().min(1),
  diaUploadOutro: z.string().optional(),
  vipStatus: z.string().min(1),
  vipLink: z.string().optional(),
  vipConteudo: z.string().optional(),

  // BLOCO 6 · Preço
  precoEscolha: z.string().min(1),
  precoOutro: z.string().optional(),
  trialR1: z.string().min(1),
  vitalicio: z.string().min(1),

  // BLOCO 7 · Prova social
  provaSocialDecisao: z.string().min(1),
  depoimentosCandidatos: z.array(z.string()).optional(),
  depoimentosOutros: z.string().optional(),
  videoPrRobson: z.string().min(1),
  videoOutro: z.string().optional(),

  // BLOCO 8 · Lançamento Palmas
  igrejasConheco: z.array(z.string()).optional(),
  igrejasTrabalho: z.array(z.string()).optional(),
  igrejasContato: z.array(z.string()).optional(),
  igrejasOutras: z.string().optional(),
  capitalFe: z.string().min(1),
  capitalFeOutro: z.string().optional(),
  outrosEventos: z.string().optional(),
  atualizaBehance: z.string().min(1),
  atualizaBehanceOutro: z.string().optional(),
  atualizaBioRessil: z.string().min(1),
  atualizaBioRessilOutro: z.string().optional(),
  atualizaBioPessoal: z.string().min(1),
  atualizaBioPessoalOutro: z.string().optional(),
  destaquePack: z.string().min(1),

  // BLOCO 9 · Tamanho da oportunidade (só reação aos dados)
  reacaoDados: z.string().optional(),

  // BLOCO 10 · Co-criação
  sonhoReal: z.string().optional(),
  faltando: z.string().optional(),
  ideiaOriginal: z.string().optional(),
  remuneracao: z.string().optional(),
});

export type BriefingData = z.infer<typeof briefingSchema>;

// ─────────────────────────────────────────────────────────────────
// Defaults
// ─────────────────────────────────────────────────────────────────

export const briefingDefaults: BriefingData = {
  nome: "",
  whatsapp: "",
  canalDuvidas: "",
  tempoResposta: "",

  apresentacao: "",
  apresentacaoOutro: "",
  fraseMatheus: "",
  heroEscolha: "",
  heroOutro: "",
  subtituloEscolha: "",
  subtituloOutro: "",
  ctaEscolha: "",
  ctaOutro: "",

  posicionamentoEstetico: "",
  posicionamentoOutro: "",
  referenciasMarca: "",

  estilos: [],
  estiloOutro: "",
  categorias: [],
  categoriaOutro: "",
  numCategoriasComunicar: "",

  psdHistoricos: "",
  galeriaDecisao: "",
  novasPecas: "",

  volumeSemanal: "",
  formatosPorPSD: [],
  formatoOutro: "",
  camadasSeparadas: "sim",
  organizacaoDrive: "",
  organizacaoOutro: "",
  diaUpload: "",
  diaUploadOutro: "",
  vipStatus: "",
  vipLink: "",
  vipConteudo: "",

  precoEscolha: "",
  precoOutro: "",
  trialR1: "",
  vitalicio: "",

  provaSocialDecisao: "",
  depoimentosCandidatos: [],
  depoimentosOutros: "",
  videoPrRobson: "",
  videoOutro: "",

  igrejasConheco: [],
  igrejasTrabalho: [],
  igrejasContato: [],
  igrejasOutras: "",
  capitalFe: "",
  capitalFeOutro: "",
  outrosEventos: "",
  atualizaBehance: "",
  atualizaBehanceOutro: "",
  atualizaBioRessil: "",
  atualizaBioRessilOutro: "",
  atualizaBioPessoal: "",
  atualizaBioPessoalOutro: "",
  destaquePack: "",

  reacaoDados: "",

  sonhoReal: "",
  faltando: "",
  ideiaOriginal: "",
  remuneracao: "",
};
