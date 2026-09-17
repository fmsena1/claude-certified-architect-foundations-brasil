# Casos de Uso — Módulo 04: Modelos Claude e Model Family

## Caso 1 — Triagem de alto volume de tickets

**Cenário:** Uma central de atendimento recebe milhares de mensagens por dia e precisa classificar cada uma por categoria e prioridade.

**Arquitetura sugerida:** Modelo mais rápido e barato da linha, dado o alto volume e a natureza relativamente simples da tarefa de classificação.

**Por que essa escolha faz sentido:** Latência e custo por chamada importam muito quando o volume é alto; a tarefa não exige o raciocínio mais sofisticado disponível.

**Risco/erro associado:** Usar o modelo mais caro da linha para essa tarefa e inflar custo sem ganho perceptível de qualidade.

## Caso 2 — Análise jurídica de contratos complexos

**Cenário:** Um time jurídico precisa de uma análise detalhada de cláusulas ambíguas em contratos longos, com baixo volume mas alta exigência de raciocínio.

**Arquitetura sugerida:** Modelo de maior capacidade da linha, mesmo com custo e latência mais altos por chamada.

**Por que essa escolha faz sentido:** O volume é baixo o suficiente para que o custo total não seja o fator decisivo, e a tarefa exige o nível de raciocínio mais alto disponível.

**Risco/erro associado:** Usar um modelo mais barato para economizar e obter uma análise superficial em uma tarefa de alto risco.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
