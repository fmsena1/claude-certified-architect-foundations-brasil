# Módulo 12 — Gerenciamento de Contexto e Prompt Caching

Este módulo cobre como lidar com contexto longo em aplicações reais: o que fazer quando o histórico de uma conversa ou a base de conhecimento anexada cresce além do confortável, e como usar prompt caching para reduzir custo e latência em chamadas repetidas. O fio condutor é decidir entre comprimir contexto, cachear contexto ou buscar contexto sob demanda (RAG) — três estratégias diferentes para três problemas diferentes.

## Objetivo

Ao final deste módulo, você deve conseguir explicar por que contexto longo tem custo mesmo quando cabe na janela do modelo, descrever como prompt caching reduz custo e latência em blocos de prompt repetidos, aplicar sumarização progressiva para comprimir histórico sem perder informação relevante, e argumentar quando comprimir contexto basta e quando o problema pede RAG.

## Onde este tema apareceria numa avaliação

- Explicar por que uma conversa longa fica mais cara e mais lenta a cada novo turno, mesmo sem mudar de modelo.
- Identificar em um cenário descrito onde aplicar prompt caching traria ganho real de custo/latência.
- Escolher entre sumarização progressiva e truncamento simples de histórico para um caso dado.
- Distinguir um problema de "contexto que não cabe" de um problema de "conhecimento que precisa ser buscado", e escolher compressão ou RAG de acordo.
- Reconhecer sinais de que o contexto está degradando a qualidade da resposta (informação relevante "perdida no meio").

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e recursos principais do módulo

| Conceito | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Janela de contexto | Limite de tokens que o modelo processa por chamada; grande, mas não infinito nem gratuito | Base conceitual já introduzida no módulo 02 |
| Prompt caching | Reaproveita blocos de prompt que se repetem entre chamadas, reduzindo custo e latência | Aprofundado em custo no módulo 15 e na estrutura de request do módulo 05 |
| Sumarização progressiva | Comprime histórico de conversa mantendo apenas o que ainda é relevante | Usada em agentes e loops longos, tratados no módulo 08 |
| RAG como alternativa à compressão | Busca conteúdo externo sob demanda em vez de manter tudo no prompt | Aprofundado no módulo 10 |

## Conceitos essenciais

### Por que contexto longo tem custo mesmo quando "cabe"

Uma janela de contexto maior não elimina o custo de processar tokens: cada chamada com histórico longo reprocessa (ou, sem caching, reprocessa integralmente) tudo o que foi enviado, e isso é cobrado e leva tempo. Além do custo, contexto muito longo tem um efeito de qualidade: informação colocada no meio de um bloco extenso tende a ser usada pelo modelo com menos consistência do que informação no início ou no fim. Gerenciar contexto não é só uma questão de "cabe ou não cabe" — é uma questão de custo, latência e qualidade de uso da informação.

### Prompt caching: reaproveitando o que não muda entre chamadas

Prompt caching permite marcar blocos de um prompt (um system prompt longo, uma base de conhecimento fixa, instruções que se repetem em toda chamada) para serem reaproveitados em chamadas subsequentes, em vez de reprocessados do zero. O ganho aparece quando existe uma parte estável do prompt e uma parte variável: a parte estável entra em cache, e cada nova chamada paga um custo menor por reutilizar esse bloco, com latência de resposta também menor. O ganho é proporcional a quanto do prompt é repetido e a quantas vezes ele se repete dentro da janela de validade do cache.

### Sumarização progressiva: comprimindo histórico sem perder o essencial

Em conversas ou agentes de longa duração, manter o histórico completo eventualmente deixa de ser viável. Sumarização progressiva resolve isso substituindo turnos antigos por um resumo compacto que preserva decisões, fatos e estado relevante, descartando o texto literal da interação. Diferente de um truncamento simples (cortar os turnos mais antigos), a sumarização tenta manter a continuidade semântica da conversa mesmo depois de reduzir o volume de texto.

### Compressão de contexto vs RAG: dois problemas diferentes

Comprimir contexto resolve o problema de "eu já tenho toda a informação, mas ela não cabe (ou fica cara/degradada) no prompt". RAG resolve um problema diferente: "eu não sei de antemão qual informação vai ser relevante para esta pergunta específica, então busco sob demanda em vez de carregar tudo". Tratar os dois como intercambiáveis é um erro comum — compressão ainda pressupõe que a informação relevante já está no contexto antes de ser comprimida; RAG busca a informação relevante apenas quando ela é necessária.

## Exemplo prático

Um agente de suporte mantém uma base de políticas fixa (grande, mas estável) e um histórico de conversa que cresce a cada turno. A base de políticas entra em cache porque não muda entre chamadas; o histórico de conversa é sumarizado progressivamente a cada N turnos para não crescer indefinidamente.

```
chamada 1: [cache: base de políticas] + [histórico curto] + [turno novo]
chamada 2: [cache: base de políticas] + [histórico curto] + [turno novo]
...
chamada N: [cache: base de políticas] + [resumo do histórico antigo] + [últimos turnos] + [turno novo]
```

## Raciocínio arquitetural

### Quando comprimir contexto e quando usar RAG

Se o volume de informação candidata é conhecido e limitado (histórico da própria conversa, um conjunto fixo de documentos que cabe processar por completo), comprimir ou cachear costuma bastar. Se o volume de informação candidata é grande, muda com frequência, ou só uma fração pequena é relevante para cada pergunta, buscar sob demanda (RAG) tende a ser mais eficiente do que tentar manter (ou resumir) tudo no prompt.

### Onde aplicar prompt caching primeiro

O maior retorno de prompt caching aparece em blocos grandes e estáveis reutilizados em muitas chamadas: instruções de sistema extensas, guias de estilo, bases de conhecimento fixas ou exemplos few-shot longos. Antes de investir em sumarização ou RAG, vale checar se uma parte relevante do custo atual já poderia cair só com caching do que não muda entre chamadas.

## Boas práticas

- Separe, no prompt, o que é estável (candidato a cache) do que é variável a cada chamada.
- Monitore o crescimento do histórico de conversa e defina um gatilho claro para sumarizar (ex.: número de turnos, tokens acumulados).
- Prefira sumarização progressiva a truncamento simples quando a continuidade da conversa importa.
- Trate RAG como a resposta para "não sei de antemão o que é relevante", não como substituto genérico de compressão.
- Revise periodicamente se a informação mais importante ainda está posicionada de forma a ser bem utilizada dentro do prompt.
- Meça custo e latência antes e depois de aplicar caching ou sumarização, em vez de assumir o ganho.

## Erros comuns

- Deixar o histórico de conversa crescer indefinidamente sem estratégia de compressão.
- Tentar resolver com sumarização um problema que na verdade é de busca de conhecimento (candidato a RAG).
- Colocar informação crítica no meio de um bloco de contexto muito longo, onde tende a ser subutilizada.
- Cachear conteúdo que muda a cada chamada, perdendo o benefício do caching.
- Confundir "contexto cabe na janela" com "contexto é usado com a mesma qualidade em qualquer tamanho".

## Resumo para revisão

- Contexto longo tem custo e efeito de qualidade, não só limite de tamanho.
- Prompt caching reaproveita blocos estáveis do prompt entre chamadas, reduzindo custo e latência.
- Sumarização progressiva comprime histórico preservando o que ainda é relevante, ao contrário do truncamento simples.
- Compressão pressupõe que a informação já está no contexto; RAG busca informação sob demanda quando isso não é verdade.
- O maior ganho de caching costuma estar nos blocos grandes e estáveis do prompt, não no conteúdo variável.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar identificação de oportunidades de prompt caching.
- Continue para [Módulo 13 — Segurança, Privacidade e IA Responsável](../13-Seguranca-Privacidade-e-IA-Responsavel/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
