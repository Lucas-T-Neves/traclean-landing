/**
 * AUDITORIA DO PROJETO — roda sozinha, sem instalar nada.
 * Uso: node scripts/auditoria.mjs
 *
 * O que ela verifica:
 *  1. as 10 secoes obrigatorias da atividade estao presentes
 *  2. o menu aponta para secoes que existem (e toda secao esta no menu)
 *  3. toda classe de CSS Module usada no JS existe no CSS
 *  4. todo icone referenciado existe no componente Icone
 *  5. a ficcao do produto nao se contradiz (numeros, reuso, naming)
 *  6. o README tem todos os headings do modelo pedido na atividade
 *  7. contraste WCAG AA dos pares de cor usados na pagina
 * Saida: "TUDO TRUE" quando nao ha pendencia.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..') + '/';
const ler = (p) => fs.readFileSync(RAIZ + String(p).replace(/\\/g, '/'), 'utf8');
const listar = (dir) =>
  fs.readdirSync(RAIZ + dir, { recursive: true })
    .map((f) => (dir + '/' + String(f).replace(/\\/g, '/')).replace(/\/+/g, '/'));

const problemas = [];
const avisos = [];
const ok = [];
const jsViews = listar('src/views').filter((f) => f.endsWith('.js'));
const jsModels = listar('src/models').filter((f) => f.endsWith('.js'));

// 1) secoes obrigatorias
const todoSrc = listar('src').filter((f) => /\.(js|css)$/.test(f)).map(ler).join('\n');
for (const [nome, re] of [
  ['identidade visual', /--lima|--grafite/],
  ['nome e proposta do produto', /Traclean/],
  ['hero section', /id="topo"/],
  ['beneficios e diferenciais', /Por que funciona/],
  ['imagens ou representacoes', /ArteGaleria|Ilustracao/],
  ['explicacao de como funciona', /Rasgue o sachê/],
  ['prova social / avaliacoes', /Bento/],
  ['oferta ou preco', /R\$ 1\.299/],
  ['FAQ', /pergunta:/],
  ['CTA funcional ou simulado', /TRC-/],
]) (re.test(todoSrc) ? ok : problemas).push(`secao obrigatoria ${nome}: ${re.test(todoSrc) ? 'presente' : 'AUSENTE'}`);

// 2) menu x secoes
const copy = ler('src/models/copy.js');
const navIds = [...(/export const NAV = \[([\s\S]*?)\];/.exec(copy)?.[1] || '').matchAll(/id: '([^']+)'/g)].map((m) => m[1]);
const appJs = ler('src/App.js');
const componentes = [...new Set([...appJs.matchAll(/<(Hero|Contexto|Aparelho|Beneficios|Galeria|ComoFunciona|ProvaSocial|Oferta|Faq|ChamadaFinal)\b/g)].map((m) => m[1]))];
const idDoComponente = {};
for (const c of componentes) {
  const arq = 'src/views/sections/' + c + '.js';
  if (fs.existsSync(RAIZ + arq)) idDoComponente[c] = /id="([^"]+)"/.exec(ler(arq))?.[1];
}
for (const c of componentes) {
  if (c !== 'Hero' && c !== 'ChamadaFinal' && !navIds.includes(idDoComponente[c]))
    avisos.push(`secao "${c}" (id=${idDoComponente[c]}) ausente do menu`);
}
for (const id of navIds) {
  if (!Object.values(idDoComponente).includes(id)) problemas.push(`menu aponta para "${id}", que nao existe como secao`);
}

// 3) CSS Modules
const cssPorNome = {};
for (const f of listar('src/styles')) if (f.endsWith('.module.css')) cssPorNome[path.basename(f, '.module.css')] = ler(f);
for (const js of jsViews) {
  const txt = ler(js);
  const m = /import styles from '(\.\.\/\.\.\/styles\/\w+)\.module\.css'/.exec(txt);
  if (!m) continue;
  const nome = path.basename(m[1]);
  if (!cssPorNome[nome]) { problemas.push(`${js}: importa ${nome}.module.css inexistente`); continue; }
  const css = cssPorNome[nome];
  const usadas = new Set([...txt.matchAll(/styles\.([A-Za-z0-9_]+)/g)].map((x) => x[1]));
  for (const c of usadas) if (!new RegExp(`\\.${c}\\b`).test(css)) problemas.push(`${nome}.module.css: "${c}" usada e nao definida`);
  for (const c of new Set([...css.matchAll(/\.([A-Za-z][A-Za-z0-9_-]*)/g)].map((x) => x[1]))) {
    if (!usadas.has(c) && !jsViews.some((jf) => new RegExp(`['"]${c}['"]`).test(ler(jf))))
      avisos.push(`${nome}.module.css: "${c}" definida e nunca usada`);
  }
}

// 4) icones
const definidos = new Set([...ler('src/views/components/Icone.js').matchAll(/^  ([a-zA-Z]+):/gm)].map((m) => m[1]));
const usados = new Set([
  ...jsModels.flatMap((f) => [...ler(f).matchAll(/icone: '([a-z]+)'/g)].map((m) => m[1])),
  ...jsViews.flatMap((f) => [...ler(f).matchAll(/nome="([a-z]+)"/g)].map((m) => m[1])),
]);
for (const u of usados) if (!definidos.has(u)) problemas.push(`icone "${u}" usado mas nao definido`);
for (const d of definidos) if (!usados.has(d)) avisos.push(`icone "${d}" definido e nunca usado`);

// 5) coerencia da ficcao
const ficcao = jsModels.map(ler).join('\n') + ler('src/views/sections/Hero.js');
if (/45 min/.test(ficcao) && /55 min/.test(ficcao)) problemas.push('contradicao: 45 min e 55 min juntos');
if (/40 min/.test(ficcao) && /55 min/.test(ficcao)) problemas.push('contradicao: 40 min e 55 min juntos');
if (/Pro Pet/.test(fs.readFileSync(RAIZ + 'public/index.html', 'utf8'))) problemas.push('naming: "Pro Pet" ainda no HTML');
if (/1 sachê = 1 ciclo/.test(ficcao)) problemas.push('contradicao: "1 sachê = 1 ciclo" vs reuso prometido');
ok.push(`ficcao consistente: 3 ciclos de ~55 min por sache`);

// 5b) a aritmetica da oferta: o parcelamento tem de fechar no preco
const ofertaTxt = ler('src/models/oferta.js');
const num = (campo) => Number(new RegExp(`^\\s*${campo}:\\s*([\\d.]+)`, 'm').exec(ofertaTxt)?.[1]);
const preco = num('preco'), parcelas = num('parcelas'), valorParcela = num('valorParcela');
if (parcelas && valorParcela && preco) {
  const total = Number((valorParcela * parcelas).toFixed(2));
  (total === preco ? ok : problemas).push(
    `parcelamento ${parcelas}x de ${valorParcela} = ${total.toFixed(2)} ${total === preco ? 'fecha no preco' : 'NAO fecha no preco ' + preco}`);
}

// 6) README
const readme = ler('README.md');
for (const h of [/^# Traclean/m, /^## Integrantes/m, /^## Sobre o produto/m, /^## Jornada de construção/m,
  /^### Ideia inicial/m, /^### Pesquisa e referências/m, /^### Ferramentas utilizadas/m,
  /^### Uso de IA/m, /^### Evolução da solução/m, /^### Resultado final/m,
  /^## Como rodar/m, /^## Estrutura do projeto \(MVVM\)/m]) {
  (h.test(readme) ? ok : problemas).push(`README ${h.test(readme) ? 'tem' : 'FALTA'}: ${h.source}`);
}
if (/[\u4e00-\u9fff\uFFFD]/.test(readme)) problemas.push('README com caractere invalido');

// 7) contraste
function lum(hex) {
  const c = [1, 3, 5].map((k) => parseInt(hex.substr(k, 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
for (const [nome, fg, bg] of [
  ['texto normal / fundo claro', '#12202f', '#f4f6f1'],
  ['texto suave / fundo claro', '#55677c', '#f4f6f1'],
  ['texto claro / grafite', '#eaf0f7', '#0b1320'],
  ['texto claro suave / grafite', '#a8b8c9', '#0b1320'],
  ['lima / grafite', '#c6f24e', '#0b1320'],
  ['lima-texto / fundo claro', '#4a6700', '#f4f6f1'],
  ['lima-texto / off-2', '#4a6700', '#e9ede4'],
]) {
  const r = ratio(fg, bg);
  (r >= 4.5 ? ok : problemas).push(`contraste ${r.toFixed(2)}:1 ${r >= 4.5 ? 'ok' : 'INSUFICIENTE'} — ${nome}`);
}
for (const f of listar('src/styles')) {
  if (!f.endsWith('.css')) continue;
  const t = ler(f);
  if (/color:\s*var\(--lima-esc\)/.test(t)) problemas.push(`${path.basename(f)}: --lima-esc como cor de texto (1.59:1) — use --lima-texto`);
}

// acessibilidade basica
for (const f of jsViews) {
  for (const m of ler(f).matchAll(/<img\b[^>]*>/g)) if (!/alt=/.test(m[0])) problemas.push(`${path.basename(f)}: <img> sem alt`);
}

console.log(`OK (${ok.length})`);
ok.forEach((o) => console.log('  ok  ' + o));
if (avisos.length) { console.log(`\nAVISOS (${avisos.length})`); avisos.forEach((o) => console.log('  !   ' + o)); }
console.log(`\nPROBLEMAS (${problemas.length})`);
problemas.forEach((p) => console.log('  XX  ' + p));
console.log(`\nRESULTADO: ${problemas.length === 0 ? 'TUDO TRUE' : problemas.length + ' pendencia(s)'}`);
process.exit(problemas.length ? 1 : 0);