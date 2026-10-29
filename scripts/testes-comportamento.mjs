/**
 * TESTE DE COMPORTAMENTO — roda a pagina de verdade e verifica o que o usuario ve.
 * Uso: node scripts/testes-comportamento.mjs   (depois de `npm run build`)
 *
 * Sobe a build em um servidor local, abre num DOM real (jsdom) e confere:
 * as secoes, a receita do produto, o FAQ (abre e fecha), o checkout simulado
 * (validacao bloqueia envio vazio e o pedido ficticio e confirmado) e o CTA
 * mudando de "Comprar" para "Ver meu pedido".
 *
 * Precisa de jsdom: npm install -D jsdom
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM, VirtualConsole } from 'jsdom';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(RAIZ, 'build');
const PORTA = 5099;

if (!fs.existsSync(BUILD)) {
  console.error('Pasta build/ nao encontrada. Rode `npm run build` antes.');
  process.exit(1);
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };

const servidor = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const arq = path.join(BUILD, p);
  if (!fs.existsSync(arq) || !fs.statSync(arq).isFile()) { res.writeHead(404); res.end('x'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(arq)] || 'application/octet-stream' });
  fs.createReadStream(arq).pipe(res);
});
await new Promise((r) => servidor.listen(PORTA, r));

const erros = [];
const dom = await JSDOM.fromURL(`http://localhost:${PORTA}/`, {
  runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true,
  virtualConsole: new VirtualConsole().on('jsdomError', (e) => erros.push(String(e))),
});
const { window } = dom;
const doc = window.document;
await new Promise((r) => window.addEventListener('load', r, { once: true }));
await new Promise((r) => setTimeout(r, 900));

const ok = [], falha = [];
const checar = (nome, cond) => (cond ? ok : falha).push(nome);
const q = (s) => doc.querySelector(s);
const qa = (s) => Array.from(doc.querySelectorAll(s));
const texto = () => doc.body.textContent.replace(/\u00a0/g, ' ');
const modalTexto = () => (q('[role="dialog"]')?.textContent || '').replace(/\u00a0/g, ' ');

checar('sem erro de runtime', erros.length === 0);
checar('titulo correto', doc.title.includes('Traclean'));
checar('link pular para conteudo', !!Array.from(doc.querySelectorAll('a')).find((a) => a.textContent.includes('Pular para')));
checar('menu com 8 links', qa('header nav a').length === 8);

checar('hero: headline do po', /Quatrocentos gramas de pó\.\s*Um aspirador inteiro\./.test(texto()));
checar('hero: cita a Stark', /Stark Industries/.test(texto()));
checar('hero: diz que dilui em agua', /2 litros de água fria/.test(texto()));
checar('receita com 4 etapas', qa('[aria-label="Como o Traclean e produzido"] > *').length === 7);
checar('receita: entrada 1 (sache)', /1 sachê \(400 g\)/.test(texto()));
checar('receita: entrada 2 (agua)', /2 L de água fria/.test(texto()));
checar('receita: reacao PCM', /Reação PCM · 4 min/.test(texto()));
checar('receita: resultado VC-9', /Traclean VC-9/.test(texto()));
checar('aviso de agua fria', /Água fria, sempre/.test(texto()));
checar('hero: 3 selos', qa('#topo li').length === 3);

checar('mundo: Impacto de Vharn', texto().includes('Impacto de Vharn'));
checar('mundo: Estalo', texto().includes('Estalo'));
checar('mundo: 3 problemas', qa('#mundo ul')[0].children.length === 3);
checar('mundo: cita o Homem de Ferro', /Homem de Ferro/.test(texto()));
checar('mundo: protocolo PCM', texto().includes('Protocolo de Compactação Molecular'));
checar('mundo: Tony Stark', /Tony Stark/.test(texto()));

checar('aparelho: modelo VC-9', /Traclean\s*VC-9/.test(texto()));
checar('aparelho: apelido Estalo', texto().includes('Desta vez, o estalo'));
checar('aparelho: reator do Homem de Ferro', /Micro-reator de safira — o mesmo do Homem de Ferro/.test(texto()));
checar('aparelho: 6 capacidades', qa('#aparelho dl')[0].children.length === 6);
checar('aparelho: 6 linhas de energia', qa('#aparelho dl')[1].children.length === 6);
checar('aparelho: 5 itens de aparencia', qa('#aparelho ul')[0].children.length === 5);
checar('aparelho: 3 ciclos coerentes', /3 ciclos/.test(texto()));

checar('6 beneficios', qa('#beneficios li').length === 6);
checar('3 itens de galeria', qa('#galeria li').length === 3);
checar('4 passos', qa('#como-funciona ol')[0].children.length === 4);
checar('passo 1 rasgue o sache', texto().includes('Rasgue o sachê'));
checar('passo 2 dilua em agua', texto().includes('Dilua em 2 L de água fria'));
checar('bloco da reacao com 4 itens', qa('#como-funciona ul li').length === 4);
checar('6 depoimentos', qa('#avaliacoes li').length === 6);
checar('depoimento do gato (Bento)', texto().includes('Bento'));
checar('depoimento ex-Vingador', /Ex-Vingador/.test(texto()));

checar('oferta: preco', texto().includes('R$ 1.299') && texto().includes('R$ 1.890'));
checar('oferta: desconto 31%', texto().includes('31%'));
checar('oferta: parcelamento', texto().includes('10x de R$ 129,90'));
checar('oferta: kit com 3 saches', /3 sachês de Pó Compactador/.test(texto()));
checar('oferta: licenca Stark', /Licença Stark Industries/.test(texto()));
checar('oferta: ficha do material', qa('#oferta dl > div').length === 6);

checar('9 perguntas de FAQ', qa('#faq button[aria-expanded]').length === 9);
checar('faq: e um po que vira aspirador', /É um pó que vira aspirador/.test(texto()));
checar('rodape com aviso de ficticio', /são ficção, criados para a disciplina/.test(texto()));

const p1 = qa('#faq button[aria-expanded]')[0];
checar('FAQ começa fechada', p1.getAttribute('aria-expanded') === 'false');
p1.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
await new Promise((r) => setTimeout(r, 60));
checar('FAQ abre ao clicar', qa('#faq button[aria-expanded]')[0].getAttribute('aria-expanded') === 'true');

Array.from(doc.querySelectorAll('header button')).find((b) => /Comprar|Ver meu pedido/.test(b.textContent))
  .dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
await new Promise((r) => setTimeout(r, 120));
checar('modal abriu', !!q('[role="dialog"]'));

q('[role="dialog"] form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
await new Promise((r) => setTimeout(r, 120));
checar('validacao bloqueou envio vazio', !modalTexto().includes('TRC-'));

const valores = { nome: 'Ana Paula Souza', email: 'ana@exemplo.com', telefone: '(11) 98888-7777', cidade: 'Campinas' };
qa('[role="dialog"] input').forEach((el) => {
  if (el.getAttribute('type') === 'checkbox') { el.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); return; }
  // o rotulo agora e associado por htmlFor (o input nao fica dentro do label)
  const rotuloEl = el.id ? doc.querySelector(`[role="dialog"] label[for="${el.id}"]`) : null;
  const label = (rotuloEl || el.closest('label'))?.textContent.toLowerCase() || '';
  const chave = Object.keys(valores).find((k) => label.includes(k === 'nome' ? 'nome' : k === 'email' ? 'e-mail' : k === 'telefone' ? 'telefone' : 'cidade'));
  if (chave) {
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(el, valores[chave]);
    el.dispatchEvent(new window.Event('input', { bubbles: true }));
  }
});
await new Promise((r) => setTimeout(r, 80));
q('[role="dialog"] form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
await new Promise((r) => setTimeout(r, 200));
checar('pedido ficticio confirmado', /TRC-\d{6}/.test(modalTexto()));
checar('mostra posicao na fila', modalTexto().includes('312'));
checar('CTA virou "Ver meu pedido"', Array.from(doc.querySelectorAll('header button')).some((b) => b.textContent.includes('Ver meu pedido')));

console.log('ERROS DE RUNTIME:', erros.length ? erros : 'nenhum');
console.log(`\nPASSARAM (${ok.length})`);
ok.forEach((t) => console.log('  ok  ' + t));
if (falha.length) { console.log(`\nFALHARAM (${falha.length})`); falha.forEach((t) => console.log('  XX  ' + t)); }
window.close();
servidor.close();
console.log(`\nRESULTADO: ${falha.length === 0 ? 'TUDO TRUE' : falha.length + ' falha(s)'}`);
process.exit(falha.length ? 1 : 0);