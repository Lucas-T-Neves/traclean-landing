import styles from '../../styles/Contexto.module.css';
import Icone from '../components/Icone';
import Etiqueta from '../components/Etiqueta';

/** Secao "O mundo": o cenario pos-Impacto e a resposta da Stark. */
export default function Contexto({ impacto, problema, solucao }) {
  return (
    <section className={styles.mundo} id="mundo" aria-labelledby="mundo-titulo">
      <div className={styles.conteudo}>
        <div className={styles.topo}>
          <Etiqueta tom="lima">{impacto.quando}</Etiqueta>
          <h2 className={styles.titulo} id="mundo-titulo">
            Primeiro veio o Estalo.
            <br />
            Depois veio o <span className={styles.destaque}>{impacto.nome}</span>.
          </h2>
          <p className={styles.resumo}>{impacto.resumo}</p>
        </div>

        <div className={styles.grade}>
          <div className={styles.bloco}>
            <span className={styles.blocoEtiqueta}>O problema</span>
            <h3 className={styles.blocoTitulo}>{problema.titulo}</h3>
            <ul className={styles.lista}>
              {problema.itens.map((i) => (
                <li key={i.titulo}>
                  <Icone nome="escudo" tamanho={18} />
                  <span>
                    <strong>{i.titulo}</strong>
                    <small>{i.texto}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.bloco} ${styles.blocoSolucao}`}>
            <span className={styles.blocoEtiqueta}>A solução</span>
            <h3 className={styles.blocoTitulo}>{solucao.titulo}</h3>
            <span className={styles.tecnologia}>{solucao.tecnologia}</span>
            <p className={styles.solucaoTexto}>{solucao.texto}</p>
            <ul className={styles.lista}>
              {solucao.bullets.map((b) => (
                <li key={b}>
                  <Icone nome="check" tamanho={18} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}