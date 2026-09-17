# Cheatsheet — Módulo 03: Fundamentos de ML para LLMs

> Revisão rápida de treinamento, inferência e formas de customizar comportamento de um LLM já pronto.

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Treinamento | Já foi feito pela Anthropic antes do modelo existir | Não confundir com o uso da API |
| Inferência | O que acontece a cada chamada de API | Não altera os pesos do modelo |
| Prompting | Customização mais rápida e barata | Não escala para conhecimento externo volumoso |
| RAG | Injeta conhecimento externo atualizado no contexto | Não substitui um prompt bem escrito |
| Fine-tuning | Ajuste de pesos para domínio/estilo muito específico | Última opção, não a primeira |
| Overfitting de prompt | Funciona só nos exemplos usados para criá-lo | Testar só o caso feliz esconde esse problema |

## Regras práticas

- Trate cada chamada como inferência; o modelo não "aprende" nada permanente durante o uso normal da API.
- Siga a ordem: prompting, depois RAG, fine-tuning só se as duas anteriores não bastarem.
- Valide prompts com variações do input, não apenas com o exemplo que motivou a escrita.

## Gatilhos de memorização

- Treinar = Anthropic; usar a API = inferência.
- Prompting resolve estilo; RAG resolve conhecimento externo atualizado; fine-tuning resolve domínio muito específico.
- Prompt bom generaliza; prompt overfitted só acerta o exemplo de origem.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
