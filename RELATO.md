# RELATO — Atividade 02: evolução da landing page com o MCP chrome-devtools

> Projeto: **Traclean** (esta pasta) — landing page fictícia criada na Atividade 01
> em React + MVVM + CSS Modules.
> **Repositório público:** <https://github.com/Lucas-T-Neves/traclean-landing>
>
> **Integrante:** Lucas T. Neves
> Este relato descreve como a página foi analisada e corrigida com o MCP
> **chrome-devtools**, com as evidências em `evidencias/antes/` e `evidencias/depois/`.

---

## 1. Qual MCP foi usado e por quê

Usamos o **chrome-devtools**, que controla um Chrome real via DevTools Protocol.
Ele foi escolhido porque a atividade pede problemas **observados**, não deduzidos do
código: o MCP permite abrir a página, emular larguras de celular/tablet/desktop, tirar
screenshots, ler a árvore de acessibilidade, rodar Lighthouse, ver console/rede e
executar cliques e teclas de verdade.

Não usamos nenhuma ferramenta de auditoria "de papel": todas as notas e falhas citadas
abaixo vieram de execuções registradas em `evidencias/`.

### Ferramentas do MCP chamadas

| Ferramenta | Para quê |
|---|---|
| `new_page`, `list_pages`, `close_page`, `navigate_page` | abrir a página, recarregar e navegar para a URL limpa |
| `emulate` | viewports reais de **375×812**, **768×1024** e **1440×900** (mobile/touch quando fazia sentido) |
| `resize_page` | primeira tentativa de redimensionar a janela |
| `take_screenshot` | capturas de página inteira e recortes de viewport |
| `take_snapshot` | árvore de acessibilidade (nomes, papéis, estados `expanded`/`invalid`) |
| `list_console_messages` | erros e avisos do console |
| `list_network_requests` | conferir se imagens/fontes/css/js carregavam (todos 200) |
| `lighthouse_audit` | auditoria de acessibilidade, boas práticas e SEO em mobile e desktop |
| `click`, `press_key`, `fill_form` | testar menu, FAQ, teclado, validação e checkout |
| `evaluate_script` | medir overflow horizontal, alvos de toque, foco, estilos computados e conteúdo |

### Configuração do MCP

O MCP foi habilitado no `opencode.json` do workspace e abre um Chrome real local:

```json
{
  "mcp": {
    "chrome-devtools": {
      "type": "local",
      "command": ["cmd", "/c", "npx", "-y", "chrome-devtools-mcp@latest"],
      "enabled": true
    }
  }
}
```

> **Nota metodológica:** na primeira tentativa usamos `resize_page` com 375 px, mas o
> Chrome desta máquina limita a janela a ~500 px (o `innerWidth` medido foi 500).
> Refizemos as capturas com `emulate` e confirmamos `innerWidth = 375`.
> A página de 375 px tem ~18.200 px de altura, acima do limite de captura de 16.384 px
> do navegador; por isso o "antes" e o "depois" em 375 px têm também recortes de
> viewport (`*-topo`, `*-meio`, `*-fim`).

---

## 2. Diagnóstico ("antes")

- **Console:** nenhum erro/aviso da aplicação (só o aviso informativo do React DevTools).
- **Rede:** 12 requisições, todas `200` (JS, CSS, fontes, imagem do gato, favicon).
- **Layout medido em 375/768/1440:** sem rolagem horizontal; nenhum alvo de toque
  menor que 24 px.
- **Lighthouse mobile e desktop:** Acessibilidade **96**, Boas práticas **100**, SEO
  **100**, Agentic Browsing **100**. Uma auditoria falhou nos dois modos:
  `color-contrast`, em 4 nós (os números `01`–`04` da seção "Como funciona", com
  **1,19:1** — `#e9ebed` sobre branco).

### Problemas encontrados, em ordem de prioridade

| # | Problema | Como foi observado |
|---|---|---|
| 1 | **Modal não movia o foco para dentro** ao abrir; o foco ficava no botão de trás | árvore de acessibilidade + `document.activeElement` após o clique |
| 2 | **`Tab` escapava do modal** e ia para links/botões da página atrás | sequência de 8 `Tab` registrando o foco a cada passo |
| 3 | **Depois de confirmar o pedido, o foco caía no `body`** (o botão submit saía da tela) | `activeElement` após o envio válido |
| 4 | **Erros de validação não eram anunciados**: a mensagem ficava dentro do `<label>` e virava parte do nome do campo; sem `aria-describedby` nem `role="alert"`; foco continuava no botão | árvore de acessibilidade (`invalid="true"`, nome "Nome completo Escreva pelo menos 3 caracteres.") |
| 5 | **Contraste reprovado** nos números dos passos | Lighthouse mobile e desktop |
| 6 | **Menu mobile não fechava com `Esc`**; o `aria-label` continuava "Abrir menu" quando aberto; link ativo sem `aria-current`; sem `aria-controls` | `press_key("Escape")` + leitura dos atributos |
| 7 | **Skip link pulava o H1**: apontava para `#mundo` (segunda seção) e usava `position:absolute`, ficando fora da tela com a página rolada | foco via `Tab` + `getBoundingClientRect()` (top `-2158`) e `location.hash` |
| 8 | **Acentuação ausente** em textos visíveis ("unica", "proprio", "po metalica", "3 Po Compactadores", mensagens "invalido") | árvore de acessibilidade e leitura dos models |
| 9 | **Teste de comportamento** dependia de `input` dentro de `label` (quebrou com a correção semântica) | `npm run testar` após as mudanças |

---

## 3. Correções aplicadas

Todas foram pequenas e localizadas; nenhuma dependência nova, nenhum framework novo e
nenhuma mudança de identidade visual.

| # | Correção | Arquivo(s) |
|---|---|---|
| 1–3 | Modal agora guarda o elemento que tinha foco, move o foco para dentro ao abrir, **prende o `Tab`/`Shift+Tab`** dentro da caixa, marca header/main/footer como `inert` + `aria-hidden` enquanto está aberto e **devolve o foco ao gatilho** ao fechar. Na confirmação, o foco vai para o título `Pronto, …!` (`tabIndex={-1}`). | `src/views/components/Modal.js` |
| 4 | Cada campo ganhou `id`, `name`, `aria-required`, `aria-invalid` e `aria-describedby` apontando para a mensagem; o `<label>` usa `htmlFor` e a mensagem virou `<span role="alert">` fora do label. Se a validação falha, o foco vai para o **primeiro campo inválido**. | `src/views/components/Modal.js`, `src/App.js` |
| 5 | Números dos passos com `rgba(36, 55, 79, 0.6)` (≈ **3,6:1** sobre branco, acima do 3:1 exigido para texto grande). | `src/styles/ComoFunciona.module.css` |
| 6 | Menu mobile: `Esc` fecha e devolve o foco ao botão; `aria-label` alterna "Abrir menu"/"Fechar menu"; `aria-controls="menu-principal"`; `aria-current="location"` no link da seção ativa; fecha sozinho se a janela voltar ao desktop. | `src/views/components/Cabecalho.js`, `src/App.js` |
| 7 | Skip link agora aponta para `#conteudo` (início do `<main>`, antes do H1), é `position:fixed` (sempre visível ao receber foco) e o `<main>` tem `tabIndex={-1}` para receber o foco. | `src/App.js`, `src/index.css` |
| 8 | Acentuação corrigida nos textos do aparelho, da oferta, dos depoimentos, dos benefícios e nas mensagens de validação. | `src/models/aparelho.js`, `src/models/oferta.js`, `src/models/depoimentos.js`, `src/models/beneficios.js`, `src/viewmodels/useCheckoutViewModel.js` |
| 9 | Seletor do teste atualizado para o novo vínculo `label[for]` + `input` (o teste continua cobrindo o mesmo comportamento). | `scripts/testes-comportamento.mjs` |

---

## 4. Validação ("depois")

| Métrica | Antes | Depois |
|---|---|---|
| Lighthouse — Acessibilidade (mobile) | 96 | **100** |
| Lighthouse — Acessibilidade (desktop) | 96 | **100** |
| Lighthouse — Boas práticas / SEO / Agentic | 100 / 100 / 100 | 100 / 100 / 100 |
| Auditorias de acessibilidade falhando | 1 (`color-contrast`, 4 nós) | **0** |
| Erros/avisos no console | 0 (só info do DevTools) | 0 |
| Rolagem horizontal em 375/768/1440 | nenhuma | nenhuma |
| Alvos de toque < 24 px | nenhum | nenhum |
| `npm run build` | compilava | **compila** |
| `npm run auditar` | `TUDO TRUE` | **`TUDO TRUE`** (0 problemas) |
| `npm run testar` (52 checagens) | `TUDO TRUE` | **`TUDO TRUE`** |

Testes de interação repetidos no navegador real:

- **Modal:** foco entra na caixa; 10 `Tab` percorrem somente os 7 controles do diálogo
  (input → input → input → input → checkbox → confirmar → fechar → volta ao primeiro);
  `Esc` fecha e o foco volta para "Comprar".
- **Validação:** envio vazio mantém o modal aberto, foca `campo-nome`, marca
  `aria-invalid="true"` nos 4 campos e associa cada mensagem por `aria-describedby`;
  os nomes acessíveis voltaram a ser só "Nome completo", "E-mail", "Telefone",
  "Cidade de entrega".
- **Pedido:** com dados válidos, aparece `TRC-######`, o resumo com "312º de 312" e o
  foco vai para o título da confirmação; o CTA do header vira "Ver meu pedido".
- **Menu mobile:** `Esc` fecha (`aria-expanded="false"`), o rótulo volta a "Abrir menu"
  e o foco retorna ao botão; o link ativo expõe `aria-current="location"`.
- **Skip link:** primeiro `Tab` mostra o link em `top:12px`; `Enter` leva a `#conteudo`
  e o foco vai para `MAIN`.
- **Modal em 375 px:** caixa de 327 px, dentro da viewport, com rolagem interna
  (`overflow-y:auto`) — sem corte de conteúdo.

---

## 5. Avaliação honesta da contribuição do MCP

**O que o MCP ajudou de verdade**

- O **Lighthouse** encontrou o único problema de acessibilidade que passava despercebido
  no código: o contraste dos números `01`–`04`. Nenhuma leitura de CSS teria dado a
  certeza de 1,19:1.
- A **árvore de acessibilidade** mostrou que a mensagem de erro estava virando parte do
  *nome* do campo — um problema que o HTML "parecia certo".
- Os testes de **teclado** (`Tab`/`Escape`) revelaram o modal sem armadilha de foco, o
  menu sem `Esc` e o foco perdido após a confirmação. São falhas que só aparecem com a
  página em execução.
- As medições por `evaluate_script` deram números objetivos para responsividade
  (`scrollWidth` vs `innerWidth`, altura dos alvos), sem depender de "parece bom".

**O que o MCP não resolveu / limitou**

- O MCP **não julga a aparência**. Neste ambiente o modelo também não consegue ler as
  imagens geradas; os screenshots foram salvos para conferência humana e o diagnóstico
  visual foi feito por árvore de acessibilidade, estilos computados e medidas de layout.
- O Lighthouse audita um estado da página; ele **não testou teclado nem o modal aberto**.
  Boa parte dos achados veio de `click`/`press_key`/`evaluate_script`, não da auditoria.
- O Lighthouse também **não aponta problemas de texto** (acentuação, clareza); isso veio
  da leitura dos models com a página renderizada ao lado.
- A captura de página inteira em 375 px esbarra no limite de 16.384 px do navegador —
  foi necessário complementar com recortes de viewport.

Conclusão: o MCP foi decisivo para **provar** os problemas e para medir o resultado,
mas as correções continuaram sendo trabalho de código pequeno e revisado. O ganho maior
não foi "gerar a página", e sim **ver a página como o usuário e o leitor de tela a veem**.

---

## 6. Registro das interações e reprodutibilidade

O log cronológico completo — com o resultado de cada chamada — está em
[`evidencias/mcp-interacoes.md`](evidencias/mcp-interacoes.md). Resumo:

| Momento | Chamada | O que revelou |
|---|---|---|
| Diagnóstico | `lighthouse_audit` (mobile/desktop) | 96 de acessibilidade; `color-contrast` 1,19:1 nos números `01`–`04` |
| Diagnóstico | `take_snapshot` + `click` + `press_key` | erros dentro do `<label>`, `Tab` escapando do modal, menu sem `Esc` |
| Diagnóstico | `evaluate_script` | sem overflow em 375/768/1440 e nenhum alvo < 24 px |
| Validação | `press_key("Tab")` × 10 + `Escape` | foco preso no modal e devolvido ao gatilho |
| Validação | `lighthouse_audit` (mobile/desktop) | **100** de acessibilidade, 0 falhas |
| Validação | `take_screenshot` | 6 capturas de página inteira + 6 recortes de viewport |

### Como reproduzir

```bash
# na pasta traclean-landing
npm install
npm start          # http://localhost:3000
npm run build      # build de produção usado por npm run testar
npm run auditar    # auditoria estática (TUDO TRUE)
npm run testar     # 52 checagens de comportamento (TUDO TRUE)
```

O MCP é configurado no `opencode.json` (bloco da seção 1) e foi usado pela ferramenta
de IA durante a sessão; os artefatos gerados por ele ficam em `evidencias/`.

---

## 7. Arquivos de evidência

### Registro da sessão
- `mcp-interacoes.md` — log cronológico das chamadas ao MCP (antes e depois)

### Antes (`evidencias/antes/`)
- `antes-1440.png` — página inteira em 1440 px
- `antes-768.png` — página inteira em 768 px
- `antes-375.png` — página inteira em 375 px (atenção: acima do limite de captura)
- `antes-375-topo.png`, `antes-375-meio.png`, `antes-375-fim.png` — recortes de viewport
- `lighthouse-mobile/report.html`, `report.json`
- `lighthouse-desktop/report.html`, `report.json`

### Depois (`evidencias/depois/`)
- `depois-1440.png`, `depois-768.png`, `depois-375.png`
- `depois-375-topo.png`, `depois-375-meio.png`, `depois-375-fim.png`
- `lighthouse-mobile/report.html`, `report.json`
- `lighthouse-desktop/report.html`, `report.json`

### Código alterado
```
src/App.js
src/index.css
src/models/aparelho.js
src/models/beneficios.js
src/models/depoimentos.js
src/models/oferta.js
src/styles/ComoFunciona.module.css
src/viewmodels/useCheckoutViewModel.js
src/views/components/Cabecalho.js
src/views/components/Modal.js
scripts/testes-comportamento.mjs
```

Nenhuma dependência foi adicionada. O build de produção continua em ~62 kB de JS e
~7 kB de CSS (gzip).
