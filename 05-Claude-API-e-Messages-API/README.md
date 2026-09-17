# Módulo 05 — Claude API e Messages API

Este módulo cobre como construir sobre a Claude API a partir da Messages API, o único endpoint que concentra autenticação, envio de mensagens, system prompt, streaming e controle de saída. Entender essa estrutura é pré-requisito para todos os módulos seguintes, já que tool use, agentes e RAG são construídos em cima da mesma chamada.

## Objetivo

Ao final deste módulo, você deve conseguir montar uma requisição válida à Messages API, explicar o papel de cada campo principal (`model`, `messages`, `system`, `max_tokens`, `stop_sequences`), diferenciar uma chamada em modo padrão de uma em streaming, e apontar as diferenças estruturais entre os SDKs oficiais e uma chamada HTTP crua.

## Onde este tema apareceria numa avaliação

- Montar ou corrigir uma requisição à Messages API, identificando campos obrigatórios e opcionais.
- Explicar a diferença entre o campo `system` e uma mensagem com `role: "user"`.
- Escolher entre resposta padrão e streaming para um cenário descrito (ex.: interface de chat vs. processamento em lote).
- Interpretar `stop_reason` e `stop_sequences` em uma resposta.
- Reconhecer o que muda (e o que não muda) entre usar o SDK oficial de uma linguagem e chamar a API via HTTP direto.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Recursos e conceitos principais

| Recurso/Conceito | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Messages API (`POST /v1/messages`) | Endpoint único para enviar mensagens e receber resposta do modelo | Base de tool use (módulo 07), agentes (módulo 08) e RAG (módulo 10) |
| Autenticação por chave de API | Garante que só clientes autorizados chamam a API | Chave gerenciada no Console, ligada a cobrança e limites de uso |
| `system` prompt | Define comportamento e contexto persistente do modelo na conversa | Base de engenharia de prompt (módulo 06) |
| Streaming (Server-Sent Events) | Entrega a resposta em pedaços à medida que é gerada | Usado em interfaces de chat e em agentes de longa duração (módulo 08) |
| Controle de output (`max_tokens`, `stop_sequences`) | Limita tamanho e ponto de parada da resposta | Impacta custo e previsibilidade, aprofundado no módulo 15 |
| SDKs oficiais | Encapsulam autenticação, retries e tipos por linguagem | Usados em exemplos práticos de agentes e automações nos módulos seguintes |

## Conceitos essenciais

### Estrutura de request e response

Toda chamada à Claude API passa pelo mesmo endpoint: `POST /v1/messages`. O corpo da requisição exige, no mínimo, um `model` (o identificador do modelo a usar), uma lista `messages` (o histórico da conversa, cada item com `role` — `user` ou `assistant` — e `content`) e um `max_tokens` (limite superior de tokens que a resposta pode gerar). A resposta traz o texto gerado dentro de `content`, além de metadados como `stop_reason` (por que a geração parou), `usage` (tokens consumidos) e o `model` efetivamente usado. Não existem "endpoints separados" por funcionalidade — tool use, visão e controle de formato de saída são todos parâmetros do mesmo request.

### Autenticação

A autenticação é feita por chave de API, gerada no Console da Anthropic e enviada em um cabeçalho HTTP a cada requisição, junto com um cabeçalho de versão da API que fixa o contrato esperado de request/response. A chave identifica a organização e o workspace de cobrança; perder o controle sobre ela equivale a dar acesso à conta de faturamento. Os SDKs oficiais leem a chave automaticamente de uma variável de ambiente, evitando que ela apareça hardcoded em código-fonte.

### System prompt vs. mensagens de usuário

O campo `system` fica fora da lista `messages` e define instruções persistentes de comportamento — papel do assistente, tom, restrições — que valem para toda a conversa. Mensagens com `role: "user"` e `role: "assistant"` compõem o histórico de turnos, e é esse histórico que o cliente reenvia a cada chamada, já que a API não guarda estado entre requisições. Confundir as duas coisas é comum: instrução de comportamento pertence ao `system`; conteúdo da conversa pertence a `messages`.

### Streaming e controle de output

Por padrão, a Messages API só responde depois de gerar a resposta inteira. Ativar streaming (`stream: true`) faz o servidor devolver a resposta em eventos incrementais, essencial para interfaces de chat responsivas e para respostas longas que, sem streaming, poderiam esbarrar em timeout de rede. `max_tokens` limita o tamanho máximo da resposta (não a garante — o modelo pode parar antes) e `stop_sequences` define strings que, se geradas, encerram a resposta imediatamente. Ambos os controles afetam diretamente custo e previsibilidade de comportamento.

## Exemplo prático

Uma aplicação de suporte precisa responder a uma pergunta do usuário em português, limitando a resposta a um parágrafo curto e parando caso o modelo comece a gerar uma nova pergunta por conta própria.

```
POST /v1/messages
headers:
  x-api-key: <chave>
  anthropic-version: <versão fixada>
body:
  model: <id do modelo>
  max_tokens: 300
  system: "Responda em português, em até um parágrafo."
  stop_sequences: ["Pergunta:"]
  messages:
    - role: user
      content: "Como funciona o rastreamento do meu pedido?"
```

## Raciocínio arquitetural

### Streaming ou resposta padrão

A escolha entre streaming e resposta padrão depende de quem consome a resposta. Uma interface interativa, onde a pessoa vê o texto aparecendo, se beneficia de streaming: a latência percebida cai mesmo que o tempo total de geração seja o mesmo. Um processo em lote, que só usa o texto completo depois de pronto (ex.: gerar um resumo para salvar em banco), não ganha nada com streaming e adiciona complexidade desnecessária ao consumir eventos incrementais.

### SDK oficial ou chamada HTTP direta

Um SDK oficial encapsula autenticação, serialização, retries e tipos específicos da linguagem, reduzindo código boilerplate e erros de formato. Chamar a API via HTTP cru (`curl`, `fetch`, `requests`) faz sentido quando não existe SDK para a linguagem do projeto, quando o ambiente não permite dependências externas, ou para depuração pontual. A estrutura de request/response é idêntica nos dois casos — o SDK não muda o contrato da API, só a forma de construir e enviar a chamada.

## Boas práticas

- Nunca hardcode a chave de API no código-fonte; use variável de ambiente ou gerenciador de segredos.
- Sempre defina `max_tokens` de forma explícita e compatível com o tamanho de resposta esperado para a tarefa.
- Use o campo `system` para instruções de comportamento e reserve `messages` para o conteúdo da conversa.
- Prefira o SDK oficial da linguagem do projeto em vez de reimplementar chamadas HTTP manualmente.
- Ative streaming quando a resposta alimenta uma interface interativa ou quando o tamanho esperado da resposta é grande.
- Trate `stop_reason` na resposta antes de assumir que a geração terminou pelo motivo esperado.

## Erros comuns

- Reenviar apenas a última mensagem do usuário, esquecendo que a API não mantém histórico de conversa entre chamadas.
- Colocar instruções de comportamento dentro de `messages` em vez de usar o campo `system`.
- Definir `max_tokens` baixo demais e receber uma resposta cortada no meio, sem checar `stop_reason`.
- Ignorar o cabeçalho de versão da API, o que pode expor a aplicação a mudanças de contrato inesperadas.
- Misturar padrões de streaming e de resposta padrão no mesmo cliente sem tratar os dois formatos de retorno.

## Resumo para revisão

- Toda funcionalidade da Claude API passa por um único endpoint: `POST /v1/messages`.
- Autenticação é por chave de API enviada em cabeçalho, nunca embutida em código-fonte versionado.
- `system` define comportamento persistente; `messages` carrega o histórico de turnos da conversa.
- Streaming melhora latência percebida em interfaces interativas, mas não é necessário para processamento em lote.
- `max_tokens` e `stop_sequences` controlam tamanho e ponto de parada da resposta, com impacto direto em custo.
- SDKs oficiais não mudam o contrato da API — apenas encapsulam autenticação, tipos e chamadas HTTP.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Faça o [lab](./lab.md) com uma chamada real à Messages API.
- Continue para [Módulo 06 — Engenharia de Prompts](../06-Engenharia-de-Prompts/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
