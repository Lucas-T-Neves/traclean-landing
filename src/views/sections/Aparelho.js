import styles from '../../styles/Aparelho.module.css';
import Etiqueta from '../components/Etiqueta';
import Icone from '../components/Icone';
import { IlustracaoAparelho } from '../components/Ilustracoes';

/** Secao "O VC-9": o aparelho ficticio que a reacao materializa. */
export default function Aparelho({ meta, aparelho }) {
  return (
    <section className={styles.aparelho} id="aparelho" aria-labelledby="aparelho-titulo">
      <div className={styles.conteudo}>
        <div className={styles.arte}>
          <IlustracaoAparelho />
        </div>

        <div className={styles.info}>
          <Etiqueta>{meta.etiqueta}</Etiqueta>
          <h2 className={styles.titulo} id="aparelho-titulo">
            {aparelho.marca} <span className={styles.modelo}>{aparelho.modelo}</span>
          </h2>
          <p className={styles.tagline}>“{aparelho.tagline}”</p>
          <p className={styles.resumo}>{aparelho.resumo}</p>
          <p className={styles.licenca}>
            <Icone nome="reator" tamanho={18} />
            {aparelho.licenca}
          </p>

          <h3 className={styles.subtitulo}>Aparência</h3>
          <ul className={styles.aparencia}>
            {aparelho.aparencia.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h3 className={styles.subtitulo}>Capacidades</h3>
          <dl className={styles.ficha}>
            {aparelho.capacidades.map((c) => (
              <div key={c.rotulo}>
                <dt>{c.rotulo}</dt>
                <dd>{c.valor}</dd>
              </div>
            ))}
          </dl>

          <h3 className={styles.subtitulo}>Energia e segurança</h3>
          <dl className={styles.ficha}>
            {aparelho.energia.map((e) => (
              <div key={e.rotulo}>
                <dt>{e.rotulo}</dt>
                <dd>{e.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}