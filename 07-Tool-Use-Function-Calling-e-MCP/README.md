# Módulo 07 — Tool Use, Function Calling e MCP

Este módulo cobre como um modelo Claude deixa de responder só com texto e passa a agir sobre o mundo: chamando ferramentas definidas pela aplicação. O foco é o ciclo de chamada de ferramenta (tool use) e o Model Context Protocol (MCP), o padrão aberto que organiza como ferramentas e contexto externo chegam até o modelo.

## Objetivo

Ao final deste módulo, você deve conseguir explicar como uma ferramenta é definida e oferecida ao modelo, descrever o ciclo completo de uma chamada de ferramenta, decidir quando tool use simples basta e quando é preciso orquestrar múltiplas ferramentas, e explicar o que o MCP resolve como padrão de integração.

## Onde este tema apareceria numa avaliação

- Descrever, em ordem, os passos de um ciclo de chamada de ferramenta, do pedido do usuário até a resposta final do modelo.
- Identificar o que compõe a definição de uma ferramenta e por que a descrição da ferramenta importa tanto quanto seu esquema de entrada.
- Diferenciar um cenário de tool use simples (uma ferramenta, uma chamada) de um cenário de orquestração (múltiplas ferramentas, múltiplos turnos).
- Explicar, em termos gerais, o problema que o MCP resolve em relação a integrações proprietárias de ferramentas.
- Reconhecer riscos de segurança e confiabilidade ao tratar o resultado de uma ferramenta como entrada da aplicação.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e recursos principais do módulo

| Conceito/Recurso | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Definição de ferramenta (tool) | Nome, descrição e esquema de entrada que dizem ao modelo o que a ferramenta faz e como chamá-la | Base de tudo que vem depois: agentes (módulo 08) e automação com Claude Code (módulo 09) dependem de ferramentas bem definidas |
| Ciclo de chamada de ferramenta | Sequência entre o modelo pedir uma ferramenta e receber o resultado dela de volta | É o mecanismo repetido dentro do loop de agente do módulo 08 |
| Orquestração de múltiplas ferramentas | Um turno pode envolver mais de uma ferramenta, em paralelo ou em sequência | Antecipa a decisão "tool use vs agente completo" tratada no módulo 08 |
| Model Context Protocol (MCP) | Padrão aberto para conectar ferramentas e fontes de contexto a diferentes aplicações de LLM | Reduz integração ponto-a-ponto; relevante para Claude Code (módulo 09) e para agentes que precisam de várias fontes de dados |

## Conceitos essenciais

### Definindo uma ferramenta para o modelo

Uma ferramenta é uma descrição que a aplicação envia junto com a requisição: um nome, uma descrição em linguagem natural do que ela faz e um esquema que define os parâmetros de entrada esperados. O modelo não executa nada sozinho — ele decide, com base nessa descrição e no contexto da conversa, se e quando vale a pena pedir a chamada daquela ferramenta. Por isso a qualidade da descrição importa tanto quanto a validade técnica do esquema: uma descrição vaga leva o modelo a chamar a ferramenta na hora errada, ou a nunca chamá-la quando deveria.

### O ciclo de chamada: pedido, execução e resultado

O ciclo tem um formato estável, independente da ferramenta específica. A aplicação envia a mensagem do usuário junto com a lista de ferramentas disponíveis. Se o modelo decidir que uma ferramenta é necessária, a resposta não traz a resposta final, mas um pedido de chamada de ferramenta — nome da ferramenta e os argumentos que o modelo escolheu. A aplicação (não o modelo) executa essa chamada de verdade, contra um sistema real, e devolve o resultado ao modelo em uma nova mensagem. Só então o modelo produz uma resposta final, agora informada pelo resultado da ferramenta. Esse ir-e-vir pode se repetir várias vezes dentro da mesma tarefa.

### Tool use simples vs orquestração de múltiplas ferramentas

Tool use simples é uma ferramenta, uma decisão, um resultado — por exemplo, consultar o status de um pedido. Orquestração de múltiplas ferramentas aparece quando a tarefa exige combinar fontes diferentes: buscar um dado, cruzá-lo com outro, decidir o próximo passo com base no resultado anterior. Isso pode envolver várias ferramentas pedidas no mesmo turno ou uma sequência de turnos em que cada resultado influencia a próxima chamada. Quanto mais essa sequência se torna aberta e dependente de decisões do próprio modelo sobre "o que fazer a seguir", mais o cenário se aproxima de um agente (módulo 08) em vez de um tool use pontual.

### MCP como padrão aberto de integração

O Model Context Protocol é um padrão aberto para conectar ferramentas e fontes de contexto (arquivos, bancos de dados, APIs internas) a aplicações que usam modelos de linguagem, incluindo Claude. Sem um padrão comum, cada aplicação precisaria construir sua própria integração específica para cada fonte de dados ou ferramenta externa. O MCP separa quem expõe a ferramenta (um servidor MCP) de quem consome (a aplicação que roda o modelo), permitindo que a mesma ferramenta seja reaproveitada por diferentes aplicações sem reescrever a integração a cada vez.

## Exemplo prático

### Um assistente de viagens com uma ferramenta de clima

Um assistente de viagens tem uma ferramenta chamada `consultar_clima`, que recebe uma cidade e uma data e devolve a previsão. O usuário pergunta se vale levar casaco na viagem da próxima semana.

```
usuário: "Vou para Porto Alegre semana que vem, preciso de casaco?"

modelo: decide chamar a ferramenta
  tool_use { nome: consultar_clima, entrada: { cidade: "Porto Alegre", data: "semana que vem" } }

aplicação: executa a chamada real contra o serviço de clima
  tool_result { previsão: "mínima de 9°C, chuva possível" }

modelo: usa o resultado para responder
  "Sim, leve casaco — a mínima prevista é de 9°C, com chance de chuva."
```

## Raciocínio arquitetural

### Quando tool use simples resolve o problema

Se a tarefa envolve uma decisão clara ("preciso ou não desse dado externo") e uma única fonte, tool use simples é suficiente e mais barato de manter do que qualquer forma de orquestração. Adicionar múltiplas ferramentas ou um loop de decisão quando o problema é fundamentalmente um único lookup só aumenta superfície de erro e custo por interação, sem ganho real.

### Quando considerar MCP em vez de integração proprietária

Construir uma integração direta e específica para uma única ferramenta, em uma única aplicação, é razoável quando o escopo é pequeno e não deve crescer. MCP compensa quando várias aplicações (ou vários times) vão precisar acessar as mesmas fontes de dados e ferramentas, ou quando a lista de ferramentas deve evoluir de forma independente da aplicação que as consome — nesse caso, um padrão comum evita reconstruir a mesma integração várias vezes.

## Boas práticas

- Escreva descrições de ferramenta claras e específicas — é a partir delas que o modelo decide quando chamar.
- Mantenha o esquema de entrada da ferramenta o mais restrito e explícito possível, evitando parâmetros ambíguos.
- Trate todo resultado de ferramenta como entrada externa a ser validada pela aplicação, nunca como algo automaticamente confiável.
- Prefira poucas ferramentas bem definidas a muitas ferramentas genéricas e sobrepostas em propósito.
- Avalie MCP quando a mesma ferramenta ou fonte de dados precisa ser reaproveitada por mais de uma aplicação.
- Registre e monitore falhas de chamada de ferramenta — elas fazem parte do fluxo normal, não são exceção rara.

## Erros comuns

- Escrever descrição vaga de ferramenta, fazendo o modelo chamá-la no momento errado ou nunca chamá-la.
- Confiar no resultado da ferramenta sem validação, como se ele já viesse garantidamente correto.
- Tratar qualquer necessidade de dado externo como exigindo um agente completo, quando tool use simples já resolveria.
- Ignorar o custo de round-trips extras em uma orquestração de múltiplas ferramentas mal projetada.
- Confundir MCP com um framework de agente — é um protocolo de integração, não um substituto para o raciocínio do modelo.

## Resumo para revisão

- Uma ferramenta é definida por nome, descrição e esquema de entrada; a descrição pesa tanto quanto o esquema.
- O ciclo de chamada é: pedido de ferramenta pelo modelo, execução pela aplicação, resultado devolvido, resposta final.
- Tool use simples serve para uma decisão e uma fonte; orquestração entra quando há múltiplas ferramentas ou dependência entre chamadas.
- MCP é um padrão aberto que separa quem expõe uma ferramenta de quem a consome, evitando integração proprietária repetida.
- Resultado de ferramenta é entrada externa: sempre validar antes de confiar.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para desenhar seu próprio ciclo de chamada de ferramenta.
- Continue para [Módulo 08 — Agentes e Claude Agent SDK](../08-Agentes-e-Claude-Agent-SDK/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
