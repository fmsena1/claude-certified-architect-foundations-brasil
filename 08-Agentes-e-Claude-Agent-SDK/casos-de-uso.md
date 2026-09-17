# Casos de Uso — Módulo 08: Agentes e Claude Agent SDK

## Caso 1 — Assistente de suporte que consulta um sistema de pedidos

**Cenário:** Um time de atendimento quer que uma ferramenta responda perguntas sobre o status de um pedido específico, consultando um sistema interno e formatando a resposta para o cliente.

**Arquitetura sugerida:** Assistente com ferramentas: uma única chamada de ferramenta para buscar o status do pedido, seguida da resposta formatada. Sem loop autônomo.

**Por que essa escolha faz sentido:** A tarefa tem escopo fixo e previsível — uma consulta, uma resposta. Introduzir um loop de agente autônomo não traria benefício e adicionaria complexidade e latência desnecessárias.

**Risco/erro associado:** Transformar essa tarefa simples num agente autônomo "para o caso de precisar de mais passos no futuro", complicando o sistema sem necessidade presente.

## Caso 2 — Agente de manutenção de pipeline de dados com etapas heterogêneas

**Cenário:** Um pipeline de dados falha esporadicamente por motivos variados (schema mudou, credencial expirou, volume anômalo). É preciso investigar a causa, aplicar uma correção quando possível e documentar o incidente.

**Arquitetura sugerida:** Um agente orquestrador com objetivo geral ("resolver o incidente"), delegando a um subagente de investigação (ler logs, isolar a causa) e a um subagente de correção (aplicar o ajuste e validar), mantendo a documentação do incidente como responsabilidade do orquestrador.

**Por que essa escolha faz sentido:** Investigar e corrigir exigem contextos e ferramentas diferentes; isolar cada etapa em um subagente evita que o histórico de uma etapa polua a outra, e o orquestrador mantém a visão do objetivo completo até a parada (incidente documentado e resolvido, ou escalado para humano).

**Risco/erro associado:** Colocar investigação e correção no mesmo contexto de um único agente sem separação, misturando hipóteses descartadas com a decisão final e dificultando a auditoria do que foi feito.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
