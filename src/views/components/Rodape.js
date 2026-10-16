import styles from '../../styles/Rodape.module.css';
import Logo from './Logo';

/** Rodape: aviso de produto ficticio + creditos. */
export default function Rodape({ linhas, creditos }) {
  return (
    <footer className={styles.rodape}>
      <div className={styles.interno}>
        <Logo tom="claro" />
        <ul className={styles.linhas}>
          {linhas.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <p className={styles.creditos}>{creditos}</p>
      </div>
    </footer>
  );
}