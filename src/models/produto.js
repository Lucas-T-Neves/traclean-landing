/**
 * MODEL - dados do produto.
 * Nenhum componente importa este arquivo direto: ele alimenta os viewmodels,
 * que por sua vez entregam { dados, acoes } para as views (padrao MVVM).
 *
 * CONCEITO: o Traclean e vendido como POCO em sachê. O cliente dilui o pó
 * em agua e o resultado e um aspirador de po. Todo o texto abaixo gira em
 * torno dessa tres passos, porque e o que precisa ficar explicito.
 */

export const PRODUTO = {
  marca: 'Traclean',
  nome: 'Traclean Pro Pet',
  categoria: 'Aspirador em pó (kit diluível)',
  tagline: 'Pó. Água. Aspirador.',
  promessa: 'Um pó. Um balde. Um aspirador.',
  resumo:
    'O Traclean chega em sachê de 400 g — não vem montado. Você abre o sachê, ' +
    'derrama o pó em 2 litros de água fria, espera 4 minutos e pronto: um aspirador ' +
    'de 25 kPa, sem plástico, sem cabo e sem tomada.',
  descricaoLonga:
    'Todo aspirador do mercado chega pronto: caixa grande, plástico, cabo e uma tomada. ' +
    'O Traclean inverte isso. O que chega é um envelope de papel com 400 g de pó. ' +
    'Você mistura com água, o pó se dissolve e forma o aspirador. Depois de aspirar, ' +
    'ele volta a ser pó: você raspa o coletor e reutiliza até três vezes. ' +
    'Por trás da piada, a proposta é séria: sem plástico na embalagem, sem bateria, ' +
    'sem cabo, sem tomada e com aroma de lavanda para o gato não fugir do cômodo.',

  receita: {
    sachê: '1 sachê (400 g)',
    agua: '2 L de água fria',
    resultado: 'Aspirador de 25 kPa',
    preparo: '4 minutos',
    aviso: 'Sempre água fria. Água quente cristaliza o pó no tapete.',
  },

  selos: [
    { valor: '400', unidade: 'g', rotulo: 'de pó em cada sachê' },
    { valor: '2', unidade: 'L', rotulo: 'de água para diluir' },
    { valor: '3x', rotulo: 'reaproveitamento do pó', unidade: '' },
  ],

  fichaTecnica: [
    { rotulo: 'Formato', valor: 'Pó em sachê de papel impermeável (sem plástico)' },
    { rotulo: 'Diluição', valor: '1 sachê (400 g) para 2 L de água fria' },
    { rotulo: 'Tempo de preparo', valor: '4 minutos (espere o borbulho cessar)' },
    { rotulo: 'Rendimento', valor: '2 L de solução ≈ 40 min de aspiração' },
    { rotulo: 'Composição', valor: 'Sílica sulfatada, fibra de vidro, lavanda 0,4%' },
    { rotulo: 'Aspiração', valor: '25 kPa de sucção · 0,9 L de pó por ciclo' },
    { rotulo: 'Ciclo do pó', valor: 'Reaproveitável até 3 vezes' },
    { rotulo: 'Peso montado', valor: '1,6 kg de aspirador pronto' },
    { rotulo: 'Validade do pó', valor: '24 meses após o fechamento do sachê' },
  ],

  garantias: [
    { titulo: '3 anos de garantia', texto: 'Cobre balde, filtro e qualquer defeito da mistura.' },
    { titulo: '10 anos de peças', texto: 'Repomos balde, filtro e sachê, sem custo.' },
    { titulo: '30 dias para testar', texto: 'Devolvemos o valor se o pó não aspirar, sem perguntas.' },
  ],
};

export default PRODUTO;