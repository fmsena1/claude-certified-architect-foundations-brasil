# Módulo 08 — Agentes e Claude Agent SDK

Este módulo cobre a diferença entre um chatbot simples, um assistente que usa ferramentas pontualmente e um agente autônomo que opera em loop até atingir um objetivo. Também cobre quando um único agente já resolve o problema e quando a resposta certa é dividir o trabalho entre subagentes ou orquestrar múltiplos agentes.

## Objetivo

Ao final deste módulo, você deve conseguir distinguir chatbot, assistente com ferramentas e agente autônomo; descrever o loop perceber-decidir-agir de um agente; explicar o papel de um subagente dentro de um agente orquestrador; e argumentar quando um problema pede orquestração multiagente em vez de um agente único.

## Onde este tema apareceria numa avaliação

- Classificar um sistema descrito (chatbot, assistente com ferramentas ou agente autônomo) a partir do comportamento observado.
- Identificar as etapas do loop perceber-decidir-agir num cenário narrado.
- Justificar quando dividir uma tarefa em subagentes em vez de manter tudo em um único agente.
- Reconhecer sinais de que um problema exige múltiplos agentes coordenados, não apenas mais ferramentas.
- Apontar riscos de dar autonomia de loop a um agente sem limite de iteração ou supervisão.

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
| Chatbot | Ponto de partida mais simples: responde a uma mensagem por vez, sem ferramentas nem memória de ação | Contraste de base para entender o que um agente adiciona |
| Assistente com ferramentas | Usa tool use pontual dentro de uma resposta, mas não decide sozinho quantas rodadas dar | Aprofundado no módulo 07 (Tool Use, Function Calling e MCP) |
| Agente autônomo | Opera em loop perceber-decidir-agir até atingir um objetivo ou critério de parada | Base do Claude Agent SDK e do Claude Code (módulo 09) |
| Subagente | Agente especializado, invocado por um agente orquestrador para uma subtarefa delimitada | Permite isolar contexto e responsabilidade sem inflar o agente principal |
| Orquestração multiagente | Vários agentes coordenados dividindo uma tarefa complexa | Traz custo e complexidade adicionais, ponderados no módulo 15 |

## Conceitos essenciais

### De chatbot a agente autônomo

Um chatbot responde a uma mensagem com base no histórico da conversa, sem agir sobre o mundo fora do texto. Um assistente com ferramentas vai um passo além: dentro de uma resposta, pode chamar uma ou mais ferramentas para buscar informação ou executar uma ação pontual, mas quem decide que a tarefa terminou ainda é, em grande parte, a interação com quem está do outro lado. Um agente autônomo muda esse eixo: ele mesmo decide, a cada rodada, se já atingiu o objetivo ou se precisa perceber mais informação, tomar outra decisão e agir de novo. A diferença não é a presença de ferramentas — é quem controla o encerramento do ciclo de trabalho.

### O loop perceber-decidir-agir

Todo agente autônomo gira em torno do mesmo loop: perceber o estado atual (ler um arquivo, checar o resultado de uma chamada anterior, ler uma mensagem nova), decidir a próxima ação com base nesse estado e no objetivo, e agir (chamar uma ferramenta, escrever um arquivo, responder). O resultado da ação alimenta a próxima percepção, e o ciclo se repete até um critério de parada: objetivo atingido, limite de iterações alcançado, ou necessidade de intervenção humana. Sem um critério de parada claro, um agente autônomo pode continuar iterando sem produzir valor adicional — por isso definir a condição de parada é parte do design do agente, não um detalhe de implementação.

### Subagentes e divisão de responsabilidade

Um subagente é um agente especializado, com seu próprio objetivo delimitado e, tipicamente, sua própria janela de contexto, invocado por um agente orquestrador para resolver uma parte específica de uma tarefa maior. Dividir em subagentes ajuda quando uma tarefa tem etapas com naturezas muito diferentes (por exemplo, investigar um problema e depois escrever a correção), quando o contexto de uma etapa não precisa poluir o contexto das outras, ou quando etapas independentes podem rodar em paralelo. O agente orquestrador mantém a visão do objetivo geral e decide quando delegar, enquanto cada subagente foca só na sua fatia do problema.

### Quando o problema pede múltiplos agentes coordenados

Orquestração multiagente vai além de um orquestrador com subagentes sob seu comando direto: descreve cenários em que várias linhas de trabalho autônomas precisam ser coordenadas, com comunicação entre si, possivelmente em paralelo, para resolver um problema que nenhum agente sozinho cobriria bem dentro de um contexto e um objetivo únicos. É uma decisão de arquitetura com custo real — mais chamadas, mais coordenação, mais superfície de erro — e não deveria ser o ponto de partida padrão para qualquer tarefa.

## Exemplo prático

Cenário: um agente recebe a tarefa de investigar por que um endpoint está retornando erro 500 em produção e propor uma correção. Ele não recebe instruções passo a passo — apenas o objetivo final.

```
objetivo: corrigir causa do erro 500 no endpoint X

loop:
  perceber  -> ler logs recentes do endpoint
  decidir   -> log aponta exceção de nulidade em um campo opcional
  agir      -> abrir o arquivo do handler correspondente

  perceber  -> ler o trecho de código do handler
  decidir   -> campo não está sendo validado antes do uso
  agir      -> aplicar correção e rodar os testes do módulo

  perceber  -> resultado dos testes: todos passando
  decidir   -> objetivo atingido, encerrar loop
  agir      -> reportar resumo da correção
```

Nenhuma dessas etapas foi prescrita de antemão: o agente escolheu a próxima ação a cada rodada com base no que observou na anterior. Isso é o loop perceber-decidir-agir em funcionamento.

## Raciocínio arquitetural

### Quando um assistente com ferramentas basta e quando é preciso um agente

Se a tarefa cabe numa única troca — uma pergunta, uma ou poucas chamadas de ferramenta, uma resposta — um assistente com ferramentas resolve com menos complexidade e menos custo do que um agente autônomo. A necessidade de um agente aparece quando o número de passos não é conhecido de antemão, quando o resultado de uma ação determina qual será a próxima, ou quando a tarefa só termina quando um critério observável for satisfeito (testes passando, arquivo gerado corretamente, build sem erro). Adicionar um loop autônomo a um problema que teria uma resposta direta só acrescenta latência, custo e risco de divergência sem ganho real.

### Quando dividir em subagentes ou multiagente em vez de um agente único

Um agente único com um bom conjunto de ferramentas resolve a maioria das tarefas de escopo moderado. Vale considerar subagentes quando etapas distintas da tarefa exigem contexto muito diferente entre si (evitar que o contexto de uma etapa "contamine" outra), quando alguma etapa pode ser paralelizada sem depender do resultado das demais, ou quando cada etapa se beneficia de um conjunto de ferramentas e instruções mais restrito e específico. Orquestração multiagente completa só se justifica quando essa divisão de contexto e paralelismo compensa a coordenação adicional — na dúvida, comece com um agente único e evolua para subagentes quando a necessidade aparecer de forma concreta.

## Boas práticas

- Escolha o modelo mais simples que resolve o problema: chatbot, depois assistente com ferramentas, depois agente autônomo — nessa ordem de complexidade crescente.
- Defina um critério de parada explícito para todo agente autônomo, incluindo um limite de iterações.
- Use subagentes para isolar contexto e responsabilidade, não apenas para dividir texto por dividir.
- Mantenha o agente orquestrador com visão do objetivo geral; delegue detalhes de execução aos subagentes.
- Trate orquestração multiagente como uma decisão de custo e complexidade, não como o padrão inicial de arquitetura.
- Registre (log) as decisões do loop perceber-decidir-agir para permitir depuração e revisão humana.

## Erros comuns

- Chamar de "agente" qualquer sistema que apenas usa uma ferramenta uma vez, sem loop autônomo real.
- Deixar um agente sem limite de iterações ou sem critério de parada claro.
- Dividir em múltiplos agentes uma tarefa que um único agente com boas ferramentas resolveria mais simplesmente.
- Misturar contextos de subtarefas diferentes num único agente, tornando o histórico confuso e menos confiável.
- Assumir que mais agentes coordenados sempre produzem um resultado melhor do que um agente único bem projetado.

## Resumo para revisão

- Chatbot responde; assistente com ferramentas age pontualmente; agente autônomo decide sozinho quando parar.
- O loop perceber-decidir-agir é o núcleo de todo agente autônomo, com um critério de parada explícito.
- Subagentes isolam contexto e responsabilidade dentro de uma tarefa maior, sob um agente orquestrador.
- Orquestração multiagente resolve problemas que exigem paralelismo ou contextos muito distintos, mas custa mais em coordenação.
- Comece pela solução mais simples e evolua para agente, subagentes ou multiagente conforme a necessidade real aparecer.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar o desenho do loop de um agente.
- Continue para [Módulo 09 — Claude Code e Automação de Engenharia](../09-Claude-Code-e-Automacao-de-Engenharia/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
