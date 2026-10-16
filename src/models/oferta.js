/**
 * MODEL - oferta e preco.
 * Todos os valores são fictícios. Nenhum dado sai daqui para a internet:
 * a aplicacao e 100% client-side e o "checkout" e uma simulacao local.
 */

export const OFERTA = {
  titulo: 'Traclean Pro Pet',
  preco: 1299,
  precoFormatado: 'R$ 1.299',
  de: 1890,
  deFormatado: 'R$ 1.890',
  parcelas: 12,
  valorParcela: 129.9,
  valorParcelaFormatado: 'R$ 129,90',
  descontoPercentual: 31,
  selo: 'Lote de lançamento — 312 unidades',
  condicaoPagamento: 'até 12x no cartão · Pix com 5% de desconto',
  envio: 'Frete grátis para todo o Brasil em até 5 dias úteis',
  incluso: [
    'Aspirador Traclean Pro Pet',
    'Estação de recarga para parede',
    'Escova de sofá + bico estreito',
    'Filtro HEPA H13 extra',
    '3 anos de garantia + 10 anos de peças',
  ],
};

export default OFERTA;