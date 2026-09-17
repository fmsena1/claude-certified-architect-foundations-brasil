# Revisão Guiada - Gerenciamento de Contexto e Prompt Caching

## Quick Review (Q&A)

- **Pergunta rápida:** Contexto longo é grátis se couber na janela do modelo?
  **Resposta curta:** Não. Ainda tem custo, latência e pode ter efeito de qualidade.
- **Pergunta rápida:** O que faz um bloco de prompt ser bom candidato a caching?
  **Resposta curta:** Ser grande, estável e reutilizado em muitas chamadas.
- **Pergunta rápida:** Sumarização progressiva é o mesmo que truncar histórico antigo?
  **Resposta curta:** Não. Sumarização preserva o que ainda é relevante; truncamento apenas descarta.
- **Pergunta rápida:** Quando RAG é preferível a comprimir o contexto existente?
  **Resposta curta:** Quando não dá para saber de antemão o que será relevante, ou o volume muda muito.
- **Pergunta rápida:** Onde informação importante tende a ser subutilizada em um prompt muito longo?
  **Resposta curta:** No meio do bloco de contexto.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
