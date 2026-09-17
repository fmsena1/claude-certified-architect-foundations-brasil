# Flashcards - Fundamentos de IA Generativa e LLMs

## Card 01

**Pergunta:** O que é um token?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A unidade mínima de texto que o modelo processa; pode ser menor, igual ou maior que uma palavra.

</details>

## Card 02

**Pergunta:** Como um LLM gera uma resposta?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Prevendo um token de cada vez, com base em probabilidade, até atingir uma condição de parada.

</details>

## Card 03

**Pergunta:** O que a temperatura controla?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O quão arriscada é a escolha do próximo token: baixa favorece o mais provável, alta permite mais variação.

</details>

## Card 04

**Pergunta:** O que é a janela de contexto?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O número máximo de tokens que o modelo processa em uma chamada, somando entrada e saída.

</details>

## Card 05

**Pergunta:** A janela de contexto funciona como memória entre conversas?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. Cada chamada é independente; "memória" só existe se o histórico for reenviado no prompt.

</details>

## Card 06

**Pergunta:** Qual a diferença entre modelo base e modelo assistente?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O modelo base só continua texto; o modelo assistente passa por um processo de alinhamento (ex.: Constitutional AI) para seguir instruções com segurança.

</details>

## Card 07

**Pergunta:** O que é Constitutional AI, em termos gerais?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A abordagem de alinhamento da Anthropic, que usa princípios explícitos para guiar o comportamento do modelo, em vez de depender só de feedback humano direto.

</details>

## Card 08

**Pergunta:** Por que custo de API é medido em tokens?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque token é a unidade real de processamento do modelo; palavras e caracteres não têm correspondência fixa com ela.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
