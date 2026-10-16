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
  sache: (
    <g>
      <path d="M70 26h100l-8 152H78z" fill="url(#corpoTraclean)" stroke="#3C5375" strokeWidth="2" />
      <path d="M70 26c8-7 20-7 28 0 8-7 20-7 28 0 8-7 20-7 28 0" fill="none" stroke="#3C5375" strokeWidth="2" />
      <rect x="80" y="58" width="80" height="34" rx="8" fill="#0B1320" />
      <text x="120" y="81" fontSize="15" fill="#C6F24E" fontFamily="monospace" textAnchor="middle">TRACLEAN</text>
      <rect x="80" y="104" width="80" height="8" rx="4" fill="#4A6183" />
      <rect x="80" y="120" width="56" height="8" rx="4" fill="#4A6183" />
      <text x="120" y="160" fontSize="20" fill="#C6F24E" fontFamily="monospace" textAnchor="middle">400 g</text>
      <path d="M186 40c8 6 12 14 12 24" stroke="#C6F24E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M62 40c-8 6-12 14-12 24" stroke="#C6F24E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  ),
  balde: (
    <g>
      <path d="M64 62h112l-10 118H74z" fill="#0E1727" stroke="#4A6183" strokeWidth="2" />
      <path d="M68 96h104l-8 84H76z" fill="#2E4A66" opacity="0.9" />
      <path d="M70 74c14 12 40 18 56 6 10-7 22-5 30 3" stroke="#5E7A9E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M60 52h120" stroke="#3C5375" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 20v22" stroke="#C6F24E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="52" r="4" fill="#C6F24E" />
      <circle cx="104" cy="120" r="4" fill="#8A9BB5" opacity="0.8" />
      <circle cx="132" cy="140" r="3" fill="#8A9BB5" opacity="0.6" />
      <circle cx="118" cy="156" r="4" fill="#8A9BB5" opacity="0.7" />
      <text x="120" y="200" fontSize="12" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">2 L + 1 sachê</text>
    </g>
  ),
  filtro: (
    <g>
      <rect x="82" y="34" width="76" height="110" rx="16" fill="#0E1727" stroke="#4A6183" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="90" y={48 + i * 17} width="60" height="6" rx="3" fill="#26374F" />
      ))}
      <circle cx="106" cy="70" r="3.5" fill="#8A6B3D" />
      <circle cx="134" cy="92" r="3" fill="#8A6B3D" />
      <circle cx="116" cy="116" r="3.5" fill="#8A6B3D" opacity="0.7" />
      <rect x="100" y="132" width="40" height="14" rx="7" fill="#C6F24E" />
      <path d="M176 56l10 10M194 74l8-8" stroke="#C6F24E" strokeWidth="2.5" strokeLinecap="round" />
      <text x="120" y="176" fontSize="12" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">lavar em 10 s</text>
    </g>
  ),
  coleta: (
    <g>
      <circle cx="104" cy="104" r="52" fill="none" stroke="#C6F24E" strokeWidth="2.5" strokeDasharray="6 6" />
      <path d="M86 78c10-12 28-12 38 0 8 10 4 26-10 32-14 6-30-2-30-16" fill="none" stroke="#C6F24E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M150 62l12-10-2 16" fill="#C6F24E" />
      <circle cx="92" cy="128" r="3.5" fill="#8A9BB5" />
      <circle cx="118" cy="136" r="3" fill="#8A9BB5" />
      <circle cx="106" cy="112" r="3" fill="#8A9BB5" opacity="0.7" />
      <text x="104" y="186" fontSize="12" fill="#94A3B8" fontFamily="monospace" textAnchor="middle">3 ciclos</text>
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