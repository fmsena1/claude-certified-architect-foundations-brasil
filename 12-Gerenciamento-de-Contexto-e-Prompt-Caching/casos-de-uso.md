# Casos de Uso — Módulo 12: Gerenciamento de Contexto e Prompt Caching

## Caso 1 — Assistente interno com base de políticas fixa

**Cenário:** Uma empresa mantém um assistente interno que responde dúvidas de funcionários com base em um manual de políticas extenso, que muda raramente, e que é enviado por completo em toda chamada.

**Arquitetura sugerida:** Aplicar prompt caching no bloco do manual de políticas, mantendo apenas a pergunta do funcionário e instruções pontuais como conteúdo variável fora do cache.

**Por que essa escolha faz sentido:** O manual é grande e estável entre chamadas; cachear esse bloco reduz custo e latência em praticamente todas as interações, já que a parte cara do prompt deixa de ser reprocessada do zero a cada pergunta.

**Risco/erro associado:** Atualizar o manual de políticas e esquecer de invalidar ou renovar o cache, fazendo o assistente responder com base em conteúdo desatualizado.

## Caso 2 — Agente de atendimento com conversas longas e base de conhecimento crescente

**Cenário:** Um agente de atendimento mantém conversas que podem durar dezenas de turnos e precisa responder com base em uma base de conhecimento de produto que cresce continuamente e é grande demais para caber inteira no prompt.

**Arquitetura sugerida:** Sumarização progressiva do histórico de conversa a cada N turnos, combinada com busca (RAG) na base de conhecimento para trazer apenas os trechos relevantes à pergunta atual.

**Por que essa escolha faz sentido:** O histórico de conversa é um problema de volume conhecido, que compressão resolve bem; a base de conhecimento é grande, cresce e só uma fração é relevante por pergunta, o que é exatamente o problema que RAG resolve.

**Risco/erro associado:** Tentar resolver a base de conhecimento crescente só com sumarização ou contexto maior, em vez de reconhecer que o problema pede busca sob demanda.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
