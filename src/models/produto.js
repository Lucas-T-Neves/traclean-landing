/**
 * MODEL - dados do produto.
 * Nenhum componente importa este arquivo direto: ele alimenta os viewmodels,
 * que por sua vez entregam { dados, acoes } para as views (padrao MVVM).
 */

export const PRODUTO = {
  marca: 'Traclean',
  nome: 'Traclean Pro Pet',
  categoria: 'Aspirador vertical sem fio',
  tagline: 'Potência de laboratório. Silêncio de biblioteca.',
  promessa: 'O aspirador que o gato aprova.',
  resumo:
    'Um aspirador vertical que junta a sucção de umindustrial com o volume de ' +
    'uma/library. Feito para casas com pets: escova que não puxa pelo, ' +
    'modo Pet que reduz o ruído e sensor que desliga sozinho quando o bicho se aproxima.',
  descricaoLonga:
    'O Traclean Pro Pet nasceu de uma reclamação real: todo aspirador assusta o gato. ' +
    'Reduzimos o ruído, reescrevemos a escova para não emaranhar pelo e ' +
    'colocamos um sensor que percebe o pet e desliga a turbina automaticamente. ' +
    'O resto é engenharia de verdade: motor de 25 kPa, bateria de 45 minutos e filtro ' +
    'HEPA H13 que se limpa sozinho.',

  selos: [
    { valor: '62', unidade: 'dB', rotulo: 'mais baixo que uma conversa' },
    { valor: '25', unidade: 'kPa', rotulo: 'de sucção real' },
    { valor: '45', unidade: 'min', rotulo: 'de bateria por carga' },
  ],

  fichaTecnica: [
    { rotulo: 'Sucção', valor: '25 kPa (motor AWDC)' },
    { rotulo: 'Ruído', valor: '62 dB no modo Pet / 74 dB no Turbo' },
    { rotulo: 'Bateria', valor: '45 min (Eco) · 25 min (Turbo)' },
    { rotulo: 'Filtro', valor: 'HEPA H13 lavável, autolimpeza por botão' },
    { rotulo: 'Escova', valor: 'Anti-emaranhar com corte automático de fio' },
    { rotulo: 'Depósito', valor: '0,9 L, esvazia com um clique' },
    { rotulo: 'Peso', valor: '1,6 kg vazio' },
    { rotulo: 'Estação', valor: 'Recarga na parede · 3 h para 100%' },
    { rotulo: 'Acessórios', valor: 'Escova de sofá, bico estreito, suporte de parede' },
  ],

  garantias: [
    { titulo: '3 anos de garantia', texto: 'Cobre motor, bateria e eletrônicos.' },
    { titulo: '10 anos de peças', texto: 'Repomos qualquer peça do produto, sem custo.' },
    { titulo: '30 dias para testar', texto: 'Devolvemos o valor se não gostar, sem perguntas.' },
  ],
};

export default PRODUTO;