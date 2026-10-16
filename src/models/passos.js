/**
 * MODEL - "como funciona".
 * Passos simples, porque a proposta e justamente a simplicidade.
 */

export const PASSOS = [
  {
    numero: '01',
    titulo: 'Passeie e aspire',
    texto:
      'O modo Pet já vem ligado. Você encosta no sofá, no tapete, no canto — ' +
      'e o sensor cuida do resto.',
    icone: 'aspirador',
  },
  {
    numero: '02',
    titulo: 'Escova. Filtro. Limpo.',
    texto:
      'A escova não emaranha e o filtro HEPA se limpa sozinho. ' +
      'Nada de abrir, lavar e esperar secar.',
    icone: 'filtro',
  },
  {
    numero: '03',
    titulo: 'Um clique para esvaziar',
    texto:
      'A trava solta o depósito inteiro. Você joga fora o que juntou ' +
      'e guarda o Traclean na estação.',
    icone: 'lixeira',
  },
];

export const MODO_PET = {
  titulo: 'O detalhe que virou promessa',
  texto:
    'Soltamos um sensor de proximidade que reduz a turbina quando detecta ' +
    'movimento perto do bocal. Foi a peça que fez o teste passar de ' +
    '"expulsamos o gato" para "o gato deita no tapete e deixa limpar".',
  bullets: [
    'Redução automática de turbina ao detectar o pet',
    'Escova com micro-cortes anti-emaranhado',
    'Modo Pet fixo em 62 dB, sem ajuste manual',
    'Bocal largo: não assusta ao aproximar',
  ],
};

export default PASSOS;