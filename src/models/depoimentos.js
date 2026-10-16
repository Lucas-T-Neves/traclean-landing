/**
 * MODEL - prova social.
 * Todas as avaliações são FICTÍCIAS (o produto não existe).
 * O item do Bento existe de propósito: dá personalidade ao bloco
 * e é o tipo de detalhe que a turma lembra na apresentação.
 */

export const AVALIACAO_GERAL = {
  nota: 4.8,
  total: 2314,
  selo: 'Avaliado por quem tem gato em casa',
};

export const DEPOIMENTOS = [
  {
    id: 'd1',
    nome: 'Marina Coutinho',
    cidade: 'Curitiba, PR',
    nota: 5,
    titulo: 'O primeiro que meu gato não odeia',
    texto:
      'Já testei uns cinco. Todos viravam evento: eu ligava e ela saía correndo. ' +
      'Esse liga baixinho e ela deita. Já virou parte da rotina dela.',
  },
  {
    id: 'd2',
    nome: 'Rodrigo Tavares',
    cidade: 'Recife, PE',
    nota: 5,
    titulo: '45 minutos é mentira boa',
    texto:
      'A autonomia de 45 minutos diz a verdade. ' +
      'Limpei meu apartamento de 74 m² numa carga só. Nunca mais pensei em tomada.',
  },
  {
    id: 'd3',
    nome: 'Juliana Prado',
    cidade: 'Belo Horizonte, MG',
    nota: 4,
    titulo: 'O filtro salvou minha vida',
    texto:
      'Tenho alergia a ácaro e nunca mais lavei filtro. O botão resolve. ' +
      'Tirei uma estrela só porque o depósito de 0,9 L enche rápido em casa com dois cachorros.',
  },
  {
    id: 'd4',
    nome: 'Paulo Henrique Siqueira',
    cidade: 'Porto Alegre, RS',
    nota: 5,
    titulo: 'Troquei o meu inteiro por um',
    texto:
      'Comprei um para mim e voltei para comprar outro para a minha mãe. ' +
      'Ela tem 78 anos e usa com a mão livre — é leve.',
  },
  {
    id: 'd5',
    nome: 'Camila Rezende',
    cidade: 'Florianópolis, SC',
    nota: 5,
    titulo: 'A escova merece o prêmio',
    texto:
      'Duas gatas de pelo longo. Seis meses de uso e eu não tirei pelo nenhum de nenhuma vez. ' +
      'Se eu deixar encostar na parede, cobrijo de poeira.',
  },
  {
    id: 'd6',
    nome: 'Bento',
    cidade: 'São Paulo, SP',
    nota: 5,
    titulo: 'Não chega perto da minha cara',
    texto: 'hum... hum... hum.',
    ehPet: true,
  },
];

export default DEPOIMENTOS;