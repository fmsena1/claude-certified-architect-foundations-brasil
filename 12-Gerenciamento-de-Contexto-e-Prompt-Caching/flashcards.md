# Flashcards - Gerenciamento de Contexto e Prompt Caching

## Card 01

**Pergunta:** Por que contexto longo tem custo mesmo quando cabe na janela do modelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque cada chamada com histórico longo reprocessa (ou paga para reaproveitar) todo esse conteúdo, o que tem custo e latência, além de poder degradar a qualidade de uso da informação.

</details>

## Card 02

**Pergunta:** O que é candidato ideal para prompt caching?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Blocos de prompt grandes e estáveis, reutilizados em muitas chamadas: system prompts longos, bases de conhecimento fixas, exemplos few-shot que não mudam.

</details>

## Card 03

**Pergunta:** Qual a diferença entre sumarização progressiva e truncamento simples de histórico?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Truncamento descarta os turnos mais antigos sem preservar informação; sumarização progressiva substitui esses turnos por um resumo que mantém decisões e fatos relevantes.

</details>

## Card 04

**Pergunta:** Que efeito de qualidade contexto muito longo pode causar?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Informação posicionada no meio de um bloco extenso tende a ser usada com menos consistência do que informação no início ou no fim.

</details>

## Card 05

**Pergunta:** Quando compressão de contexto basta, sem precisar de RAG?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando o volume de informação candidata é conhecido e limitado, e já está toda disponível no contexto da aplicação.

</details>

## Card 06

**Pergunta:** Quando RAG é a escolha mais adequada em vez de compressão?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando não é possível saber de antemão qual informação será relevante para cada pergunta, ou o volume de conteúdo candidato é grande e muda com frequência.

</details>

## Card 07

**Pergunta:** Que erro comum invalida o ganho de prompt caching?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Cachear um bloco de prompt que muda a cada chamada, o que elimina a vantagem de reaproveitamento.

</details>

## Card 08

**Pergunta:** Qual deveria ser o gatilho para sumarizar histórico de conversa?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um critério objetivo, como número de turnos ou tokens acumulados, definido antes de o histórico crescer sem controle.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
