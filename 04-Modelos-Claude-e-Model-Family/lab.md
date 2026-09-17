# Lab — Módulo 04: Modelos Claude e Model Family

## Mapa de decisão: qual modelo para qual tarefa

Este micro-lab treina o raciocínio de escolha de modelo, sem depender de números de preço ou benchmark que mudam com o tempo.

## Pré-requisitos

- Ter lido o README do módulo.
- Consultar a linha de modelos atual em [links.md](./links.md).
- 20 a 30 minutos.

## Passo a passo

1. Liste três a cinco tarefas reais do seu contexto que hoje usam (ou poderiam usar) um LLM.
2. Para cada tarefa, estime o volume esperado (baixo, médio, alto) e a complexidade de raciocínio exigida (baixa, média, alta).
3. Com base na tabela do README, associe cada tarefa a um perfil de modelo (mais rápido/barato, equilíbrio, mais capaz).
4. Identifique se alguma aplicação da sua lista poderia se beneficiar de rotear tarefas diferentes para modelos diferentes, em vez de usar um único modelo para tudo.
5. Anote qual seria seu critério para revisar essa escolha no futuro (ex.: taxa de erro observada, custo mensal, reclamação de latência).

## O que observar

- Volume alto e complexidade baixa quase sempre apontam para o modelo mais rápido/barato.
- Volume baixo e complexidade alta toleram bem o modelo mais capaz, mesmo sendo mais caro por chamada.
- Poucas aplicações reais usam um único modelo para todas as suas tarefas depois de analisadas com esse critério.

## Custos e limpeza

- Este lab é um exercício de raciocínio; não exige chamadas de API.
- Se decidir testar na prática, monitore custo por chamada de cada modelo testado.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
