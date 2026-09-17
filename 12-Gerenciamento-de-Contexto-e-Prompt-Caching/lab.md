# Lab — Módulo 12: Gerenciamento de Contexto e Prompt Caching

## Mapa de oportunidades de contexto e caching num fluxo real

Este micro-lab treina a identificação de oportunidades de prompt caching e compressão de contexto em um fluxo de aplicação real, sem depender de números de preço que mudam com o tempo.

## Pré-requisitos

- Ter lido o README do módulo.
- Ter em mente (ou anotado) um fluxo real de aplicação que usa (ou poderia usar) um LLM com prompt longo ou histórico de conversa.
- 20 a 30 minutos.

## Passo a passo

1. Escreva, em blocos, o que compõe o prompt enviado em cada chamada desse fluxo (instruções de sistema, documentos anexados, histórico de conversa, pergunta atual).
2. Marque quais desses blocos são estáveis entre chamadas e quais mudam a cada chamada.
3. Para os blocos estáveis e grandes, identifique se hoje eles são reenviados por completo em toda chamada — esse é o principal candidato a prompt caching.
4. Para o histórico de conversa, defina um critério objetivo de quando ele deveria ser sumarizado (ex.: a cada 10 turnos, ou acima de um número de tokens estimado).
5. Verifique se existe, no fluxo, algum bloco de conteúdo que só é parcialmente relevante por pergunta — esse é um sinal de que RAG, e não compressão, seria a resposta mais adequada.
6. Liste, em ordem de prioridade, as mudanças que trariam mais ganho de custo/latência com menos esforço de implementação.

## O que observar

- Fluxos com instruções de sistema longas e repetidas quase sempre têm um candidato óbvio a prompt caching.
- Histórico de conversa sem gatilho definido de sumarização tende a crescer sem controle até virar problema.
- Nem todo problema de "muito conteúdo" é resolvido comprimindo — alguns são, na verdade, problema de busca (RAG).

## Custos e limpeza

- Este lab é um exercício de mapeamento; não exige chamadas de API.
- Se decidir testar prompt caching na prática, monitore o custo e a taxa de acerto do cache antes de considerar a mudança validada.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
