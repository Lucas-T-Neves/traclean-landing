import styles from '../../styles/Logo.module.css';

/** Logotipo do Traclean: marca em texto + simbolo vetorial. */
export default function Logo({ compacta = false, tom = 'escuro' }) {
  return (
    <span className={`${styles.logo} ${styles[tom]}`}>
      <svg className={styles.simbolo} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="30" height="30" rx="9" fill="currentColor" opacity="0.14" />
        <path
          d="M9 8v11a7 7 0 0 0 14 0V8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="16" cy="24" r="2.6" fill="currentColor" />
      </svg>
      {!compacta && <span className={styles.nome}>Traclean</span>}
    </span>
  );
}