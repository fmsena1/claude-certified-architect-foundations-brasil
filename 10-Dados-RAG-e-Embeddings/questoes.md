# Revisão Guiada - Dados, RAG e Embeddings

## Quick Review (Q&A)

- **Pergunta rápida:** Quando contexto longo costuma ser suficiente, sem RAG?
  **Resposta curta:** Quando o volume de dados é pequeno, estável e cabe na janela de contexto.
- **Pergunta rápida:** O que um embedding representa?
  **Resposta curta:** O significado de um texto como vetor, aproximando textos semanticamente parecidos.
- **Pergunta rápida:** Por que pedir citação de fonte numa resposta gerada com RAG?
  **Resposta curta:** Para permitir auditar se a resposta realmente se baseia nos documentos recuperados.
- **Pergunta rápida:** O que significa governar dados usados em RAG?
  **Resposta curta:** Controlar o que entra no índice, quem pode recuperar o quê, e como remover ou atualizar conteúdo.
- **Pergunta rápida:** Ao investigar uma resposta ruim de RAG, quais duas etapas devem ser checadas separadamente?
  **Resposta curta:** A qualidade da recuperação e a qualidade da geração.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
