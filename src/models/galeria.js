/**
 * MODEL - galeria.
 * Cada item aponta para uma ILUSTRACAO vetorial feita no proprio projeto
 * (views/components/Ilustracoes.js). Nao usamos foto de terceiro do produto
 * porque o Traclean e ficticio: nao existe foto "real" dele em lugar nenhum.
 */

export const GALERIA = [
  {
    id: 'corpo',
    rotulo: 'Corpo e ergonomia',
    texto: 'Leve, equilibrado e com cabo que recolhe no próprio corpo.',
    arte: 'corpo',
    destaque: '1,6 kg',
  },
  {
    id: 'escova',
    rotulo: 'Escova anti-emaranhar',
    texto: 'Micro-cortes nas cerdas impedem que o pelo enrosque no eixo.',
    arte: 'escova',
    destaque: 'zero emaranhado',
  },
  {
    id: 'filtro',
    rotulo: 'Filtro HEPA H13',
    texto: 'Autolimpeza por botão, sem lavar poeira.',
    arte: 'filtro',
    destaque: 'H13',
  },
  {
    id: 'estacao',
    rotulo: 'Estação de parede',
    texto: 'Recarrega e guarda. some da bagunça.',
    arte: 'estacao',
    destaque: '3 h = 100%',
  },
];

export default GALERIA;