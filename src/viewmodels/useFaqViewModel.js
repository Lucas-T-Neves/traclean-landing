import { useCallback, useState } from 'react';
import { FAQ } from '../models/faq';

/**
 * VIEWMODEL DO FAQ (acordeao).
 * Regra: uma pergunta aberta por vez; clicar na que ja esta aberta fecha.
 * Nada disso mora no componente.
 */
export function useFaqViewModel() {
  const [abertaId, setAbertaId] = useState(null);

  const alternar = useCallback((id) => {
    setAbertaId((atual) => (atual === id ? null : id));
  }, []);

  const abrirTodas = useCallback(() => setAbertaId('todas'), []);
  const fecharTodas = useCallback(() => setAbertaId(null), []);

  const itens = FAQ.map((item) => ({
    ...item,
    aberta: abertaId === item.id || abertaId === 'todas',
  }));

  const acoes = { alternar, abrirTodas, fecharTodas };

  return { dados: { itens, total: itens.length, todasAbertas: abertaId === 'todas' }, acoes };
}

export default useFaqViewModel;