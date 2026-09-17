# Casos de Uso — Módulo 03: Fundamentos de ML para LLMs

## Caso 1 — Assistente de atendimento com tom de marca

**Cenário:** Uma empresa quer que o assistente sempre responda no tom de voz da marca, algo estável e que não muda com frequência.

**Arquitetura sugerida:** Prompting: instruções de estilo e exemplos de tom no system prompt.

**Por que essa escolha faz sentido:** O requisito é comportamental e estável; não exige conhecimento externo nem ajuste de pesos do modelo.

**Risco/erro associado:** Tentar resolver isso com fine-tuning antes de testar se um bom system prompt já resolveria o problema.

## Caso 2 — Assistente que responde sobre o catálogo de produtos

**Cenário:** O mesmo assistente agora precisa responder com base no catálogo de produtos da empresa, que muda toda semana.

**Arquitetura sugerida:** RAG: o catálogo fica numa base externa, recuperado e injetado no contexto a cada pergunta relevante.

**Por que essa escolha faz sentido:** O catálogo é grande demais para caber permanentemente no prompt e muda com frequência suficiente para não valer a pena fixá-lo ali.

**Risco/erro associado:** Colar o catálogo inteiro no prompt e reescrevê-lo manualmente toda semana, em vez de automatizar a recuperação.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
