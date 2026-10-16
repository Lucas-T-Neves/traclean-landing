/**
 * MODEL - galeria: as tres etapas do material.
 * Cada item aponta para uma ILUSTRACAO vetorial feita no proprio projeto
 * (views/components/Ilustracoes.js).
 */

export const GALERIA = [
  {
    id: 'sache',
    rotulo: 'O sachê de 400 g',
    texto: 'Envelope de papel com Pó Compactador PCM. Abre com a mão.',
    arte: 'sache',
    destaque: '400 g',
  },
  {
    id: 'reacao',
    rotulo: 'A reação no balde',
    texto: '4 minutos de borbulho e a matéria se refaz: corpo, bocal e filtro.',
    arte: 'reacao',
    destaque: '4 min',
  },
  {
    id: 'filtro',
    rotulo: 'Filtro de sílica 9',
    texto: 'Retém o que volta do Impacto. E se reconstitui no fim do ciclo.',
    arte: 'filtro',
    destaque: '0,3 µm',
  },
];

export default GALERIA;