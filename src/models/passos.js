/**
 * MODEL - "como funciona".
 * Quatro etapas literais: rasgar o sachê, diluir, esperar a reação, aspirar.
 * (os nomes dos ícones continuam em ASCII: são chaves do componente Icone)
 */

export const PASSOS = [
  {
    numero: '01',
    titulo: 'Rasgue o sachê',
    texto:
      'Chegam 400 g de Pó Compactador em um envelope de papel. Sem plástico, sem ' +
      'caixa grande, sem cabo: o que vem é o material que vira o aparelho.',
    icone: 'sache',
  },
  {
    numero: '02',
    titulo: 'Dilua em 2 L de água fria',
    texto:
      'Balde, água fria, pó por cima. Água quente aborta a reação — por isso o aviso ' +
      'vem impresso no próprio sachê.',
    icone: 'agua',
  },
  {
    numero: '03',
    titulo: 'Espere a matéria se refazer',
    texto:
      'A solução borbulha e endurece em 4 minutos: o VC-9 se materializa inteiro. ' +
      'Passou de 6 minutos, a trava térmica devolve o pó.',
    icone: 'reacao',
  },
  {
    numero: '04',
    titulo: 'Aspire a poeira do Impacto',
    texto:
      '34 kPa, filtro de sílica 9 e 72 h de reator próprio. São 3 ciclos de ' +
      '~55 min, sem tomada e sem cabo na parede.',
    icone: 'aspirador',
  },
];

export const REACAO = {
  titulo: 'O que acontece no balde',
  texto:
    'O Protocolo de Compactação Molecular funciona ao contrário de tudo o que a ' +
    'humanidade já fez com água: em vez de dissolver, ele reconstrói. As moléculas ' +
    'do pó se organizam, procuram a forma mais estável e devolvem o aparelho inteiro, ' +
    'reator incluído.',
  bullets: [
    'A solução passa de cinza para azul-acinzentada e para de borbulhar',
    'A matéria ganha forma sólida: corpo, bocal e filtro',
    'O reator se acende sozinho ao fim da reação',
    'Sobram 8 g de resíduo sólido, que são residuais neutros',
  ],
};

export default PASSOS;