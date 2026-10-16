import styles from '../../styles/ChamadaFinal.module.css';
import Botao from '../components/Botao';

export default function ChamadaFinal({ texto, oferta, aoComprar, jaComprou }) {
  return (
    <section className={styles.chamada} aria-labelledby="chamada-titulo">
      <div className={styles.conteudo}>
        <h2 className={styles.titulo} id="chamada-titulo">{texto.titulo}</h2>
        <p className={styles.subtitulo}>{texto.texto}</p>

        <div className={styles.preco}>
          <span className={styles.por}>{oferta.precoFormatado}</span>
          <span className={styles.de}>{oferta.deFormatado}</span>
        </div>

        <div className={styles.acoes}>
          <Botao onClick={aoComprar} variante="primario">
            {jaComprou ? 'Ver meu pedido' : 'Quero o Traclean'}
          </Botao>
        </div>

        <p className={styles.nota}>Produto fictício, compra fictícia. Nenhum dado sai do navegador.</p>
      </div>
    </section>
  );
}