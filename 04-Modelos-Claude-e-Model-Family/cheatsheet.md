# Cheatsheet — Módulo 04: Modelos Claude e Model Family

> Revisão rápida do eixo de decisão entre modelos. Valores de preço, latência e benchmark mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Família de modelos | Existe para cobrir perfis diferentes de custo/latência/qualidade | Não assumir que só existe "um" Claude |
| Modelo mais capaz | Melhor para tarefas complexas e de baixo volume | Mais caro e mais lento por token |
| Modelo mais rápido/barato | Melhor para tarefas simples e de alto volume | Pode não bastar para raciocínio complexo |
| Roteamento por tarefa | Uma aplicação pode usar mais de um modelo | Usar um único modelo para tudo é comum, mas raramente ótimo |
| Versionamento | Produção deve fixar uma versão específica | Apontar sempre para "a mais recente" sem teste é arriscado |

## Regras práticas

- Escolha o modelo pelo requisito da tarefa, não pelo "mais avançado" por padrão.
- Comece pelo modelo de equilíbrio da linha quando não houver dado suficiente para decidir.
- Roteie tarefas diferentes para modelos diferentes dentro da mesma aplicação, quando fizer sentido.
- Trate migração de versão de modelo como mudança testada, nunca automática em produção.

## Gatilhos de memorização

- Mais capaz = mais caro e mais lento; mais rápido/barato = menos raciocínio complexo.
- Uma aplicação pode ter mais de um modelo trabalhando dentro dela.
- Produção = versão fixa; "mais recente sempre" é para ambiente de teste.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
