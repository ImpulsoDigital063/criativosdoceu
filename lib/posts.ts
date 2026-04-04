export type Post = {
  slug: string
  title: string
  subtitle: string
  category: string
  readTime: string
  date: string
  excerpt: string
  accent: 'gold' | 'crimson' | 'electric'
  body: Section[]
}

export type Section = {
  type: 'h2' | 'h3' | 'p' | 'quote' | 'list' | 'callout' | 'cta-inline' | 'divider'
  content: string
  items?: string[]
  ctaLabel?: string
  ctaHref?: string
}

export const posts: Post[] = [
  /* ═══════════════════════════════════════════════════
     ARTIGO 1 — DESIGN IMPORTA PARA IGREJAS
  ═══════════════════════════════════════════════════ */
  {
    slug: 'design-importa-para-igrejas',
    title: 'Por que o Design da sua Igreja importa mais do que você pensa',
    subtitle: 'A primeira impressão acontece em 50 milissegundos — e ela está no visual.',
    category: 'Comunicação',
    readTime: '9 min',
    date: '18 mar 2026',
    accent: 'gold',
    excerpt:
      'Antes de ouvir uma mensagem, as pessoas julgam pela aparência. Entenda como a identidade visual da sua igreja fala por ela — antes mesmo do culto começar.',
    body: [
      {
        type: 'p',
        content:
          'Imagine que você está passando por uma cidade desconhecida e precisa encontrar uma igreja para um culto. Duas comunidades aparecem no Instagram: a primeira tem posts pixelados, fontes misturadas e cores que parecem escolhidas ao acaso. A segunda tem artes coesas, tipografia limpa e uma identidade visual que transmite propósito e cuidado. Qual das duas você visitaria?',
      },
      {
        type: 'p',
        content:
          'A resposta parece óbvia — e é justamente isso que as artes da sua igreja estão comunicando todos os dias, em silêncio, para centenas ou milhares de pessoas que passam pelo seu perfil sem nunca terem pisado no seu salão.',
      },
      {
        type: 'h2',
        content: 'O julgamento acontece antes da mensagem',
      },
      {
        type: 'p',
        content:
          'Estudos de neurociência aplicada ao comportamento do consumidor mostram que o cérebro humano forma uma opinião sobre uma experiência visual em menos de 50 milissegundos. Isso não é superficialidade — é biologia. Nosso sistema de percepção avalia padrão, coerência e intenção antes de qualquer análise consciente. Esse mecanismo de sobrevivência que nos ajudou a identificar ameaças na savana agora é o mesmo que decide se alguém para no post da sua igreja ou rola o feed.',
      },
      {
        type: 'p',
        content:
          'Para a igreja, isso significa que uma arte de domingo mal executada não é apenas um detalhe estético: ela comunica, de forma não verbal, o nível de cuidado que a liderança tem com a experiência de quem está chegando. Numa era em que mais de 80% das pessoas pesquisam uma organização nas redes antes de visitá-la presencialmente, esse cuidado visual precisa existir desde o primeiro ponto de contato.',
      },
      {
        type: 'quote',
        content:
          '"A qualidade visual de uma igreja não fala sobre quanto dinheiro ela tem — fala sobre quanto ela valoriza quem ainda não entrou pela porta."',
      },
      {
        type: 'h2',
        content: 'Design não é vaidade — é hospitalidade',
      },
      {
        type: 'p',
        content:
          'Existe uma narrativa equivocada no meio cristão de que investir em visual é vaidade, ou que "o que importa é a Palavra". Mas a hospitalidade sempre foi parte integral do evangelho. Preparar o ambiente, cuidar dos detalhes, pensar em quem vai receber — isso é amor prático. Pedro nos instrui a ser hospitaleiros sem murmurar (1 Pedro 4:9). E hospitabilidade, no século XXI, começa antes da porta física.',
      },
      {
        type: 'p',
        content:
          'O design de qualidade é a hospitalidade digital da sua igreja. Ele diz antes de qualquer palavra: "Pensamos em você antes de você chegar. Você é esperado aqui. Este lugar foi preparado com cuidado." Essa mensagem silenciosa cria predisposição emocional positiva — e predisposição positiva é o terreno onde o evangelho germina.',
      },
      {
        type: 'list',
        content: 'Quatro formas em que o design profissional age como hospitalidade:',
        items: [
          'Clareza — informações de culto, eventos e séries apresentadas de forma fácil de ler e memorizar',
          'Coerência — identidade visual consistente que cria familiaridade e confiança ao longo do tempo',
          'Cuidado — acabamento e atenção aos detalhes que comunica seriedade e respeito pelo público',
          'Convite — artes que as pessoas têm orgulho de compartilhar, transformando membros em embaixadores',
        ],
      },
      {
        type: 'cta-inline',
        content: 'Quer ver como PSDs profissionais transformam a comunicação de uma igreja?',
        ctaLabel: 'Conhecer o New Pack Church Design',
        ctaHref: '/#planos',
      },
      {
        type: 'h2',
        content: 'A neurologia da confiança visual',
      },
      {
        type: 'p',
        content:
          'Confiança não é apenas um valor moral — é também uma resposta neurológica. O cérebro associa qualidade visual a competência. Quando vemos algo bem-feito, o sistema límbico registra: "Estas pessoas sabem o que estão fazendo." Essa associação é automática, universal e quase impossível de suspender por vontade própria.',
      },
      {
        type: 'p',
        content:
          'Para o visitante potencial da sua igreja, a qualidade visual das artes nas redes sociais é o único dado disponível antes da visita presencial. É o currículo que sua congregação apresenta ao mundo. E como todo currículo, ele precisa ser verdadeiro — mas também precisa estar bem apresentado.',
      },
      {
        type: 'p',
        content:
          'Igrejas que elevaram seu padrão visual relatam consistentemente um efeito colateral positivo: os próprios membros passam a falar com mais orgulho da sua comunidade para amigos e colegas. A melhoria do visual impacta não apenas a percepção de quem está fora — ela impacta o sentido de pertencimento de quem já está dentro.',
      },
      {
        type: 'h2',
        content: 'O custo real da arte amadora',
      },
      {
        type: 'p',
        content:
          'Muitas igrejas calculam o custo do design profissional em reais por arte. Raramente calculam o custo da ausência de design. Quantas pessoas chegaram ao perfil da igreja, formaram uma impressão negativa em 50 milissegundos, e nunca foram adiante? Quantos convites deixaram de ser feitos porque a arte que seria compartilhada "não ficou boa"? Quantos visitantes sentiram — mesmo sem conseguir nomear — que aquele ambiente não estava preparado para recebê-los?',
      },
      {
        type: 'p',
        content:
          'Esses números são invisíveis no relatório mensal. Não aparecem em nenhuma planilha de missões ou relatório pastoral. Mas eles existem. Cada arte amadora é uma oportunidade de conexão que não aconteceu.',
      },
      {
        type: 'p',
        content:
          'A boa notícia é que o caminho inverso — o impacto positivo de uma comunicação visual cuidadosa — também se acumula, semana após semana. É um investimento com juros compostos: cada arte bem-feita reforça a reputação da Igreja, que reforça a confiança dos membros, que gera mais convites, que traz mais visitantes, que — bem recebidos pelo visual — se tornam membros.',
      },
      {
        type: 'quote',
        content:
          '"Cada arte bem-feita é um tijoloassentado na fundação da reputação da sua igreja no mundo digital."',
      },
      {
        type: 'h2',
        content: 'Consistência vale mais que perfeição',
      },
      {
        type: 'p',
        content:
          'Um erro comum é buscar a arte perfeita ocasionalmente em vez de manter um padrão consistente toda semana. A consistência é o que cria reconhecimento de marca. O cérebro humano aprende padrões por repetição — e quando uma congregação mantém identidade visual coerente por meses, o público começa a reconhecer e associar valores àquela comunidade antes mesmo de ler o texto.',
      },
      {
        type: 'p',
        content:
          'Isso significa que uma arte de nível 7 toda semana supera uma arte de nível 10 uma vez por mês. Volume consistente de qualidade razoável constrói marca. Esforço esporádico de perfeição não.',
      },
      {
        type: 'h2',
        content: 'Por onde começar — um plano em três passos',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Defina sua paleta — escolha 2 cores principais e 1 accent. Documente os códigos HEX e nunca desvie sem motivo deliberado.',
          'Defina suas fontes — uma para títulos (display), uma para corpo. Duas fontes bem usadas superam dez fontes mal usadas.',
          'Adote templates profissionais — PSDs ou ferramentas de design com artes prontas para editar, para garantir qualidade consistente sem depender do humor criativo da equipe.',
        ],
      },
      {
        type: 'p',
        content:
          'Para igrejas que não têm designer interno — o que representa a grande maioria das igrejas brasileiras — pacotes de PSDs editáveis são o caminho mais eficiente. Eles entregam qualidade de agência sem o custo de agência, e devolvem ao líder de comunicação o que é mais escasso: tempo e energia criativa.',
      },
      {
        type: 'callout',
        content:
          'O New Pack Church Design foi criado exatamente para esse cenário: artes profissionais, prontas para personalizar no Photoshop, com novos arquivos adicionados toda semana. Sua mensagem merece uma embalagem à altura.',
        ctaLabel: 'Quero Meus PSDs Agora',
        ctaHref: '/#planos',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
     ARTIGO 2 — DESIGN TRANSFORMA ALCANCE
  ═══════════════════════════════════════════════════ */
  {
    slug: 'design-transforma-alcance-da-igreja',
    title: '5 maneiras como o Design Profissional Transforma o Alcance da sua Igreja',
    subtitle: 'Da evangelização digital ao crescimento orgânico — tudo começa no visual.',
    category: 'Evangelização',
    readTime: '10 min',
    date: '25 mar 2026',
    accent: 'electric',
    excerpt:
      'No mundo conectado de hoje, a arte que sua igreja posta tem o mesmo poder de um cartaz pregado em cada esquina da cidade. Descubra como o design profissional multiplica o alcance da mensagem.',
    body: [
      {
        type: 'p',
        content:
          'Em 2026, o Instagram de uma igreja é sua praça pública. É onde visitantes potenciais formam a primeira impressão, onde membros convidam amigos, onde a mensagem do domingo chega antes do sermão ser pregado. E nesse ambiente altamente competitivo pela atenção das pessoas, o design é o que determina se uma arte para ou passa.',
      },
      {
        type: 'p',
        content:
          'A grande comissão não mudou. O canal mudou. E hoje, parte importante da evangelização acontece nos algoritmos — onde qualidade visual não é preferência estética, é estratégia missionária.',
      },
      {
        type: 'h2',
        content: '1. Artes que as pessoas querem compartilhar',
      },
      {
        type: 'p',
        content:
          'O compartilhamento orgânico é a forma mais poderosa de evangelização digital — e é completamente gratuito. Mas ele só acontece quando a arte é boa o suficiente para que um membro sinta orgulho em associar seu nome a ela. Existe um filtro não-consciente que cada pessoa aplica antes de repostar algo: "Isso representa bem quem eu sou?"',
      },
      {
        type: 'p',
        content:
          'Uma arte profissional passa nesse filtro. Ela diz ao membro que está prestes a repostar: "Você pode se orgulhar de mostrar que faz parte disso." Quando a qualidade visual está presente, o filtro aprova. Quando não está, o membro sente um leve desconforto difuso — e o post fica sem repost. Essa decisão acontece em menos de dois segundos, e raramente é consciente.',
      },
      {
        type: 'p',
        content:
          'O impacto composto disso é enorme: uma arte compartilhada por 50 membros, cada um com 200 seguidores, alcança 10.000 pessoas — sem nenhum custo de anúncio. E esse alcance vem acompanhado de endosso social implícito: "Uma pessoa que eu conheço e respeito está associada a essa comunidade."',
      },
      {
        type: 'cta-inline',
        content: 'Veja o pack de PSDs que igrejas usam para criar artes que as pessoas querem compartilhar.',
        ctaLabel: 'Explorar o New Pack Church Design',
        ctaHref: '/#planos',
      },
      {
        type: 'h2',
        content: '2. Identidade visual que cria pertencimento e retenção',
      },
      {
        type: 'p',
        content:
          'Pertencimento é uma das necessidades humanas mais fundamentais — e o design é um dos instrumentos mais eficazes para criá-lo em escala. Quando todos os materiais de uma igreja — do culto ao retiro, do grupo de jovens à campanha de missões — compartilham a mesma linguagem visual, o membro sente que faz parte de algo bem construído, algo que foi pensado.',
      },
      {
        type: 'p',
        content:
          'Esse senso de identidade reduz a evasão. Quando um membro sente que sua congregação tem identidade clara e consistente, ele se identifica mais profundamente com ela — e identificação é o precursor do comprometimento. A pesquisa em psicologia organizacional mostra consistentemente que pertencimento percebido é um dos maiores preditores de permanência em qualquer grupo.',
      },
      {
        type: 'quote',
        content:
          '"Pertencimento é a base da retenção. Retenção é o fundamento do crescimento sustentável. E a identidade visual é um dos construtores mais subestimados de pertencimento."',
      },
      {
        type: 'p',
        content:
          'O efeito se estende ao convite: quando um membro tem orgulho do visual da sua igreja, convidar amigos torna-se natural. A primeira impressão que o convidado terá — nas redes sociais, antes de pisar no salão — será positiva. A barreira psicológica do convite diminui quando o membro sabe que o que a pessoa vai ver vai ter qualidade.',
      },
      {
        type: 'h2',
        content: '3. Alcance orgânico nas plataformas de descoberta',
      },
      {
        type: 'p',
        content:
          'Os algoritmos do Instagram, TikTok e YouTube Shorts medem engajamento inicial com precisão milimétrica. Taxa de parada (quanto tempo você fica no post antes de rolar), taxa de salvamento, taxa de compartilhamento — todos esses sinais determinam para quantas pessoas o conteúdo será entregue organicamente.',
      },
      {
        type: 'p',
        content:
          'Artes de baixa qualidade visual têm taxa de parada baixa. O algoritmo registra isso e reduz a distribuição. Artes de alta qualidade visual fazem o usuário parar — mesmo que por um segundo — e isso é suficiente para o algoritmo entender que o conteúdo é relevante e ampliar o alcance.',
      },
      {
        type: 'p',
        content:
          'Traduzindo: design profissional não é apenas sobre aparência. É sobre o algoritmo. É sobre quantas pessoas verão sua mensagem esta semana sem que você pague um centavo a mais por isso.',
      },
      {
        type: 'list',
        content: 'Métricas que design profissional impacta diretamente:',
        items: [
          'Taxa de parada — o scroll para quando a arte tem qualidade visual que chama atenção',
          'Salvamentos — artes com tipografia impactante ou frases poderosas são salvas e revisitadas',
          'Compartilhamentos — artes que geram orgulho são repostadas nos stories dos membros',
          'Alcance orgânico — algoritmos amplificam conteúdo com alto engajamento inicial',
          'Novos seguidores — perfis visualmente coesos convertem visitantes em seguidores com mais facilidade',
        ],
      },
      {
        type: 'h2',
        content: '4. Credibilidade para eventos e campanhas de evangelização',
      },
      {
        type: 'p',
        content:
          'Quando uma igreja lança uma campanha de evangelização, uma conferência ou uma semana de missões, o material visual é o primeiro argumento de convencimento — tanto para membros que vão convidar amigos, quanto para não-cristãos que verão esse material.',
      },
      {
        type: 'p',
        content:
          'Um banner bem executado comunica antes das palavras: "Este evento foi organizado com seriedade. Foi planejado por pessoas competentes. Vale a sua presença e o seu tempo." Para o não-cristão — que frequentemente tem resistência a ambientes religiosos — essa percepção de profissionalismo reduz a barreira psicológica de participação.',
      },
      {
        type: 'p',
        content:
          'Existe um paradoxo interessante aqui: quanto mais profissional e menos "religioso clichê" o material visual de uma campanha evangelística, maior a taxa de curiosidade de pessoas não-religiosas. O design profissional comunica que aquela comunidade está conectada com a realidade cultural atual — não presa em estética de décadas atrás.',
      },
      {
        type: 'list',
        content: 'Impactos do design profissional em campanhas e eventos:',
        items: [
          'Membros se sentem seguros para convidar amigos não-cristãos — sabem que a primeira impressão será boa',
          'O evento é percebido como organizado e de valor antes mesmo de acontecer',
          'Material para stories e feed gera expectativa orgânica na semana anterior ao evento',
          'Registro fotográfico do evento tem contexto visual coeso — reforça a narrativa nas redes após o evento',
          'Visitantes que não ficaram retornam ao perfil movidos pela identidade visual consistente',
        ],
      },
      {
        type: 'cta-inline',
        content: 'O New Pack inclui PSDs específicos para eventos, campanhas e séries de pregação.',
        ctaLabel: 'Ver o que está incluso no Pack',
        ctaHref: '/#incluso',
      },
      {
        type: 'h2',
        content: '5. Reconhecimento de marca e memória afetiva ao longo do tempo',
      },
      {
        type: 'p',
        content:
          'A consistência visual ao longo de meses e anos cria reconhecimento de marca — o mesmo princípio que faz você identificar uma empresa antes de ler o nome. Para uma Igreja, isso significa que pessoas que nunca pisaram no seu salão começam a reconhecer sua identidade visual nas redes e a associar valores e propósito àquela comunidade.',
      },
      {
        type: 'p',
        content:
          'Esse reconhecimento prévio é ouro para a evangelização: ele reduz a estranheza e aumenta a familiaridade. E familiaridade, comprovadamente, aumenta a probabilidade de ação. Uma pessoa que já viu o visual da sua igreja dezenas de vezes no feed de amigos tem muito menos resistência a visitar do que alguém que nunca ouviu falar.',
      },
      {
        type: 'p',
        content:
          'A memória afetiva funciona da mesma forma: quando o visual de uma comunidade está associado a momentos de alegria (um casamento lindo, uma campanha de Natal tocante, um retiro que transformou vidas), esse visual carrega essa carga emocional. Cada arte nova da sua igreja ativa inconscientemente todas as memórias positivas anteriores.',
      },
      {
        type: 'quote',
        content:
          '"Design consistente ao longo do tempo não constrói apenas marca — constrói memória afetiva. E memória afetiva é a ponte mais curta entre um desconhecido e uma decisão de fé."',
      },
      {
        type: 'h2',
        content: 'O ponto de partida prático',
      },
      {
        type: 'p',
        content:
          'Transformar o alcance da sua igreja através do design não exige um orçamento de megaigreja. Exige consistência, boas ferramentas e o compromisso de tratar a comunicação visual como ministério — não como tarefa administrativa.',
      },
      {
        type: 'p',
        content:
          'Comece por definir que tipo de comunidade você quer que as pessoas encontrem quando chegarem ao seu perfil. Depois, garanta que cada arte publicada comunique isso — com a frequência e qualidade que esse objetivo exige.',
      },
      {
        type: 'callout',
        content:
          'Com o New Pack Church Design, sua equipe tem acesso a PSDs profissionais para todas essas situações — cultos semanais, eventos especiais, campanhas de evangelização, datas comemorativas — com novos arquivos adicionados toda semana. Tudo editável no Photoshop, com qualidade de agência.',
        ctaLabel: 'Começar Agora — Acesso Imediato',
        ctaHref: '/#planos',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
     ARTIGO 3 — DA ARTE AMADORA AO PADRÃO AGÊNCIA
  ═══════════════════════════════════════════════════ */
  {
    slug: 'da-arte-amadora-ao-padrao-agencia',
    title: 'Da Arte Amadora ao Padrão de Agência: O Caminho que Igrejas Estão Percorrendo',
    subtitle: 'Você não precisa de orçamento de megaigreja para ter design de megaigreja.',
    category: 'Recursos',
    readTime: '11 min',
    date: '01 abr 2026',
    accent: 'crimson',
    excerpt:
      'A diferença entre uma arte amadora e uma arte de agência não está mais no orçamento — está nas ferramentas. Conheça o caminho que igrejas de todos os tamanhos estão percorrendo para elevar sua comunicação.',
    body: [
      {
        type: 'p',
        content:
          'Durante anos, design de qualidade de agência foi sinônimo de orçamento de agência. Uma única arte bem-feita podia custar R$150, R$300 ou mais — inviável para a realidade da maioria das igrejas brasileiras, onde o líder de comunicação frequentemente é voluntário, o Photoshop foi instalado por alguém que "manja de informática" e o orçamento de mídia é disputado com outras prioridades que parecem mais urgentes.',
      },
      {
        type: 'p',
        content:
          'Esse cenário mudou estruturalmente nos últimos anos. E entender como ele mudou — e como aproveitar essa mudança — pode ser o divisor de águas na trajetória de comunicação da sua igreja.',
      },
      {
        type: 'h2',
        content: 'O problema nunca foi falta de talento',
      },
      {
        type: 'p',
        content:
          'A maioria das igrejas tem alguém criativo na equipe de comunicação. O voluntário do design é frequentemente uma pessoa com sensibilidade visual real, que passaria horas no Photoshop ou no Canva se tivesse os recursos certos. O problema nunca foi falta de talento bruto — foi a ausência de três coisas fundamentais:',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Tempo — criar uma arte do zero consome 2-4 horas; com uma demanda recorrente semanal, isso não é sustentável para voluntários',
          'Assets profissionais — texturas de alta resolução, LUTs para tratamento de foto, fontes premium, overlays — cada um exige custo ou horas de busca',
          'Referências elevadas — sem ver o que "bom" parece nesse nicho específico, é difícil saber para onde ir',
        ],
      },
      {
        type: 'p',
        content:
          'Quando esses três elementos estão presentes, o talento natural da equipe se exprime. O gargalo não era a criatividade — era o ponto de partida. Ninguém deveria precisar construir da estaca zero toda semana quando tem uma mensagem importante a comunicar.',
      },
      {
        type: 'h2',
        content: 'O que tecnicamente separa o amador do profissional',
      },
      {
        type: 'p',
        content:
          'Existe uma diferença técnica mensurável entre arte amadora e arte de agência. Conhecer esses elementos ajuda qualquer líder de comunicação a avaliar o próprio trabalho com objetividade:',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Hierarquia tipográfica — contraste deliberado de peso, tamanho e espaçamento cria fluxo de leitura e impacto visual. Sem ela, tudo parece do mesmo nível e nada chama atenção.',
          'Paleta cromática coerente — no máximo 3 cores com regras de uso definidas. Mais do que isso cria ruído visual. Cores escolhidas por feeling sem sistema resultam em inconsistência.',
          'Composição com respiração — espaço em branco intencional não é ausência de conteúdo; é o que deixa o conteúdo existente respirar e ter peso.',
          'Texturas e profundidade — camadas de grão, sobreposições, gradientes sutis criam dimensão sem poluir o layout.',
          'Grid e alinhamento — o olho humano percebe alinhamento inconsistente mesmo quando a pessoa não sabe nomear o problema. Sensação de "algo está errado" frequentemente é grid quebrado.',
          'Tratamento fotográfico — LUTs e ajustes de cor coerentes fazem fotos de qualidades diferentes parecerem do mesmo universo visual.',
        ],
      },
      {
        type: 'p',
        content:
          'PSDs profissionais já entregam todos esses elementos como estrutura. O papel do editor passa a ser curadoria e personalização — não construção do zero. É a diferença entre cozinhar com um mise en place preparado versus lavar, cortar e preparar cada ingrediente antes de começar.',
      },
      {
        type: 'cta-inline',
        content: 'O New Pack Church Design foi construído com todos esses elementos — pronto para editar.',
        ctaLabel: 'Explorar os PSDs do Pack',
        ctaHref: '/#portfolio',
      },
      {
        type: 'h2',
        content: 'A matemática do modelo de assinatura',
      },
      {
        type: 'p',
        content:
          'O modelo de acesso a PSDs por assinatura transformou a equação econômica do design para igrejas. Vale fazer a conta explicitamente:',
      },
      {
        type: 'p',
        content:
          'Uma iglesia que precisa de 4 artes por mês — uma por culto — pagando um designer freelance, gastaria entre R$600 e R$1.200 mensais. Um evento especial adiciona mais R$300–600. Uma campanha de evangelização com 6–8 peças: R$900–1.500. O total anual facilmente ultrapassa R$12.000–18.000.',
      },
      {
        type: 'p',
        content:
          'Com um pack de PSDs por assinatura, esse mesmo volume de artes — com qualidade equivalente ou superior a um designer freelance mediano — é produzido internamente, com o mesmo template, em fração do tempo e custo. O investimento annual cai de R$12.000 para menos de R$500.',
      },
      {
        type: 'quote',
        content:
          '"Não se trata de substituir o designer — trata-se de dar ao voluntário de comunicação da sua igreja as mesmas ferramentas que um designer de agência usa. O talento já está na sua equipe."',
      },
      {
        type: 'h2',
        content: 'O processo de transição — como acontece na prática',
      },
      {
        type: 'p',
        content:
          'A transição de arte amadora para padrão profissional não precisa ser abrupta. De fato, uma mudança gradual e consistente é mais sustentável do que uma reformulação total que a equipe não consegue manter.',
      },
      {
        type: 'list',
        content: 'Um processo em 4 semanas que funciona:',
        items: [
          'Semana 1 — Defina a identidade base: paleta de cores, 2 fontes principais, logo em versões para fundos escuros e claros',
          'Semana 2 — Adote os templates para artes de culto semanal. Use sem modificações drásticas — adapte apenas texto e foto',
          'Semana 3 — Expanda para stories e posts de série. Mantenha o sistema visual da semana 1',
          'Semana 4 — Avalie: quais artes tiveram mais engajamento? Quais membros comentaram ou compartilharam? Use os dados para calibrar',
        ],
      },
      {
        type: 'p',
        content:
          'Após quatro semanas de consistência, o perfil da igreja começa a ter uma personalidade visual reconhecível. Esse é o ponto de inflexão — quando o sistema começa a trabalhar por você mesmo quando a equipe está cansada ou a semana foi corrida.',
      },
      {
        type: 'h2',
        content: 'O que muda na prática — três dimensões de impacto',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Tempo — a produção semanal de artes cai de 3-4 horas para 20-40 minutos por peça. A equipe recupera capacidade para outras frentes do ministério.',
          'Qualidade — o padrão visual sobe imediatamente, sem curva de aprendizado longa. O template faz o trabalho pesado; a equipe traz a personalidade.',
          'Moral — o líder de comunicação deixa de sentir que está "remendando" e passa a criar com confiança. Isso importa mais do que parece: voluntários que não se sentem competentes saem. Voluntários que se sentem capazes ficam e crescem.',
        ],
      },
      {
        type: 'h2',
        content: 'Uma palavra sobre autenticidade',
      },
      {
        type: 'p',
        content:
          'Uma preocupação legítima que líderes de comunicação levantam: "Se usar templates, minha comunicação vai parecer genérica?" A resposta está em como o template é usado.',
      },
      {
        type: 'p',
        content:
          'Templates profissionais são estrutura — como um bom verso de soneto. O que você coloca dentro dessa estrutura é completamente seu: as fotos da sua comunidade, os textos do seu pastor, a identidade de cor que é única da sua congregação, os rostos das pessoas que compõem o seu povo. O template garante que a embalagem seja profissional. O conteúdo garante que seja autêntico.',
      },
      {
        type: 'p',
        content:
          'As igrejas que mais se destacam visualmente nas redes não são necessariamente as que criam tudo do zero — são as que usam sistemas visuais profissionais e os preenchem com conteúdo genuíno e específico da sua realidade.',
      },
      {
        type: 'h2',
        content: 'O começo da jornada',
      },
      {
        type: 'p',
        content:
          'A jornada do amador ao profissional não exige anos de prática, curso de design ou orçamento especial. Ela começa com a decisão de usar as ferramentas certas — e com a convicção de que a mensagem que sua Igreja carrega merece a melhor embalagem que você consegue oferecer.',
      },
      {
        type: 'p',
        content:
          'Photoshop com PSDs profissionais em mãos é como ter um ateliê completo disponível a qualquer hora, qualquer dia, para qualquer membro da equipe com disposição de aprender. O que antes levava 4 horas passa a levar 30 minutos. O que antes parecia fora do alcance da sua equipe se torna o padrão semanal.',
      },
      {
        type: 'p',
        content:
          'Sua congregação merece comunicação à altura da mensagem que ela carrega. E agora, esse padrão está ao alcance de qualquer igreja — independente do tamanho, da cidade ou do orçamento disponível.',
      },
      {
        type: 'callout',
        content:
          'O New Pack Church Design foi construído pensando especificamente nessa realidade: igrejas que precisam de qualidade consistente, toda semana, sem a estrutura de uma produtora de conteúdo. PSDs profissionais, editáveis no Photoshop, com novos arquivos toda semana.',
        ctaLabel: 'Iniciar Minha Assinatura',
        ctaHref: '/#planos',
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
