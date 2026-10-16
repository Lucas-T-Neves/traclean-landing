import styles from '../../styles/Faq.module.css';
import Secao from '../components/Secao';
import Botao from '../components/Botao';

export default function Faq({ meta, itens, total, todasAbertas, alternar, abrirTodas, fecharTodas }) {
  return (
    <Secao id="faq" etiqueta={meta.etiqueta} titulo={meta.titulo} subtitulo={meta.subtitulo} tom="escuro">
      <div className={styles.barra}>
        <span className={styles.contagem}>{total} dúvidas</span>
        <Botao onClick={todasAbertas ? fecharTodas : abrirTodas} variante="fantasma" tamanho="pequeno">
          {todasAbertas ? 'Fechar todas' : 'Abrir todas'}
        </Botao>
      </div>

      <ul className={styles.lista}>
        {itens.map((item) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.pergunta}
              onClick={() => alternar(item.id)}
              aria-expanded={item.aberta}
              aria-controls={`resposta-${item.id}`}
            >
              <span>{item.pergunta}</span>
              <span className={`${styles.seta} ${item.aberta ? styles.setaAberta : ''}`} aria-hidden="true" />
            </button>
            <div id={`resposta-${item.id}`} className={styles.resposta} hidden={!item.aberta}>
              <p>{item.resposta}</p>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}