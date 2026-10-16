import styles from '../../styles/Beneficios.module.css';
import Secao from '../components/Secao';
import Icone from '../components/Icone';

export default function Beneficios({ meta, itens }) {
  return (
    <Secao id="beneficios" etiqueta={meta.etiqueta} titulo={meta.titulo} subtitulo={meta.subtitulo} tom="claro">
      <ul className={styles.grade}>
        {itens.map((b) => (
          <li key={b.id} className={styles.cartao}>
            <span className={styles.iconeFundo}>
              <Icone nome={b.icone} tamanho={22} />
            </span>
            <h3 className={styles.titulo}>{b.titulo}</h3>
            <p className={styles.texto}>{b.texto}</p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}