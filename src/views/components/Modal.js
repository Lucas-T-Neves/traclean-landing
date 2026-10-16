import { useEffect } from 'react';
import styles from '../../styles/Modal.module.css';
import Botao from './Botao';

/**
 * Modal acessivel: fecha com Esc, bloqueia scroll do fundo e
 * devolve o foco ao fechar. Nenhuma regra de negocio aqui.
 */
export default function Modal({ aberto, aoFechar, aoConfirmar, aoAtualizarCampo, titulo, subtitulo, campos, form, erros, mostrarErro, check, checkRotulo, pedido }) {
  useEffect(() => {
    if (!aberto) return undefined;
    function aoTeclar(e) {
      if (e.key === 'Escape') aoFechar();
    }
    document.addEventListener('keydown', aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto, aoFechar]);

  if (!aberto) return null;

  return (
    <div className={styles.fundo} onClick={aoFechar} role="presentation">
      <div
        className={styles.caixa}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.fechar} onClick={aoFechar} aria-label="Fechar">
          <span aria-hidden="true">×</span>
        </button>

        {pedido ? (
          <div className={styles.confirmacao}>
            <span className={styles.selo}>Pedido simulado</span>
            <h3 className={styles.titulo} id="modal-titulo">
              Pronto, {pedido.nome.split(' ')[0]}!
            </h3>
            <p className={styles.subtitulo}>{pedido.situacao}. Guarde o código abaixo como se fosse real:</p>

            <div className={styles.codigo}>{pedido.codigo}</div>

            <dl className={styles.resumo}>
              <div>
                <dt>Total</dt>
                <dd>{pedido.total}</dd>
              </div>
              <div>
                <dt>Parcelamento</dt>
                <dd>{pedido.parcelas}</dd>
              </div>
              <div>
                <dt>Entrega</dt>
                <dd>{pedido.cidade}</dd>
              </div>
              <div>
                <dt>Sua posição no lote</dt>
                <dd>{pedido.posicaoFila}º de 312</dd>
              </div>
            </dl>

            <div className={styles.acoes}>
              <Botao onClick={aoFechar} variante="primario">Continuar explorando</Botao>
            </div>
          </div>
        ) : (
          <form
            className={styles.formulario}
            onSubmit={(e) => {
              e.preventDefault();
              aoConfirmar();
            }}
          >
            <h3 className={styles.titulo} id="modal-titulo">{titulo}</h3>
            <p className={styles.subtitulo}>{subtitulo}</p>

            <div className={styles.campos}>
              {campos.map((c) => (
                <label key={c.id} className={styles.campo}>
                  <span className={styles.rotulo}>{c.rotulo}</span>
                  <input
                    className={`${styles.input} ${mostrarErro(c.id) ? styles.inputErro : ''}`}
                    type={c.tipo}
                    placeholder={c.placeholder}
                    value={form[c.id]}
                    onChange={(e) => aoAtualizarCampo(c.id, e.target.value)}
                    aria-invalid={mostrarErro(c.id)}
                  />
                  {mostrarErro(c.id) && <span className={styles.erro}>{erros[c.id]}</span>}
                </label>
              ))}
            </div>

            <label className={styles.check}>
              <input type="checkbox" checked={!!check} onChange={(e) => aoAtualizarCampo('pet', e.target.checked)} />
              <span>{checkRotulo}</span>
            </label>

            <div className={styles.acoes}>
              <Botao tipo="submit" variante="primario" larguraTotal>
                Confirmar pedido fictício
              </Botao>
            </div>
            <p className={styles.aviso}>Nenhum dado é enviado: tudo acontece no seu navegador.</p>
          </form>
        )}
      </div>
    </div>
  );
}