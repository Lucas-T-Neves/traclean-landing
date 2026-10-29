/**
 * MODEL - o aparelho que a reacao materializa.
 * Tudo aqui e ficticio e assumido como tal: modelo, aparencia, capacidades e
 * necessidades de energia foram inventados para a atividade.
 */

export const APARELHO = {
  marca: 'Traclean',
  modelo: 'VC-9',
  apelido: 'Estalo',
  licenca: 'Tecnologia PCM sob licença Stark Industries',
  tagline: 'Desta vez, o estalo é a seu favor.',
  resumo:
    'O VC-9 não é um aparelho entregue: ele é o resultado da reação. O pó ' +
    'Compactador + água refazem a matéria dele na sua cozinha. O que sai do balde ' +
    'é um aspirador vertical de 34 kPa, com reator próprio e filtro de sílica 9.',

  aparencia: [
    'Corpo grafite fosco com uma faixa única de acento na cor de aviso',
    'Bocal largo de acoplamento rápido, com trava magnética',
    'Cabeçote com LED de leitura de partícula',
    'Sem cabo enrolado: a alimentação vem do reator interno',
    'Formato vertical de 2,3 kg, cabe numa mão',
  ],

  capacidades: [
    { rotulo: 'Sucção', valor: '34 kPa (modo Pulso) · 21 kPa (modo Silencioso)' },
    { rotulo: 'Fluxo', valor: '1,2 L de depósito · esvazia em 1 clique' },
    { rotulo: 'Filtro', valor: 'Malha Sílica-9 · 99,97% de partículas até 0,3 µm' },
    { rotulo: 'Alcance', valor: 'Detrito vítreo, areia de abóbada e pó metálica' },
    { rotulo: 'Ciclo', valor: '1 sachê = 3 ciclos de ~55 min' },
    { rotulo: 'Reuso', valor: 'O pó não se consome: filtre e lave o filtro para recomeçar' },
  ],

  energia: [
    { rotulo: 'Fonte', valor: 'Micro-reator de safira — o mesmo do Homem de Ferro, em escala de bolso' },
    { rotulo: 'Autonomia', valor: 'O reator guarda 72 h de carga; cada sachê sustenta 3 ciclos de uso de ~55 min' },
    { rotulo: 'Recarga', valor: 'Indução solar: 4 h de sol direto' },
    { rotulo: 'Consumo', valor: '14 W em uso · 0,2 W em repouso' },
    { rotulo: 'Segurança', valor: 'Trava térmica: se a reação passar de 6 min, aborta' },
    { rotulo: 'Não precisa', valor: 'Tomada, cabo, bateria ou pilha' },
  ],

  garantia: [
    { titulo: '3 anos de garantia', texto: 'Cobre reator, filtro e qualquer falha de reação.' },
    { titulo: 'Reação garantida', texto: 'Se o aparelho não formar, devolvemos o pó e mais 200 g.' },
    { titulo: '30 dias para testar', texto: 'Devolvemos o valor se não servir para o seu pó.' },
  ],
};

export default APARELHO;