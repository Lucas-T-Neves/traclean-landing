/**
 * MODEL - oferta e preco.
 * Todos os valores são fictícios. Nenhum dado sai daqui para a internet:
 * a aplicacao e 100% client-side e o "checkout" e uma simulacao local.
 */

export const OFERTA = {
  titulo: 'Kit Traclean 3 sachês',
  preco: 1299,
  precoFormatado: 'R$ 1.299',
  de: 1890,
  deFormatado: 'R$ 1.890',
  parcelas: 12,
  valorParcela: 129.9,
  valorParcelaFormatado: 'R$ 129,90',
  descontoPercentual: 31,
  selo: 'Lote de lançamento — 312 kits',
  condicaoPagamento: 'até 12x no cartão · Pix com 5% de desconto',
  envio: 'Frete grátis para todo o Brasil em até 5 dias úteis',
  incluso: [
    '3 sachês de pó Traclean (400 g cada)',
    'Balde medidor de 2 L',
    'Filtro de reposição',
    'Manual de diluição ilustrado',
    '3 anos de garantia + 10 anos de peças',
  ],
};

export default OFERTA;