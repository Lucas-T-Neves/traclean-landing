import styles from '../../styles/Etiqueta.module.css';

/** Etiqueta pequena (selo de lancamento, tag de beneficio, etc). */
export default function Etiqueta({ children, tom = 'lima' }) {
  return <span className={`${styles.etiqueta} ${styles[tom]}`}>{children}</span>;
}