/**
 * MODEL - prova social.
 * Todas as avaliações são FICTÍCIAS (nem o produto, nem o Impacto existem).
 */

export const AVALIACAO_GERAL = {
  nota: 4.8,
  total: 2314,
  selo: 'Avaliado por quem já fez a reação',
};

export const DEPOIMENTOS = [
  {
    id: 'd1',
    nome: 'Marina Coutinho',
    cidade: 'Curitiba, PR',
    nota: 5,
    titulo: 'Eu vi o Estalo. E vi o que veio depois.',
    texto:
      'Quando metade do mundo sumiu, eu achei que o pó ia embora junto. Veio a ' +
      'esquadra depois. Testei o sachê desconfiada e tenho um VC-9 na pia até hoje.',
  },
  {
    id: 'd2',
    nome: 'Rodrigo Tavares',
    cidade: 'Recife, PE',
    nota: 5,
    titulo: '34 kPa é o mínimo, não o diferencial',
    texto:
      'Aspirei a varanda inteira em um ciclo. Areia de abóbada não tem milagre, tem ' +
      'potência. Já volto para comprar todo mês.',
  },
  {
    id: 'd3',
    nome: 'Juliana Prado',
    cidade: 'Belo Horizonte, MG',
    nota: 4,
    titulo: 'O filtro de sílica 9 salvou minha asma',
    texto:
      'Tenho alergia a pó de impacto e nunca mais esperei saturar filtro. Só tiro uma ' +
      'estrela porque o kit de 3 sachês acaba rápido com dois cachorros.',
  },
  {
    id: 'd4',
    nome: 'Paulo Henrique Siqueira',
    cidade: 'Porto Alegre, RS',
    nota: 5,
    titulo: 'Ex-Vingador, hoje aspirador de varanda',
    texto:
      'Saí de cena depois do Estalo e passei a limpar o que sobrou do Impacto. ' +
      'Sem tomada e sem cabo é outro nível de praticidade. Comprei um e mandei pro meu pai.',
  },
  {
    id: 'd5',
    nome: 'Camila Rezende',
    cidade: 'Florianópolis, SC',
    nota: 5,
    titulo: 'O traço na parede acende sozinho',
    texto:
      'Cabeça com LED de leitura de partícula é o detalhe que me vendeu: mostra ' +
      'onde ainda tem pó de abóbada. E as duas gatas sobreviveram ao Impacto, mas não ao pó.',
  },
  {
    id: 'd6',
    nome: 'Bento',
    cidade: 'São Paulo, SP',
    nota: 5,
    titulo: 'Sobrevivi ao Estalo. Ao pó, nem sei.',
    texto: 'hum... hum... hum.',
    ehPet: true,
  },
];

export default DEPOIMENTOS;