# Flashcards - Agentes e Claude Agent SDK

## Card 01

**Pergunta:** Qual a diferença central entre um assistente com ferramentas e um agente autônomo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quem controla o encerramento do trabalho: no assistente com ferramentas, a interação decide quando parar; no agente autônomo, o próprio agente decide, com base no seu objetivo e no que observa.

</details>

## Card 02

**Pergunta:** Quais são as três etapas do loop de um agente autônomo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Perceber (ler o estado atual), decidir (escolher a próxima ação com base no objetivo) e agir (executar essa ação, gerando um novo estado a perceber).

</details>

## Card 03

**Pergunta:** Por que um agente autônomo precisa de um critério de parada explícito?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque sem um objetivo atingido, limite de iterações ou ponto de intervenção humana definidos, o loop pode continuar iterando sem gerar valor adicional.

</details>

## Card 04

**Pergunta:** O que é um subagente?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um agente especializado, com objetivo delimitado e contexto próprio, invocado por um agente orquestrador para resolver uma subtarefa específica.

</details>

## Card 05

**Pergunta:** Cite dois motivos válidos para dividir uma tarefa em subagentes.

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Isolar contexto entre etapas de natureza muito diferente, e permitir que etapas independentes rodem em paralelo.

</details>

## Card 06

**Pergunta:** Quando a orquestração multiagente se justifica em vez de um agente único com subagentes?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando o problema exige múltiplas linhas de trabalho autônomas coordenadas entre si, e o ganho de paralelismo ou de separação de contexto compensa o custo adicional de coordenação.

</details>

## Card 07

**Pergunta:** Qual deveria ser o ponto de partida ao desenhar a arquitetura de um sistema com LLM?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A solução mais simples que resolve o problema — chatbot ou assistente com ferramentas — evoluindo para agente, subagentes ou multiagente só quando a necessidade real aparecer.

</details>

## Card 08

**Pergunta:** Por que chamar qualquer uso de ferramenta de "agente" é um erro comum?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque o que define um agente autônomo é o loop de decisão contínua até um critério de parada, não a simples presença de uma chamada de ferramenta.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
