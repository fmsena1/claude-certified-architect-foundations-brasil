# Revisão Guiada - Multimodalidade (Visão e Documentos)

## Quick Review (Q&A)

- **Pergunta rápida:** Como imagem e PDF entram numa mensagem enviada à Claude?
  **Resposta curta:** Como blocos de conteúdo, junto com texto, na mesma mensagem.
- **Pergunta rápida:** O que acontece com o custo em tokens quando a resolução da imagem aumenta?
  **Resposta curta:** Aumenta, porque tokens por imagem são proporcionais à área em pixels enviada.
- **Pergunta rápida:** O que fazer com um PDF cujo número de páginas excede o limite de uma chamada?
  **Resposta curta:** Dividir o processamento em lotes de páginas.
- **Pergunta rápida:** Quando pedir extração estruturada em vez de descrição livre do documento?
  **Resposta curta:** Quando o destino final do dado é outro sistema, não uma leitura humana.
- **Pergunta rápida:** Multimodalidade nativa elimina totalmente a necessidade de OCR tradicional?
  **Resposta curta:** Não. Continua útil em documentos muito ruins ou volumes muito altos com custo por página crítico.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
