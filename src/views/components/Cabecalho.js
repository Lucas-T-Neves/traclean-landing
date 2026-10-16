import styles from '../../styles/Cabecalho.module.css';
import Logo from './Logo';
import Botao from './Botao';

/** Cabecalho fixo: navegacao, secao ativa e CTA. */
export default function Cabecalho({ itens, secaoAtiva, menuAberto, irPara, alternarMenu, aoComprar, jaComprou }) {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.interno}>
        <a className={styles.marca} href="#topo" onClick={(e) => { e.preventDefault(); irPara('topo'); }}>
          <Logo />
        </a>

        <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ''}`} aria-label="Seções da página">
          {itens.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.link} ${secaoAtiva === item.id ? styles.ativo : ''}`}
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
            aria-label="Abrir menu"
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