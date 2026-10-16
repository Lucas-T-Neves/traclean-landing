/**
 * MODEL - benefícios e diferenciais.
 * Cada item aponta para uma chave de ícone (views/components/Icone.js),
 * para que a view não precise saber desenhar nada.
 */

export const BENEFICIOS = [
  {
    id: 'silencio',
    icone: 'onda',
    titulo: 'Silêncio que não assusta',
    texto:
      '62 dB no modo Pet: dá para aspirar com o gato no mesmo cômodo. ' +
      'No Turbo, 74 dB — ainda menos que um aspirador comum.',
  },
  {
    id: 'escova',
    icone: 'escova',
    titulo: 'Escova que não puxa pelo',
    texto:
      'Cerdas com micro-cortes que impedem o emaranhado. Depois de 6 meses de uso ' +
      'com dois gatos, a escova continua como nova.',
  },
  {
    id: 'sensor',
    icone: 'olho',
    titulo: 'Sensor que pede licença ao pet',
    texto:
      'O sensor identifica calor e movimento e reduz a turbina sozinha. ' +
      'O gato não foge — ele nem percebe.',
  },
  {
    id: 'bateria',
    icone: 'bateria',
    titulo: 'Bateria de casa inteira',
    texto:
      '45 minutos no modo Eco dão conta de um apartamento de 3 quartos. ' +
      'Recarga na parede: deixou na tomada, pronto.',
  },
  {
    id: 'filtro',
    icone: 'filtro',
    titulo: 'Filtro que se limpa sozinho',
    texto:
      'HEPA H13 de verdade. Um botão esvazia o filtro, outro elimina o odor ' +
      'acumulado. Nada de lavar poeira no fim de semana.',
  },
  {
    id: 'despejo',
    icone: 'lixeira',
    titulo: 'Esvazia com um clique',
    texto:
      'A trava solta o depósito inteiro, sem encostar em pó. 0,9 L de capacidade ' +
      'e base que se limpa passando na mão.',
  },
];

export default BENEFICIOS;