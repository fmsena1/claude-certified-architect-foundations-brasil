# Flashcards - Dados, RAG e Embeddings

## Card 01

**Pergunta:** Quando contexto longo costuma bastar, sem precisar de RAG?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando o volume total de dados é pequeno, estável e cabe confortavelmente na janela de contexto do modelo.

</details>

## Card 02

**Pergunta:** Quais sinais indicam que RAG é necessário?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Volume de dados grande demais para caber em contexto, dados que mudam com frequência, ou só uma fração pequena e variável sendo relevante por pergunta.

</details>

## Card 03

**Pergunta:** O que é um embedding?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Uma representação vetorial de um texto, construída de forma que textos com significado semelhante fiquem próximos nesse espaço.

</details>

## Card 04

**Pergunta:** Qual a diferença entre busca semântica e busca por palavra-chave?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Busca semântica compara significado usando embeddings; busca por palavra-chave procura correspondência literal de termos.

</details>

## Card 05

**Pergunta:** O que é grounding numa resposta gerada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A prática de apoiar a resposta explicitamente nos trechos recuperados, em vez de depender só do conhecimento paramétrico do modelo.

</details>

## Card 06

**Pergunta:** Por que pedir citação de fonte na resposta de um sistema de RAG?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque isso permite auditar se a resposta realmente reflete os documentos fornecidos, reduzindo o risco de uma resposta plausível mas não sustentada pelos dados.

</details>

## Card 07

**Pergunta:** Por que um índice de RAG precisa de governança própria?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque é uma cópia ou derivação dos dados originais, e sem controle de acesso próprio pode expor dado sensível além do que a fonte original permitiria.

</details>

## Card 08

**Pergunta:** Ao diagnosticar uma resposta ruim de um sistema de RAG, o que deve ser verificado separadamente?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Se a etapa de recuperação trouxe os trechos relevantes, e se a etapa de geração usou bem esses trechos — o erro pode estar em qualquer uma das duas.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
