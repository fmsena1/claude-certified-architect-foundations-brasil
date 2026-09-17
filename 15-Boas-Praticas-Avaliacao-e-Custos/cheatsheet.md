# Cheatsheet — Módulo 15: Boas Práticas, Avaliação e Custos

> Revisão rápida de avaliação, observabilidade e redução de custo. Detalhes de preço e mecanismos exatos de cache mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Eval de prompt | Conjunto de casos + critério de julgamento para medir qualidade | Mudar prompt em produção sem comparar contra um baseline |
| Eval de agente | Precisa avaliar a trajetória de ferramentas, não só a resposta final | Julgar só o texto final e ignorar chamadas de ferramenta erradas |
| Grading automático | Regra, comparação exata ou outro modelo como juiz; escala bem | Confiar nele sozinho em tarefas com julgamento subjetivo |
| Revisão humana | Necessária para critérios de acerto subjetivos ou de alto risco | Tentar automatizar 100% de tarefas sem critério objetivo |
| Observabilidade | Registrar tokens, acerto de cache, motivo de parada e erro por chamada | Só perceber regressão por reclamação de usuário |
| Prompt caching | Reaproveita prefixo já processado, reduz custo e latência | Mudar qualquer coisa antes do prefixo e invalidar o cache sem perceber |
| Escolha de modelo/esforço | Ajustar modelo e nível de raciocínio à dificuldade real da tarefa | Usar o modelo mais capaz por padrão em toda tarefa |
| Processamento em lote | Bom para carga assíncrona e tolerante a atraso, custo menor por chamada | Usar lote em fluxo que precisa de resposta imediata |
| Versionamento de prompt | Prompt de produção é artefato versionado, promovido após passar no eval | Editar o prompt em produção direto, sem revisão nem histórico |

## Regras práticas

- Nunca promova uma mudança de prompt para produção sem rodar o conjunto de avaliação existente.
- Avalie agentes pela trajetória completa de decisões e chamadas de ferramenta, não só pelo resultado final.
- Combine grading automático com amostragem de revisão humana em tarefas de julgamento subjetivo.
- Registre uso de tokens, acerto de cache e motivo de parada como observabilidade padrão, não como exceção.
- Aplique alavancas de custo na ordem: cache e higiene de tokens primeiro, depois modelo/esforço, depois lote.
- Trate o prompt como código: versionado, revisável e reversível.

## Gatilhos de memorização

- "Sem eval, mudança de prompt é aposta."
- "Agente se avalia pelo caminho, não só pelo destino."
- Cache primeiro, modelo depois, lote por último.
- Custo se mede por tarefa concluída, não por chamada isolada.
- Prompt de produção = artefato versionado, não rascunho editável.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
