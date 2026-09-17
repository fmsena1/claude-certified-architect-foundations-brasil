# Módulo 13 — Segurança, Privacidade e IA Responsável

Este módulo cobre as decisões que cercam o uso responsável da Claude em produção: o que acontece com os dados enviados, quais políticas de uso se aplicam, como implementar guardrails técnicos e quando uma decisão precisa passar por um humano antes de valer. Não é um módulo sobre como "travar" o modelo — é sobre onde colocar controle deliberado num sistema que, por padrão, responde a qualquer entrada.

## Objetivo

Ao final deste módulo, você deve conseguir explicar em termos gerais o que acontece com dados enviados à Claude, diferenciar política de uso aceitável de guardrail técnico implementado pela aplicação, descrever o papel prático do constitutional AI no comportamento do modelo e projetar um ponto de revisão humana obrigatória para decisões de alto risco.

## Onde este tema apareceria numa avaliação

- Reconhecer se dados de um cliente específico são usados para treinar modelos, segundo a política vigente da Anthropic.
- Identificar guardrails técnicos apropriados para um caso de uso sensível (saúde, finanças, jurídico, decisões sobre pessoas).
- Explicar a diferença entre uma política de uso aceitável (documento) e um guardrail técnico (implementação).
- Descrever, em nível de produto, o que o constitutional AI influencia no comportamento do modelo.
- Projetar um fluxo automatizado que inclua revisão humana obrigatória antes de uma decisão crítica valer.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e recursos principais

| Conceito | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Retenção de dados | Define por quanto tempo e sob quais condições o conteúdo de uma chamada permanece armazenado | Afeta decisão de canal de deploy, aprofundada no módulo 14 |
| Uso de dados em treinamento | Define se e como o conteúdo enviado pode alimentar o treinamento de modelos futuros | Ponto central de qualquer avaliação de compliance de aplicação |
| Política de Uso Aceitável | Documento que define usos permitidos e proibidos da Claude | Base para decidir o que um guardrail técnico precisa reforçar |
| Guardrails técnicos | Controles implementados pela aplicação (filtros de entrada/saída, validação, bloqueio) | Complementam, mas não substituem, o comportamento nativo do modelo |
| Constitutional AI | Abordagem de treinamento que molda o comportamento padrão do modelo diante de pedidos sensíveis | Explica por que o modelo já recusa certos pedidos sem guardrail externo |
| Revisão humana (human-in-the-loop) | Ponto de controle obrigatório antes de uma decisão de alto risco valer | Conecta com avaliação e observabilidade, aprofundadas no módulo 15 |

## Conceitos essenciais

### Retenção e uso de dados de clientes

Quando uma aplicação envia dados para a Claude, duas perguntas diferentes precisam de resposta separada: por quanto tempo esse conteúdo fica retido, e se ele pode ser usado para treinar modelos futuros. Essas respostas variam por canal de acesso (API direta, console, produtos de consumo) e por configuração contratual, e mudam conforme a política vigente é atualizada. O erro mais comum é assumir uma resposta genérica ("dados de API nunca são usados para treinar" ou o oposto) sem checar qual acordo se aplica ao contexto específico. Para uma aplicação enterprise, essa checagem deveria acontecer antes de qualquer dado de produção real ser enviado, não depois.

### Política de Uso Aceitável e guardrail técnico

A Política de Uso Aceitável é um documento: ela define o que é permitido e o que é proibido fazer com a Claude, independentemente de o modelo tecnicamente aceitar ou recusar um pedido. Um guardrail técnico é outra coisa: é uma implementação concreta na aplicação — validação de entrada, filtro de saída, lista de bloqueio, limite de escopo — que existe para reforçar essa política e reduzir a chance de uso indevido, mesmo quando o modelo sozinho já tende a recusar o pedido problemático. Depender só da política (confiar que ninguém vai violar) ou só do guardrail (achar que basta um filtro técnico) deixa lacunas; os dois trabalham em conjunto.

### Constitutional AI em nível prático

Constitutional AI é a abordagem que a Anthropic usa para moldar o comportamento padrão do modelo diante de pedidos sensíveis, usando um conjunto de princípios como referência durante o treinamento, em vez de depender só de exemplos de reforço humano caso a caso. Na prática, para quem constrói aplicação, isso significa que o modelo já chega com um comportamento padrão razoável diante de pedidos ambíguos ou potencialmente prejudiciais — mas isso não substitui guardrails específicos do domínio da aplicação, porque o comportamento padrão do modelo é genérico, e a aplicação pode ter regras próprias mais restritivas.

### Revisão humana em decisões críticas

Nem toda saída de um sistema com Claude deveria valer sozinha. Quando a decisão afeta uma pessoa de forma significativa — aprovação de crédito, diagnóstico, elegibilidade, moderação com consequência real — o padrão responsável é ter um ponto de revisão humana obrigatória antes que a decisão produza efeito, especialmente nos casos de maior risco ou ambiguidade. Isso não significa que um humano precise revisar cada chamada da aplicação; significa que o desenho do fluxo separa claramente o que pode ser automático do que exige revisão antes de valer.

## Exemplo prático

Uma aplicação de análise de crédito usa Claude para sugerir uma decisão inicial a partir dos dados do solicitante. Decisões de baixo risco (aprovação clara, dentro de critérios objetivos) seguem direto; decisões negativas ou ambíguas entram numa fila de revisão humana antes de qualquer resposta final ao solicitante.

```
entrada do solicitante
        |
        v
guardrail de entrada (valida escopo e dado sensível fora de política)
        |
        v
Claude analisa e sugere uma decisão
        |
        v
decisão de alto risco ou ambígua?
        |                       |
       não                     sim
        |                       |
        v                       v
resposta automática      fila de revisão humana
ao solicitante                  |
                                 v
                        humano aprova ou ajusta
                                 |
                                 v
                        resposta final ao solicitante
```

## Raciocínio arquitetural

### Quando um guardrail técnico não é suficiente

Um guardrail técnico reduz a chance de um resultado indesejado, mas não elimina ambiguidade em casos de fronteira. Quando o custo de um erro é alto — impacto financeiro, legal ou sobre a vida de uma pessoa — a resposta não é empilhar mais guardrails até "ter certeza"; é aceitar que a automação sozinha não deveria decidir e inserir revisão humana no ponto certo do fluxo.

### Onde colocar o humano no loop sem travar o produto inteiro

Revisão humana tem custo de tempo e de pessoas. Colocá-la em toda chamada da aplicação normalmente não é viável nem necessário. O ponto de equilíbrio é segmentar o fluxo por nível de risco: casos claramente de baixo risco seguem automáticos, casos ambíguos ou de alto impacto são roteados para revisão, e o critério de roteamento é revisado com o tempo à medida que a aplicação acumula dados reais sobre onde os erros mais graves aconteceram.

## Boas práticas

- Confirme a política de retenção e uso de dados que se aplica ao seu canal de acesso antes de enviar dados de produção reais.
- Trate a Política de Uso Aceitável como requisito de produto, não como texto jurídico que só o time legal lê.
- Combine o comportamento padrão do modelo (moldado por constitutional AI) com guardrails específicos do domínio da sua aplicação.
- Defina critérios explícitos de risco para decidir o que segue automático e o que exige revisão humana.
- Documente o ponto de revisão humana no desenho do fluxo, não como um "se der problema, alguém olha depois".
- Revise periodicamente os critérios de roteamento para revisão, com base em erros reais observados.

## Erros comuns

- Assumir uma política de retenção ou treinamento genérica sem checar a que se aplica ao contrato ou canal específico.
- Confundir "o modelo recusou o pedido óbvio" com "a aplicação está protegida", ignorando os casos de fronteira.
- Não ter nenhum ponto de revisão humana em fluxos que afetam pessoas de forma significativa.
- Colocar revisão humana em volume alto demais, inviabilizando o produto sem reduzir risco de forma proporcional.
- Tratar guardrail técnico e política de uso como a mesma coisa, quando são complementares e vivem em camadas diferentes.

## Resumo para revisão

- Retenção de dados e uso de dados em treinamento são perguntas separadas e variam por canal e contrato.
- Política de Uso Aceitável é documento; guardrail técnico é implementação — os dois se complementam.
- Constitutional AI molda o comportamento padrão do modelo, mas não substitui guardrail específico do domínio.
- Decisões de alto risco sobre pessoas deveriam ter revisão humana obrigatória antes de valer.
- O critério de quando exigir revisão humana deve ser explícito e revisado com dados reais de erro.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar o mapeamento de pontos de revisão humana num fluxo.
- Continue para [Módulo 14 — Deploy Enterprise (API direta, Bedrock, Vertex AI, Microsoft Foundry)](../14-Deploy-Enterprise-API-Bedrock-Vertex-Foundry/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
