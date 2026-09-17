# Cheatsheet — Módulo 02: Fundamentos de IA Generativa e LLMs

> Revisão rápida do vocabulário técnico base de um LLM antes de entrar em modelos, API e prompts.

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Token | Unidade de processamento, custo e limite | Não é o mesmo que palavra ou caractere |
| Next-token prediction | Modelo gera um token de cada vez, por probabilidade | Não é busca em banco de respostas prontas |
| Temperatura | Controla aleatoriedade da escolha do próximo token | Zero reduz mas não elimina toda variação |
| Janela de contexto | Limite de tokens somando entrada e saída | Não é memória persistente entre chamadas |
| Modelo base vs assistente | Assistente passa por alinhamento (ex.: Constitutional AI) | Nem todo LLM se comporta como um assistente alinhado |

## Regras práticas

- Estime custo e limite sempre em tokens, nunca em palavras ou caracteres.
- Escolha a temperatura pelo tipo de tarefa: baixa para consistência, mais alta para variação criativa.
- Trate a janela de contexto como orçamento por chamada, não como armazenamento.
- Lembre que "seguir instruções com segurança" é resultado de um processo de alinhamento, não uma garantia automática de qualquer modelo de linguagem.

## Gatilhos de memorização

- Token = moeda de custo e limite.
- Temperatura baixa = previsível; temperatura alta = variado.
- Contexto = janela por chamada, não memória permanente.
- Modelo base prevê texto; modelo assistente segue instruções com segurança.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
