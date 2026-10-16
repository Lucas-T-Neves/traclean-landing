import styles from '../../styles/Estrelas.module.css';

/** Avaliacao em estrelas. A nota ja vem pronta do viewmodel. */
export default function Estrelas({ nota = 5, rotulo }) {
  const estrelas = [1, 2, 3, 4, 5];

  return (
    <span className={styles.estrelas} role="img" aria-label={`Nota ${nota} de 5`}>
      {estrelas.map((n) => (
        <svg
          key={n}
          className={n <= nota ? styles.cheia : styles.vazia}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4 6.1 20.7l1.3-6.6L2.5 9.5l6.6-.8z" />
        </svg>
      ))}
      {rotulo && <span className={styles.rotulo}>{rotulo}</span>}
    </span>
  );
}