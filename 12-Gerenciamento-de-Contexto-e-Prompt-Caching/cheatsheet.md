# Cheatsheet — Módulo 12: Gerenciamento de Contexto e Prompt Caching

> Revisão rápida das estratégias de contexto longo. Limites de janela, condições de cache e preços mudam com o tempo — confirme sempre em [links.md](./links.md).

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Janela de contexto | Grande não é o mesmo que grátis ou sem efeito de qualidade | Assumir que "cabe na janela" resolve custo e qualidade sozinho |
| Prompt caching | Reaproveita blocos estáveis do prompt entre chamadas | Cachear conteúdo que muda a cada chamada, perdendo o ganho |
| Sumarização progressiva | Comprime histórico antigo mantendo decisões e fatos relevantes | Confundir com truncamento simples, que descarta sem preservar sentido |
| Posição da informação | Conteúdo no meio de um bloco longo tende a ser subutilizado | Enterrar a instrução mais importante no meio do prompt |
| RAG vs compressão | RAG busca sob demanda; compressão reduz o que já está no contexto | Tratar os dois como intercambiáveis |

## Regras práticas

- Separe estável de variável no prompt antes de pensar em cache.
- Defina um gatilho objetivo para sumarizar histórico (turnos ou tokens acumulados), não "quando parecer grande".
- Use RAG quando não dá para saber de antemão o que será relevante; use compressão quando a informação já está toda disponível.
- Meça custo e latência antes/depois de qualquer mudança de estratégia de contexto.

## Gatilhos de memorização

- Cache = o que não muda entre chamadas.
- Resumo = o que já aconteceu e ainda importa.
- RAG = o que ainda não sei se vou precisar.
- Meio do prompt é o lugar onde informação importante se perde.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
