import styles from '../../styles/Secao.module.css';

/** Casca padrao de secao: etiqueta, titulo, subtitulo. Sem logica. */
export default function Secao({ id, etiqueta, titulo, subtitulo, tom = 'claro', children, classe = '' }) {
  return (
    <section id={id} className={`${styles.secao} ${styles[tom]} ${classe}`}>
      <div className={styles.conteudo}>
        <header className={styles.cabecalho}>
          {etiqueta && <span className={styles.etiqueta}>{etiqueta}</span>}
          <h2 className={styles.titulo}>{titulo}</h2>
          {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}