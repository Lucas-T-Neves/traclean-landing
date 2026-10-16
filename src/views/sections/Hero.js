import styles from '../../styles/Hero.module.css';
import Botao from '../components/Botao';
import Etiqueta from '../components/Etiqueta';
import { IlustracaoProduto } from '../components/Ilustracoes';
import petGato from '../../assets/images/pet-gato.jpg';

export default function Hero({ hero, produto, aoComprar, aoRolarPara, jaComprou }) {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.fundoBrilho} aria-hidden="true" />

      <div className={styles.conteudo}>
        <div className={styles.texto}>
          <Etiqueta>{hero.etiqueta}</Etiqueta>

          <h1 className={styles.titulo}>
            O aspirador que <span className={styles.destaque}>{hero.destaque}</span>.
          </h1>

          <p className={styles.subtitulo}>{hero.subtitulo}</p>

          <div className={styles.acoes}>
            <Botao onClick={aoComprar} variante="primario">
              {jaComprou ? 'Ver meu pedido' : hero.ctaPrimario}
            </Botao>
            <Botao onClick={() => aoRolarPara('como-funciona')} variante="fantasma">
              {hero.ctaSecundario}
            </Botao>
          </div>

          <p className={styles.nota}>{hero.nota}</p>

          <ul className={styles.selos}>
            {produto.selos.map((s) => (
              <li key={s.unidade} className={styles.selo}>
                <span className={styles.seloValor}>
                  {s.valor}
                  <small>{s.unidade}</small>
                </span>
                <span className={styles.seloRotulo}>{s.rotulo}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.arte}>
          <IlustracaoProduto />
          <figure className={styles.cartaoPet}>
            <img src={petGato} alt="Gato deitado, tranquilo, durante a limpeza" />
            <figcaption>Aprovado no teste interno (9 de 10 gatos)</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}