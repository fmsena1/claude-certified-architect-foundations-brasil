# Casos de Uso — Módulo 15: Boas Práticas, Avaliação e Custos

## Caso 1 — Promoção segura de mudança de prompt em produção

**Cenário:** Um time mantém um prompt de extração de dados de notas fiscais em produção e quer testar uma nova versão que promete reduzir erros de campo, mas não quer arriscar uma regressão silenciosa.

**Arquitetura sugerida:** Conjunto de avaliação com casos reais (anonimizados) e rótulos esperados, rodado tanto contra o prompt atual (baseline) quanto contra o candidato; comparação automática de taxa de acerto por campo, com amostra de revisão humana nos casos em que os dois prompts divergem; promoção do candidato só se a taxa de acerto não piorar em nenhum campo crítico.

**Por que essa escolha faz sentido:** Comparar contra um baseline explícito, campo a campo, evita a armadilha de "parece melhor no geral" esconder uma regressão pontual em um campo importante; a revisão humana nos casos de divergência cobre exatamente onde o grading automático é mais frágil.

**Risco/erro associado:** Promover o prompt candidato só porque uma amostra pequena e não representativa pareceu melhor, sem comparação sistemática contra o baseline.

## Caso 2 — Redução de custo em pipeline de classificação de alto volume

**Cenário:** Uma aplicação classifica milhares de mensagens por dia usando um modelo de raciocínio mais alto do que a tarefa exige, e o time recebeu a meta de reduzir o custo mensal sem piorar a taxa de acerto.

**Arquitetura sugerida:** Primeiro, confirmar que o prefixo de instrução e exemplos do prompt está estável e sendo aproveitado por cache; depois, medir a taxa de acerto do mesmo conjunto de avaliação em um modelo mais rápido/barato e em um nível de esforço mais baixo; por fim, mover para processamento em lote a parte do volume que não precisa de resposta em tempo real (ex.: reprocessamento noturno de mensagens antigas).

**Por que essa escolha faz sentido:** Seguir a ordem de alavancas — cache, depois modelo/esforço, depois lote — isola o efeito de cada mudança e evita gastar esforço de migração de modelo antes de garantir que o cache já não estava resolvendo boa parte do problema.

**Risco/erro associado:** Trocar direto para o modelo mais barato sem medir a taxa de acerto no eval, descobrindo a perda de qualidade só depois que a mudança já está em produção.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
