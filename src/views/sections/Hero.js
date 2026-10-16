import styles from '../../styles/Hero.module.css';
import Botao from '../components/Botao';
import Etiqueta from '../components/Etiqueta';
import Icone from '../components/Icone';
import { IlustracaoProduto } from '../components/Ilustracoes';
import petGato from '../../assets/images/pet-gato.jpg';

export default function Hero({ hero, produto, receita, aoComprar, aoRolarPara, jaComprou }) {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.fundoBrilho} aria-hidden="true" />

      <div className={styles.conteudo}>
        <div className={styles.texto}>
          <Etiqueta>{hero.etiqueta}</Etiqueta>

          <h1 className={styles.titulo}>
            {hero.tituloAntes} <span className={styles.destaque}>{hero.tituloDestaque}</span>
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

          {/* A receita: o nucleo do produto tem que ficar explicito em 3 segundos */}
          <div className={styles.receita} aria-label="Como o Traclean e produzido">
            <div className={styles.receitaItem}>
              <Icone nome="sache" tamanho={22} />
              <span>
                <strong>{receita.entrada1}</strong>
                <small>{receita.entrada1Legenda}</small>
              </span>
            </div>
            <span className={styles.receitaOp} aria-hidden="true">+</span>
            <div className={styles.receitaItem}>
              <Icone nome="agua" tamanho={22} />
              <span>
                <strong>{receita.entrada2}</strong>
                <small>{receita.entrada2Legenda}</small>
              </span>
            </div>
            <span className={styles.receitaOp} aria-hidden="true">=</span>
            <div className={styles.receitaItem}>
              <Icone nome="reacao" tamanho={22} />
              <span>
                <strong>{receita.reacao}</strong>
                <small>{receita.reacaoLegenda}</small>
              </span>
            </div>
            <span className={styles.receitaOp} aria-hidden="true">→</span>
            <div className={`${styles.receitaItem} ${styles.receitaResultado}`}>
              <Icone nome="aspirador" tamanho={22} />
              <span>
                <strong>{receita.resultado}</strong>
                <small>{receita.resultadoLegenda}</small>
              </span>
            </div>
          </div>

          <p className={styles.receitaAviso}>
            <Icone nome="tempo" tamanho={16} />
            {receita.aviso}
          </p>

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
            <figcaption>Fiscalizou a reação inteira. Aprovado (9 de 10 gatos)</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}