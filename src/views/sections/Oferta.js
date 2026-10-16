import styles from '../../styles/Oferta.module.css';
import Secao from '../components/Secao';
import Botao from '../components/Botao';
import Etiqueta from '../components/Etiqueta';
import Icone from '../components/Icone';

export default function Oferta({ meta, oferta, produto, aoComprar, jaComprou }) {
  return (
    <Secao id="oferta" etiqueta={meta.etiqueta} titulo={meta.titulo} subtitulo={meta.subtitulo} tom="claro">
      <div className={styles.painel}>
        <div className={styles.precoBloco}>
          <Etiqueta tom="lima">{oferta.selo}</Etiqueta>

          <div className={styles.precos}>
            <span className={styles.de}>{oferta.deFormatado}</span>
            <span className={styles.por}>{oferta.precoFormatado}</span>
            <span className={styles.desconto}>-{oferta.descontoReal}%</span>
          </div>

          <p className={styles.parcelas}>
            ou <strong>{oferta.parcelasTexto}</strong>
          </p>
          <p className={styles.pagamento}>{oferta.condicaoPagamento}</p>
          <p className={styles.envio}>{oferta.envio}</p>

          <Botao onClick={aoComprar} variante="primario" larguraTotal>
            {jaComprou ? 'Ver meu pedido' : 'Finalizar pedido fictício'}
          </Botao>

          <ul className={styles.garantias}>
            {produto.garantias.map((g) => (
              <li key={g.titulo}>
                <Icone nome="escudo" tamanho={18} />
                <span>
                  <strong>{g.titulo}</strong>
                  <small>{g.texto}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.detalhesBloco}>
          <h3 className={styles.detalhesTitulo}>Vem na caixa</h3>
          <ul className={styles.incluso}>
            {oferta.incluso.map((i) => (
              <li key={i}>
                <Icone nome="check" tamanho={18} />
                {i}
              </li>
            ))}
          </ul>

          <h3 className={styles.detalhesTitulo}>Ficha técnica</h3>
          <dl className={styles.ficha}>
            {produto.fichaTecnica.map((f) => (
              <div key={f.rotulo} className={styles.fichaLinha}>
                <dt>{f.rotulo}</dt>
                <dd>{f.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Secao>
  );
}