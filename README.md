# Traclean

> *Pó. Água. Aparelho.*
> Landing page de um produto fictício, criada como **Atividade 01** da disciplina.

**Em 5 linhas:** depois do Impacto de Vharn, a Terra ficou coberta de pó que não sai.
A Stark Industries (a mesma do Homem de Ferro) criou o **Protocolo de Compactação
Molecular**: um pó que, diluído em água, reconstrói o equipamento. A Traclean vende
esse pó — **400 g em sachê + 2 L de água fria = um aspirador VC-9 inteiro em 4 minutos**,
sem tomada, sem cabo e sem fábrica. Página 100% client-side, em **React + MVVM + CSS
Modules**, com checkout simulado funcional. Os dados são todos fictícios.

```
1 sachê (400 g)  +  2 L de água fria  =  Reação PCM (4 min)  →  Traclean VC-9
    de Pó Compactador      em um balde        a matéria se refaz      aspirador inteiro
```

---

## Integrantes

- Lucas T. Neves

---

## Sobre o produto

**Traclean** não é um aspirador: é **400 g de pó** que se torna um aspirador.

O cenário é pós-apocalíptico alienígena. Primeiro veio o **Estalo** — metade do
planeta sumiu com um único estalar de dedos e os Vingadores desapareceram junto.
Depois veio o **Impacto de Vharn**: a esquadra que sobrou voltou para terminar o serviço
e pulverizou o continente de sílica vítrea, areia de abóbada e pó metálica.

Para essa terra, a **Stark Industries** — a mesma do Homem de Ferro — desenvolveu o
**Protocolo de Compactação Molecular (PCM)**: um material em pó que, dissolvido em água,
*reconstrói a própria matéria* no formato de um equipamento. A Traclean produz e licencia
esse pó. **A química é da Stark, o produto é nosso.**

O fluxo, em uma linha:

```
1 sachê (400 g)  +  2 L de água fria  =  Reação PCM (4 min)  →  Traclean VC-9
    de Pó Compactador      em um balde        a matéria se refaz      aspirador inteiro
```

| | |
|---|---|
| **Nome** | Pó Compactador Traclean (o produto que vende) |
| **O que ele se torna** | Traclean VC-9, modelo fictício completo |
| **Categoria** | Pó de PCM sob licença Stark Industries (a empresa do Homem de Ferro) |
| **Formato** | Sachê de papel impermeável, 400 g de pó, sem plástico |
| **Diluição** | 1 sachê (400 g) em 2 L de **água fria** · 4 minutos de reação |
| **Público-alvo** | Quem tem casa na Terra depois do Impacto — e, no caso do pet, um gato que sobrou |
| **Preço (fictício)** | R$ 1.299 (de R$ 1.890) · 12x de R$ 129,90 · kit com 3 sachês |
| **Aparelho (fictício)** | 34 kPa · filtro de sílica 9 · micro-reator de safira · 72 h · 2,3 kg |

O aparelho que sai da reação tem ficha técnica completa — **capacidades, energia e
segurança inventadas do zero**: sucção de 34 kPa para detrito vítreo, filtro que segura
partícula até 0,3 µm, e um reator de safira (o mesmo do Homem de Ferro, em escala de
bolso) que dispensa tomada, cabo e bateria.

> ⚠️ **Nada aqui é real.** Traclean, VC-9, o Protocolo de Compactação Molecular, o Impacto
> de Vharn e as avaliações são ficção, criados para a disciplina. A página é um protótipo
> acadêmico: o "checkout" não cobra ninguém e nenhum dado sai do navegador.

---

## Jornada de construção

### Ideia inicial

A primeira proposta de produto era uma landing page de um app fictício chamado
**Cartório do Gato** — um serviço em que o gato emitia um extrato mensal da própria
vida (horário de sono, janela favorita, humor do dia). Chegamos a quatro candidatos:

| Ideia | Ângulo | Por que ficou de fora |
|---|---|---|
| **Cartório do Gato** *(primeiro plano)* | Divertido, identidade visual forte | Virou base do ângulo final (o gato que sobrou) |
| Soneca | Sério, tiers de preço naturais | Mercado concorrido, exigiria copy muito forte |
| Verdinho | Sustentabilidade + social | Interface pesada (mapa, contadores) para entregar bem em CSS puro |
| Oracle do Café | Nonsense, compartilhável | Pouco material para preencher 10 seções obrigatórias |

Aí a ideia virou **produto físico**: um aspirador. E o gancho do Cartório do Gato não
morreu — virou o ângulo de comunicação. Em vez de vender "25 kPa de sucção" (o que todo
concorrente promete), a passou a vender **uma situação específica**.

### Pesquisa e referências

**O que pesquisamos**

- **Landing pages de produto** para entender a ordem das seções que converte:
  hero → benefício → prova social → oferta → FAQ.
- **Anatomia de um e-commerce de aspirador** (Dyson, Electrolux, Miele): o que essas
  páginas usam como argumento de venda. Conclusão: potência é commodity — o que
  diferencia é o que a página faz com o dado.
- **Ficção científica e universo de super-heróis**: o clichê de "empresa bilionária
  resolve o problema da humanidade depois de um desastre" (Stark, Stark Industries,
  o Homem de Ferro) é um recurso narrativo conhecido, e usamos isso a favor: dá um
  motivo de crível para a tecnologia existir no mundo do produto.
- **Acessibilidade**: WCAG em foco visível, navegação por teclado e semântica de
  headings, para a página não depender só do visual.
- **CSS Modules** no React: como o `create-react-app` compila `*.module.css` e por que
  cada arquivo tem escopo próprio (isso gerou um bug real, registrado mais abaixo).
- **MVVM aplicado a front-end**: a regra de ouro adotada — *nenhuma view guarda estado
  nem decide regra*.

**Referências de estilo**

- **Stripe** e **Linear**: gradiente escuro com um único acento, tipografia de display
  separada da de texto, bastante respiro.
- **Framer** e **Resend**: ritmo de seção, cartões com borda sutil e o uso de "selo"
  (badge) para marcar número forte.
- **Ant Design / Material**: apenas como referência de acessibilidade.

**Fontes**: Space Grotesk (display) e Inter (texto), ambas sob SIL Open Font License 1.1,
baixadas **localmente** — a apresentação funciona sem internet.

### Ferramentas utilizadas

| Ferramenta | Para quê |
|---|---|
| **React 18.3** | Biblioteca da aplicação |
| **react-scripts 5.0.1** (equivalente ao CRA) | Build e dev server |
| **CSS Modules** | Estilo modularizado (20 arquivos, um por componente/seção) |
| **VS Code** | Edição do código |
| **OpenCode** | Agente de IA que escreveu boa parte do código com revisão guiada |
| **Node.js 24 / npm 11** | Ambiente de execução e instalação |
| **Edge headless** | Screenshot de conferência visual da página |
| **jsdom** | Teste automatizado de comportamento (52 verificações) |
| **Geração de imagem** | **Nenhuma.** As ilustrações são SVG escritos à mão (abaixo) |
| **Wikimedia Commons API** | Download da única foto usada, com licença e autor conferidos |

### Uso de IA

Esta parte merece atenção, porque **usamos IA de verdade** e ela errou várias vezes.
Contar só o que deu certo seria uma versão mentirosa do projeto.

#### Modelos e agentes

| Modelo | Onde foi usado |
|---|---|
| **Space Bunny Free** (via OpenCode, em terminal) | Implementação assistida, escrita do README e testes de verificação |
| **Nenhum outro modelo** | Todo o código deste repositório saiu do mesmo agente |

#### Por que esse caminho

O objetivo não era "gerar uma landing page" e pronto — a atividade pede que o README
registre **decisões**. A IA funcionou melhor aqui como **par de programação e revisão**
do que como geradora de texto criativo: produziu estrutura, achou erro e conferiu
comportamento. As decisões de produto, de cenário e de copy foram nossas.

#### Onde a IA ajudou

- **Manter 40+ arquivos coerentes entre si**, com o padrão MVVM consistente entre
  modelos, viewmodels e views.
- **Achar bugs que o olho não pega.** O melhor caso foi o acordeão do FAQ: havia um erro
  real (`abertaId === item.aberta` em vez de `item.id`) que fazia a FAQ nunca abrir.
  Compilava e não dava erro no console — só o teste automatizado acusou.
- **Checagem de comportamento por script**: 58 asserções cobrindo render, contagem de
  itens, formato de preço, parcelamento, desconto, acordeão, validação do checkout,
  confirmação do pedido e troca de estado do CTA.
- **Reescrever trechos depois que o design mudou** (por exemplo, trocar todas as fotos
  por ilustrações vetoriais).

#### Onde a IA errou — e o que fizemos

| Erro | Como foi detectado | O que fizemos |
|---|---|---|
| Sugestou `require('...jpg').default` para a imagem | **Só no screenshot.** O teste de DOM passava e o build passava, mas a foto aparecia quebrada | Trocamos pelo import ES, que é a forma idiomática no CRA |
| Ao reformatar o produto, deixou o prefixo fixo "O aspirador que" no hero e o título veio do model | **Só no screenshot** — o headline virou "O aspirador que Um pó.." | Tornamos o headline 100% vindo do model (`tituloAntes` + `tituloDestaque`) |
| Ao reescrever o componente Hero, sumiu com o bloco de selos (400 g / 2 L / 4 min) | O teste automatizado de contagem acusou zero itens onde havia 3 | Reposto no componente, com teste cobrindo a contagem |
| Escreveu `.claro .fantasma` num módulo de CSS para estilizar o botão | Revisão manual: cada `*.module.css` tem escopo próprio, então a classe nunca bateria com a do outro arquivo | Trocamos por `color: inherit`, que resolve sem depender de escopo cruzado |
| Deixou import não usado no `Modal` | O próprio build recusou (`eslint: 'Icone' is defined but never used`) com `CI=true` | Removido e rebuild |
| Introduziu palavras corrompidas em textos (uma palavra em chinês num depoimento, "remained" no meio de português, glued words como "paraCarpete") | Varredura de caracteres não latinos e de palavras inglesas suspeitas nos arquivos | Corrigido ponto a ponto; a varredura virou parte do checklist |
| Propôs `localStorage`, dark mode e biblioteca de animação | Revisão de escopo | **Descartado**: a atividade pede para não usar recursos que não foram vistos em aula |

#### Sugestões mantidas, alteradas e descartadas

- **Mantidas**: estrutura MVVM com `{ dados, acoes }`; ilustrações vetoriais no lugar de
  fotos de terceiro; fontes self-hosted; cabeçalho fixo com seção ativa; teste de
  comportamento automatizado.
- **Alteradas**: o catálogo de benefícios começou com 8 itens e foi enxugado para 6 —
  dois deles repetiam o hero. A FAQ começou com 5 perguntas, virou 8 quando o produto
  virou pó e virou **9** quando entraram a Stark e a ficha do aparelho.
- **Descartadas**: dark mode (fora de escopo), biblioteca de animação (regra da
  atividade), `localStorage` (complexidade sem ganho) e a ideia de comprar foto de banco
  de imagens para o produto (explicada abaixo).

### Evolução da solução

#### Virada 1 — de aparelho para pó

O Traclean nasceu como um aspirador vertical sem fio, montado, com 25 kPa e sensor de
proximidade. Funcionava — e era exatamente por isso que não funcionava: com um produto
comum, a página não tinha nada de próprio para dizer.

Na revisão, a pergunta que faltava era *"o que o cliente recebe na porta?"*. A resposta
que fez sentido foi: **um envelope de pó**. O cliente abre, dilui e o aparelho aparece.
Isso virou o núcleo do produto.

#### Virada 2 — do pó genérico para a Stark e o Impacto

A primeira versão do pó era um conceito em si: "um pó que vira aspirador". Funcionava como
piada, mas faltava um **mundo**. Um pó sem motivo não tem história — o visitante lia a
página e não entendia por que aquilo existiria.

Então a história ganhou cenario: o **Estalo**, os Vingadores, o **Impacto de Vharn** e
a Terra coberta de po que não sai. E o pó ganhou dono: a **Stark Industries**, com o
Protocolo de Compactação Molecular como tecnologia e o micro-reator de safira (o mesmo
do Homem de Ferro) como energia do aparelho. A pitada de referência em universe of
heróis também resolveu um problema prático: o **modelo do aparelho ganhou nome e ficha
técnica** (VC-9, 34 kPa, 72 h, filtro de sílica 9), e a página ficou com muito mais
material para as seções obrigatórias.

O que mudou em cada lugar da página:

| Antes (aparelho) |Depois (pó) | Hoje (pó + Stark + Impacto) |
|---|---|---|
| Chega montado | Chega em sachê de 400 g | Chega em sachê de 400 g (PCM sob licença Stark) |
| 62 dB por isolação acústica | Sem motor: silêncio de pano sacudido | Sem motor + reator de safira (72 h) |
| 45 min de bateria | 1 sachê ≈ 55 min por ciclo | 1 sachê = **3 ciclos** de ~55 min |
| "Como funciona": uso | 3 passos (rasgar, diluir, aspirar) | **4 passos** (rasgar, diluir, esperar a reação, aspirar) |
| Oferta: 1 aparelho | Oferta: kit com 3 sachês | Kit com 3 sachês + balde + **licença Stark** |
| Ficha técnica de motor | Composição e rendimento do pó | **Duas fichas**: a do material e a do aparelho |
| FAQ sobre garantia e prazo | FAQ com metade sobre diluição | **9 perguntas**: diluição, Stark, energia, falha de reação |
| Sem seção de cenário | Sem seção de cenário | **Seção "O mundo"**: o Impacto, o problema, a solução |
| Sem ficha do aparelho | Sem ficha do aparelho | **Seção "O VC-9"**: aparência, capacidades, energia e segurança |

E o hero ganhou a **receita em 4 etapas** — sachê + água = reação → aparelho — porque
era o ponto que não podia ficar implícito: se o visitante não entender em três segundos
que o produto é um pó que precisa ser diluído, a página falhou ali mesmo.

#### A maior mudança: de foto para ilustração vetorial

Esta foi a decisão mais importante do projeto, e ela nasceu de **duas tentativas
fracassadas de imagem**:

1. **Primeira tentativa (picsum)**: baixamos seis fotos "de ambiente". Ao abrir os
   arquivos para conferir, eram aleatórias: um bule de chá rotulado "sala" e fardos de
   feno rotulados "gato". Descartado na hora — sem verificação visual, teríamos
   publicado uma página com uma fazenda na seção de depoimentos.
2. **Segunda tentativa (Wikimedia Commons, busca por palavra-chave)**: a API funciona e
   devolve licença e autor. Mas "vacuum cleaner" no Commons retornou uma **válvula
   eletrônica RCA de 1930** e um **aspirador puxado a cavalo de 1908**. Perfeitas
   tecnicamente, absurdas comercialmente. As fotos de ambiente vieram de museus e obras.
3. **Terceira tentativa (Openverse)**: miniaturas pequenas demais ou erro de servidor.

A conclusão foi a mais honesta do projeto: **o produto é fictício, então não existe foto
"real" dele.** Qualquer foto de banco seria de outra marca — pior do que não usar foto.
Então o produto inteiro (sachê, balde de reação, aparelho e filtro) foi desenhado em
**SVG dentro do próprio código**, no mesmo traço da identidade visual. Sobrou apenas
**uma foto real**: o gato do bloco de reação, do Wikimedia Commons sob **CC0** (domínio
público, sem exigência de atribuição — mas creditada mesmo assim).

#### Erros encontrados depois de pronto

- O acordeão do FAQ **nunca abria** (comparação de `id` errada) — pego pelo teste.
- A **foto do gato não carregava** (`require().default`) — pego **somente** pelo screenshot.
- O headline do hero ficou sintaticamente sem sentido após a virada de conceito.
- O bloco de selos desapareceu numa reescrita de componente.
- A foto do gato tinha **905 KB**; redimensionada e recomprimida (1400px, qualidade 82)
  caiu para **382 KB**.

### Resultado final

**Como avaliamos**

O build de produção fecha em **~60 kB de JavaScript + 6 kB de CSS** (gzip), sem
dependências além do React. O teste automatizado roda **52 verificações** — render das
seções, contagem de itens, preço e desconto, acordeão, modal, validação **bloqueando** o
envio vazio, confirmação gerando código de pedido, CTA trocando de estado e uma camada
extra que garante que o conceito do pó (diluição, reação, sachê, VC-9) está explícito em
hero, contexto, passos, aparelho, FAQ e oferta.

O que mais nos surpreendeu foi o quanto a **revisão visual** rendeu: os piores bugs do
projeto (foto quebrada, headline quebrado, selos sumidos) só apareceram quando olhamos a
página renderizada. Código que compila não é código que funciona.

**O que faríamos diferente, com mais tempo**

1. **Testes no repositório** (React Testing Library), para a validação do checkout deixar de
   viver num script externo.
2. **Persistir o pedido** em `localStorage`, para o "Ver meu pedido" continuar funcionando
   depois de recarregar a página.
3. **Um diagrama da reação** (do pó ao aparelho) em etapas ilustradas, em vez de depender
   do texto e dos 4 ícones.
4. **Internacionalizar** os textos (hoje está tudo em português em `src/models`).
5. **Medir contraste** com ferramenta automática, em vez de confiar no olho.

---

## Como rodar

```bash
npm install     # instala as dependências
npm start       # sobe em http://localhost:3000
npm run build   # gera a versão de produção em /build
```

Requer Node 18 ou superior (testado com Node 24).

## Como verificar

O projeto traz dois scripts de conferência — rodam sem instalar nada além do `npm install`:

```bash
npm run build          # gera a versão de produção
npm run auditar        # auditoria de estrutura, CSS, ícones, ficção, README e contraste
npm run testar         # abre a build num DOM real e confere as 52 checagens de comportamento
```

| Script | O que faz |
|---|---|
| `scripts/auditoria.mjs` | Confere as 10 seções obrigatórias, se o menu aponta para seções que existem, se toda classe de CSS Module usada no JS existe no CSS, se todo ícone referenciado existe, se a ficção do produto se contradiz, se o README tem todos os headings do modelo da atividade e se os pares de cor passam em contraste WCAG AA. |
| `scripts/testes-comportamento.mjs` | Sobe a build, abre num DOM real (jsdom) e verifica o que o usuário vê: as seções, a receita do produto, o FAQ abrindo e fechando, o checkout bloqueando envio vazio e gerando o pedido fictício, e o CTA mudando de "Comprar" para "Ver meu pedido". |

Os dois scripts imprimem `TUDO TRUE` quando não há pendência — é assim que as afirmações
deste README podem ser conferidas em vez de acreditadas.

## Estrutura do projeto (MVVM)

A regra que orientou todo o código: **view não tem regra de negócio e não guarda
estado**. Tudo que é lógica vive em `viewmodels`, tudo que é dado vive em `models`, e
`views` só desenha.

```
src/
├── models/          dados mockados puros (nenhuma lógica)
│   ├── produto.js       o pó: receita, selos, ficha do material
│   ├── aparelho.js      o VC-9: aparência, capacidades, energia, garantias
│   ├── contexto.js      o mundo: Impacto de Vharn, problema e solução Stark
│   ├── beneficios.js    os 6 diferenciais
│   ├── galeria.js       sachê, reação e filtro
│   ├── passos.js        os 4 passos + o bloco "o que acontece no balde"
│   ├── depoimentos.js   prova social (inclui o gato e o ex-Vingador)
│   ├── oferta.js        kit com 3 sachês
│   ├── faq.js           9 perguntas
│   └── copy.js          textos de nav, seções, modal e rodapé
│
├── viewmodels/      hooks: estado + regras (a inteligência da página)
│   ├── useLandingViewModel.js     agrega os modelos estáticos
│   ├── useOfertaViewModel.js      moeda, parcelamento, desconto
│   ├── useFaqViewModel.js         acordeão
│   ├── useNavViewModel.js         menu, seção ativa, scroll suave
│   └── useCheckoutViewModel.js    modal, validação, pedido fictício
│
├── views/           só apresentação
│   ├── components/   Logo, Botao, Secao, Etiqueta, Estrelas, Icone,
│   │                 Ilustracoes, Modal, Cabecalho, Rodape
│   └── sections/     Hero, Contexto, Aparelho, Beneficios, Galeria,
│                     ComoFunciona, ProvaSocial, Oferta, Faq, ChamadaFinal
│
├── styles/          20 CSS Modules (um por componente/seção)
├── assets/          imagens e fontes locais
└── App.js           liga viewmodel → view (não tem useState)
```

**Fluxo de uma interação** (o CTA de compra, por exemplo):

```
Botao (view) ──onClick──▶ useCheckoutViewModel.abrir()
                              │  setAberto(true)
                              ▼
Modal (view) recebe dados.aberto === true e desenha o formulário
                              │
usuário confirma ─────────────┘
                              ▼
                     useCheckoutViewModel.confirmar()
                       1. valida os 4 campos (regex)
                       2. se falhou: guarda os erros e NÃO avança
                       3. se ok: gera o código TRC-XXXXXX
                              ▼
                     Modal renderiza a confirmação
```

## Decisões técnicas em uma frase cada

- **MVVM em vez de FSD** — a página tem uma única entidade de domínio; FSD seria
  ceremony sem ganho.
- **CSS Modules em vez de CSS global** — cada seção tem seu arquivo, e só uma camada de
  regras globais (os tokens em `index.css`).
- **SVG em vez de foto do produto** — produto fictício não tem foto; e a ilustração fica
  nítida em qualquer tela.
- **Fontes locais em vez de CDN** — a apresentação precisa funcionar sem internet.
- **Validação no viewmodel, não no componente** — se a regra morar na view, ela morre
  com a view.

## Créditos e licenças

- **Foto do gato**: Wikimedia Commons, licença **CC0** (domínio público). Autoria e
  licença conferidas via API antes do download.
- **Ilustrações**: vetores autorais deste repositório (nenhuma IA de imagem foi usada).
- **Fontes**: Inter e Space Grotesk, SIL Open Font License 1.1.
- **Dependências**: React (MIT), react-scripts (MIT).
- **Stark Industries, o Homem de Ferro, os Vingadores e o Impacto de Vharn** são
  referências de ficção, usadas apenas como flavor narrativo desta landing page fictícia.

> Lembrete: **Traclean é um produto fictício.** Preços, avaliações e garantias não
> correspondem a nada real. Nenhum dado enviado nesta página sai do seu navegador.