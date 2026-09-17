# Flashcards - Engenharia de Prompts

## Card 01

**Pergunta:** Por que um prompt ambíguo tende a gerar respostas inconsistentes?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque deixa espaço para o modelo inferir o que não foi dito explicitamente, e essa inferência pode variar entre execuções.

</details>

## Card 02

**Pergunta:** Para que servem as XML tags dentro de um prompt?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Para separar partes do prompt (instrução, contexto, dado de entrada) sem ambiguidade, evitando que conteúdo dinâmico seja confundido com comando.

</details>

## Card 03

**Pergunta:** O que é few-shot prompting?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A técnica de incluir exemplos concretos de entrada e saída no prompt para mostrar o padrão esperado, em vez de apenas descrevê-lo em prosa.

</details>

## Card 04

**Pergunta:** Quando pedir chain-of-thought costuma compensar?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Em tarefas que envolvem múltiplos passos de decisão ou comparação de alternativas, onde raciocínio explícito melhora a qualidade da resposta final.

</details>

## Card 05

**Pergunta:** O que significa tratar o prompt como um "contrato de comportamento"?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Definir explicitamente não só o caminho feliz, mas também o que o modelo deve fazer em exceções, entradas fora do esperado ou pedidos fora do escopo.

</details>

## Card 06

**Pergunta:** Por que chain-of-thought não deveria ser usado em toda tarefa por padrão?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque aumenta custo e latência, e em tarefas simples não muda a qualidade da resposta final o suficiente para justificar esse custo.

</details>

## Card 07

**Pergunta:** Como uma mudança de prompt em produção deveria ser tratada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Como uma mudança testada, comparando o resultado da nova versão com o da anterior antes de promover para produção.

</details>

## Card 08

**Pergunta:** Prompt mais longo é o mesmo que prompt mais claro?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. Clareza vem de estrutura e separação de partes, não de extensão do texto.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
