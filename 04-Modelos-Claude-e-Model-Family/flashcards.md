# Flashcards - Modelos Claude e Model Family

## Card 01

**Pergunta:** Por que a Anthropic mantém vários modelos em paralelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque nem todo problema exige a maior capacidade disponível; modelos diferentes cobrem perfis diferentes de custo, latência e qualidade.

</details>

## Card 02

**Pergunta:** O que costuma subir junto com a capacidade de um modelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Custo e latência por token processado.

</details>

## Card 03

**Pergunta:** Uma aplicação precisa usar um único modelo para tudo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. É comum rotear tarefas diferentes para modelos diferentes dentro da mesma aplicação.

</details>

## Card 04

**Pergunta:** Qual modelo escolher quando não há dado suficiente para decidir?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O modelo de equilíbrio da linha, ajustando depois com base em métricas reais de produção.

</details>

## Card 05

**Pergunta:** Por que produção deve fixar a versão de modelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Para evitar que uma atualização de modelo mude o comportamento da aplicação sem aviso.

</details>

## Card 06

**Pergunta:** Como deveria ser tratada uma migração de versão de modelo?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Como uma mudança deliberada, testada com o conjunto de avaliação da aplicação antes de ir para produção.

</details>

## Card 07

**Pergunta:** "Modelo mais capaz" é sempre a escolha certa?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. A escolha certa é o modelo bom o suficiente, rápido o suficiente e barato o suficiente para a tarefa específica.

</details>

## Card 08

**Pergunta:** Por que este módulo evita fixar números de preço ou benchmark?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque esses valores mudam com o tempo; a fonte confiável é sempre a documentação oficial atualizada.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
