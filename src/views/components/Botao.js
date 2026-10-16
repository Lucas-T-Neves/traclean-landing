import styles from '../../styles/Botao.module.css';

/**
 * Botao de apresentacao. Recebe o que precisa e delega o clique:
 * nao decide nada, nao valida nada.
 */
export default function Botao({
  children,
  onClick,
  variante = 'primario',
  tamanho = 'medio',
  tipo = 'button',
  larguraTotal = false,
  className = '',
  ...resto
}) {
  const classes = [
    styles.botao,
    styles[variante],
    styles[tamanho],
    larguraTotal ? styles.inteiro : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={tipo} className={classes} onClick={onClick} {...resto}>
      {children}
    </button>
  );
}