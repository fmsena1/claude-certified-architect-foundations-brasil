# Cheatsheet — Módulo 08: Agentes e Claude Agent SDK

> Revisão rápida da diferença entre chatbot, assistente com ferramentas e agente autônomo, e de quando dividir o trabalho em subagentes ou multiagente.

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Chatbot | Responde a uma mensagem por vez, sem agir sobre o mundo | Confundir com agente só porque usa um LLM |
| Assistente com ferramentas | Chama ferramentas pontualmente dentro de uma resposta | Não decide sozinho quando a tarefa termina |
| Agente autônomo | Roda em loop até atingir objetivo ou critério de parada | Loop sem limite de iterações vira risco |
| Loop perceber-decidir-agir | Percepção do estado, decisão da próxima ação, execução, repetição | Pular a etapa de "decidir" e agir de forma fixa não é loop de agente |
| Subagente | Agente especializado invocado por um orquestrador para uma subtarefa | Usar subagente só para "dividir texto", sem isolar contexto real |
| Multiagente | Vários agentes coordenados, possivelmente em paralelo | Adicionar agentes por padrão, sem necessidade concreta de paralelismo |

## Regras práticas

- Suba na escada de complexidade só quando o nível anterior não resolve: chatbot -> assistente com ferramentas -> agente -> subagentes -> multiagente.
- Todo agente autônomo precisa de um critério de parada explícito, incluindo limite de iterações.
- Use subagente quando o contexto de uma etapa atrapalharia outra etapa, ou quando etapas podem rodar em paralelo.
- Orquestração multiagente é decisão de custo e complexidade — justifique antes de adotar.

## Gatilhos de memorização

- Chatbot fala, assistente age uma vez, agente decide sozinho quando parar de agir.
- Sem critério de parada, não é loop de agente — é loop infinito disfarçado.
- Subagente isola contexto; multiagente coordena paralelismo.
- Comece simples, complique só com necessidade comprovada.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
