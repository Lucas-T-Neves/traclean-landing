/**
 * MODEL - o mundo do produto.
 * Só o cenário (pós-Impacto de Vharn) e o problema que o Traclean resolve.
 * Alimenta a seção "O mundo".
 */

export const IMPACTO = {
  nome: 'Impacto de Vharn',
  quando: 'há 3 anos',
  resumo:
    'Primeiro veio o Estalo: metade do planeta sumiu com um único estalar de dedos e ' +
    'os Vingadores desapareceram junto. Logo depois, a esquadra que sobrou voltou para ' +
    'terminar o serviço e caiu sobre o continente sul. O que ficou no chão foi pó de ' +
    'sílica vítrea, areia de abóbada e pó metálica — e ela não vai embora sozinha.',
};

export const PROBLEMA = {
  titulo: 'A Terra ficou coberta de pó que não sai',
  itens: [
    {
      titulo: 'Aspirador comum não alcança',
      texto:
        'Detrito vítreo e areia de abóbada pedem mais de 30 kPa. A maioria dos ' +
        'aspiradores de loja para em 18 kPa e só empurra o pó para o canto.',
    },
    {
      titulo: 'Filtro satura em minutos',
      texto:
        'Partícula abaixo de 0,3 micrometro atravessa a maioria dos filtros e volta ' +
        'para o ar da casa. E pó de abóbada não é absorvida: ela gruda.',
    },
    {
      titulo: 'Cidade inteira coberta',
      texto:
        'Depois do Impacto, vários municípios acordaram com pó na altura da janela. ' +
        'Recolher à mão não escala em uma cidade de 300 mil pessoas.',
    },
  ],
};

export const SOLUCAO = {
  titulo: 'A resposta veio da Stark Industries',
  tecnologia: 'Protocolo de Compactação Molecular (PCM)',
  texto:
    'Foi aí que entrou a Stark Industries — a mesma do Homem de Ferro. Depois do ' +
    'Impacto, a equipe do Tony Stark passou anos numa tarefa só: fazer a matéria ' +
    'voltar a se montar sozinha. O resultado é o PCM, um pó que, dissolvido em água, ' +
    'reconstrói o equipamento inteiro. Enquanto não voltam as fábricas de aspirador ' +
    'do mundo, a Stark entrega a tecnologia na forma mais barata que existe: pó. ' +
    'A Traclean produz e licencia esse pó — a química é da Stark, o produto é nosso.',
  bullets: [
    'O aparelho não vem de fábrica: ele se monta na casa de quem abre o sachê',
    'Sem plástico de embalagem e sem transporte pesado: 400 g em vez de 14 kg',
    'Licença Stark Industries inclusa (tecnologia PCM)',
  ],
};

export default IMPACTO;