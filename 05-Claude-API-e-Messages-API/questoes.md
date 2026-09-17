# Revisão Guiada - Claude API e Messages API

## Quick Review (Q&A)

- **Pergunta rápida:** Qual endpoint concentra as chamadas de geração de texto na Claude API?
  **Resposta curta:** `POST /v1/messages`, a Messages API.
- **Pergunta rápida:** Onde vai a instrução de comportamento persistente do modelo?
  **Resposta curta:** No campo `system`, fora da lista `messages`.
- **Pergunta rápida:** A API mantém o histórico da conversa entre chamadas?
  **Resposta curta:** Não; o cliente reenvia o histórico completo a cada requisição.
- **Pergunta rápida:** O que `max_tokens` controla exatamente?
  **Resposta curta:** O teto máximo de tokens que a resposta pode ter, não um tamanho garantido.
- **Pergunta rápida:** O que muda entre usar um SDK oficial e chamar a API via HTTP direto?
  **Resposta curta:** A forma de construir e enviar a chamada; o contrato de request/response é o mesmo.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
