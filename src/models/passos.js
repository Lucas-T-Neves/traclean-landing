/**
 * MODEL - "como funciona".
 * A tres etapas sao literais: abrir o sachê, diluir em agua, aspirar.
 * E aqui que o conceito precisa ficar explicito para ninguem entender errado.
 */

export const PASSOS = [
  {
    numero: '01',
    titulo: 'Rasgue o sachê',
    texto:
      'Chega um envelope de papel com 400 g de pó. Não é aspirador montado, ' +
      'não tem plástico, não tem cabo. Você abre e mede.',
    icone: 'sache',
  },
  {
    numero: '02',
    titulo: 'Dilua em 2 L de água fria',
    texto:
      'Balde, água fria, pó por cima. Espere 4 minutos: quando parar de borbulhar ' +
      'e ficar cinza-azulado, o aspirador está pronto.',
    icone: 'agua',
  },
  {
    numero: '03',
    titulo: 'Aspire — e depois recolha o pó',
    texto:
      'A solução aspira a casa inteira em ~40 minutos. No fim, o pó volta a ser pó: ' +
      'você raspa o coletor e pode reutilizar a mistura até três vezes.',
    icone: 'aspirador',
  },
];

export const MODO_PET = {
  titulo: 'O detalhe que virou promessa',
  texto:
    'Pó não ronca. Um aspirador comum faz 74 dB de motor; o Traclean faz o silêncio ' +
    'de um pano sendo sacudido. E ainda solta aroma de lavanda — que é exatamente ' +
    'o que segura o gato no cômodo em vez de fazê-lo fugir.',
  bullets: [
    'Sem motor: o único som é o do pó caindo',
    'Aroma de lavanda (0,4%) — o gato deita para olhar',
    'Escova anti-emaranhar que já vem montada na diluição',
    'Bocal largo: não assusta na aproximação',
  ],
};

export default PASSOS;