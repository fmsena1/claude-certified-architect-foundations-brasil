# Cheatsheet — Módulo 01: Introdução à Claude e ao Ecossistema Anthropic

> Revisão rápida do vocabulário base antes de avançar para os módulos de modelo, API e agentes.

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Claude | Família de modelos de linguagem da Anthropic | Não é o nome de um produto único |
| Claude.ai | Produto de consumo, uso conversacional pronto | Não tem a mesma superfície de controle da API |
| Claude Developer Platform | Console + API para integrar Claude em sistemas próprios | Exige chave de API e gerenciamento de custo |
| Claude Code | Agente de engenharia de software (CLI/IDE) | Não é um chatbot genérico |
| Canal de acesso (Bedrock/Vertex/Foundry/API direta) | Forma de distribuição do mesmo modelo | Não muda a capacidade do modelo, muda infraestrutura |

## Regras práticas

- Separe sempre "modelo" de "produto": Claude é o modelo, tudo o resto é produto construído sobre ele.
- Comece pelo produto pronto para validar a ideia antes de integrar via API.
- Trate a escolha de canal (API direta, Bedrock, Vertex AI, Foundry) como decisão de infraestrutura.
- Reserve agentes autônomos para quando uma chamada simples de API não for suficiente.

## Gatilhos de memorização

- "Usar" = produto pronto; "construir" = API/SDK.
- Canal de acesso muda billing e compliance, não a inteligência do modelo.
- Claude Code = engenharia de software; Claude.ai = conversa geral.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
