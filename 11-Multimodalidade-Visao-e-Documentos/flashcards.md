# Flashcards - Multimodalidade (Visão e Documentos)

## Card 01

**Pergunta:** Como uma imagem entra numa requisição da Messages API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Como um bloco de conteúdo dentro da mensagem de usuário, ao lado de blocos de texto — não como um anexo processado por um serviço separado.

</details>

## Card 02

**Pergunta:** Por que uma imagem em resolução mais alta custa mais numa chamada à API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque o número de tokens gerados por uma imagem é proporcional à sua área em pixels; resolução mais alta gera mais tokens, mesmo que o conteúdo relevante caiba numa área pequena.

</details>

## Card 03

**Pergunta:** O que fazer quando um PDF tem páginas demais para uma única chamada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Dividir o processamento em lotes de páginas, em vez de tentar enviar o documento inteiro de uma só vez.

</details>

## Card 04

**Pergunta:** Qual a vantagem da Files API sobre enviar o documento em base64 a cada chamada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O arquivo é enviado uma única vez e reutilizado por `file_id` em várias requisições, evitando reenviar o binário completo repetidamente.

</details>

## Card 05

**Pergunta:** Para que servem as citações ao processar um documento?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Para amarrar um trecho específico da resposta a uma localização exata no documento de origem, permitindo rastrear de onde veio cada dado extraído.

</details>

## Card 06

**Pergunta:** Qual a diferença prática entre pedir "descreva este documento" e pedir extração estruturada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Descrição livre gera texto para leitura humana; extração estruturada pede um schema/JSON definido, gerando um dado já pronto para ser consumido por outro sistema.

</details>

## Card 07

**Pergunta:** Quando ainda faz sentido considerar um pipeline de OCR tradicional em vez de ler o documento direto com a Claude?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Em documentos de qualidade muito ruim (manuscritos, digitalizações muito ruidosas) ou em volumes muito altos onde o custo por página é crítico.

</details>

## Card 08

**Pergunta:** O que se deve fazer antes de usar a saída de uma extração de documento em outro sistema?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Validar a saída contra o schema esperado — tratar a resposta do modelo como entrada não confiável até essa checagem.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
