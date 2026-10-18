/**
 * MODEL - textos de navegacao, secoes e rodape.
 * Separar o texto do dado e uma escolha de MVVM: a view nao "sabe" nada
 * sobre o produto, so recebe o que o viewmodel entregou.
 */

export const NAV = [
  { id: 'mundo', rotulo: 'O mundo' },
  { id: 'aparelho', rotulo: 'O VC-9' },
  { id: 'beneficios', rotulo: 'Por que funciona' },
  { id: 'galeria', rotulo: 'Do pó ao aparelho' },
  { id: 'como-funciona', rotulo: 'Como funciona' },
  { id: 'avaliacoes', rotulo: 'Avaliações' },
  { id: 'oferta', rotulo: 'Oferta' },
  { id: 'faq', rotulo: 'FAQ' },
];

export const HERO = {
  etiqueta: 'Novo · tecnologia PCM sob licença Stark Industries',
  tituloAntes: 'Quatrocentos gramas de pó.',
  tituloDestaque: 'Um aspirador inteiro.',
  subtitulo:
    'Depois do Impacto de Vharn, a Terra ficou coberta de pó que não sai de jeito ' +
    'nenhum. A Stark Industries respondeu com o Protocolo de Compactação Molecular: ' +
    'um pó que, diluído em água, reconstrói o equipamento. Você recebe 400 g disso em ' +
    'um sachê e, em 4 minutos, tem um Traclean VC-9 na pia.',
  ctaPrimario: 'Quero materializar um',
  ctaSecundario: 'Ver a reação',
  nota: 'Sem tomada, sem cabo, sem fábrica: a matéria se refaz na sua casa.',
};

export const SECOES = {
  mundo: {
    etiqueta: 'Contexto',
    titulo: 'O mundo depois do Impacto',
    subtitulo: 'Por que um aspirador virou um pó em sachê.',
  },
  aparelho: {
    etiqueta: 'O produto',
    titulo: 'Traclean VC-9',
    subtitulo: 'O aparelho que a reação entrega — modelo, aparência e capacidades fictícios.',
  },
  beneficios: {
    etiqueta: 'Diferenciais',
    titulo: 'Seis motivos para abrir o sachê',
    subtitulo: 'Cada item responde a um problema concreto do mundo pós-Impacto.',
  },
  galeria: {
    etiqueta: 'Do pó ao aparelho',
    titulo: 'Três imagens: sachê, reação, filtro',
    subtitulo: 'O caminho do material, desenhado vetorialmente.',
  },
  'como-funciona': {
    etiqueta: 'Como funciona',
    titulo: 'Rasgue, dilua, espere, aspire',
    subtitulo: 'O passo a passo da reação, sem letra miúda.',
  },
  avaliacoes: {
    etiqueta: 'Prova social',
    titulo: 'Quem já fez a reação',
    subtitulo: 'Avaliações fictícias, em um mundo igualmente fictício.',
  },
  oferta: {
    etiqueta: 'Oferta',
    titulo: 'O que vem no kit',
    subtitulo: 'Três sachês, um balde e a licença da Stark.',
  },
  faq: {
    etiqueta: 'Dúvidas',
    titulo: 'As perguntas que a gente mais recebe',
    subtitulo: 'A começar por "isso é pó mesmo?".',
  },
  chamada: {
    titulo: 'Pronto para tirar a poeira do Impacto da casa?',
    texto: 'Frete grátis, 30 dias para testar e reação garantida.',
  },
};

export const RODAPE = {
  linhas: [
    'Traclean, VC-9 e o Protocolo de Compactação Molecular são ficção, criados para a disciplina.',
    'Landing page acadêmica: 100% client-side, sem backend e sem envio de dados.',
  ],
  creditos:
    'Ilustrações vetoriais autorais · Foto do gato: Wikimedia Commons (CC0) · ' +
    'Stark Industries, o Homem de Ferro e o Impacto de Vharn são referências de ficção.',
};

export const MODAL = {
  titulo: 'Finalizar pedido',
  subtitulo: 'Simulação acadêmica: nenhum dado sai do seu navegador.',
  campos: [
    { id: 'nome', rotulo: 'Nome completo', tipo: 'text', placeholder: 'Como deve constar na nota' },
    { id: 'email', rotulo: 'E-mail', tipo: 'email', placeholder: 'voce@email.com' },
    { id: 'telefone', rotulo: 'Telefone', tipo: 'tel', placeholder: '(11) 90000-0000' },
    { id: 'cidade', rotulo: 'Cidade de entrega', tipo: 'text', placeholder: 'São Paulo' },
  ],
  check: 'Minha casa tem animal (ele vai fiscalizar a reação)',
  rodapeBotao: 'Confirmar pedido fictício',
};

export default NAV;