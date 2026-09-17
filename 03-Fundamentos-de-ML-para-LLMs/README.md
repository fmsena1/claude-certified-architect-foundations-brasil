# Módulo 03 — Fundamentos de ML para LLMs

Este módulo traduz conceitos clássicos de machine learning — treinamento, inferência, overfitting, generalização — para o contexto de uso de um LLM já pronto como Claude. A pergunta central não é "como treinar um modelo do zero", mas "como decidir entre prompting, RAG e fine-tuning para customizar o comportamento de um modelo que a Anthropic já treinou".

## Objetivo

Ao final deste módulo, você deve conseguir diferenciar treinamento de inferência no contexto de uso de API, comparar prompting, RAG e fine-tuning como formas de customização, e aplicar a lógica de overfitting/generalização à avaliação de prompts.

## Onde este tema apareceria numa avaliação

- Diferenciar o que acontece em treinamento do que acontece em inferência ao usar a API da Claude.
- Escolher entre prompting, RAG e fine-tuning para um requisito de customização específico.
- Reconhecer overfitting de prompt: um prompt que funciona bem só nos exemplos testados.
- Explicar por que a maioria dos casos de uso com LLM não exige treinar nada do zero.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Formas de customizar comportamento

| Abordagem | Papel no módulo | Onde reaparece no repositório |
| --- | --- | --- |
| Prompting (system prompt, exemplos, instruções) | Forma mais rápida e barata de ajustar comportamento sem retreinar nada | Aprofundado no módulo 06 |
| RAG (Retrieval-Augmented Generation) | Injeta conhecimento externo atualizado no contexto da chamada | Aprofundado no módulo 10 |
| Fine-tuning / customização de modelo | Ajusta pesos do modelo para um domínio ou estilo específico | Citado como opção avançada, fora do escopo operacional deste repositório |
| Avaliação de prompt (evals) | Mede se um prompt generaliza além dos exemplos usados para criá-lo | Aprofundado no módulo 15 |

## Conceitos essenciais

### Treinamento vs inferência, no contexto de uma API

Quando você usa a API da Claude, o treinamento do modelo já aconteceu — foi feito pela Anthropic, antes do modelo ser disponibilizado. O que você faz a cada chamada é inferência: enviar um input e receber um output, sem alterar os pesos do modelo. Isso muda a forma de pensar em relação a ML tradicional: você raramente vai "treinar" algo; você vai escolher a melhor forma de guiar um modelo já treinado.

### Prompting, RAG e fine-tuning como o mesmo problema visto de ângulos diferentes

As três abordagens resolvem a mesma pergunta — "como faço o modelo se comportar do jeito que eu preciso" — com custos e complexidades diferentes. Prompting é a opção mais rápida e barata: funciona bem quando a instrução cabe no contexto e não muda a cada chamada. RAG entra quando o modelo precisa de informação externa e atualizada que não cabe (ou não deveria estar) fixa no prompt. Fine-tuning é a opção mais cara e menos flexível: ajusta o próprio modelo para um domínio ou estilo muito específico, e normalmente só compensa quando prompting e RAG já não resolvem.

### Overfitting e generalização aplicados a prompts

Um prompt "overfitted" é aquele ajustado repetidamente até funcionar perfeitamente nos poucos exemplos testados, mas que falha em variações ligeiramente diferentes do mesmo problema. Assim como em ML clássico, a métrica que importa é o desempenho em casos que o prompt não viu durante o ajuste, não a taxa de acerto nos exemplos usados para escrevê-lo.

## Exemplo prático

### Escolhendo entre prompting, RAG e fine-tuning

Uma empresa quer que o assistente sempre responda no tom da marca: resolve com prompting (instrução de estilo no system prompt). A mesma empresa quer que o assistente responda com base no catálogo de produtos, que muda toda semana: prompting sozinho não escala, porque o catálogo não cabe (ou fica desatualizado) dentro do prompt — aqui entra RAG. Se a empresa quisesse que o modelo "falasse" numa linguagem técnica muito específica e nada genérica, em grande volume e de forma consistente ao ponto de justificar o investimento, aí sim fine-tuning entraria na conversa.

```
comportamento estável, cabe no prompt         -> prompting
conhecimento externo, muda com frequência     -> RAG
estilo/domínio extremamente específico        -> fine-tuning (avançado)
```

## Raciocínio arquitetural

### Comece sempre pela opção mais barata

A ordem de investigação recomendada é prompting primeiro, RAG depois, fine-tuning por último. Pular direto para fine-tuning sem esgotar prompting e RAG costuma ser desperdício de tempo e dinheiro, porque a maioria dos requisitos de customização se resolve nas duas primeiras camadas.

### Teste prompts em variações, não só no caso feliz

Um prompt só está pronto quando resiste a variações razoáveis do input, não apenas ao exemplo que motivou sua escrita. Isso é a mesma lógica de um conjunto de validação em ML clássico, aplicada a texto.

## Boas práticas

- Trate cada chamada de API como inferência sobre um modelo já treinado, não como uma oportunidade de "ensinar" algo permanentemente.
- Esgote prompting e RAG antes de considerar fine-tuning.
- Teste prompts com variações do input, não apenas com o exemplo original.
- Documente por que uma abordagem de customização foi escolhida, para reavaliar se o requisito mudar.

## Erros comuns

- Achar que enviar mais exemplos no prompt "treina" o modelo permanentemente.
- Escolher fine-tuning como primeira opção sem testar prompting e RAG antes.
- Validar um prompt só no exemplo que o motivou e assumir que ele generaliza.
- Confundir "o modelo aprendeu algo nesta conversa" com "o modelo foi retreinado".

## Resumo para revisão

- Usar a API é inferência; o treinamento do modelo já foi feito pela Anthropic.
- Prompting, RAG e fine-tuning resolvem o mesmo problema de customização em ordem crescente de custo e complexidade.
- Um prompt overfitted funciona só nos exemplos usados para criá-lo; um prompt generalizado resiste a variações.
- A ordem de investigação recomendada é: prompting, depois RAG, fine-tuning por último.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar a escolha entre as três abordagens.
- Continue para [Módulo 04 — Modelos Claude e Model Family](../04-Modelos-Claude-e-Model-Family/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
