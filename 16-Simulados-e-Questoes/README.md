# Módulo 16 — Simulados e Questões

Este módulo concentra o treino final do repositório: em vez de introduzir conceito novo, ele reúne questões comentadas que exercitam tudo o que foi coberto nos Módulos 01 a 15, em formatos variados e com dificuldade crescente. É o ponto de chegada natural depois de terminar a leitura dos módulos de conteúdo, não um substituto para eles.

> **Formato de estudo proposto por este repositório (não oficial):** este módulo reúne **71 questões comentadas** distribuídas em quatro arquivos de prática (13 + 20 + 20 + 18), além de cheatsheet, flashcards, planos de revisão e um caderno de erros. Esses números, a distribuição de domínios usada abaixo e a duração sugerida para uma sessão completa são um **modelo de estudo proposto por este repositório**, não um dado oficial da Anthropic — não existe hoje uma certificação oficial "Claude Certified Architect – Foundations".

## Onde está cada conteúdo

| Arquivo | Descrição | Volume de questões |
| --- | --- | --- |
| [`cheatsheet.md`](./cheatsheet.md) | Sinais de interpretação de enunciado, regras práticas e gatilhos de memorização | — (referência, não questão) |
| [`flashcards.md`](./flashcards.md) | 10 cards de síntese cruzando conceitos de módulos diferentes | — (revisão espaçada) |
| [`questoes.md`](./questoes.md) | Aquecimento com formatos variados (única, múltiplas respostas, ordenação, associação) | 13 questões |
| [`simulado-completo-1.md`](./simulado-completo-1.md) | Simulado com progressão de dificuldade, majoritariamente resposta única | 20 questões |
| [`simulado-completo-2.md`](./simulado-completo-2.md) | Simulado com foco em cenário, arquitetura e decisão de serviço | 20 questões |
| [`mini-simulado-por-dominio.md`](./mini-simulado-por-dominio.md) | Questões organizadas pelos seis domínios propostos, para diagnóstico rápido | 18 questões |
| [`reta-final.md`](./reta-final.md) | Planos de revisão de 14 e 7 dias antes de uma sessão completa | — (planejamento) |
| [`caderno-de-erros.md`](./caderno-de-erros.md) | Template para registrar erro por questão, módulo relacionado e o que revisar | — (template) |

## Banco disponível neste módulo

| Arquivo | Volume | Objetivo |
| --- | --- | --- |
| `questoes.md` | 13 questões | Aquecimento rápido, formatos variados, cobertura ampla dos 15 módulos |
| `simulado-completo-1.md` | 20 questões | Treino de ritmo com progressão de dificuldade |
| `simulado-completo-2.md` | 20 questões | Treino de decisão arquitetural aplicada a cenário |
| `mini-simulado-por-dominio.md` | 18 questões | Diagnóstico de domínio fraco, em blocos separados |
| **Total comentado** | **71 questões** | Base completa de prática deste módulo |

## Distribuição de domínios proposta

A tabela abaixo é o modelo de domínios adotado por este repositório para organizar a prática — não uma ponderação oficial de exame da Anthropic.

| Domínio proposto pelo repositório | Peso proposto | Módulos de origem |
| --- | --- | --- |
| Fundamentos de IA generativa e LLMs | 20% | Módulos 01, 02, 03 |
| Modelos Claude e Plataforma de API | 20% | Módulos 04, 05 |
| Prompting e Ferramentas | 20% | Módulos 06, 07 |
| Agentes e Automação | 15% | Módulos 08, 09 |
| Dados, RAG e Multimodalidade | 15% | Módulos 10, 11, 12 |
| Segurança, Enterprise e Operação | 10% | Módulos 13, 14, 15 |

## Como montar uma sessão de revisão completa

Uma sessão de revisão completa soma os quatro arquivos de questão deste módulo, na ordem em que aparecem na tabela "Banco disponível": aquecimento, simulado 1, simulado 2 e mini-simulado por domínio — 71 questões no total. Como sugestão de estudo (não um tempo oficial de prova), uma referência razoável é:

- `questoes.md` (13 questões): ~15 minutos
- `simulado-completo-1.md` (20 questões): ~30 minutos
- `simulado-completo-2.md` (20 questões): ~30 minutos
- `mini-simulado-por-dominio.md` (18 questões): ~20 minutos

Isso dá **aproximadamente 95 minutos** para a sessão completa, sem consultar os READMEs dos módulos durante a resolução — só depois, na correção. Se o tempo disponível for menor, prefira rodar um arquivo por vez em sessões separadas em vez de cortar questões no meio de um arquivo.

## Estratégia recomendada de estudo

1. Termine a leitura dos Módulos 01 a 15 antes de abrir qualquer arquivo deste módulo — os simulados testam aplicação, não ensinam conceito.
2. Comece por `questoes.md` para aquecer com os diferentes formatos de questão.
3. Use `mini-simulado-por-dominio.md` cedo no processo, para descobrir qual dos seis domínios precisa de mais revisão antes de investir tempo nos simulados completos.
4. Reserve `simulado-completo-1.md` e `simulado-completo-2.md` para quando já houver alguma confiança nos domínios mais fracos identificados.
5. Registre todo erro no `caderno-de-erros.md`, com o módulo relacionado — sem esse registro, é fácil repetir o mesmo erro em tentativas futuras.
6. Siga um dos planos do `reta-final.md` se a revisão estiver acontecendo sob prazo definido.

## Faixas práticas de prontidão

As faixas abaixo são heurísticas de estudo definidas por este repositório, não uma equivalência oficial de aprovação em qualquer exame real.

| % de acerto na sessão completa | Leitura sugerida |
| --- | --- |
| 0-49% | Revisão ampla necessária — volte aos READMEs dos módulos do domínio mais fraco antes de tentar novo simulado |
| 50-69% | Base formada, mas com lacunas — use o `caderno-de-erros.md` para focar exatamente onde errou |
| 70-84% | Prontidão razoável — revise pontualmente os módulos ligados aos erros recorrentes |
| 85-100% | Prontidão alta segundo esta heurística — mantenha revisão espaçada com `flashcards.md` |

## Dicas finais

- Não decore a resposta de uma questão específica; entenda o porquê da explicação, já que os simulados variam o enunciado do mesmo conceito.
- Desconfie de alternativas absolutas ("sempre", "nunca") — a maioria dos conceitos dos Módulos 01-15 envolve trade-off, não regra fixa.
- Refaça o `mini-simulado-por-dominio.md` depois de revisar um domínio fraco, para confirmar que a lacuna foi realmente fechada.
- Trate qualquer dúvida técnica remanescente como pendência a confirmar na documentação oficial listada em [`../18-Recursos-e-Links/links.md`](../18-Recursos-e-Links/links.md), não neste módulo de prática.

## Navegação do módulo

- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões de aquecimento](./questoes.md)
- [Simulado completo 1](./simulado-completo-1.md)
- [Simulado completo 2](./simulado-completo-2.md)
- [Mini-simulado por domínio](./mini-simulado-por-dominio.md)
- [Reta final (planos de 14 e 7 dias)](./reta-final.md)
- [Caderno de erros](./caderno-de-erros.md)
- [Links oficiais](./links.md)

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
