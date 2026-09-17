# Cheatsheet — Módulo 07: Tool Use, Function Calling e MCP

> Revisão rápida do ciclo de chamada de ferramenta e do papel do MCP. Detalhes de formato de requisição mudam com a versão da API — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Definição de ferramenta | Nome + descrição + esquema de entrada | Descrição vaga é o erro mais comum, não o esquema |
| Ciclo de chamada | Pedido do modelo -> execução pela aplicação -> resultado devolvido -> resposta final | O modelo nunca executa a ferramenta sozinho |
| Tool use simples | Uma ferramenta, uma decisão, um resultado | Não transformar um lookup simples em orquestração desnecessária |
| Orquestração de múltiplas ferramentas | Várias ferramentas no mesmo turno ou em turnos sucessivos e dependentes | Cada round-trip extra tem custo de latência e tokens |
| MCP | Padrão aberto que separa quem expõe a ferramenta de quem a consome | MCP não é um agente nem substitui o raciocínio do modelo |

## Regras práticas

- Escreva a descrição da ferramenta pensando em quando o modelo deve chamá-la, não só no que ela tecnicamente faz.
- Sempre valide o resultado de uma ferramenta antes de repassá-lo adiante na aplicação.
- Comece com tool use simples; só escale para orquestração quando a tarefa realmente depender de múltiplas fontes.
- Considere MCP quando a mesma ferramenta precisa ser reaproveitada por mais de uma aplicação ou time.

## Gatilhos de memorização

- Modelo pede, aplicação executa, resultado volta — o modelo nunca age direto no mundo.
- Descrição ruim = ferramenta chamada na hora errada (ou nunca chamada).
- MCP = protocolo de integração, não framework de agente.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
