# Casos de Uso — Módulo 01: Introdução à Claude e ao Ecossistema Anthropic

## Caso 1 — Time jurídico testando IA generativa pela primeira vez

**Cenário:** Um time jurídico quer entender se Claude ajuda a resumir contratos antes de decidir investir em qualquer integração.

**Arquitetura sugerida:** Uso direto do Claude.ai para colar trechos de contrato e validar a qualidade dos resumos, sem nenhuma integração de sistema.

**Por que essa escolha faz sentido:** O objetivo é validar valor, não construir infraestrutura. Começar pela API antes de confirmar que o caso de uso funciona é esforço desperdiçado se a ideia não vingar.

**Risco/erro associado:** Colar documentos sensíveis num produto de consumo sem antes checar a política de retenção de dados (aprofundado no módulo 13).

## Caso 2 — Startup automatizando triagem de tickets

**Cenário:** Uma startup já validou manualmente que Claude resume bem os tickets de suporte e agora quer que isso aconteça automaticamente sempre que um ticket novo chega.

**Arquitetura sugerida:** Integração via Claude Developer Platform (API), chamada a partir do sistema de tickets já existente.

**Por que essa escolha faz sentido:** O caso de uso já está validado; o que falta é automação dentro de um sistema, que é exatamente o papel da API, não do produto de consumo.

**Risco/erro associado:** Tentar automatizar isso via Claude.ai (que não tem API própria para esse fim) em vez de migrar para a Developer Platform.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
