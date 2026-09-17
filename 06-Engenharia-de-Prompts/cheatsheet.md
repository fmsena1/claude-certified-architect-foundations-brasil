# Cheatsheet — Módulo 06: Engenharia de Prompts

> Revisão rápida dos elementos de um prompt bem estruturado. Detalhes de sintaxe específicos de cada modelo mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Clareza e estrutura | Separar instrução, contexto e formato de saída reduz ambiguidade | Prompt implícito gera resposta inconsistente entre execuções |
| XML tags | Delimitam dado de entrada dinâmico e evitam confusão com instrução | Misturar texto de entrada solto com o comando no mesmo bloco |
| Few-shot | Exemplos mostram o padrão esperado de forma mais eficaz que descrição em prosa | Adicionar exemplos sem necessidade só aumenta custo de tokens |
| Chain-of-thought | Pedir raciocínio explícito ajuda em tarefas de múltiplos passos | Usar em toda tarefa por padrão, mesmo em casos simples |
| Prompt como contrato | Define o comportamento também para exceções, não só o caminho feliz | Deixar comportamento indefinido para entrada fora do esperado |
| Iteração e teste | Mudança de prompt em produção deve ser comparada com a versão anterior | Trocar prompt "no olho", sem registrar o resultado antes e depois |

## Regras práticas

- Estruture todo prompt com instrução, contexto e formato de saída claramente separados.
- Use XML tags sempre que houver conteúdo dinâmico misturado com instrução fixa.
- Adicione few-shot quando o formato de saída for específico ou houver casos de borda recorrentes.
- Reserve chain-of-thought para tarefas que exigem raciocínio em múltiplos passos.
- Escreva também a regra de exceção: o que fazer quando a entrada não se encaixa no esperado.
- Versione o prompt e compare resultado antes e depois de qualquer mudança em produção.

## Gatilhos de memorização

- Ambíguo = inconsistente; estruturado = repetível.
- Tag separa o que é instrução do que é dado.
- Exemplo vale mais que descrição; raciocínio explícito custa mais tokens.
- Prompt sem regra de exceção não é um contrato completo.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
