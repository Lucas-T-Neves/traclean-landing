import styles from '../../styles/ProvaSocial.module.css';
import Secao from '../components/Secao';
import Estrelas from '../components/Estrelas';

function iniciais(nome) {
  return nome
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

export default function ProvaSocial({ meta, geral, depoimentos }) {
  return (
    <Secao id="avaliacoes" etiqueta={meta.etiqueta} titulo={meta.titulo} subtitulo={meta.subtitulo} tom="escuro">
      <div className={styles.resumo}>
        <span className={styles.nota}>{String(geral.nota).replace('.', ',')}</span>
        <Estrelas nota={Math.round(geral.nota)} />
        <span className={styles.total}>
          {geral.total.toLocaleString('pt-BR')} avaliações fictícias
        </span>
        <span className={styles.selo}>{geral.selo}</span>
      </div>

      <ul className={styles.grade}>
        {depoimentos.map((d) => (
          <li key={d.id} className={`${styles.cartao} ${d.ehPet ? styles.cartaoPet : ''}`}>
            <Estrelas nota={d.nota} />
            <h3 className={styles.titulo}>{d.titulo}</h3>
            <p className={styles.texto}>{d.texto}</p>
            <footer className={styles.autor}>
              <span className={styles.avatar}>{d.ehPet ? '🐱' : iniciais(d.nome)}</span>
              <span>
                <strong>{d.nome}</strong>
                <small>{d.cidade}</small>
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </Secao>
  );
}