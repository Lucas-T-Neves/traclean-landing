import styles from '../../styles/Ilustracoes.module.css';

/**
 * Ilustracoes vetoriais do Traclean (arte autoral).
 * Por que SVG e nao foto? O produto e ficticio: nao existe fotografia "real"
 * dele em lugar nenhum. Inventar uma fotocilosa quebraria a identidade da marca
 * e traria problemas de licenca. Vectorial resolve os dois problemas.
 */

export function IlustracaoProduto() {
  return (
    <svg className={styles.produto} viewBox="0 0 320 400" role="img" aria-label="Ilustracao do aspirador Traclean Pro Pet">
      <defs>
        <linearGradient id="corpoTraclean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#24344F" />
          <stop offset="100%" stopColor="#0E1727" />
        </linearGradient>
        <linearGradient id="limaTraclean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7FBB8" />
          <stop offset="100%" stopColor="#C6F24E" />
        </linearGradient>
        <radialGradient id="brilho" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C6F24E" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#C6F24E" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="160" cy="378" rx="118" ry="16" fill="#000" opacity="0.28" />
      <circle cx="250" cy="110" r="120" fill="url(#brilho)" />

      {/* alca */}
      <rect x="128" y="24" width="64" height="22" rx="11" fill="url(#limaTraclean)" />
      {/* corpo */}
      <rect x="112" y="38" width="96" height="126" rx="30" fill="url(#corpoTraclean)" stroke="#3C5375" strokeWidth="1.5" />
      {/* painel */}
      <rect x="128" y="58" width="64" height="34" rx="10" fill="#0B1320" stroke="#2E4A66" strokeWidth="1" />
      <circle cx="160" cy="75" r="7" fill="#C6F24E" />
      <rect x="142" y="104" width="36" height="4" rx="2" fill="#4A6183" />
      <rect x="150" y="114" width="20" height="4" rx="2" fill="#4A6183" />
      {/* anel de destaque */}
      <rect x="112" y="140" width="96" height="12" rx="6" fill="url(#limaTraclean)" />

      {/* deposito transparente */}
      <rect x="124" y="164" width="72" height="96" rx="26" fill="#0E1727" stroke="#4A6183" strokeWidth="1.5" />
      <circle cx="146" cy="200" r="4" fill="#8A6B3D" opacity="0.85" />
      <circle cx="170" cy="186" r="3" fill="#8A6B3D" opacity="0.7" />
      <circle cx="160" cy="216" r="5" fill="#8A6B3D" opacity="0.8" />
      <circle cx="178" cy="228" r="3" fill="#8A6B3D" opacity="0.6" />
      <circle cx="140" cy="232" r="3" fill="#8A6B3D" opacity="0.65" />

      {/* tubo */}
      <rect x="152" y="260" width="17" height="58" rx="8.5" fill="#24344F" stroke="#3C5375" strokeWidth="1.2" />
      <rect x="152" y="282" width="17" height="6" fill="#C6F24E" opacity="0.85" />

      {/* cabeca */}
      <rect x="96" y="312" width="128" height="38" rx="19" fill="url(#corpoTraclean)" stroke="#3C5375" strokeWidth="1.5" />
      <rect x="104" y="322" width="112" height="18" rx="9" fill="#0B1320" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={112 + i * 18} y="325" width="8" height="12" rx="4" fill="#4A6183" />
      ))}
      <circle cx="100" cy="331" r="4" fill="#C6F24E" />
      <circle cx="220" cy="331" r="4" fill="#C6F24E" />

      {/* brilho de "aspira" */}
      <path d="M262 250c14 0 22 8 26 18" stroke="#C6F24E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M276 232c20 2 32 14 36 28" stroke="#C6F24E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

const ARTES = {
  corpo: (
    <g>
      <rect x="46" y="34" width="108" height="128" rx="32" fill="url(#corpoTraclean)" stroke="#3C5375" strokeWidth="2" />
      <rect x="64" y="20" width="72" height="22" rx="11" fill="#C6F24E" />
      <rect x="62" y="62" width="76" height="40" rx="12" fill="#0B1320" stroke="#2E4A66" strokeWidth="1.5" />
      <circle cx="100" cy="82" r="9" fill="#C6F24E" />
      <rect x="78" y="118" width="44" height="5" rx="2.5" fill="#4A6183" />
      <rect x="46" y="138" width="108" height="13" rx="6.5" fill="#C6F24E" />
      <path d="M170 74h22M182 62l12 12-12 12" stroke="#C6F24E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="176" y="106" fontSize="13" fill="#94A3B8" fontFamily="monospace">1,6 kg</text>
    </g>
  ),
  escova: (
    <g>
      <rect x="36" y="46" width="148" height="58" rx="26" fill="url(#corpoTraclean)" stroke="#3C5375" strokeWidth="2" />
      <rect x="44" y="58" width="132" height="34" rx="17" fill="#0B1320" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={54 + i * 18} y="63" width="9" height="24" rx="4.5" fill="#4A6183" />
      ))}
      <path d="M56 92c8 10 22 12 34 6" stroke="#8A6B3D" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M148 78l14-12M148 84l16-4" stroke="#C6F24E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="196" cy="62" r="4" fill="#C6F24E" />
      <text x="60" y="128" fontSize="12" fill="#94A3B8" fontFamily="monospace">micro-cortes</text>
    </g>
  ),
  filtro: (
    <g>
      <rect x="58" y="34" width="104" height="118" rx="20" fill="#0E1727" stroke="#4A6183" strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="68" y={46 + i * 16} width="84" height="6" rx="3" fill="#26374F" />
      ))}
      <circle cx="86" cy="70" r="3.5" fill="#8A6B3D" />
      <circle cx="126" cy="94" r="3" fill="#8A6B3D" />
      <circle cx="104" cy="118" r="3.5" fill="#8A6B3D" opacity="0.7" />
      <rect x="84" y="136" width="52" height="16" rx="8" fill="#C6F24E" />
      <path d="M186 58l10 10M206 74l8-8" stroke="#C6F24E" strokeWidth="2.5" strokeLinecap="round" />
      <text x="58" y="176" fontSize="12" fill="#94A3B8" fontFamily="monospace">HEPA H13</text>
    </g>
  ),
  estacao: (
    <g>
      <path d="M30 30v130h160" stroke="#26374F" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="128" y="58" width="56" height="82" rx="14" fill="url(#corpoTraclean)" stroke="#3C5375" strokeWidth="2" />
      <rect x="128" y="84" width="56" height="9" rx="4.5" fill="#C6F24E" />
      <path d="M156 140v18" stroke="#4A6183" strokeWidth="4" strokeLinecap="round" />
      <path d="M136 176l20-18 20 18" stroke="#4A6183" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="192" cy="46" r="16" fill="none" stroke="#C6F24E" strokeWidth="2.5" />
      <path d="M192 38v10l7 4" stroke="#C6F24E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <text x="30" y="196" fontSize="12" fill="#94A3B8" fontFamily="monospace">recarga na parede</text>
    </g>
  ),
};

export function ArteGaleria({ nome }) {
  const arte = ARTES[nome] || ARTES.corpo;
  return (
    <svg className={styles.arte} viewBox="0 0 240 210" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="corpoTraclean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#24344F" />
          <stop offset="100%" stopColor="#0E1727" />
        </linearGradient>
      </defs>
      {arte}
    </svg>
  );
}

export default IlustracaoProduto;