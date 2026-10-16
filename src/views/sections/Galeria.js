import styles from '../../styles/Galeria.module.css';
import Secao from '../components/Secao';
import { ArteGaleria } from '../components/Ilustracoes';

export default function Galeria({ meta, itens }) {
  return (
    <Secao id="galeria" etiqueta={meta.etiqueta} titulo={meta.titulo} subtitulo={meta.subtitulo} tom="escuro">
      <ul className={styles.grade}>
        {itens.map((g) => (
          <li key={g.id} className={styles.cartao}>
            <div className={styles.arte}>
              <ArteGaleria nome={g.arte} />
            </div>
            <div className={styles.conteudo}>
              <span className={styles.destaque}>{g.destaque}</span>
              <h3 className={styles.titulo}>{g.rotulo}</h3>
              <p className={styles.texto}>{g.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}