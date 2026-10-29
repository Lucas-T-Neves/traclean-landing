import { useEffect, useRef } from 'react';
import styles from '../../styles/Modal.module.css';
import Botao from './Botao';

// Elementos que podem receber foco dentro do dialogo.
const FOCAVEIS =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modal acessivel: fecha com Esc, prende o foco dentro da caixa, isola o
 * conteudo de tras (teclado e leitor de tela) e devolve o foco ao fechar.
 * Nenhuma regra de negocio aqui.
 */
export default function Modal({
  aberto,
  aoFechar,
  aoConfirmar,
  aoAtualizarCampo,
  titulo,
  subtitulo,
  campos,
  form,
  erros,
  mostrarErro,
  check,
  checkRotulo,
  pedido,
  tentouEnviar,
}) {
  const caixaRef = useRef(null);
  const fundoRef = useRef(null);
  const focoAnterior = useRef(null);

  useEffect(() => {
    if (!aberto) return undefined;

    focoAnterior.current = document.activeElement;

    // Isola o resto da pagina: o fundo nao recebe foco nem e lido.
    const fundo = fundoRef.current;
    const irmaos = fundo?.parentElement
      ? [...fundo.parentElement.children].filter((el) => el !== fundo)
      : [];
    irmaos.forEach((el) => {
      el.inert = true;
      el.setAttribute('aria-hidden', 'true');
    });

    // Move o foco para dentro do dialogo assim que ele abre.
    caixaRef.current?.querySelector('input, button, a[href]')?.focus();

    function aoTeclar(e) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        aoFechar();
        return;
      }
      if (e.key !== 'Tab' || !caixaRef.current) return;

      const itens = [...caixaRef.current.querySelectorAll(FOCAVEIS)].filter(
        (el) => el.offsetParent !== null
      );
      if (!itens.length) return;

      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      const ativo = document.activeElement;
      const foraDaCaixa = !caixaRef.current.contains(ativo);

      if (e.shiftKey && (ativo === primeiro || foraDaCaixa)) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && (ativo === ultimo || foraDaCaixa)) {
        e.preventDefault();
        primeiro.focus();
      }
    }

    document.addEventListener('keydown', aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = overflowAnterior;
      irmaos.forEach((el) => {
        el.inert = false;
        el.removeAttribute('aria-hidden');
      });
      if (focoAnterior.current && typeof focoAnterior.current.focus === 'function') {
        focoAnterior.current.focus();
      }
    };
  }, [aberto, aoFechar]);

  // Depois de enviar, o formulario some: leva o foco ao titulo da confirmacao.
  useEffect(() => {
    if (!aberto || !pedido) return;
    caixaRef.current?.querySelector('h3')?.focus();
  }, [aberto, pedido]);

  // Se a validacao falhou, leva o foco ao primeiro campo com erro.
  useEffect(() => {
    if (!aberto || !tentouEnviar || pedido) return;
    caixaRef.current?.querySelector('[aria-invalid="true"]')?.focus();
  }, [aberto, tentouEnviar, pedido]);

  if (!aberto) return null;

  return (
    <div className={styles.fundo} onClick={aoFechar} role="presentation" ref={fundoRef}>
      <div
        className={styles.caixa}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        onClick={(e) => e.stopPropagation()}
        ref={caixaRef}
      >
        <button type="button" className={styles.fechar} onClick={aoFechar} aria-label="Fechar">
          <span aria-hidden="true">×</span>
        </button>

        {pedido ? (
          <div className={styles.confirmacao}>
            <span className={styles.selo}>Pedido simulado</span>
            <h3 className={styles.titulo} id="modal-titulo" tabIndex={-1}>
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
              {campos.map((c) => {
                const idCampo = `campo-${c.id}`;
                const idErro = `erro-${c.id}`;
                const invalido = mostrarErro(c.id);
                return (
                  <div key={c.id} className={styles.campo}>
                    {/* rotulo associado por htmlFor: o nome do campo nao engole a mensagem de erro */}
                    <label className={styles.rotulo} htmlFor={idCampo}>{c.rotulo}</label>
                    <input
                      id={idCampo}
                      name={c.id}
                      className={`${styles.input} ${invalido ? styles.inputErro : ''}`}
                      type={c.tipo}
                      placeholder={c.placeholder}
                      value={form[c.id]}
                      onChange={(e) => aoAtualizarCampo(c.id, e.target.value)}
                      aria-invalid={invalido}
                      aria-required="true"
                      aria-describedby={invalido ? idErro : undefined}
                    />
                    {invalido && (
                      <span className={styles.erro} id={idErro} role="alert">
                        {erros[c.id]}
                      </span>
                    )}
                  </div>
                );
              })}
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
