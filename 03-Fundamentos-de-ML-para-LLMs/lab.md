# Lab — Módulo 03: Fundamentos de ML para LLMs

## Testando um prompt além do caso feliz

Este micro-lab treina a detecção de overfitting de prompt antes de aprofundar engenharia de prompts no módulo 06.

## Pré-requisitos

- Ter lido o README do módulo.
- Acesso a Claude.ai ou à API.
- 20 a 30 minutos.

## Passo a passo

1. Escreva um prompt para resolver uma tarefa simples e específica (ex.: extrair data e valor de um texto de nota fiscal).
2. Teste o prompt com um exemplo "perfeito", parecido com o que você tinha em mente ao escrevê-lo.
3. Teste o mesmo prompt com 3 variações realistas: formato ligeiramente diferente, informação faltando, ordem das informações trocada.
4. Anote em quais variações o prompt falhou ou deu resposta inconsistente.
5. Ajuste o prompt para cobrir as falhas encontradas e teste novamente as mesmas variações.

## O que observar

- Um prompt que só funciona no exemplo original é um prompt overfitted, mesmo que pareça "pronto" à primeira vista.
- Pequenas variações de formato costumam expor mais falhas do que se espera antes de testar.
- Ajustar o prompt para cobrir casos reais é mais barato do que descobrir a falha em produção.

## Custos e limpeza

- Nenhum custo obrigatório além de chamadas de teste, se usar a API.
- Não é necessário nenhum recurso persistente para este exercício.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
