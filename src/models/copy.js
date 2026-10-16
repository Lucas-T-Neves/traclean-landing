/**
 * MODEL - textos de navegacao, secoes e rodape.
 * Separar o texto do dado e uma escolha de MVVM: a view nao "sabe" nada
 * sobre o produto, so recebe o que o viewmodel entregou.
 */

export const NAV = [
  { id: 'beneficios', rotulo: 'Benefícios' },
  { id: 'galeria', rotulo: 'Design' },
  { id: 'como-funciona', rotulo: 'Como funciona' },
  { id: 'avaliacoes', rotulo: 'Avaliações' },
  { id: 'oferta', rotulo: 'Oferta' },
  { id: 'faq', rotulo: 'FAQ' },
];

export const HERO = {
  etiqueta: 'Novo · Lote de lançamento',
  titulo: 'O aspirador que o gato aprova.',
  destaque: 'o gato aprova',
  subtitulo:
    '25 kPa de sucção industrial com 62 dB de silêncio. Escova que não puxa pelo, ' +
    'filtro que se limpa sozinho e um sensor que pede licença pro pet antes de sugar.',
  ctaPrimario: 'Quero o Traclean',
  ctaSecundario: 'Ver como funciona',
  nota: 'Risco zero: 30 dias para testar · 3 anos de garantia',
};

export const SECOES = {
  beneficios: {
    etiqueta: 'Diferenciais',
    titulo: 'Seis coisas que só o Traclean tem',
    subtitulo:
      'Não é "mais um aspirador". Cada item abaixo resolve uma reclamação concreta ' +
      'que ouvimos de quem tem animal em casa.',
  },
  galeria: {
    etiqueta: 'Design',
    titulo: 'Projetado para ficar à vista',
    subtitulo:
      'Nada de esconder o aspirador no armário. O Traclean foi desenhado para ficar ' +
      'no canto da sala como parte da decoração.',
  },
  'como-funciona': {
    etiqueta: 'Como funciona',
    titulo: 'Três passos, nenhum trabalho extra',
    subtitulo: 'Do sofá sujo ao depósito limpo sem lavar nada.',
  },
  avaliacoes: {
    etiqueta: 'Prova social',
    titulo: 'Quem tem gato em casa aprova',
    subtitulo: 'Avaliações fictícias, como toda esta landing page.',
  },
  oferta: {
    etiqueta: 'Oferta',
    titulo: 'Tudo o que vem na caixa',
    subtitulo: 'Preço de lançamento por tempo limitado.',
  },
  faq: {
    etiqueta: 'Dúvidas',
    titulo: 'Perguntas que a gente mais recebe',
    subtitulo: 'Incluindo a última, que quase ninguém responde.',
  },
  chamada: {
    titulo: 'Pronto para limpar sem brigar com o gato?',
    texto: 'Frete grátis, 30 dias para testar e 3 anos de garantia.',
  },
};

export const RODAPE = {
  linhas: [
    'Traclean é um produto fictício criado para a disciplina. Nenhuma compra é processada.',
    'Landing page acadêmica: 100% client-side, sem backend e sem envio de dados.',
  ],
  creditos: 'Ilustrações vetoriais autorais · Foto do gato: Wikimedia Commons (CC0)',
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
  check: 'Minha casa tem animal (avisamos antes de enviar o "kit pet")',
  rodapeBotao: 'Confirmar pedido fictício',
};

export default NAV;