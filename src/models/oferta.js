/**
 * MODEL - oferta e preco.
 * Todos os valores sao ficticios. Nada sai daqui para a internet:
 * a aplicacao e 100% client-side e o "checkout" e uma simulacao local.
 */

export const OFERTA = {
  titulo: 'Kit Traclean 3 sachês',
  subtitulo: '3 Po Compactadores · material para 3 aparelhos VC-9',
  preco: 1299,
  precoFormatado: 'R$ 1.299',
  de: 1890,
  deFormatado: 'R$ 1.890',
  // 10 x 129,90 = 1.299,00: o parcelamento fecha exatamente no preco, sem sobra.
  parcelas: 10,
  valorParcela: 129.9,
  valorParcelaFormatado: 'R$ 129,90',
  descontoPercentual: 31,
  selo: 'Lote de alocação — 312 kits',
  condicaoPagamento: 'até 10x no cartão · Pix com 5% de desconto',
  envio: 'Frete grátis para todo o Brasil em até 5 dias úteis',
  incluso: [
    '3 sachês de Pó Compactador (400 g cada)',
    'Balde de reação de 2 L',
    'Filtro de sílica 9 de reposição',
    'Licença Stark Industries (PCM) digital',
    'Manual da reação, com o aviso de água fria',
  ],
};

export default OFERTA;