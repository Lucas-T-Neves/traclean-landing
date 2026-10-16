import styles from '../../styles/Icone.module.css';

/**
 * Conjunto de icones em SVG inline.
 * Traco unico, currentColor, viewBox unico: assim a view escolhe o icone
 * pelo nome (vindo do model) e o CSS controla cor e tamanho.
 */
const TRACOS = {
  onda: (
    <>
      <path d="M4 12h2M8 8v8M12 5v14M16 9v6M20 11v2" />
    </>
  ),
  escova: (
    <>
      <rect x="5" y="4" width="14" height="6" rx="3" />
      <path d="M7 10v4M10 10v6M13 10v6M16 10v4M18 10v3" />
      <path d="M4 16c2.5 1.6 5 2.4 8 2.4s5.5-.8 8-2.4" />
    </>
  ),
  olho: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  bateria: (
    <>
      <rect x="2.5" y="7" width="16" height="10" rx="3" />
      <path d="M21 10.5v3" />
      <path d="M6.5 10.5v3M10 10.5v3" />
    </>
  ),
  filtro: (
    <>
      <path d="M4 5h16l-6 7.5V19l-4 1.5v-8z" />
      <path d="M8.5 8.5h7" />
    </>
  ),
  lixeira: (
    <>
      <path d="M4.5 7h15M9 7V4.5h6V7M6.5 7l1 13h9l1-13" />
      <path d="M10.5 11v5.5M13.5 11v5.5" />
    </>
  ),
  aspirador: (
    <>
      <path d="M7 3.5h5.5a3 3 0 0 1 3 3v4.5" />
      <rect x="5" y="11" width="10" height="8.5" rx="3" />
      <path d="M10 19.5v1.5M15.5 11v4.5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  seta: <path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />,
  raio: <path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z" />,
  escudo: (
    <>
      <path d="M12 3l7 2.5v6c0 4.5-3 7.5-7 9.5-4-2-7-5-7-9.5v-6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
};

export default function Icone({ nome, tamanho = 24, className = '', rotulo }) {
  const traco = TRACOS[nome];
  if (!traco) return null;

  return (
    <svg
      className={`${styles.icone} ${className}`}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={rotulo ? 'img' : 'presentation'}
      aria-label={rotulo || undefined}
      aria-hidden={rotulo ? undefined : 'true'}
      focusable="false"
    >
      {traco}
    </svg>
  );
}