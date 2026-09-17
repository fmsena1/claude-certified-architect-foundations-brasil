# Casos de Uso — Módulo 10: Dados, RAG e Embeddings

## Caso 1 — Manual de produto pequeno e estável em contexto longo

**Cenário:** Uma equipe de suporte interno tem um único manual de produto, com cerca de 40 páginas, atualizado poucas vezes por ano. O assistente precisa responder perguntas dos atendentes com base nesse manual.

**Arquitetura sugerida:** Colocar o manual inteiro no contexto a cada chamada (ou usar prompt caching sobre esse conteúdo fixo), sem montar um pipeline de recuperação.

**Por que essa escolha faz sentido:** O volume é pequeno, cabe folgadamente na janela de contexto, e o conteúdo muda raramente — a complexidade extra de embeddings e busca semântica não traria benefício proporcional.

**Risco/erro associado:** Montar um pipeline de RAG completo para esse caso, adicionando latência, custo de manutenção e uma nova superfície de falha (a etapa de recuperação) sem necessidade real.

## Caso 2 — Base de conhecimento jurídica volumosa com RAG

**Cenário:** Um time jurídico mantém milhares de pareceres e contratos anteriores, atualizados continuamente por vários advogados, e precisa que o assistente responda com base apenas nos documentos relevantes para cada consulta, citando a fonte.

**Arquitetura sugerida:** Pipeline de RAG com embeddings para indexação e busca semântica, prompt final montado com os trechos recuperados mais relevantes e instrução explícita de citar o documento de origem.

**Por que essa escolha faz sentido:** O volume total inviabiliza contexto longo, o conteúdo muda com frequência, e apenas uma fração pequena dos documentos é relevante para cada pergunta — exatamente o perfil que justifica RAG.

**Risco/erro associado:** Indexar pareceres com informação sensível de clientes sem replicar o controle de acesso da fonte original, permitindo que uma consulta recupere conteúdo que o usuário não deveria ver.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
