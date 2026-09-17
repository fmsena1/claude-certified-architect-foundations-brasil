# Lab — Módulo 05: Claude API e Messages API

## Chamada real à Messages API via cURL

Este lab faz uma chamada real e mínima à Claude API, para observar a estrutura de request/response na prática, incluindo controle de output com `max_tokens` e `stop_sequences`.

## Pré-requisitos

- Uma chave de API válida da Anthropic, criada no [Console](https://console.anthropic.com/).
- `curl` instalado (ou um SDK oficial da linguagem de sua preferência, como alternativa ao passo 3).
- O identificador do modelo atual, confirmado em [docs.claude.com](https://docs.claude.com/) — a lista de modelos disponíveis muda com o tempo.
- 20 a 30 minutos.

## Passo a passo

1. Exporte a chave de API como variável de ambiente, sem colar o valor em nenhum arquivo versionado:

```
export ANTHROPIC_API_KEY="sua-chave-aqui"
```

2. Confirme, na documentação oficial, o identificador do modelo que você vai usar e o valor atual do cabeçalho de versão da API.

3. Faça a chamada mínima à Messages API:

```
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 200,
    "system": "Responda sempre em português, em no máximo duas frases.",
    "stop_sequences": ["Pergunta:"],
    "messages": [
      {"role": "user", "content": "O que é a Messages API da Claude?"}
    ]
  }'
```

4. Leia a resposta e localize os campos `content`, `stop_reason` e `usage`.

5. Repita a chamada trocando `max_tokens` para um valor bem baixo (ex.: `20`) e observe como `stop_reason` muda para indicar corte por limite de tokens.

6. Repita novamente com `"stream": true` adicionado ao corpo da requisição e observe que a resposta chega em múltiplos eventos incrementais, em vez de um único bloco de texto.

## O que observar

- O campo `model` na resposta confirma qual modelo efetivamente processou a chamada.
- `stop_reason` muda entre "terminou naturalmente" e "cortado por `max_tokens`" dependendo do valor usado no passo 5.
- `usage` mostra a contagem de tokens de entrada e saída consumidos por cada chamada.
- Com `stream: true`, a resposta chega como uma sequência de eventos, não como um único corpo JSON.

## Custos e limpeza

- Cada chamada deste lab consome tokens reais e gera custo na sua conta da Anthropic, ainda que pequeno.
- Use `max_tokens` baixo durante os testes para limitar o custo de cada chamada.
- Não deixe a chave de API exportada em um terminal compartilhado; rode `unset ANTHROPIC_API_KEY` ao terminar o lab.
- Se a chave usada foi criada só para este exercício, revogue-a no Console após concluir o lab.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
