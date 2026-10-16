import { useMemo } from 'react';
import { PRODUTO } from '../models/produto';
import { APARELHO } from '../models/aparelho';
import { IMPACTO, PROBLEMA, SOLUCAO } from '../models/contexto';
import { BENEFICIOS } from '../models/beneficios';
import { GALERIA } from '../models/galeria';
import { PASSOS, REACAO } from '../models/passos';
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
      aparelho: APARELHO,
      contexto: { impacto: IMPACTO, problema: PROBLEMA, solucao: SOLUCAO },
      beneficios: BENEFICIOS,
      galeria: GALERIA,
      passos: PASSOS,
      reacao: REACAO,
      depoimentos: DEPOIMENTOS,
      avaliacaoGeral: AVALIACAO_GERAL,
    }),
    []
  );

  const acoes = useMemo(() => ({ primeiraSecao: dados.nav[0].id }), [dados.nav]);

  return { dados, acoes };
}

export default useLandingViewModel;