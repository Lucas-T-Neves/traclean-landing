/**
 * MODEL - galeria.
 * Cada item aponta para uma ILUSTRACAO vetorial feita no proprio projeto
 * (views/components/Ilustracoes.js). Nao usamos foto de terceiro do produto
 * porque o Traclean e ficticio: nao existe foto "real" dele em lugar nenhum.
 */

export const GALERIA = [
  {
    id: 'sache',
    rotulo: 'Sachê de 400 g',
    texto: 'Papel impermeável, sem plástico. Abre com a mão.',
    arte: 'sache',
    destaque: '400 g',
  },
  {
    id: 'balde',
    rotulo: 'Diluição em 2 L',
    texto: 'Água fria, pó por cima, 4 minutos de espera.',
    arte: 'balde',
    destaque: '4 min',
  },
  {
    id: 'filtro',
    rotulo: 'Filtro de pó',
    texto: 'Desliga com um clique e vai para a torneira.',
    arte: 'filtro',
    destaque: '10 s',
  },
  {
    id: 'coleta',
    rotulo: 'Recolha e reusa',
    texto: 'O pó volta a ser pó. Dá para reciclar a mistura 3 vezes.',
    arte: 'coleta',
    destaque: '3 ciclos',
  },
];

export default GALERIA;