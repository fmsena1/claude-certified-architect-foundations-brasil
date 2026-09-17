# Cheatsheet — Módulo 10: Dados, RAG e Embeddings

> Revisão rápida do raciocínio de decisão entre contexto longo e RAG. Detalhes de implementação de banco vetorial mudam por fornecedor — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Contexto longo | Bom para dados pequenos, estáveis, que cabem na janela do modelo | Forçar contexto longo em dados grandes e voláteis é caro e frágil |
| RAG | Necessário quando o volume é grande, muda com frequência, ou só uma fração é relevante por pergunta | Montar RAG para um caso simples adiciona complexidade sem ganho |
| Embeddings | Representação vetorial que aproxima textos de significado semelhante | Não confundir similaridade semântica com correspondência exata de palavras |
| Busca semântica | Recupera por significado, não por palavra-chave literal | Recuperação ruim gera resposta ruim, mesmo com um modelo forte |
| Grounding | Resposta apoiada explicitamente nos trechos recuperados | Sem grounding, a resposta pode soar correta sem ser sustentada pelos dados |
| Citação de fonte | Permite auditar de onde veio cada afirmação | Não pedir citação explícita no prompt costuma resultar em resposta sem ela |
| Governança de dados em RAG | O índice precisa do mesmo controle de acesso da fonte original | Indexar dado sensível sem replicar permissões da fonte |

## Regras práticas

- Comece perguntando se o volume de dados cabe em contexto longo antes de montar um pipeline de RAG.
- Peça citação de fonte explicitamente no prompt quando a resposta precisar ser auditável.
- Trate o índice de RAG como um ativo de dados, com dono, controle de acesso e processo de atualização/remoção.
- Separe o diagnóstico de qualidade em duas etapas: a recuperação trouxe os trechos certos? A geração usou bem esses trechos?

## Gatilhos de memorização

- Dado pequeno e estável = contexto longo; dado grande e volátil = RAG.
- Embedding aproxima significado, não palavra.
- Sem citação de fonte, não dá para auditar a resposta.
- Índice de RAG = dado vivo, precisa de governança, não é só um cache.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
