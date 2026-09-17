# Lab — Módulo 09: Claude Code e Automação de Engenharia

## Desenhando um hook ou uma skill para uma tarefa real

Este micro-lab treina a decisão entre hook, skill e instrução de prompt, sem exigir que você efetivamente configure nada em produção.

## Pré-requisitos

- Ter lido o README do módulo, especialmente a seção "Raciocínio arquitetural".
- Ter em mente um repositório ou fluxo de trabalho de engenharia real (o seu, ou um hipotético).
- 20 a 30 minutos.

## Passo a passo

1. Liste de três a cinco tarefas repetitivas ou regras que você gostaria de impor a um agente de código nesse repositório (ex.: nunca commitar direto na branch principal, sempre seguir um padrão de teste, nunca ler arquivos acima de um certo tamanho).
2. Para cada item, classifique se ele é uma regra que não pode depender do modelo lembrar (candidata a hook), um padrão recorrente que ainda exige julgamento contextual (candidata a skill), ou uma preferência pontual (candidata a instrução de prompt).
3. Escolha o item mais crítico da lista — o que causaria mais dano se falhasse — e desenhe, em texto, a condição exata que dispararia o hook ou a skill (quando ele age, o que verifica, o que faz se a condição for satisfeita).
4. Defina o nível de permissão que essa automação exigiria (permitir, perguntar, negar) e justifique com base no princípio do menor privilégio.
5. Descreva como você validaria que o hook ou a skill está funcionando como esperado antes de confiar nele em uso real.
6. Anote um critério de revisão futura: o que faria você revisar ou desativar essa automação mais tarde.

## O que observar

- Regras de segurança e regras que não podem falhar por esquecimento tendem a apontar para hook, não para skill.
- Tarefas com padrão claro, mas que ainda variam de caso a caso, tendem a apontar para skill.
- Quanto mais crítica a ação automatizada, menor deveria ser o nível de permissão automática concedido a ela.

## Custos e limpeza

- Este lab é um exercício de desenho e não exige chamadas de API nem execução real de hooks.
- Se decidir implementar de fato, teste primeiro em um repositório de exemplo antes de aplicar a um projeto real.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
