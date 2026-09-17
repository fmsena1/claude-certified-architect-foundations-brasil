# Lab — Módulo 10: Dados, RAG e Embeddings

## Mapa de decisão: contexto longo vs. RAG, e checklist de governança

Este micro-lab treina o raciocínio de decisão entre contexto longo e RAG, e a checagem de governança de dados, sem exigir a montagem real de um banco vetorial.

## Pré-requisitos

- Ter lido o README do módulo.
- Ter em mente dois ou três casos reais do seu contexto que envolvam dar dados externos a um assistente baseado em LLM.
- 20 a 30 minutos.

## Passo a passo

1. Para cada caso real escolhido, estime o volume total de dados envolvido e a frequência com que esse conteúdo muda.
2. Classifique cada caso como "contexto longo provavelmente basta" ou "RAG provavelmente é necessário", justificando com base no volume, na volatilidade dos dados e na fração de conteúdo relevante por pergunta.
3. Para os casos classificados como RAG, escreva uma frase descrevendo o que seria buscado por similaridade semântica (o embedding da pergunta comparado a quê).
4. Para os mesmos casos, defina que instrução de citação de fonte apareceria no prompt, e como a resposta deveria indicar de onde veio cada afirmação.
5. Monte um checklist de governança para o índice hipotético: quem pode inserir conteúdo, quem pode recuperar o quê, e qual seria o gatilho para remover um documento do índice.
6. Revise se algum dos casos escolhidos envolve dado sensível (pessoal, confidencial, regulado) e, se sim, anote qual tratamento adicional seria necessário antes da indexação.

## O que observar

- Casos com dados pequenos e estáveis raramente justificam a complexidade extra de RAG.
- Casos com dados volumosos e voláteis tendem a exigir RAG, mas o ganho só aparece se a etapa de recuperação for de qualidade.
- Um checklist de governança bem definido antes da indexação evita retrabalho e risco de exposição de dado sensível depois que o índice já está em produção.

## Custos e limpeza

- Este lab é um exercício de raciocínio e não exige chamadas de API nem criação de índice real.
- Se decidir prototipar um pipeline de RAG de verdade, monitore o custo de geração de embeddings (cobrado por token processado) separadamente do custo das chamadas de geração de resposta.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
