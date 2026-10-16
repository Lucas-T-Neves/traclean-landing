/**
 * MODEL - prova social.
 * Todas as avaliações são FICTÍCIAS (o produto não existe).
 * O item do Bento existe de propósito: dá personalidade ao bloco
 * e é o tipo de detalhe que a turma lembra na apresentação.
 */

export const AVALIACAO_GERAL = {
  nota: 4.8,
  total: 2314,
  selo: 'Avaliado por quem já diluiu',
};

export const DEPOIMENTOS = [
  {
    id: 'd1',
    nome: 'Marina Coutinho',
    cidade: 'Curitiba, PR',
    nota: 5,
    titulo: 'Vem em pó e funciona. Demorei a acreditar',
    texto:
      'Achei piada até rasgar o sachê. Diluí seguindo o manual e aspirou o apartamento inteiro. ' +
      'Voltei para comprar dois kits.',
  },
  {
    id: 'd2',
    nome: 'Rodrigo Tavares',
    cidade: 'Recife, PE',
    nota: 5,
    titulo: '40 minutos é a conta certa',
    texto:
      'Um sachê em 2 L de água deu quase uma hora de aspiração no meu apartamento de 74 m². ' +
      'Já volto para comprar todo mês.',
  },
  {
    id: 'd3',
    nome: 'Juliana Prado',
    cidade: 'Belo Horizonte, MG',
    nota: 4,
    titulo: 'O filtro salvou minha vida',
    texto:
      'Tenho alergia a ácaro e nunca mais lavei filtro à mão. Desliga e vai para a torneira. ' +
      'Tirei uma estrela porque o kit de 3 sachês acaba rápido em casa com dois cachorros.',
  },
  {
    id: 'd4',
    nome: 'Paulo Henrique Siqueira',
    cidade: 'Porto Alegre, RS',
    nota: 5,
    titulo: 'Sem tomada, sem cabo',
    texto:
      'Moro em terceiro andar e sempre fiz um cabo de aspirador subir escada. ' +
      'Agora é um envelope de papel. Comprei um para mim e outro para a minha mãe.',
  },
  {
    id: 'd5',
    nome: 'Camila Rezende',
    cidade: 'Florianópolis, SC',
    nota: 5,
    titulo: 'A lavanda funciona de verdade',
    texto:
      'Duas gatas de pelo longo. O pó não ligou nelas e a escova anti-emaranhar funcionou. ' +
      'Já recomendei para o grupo do prédio.',
  },
  {
    id: 'd6',
    nome: 'Bento',
    cidade: 'São Paulo, SP',
    nota: 5,
    titulo: 'Não entendi o pó, mas deitei',
    texto: 'hum... hum... hum.',
    ehPet: true,
  },
];

export default DEPOIMENTOS;