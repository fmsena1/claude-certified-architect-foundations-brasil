# Flashcards - Segurança, Privacidade e IA Responsável

## Card 01

**Pergunta:** Retenção de dados e uso de dados em treinamento são a mesma pergunta?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. São perguntas separadas: uma trata de quanto tempo o conteúdo fica armazenado, outra trata de se esse conteúdo pode alimentar treinamento de modelos futuros. As respostas variam por canal de acesso e contrato.

</details>

## Card 02

**Pergunta:** O que é a Política de Uso Aceitável da Claude?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um documento que define quais usos da Claude são permitidos e quais são proibidos, independentemente do que o modelo tecnicamente aceite responder.

</details>

## Card 03

**Pergunta:** Qual a diferença entre política de uso e guardrail técnico?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Política de uso é um documento; guardrail técnico é uma implementação concreta na aplicação (validação, filtro, bloqueio) que reforça essa política na prática.

</details>

## Card 04

**Pergunta:** O que é constitutional AI, em nível prático?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A abordagem de treinamento que molda o comportamento padrão do modelo diante de pedidos sensíveis, usando um conjunto de princípios como referência, o que já dá ao modelo um comportamento padrão razoável antes de qualquer guardrail externo.

</details>

## Card 05

**Pergunta:** O comportamento padrão do modelo (via constitutional AI) substitui guardrail específico da aplicação?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. O comportamento padrão do modelo é genérico; a aplicação pode ter regras próprias mais restritivas, que exigem guardrail específico do domínio.

</details>

## Card 06

**Pergunta:** Quando um fluxo automatizado deveria ter revisão humana obrigatória?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando a decisão afeta uma pessoa de forma significativa e o caso é de alto risco ou ambíguo — por exemplo, aprovação de crédito, diagnóstico ou elegibilidade.

</details>

## Card 07

**Pergunta:** Revisão humana deveria existir em toda chamada da aplicação?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Normalmente não. O padrão é segmentar por nível de risco: casos de baixo risco seguem automáticos, casos ambíguos ou de alto impacto são roteados para revisão.

</details>

## Card 08

**Pergunta:** Por que confiar só num guardrail técnico não é suficiente em decisões de alto risco?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque um guardrail reduz a chance de erro mas não elimina ambiguidade em casos de fronteira; quando o custo do erro é alto, a automação sozinha não deveria decidir.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
