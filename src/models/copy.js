/**
 * MODEL - textos de navegacao, secoes e rodape.
 * Separar o texto do dado e uma escolha de MVVM: a view nao "sabe" nada
 * sobre o produto, so recebe o que o viewmodel entregou.
 */

export const NAV = [
  { id: 'beneficios', rotulo: 'Benefícios' },
  { id: 'galeria', rotulo: 'Do pó ao aspirador' },
  { id: 'como-funciona', rotulo: 'Como funciona' },
  { id: 'avaliacoes', rotulo: 'Avaliações' },
  { id: 'oferta', rotulo: 'Oferta' },
  { id: 'faq', rotulo: 'FAQ' },
];

export const HERO = {
  etiqueta: 'Novo · chega em sachê de pó',
  tituloAntes: 'Um pó. Um balde.',
  tituloDestaque: 'Um aspirador.',
  subtitulo:
    'O Traclean não chega montado: vem 400 g de pó em sachê de papel. Você dilui em ' +
    '2 litros de água fria, espera 4 minutos e já tem um aspirador de 25 kPa — sem ' +
    'plástico, sem cabo e sem tomada.',
  ctaPrimario: 'Quero o Traclean',
  ctaSecundario: 'Ver a diluição',
  nota: 'A instrução vem na caixa e está no próprio sachê: água fria, sempre.',
};

export const SECOES = {
  beneficios: {
    etiqueta: 'Diferenciais',
    titulo: 'O que muda quando o aspirador é pó',
    subtitulo:
      'Sem motor, sem plástico e sem tomada. Cada item abaixo resolve uma ' +
      'reclamação concreta de quem tem animal em casa.',
  },
  galeria: {
    etiqueta: 'Do pó ao aspirador',
    titulo: 'Do sachê ao aspirador em três toques',
    subtitulo:
      'Nada de caixa grande e plástico bolado. O que chega é um envelope de papel — ' +
      'e o resto você faz em casa, em 4 minutos.',
  },
  'como-funciona': {
    etiqueta: 'Como funciona',
    titulo: 'Rasgue o sachê, dilua, aspire',
    subtitulo: 'O passo a passo da diluição, sem letra miúda.',
  },
  avaliacoes: {
    etiqueta: 'Prova social',
    titulo: 'Quem diluiu e não voltou para o aspirador comum',
    subtitulo: 'Avaliações fictícias, como toda esta landing page.',
  },
  oferta: {
    etiqueta: 'Oferta',
    titulo: 'O que vem no kit',
    subtitulo: 'Três sachês, um balde e o manual que explica a diluição.',
  },
  faq: {
    etiqueta: 'Dúvidas',
    titulo: 'As perguntas que a gente mais recebe',
    subtitulo: 'A começar por "isso é pó mesmo?".',
  },
  chamada: {
    titulo: 'Pronto para aspirar sem gastar plástico?',
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
  check: 'Minha casa tem animal (o pó tem aroma de lavanda)',
  rodapeBotao: 'Confirmar pedido fictício',
};

export default NAV;