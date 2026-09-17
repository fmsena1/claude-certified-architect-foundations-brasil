# Flashcards - Tool Use, Function Calling e MCP

## Card 01

**Pergunta:** O que compõe a definição de uma ferramenta oferecida ao modelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um nome, uma descrição em linguagem natural do que ela faz e um esquema que define os parâmetros de entrada esperados.

</details>

## Card 02

**Pergunta:** Quem executa a ferramenta de fato: o modelo ou a aplicação?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A aplicação. O modelo apenas decide que a ferramenta deve ser chamada e com quais argumentos; a execução real acontece fora do modelo.

</details>

## Card 03

**Pergunta:** Quais são os quatro passos do ciclo de chamada de ferramenta, em ordem?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O modelo pede a chamada de uma ferramenta com argumentos; a aplicação executa essa chamada de verdade; a aplicação devolve o resultado ao modelo; o modelo produz a resposta final com base nesse resultado.

</details>

## Card 04

**Pergunta:** O que diferencia tool use simples de orquestração de múltiplas ferramentas?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Tool use simples envolve uma ferramenta e uma decisão isolada. Orquestração envolve múltiplas ferramentas no mesmo turno ou em turnos sucessivos, muitas vezes com uma chamada dependendo do resultado da anterior.

</details>

## Card 05

**Pergunta:** Por que a descrição de uma ferramenta importa tanto quanto seu esquema de entrada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque é com base na descrição que o modelo decide se e quando chamar a ferramenta. Uma descrição vaga leva a chamadas na hora errada ou à ferramenta nunca ser usada, mesmo com um esquema tecnicamente correto.

</details>

## Card 06

**Pergunta:** O que é o Model Context Protocol (MCP), em uma frase?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um padrão aberto que separa quem expõe uma ferramenta ou fonte de contexto de quem a consome, permitindo reaproveitar a mesma integração em diferentes aplicações.

</details>

## Card 07

**Pergunta:** Que problema o MCP resolve em relação a integrações proprietárias de ferramentas?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Evita que cada aplicação precise construir sua própria integração específica para cada fonte de dados ou ferramenta externa, ao oferecer um padrão comum de exposição e consumo.

</details>

## Card 08

**Pergunta:** Por que o resultado de uma ferramenta deve ser tratado como entrada não confiável pela aplicação?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque vem de um sistema externo real, sujeito a erro, dado inesperado ou falha — e repassá-lo sem validação pode propagar esse problema para o restante da aplicação ou para o próprio modelo.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
