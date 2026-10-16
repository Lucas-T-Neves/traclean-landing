import styles from '../../styles/ComoFunciona.module.css';
import Secao from '../components/Secao';
import Icone from '../components/Icone';
import petGato from '../../assets/images/pet-gato.jpg';

export default function ComoFunciona({ meta, passos, modoPet }) {
  return (
    <Secao id="como-funciona" etiqueta={meta.etiqueta} titulo={meta.titulo} subtitulo={meta.subtitulo} tom="claro">
      <ol className={styles.passos}>
        {passos.map((p) => (
          <li key={p.numero} className={styles.passo}>
            <span className={styles.numero}>{p.numero}</span>
            <span className={styles.icone}>
              <Icone nome={p.icone} tamanho={26} />
            </span>
            <h3 className={styles.titulo}>{p.titulo}</h3>
            <p className={styles.texto}>{p.texto}</p>
          </li>
        ))}
      </ol>

      <div className={styles.modoPet}>
        <figure className={styles.modoPetFoto}>
          <img
            src={petGato}
            alt="Gato descansando enquanto o aspirador trabalha na sala"
          />
        </figure>
        <div className={styles.modoPetTexto}>
          <h3 className={styles.modoPetTitulo}>{modoPet.titulo}</h3>
          <p className={styles.modoPetDescricao}>{modoPet.texto}</p>
          <ul className={styles.modoPetLista}>
            {modoPet.bullets.map((b) => (
              <li key={b}>
                <Icone nome="check" tamanho={16} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Secao>
  );
}