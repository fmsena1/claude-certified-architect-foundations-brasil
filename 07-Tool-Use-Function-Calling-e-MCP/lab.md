# Lab — Módulo 07: Tool Use, Function Calling e MCP

## Desenhando uma ferramenta e seu ciclo de chamada

Este micro-lab treina o raciocínio de definição de ferramenta e o ciclo de chamada, no papel, sem exigir chamadas reais de API.

## Pré-requisitos

- Ter lido o README do módulo.
- Papel, editor de texto simples ou um arquivo Markdown para anotar.
- 20 a 30 minutos.

## Passo a passo

1. Escolha uma tarefa real do seu contexto que hoje depende de consultar um sistema externo (um banco de dados, uma API interna, uma planilha).
2. Defina a ferramenta: dê um nome específico, escreva uma descrição de uma frase dizendo quando ela deve ser chamada, e liste os parâmetros de entrada necessários.
3. Escreva, em texto corrido, o ciclo completo de uma chamada: a pergunta do usuário, o pedido de chamada que o modelo faria (nome + argumentos), o resultado que a aplicação devolveria, e a resposta final do modelo.
4. Identifique se essa tarefa é tool use simples (uma ferramenta, uma decisão) ou se naturalmente puxa uma segunda ferramenta — e, se puxar, desenhe também essa segunda chamada e a ordem entre elas.
5. Se a ferramenta que você desenhou seria útil para mais de uma aplicação ou time, anote isso como candidata a virar um servidor MCP em vez de uma integração isolada.

## O que observar

- A parte mais difícil costuma ser escrever a descrição da ferramenta de forma específica o suficiente para que o modelo saiba exatamente quando chamá-la.
- Tarefas que parecem simples às vezes escondem uma segunda ferramenta necessária — por exemplo, primeiro identificar um cliente, depois consultar seu histórico.
- Ferramentas reaproveitáveis por múltiplos times são bons candidatos a MCP; ferramentas de uso único, não necessariamente.

## Custos e limpeza

- Este lab é um exercício de design, sem chamadas de API — não há custo de tokens envolvido.
- Se decidir implementar a ferramenta de verdade depois, monitore o número de chamadas por conversa antes de expor isso a usuários reais, especialmente em cenários de orquestração de múltiplas ferramentas.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
