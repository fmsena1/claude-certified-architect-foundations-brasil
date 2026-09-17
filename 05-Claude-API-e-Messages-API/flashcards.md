# Flashcards - Claude API e Messages API

## Card 01

**Pergunta:** Qual é o endpoint único usado para todas as chamadas de geração de texto na Claude API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
`POST /v1/messages`, a Messages API. Tool use, visão e controle de formato de saída são parâmetros desse mesmo endpoint, não endpoints separados.

</details>

## Card 02

**Pergunta:** Como a Claude API autentica uma requisição?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Por uma chave de API enviada em um cabeçalho HTTP, junto com um cabeçalho de versão da API que fixa o contrato de request/response esperado.

</details>

## Card 03

**Pergunta:** Qual a diferença entre o campo `system` e uma mensagem com `role: "user"`?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
`system` define comportamento e contexto persistente para toda a conversa; mensagens com `role: "user"` carregam o conteúdo específico de cada turno da conversa.

</details>

## Card 04

**Pergunta:** A Claude API guarda o histórico de uma conversa entre chamadas?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. O cliente é responsável por reenviar todo o histórico relevante em `messages` a cada nova requisição.

</details>

## Card 05

**Pergunta:** O que `max_tokens` garante sobre o tamanho da resposta?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Apenas um teto máximo de tokens gerados. Não garante que a resposta terá esse tamanho — o modelo pode parar antes por outros motivos.

</details>

## Card 06

**Pergunta:** Quando ativar streaming em uma chamada à Messages API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando a resposta alimenta uma interface interativa (ex.: chat) ou quando o tamanho esperado da resposta é grande o suficiente para justificar reduzir a latência percebida.

</details>

## Card 07

**Pergunta:** Um SDK oficial muda o contrato de request/response da Claude API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. O SDK encapsula autenticação, serialização, tipos e retries, mas o contrato da API por trás é o mesmo de uma chamada HTTP direta.

</details>

## Card 08

**Pergunta:** Para que serve `stop_sequences`?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Definir strings exatas que, se geradas pelo modelo, encerram a resposta imediatamente — útil para impedir que o modelo continue além do ponto desejado.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
