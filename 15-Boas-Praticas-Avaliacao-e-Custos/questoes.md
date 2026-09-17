# Revisão Guiada - Boas Práticas, Avaliação e Custos

## Quick Review (Q&A)

- **Pergunta rápida:** O que compõe um eval de prompt?
  **Resposta curta:** Um conjunto de casos representativos mais um critério de julgamento da saída.
- **Pergunta rápida:** O que um eval de agente precisa avaliar além da resposta final?
  **Resposta curta:** A trajetória de decisões e chamadas de ferramenta ao longo da execução.
- **Pergunta rápida:** Quais sinais mínimos de observabilidade uma aplicação deveria registrar?
  **Resposta curta:** Tokens consumidos, acerto de cache, motivo de parada e erros por chamada.
- **Pergunta rápida:** Qual é a ordem recomendada das alavancas de redução de custo?
  **Resposta curta:** Cache e higiene de tokens primeiro, depois modelo/esforço, depois processamento em lote.
- **Pergunta rápida:** Como um prompt de produção deveria ser tratado?
  **Resposta curta:** Como artefato versionado, revisado e testado antes de qualquer promoção.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
