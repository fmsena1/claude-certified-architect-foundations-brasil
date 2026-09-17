# Lab — Módulo 08: Agentes e Claude Agent SDK

## Desenhando o loop de um agente simples no papel

Este micro-lab treina o raciocínio de projetar um agente autônomo, sem depender de código ou de chamadas de API pagas.

## Pré-requisitos

- Ter lido o README do módulo, especialmente a seção sobre o loop perceber-decidir-agir.
- Papel e caneta, ou um editor de texto simples.
- 20 a 30 minutos.

## Passo a passo

1. Escolha uma tarefa real do seu contexto que hoje exige várias etapas manuais e cujo número de passos não é sempre o mesmo (ex.: investigar um erro, preparar um relatório a partir de fontes variadas).
2. Escreva o objetivo final do agente em uma frase só, sem descrever os passos — apenas o resultado esperado.
3. Liste, para cada rodada do loop, o que o agente perceberia (que informação ele leria ou consultaria), o que ele decidiria com base nessa percepção, e que ação executaria em seguida.
4. Defina explicitamente o critério de parada: o que precisa ser verdadeiro para o agente considerar a tarefa concluída, e qual seria o limite máximo de iterações antes de escalar para um humano.
5. Revise sua lista de etapas e identifique se alguma delas tem natureza muito diferente das outras (ferramentas diferentes, tipo de raciocínio diferente) — isso é candidato a virar um subagente.
6. Decida, com justificativa escrita, se essa tarefa precisa de um agente único, de um agente com subagentes, ou se um simples assistente com ferramentas já bastaria.

## O que observar

- A maioria das tarefas do dia a dia cabe em um assistente com ferramentas ou em um agente único; poucas realmente exigem subagentes.
- Definir o critério de parada antes de desenhar o loop evita agentes que "nunca terminam" de verdade.
- Etapas com ferramentas ou raciocínio muito diferentes entre si são o sinal mais confiável para considerar um subagente.

## Custos e limpeza

- Este lab é um exercício de raciocínio em papel; não exige chamadas de API nem ambiente de execução.
- Se decidir implementar o agente desenhado, monitore o número de iterações reais do loop e o custo por execução completa.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
