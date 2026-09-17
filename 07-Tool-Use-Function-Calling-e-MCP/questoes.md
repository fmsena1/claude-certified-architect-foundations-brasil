# Revisão Guiada - Tool Use, Function Calling e MCP

## Quick Review (Q&A)

- **Pergunta rápida:** Quem executa a chamada real de uma ferramenta, o modelo ou a aplicação?
  **Resposta curta:** A aplicação. O modelo só decide e pede a chamada.
- **Pergunta rápida:** O que acontece depois que a aplicação devolve o resultado da ferramenta ao modelo?
  **Resposta curta:** O modelo usa esse resultado para produzir a resposta final ao usuário.
- **Pergunta rápida:** Quando tool use simples já é suficiente, sem precisar de orquestração?
  **Resposta curta:** Quando a tarefa envolve uma única decisão e uma única fonte de dado externo.
- **Pergunta rápida:** O que o MCP separa, como padrão de integração?
  **Resposta curta:** Quem expõe a ferramenta (servidor) de quem a consome (aplicação com o modelo).
- **Pergunta rápida:** Por que uma descrição vaga de ferramenta é um problema mesmo com esquema correto?
  **Resposta curta:** Porque o modelo decide quando chamar com base na descrição, não só no esquema.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
