/**
 * MODEL - o aparelho que a reacao materializa.
 * Tudo aqui e ficticio e assumido como tal: modelo, aparencia, capacidades e
 * necessidades de energia foram inventados para a atividade.
 */

export const APARELHO = {
  marca: 'Traclean',
  modelo: 'VC-9',
  apelido: 'Estalo',
  licenca: 'Tecnologia PCM sob licenca Stark Industries',
  tagline: 'Desta vez, o estalo e a seu favor.',
  resumo:
    'O VC-9 não é um aparelho entregue: ele é o resultado da reação. O pó ' +
    'Compactador + agua refazem a materia dele na sua cozinha. O que sai do balde ' +
    'e um aspirador vertical de 34 kPa, com reator proprio e filtro de silica 9.',

  aparencia: [
    'Corpo grafite fosco com uma faixa unica de acento na cor de aviso',
    'Bocal largo de acoplamento rapido, com trava magnética',
    'Cabecote com LED de leitura de particula',
    'Sem cabo enrolado: a alimentacao vem do reator interno',
    'Formato vertical de 2,3 kg, cabe numa mao',
  ],

  capacidades: [
    { rotulo: 'Sucao', valor: '34 kPa (modo Pulso) · 21 kPa (modo Silencioso)' },
    { rotulo: 'Fluxo', valor: '1,2 L de deposito · esvazia em 1 clique' },
    { rotulo: 'Filtro', valor: 'Malha Silicia-9 · 99,97% de particulas ate 0,3 um' },
    { rotulo: 'Alcance', valor: 'Detrito vitreo, areia de abobada e po metalica' },
    { rotulo: 'Ciclo', valor: '1 sachê = 3 ciclos de ~55 min' },
    { rotulo: 'Reuso', valor: 'O pó não se consome: filtre e lave o filtro para recomeçar' },
  ],

  energia: [
    { rotulo: 'Fonte', valor: 'Micro-reator de safira — o mesmo do Homem de Ferro, em escala de bolso' },
    { rotulo: 'Autonomia', valor: 'Reator armazena 72 h; o limite real de uso é o pó: 3 ciclos de ~55 min por sachê' },
    { rotulo: 'Recarga', valor: 'Inducao solar: 4 h de sol direto' },
    { rotulo: 'Consumo', valor: '14 W em uso · 0,2 W em repouso' },
    { rotulo: 'Seguranca', valor: 'Trava termica: se a reacao passar de 6 min, aborta' },
    { rotulo: 'Nao precisa', valor: 'Tomada, cabo, bateria ou pilha' },
  ],

  garantia: [
    { titulo: '3 anos de garantia', texto: 'Cobre reator, filtro e qualquer falha de reacao.' },
    { titulo: 'Reacao garantida', texto: 'Se o aparelho nao formar, devolvemos o po e mais 200 g.' },
    { titulo: '30 dias para testar', texto: 'Devolvemos o valor se nao servir para a sua po.' },
  ],
};

export default APARELHO;