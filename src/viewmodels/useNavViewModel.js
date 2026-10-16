import { useCallback, useEffect, useState } from 'react';
import { NAV } from '../models/copy';

/**
 * VIEWMODEL DE NAVEGACAO.
 * Regra da secao ativa: quem "ganha" o scroll e o elemento mais proximo do topo.
 * Tudo que a view precisa saber e exposto aqui.
 */
export function useNavViewModel() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState(NAV[0].id);

  const alternarMenu = useCallback(() => setMenuAberto((v) => !v), []);
  const fecharMenu = useCallback(() => setMenuAberto(false), []);

  const irPara = useCallback((id) => {
    const alvo = document.getElementById(id);
    if (!alvo) return;
    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSecaoAtiva(id);
    setMenuAberto(false);
  }, []);

  useEffect(() => {
    function aoRolar() {
      const marca = window.innerHeight * 0.35;
      let atual = NAV[0].id;
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= marca) atual = item.id;
      }
      // quando chega no fim da pagina, a ultima secao ganha
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 8) {
        atual = NAV[NAV.length - 1].id;
      }
      setSecaoAtiva(atual);
    }

    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return {
    dados: { itens: NAV, secaoAtiva, menuAberto },
    acoes: { irPara, alternarMenu, fecharMenu },
  };
}

export default useNavViewModel;