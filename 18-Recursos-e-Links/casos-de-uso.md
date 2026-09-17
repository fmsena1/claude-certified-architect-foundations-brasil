# Casos de Uso — Módulo 18: Recursos e Links

## Caso 1 — Confirmar limite de contexto antes de decidir arquitetura

**Cenário:** Uma equipe está decidindo entre usar contexto longo ou construir um pipeline de RAG para um caso de uso específico, e precisa saber o limite de contexto atual de um modelo antes de fechar a decisão.

**Arquitetura sugerida:** Consultar a documentação técnica oficial (Claude Docs) para o valor atual, em vez de reutilizar um número visto em um material de estudo ou em uma conversa antiga.

**Por que essa escolha faz sentido:** Limite de contexto é um dado técnico que muda por modelo e por versão; a documentação técnica é a fonte mais específica e atualizada para esse tipo de pergunta.

**Risco/erro associado:** Basear uma decisão de arquitetura em um número desatualizado, vindo de um artigo antigo ou de memória, e descobrir depois que o limite real é diferente.

## Caso 2 — Verificar se uma mudança recente de política afeta um projeto em produção

**Cenário:** Um time de compliance quer saber se uma mudança recente na política de uso ou retenção de dados da Anthropic afeta um sistema já em produção.

**Arquitetura sugerida:** Consultar a central de confiança (Trust) da Anthropic e os anúncios oficiais recentes, em vez de assumir que a política é a mesma descrita em um documento interno antigo.

**Por que essa escolha faz sentido:** Política de segurança, privacidade e conformidade é justamente o tipo de informação que precisa vir de uma fonte primária e atual, não de um resumo de terceiros.

**Risco/erro associado:** Tratar uma suposição interna ou um resumo desatualizado como se fosse a política vigente, gerando um risco de conformidade não identificado a tempo.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
