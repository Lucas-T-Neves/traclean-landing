import styles from '../../styles/ComoFunciona.module.css';
import Secao from '../components/Secao';
import Icone from '../components/Icone';
import petGato from '../../assets/images/pet-gato.jpg';

export default function ComoFunciona({ meta, passos, reacao }) {
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

      <div className={styles.bloco}>
        <figure className={styles.blocoFoto}>
          <img
            src={petGato}
            alt="Gato descansando enquanto a reacao acontece no balde"
          />
        </figure>
        <div className={styles.blocoTexto}>
          <h3 className={styles.blocoTitulo}>{reacao.titulo}</h3>
          <p className={styles.blocoDescricao}>{reacao.texto}</p>
          <ul className={styles.blocoLista}>
            {reacao.bullets.map((b) => (
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