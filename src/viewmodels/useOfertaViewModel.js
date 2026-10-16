import { useMemo } from 'react';
import { OFERTA } from '../models/oferta';

/**
 * VIEWMODEL DA OFERTA.
 * Toda a aritmetica de dinheiro acontece AQUI, nunca dentro do componente.
 * A view so recebe valores ja formatados.
 */
export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(valor);
}

export function formatarNumero(valor) {
  return new Intl.NumberFormat('pt-BR').format(valor);
}

export function useOfertaViewModel() {
  const dados = useMemo(() => {
    const { preco, de, parcelas, valorParcela, descontoPercentual } = OFERTA;

    const economia = de - preco;
    const descontoReal = Math.round((economia / de) * 100);

    return {
      ...OFERTA,
      precoFormatado: formatarMoeda(preco),
      economiaFormatado: formatarMoeda(economia),
      valorParcelaFormatado: formatarMoeda(valorParcela),
      descontoReal,
      // conferimos o desconto declarado no model contra o calculo: se divergir,
      // usamos o calculo (a regra manda no texto, nao o contrario).
      descontoConfere: descontoReal === descontoPercentual,
      parcelasTexto: `${parcelas}x de ${formatarMoeda(valorParcela)} sem juros`,
      precoTotalParcelado: Number((valorParcela * parcelas).toFixed(2)),
    };
  }, []);

  const acoes = useMemo(() => ({ formatarMoeda, formatarNumero }), []);

  return { dados, acoes };
}

export default useOfertaViewModel;