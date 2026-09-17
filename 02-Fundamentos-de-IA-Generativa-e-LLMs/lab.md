# Lab — Módulo 02: Fundamentos de IA Generativa e LLMs

## Sentindo o efeito de tokens e temperatura

Este micro-lab ajuda a internalizar, na prática, dois conceitos abstratos: contagem de tokens e efeito da temperatura.

## Pré-requisitos

- Ter lido o README do módulo.
- Acesso a Claude.ai ou a um contador de tokens público (verifique a opção mais atual em [links.md](./links.md)).
- 20 a 30 minutos.

## Passo a passo

1. Escreva uma frase comum em português e outra com termos técnicos raros (nomes próprios, siglas, palavras estrangeiras).
2. Se tiver acesso a um contador de tokens, compare quantos tokens cada frase gera e observe que a frase técnica costuma gerar mais tokens por palavra.
3. Envie a mesma pergunta objetiva para Claude.ai três vezes seguidas e compare as respostas.
4. Repita o mesmo teste imaginando um cenário de temperatura alta (peça explicitamente por respostas "bem diferentes e criativas entre si", já que o produto de consumo não expõe o parâmetro diretamente) e observe a diferença de variação.
5. Anote em que tipo de tarefa você preferiria cada comportamento: mais consistente ou mais variado.

## O que observar

- Palavras raras ou técnicas tendem a consumir mais tokens do que palavras comuns.
- Perguntas objetivas tendem a gerar respostas mais parecidas entre execuções do que pedidos abertos e criativos.
- A escolha de comportamento (consistente vs variado) depende do tipo de tarefa, não existe configuração universalmente certa.

## Custos e limpeza

- Se usar a API para este lab, monitore a quantidade de tokens usada nas chamadas de teste.
- Não é necessário nenhum recurso de infraestrutura persistente para este exercício.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
