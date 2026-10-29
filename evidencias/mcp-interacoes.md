# Registro das interações com o MCP chrome-devtools

Sessão real de análise da landing page **Traclean** (`localhost:3000`, React em modo de
desenvolvimento), usando o OpenCode com o MCP **chrome-devtools** habilitado no
`opencode.json` do workspace.

- **MCP:** `chrome-devtools` (Chrome real via DevTools Protocol, rodando localmente)
- **Página analisada:** `http://localhost:3000/`
- **Viewports:** 375×812, 768×1024 e 1440×900
- **Data da sessão:** 28/10/2026

A ordem abaixo é a ordem real das chamadas, com os resultados que motivaram cada
correção. As capturas e relatórios completos estão em `antes/` e `depois/`.

---

## Fase 1 — diagnóstico ("antes")

| # | Chamada ao MCP | Resultado observado |
|---|---|---|
| 1 | `new_page("http://localhost:3000/")` | Página aberta; título "Traclean · 400 g de pó em 2 L de água viram um aspirador" |
| 2 | `emulate("375x812,mobile,touch")`, `emulate("768x1024")`, `emulate("1440x900")` + `take_screenshot` | Capturas salvas em `evidencias/antes/antes-375.png`, `-768.png` e `-1440.png` |
| 3 | `list_console_messages` | Nenhum erro/aviso da aplicação (apenas o `info` do React DevTools) |
| 4 | `list_network_requests` | 12 requisições, todas `200` (JS, CSS, 6 fontes, imagem, favicon) |
| 5 | `lighthouse_audit(mobile)` | Acessibilidade **96**; falha `color-contrast`: 4 nós (números `01`–`04`) com **1,19:1** (`#e9ebed` sobre branco) |
| 6 | `lighthouse_audit(desktop)` | Acessibilidade **96**; mesma falha de contraste |
| 7 | `take_snapshot` | Árvore de acessibilidade: `dialog` com `aria-modal`, FAQ com `aria-expanded`, labels dos campos |
| 8 | `evaluate_script` (375) | `innerWidth=375`, `scrollWidth=375` (sem overflow); nenhum alvo de toque < 24 px; menu mobile presente |
| 9 | `click("Abrir menu")` | `aria-expanded="true"`, `nav` visível com 430 px de altura |
| 10 | `press_key("Escape")` | `aria-expanded` continuava `"true"` — **menu não fechava** |
| 11 | `click("O mundo")` | Menu fecha e a página rola (`y=1103`), mas o `hash` da URL fica vazio |
| 12 | `click("Abrir todas")` | 9 perguntas do FAQ abertas; botão vira "Fechar todas" |
| 13 | `click("Finalizar pedido fictício")` | `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-titulo"`, labels corretos, `body` com `overflow:hidden` |
| 14 | `press_key("Escape")` | Modal fecha e devolve o foco ao botão que o abriu |
| 15 | `click("Confirmar pedido fictício")` (vazio) | 4 campos com `aria-invalid="true"`, mas mensagem dentro do `<label>` (nome acessível virava "Nome completo Escreva pelo menos 3 caracteres."), sem `aria-describedby`/`role="alert"`; foco continuava no submit |
| 16 | `press_key("Tab")` × 8 | O foco **saía do modal** e ia para `BODY`, skip link e botões do header — sem armadilha de foco |
| 17 | `fill_form` + `click("Confirmar...")` | Pedido `TRC-112752T` gerado; após o envio o foco caía no `BODY` |
| 18 | `press_key("Tab")` + `press_key("Enter")` no skip link | Ia para `#mundo` (pulava o H1); com a página rolada o link ficava em `top=-2158` (fora da tela) |
| 19 | `evaluate_script` (estilo computado) | `.numero` dos passos com `rgba(36, 55, 79, 0.1)` — confirma o 1,19:1 do Lighthouse |

---

## Fase 2 — correções

As correções foram feitas em código (React/CSS) e recarregadas no mesmo Chrome.
O detalhamento está no `RELATO.md`, seções 3 e 4.

---

## Fase 3 — validação ("depois")

| # | Chamada ao MCP | Resultado observado |
|---|---|---|
| 20 | `navigate_page` + `list_console_messages` | Nenhum erro/aviso após as mudanças |
| 21 | `click("Comprar")` | Modal abre com o foco **dentro** da caixa; `header`, `main` e `footer` ficam `inert` + `aria-hidden` |
| 22 | `press_key("Tab")` × 10 | O foco percorre apenas os 7 controles do diálogo e volta ao primeiro (armadilha de foco) |
| 23 | `press_key("Escape")` | Modal fecha, `inert` é removido e o foco volta para "Comprar" |
| 24 | `click("Confirmar...")` (vazio) | Foco vai para `campo-nome`; mensagens associadas por `aria-describedby` com `role="alert"`; nomes acessíveis limpos ("Nome completo", "E-mail"…) |
| 25 | `fill_form` + `click("Confirmar...")` | Pedido válido, código `TRC-502887`; foco no `<h3>` "Pronto, Maria!" |
| 26 | `click("Abrir menu")` + `press_key("Escape")` (375) | Abre com `aria-label="Fechar menu"` e `aria-controls="menu-principal"`; `Esc` fecha, restaura o rótulo e devolve o foco ao botão; link ativo com `aria-current="location"` |
| 27 | `press_key("Tab")` + `Enter` no skip link | Link visível em `top:12px`; leva a `#conteudo` e o foco vai para `MAIN` |
| 28 | `lighthouse_audit(mobile)` | Acessibilidade **100**, Boas práticas **100**, SEO **100**, Agentic **100**; **0** auditorias falhando |
| 29 | `lighthouse_audit(desktop)` | Acessibilidade **100**; mesmas notas; **0** falhas |
| 30 | `evaluate_script` (375/768/1440) | Sem rolagem horizontal, sem alvos < 24 px, console limpo; alturas do documento: 18.210 / 13.673 / 10.575 px |
| 31 | `evaluate_script` (modal em 375) | Caixa com 327 px de largura, dentro da viewport, `overflow-y:auto` |
| 32 | `take_screenshot` (375/768/1440) | Capturas finais em `evidencias/depois/` |

Fora do MCP, como conferência de regressão:

```bash
npm run build     # compila
npm run auditar   # PROBLEMAS (0) / TUDO TRUE
npm run testar    # 52 checagens / TUDO TRUE
```

> **Limite encontrado:** as capturas de página inteira em 375 px passam de 16.384 px de
> altura (18.210 px), acima do limite de textura do Chrome. Por isso o "antes" e o
> "depois" em 375 px têm também recortes de viewport (`*-topo`, `*-meio`, `*-fim`).
