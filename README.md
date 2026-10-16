# Traclean Pro Pet

> *Pó. Água. Aspirador.*
> Landing page de um produto fictício, criada como **Atividade 01** da disciplina.

---

## Integrantes

- Lucas T. Neves

---

## Sobre o produto

**Traclean Pro Pet** é um aspirador fictício que **chega em pó**. O cliente não recebe
um aparelho pronto: recebe um sachê de papel com 400 g de pó, dilui em 2 litros de
água fria e, em 4 minutos, tem um aspirador de 25 kPa na mão. Depois de aspirar, o pó
volta a ser pó e pode ser reutilizado até três vezes.

A receita aparece como elemento visual no hero, porque era o ponto mais importante
da página:

```
1 sachê (400 g)   +   2 L de água fria   =   Aspirador de 25 kPa
 "é isso que chega"     "em um balde"           "pronto em 4 minutos"
```

| | |
|---|---|
| **Nome** | Traclean Pro Pet |
| **Categoria** | Aspirador em pó (kit diluível) |
| **Público-alvo** | Pessoas que têm gato ou cachorro em casa e se cansaram de o bicho fugir do aspirador |
| **Formato** | Sachê de papel impermeável, 400 g de pó, sem plástico |
| **Diluição** | 1 sachê (400 g) em 2 L de **água fria** · 4 minutos de preparo |
| **Proposta** | Aspirador sem motor, sem cabo, sem tomada e sem plástico — com aroma de lavanda para o gato não fugir do cômodo |
| **Preço (fictício)** | R$ 1.299 (de R$ 1.890) · 12x de R$ 129,90 · kit com 3 sachês |
| **Diferenciais** | Sem motor (74 dB → silêncio) · 25 kPa de sucção · ~40 min por sachê · pó reaproveitável 3x · filtro lavável em 10 s |

A identidade visual é o que segura a proposta: um envelope de papel e um balde
ficariam feios num apartamento. Por isso o Traclean foi pensado como **peça de
decoração** — grafite, um único acento lima e nada de "branco+futurista".

> ⚠️ **A Traclean não existe.** Produto, preços, avaliações, número de clientes e
> garantia são todos fictícios. A página é um protótipo acadêmico: o "checkout"
> não cobra ninguém e nenhum dado sai do navegador.

---

## Jornada de construção

### Ideia inicial

A primeira proposta de produto que levamos para a atividade era uma landing page de
um app fictício chamado **Cartório do Gato** — um serviço em que o gato "emitia"
um extrato mensal da própria vida (horário de sono, janela favorita, humor do dia).
Chegamos a quatro candidatos, com este comparativo:

| Ideia | Ângulo | Por que ficou de fora |
|---|---|---|
| **Cartório do Gato** *(primeiro plano)* | Divertido, identidade visual forte | Virou base do **ângulo** da ideia final (ver abaixo) |
| Soneca | Sério, tiers de preço naturais | Mercado concorrido, exigiria copy muito forte |
| Verdinho | Sustentabilidade + social | Interface pesada (mapa, contadores) para entregar bem em CSS puro |
| Oracle do Café | Nonsense, compartilhável | Pouco material para preencher 10 seções obrigatórias |

Aí veio a virada: em vez de um app, a ideia passou a ser um **produto físico** —
um aspirador. E o gancho do Cartório do Gato não morreu: ele virou o **ângulo de
comunicação** do aspirador. Em vez de vender "25 kPa de sucção" (que é o que todo
 aspirador do mercado vende), a página vende **"o aspirador que o gato aprova"**.

Esse movimento resolveu três problemas de uma vez:

1. **Diferenciação** — o concorrente imaginário da especificação mais alta continua
   ganha nada, porque todo mundo já promete potência.
2. **Tom** — deu permissão para a prova social ser leve (inclusive um depoimento
   "do Bento", que é um gato) sem perder credibilidade.
3. **Copy** — cada seção virou mais fácil de escrever porque existe uma pergunta
   única por trás ("isso assusta o gato?") que guia headline, FAQ e depoimento.

O nome passou por quatro candidatos — **Pó Zero**, **Redemoinho 9000**,
**Cyclone Pro** e **Traclean**. Chegamos perto de "Furacat" (fusão de furacão +
felino), mas ele é marca registrada de um inseticida: descartado por conflito
de marca. **Traclean** (de *trash* + *clean*) venceu por ser curto, funcionar em
português e inglês, e ter um símbolo vetorial simples de desenhar.

### Pesquisa e referências

**O que pesquisamos**

- **Landing pages de produto** para entender a ordem das seções que converte:
  hero → benefício → prova social → oferta → FAQ. A ordem não é decorativa; é o
  caminho que o olho percorre antes de decidir.
- **Anatomia de um e-commerce de aspirador** (Dyson, Electrolux, Miele): o que
  essas páginasманifestam como argumento de venda. Conclusão: potência e autonomia
  são commodities — o que diferencia é o que a página faz com elas.
- **Acessibilidade**: WCAG em foco visível, navegação por teclado e semântica de
  headings, para a página não depender só do visual.
- **CSS Modules** no React: como o `create-react-app` compila `*.module.css` e por
  que cada arquivo tem escopo próprio (isso generate um bug real, que está na
  seção "Evolução").
- **MVVM aplicado a front-end**: a regra de ouro que escolhemos adotar —
  *"nenhuma view guarda estado nem decide regra"*.

**Referências de estilo**

- **Stripe** e **Linear**: uso de gradiente escuro com um único acento, tipografia
  de display separada da de texto e bastante respiro.
- **Framer** e **Resend**: ritmo de seção, cartões com borda sutil e a ideia de
  "selo" (badge) para marcar número forte.
- **Ant Design / Material**: apenas como referência de acessibilidade de componentes.

**Fontes**: Space Grotesk (display) e Inter (texto), ambas com SIL Open Font
License 1.1, baixadas **localmente** no repositório — a apresentação pode rodar
sem internet.

### Ferramentas utilizadas

| Ferramenta | Para quê |
|---|---|
| **React 18.3** | Biblioteca da aplicação |
| **react-scripts 5.0.1** (equivalente ao CRA) | Build e dev server |
| **CSS Modules** | Estilo modularizado (18 arquivos, um por componente/seção) |
| **VS Code** | Edição do código |
| **OpenCode** | Agente de IA que escreveu boa parte do código com revisão guiada (ver abaixo) |
| **Node.js 24 / npm 11** | Ambiente de execução e instalação |
| **Edge headless** | Screenshot de conferência visual da página |
| **jsdom** | Teste automatizado de comportamento (27 verificações) |
| **Geração de imagem** | **Nenhuma ferramenta de geração de imagem.** As ilustrações do produto são SVG escritos à mão (veja abaixo) |
| **Wikimedia Commons API** | Download da única foto usada, com licença e autor conferidos |

### Uso de IA

Esta parte merece ser lida com atenção, porque **usamos IA de verdade** e ela errou
várias vezes. Contar só o que deu certo seria uma versão mentirosa do projeto.

#### Modelos e agentes

| Modelo | Onde foi usado |
|---|---|
| **Space Bunny Free** (via OpenCode, em terminal) | Implementação assistida do código, escrita do README e testes de verificação |
| **Nenhum outro modelo** | Todo o código deste repositório foi produzido com o mesmo agente |

#### Por que escolhemos esse caminho

O objetivo não era "gerar uma landing page" e pronto — a atividade pede explicitamente
que o README registre **decisões**. A IA funcionou melhor aqui como **par de
programação e de revisão** do que como geradora de texto criativo: ela produzia
estrutura, detectava erro e conferia comportamento. As decisões de produto e de copy
foram nossas.

#### Onde a IA ajudou de verdade

- **Escrever 40 arquivos coerentes entre si** em vez de copiamos e colamos: ela
  manteve o padrão MVVM consistente entre modelos, viewmodels e views.
- **Pegar bugs que o olho não pega.** O melhor caso foi o acordeão do FAQ: havia um
  erro real (`abertaId === item.aberta` em vez de `item.id`) que fazia a FAQ nunca
  abrir. Compilava, não dava erro no console — só o teste automatizado acusou.
- **Checagem de comportamento por script** (27 asserções cobrindo render, validação,
  confirmação do pedido e troca de estado do CTA).
- **Reescrever portions** depois que a decisão de design mudou (ex.: trocar todas as
  fotos por ilustrações vetoriais).

#### Onde a IA errou — e o que fizemos

| Erro | Como foi detectado | O que fizemos |
|---|---|---|
| Sugestiu usar `require('...jpg').default` para a imagem | **Só no screenshot.** O teste de DOM passava, o build passava, mas a foto aparecia quebrada na página | Trocamos por `import` ES — a forma idiomática no CRA |
| Escreveu `.claro .fantasma` num módulo de CSS para estilizar o botão | Revisão manual: cada `*.module.css` tem escopo próprio, então essa classe nunca bateria com a do outro arquivo | Trocamos por `color: inherit`, que resolve de verdade sem depender de escopo cruzado |
| Deixou import não usado no `Modal` | O próprio build recusou (`eslint: 'Icone' is defined but never used`) com `CI=true` | Removido e rebuild |
| Introduziu palavras corrompidas em textos (ex.: "remained" no meio de português, uma palavra em chinês num depoimento) | Varredura de caracteres não latinos e de palavras inglesas suspeitas nos arquivos | Corrigido ponto a ponto; a varredura virou parte do checklist |
| Propôs `localStorage` para guardar o pedido, e dark mode, e animação com biblioteca | Revisão de escopo | **Descartado**: a atividade pede para não usar recursos que não foram vistos em aula |

#### Sugestões mantidas, alteradas e descartadas

- **Mantidas**: estrutura MVVM com `{ dados, acoes }`; ilustrações vetoriais em vez
  de fotos de terceiro; fontes self-hosted; cabeçalho fixo com seção ativa; teste de
  comportamento automatizado.
- **Alteradas**: o catálogo de benefícios começou com 8 itens e foi enxugado para 6 —
  dois deles eram、 "diferenciais" e na verdade repetiam o hero. A FAQ começou
  com 5 perguntas e virou 8, porque duas delas (o que não funciona, é real?) deram
  mais personalidade do que as cinco originais.
- **Descartadas**: dark mode (fora de escopo), biblioteca de animação (regra da
  atividade), `localStorage` (complexidade sem ganho), e a ideia de comprar foto de
  banco de imagens para o produto (explicada abaixo).

### Evolução da solução

#### A maior virada: de aparelho para pó

O Traclean nasceu como um aspirador vertical sem fio, montado, com 25 kPa e sensor de
proximidade. Funcionava — e era exatamente por isso que não funcionava: com um produto
comum, a página não tinha nada de próprio para dizer.

Na revisão, a pergunta que faltava era *"o que o cliente recebe na porta?"*. E a
resposta que fez sentido foi: **um envelope de pó**. Não um aparelho. O cliente abre o
sachê, dilui em água e o aspirador aparece. Isso virou o núcleo do produto inteiro.

O que mudou em cada lugar da página:

| Antes (aparelho) | Depois (pó) |
|---|---|
| Chega montado | Chega em sachê de 400 g |
| 62 dB por Isolation acoustic | Sem motor: silêncio de pano sacudido |
| 45 min de bateria | 400 g de pó = 2 L de solução ≈ 40 min |
| "Como funciona": 3 passos de uso | 3 passos: rasgar, diluir, aspirar |
| Oferta: 1 aparelho | Oferta: kit com 3 sachês + balde medidor |
| Ficha técnica de motor | Ficha técnica de composição, diluição e rendimento |
| FAQ sobre garantia e prazo | FAQ com metade das perguntas sobre diluir |
| Galeria: corpo, escova, filtro, estação | Galeria: sachê, balde, filtro, recolha |

E o hero ganhou a **receita visual** — sachê + 2 L de água = aspirador — porque era o
ponto que não podia ficar implícito: se o visitante não entender em três segundos que o
produto é um pó que precisa ser diluído, a página falhou em três segundos.

#### A maior mudança: de foto para ilustração vetorial

Esta foi a decisão mais importante do projeto, e ela nasceu de **duas tentativas
fracassadas de imagem** que vale registrar:

1. **Primeira tentativa (picsum)**: baixamos seis fotos "de ambiente". Ao abrir os
   arquivos para conferir, descubrimos que eram aleatórias: uma foto de bule de chá
   rotulada "sala" e fardos de feno rotulados "gato". Descartado na hora — sem
   verificação visual, teríamos publicado uma página com uma fazenda na seção de
   depoimentos.
2. **Segunda tentativa (Wikimedia Commons, busca por palavra-chave)**: a API
   funciona e devolve licença e autor. Mas "vacuum cleaner" no Commons retornou uma
   **válula eletrônica RCA de 1930** e um **aspirador puxado a cavalo de 1908**.
   Perfeitas tecnicamente, absurdas comercialmente. As fotos de ambiente vieram de
   museus eECTuras — erradas para um produto de consumo.
3. **Terceira tentativa (Openverse)**: as miniaturas vieram pequenas demais ou com
   erro de servidor.

A conclusão foi a mais honesta do projeto: **o produto é fictício, então não existe
foto "real" dele.** Qualquer foto de banco seria de outra marca — o que é pior que
não usar foto. Então o produto inteiro (corpo, escova, filtro, estação) foi
desenhado em **SVG dentro do próprio código**, no mesmo traço da identidade visual.
Resultado: sem problema de licença, sem foto falsa, e consistente em qualquer
tamanho de tela.

Sobrou apenas **uma foto real**: o gato do bloco "modo Pet", baixada do Wikimedia
Commons sob licença **CC0** (domínio público, sem exigência de atribuição — mas
creditada mesmo assim).

#### Outras mudanças durante a construção

- **Cores**: começamos com azul "tech" e uma paleta de três tons. Virou **grafite +
  um único lima**, porque um acento só deixa o número (62 dB, 25 kPa) ganhar
  atenção — o oposto de paletas com quatro cores competindo.
- **CTA**: a ideia inicial era "adicionar à lista de espera". Virou um **checkout
  simulado em modal**, porque a atividade pede um CTA funcional e lista de espera
  parece placeholder. O bônus de mexer nisso: o botão muda de "Comprar" para
  "Ver meu pedido" depois que o pedido é confirmado.
- **Ordem das seções**: a prova social foi para **antes** da oferta. Inicialmente
  estava depois; lendo em voz alta o caminho do visitante, a objeção ("é caro demais")
  nasce antes da pergunta ("é bom mesmo?").
- **Texto do preço**: o `Intl.NumberFormat` é a fonte da verdade. O viewmodel até
  compara o desconto declarado no model com o desconto calculado e usa o
  **cálculo** — o texto não manda no número.

#### Erros encontrados depois de pronto

- O acordeão do FAQ **nunca abria** (bug de comparação de `id`), encontrado pelo
  teste automatizado.
- A **foto do gato não carregava** (`require().default`), encontrado **somente**
  pelo screenshot — nenhum teste de lógica pegaria isso.
- A foto do gato tinha **905 KB**; redimensionada e recomprimida (1400px, qualidade
  82) caiu para **382 KB**.

### Resultado final

**Como avaliamos**

O build de produção fecha em **59 kB de JavaScript + 6 kB de CSS** (gzip), sem
dependências além do React. O teste automatizado roda **39 verificações** —
render das seções, contagem dos cards, formato do preço, parcelamento, desconto,
acordeão abrindo e fechando, modal abrindo, validação **bloqueando** o envio vazio,
confirmação gerando código de pedido, o CTA trocando de estado e — depois da virada para
pó — 12 checagens garantindo que a diluição está explícita em hero, passos, FAQ e oferta.

O que mais nos surpreendeu foi o quanto rendeu a **revisão visual**. Os dois piores
bugs do projeto (foto quebrada e a paleta da seção de FAQ) só apareceram quando
olhamos a página renderizada. Código que compila não é código que funciona.

**O que faríamos diferente, com mais tempo**

1. **Testes de verdade no projeto** (React Testing Library), para a validação do
   checkout ficar no repositório em vez de viver num script externo.
2. **Persistir o pedido** em `localStorage`, para o "Ver meu pedido" continuar
   funcionando depois de recarregar a página.
3. **Ilustração do aspirador em cena** — o desenho atual é bom, mas um flat
   illustration com o ambiente daria mais vida ao hero.
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

## Estrutura do projeto (MVVM)

A regra que orientou todo o código: **view não tem regra de negócio e não guarda
estado**. Tudo que é lógica vive em `viewmodels`, tudo que é dado vive em `models`,
e `views` só desenha.

```
src/
├── models/          dados mockados puros (nenhuma lógica)
│   ├── produto.js       especificações, selos, garantias
│   ├── beneficios.js   os 6 diferenciais
│   ├── galeria.js       itens da galeria
│   ├── passos.js        "como funciona" + bloco modo Pet
│   ├── depoimentos.js   prova social
│   ├── oferta.js        preços e condições
│   ├── faq.js           8 perguntas
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
│   └── sections/     Hero, Beneficios, Galeria, ComoFunciona,
│                     ProvaSocial, Oferta, Faq, ChamadaFinal
│
├── styles/          18 CSS Modules (um por componente/seção)
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
- **CSS Modules em vez de CSS global** — cada seção tem seu arquivo, e só uma
  regra de escopo (`--tokens`) é global.
- **SVG em vez de foto do produto** — produto fictício não tem foto; e a
  ilustração fica nítida em qualquer tela.
- **Fontes locais em vez de CDN** — a apresentação precisa funcionar sem internet.
- **Validação no viewmodel, não no componente** — se a regra morar na view, ela
  morre com a view.

## Créditos e licenças

- **Foto do gato**: Wikimedia Commons, licença **CC0** (domínio público).
  Autoria e licença conferidas via API antes do download.
- **Ilustrações do produto**: vetores autorais deste repositório (nenhuma IA de
  imagem foi usada).
- **Fontes**: Inter e Space Grotesk, SIL Open Font License 1.1.
- **Dependências**: React (MIT), react-scripts (MIT).

> Lembrete: **Traclean é um produto fictício.** Preços, avaliações e garantias não
> correspondem a nada real. Nenhum dado enviado nesta página sai do seu navegador.