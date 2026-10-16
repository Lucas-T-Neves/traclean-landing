/**
 * MODEL - o produto que vende: o Pó Compactador.
 * O que chega na caixa é o pó; o aspirador (VC-9) é o que a reação entrega.
 * Todo o texto gira em torno dessas etapas.
 */

export const PRODUTO = {
  marca: 'Traclean',
  nome: 'Pó Compactador Traclean',
  categoria: 'Pó de PCM sob licença Stark Industries (a empresa do Homem de Ferro)',
  tagline: 'Pó. Água. Aparelho.',
  resumo:
    'O Traclean não chega montado: chega 400 g de Pó Compactador em um sachê. ' +
    'Você dilui em 2 litros de água fria, a reação do Protocolo de Compactação ' +
    'Molecular refaz a matéria e, em 4 minutos, há um aspirador VC-9 inteiro na ' +
    'sua pia.',

  receita: {
    entrada1: '1 sachê (400 g)',
    entrada1Legenda: 'de Pó Compactador',
    entrada2: '2 L de água fria',
    entrada2Legenda: 'em um balde',
    reacao: 'Reação PCM · 4 min',
    reacaoLegenda: 'a matéria se refaz',
    resultado: 'Traclean VC-9',
    resultadoLegenda: '34 kPa, aspirador inteiro',
    aviso: 'Água fria, sempre. Água quente aborta a reação e o pó vira uma cola.',
  },

  selos: [
    { valor: '400', unidade: 'g', rotulo: 'de Pó Compactador por sachê' },
    { valor: '2', unidade: 'L', rotulo: 'de água para a reação' },
    { valor: '4', unidade: 'min', rotulo: 'até o aparelho existir' },
  ],

  reactivo: [
    { rotulo: 'Material', valor: 'Pó Compactador PCM (Stark Industries)' },
    { rotulo: 'Diluição', valor: '1 sachê (400 g) para 2 L de água fria' },
    { rotulo: 'Tempo de reação', valor: '4 minutos · trava térmica em 6' },
    { rotulo: 'Resultado', valor: '1 aparelho Traclean VC-9 completo' },
    { rotulo: 'Rendimento', valor: '~55 min de aspiração por ciclo' },
    { rotulo: 'Peso enviado', valor: '400 g em vez de 14 kg de aspirador' },
  ],
};

export default PRODUTO;