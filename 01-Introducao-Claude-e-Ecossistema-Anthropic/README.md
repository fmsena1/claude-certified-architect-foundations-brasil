# Módulo 01 — Introdução à Claude e ao Ecossistema Anthropic

> **Aviso de não-oficialidade:** este é material de estudo comunitário, não afiliado nem endossado pela Anthropic. **"Claude Certified Architect – Foundations" não é uma certificação oficial da Anthropic** — é um formato de estudo proposto por este repositório, inspirado em guias de certificação de cloud. Qualquer afirmação técnica sobre Claude deve ser conferida na [documentação oficial](./links.md).

Este módulo estabelece o vocabulário base do restante do repositório. A meta é separar "Claude" (a família de modelos) dos produtos construídos em cima dela, para que nos módulos seguintes fique claro se a discussão é sobre o modelo, sobre a API ou sobre uma ferramenta específica.

## Objetivo

Ao final deste módulo, você deve conseguir explicar o que é Claude, diferenciar os principais produtos do ecossistema Anthropic entre si, e reconhecer quando um problema pede "usar Claude" através de um produto pronto ou "construir com Claude" através de API/SDK.

## Onde este tema apareceria numa avaliação

- Diferenciar Claude.ai (produto de consumo) da Claude Developer Platform (Console + API).
- Reconhecer os canais de acesso ao modelo (API direta, Amazon Bedrock, Google Vertex AI, Microsoft Foundry) sem confundir canal com modelo.
- Identificar quando a resposta correta é "usar um produto pronto" em vez de "integrar via API".
- Saber que Claude Code é uma ferramenta de agente para engenharia de software, não um produto de chat genérico.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Recursos e produtos Claude principais

| Recurso | Papel no módulo | Como se conecta com o restante do repositório |
| --- | --- | --- |
| Claude.ai | Produto de consumo para conversar com Claude no navegador ou app | Porta de entrada para quem só quer usar, sem integrar código |
| Claude Developer Platform (Console + API) | Onde se gera chave de API, testa prompts e integra Claude em aplicações | Base dos módulos 05 (API), 06 (prompts) e 07 (tool use) |
| Claude Code | Agente de linha de comando e de IDE para tarefas de engenharia de software | Aprofundado no módulo 09 |
| Claude Agent SDK | Framework para construir agentes autônomos com o mesmo loop usado pelo Claude Code | Aprofundado no módulo 08 |
| Integrações prontas (Slack, Microsoft 365, Chrome) | Produtividade sem escrever código | Exemplo direto de "usar Claude" sem construir nada |

## Conceitos essenciais

### O que é Claude

Claude é a família de modelos de linguagem da Anthropic, hoje distribuída em diferentes tamanhos (aprofundado no módulo 04). "Claude" designa o modelo; os produtos ao redor dele — Claude.ai, a API, Claude Code — são formas diferentes de expor essa mesma capacidade para públicos diferentes.

### Usar Claude vs construir com Claude

"Usar Claude" significa consumir um produto já pronto: abrir o Claude.ai e conversar, instalar a integração do Slack, ou usar o Claude Code no terminal. "Construir com Claude" significa integrar o modelo em um sistema próprio via API ou SDK, com controle total sobre prompt, ferramentas e fluxo de dados. Boa parte das decisões de arquitetura deste repositório giram em torno de saber em qual desses dois modos o problema está.

### Canal de acesso não é o modelo

Amazon Bedrock, Google Vertex AI, Microsoft Foundry e a API direta da Anthropic são canais de distribuição do mesmo modelo Claude. A escolha do canal muda questões de billing, compliance e integração com o restante da stack de nuvem já usada pela empresa — não muda a capacidade do modelo em si. Esse assunto é aprofundado no módulo 14.

## Exemplo prático

### Da necessidade ao canal certo

Uma empresa quer resumir chamados de suporte. Se o time só quer testar a ideia manualmente, Claude.ai resolve. Se quer automatizar isso dentro do sistema de tickets já existente, a integração correta é via Claude Developer Platform (API). Se além de resumir o chamado o sistema também precisa decidir sozinho a prioridade e notificar o time certo, o problema já pede um agente com ferramentas, não apenas uma chamada de API.

```
necessidade                        -> canal certo
conversar manualmente              -> Claude.ai
integrar dentro de um sistema      -> API (Claude Developer Platform)
automatizar tarefa de engenharia   -> Claude Code
agir de forma autônoma com tools   -> Claude Agent SDK + tool use
```

## Raciocínio arquitetural

### Comece pelo modo de uso, não pelo modelo

Antes de perguntar "qual modelo Claude usar", pergunte "isso é um produto pronto, uma integração via API, ou um agente autônomo". A resposta a essa pergunta define o restante da arquitetura muito antes de qualquer escolha entre Opus, Sonnet ou Haiku.

### Produto pronto primeiro, API depois

Quando o requisito ainda não está claro, validar a ideia em Claude.ai custa muito menos do que construir uma integração via API que pode precisar ser refeita. Migrar de "produto pronto" para "API" é comum e esperado; o caminho inverso raramente compensa.

## Boas práticas

- Comece pelo produto pronto (Claude.ai) para validar a ideia antes de integrar via API.
- Trate o canal de acesso (API direta, Bedrock, Vertex AI, Foundry) como decisão de infraestrutura, separada da escolha de modelo.
- Reserve o Claude Code para tarefas de engenharia de software, não para chat genérico.
- Valide o caso de uso com revisão humana antes de automatizar completamente com um agente.

## Erros comuns

- Achar que Claude.ai e a API têm a mesma superfície de controle.
- Confundir "modelo Claude" com "canal de distribuição" (Bedrock, Vertex AI, Foundry).
- Pular direto para um agente autônomo quando uma única chamada de API já resolveria.
- Ignorar que integrações prontas (Slack, Microsoft 365) também são "usar Claude", não só o chat web.

## Resumo para revisão

- Claude é a família de modelos; Claude.ai, a API/Console e o Claude Code são produtos diferentes construídos sobre essa família.
- "Usar Claude" = produto pronto; "construir com Claude" = API ou SDK.
- O canal de acesso ao modelo é uma decisão de infraestrutura, não de capacidade do modelo.
- Claude Code e Claude Agent SDK resolvem problemas de automação; não são substitutos de um chat simples.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar a escolha de canal.
- Continue para [Módulo 02 — Fundamentos de IA Generativa e LLMs](../02-Fundamentos-de-IA-Generativa-e-LLMs/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
