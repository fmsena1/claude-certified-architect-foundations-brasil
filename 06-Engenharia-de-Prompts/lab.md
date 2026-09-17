# Lab — Módulo 06: Engenharia de Prompts

## Reescrevendo um prompt ambíguo em um contrato de comportamento

Este micro-lab treina a prática de pegar um prompt vago e reescrevê-lo com estrutura, delimitação clara e regra de exceção.

## Pré-requisitos

- Ter lido o README do módulo.
- Acesso a qualquer interface de chat com Claude (Claude.ai ou Console) ou à API, para testar as versões do prompt.
- 20 a 30 minutos.

## Passo a passo

1. Escolha uma tarefa repetitiva do seu contexto (classificar um texto, resumir uma mensagem, extrair um dado) e escreva um primeiro prompt de forma solta, sem se preocupar em estruturar.
2. Rode esse prompt duas ou três vezes com entradas parecidas e observe se o formato ou o conteúdo da resposta varia entre as execuções.
3. Reescreva o prompt separando claramente instrução, contexto e dado de entrada com XML tags, e defina explicitamente o formato de saída esperado.
4. Adicione um ou dois exemplos de few-shot mostrando o padrão exato de resposta esperado.
5. Inclua uma regra explícita de exceção: o que o modelo deve responder quando a entrada não se encaixa no padrão esperado ou falta informação.
6. Rode a versão reescrita com as mesmas entradas do passo 2 e compare a consistência do resultado antes e depois.

## O que observar

- A versão solta tende a variar mais em formato de saída entre execuções do que a versão estruturada.
- Exemplos de few-shot costumam reduzir variação de formato mais do que apenas descrever o formato em texto.
- A regra de exceção só mostra seu valor quando você testa deliberadamente uma entrada fora do padrão esperado.

## Custos e limpeza

- Este lab envolve poucas chamadas de API; o custo de tokens é baixo, mas ainda existe.
- Se estiver usando a API diretamente, limite `max_tokens` durante os testes para evitar respostas mais longas que o necessário.
- Não é preciso manter nenhum recurso ativo após o lab; as chamadas de teste não deixam custo recorrente.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
