# Módulo 15 — Boas Práticas, Avaliação e Custos

Construir com Claude não termina quando o primeiro prompt funciona: uma aplicação em produção precisa de um jeito sistemático de saber se uma mudança melhorou ou piorou o comportamento do modelo, e de controle sobre quanto essa aplicação custa para rodar. Este módulo cobre como avaliar prompts e agentes de forma repetível, como observar o comportamento em produção e como reduzir custo sem sacrificar qualidade.

## Objetivo

Ao final deste módulo, você deve conseguir montar um conjunto mínimo de avaliação para um prompt, explicar a diferença entre avaliação automática e revisão humana, descrever os principais mecanismos de observabilidade de uma aplicação baseada em Claude, e justificar a ordem em que aplicar alavancas de redução de custo (cache, escolha de modelo/esforço, processamento em lote).

## Onde este tema apareceria numa avaliação

- Montar ou interpretar um pequeno conjunto de casos de teste para julgar se um prompt melhorou ou regrediu.
- Distinguir avaliação automática (grading por regra ou por modelo) de revisão humana, e saber quando cada uma se aplica.
- Identificar quais sinais de observabilidade (uso de tokens, taxa de erro, latência, motivo de parada) importam para diagnosticar um problema em produção.
- Escolher, em um cenário de custo alto, qual alavanca aplicar primeiro entre cache, escolha de modelo e processamento em lote.
- Explicar por que um prompt em produção deveria ser versionado como código, não editado livremente.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e recursos principais

| Conceito/Recurso | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Eval de prompt | Conjunto de casos de entrada/saída esperada usado para medir qualidade de um prompt | Base para decidir se uma mudança de prompt (módulo 06) pode ir para produção |
| Eval de agente | Avaliação de uma sequência de decisões e chamadas de ferramenta, não só de uma resposta isolada | Estende a lógica de eval de prompt para os loops descritos no módulo 08 |
| Observabilidade | Coleta de métricas de uso, erro e latência de cada chamada em produção | Depende da estrutura de request/response da Messages API (módulo 05) |
| Prompt caching | Reaproveitamento de prefixo de prompt já processado para reduzir custo e latência | Aprofundado no módulo 12, aqui tratado como alavanca de custo |
| Processamento em lote (batch) | Envio assíncrono de várias requisições não sensíveis a latência, a custo reduzido | Alternativa a chamadas síncronas para cargas de trabalho de alto volume |
| Escolha de modelo e esforço | Selecionar o modelo e o nível de raciocínio proporcional à dificuldade da tarefa | Retoma o eixo custo x latência x qualidade do módulo 04 |
| Versionamento de prompt | Tratar o texto do prompt como artefato versionado, testado antes de promover | Espelha a prática de versionamento de modelo do módulo 04 |

## Conceitos essenciais

### Evals de prompt e de agente

Um eval é, no fundo, um conjunto de casos representativos com uma forma de julgar a saída: comparação exata, checagem de regras (a resposta contém X, não contém Y) ou julgamento por outro modelo. Para uma tarefa de resposta única — classificar, extrair, resumir — o eval compara a saída do prompt candidato com uma saída esperada ou com critérios objetivos. Para um agente, que executa múltiplos passos e chama ferramentas, o eval precisa olhar para a trajetória inteira: quais ferramentas foram chamadas, em que ordem, e se o resultado final está correto — não só o texto final. Sem esse conjunto de casos, qualquer mudança de prompt vira uma aposta baseada em "parece melhor" em vez de uma decisão com evidência.

### Observabilidade

Observar uma aplicação baseada em Claude significa registrar, para cada chamada, os sinais que permitem diagnosticar problemas depois: tokens de entrada e saída consumidos, se a resposta veio de cache, o motivo de parada (`stop_reason`) e, quando aplicável, se houve recusa ou erro. Esses sinais respondem perguntas concretas: o custo subiu porque o volume subiu ou porque o cache parou de funcionar? A taxa de erro aumentou depois de uma mudança de prompt ou de modelo? Sem esse registro estruturado, o único jeito de perceber uma regressão é reclamação de usuário — tarde demais para uma correção barata.

### Otimização de custo

Reduzir custo de uma aplicação Claude segue uma ordem prática de alavancas. Primeiro, as que não custam qualidade: cache de prompt para prefixos repetidos, e higiene de tokens de entrada e saída (não reenviar contexto desnecessário, não pedir mais tokens de saída do que o necessário). Depois, as que envolvem uma troca deliberada: usar o modelo e o nível de esforço proporcional à dificuldade real da tarefa, em vez do mais capaz por padrão. Por fim, para cargas de trabalho que toleram atraso — processamento noturno, análise em massa, geração de relatórios —, o processamento em lote troca latência imediata por custo menor por chamada. Medir custo por tarefa concluída, não por chamada isolada, evita a armadilha de "otimizar" trocando poucas chamadas caras por muitas chamadas baratas que juntas custam mais.

### Versionamento de prompt em produção

Um prompt de produção não deveria ser editado diretamente onde está em uso. Como uma mudança de código, ele deveria viver em um arquivo versionado, mudar através de um processo revisável, e só ser promovido depois de passar pelo conjunto de avaliação da aplicação. Isso permite reverter uma mudança de prompt com a mesma facilidade que se reverte um deploy, e evita a situação comum de "ninguém sabe qual versão do prompt está rodando agora nem por que ela mudou".

## Exemplo prático

Uma equipe quer trocar o prompt de um classificador de tickets de suporte. Antes de promover a mudança, ela roda o prompt candidato contra o mesmo conjunto de casos usado para o prompt atual e compara os resultados.

```
conjunto de casos (entrada + rótulo esperado)
        |
        v
prompt atual (baseline) --> saídas A --> grading --> taxa de acerto A
        |
prompt candidato --------> saídas B --> grading --> taxa de acerto B
        |
        v
comparação A x B --> taxa de acerto melhora e custo por chamada não piora?
        |                                   |
       sim                                  não
        |                                   |
        v                                   v
promove prompt candidato           mantém baseline, ajusta candidato
```

## Raciocínio arquitetural

### Grading automático vs. revisão humana

Grading automático (comparação exata, regra ou outro modelo como juiz) escala bem e é o padrão para rodar um conjunto de avaliação com frequência, mas só é confiável quando o critério de acerto é razoavelmente objetivo. Tarefas com julgamento subjetivo de qualidade — tom, completude, adequação de uma resposta longa — se beneficiam de uma amostra revisada por humano, mesmo que o grosso da avaliação continue automático. A prática comum é usar grading automático como primeiro filtro e reservar revisão humana para amostras de risco mais alto ou para validar que o "juiz automático" continua alinhado com o julgamento humano.

### A ordem das alavancas de custo importa

Aplicar a alavanca errada primeiro desperdiça esforço: trocar de modelo antes de garantir que o cache de prompt está funcionando corretamente pode mascarar o ganho real disponível. A ordem recomendada é: primeiro confirmar que cache e higiene de tokens estão funcionando (ganho sem troca de qualidade), depois ajustar modelo e nível de esforço por tarefa, e só depois considerar processamento em lote para as cargas que toleram atraso. Medir o efeito de cada alavanca isoladamente evita atribuir uma economia à alavanca errada.

## Boas práticas

- Mantenha um conjunto de avaliação mínimo para cada prompt ou agente crítico, mesmo que pequeno, e rode-o antes de qualquer mudança de prompt ir para produção.
- Registre uso de tokens, taxa de acerto de cache e motivo de parada de cada chamada como parte padrão de observabilidade.
- Aplique as alavancas de custo na ordem correta: cache e higiene de tokens primeiro, depois modelo/esforço, depois lote.
- Trate o prompt de produção como artefato versionado, com histórico e possibilidade de rollback.
- Combine grading automático com uma amostra de revisão humana para tarefas com julgamento subjetivo.
- Meça custo por tarefa concluída, não por chamada isolada.

## Erros comuns

- Mudar um prompt em produção sem comparar contra um conjunto de casos anterior.
- Trocar de modelo para "economizar" sem antes confirmar que o cache de prompt está funcionando.
- Confiar apenas em grading automático para tarefas com critério de acerto subjetivo.
- Não registrar nenhum dado de uso ou erro, descobrindo problemas só por reclamação de usuário.
- Tratar processamento em lote como solução universal, ignorando que ele não serve para fluxos sensíveis a latência.

## Resumo para revisão

- Um eval é um conjunto de casos mais um critério de julgamento; sem ele, mudança de prompt é aposta, não decisão com evidência.
- Eval de agente precisa olhar a trajetória de ferramentas, não só a resposta final.
- Observabilidade mínima inclui uso de tokens, acerto de cache, motivo de parada e taxa de erro.
- A ordem de otimização de custo é: cache e higiene de tokens, depois modelo/esforço, depois lote.
- Prompt de produção deve ser versionado e promovido só depois de passar pelo conjunto de avaliação.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para montar um mini conjunto de avaliação na prática.
- Continue para [Módulo 16 — Simulados e Questões](../16-Simulados-e-Questoes/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
