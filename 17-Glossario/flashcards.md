# Flashcards - Glossário

## Card 01

**Pergunta:** O que é um token, e por que ele importa mais do que "palavra" ao medir custo de uma chamada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
É a unidade mínima de texto processada pelo modelo. Custo e limite de contexto são medidos em tokens, não em palavras ou caracteres, porque uma palavra pode virar um ou vários tokens dependendo do tokenizador.

</details>

## Card 02

**Pergunta:** O que diferencia RAG de fine-tuning como formas de customizar o comportamento de um modelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
RAG injeta conhecimento externo e atualizado no contexto de cada chamada, sem alterar o modelo. Fine-tuning ajusta os próprios pesos do modelo para um domínio ou estilo específico, sendo mais caro e menos flexível.

</details>

## Card 03

**Pergunta:** O que é o Model Context Protocol (MCP)?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um padrão aberto que separa quem expõe uma ferramenta ou fonte de contexto de quem a consome, evitando que cada aplicação precise construir sua própria integração proprietária para os mesmos dados ou ferramentas.

</details>

## Card 04

**Pergunta:** Qual é a diferença entre um hook e uma skill no Claude Code?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Um hook é automação determinística, garantida pelo ambiente de execução, que roda sempre que a condição é atingida. Uma skill é um conjunto de instruções nomeado que depende do modelo decidir usá-la quando o contexto combina.

</details>

## Card 05

**Pergunta:** O que é prompt caching e onde ele traz o maior ganho?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
É o reaproveitamento de blocos estáveis de um prompt entre chamadas, reduzindo custo e latência. O maior ganho aparece em blocos grandes e estáveis reutilizados em muitas chamadas, como um system prompt extenso ou uma base de conhecimento fixa.

</details>

## Card 06

**Pergunta:** O que significa dizer que um prompt é overfitted?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Significa que o prompt foi ajustado repetidamente até funcionar perfeitamente nos exemplos usados para criá-lo, mas falha em variações ligeiramente diferentes do mesmo problema — não generaliza.

</details>

## Card 07

**Pergunta:** O que diferencia grounding de citação de fonte?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Grounding é a prática de apoiar a resposta gerada nos trechos recuperados, em vez de depender só do conhecimento do modelo. Citação de fonte vai além: aponta exatamente de qual documento ou trecho veio cada afirmação, permitindo auditoria.

</details>

## Card 08

**Pergunta:** Por que "canal de acesso" e "modelo" não deveriam ser tratados como sinônimos?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O canal de acesso (API direta, Amazon Bedrock, Google Vertex AI, Microsoft Foundry) é a forma de distribuição do modelo Claude. Ele muda autenticação, billing e residência de dados, mas o modelo por trás da chamada é o mesmo.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
