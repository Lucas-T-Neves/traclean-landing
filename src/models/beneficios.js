/**
 * MODEL - benefícios e diferenciais.
 * Cada item aponta para uma chave de ícone (views/components/Icone.js),
 * para que a view não precise saber desenhar nada.
 */

export const BENEFICIOS = [
  {
    id: 'sem-motor',
    icone: 'onda',
    titulo: 'Sem motor, sem susto',
    texto:
      'Pó não ronca. Um aspirador comum faz 74 dB; o Traclean faz o silêncio de um ' +
      'pano sacudido. O gato não sai correndo — ele dorme.',
  },
  {
    id: 'diluicao',
    icone: 'agua',
    titulo: 'Dilui em 4 minutos',
    texto:
      '1 sachê de 400 g em 2 L de água fria. Espere o borbulho cessar e o pó ' +
      'vira aspirador. Sem motor, sem cabo, sem tomada.',
  },
  {
    id: 'escova',
    icone: 'escova',
    titulo: 'Escova que não puxa pelo',
    texto:
      'A escova já vem montada na diluição, com cerdas de micro-cortes que impedem ' +
      'o emaranhado. Depois de 6 meses com dois gatos, continua como nova.',
  },
  {
    id: 'rendimento',
    icone: 'sache',
    titulo: 'Sachê que rende a casa inteira',
    texto:
      '400 g de pó rendem 2 L de solução — cerca de 40 minutos de aspiração. ' +
      'O kit vem com 3 sachês: um mês sem repetir diluição.',
  },
  {
    id: 'filtro',
    icone: 'filtro',
    titulo: 'Filtro que se lava em 10 segundos',
    texto:
      'O filtro do pó se desliga com um clique e vai para a torneira. Nada de lavar ' +
      'com delicadeza nem esperar secar — o pó seca rápido.',
  },
  {
    id: 'ciclo',
    icone: 'reaproveitar',
    titulo: 'O pó volta a ser pó',
    texto:
      'Terminou de aspirar? Raspe o coletor e reutilize a mistura até três vezes. ' +
      'Só troca o sachê quando a sucção cair pela metade.',
  },
];

export default BENEFICIOS;