# Flashcards — Revisão Cruzada dos Módulos 01-15

Cards de síntese entre módulos, para revisão espaçada final antes dos simulados. Não repetem literalmente os flashcards de cada módulo individual — cruzam conceitos de módulos diferentes.

## Card 01

**Pergunta:** Uma empresa hesita entre prompting, RAG e fine-tuning para um requisito novo. Qual pergunta única resume a ordem de decisão recomendada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
"O comportamento é estável e cabe no prompt?" (prompting) → "Precisa de conhecimento externo que muda com frequência?" (RAG) → só então considerar fine-tuning, quando as duas primeiras opções já não resolvem (Módulos 03 e 10).

</details>

## Card 02

**Pergunta:** Qual é a relação entre o eixo custo x latência x qualidade (modelos) e a ordem de alavancas de otimização de custo (produção)?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Escolher o modelo certo por tarefa é uma das alavancas de custo, mas não a primeira a aplicar. Antes de trocar de modelo, confirme cache de prompt e higiene de tokens; só depois ajuste modelo/esforço por tarefa (Módulos 04 e 15).

</details>

## Card 03

**Pergunta:** Um hook, uma skill e um guardrail técnico têm algo em comum e algo que os diferencia. O que é?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Os três existem para reduzir dependência do julgamento do modelo em cada chamada. A diferença é onde vivem: hook é execução determinística no ambiente (Claude Code); skill é comportamento nomeado que o modelo escolhe usar (Claude Code); guardrail técnico é validação de entrada/saída implementada pela aplicação, reforçando uma Política de Uso Aceitável (Módulos 09 e 13).

</details>

## Card 04

**Pergunta:** Por que "contexto longo" e "RAG" resolvem problemas diferentes, mesmo lidando os dois com "dar dados ao modelo"?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Contexto longo pressupõe que você já sabe qual dado é relevante e ele cabe no prompt. RAG resolve o caso em que você não sabe de antemão o que será relevante para cada pergunta, buscando sob demanda. Sumarização progressiva é uma terceira técnica, para quando o dado já está no contexto mas cresceu demais (Módulos 10 e 12).

</details>

## Card 05

**Pergunta:** Um agente autônomo e uma orquestração multiagente resolvem o mesmo tipo de problema?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. Um agente único com boas ferramentas (possivelmente com subagentes) resolve a maioria das tarefas de escopo moderado. Multiagente completo só se justifica quando paralelismo entre linhas de trabalho autônomas e separação de contexto compensam o custo real de coordenação adicional (Módulo 08).

</details>

## Card 06

**Pergunta:** Grounding (Módulo 10) e citações em documentos (Módulo 11) resolvem o mesmo tipo de risco. Qual?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O risco de uma resposta plausível, mas não sustentada pela fonte real — seja um trecho recuperado via RAG, seja uma localização exata dentro de um PDF. Os dois amarram a resposta gerada a uma origem verificável, permitindo auditoria (Módulos 10 e 11).

</details>

## Card 07

**Pergunta:** Por que "canal de acesso" (Módulo 14) e "modelo Claude" (Módulo 04) são decisões independentes?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O canal (API direta, Bedrock, Vertex AI, Foundry) muda autenticação, faturamento e residência de dados — não a capacidade do modelo. A escolha de qual modelo Claude usar (Opus/Sonnet/Haiku/Fable) continua sendo sobre o eixo custo x latência x qualidade, dentro de qualquer canal escolhido.

</details>

## Card 08

**Pergunta:** Como um eval de prompt (resposta única) difere de um eval de agente (múltiplos passos)?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um eval de prompt compara a saída final contra um critério objetivo ou esperado. Um eval de agente precisa olhar a trajetória inteira — quais ferramentas foram chamadas, em que ordem — porque o mesmo resultado final pode esconder um caminho de decisão errado (Módulos 07, 08 e 15).

</details>

## Card 09

**Pergunta:** Qual é o fio condutor entre "modelo assistente vs modelo base" (Módulo 02) e "constitutional AI" (Módulo 13)?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O processo que transforma um modelo base (que só continua texto) em um modelo assistente como Claude (que segue instruções e recusa pedidos prejudiciais) é o mesmo processo de alinhamento — descrito como constitutional AI — que fundamenta o comportamento padrão discutido em segurança e IA responsável.

</details>

## Card 10

**Pergunta:** Multimodalidade nativa (Módulo 11) e prompt caching (Módulo 12) compartilham qual preocupação de custo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
As duas envolvem decidir deliberadamente o quanto enviar ao modelo: resolução de imagem maior do que o necessário gera tokens extras sem ganho de qualidade, assim como reenviar um bloco de prompt estável sem cache gera reprocessamento sem ganho. Em ambos os casos, a otimização é sobre enviar só o necessário, na forma certa.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
