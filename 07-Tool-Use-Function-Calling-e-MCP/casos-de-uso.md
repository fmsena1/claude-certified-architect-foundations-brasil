# Casos de Uso — Módulo 07: Tool Use, Function Calling e MCP

## Caso 1 — Consulta de status de pedido em um chat de suporte

**Cenário:** Um chat de suporte ao cliente precisa responder "onde está meu pedido?" com o status real, vindo do sistema de logística da empresa.

**Arquitetura sugerida:** Tool use simples: uma única ferramenta `consultar_status_pedido`, que recebe um número de pedido e devolve o status atual. O modelo chama essa ferramenta quando identifica a intenção do usuário, recebe o resultado e formata a resposta.

**Por que essa escolha faz sentido:** A tarefa tem uma decisão clara (buscar ou não o status) e uma única fonte de dado. Adicionar mais ferramentas ou um loop de orquestração não traria benefício, só custo e complexidade extra.

**Risco/erro associado:** Devolver o resultado bruto do sistema de logística sem validação, expondo um erro interno ou um formato inesperado diretamente na resposta ao cliente.

## Caso 2 — Assistente interno que cruza dados de múltiplos sistemas

**Cenário:** Um assistente interno precisa responder perguntas que exigem cruzar dados de RH, financeiro e chamados de suporte — por exemplo, "quanto essa reclamação de cliente custou até agora, considerando o tempo de atendimento e o reembolso emitido?".

**Arquitetura sugerida:** Orquestração de múltiplas ferramentas, com uma ferramenta por sistema de origem (chamados, financeiro, tempo de atendimento), expostas via servidores MCP em vez de integrações proprietárias isoladas, já que outras equipes também precisam consumir os mesmos dados.

**Por que essa escolha faz sentido:** A pergunta não tem resposta em uma única fonte; o modelo precisa decidir quais ferramentas chamar e em que ordem, combinando os resultados. Expor essas fontes via MCP evita reconstruir a mesma integração para cada novo assistente que precisar dos mesmos dados.

**Risco/erro associado:** Deixar a orquestração completamente aberta, sem limites claros de quantas chamadas o modelo pode encadear, gerando loops caros ou lentos para perguntas que não precisavam de tantos cruzamentos.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
