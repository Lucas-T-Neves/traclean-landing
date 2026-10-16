import { useMemo } from 'react';
import { PRODUTO } from '../models/produto';
import { BENEFICIOS } from '../models/beneficios';
import { GALERIA } from '../models/galeria';
import { PASSOS, MODO_PET } from '../models/passos';
import { DEPOIMENTOS, AVALIACAO_GERAL } from '../models/depoimentos';
import { HERO, SECOES, NAV } from '../models/copy';

/**
 * VIEWMODEL RAIZ.
 * Junta os modelos estaticos e entrega um unico objeto { dados, acoes } para a App.
 * A App nao importa NENHUM arquivo de src/models: essa e a fronteira do MVVM.
 */
export function useLandingViewModel() {
  const dados = useMemo(
    () => ({
      nav: NAV,
      hero: HERO,
      secoes: SECOES,
      produto: PRODUTO,
      beneficios: BENEFICIOS,
      galeria: GALERIA,
      passos: PASSOS,
      modoPet: MODO_PET,
      depoimentos: DEPOIMENTOS,
      avaliacaoGeral: AVALIACAO_GERAL,
    }),
    []
  );

  // regra simples e util: a galeria sempre abre pela arte principal (ordem do model)
  const galeriaOrdenada = useMemo(() => dados.galeria, [dados.galeria]);

  const acoes = useMemo(() => ({ abrirGaleria: () => galeriaOrdenada }), [galeriaOrdenada]);

  return { dados: { ...dados, galeria: galeriaOrdenada }, acoes };
}

export default useLandingViewModel;