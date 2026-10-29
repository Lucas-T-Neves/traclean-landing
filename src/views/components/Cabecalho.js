import { useEffect, useRef } from 'react';
import styles from '../../styles/Cabecalho.module.css';
import Logo from './Logo';
import Botao from './Botao';

/** Cabecalho fixo: navegacao, secao ativa e CTA. */
export default function Cabecalho({ itens, secaoAtiva, menuAberto, irPara, alternarMenu, fecharMenu, aoComprar, jaComprou }) {
  const botaoMenuRef = useRef(null);

  // Acessibilidade do menu mobile: Esc fecha e devolve o foco ao botao;
  // se a janela voltar ao tamanho de desktop, o menu tambem fecha.
  useEffect(() => {
    if (!menuAberto) return undefined;

    function aoTeclar(e) {
      if (e.key === 'Escape') {
        fecharMenu();
        botaoMenuRef.current?.focus();
      }
    }
    const desktop = window.matchMedia('(min-width: 901px)');
    function aoMudarTamanho() {
      if (desktop.matches) fecharMenu();
    }

    document.addEventListener('keydown', aoTeclar);
    desktop.addEventListener('change', aoMudarTamanho);
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      desktop.removeEventListener('change', aoMudarTamanho);
    };
  }, [menuAberto, fecharMenu]);

  return (
    <header className={styles.cabecalho}>
      <div className={styles.interno}>
        <a className={styles.marca} href="#topo" onClick={(e) => { e.preventDefault(); irPara('topo'); }}>
          <Logo />
        </a>

        <nav
          id="menu-principal"
          className={`${styles.nav} ${menuAberto ? styles.navAberto : ''}`}
          aria-label="Seções da página"
        >
          {itens.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.link} ${secaoAtiva === item.id ? styles.ativo : ''}`}
              aria-current={secaoAtiva === item.id ? 'location' : undefined}
              onClick={(e) => { e.preventDefault(); irPara(item.id); }}
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className={styles.acoes}>
          <Botao onClick={aoComprar} variante="primario" tamanho="pequeno">
            {jaComprou ? 'Ver meu pedido' : 'Comprar'}
          </Botao>
          <button
            type="button"
            className={styles.menuBotao}
            onClick={alternarMenu}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            ref={botaoMenuRef}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
