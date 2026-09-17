# Flashcards - Deploy Enterprise (API direta, Bedrock, Vertex AI, Microsoft Foundry)

## Card 01

**Pergunta:** Quais são os quatro canais de acesso ao modelo Claude cobertos neste módulo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
API direta da Anthropic, Amazon Bedrock, Google Vertex AI e Microsoft Foundry.

</details>

## Card 02

**Pergunta:** Qual é o critério principal para escolher entre esses canais?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Onde a organização já tem sua fronteira de compliance, governança de nuvem e procurement estabelecidos — não uma diferença técnica no modelo em si.

</details>

## Card 03

**Pergunta:** Por que uma empresa já operando em AWS tende a preferir Amazon Bedrock?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque o tráfego do Claude fica dentro da mesma conta, região e fronteira de controle de identidade e rede que a empresa já usa e já auditou na AWS.

</details>

## Card 04

**Pergunta:** Todo recurso novo do Claude chega ao mesmo tempo em todos os canais?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. Um recurso lançado na API direta pode demorar a chegar, ou não estar disponível, em um canal de nuvem parceira.

</details>

## Card 05

**Pergunta:** Quem define preço e SLA do Claude quando acessado via um canal de nuvem parceira?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O provedor de nuvem parceiro (AWS, Google Cloud ou Microsoft), não diretamente a Anthropic.

</details>

## Card 06

**Pergunta:** O que muda, na prática, entre chamar o Claude pela API direta ou por um canal de nuvem parceira?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
A forma de autenticação, quem fatura o uso, em qual identidade/região de nuvem o tráfego é registrado e, em alguns canais, o formato do identificador do modelo.

</details>

## Card 07

**Pergunta:** Quando a API direta costuma ser a escolha mais adequada?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando a organização não tem um compromisso de nuvem dominante, ou quando o recurso necessário só está disponível na API direta.

</details>

## Card 08

**Pergunta:** O que "residência de dados" significa na escolha de canal de acesso ao Claude?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Que o tráfego de inferência fica dentro da região e conta de nuvem escolhidas, herdando os controles de residência, criptografia e auditoria que a organização já aplica naquela nuvem.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
