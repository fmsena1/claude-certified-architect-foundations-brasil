# Cheatsheet — Módulo 17: Glossário

> Revisão rápida dos pares de termos mais confundidos entre si nos módulos 01 a 15.

## Termos frequentemente confundidos

| Termo | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Token vs palavra | Token é a unidade real de custo e limite de contexto | Estimar custo ou tamanho de prompt contando palavras em vez de tokens |
| RAG vs fine-tuning | RAG busca conhecimento externo sob demanda; fine-tuning ajusta os pesos do modelo | Tratar as duas como a mesma coisa ou pular direto para fine-tuning sem testar RAG |
| Modelo vs canal de acesso | Modelo é a capacidade (Claude); canal (API direta, Bedrock, Vertex AI, Foundry) é a forma de distribuição | Achar que trocar de canal muda a inteligência do modelo |
| Hook vs skill | Hook roda sempre, garantido pelo ambiente; skill depende do modelo decidir usá-la | Confiar numa skill para uma regra que não pode falhar por esquecimento |
| Chatbot vs agente autônomo | Chatbot responde por turno; agente decide sozinho quando o objetivo foi atingido | Chamar de "agente" qualquer sistema que só usa uma ferramenta uma vez |
| Prompt caching vs RAG | Cache reaproveita o que já está no prompt e não muda; RAG busca o que ainda não se sabe se será relevante | Tentar resolver com cache um problema que é, na verdade, de busca de conhecimento |
| Grounding vs citação de fonte | Grounding é a resposta se apoiar nos trechos recuperados; citação é apontar exatamente de onde veio cada afirmação | Achar que grounding sem citação explícita já é auditável |
| Guardrail técnico vs Política de Uso Aceitável | Guardrail é implementação na aplicação; política é o documento que define o permitido | Tratar política como suficiente sem nenhum controle técnico correspondente |
| Inferência vs treinamento | Inferência é usar o modelo já pronto; treinamento já foi feito pela Anthropic antes da API existir | Achar que enviar mais exemplos no prompt "treina" o modelo permanentemente |
| Subagente vs multiagente | Subagente é delegação dentro de um orquestrador; multiagente é coordenação entre múltiplas linhas de trabalho autônomas | Chamar de "multiagente" qualquer uso de subagente sob um único orquestrador |

## Regras práticas

- Sempre que dois termos aparecerem juntos numa frase de arquitetura, pergunte primeiro qual dos dois é a decisão de negócio e qual é a decisão técnica.
- Modelo, canal de acesso e produto (Claude.ai, API, Claude Code) são três camadas diferentes — nunca use um no lugar do outro.
- Guardrail técnico, política de uso e Constitutional AI atuam em camadas diferentes (implementação, documento, comportamento padrão do modelo); nenhum substitui os outros dois.
- Ao ler "cache", "resumo" ou "busca", identifique se o problema é de custo (cache), de volume de histórico (sumarização) ou de conhecimento não previsível (RAG).

## Gatilhos de memorização

- Token é dinheiro e limite; palavra é só como a gente lê.
- RAG busca o que muda; fine-tuning muda o que já sabe.
- Canal muda quem fatura, não o quanto o modelo pensa.
- Hook não esquece; skill pode não ser chamada.
- Cache é o que se repete; RAG é o que ainda não se sabe se vai precisar.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
