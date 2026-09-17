# Módulo 06 — Engenharia de Prompts

Este módulo cobre como estruturar um prompt para que o modelo entenda a tarefa de forma confiável e repetível. O ponto central não é encontrar uma "frase mágica", mas tratar o prompt como uma peça de engenharia: clara, testável e versionada, com um contrato explícito sobre o que o modelo deve fazer.

## Objetivo

Ao final deste módulo, você deve conseguir estruturar um prompt com clareza suficiente para reduzir ambiguidade, usar XML tags para separar partes do prompt, decidir quando usar exemplos (few-shot) e quando pedir raciocínio explícito (chain-of-thought), e tratar iteração e teste de prompt como parte do ciclo de desenvolvimento, não como ajuste avulso.

## Onde este tema apareceria numa avaliação

- Identificar por que um prompt ambíguo produz respostas inconsistentes entre execuções.
- Reconhecer o uso correto de XML tags para separar instrução, contexto e dado de entrada.
- Decidir quando adicionar exemplos (few-shot) melhora o resultado e quando apenas aumenta custo sem ganho.
- Explicar o que muda ao pedir chain-of-thought e em que tipo de tarefa isso compensa.
- Avaliar se um prompt tem um contrato de comportamento claro (entrada esperada, formato de saída, regras de exceção).

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e recursos principais

| Conceito | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Clareza e estrutura | Base de qualquer prompt confiável: instrução, contexto e formato de saída bem separados | Pré-requisito para tool use (módulo 07) e agentes (módulo 08), onde o prompt orienta decisões automatizadas |
| XML tags | Delimitador para separar partes do prompt sem ambiguidade | Usado também na formatação de ferramentas e de contexto recuperado via RAG (módulo 10) |
| Few-shot (exemplos) | Mostra o padrão de resposta esperado em vez de apenas descrevê-lo | Reduz variação de formato, o que facilita parsing automatizado downstream |
| Chain-of-thought | Pede raciocínio explícito antes da resposta final em tarefas complexas | Relevante para agentes que precisam justificar decisões (módulo 08) |
| Prompt como contrato | Trata o prompt como uma especificação de comportamento, não como uma sugestão | Base para avaliação e versionamento de prompt em produção (módulo 15) |
| Iteração e teste | Ciclo de ajustar prompt com base em resultado observado, não em suposição | Conecta com evals e observabilidade (módulo 15) |

## Conceitos essenciais

### Clareza e estrutura como ponto de partida

Um prompt ambíguo gera respostas inconsistentes porque deixa espaço para o modelo inferir o que não foi dito. Estruturar o prompt em partes reconhecíveis — instrução, contexto, dado de entrada, formato de saída esperado — reduz essa margem de interpretação. Quanto mais implícito o requisito, maior a chance de a resposta variar entre execuções aparentemente idênticas.

### XML tags como delimitador

Separar seções do prompt com XML tags (por exemplo, uma tag para o texto que deve ser analisado e outra para a instrução sobre o que fazer com ele) evita que o modelo confunda dado de entrada com instrução. Isso é especialmente útil quando o prompt inclui conteúdo dinâmico, como um trecho de documento ou uma mensagem de usuário, que não deveria ser interpretado como comando.

### Exemplos (few-shot) e raciocínio explícito (chain-of-thought)

Few-shot mostra o padrão esperado por meio de exemplos concretos de entrada e saída, o que costuma ser mais eficaz do que apenas descrever o formato em prosa. Chain-of-thought pede que o modelo explicite o raciocínio antes de dar a resposta final, o que tende a melhorar resultados em tarefas que envolvem múltiplos passos lógicos, mas tem custo adicional de tokens e nem sempre é necessário em tarefas simples.

### Prompt como contrato de comportamento

Um prompt bem escrito define não só o que fazer no caso comum, mas também o que fazer nas exceções: entrada fora do esperado, informação insuficiente, ou pedido fora do escopo da tarefa. Tratar o prompt como um contrato — com regras explícitas de comportamento, não apenas uma descrição da tarefa ideal — é o que torna o comportamento do modelo previsível o suficiente para uso em produção.

## Exemplo prático

Um prompt de classificação de ticket de suporte, estruturado com separação clara entre instrução, exemplo e dado de entrada:

```
<instrucao>
Classifique o ticket abaixo em uma das categorias: cobranca, bug, duvida_de_uso.
Responda apenas com a categoria, sem texto adicional.
</instrucao>

<exemplo>
<ticket>Meu cartao foi cobrado duas vezes este mes</ticket>
<categoria>cobranca</categoria>
</exemplo>

<ticket>
A tela de login trava depois que eu clico em entrar
</ticket>
```

A separação por tags deixa claro para o modelo o que é instrução, o que é exemplo de referência e o que é o dado real a ser classificado, reduzindo a chance de o texto do ticket ser interpretado como parte da instrução.

## Raciocínio arquitetural

### Quando adicionar exemplos vale o custo

Few-shot ajuda quando o formato de saída é específico, quando há casos de borda difíceis de descrever em prosa, ou quando execuções anteriores mostraram variação indesejada. Se a tarefa já é simples e o formato natural do modelo já atende, adicionar exemplos apenas aumenta o tamanho do prompt sem ganho proporcional.

### Quando pedir raciocínio explícito compensa

Chain-of-thought tende a compensar em tarefas que envolvem múltiplos passos de decisão, comparação de alternativas ou cálculo intermediário. Em tarefas de classificação simples ou extração direta, pedir raciocínio explícito pode apenas aumentar custo e latência sem mudar a qualidade da resposta final.

## Boas práticas

- Separe instrução, contexto e dado de entrada com XML tags quando o prompt mistura conteúdo dinâmico com comando.
- Use exemplos (few-shot) quando o formato de saída precisa ser específico ou quando há casos de borda recorrentes.
- Reserve chain-of-thought para tarefas que realmente exigem raciocínio em múltiplos passos.
- Escreva o prompt também para o caso de exceção, não apenas para o caminho feliz.
- Trate qualquer mudança de prompt em produção como uma mudança testada, com comparação de resultado antes e depois.
- Guarde versões de prompt junto com o resultado observado, para permitir iteração baseada em evidência.

## Erros comuns

- Escrever o prompt apenas para o caso ideal e deixar comportamento indefinido para entradas fora do esperado.
- Misturar dado de entrada dinâmico com instrução no mesmo bloco de texto, sem delimitador.
- Adicionar chain-of-thought em toda tarefa por padrão, sem avaliar se a tarefa realmente exige raciocínio em múltiplos passos.
- Mudar um prompt em produção sem comparar o resultado da nova versão com a anterior.
- Confundir "prompt mais longo" com "prompt mais claro" — extensão não é o mesmo que estrutura.

## Resumo para revisão

- Prompt ambíguo produz resposta inconsistente; estrutura clara reduz essa variação.
- XML tags separam instrução, contexto e dado de entrada sem ambiguidade.
- Few-shot mostra o padrão esperado; chain-of-thought pede raciocínio explícito em tarefas complexas.
- Um prompt bem escrito é um contrato de comportamento, incluindo o que fazer nas exceções.
- Iteração de prompt deve ser baseada em resultado observado, não em suposição.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar reescrita e melhoria de um prompt.
- Continue para [Módulo 07 — Tool Use, Function Calling e MCP](../07-Tool-Use-Function-Calling-e-MCP/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
