# Flashcards - Boas Práticas, Avaliação e Custos

## Card 01

**Pergunta:** O que é, na prática, um eval de prompt?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um conjunto de casos de entrada com um critério de julgamento (comparação exata, regra ou outro modelo como juiz) usado para medir se um prompt está atendendo ao esperado.

</details>

## Card 02

**Pergunta:** Por que avaliar um agente é diferente de avaliar um prompt de resposta única?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque o agente executa uma sequência de decisões e chamadas de ferramenta; o eval precisa julgar a trajetória inteira, não só o texto de saída final.

</details>

## Card 03

**Pergunta:** Quando grading automático não é suficiente sozinho?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando o critério de acerto é subjetivo (tom, completude, adequação) ou a tarefa tem alto risco — nesses casos, uma amostra de revisão humana deve complementar o grading automático.

</details>

## Card 04

**Pergunta:** Quais sinais mínimos uma aplicação deveria registrar por chamada, para observabilidade?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Tokens de entrada e saída, se a resposta veio de cache, o motivo de parada (`stop_reason`) e se houve erro ou recusa.

</details>

## Card 05

**Pergunta:** Qual é a ordem recomendada para aplicar alavancas de redução de custo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Primeiro cache de prompt e higiene de tokens; depois escolha de modelo e nível de esforço proporcional à tarefa; por último, processamento em lote para cargas tolerantes a atraso.

</details>

## Card 06

**Pergunta:** Por que medir custo por tarefa concluída, e não por chamada isolada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque uma chamada mais barata que precisa de mais tentativas ou turnos para concluir a tarefa pode custar mais no total do que uma chamada mais cara que resolve de primeira.

</details>

## Card 07

**Pergunta:** Por que um prompt de produção deveria ser versionado como código?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Para permitir revisão, histórico e rollback de mudanças de comportamento, evitando editar o prompt em uso sem processo nem rastro do que mudou e por quê.

</details>

## Card 08

**Pergunta:** Quando o processamento em lote (batch) é a escolha certa?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Para cargas de trabalho de alto volume que toleram atraso na resposta, como processamento noturno ou análise em massa — não para fluxos que exigem resposta imediata.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
