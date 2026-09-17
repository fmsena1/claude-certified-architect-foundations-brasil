# Cheatsheet — Módulo 09: Claude Code e Automação de Engenharia

> Revisão rápida dos mecanismos de controle do agente de desenvolvimento. Comandos e nomes exatos de configuração mudam com a versão — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Claude Code | Agente com acesso a arquivos, terminal e Git, não só chat de texto | Tratá-lo como um chatbot comum sem loop de ação |
| Permissões de ferramentas | Três níveis: permitir, perguntar, negar | Deixar tudo em "permitir" para evitar interrupções |
| Hooks | Automação determinística antes/depois de uma chamada de ferramenta | Confundir hook com instrução de prompt, que o modelo pode ignorar |
| Skills | Instruções nomeadas, carregadas quando o contexto combina | Repetir a mesma instrução longa em todo prompt em vez de empacotar numa skill |
| Integração com Git | Commits, branches e PRs criados pelo agente ainda são mudança de código | Aceitar diff gerado pelo agente sem revisão |
| CI / modo não-interativo | Agente roda sem humano no loop, herda permissões do pipeline | Rodar com escopo de permissão amplo demais dentro do pipeline |

## Regras práticas

- Regra que não pode falhar por esquecimento do modelo vai para um hook, não para o prompt.
- Tarefa repetitiva com padrão claro vira skill; decisão caso a caso continua sendo do modelo.
- Permissões seguem o menor privilégio: automático só para ações reversíveis e de baixo risco.
- Qualquer commit, branch ou PR gerado pelo agente passa pela mesma revisão de uma mudança humana.
- Em CI, restrinja o escopo de permissões do agente antes de restringir qualquer outra coisa.

## Gatilhos de memorização

- Hook roda sempre; skill roda se o modelo decidir; prompt só ajuda se o modelo lembrar.
- "Permitir sempre" é conveniência hoje e risco amanhã.
- Diff de agente é diff de gente: revisa igual.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
