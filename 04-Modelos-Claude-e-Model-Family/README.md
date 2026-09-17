# Módulo 04 — Modelos Claude e Model Family

Este módulo cobre como a Anthropic organiza a família de modelos Claude e como escolher entre eles. O ponto central não é decorar nomes ou números de versão — que mudam com frequência — mas entender o eixo de decisão: custo, latência e qualidade, e como esse eixo muda por caso de uso.

## Objetivo

Ao final deste módulo, você deve conseguir explicar por que a Anthropic mantém múltiplos modelos em paralelo, argumentar a escolha de um modelo para um caso de uso específico com base em custo/latência/qualidade, e entender o que significa versionar e migrar entre modelos Claude.

## Onde este tema apareceria numa avaliação

- Escolher o modelo certo para um caso de uso descrito (ex.: tarefa simples e de alto volume vs. tarefa complexa e de baixo volume).
- Explicar o trade-off entre modelos maiores/mais caros e modelos menores/mais rápidos.
- Reconhecer a diferença entre "modelo mais capaz" e "modelo certo para o problema".
- Entender por que aplicações em produção fixam uma versão de modelo em vez de sempre usar "o mais recente" sem controle.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Linha de modelos (visão conceitual)

| Modelo | Papel típico | Como se conecta com o restante do repositório |
| --- | --- | --- |
| Opus | Modelo de maior capacidade da linha, para tarefas complexas e de alto raciocínio | Cotado em módulos de agentes (08) e casos de arquitetura complexa (16) |
| Sonnet | Equilíbrio entre capacidade e custo/latência, opção padrão para grande parte dos casos de uso | Referência de "modelo padrão" nos exemplos do repositório |
| Haiku | Modelo mais rápido e barato da linha, para tarefas simples e de alto volume | Citado em módulos de custo/otimização (15) |
| Fable | Modelo com características próprias voltadas a interação natural e criativa | Mencionado como opção adicional dentro da mesma família |

> Nomes, capacidades relativas e disponibilidade de modelos mudam ao longo do tempo. Trate esta tabela como um mapa conceitual de papéis, não como uma lista fixa — confirme a linha de modelos atual em [links.md](./links.md).

## Conceitos essenciais

### Por que existem vários modelos em paralelo

Nem todo problema exige o modelo mais capaz disponível. Um modelo maior tende a ser mais caro e mais lento por token processado; um modelo menor tende a ser mais barato e mais rápido, mas com limite menor de raciocínio em tarefas muito complexas. Manter uma família de modelos permite que quem constrói a aplicação escolha o ponto certo nesse eixo para cada parte do sistema.

### O eixo custo x latência x qualidade

Esse é o eixo de decisão central deste módulo. Custo e latência tendem a subir junto com a capacidade do modelo; qualidade de resposta em tarefas complexas tende a subir também. A decisão raramente é "qual modelo é melhor" em abstrato — é "qual modelo é bom o suficiente, rápido o suficiente e barato o suficiente para esta tarefa específica".

### Versionamento e migração de modelo

Modelos Claude são versionados, e uma aplicação em produção normalmente fixa uma versão específica em vez de sempre apontar para "o modelo mais recente" sem controle. Isso evita que uma atualização de modelo mude o comportamento da aplicação sem aviso. Migrar de versão é uma decisão deliberada, testada antes de ir para produção — não algo que deveria acontecer sozinho.

## Exemplo prático

### Roteando por tarefa, não por aplicação inteira

Uma aplicação de suporte ao cliente pode usar um modelo mais rápido e barato para classificar e priorizar tickets em alto volume, e reservar um modelo mais capaz apenas para os casos que exigem raciocínio mais complexo (reclamações ambíguas, decisões que envolvem múltiplas políticas). Isso é comum: nada obriga uma aplicação a usar um único modelo para tudo.

```
tarefa de alto volume, simples     -> modelo mais rápido/barato da linha
tarefa complexa, baixo volume      -> modelo mais capaz da linha
tarefa intermediária, uso geral    -> modelo de equilíbrio custo/capacidade
```

## Raciocínio arquitetural

### Comece pelo modelo de equilíbrio, ajuste depois

Quando não há dado suficiente para decidir, começar pelo modelo de equilíbrio da linha (em vez do mais caro ou do mais barato) costuma ser o ponto de partida mais seguro. A partir de métricas reais de custo, latência e qualidade em produção, a aplicação pode migrar partes específicas para um modelo mais barato ou mais capaz.

### Fixe a versão em produção, teste a migração como uma mudança de código

Trate a troca de versão de modelo com o mesmo cuidado que uma mudança de dependência crítica: teste com o conjunto de avaliação da aplicação (aprofundado no módulo 15) antes de promover a nova versão para produção.

## Boas práticas

- Escolha o modelo pelo requisito da tarefa (custo, latência, complexidade), não pelo "mais avançado disponível" por padrão.
- Considere usar modelos diferentes para partes diferentes da mesma aplicação.
- Fixe a versão de modelo usada em produção e trate upgrades como mudanças deliberadas e testadas.
- Revise a linha de modelos periodicamente — capacidades e nomes mudam com o tempo.

## Erros comuns

- Assumir que o modelo mais caro é sempre a escolha certa.
- Usar um único modelo para toda a aplicação sem considerar tarefas de perfis diferentes.
- Apontar produção para "a versão mais recente" sem processo de teste antes da migração.
- Tratar benchmarks públicos como garantia de desempenho para o caso de uso específico da aplicação.

## Resumo para revisão

- A Anthropic mantém uma família de modelos porque nem todo problema exige a maior capacidade disponível.
- O eixo de decisão é custo x latência x qualidade, ajustado ao requisito de cada tarefa.
- Aplicações podem (e costumam) usar mais de um modelo, roteando por tipo de tarefa.
- Produção deve fixar versão de modelo e tratar migração como mudança testada, não automática.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar a escolha de modelo por cenário.
- Continue para [Módulo 05 — Claude API e Messages API](../05-Claude-API-e-Messages-API/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
