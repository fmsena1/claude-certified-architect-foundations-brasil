# Módulo 02 — Fundamentos de IA Generativa e LLMs

Este módulo cobre o vocabulário técnico mínimo para entender como um modelo como Claude gera texto: tokens, previsão do próximo token, temperatura, janela de contexto e a diferença entre um modelo base e um modelo assistente. Sem esse vocabulário, discussões sobre prompt, custo e comportamento do modelo (módulos seguintes) ficam soltas.

## Objetivo

Ao final deste módulo, você deve conseguir explicar como um LLM gera uma resposta token a token, o que a temperatura controla, por que a janela de contexto é um limite físico do modelo, e por que um modelo assistente como Claude se comporta de forma diferente de um modelo base.

## Onde este tema apareceria numa avaliação

- Explicar por que o custo e o limite de um LLM são medidos em tokens, não em caracteres ou palavras.
- Diferenciar o papel da temperatura de outros parâmetros de geração.
- Reconhecer a janela de contexto como limite compartilhado entre entrada e saída.
- Explicar por que um modelo assistente (como Claude) segue instruções e recusa pedidos problemáticos, enquanto um modelo base apenas continua texto.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e mecanismos principais

| Conceito | Papel no módulo | Onde reaparece no repositório |
| --- | --- | --- |
| Token | Unidade mínima de texto processada pelo modelo | Base de custo e limite em todos os módulos de API (05, 12, 15) |
| Next-token prediction | Mecanismo pelo qual o modelo gera texto, um token por vez | Explica por que streaming (módulo 05) faz sentido |
| Temperatura | Parâmetro que controla aleatoriedade na escolha do próximo token | Ajuste fino de comportamento, citado no módulo 06 |
| Janela de contexto | Quantidade máxima de tokens que o modelo enxerga de uma vez (entrada + saída) | Central nos módulos 04, 05 e 12 |
| Modelo assistente (RLHF / Constitutional AI) | Processo que transforma um modelo base em um modelo que segue instruções com segurança | Base conceitual do módulo 13 (IA responsável) |

## Conceitos essenciais

### Tokens e tokenização

Um LLM não processa texto em palavras inteiras nem em caracteres soltos: ele processa tokens, fragmentos de texto definidos por um tokenizador. Uma palavra comum pode ser um único token; uma palavra rara ou um termo técnico pode virar vários tokens. Isso importa porque custo de API, limite de contexto e velocidade de resposta são todos medidos em tokens, não em "quantidade de texto" de forma intuitiva.

### Next-token prediction e temperatura

Na geração, o modelo produz uma distribuição de probabilidade sobre qual deveria ser o próximo token e escolhe um deles, token após token, até parar. A temperatura ajusta o quão "arriscada" é essa escolha: temperatura baixa favorece o token mais provável (respostas mais previsíveis e consistentes); temperatura mais alta permite escolhas menos óbvias (respostas mais variadas, úteis em brainstorming, mais arriscadas em tarefas que exigem precisão).

### Janela de contexto

A janela de contexto é o número máximo de tokens que o modelo consegue "ver" em uma única chamada — e essa contagem soma o prompt de entrada, o histórico da conversa e a resposta gerada. Um contexto maior permite documentos mais longos ou históricos de conversa mais extensos, mas não é ilimitado nem gratuito: mais tokens processados custam mais e podem ser mais lentos.

### Modelo base vs modelo assistente

Um modelo base é treinado para prever o próximo token a partir de um enorme volume de texto; sozinho, ele apenas continua um texto, sem necessariamente responder perguntas ou seguir instruções de forma confiável. Para virar um assistente como Claude, o modelo passa por um processo adicional de ajuste alinhado a comportamento desejado — a Anthropic descreve sua abordagem como Constitutional AI, um processo que usa um conjunto de princípios explícitos para guiar o comportamento do modelo, em vez de depender só de feedback humano direto. Esse processo é o que faz Claude seguir instruções, manter um tom consistente e recusar pedidos prejudiciais.

## Exemplo prático

### Por que a mesma pergunta gera respostas diferentes

Duas chamadas com o mesmo prompt e temperatura baixa tendem a gerar respostas parecidas entre si; a mesma pergunta com temperatura alta pode gerar respostas visivelmente diferentes a cada execução. Isso não é um bug: é o efeito esperado do mecanismo de amostragem token a token.

```
prompt idêntico -> temperatura baixa  -> respostas parecidas entre execuções
prompt idêntico -> temperatura alta   -> respostas mais variadas entre execuções
```

## Raciocínio arquitetural

### Escolha a temperatura pelo tipo de tarefa, não por padrão fixo

Tarefas que exigem consistência (extração de dados, classificação, código) pedem temperatura baixa. Tarefas de geração criativa (brainstorming, variações de texto) toleram e até se beneficiam de temperatura mais alta. Usar sempre o mesmo valor de temperatura para todas as tarefas de uma aplicação costuma ser sinal de que ninguém pensou sobre isso.

### Trate a janela de contexto como orçamento, não como armazenamento

A janela de contexto não é um banco de dados: cada chamada recomeça do zero, exceto pelo que for reenviado no próprio prompt. Sistemas que precisam de "memória" de longo prazo entre chamadas resolvem isso com técnicas de gerenciamento de contexto e recuperação (aprofundado nos módulos 10 e 12), não simplesmente aumentando o tamanho da janela.

## Boas práticas

- Meça o tamanho de prompts e respostas em tokens, não em caracteres, ao estimar custo.
- Ajuste a temperatura de forma intencional por tipo de tarefa, não use um valor padrão sem pensar.
- Trate a janela de contexto como recurso finito compartilhado entre entrada e saída.
- Lembre que o comportamento "seguro e útil" de Claude vem do processo de alinhamento, não é uma propriedade automática de qualquer LLM.

## Erros comuns

- Estimar custo ou limite de prompt contando palavras em vez de tokens.
- Achar que temperatura zero elimina toda variação possível de resposta.
- Assumir que o modelo "lembra" de conversas passadas sem que o histórico seja reenviado no prompt.
- Tratar qualquer modelo de linguagem como equivalente a um assistente alinhado como Claude.

## Resumo para revisão

- Token é a unidade real de processamento, custo e limite de um LLM.
- O modelo gera texto prevendo um token de cada vez; a temperatura controla o quão previsível é essa escolha.
- A janela de contexto soma entrada e saída e é um limite físico da chamada, não um armazenamento persistente.
- Modelo base prevê texto; modelo assistente (como Claude) passa por um processo adicional de alinhamento para seguir instruções com segurança.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar estimativa de tokens e efeito da temperatura.
- Continue para [Módulo 03 — Fundamentos de ML para LLMs](../03-Fundamentos-de-ML-para-LLMs/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
