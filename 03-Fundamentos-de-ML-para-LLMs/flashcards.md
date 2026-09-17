# Flashcards - Fundamentos de ML para LLMs

## Card 01

**Pergunta:** O que é inferência ao usar a API da Claude?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
É enviar um input e receber um output de um modelo já treinado, sem alterar seus pesos.

</details>

## Card 02

**Pergunta:** Quem treina o modelo Claude que você usa via API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A Anthropic, antes de disponibilizar o modelo. O usuário da API não treina o modelo em uso normal.

</details>

## Card 03

**Pergunta:** Qual a forma mais barata de customizar o comportamento de um LLM?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Prompting: instruções, exemplos e system prompt, sem retreinar nada.

</details>

## Card 04

**Pergunta:** Quando prompting sozinho deixa de ser suficiente?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando o modelo precisa de conhecimento externo atualizado que não cabe ou não deveria ficar fixo no prompt — aí entra RAG.

</details>

## Card 05

**Pergunta:** Quando faz sentido considerar fine-tuning?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando o requisito é um domínio ou estilo muito específico, em grande volume, e prompting e RAG já não bastam.

</details>

## Card 06

**Pergunta:** O que é um prompt overfitted?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um prompt ajustado até funcionar perfeitamente nos exemplos testados, mas que falha em variações do mesmo problema.

</details>

## Card 07

**Pergunta:** Como testar se um prompt generaliza?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Testando com variações do input, não apenas com o exemplo que motivou sua escrita.

</details>

## Card 08

**Pergunta:** Qual a ordem recomendada de investigação para customizar comportamento?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Prompting primeiro, RAG depois, fine-tuning por último.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
