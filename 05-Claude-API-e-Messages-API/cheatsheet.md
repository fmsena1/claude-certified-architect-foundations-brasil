# Cheatsheet — Módulo 05: Claude API e Messages API

> Revisão rápida da estrutura de request/response da Messages API. Nomes de modelo, versões de API e limites mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Endpoint único | Tudo passa por `POST /v1/messages` | Não existe endpoint separado por funcionalidade |
| Autenticação | Chave de API em cabeçalho HTTP, mais cabeçalho de versão da API | Nunca hardcodar a chave no código-fonte |
| `messages` | Lista de turnos com `role` (`user`/`assistant`) e `content` | API não guarda histórico; o cliente reenvia tudo a cada chamada |
| `system` | Instrução persistente de comportamento, fora de `messages` | Não confundir com uma mensagem de usuário |
| `max_tokens` | Limite máximo de tokens da resposta | Não garante que a resposta terá esse tamanho; só limita o teto |
| `stop_sequences` | Strings que, se geradas, encerram a resposta | Precisa ser exato; não é busca por padrão/regex |
| Streaming | `stream: true` entrega a resposta em eventos incrementais | Exige tratar formato de evento diferente da resposta padrão |
| SDKs oficiais | Encapsulam autenticação, retries e tipos por linguagem | Contrato da API é o mesmo; SDK não adiciona funcionalidade nova por si só |

## Regras práticas

- Sempre envie `model`, `messages` e `max_tokens` — são os campos mínimos de uma requisição válida.
- Use `system` para papel e restrições de comportamento; use `messages` só para o conteúdo da conversa.
- Ative streaming quando a resposta alimenta uma interface interativa; deixe desligado em processamento em lote.
- Verifique `stop_reason` na resposta antes de assumir que a geração terminou como esperado.
- Prefira o SDK oficial da linguagem do projeto a reimplementar chamadas HTTP manuais.

## Gatilhos de memorização

- Um endpoint, muitos parâmetros — não um endpoint por funcionalidade.
- `system` = comportamento; `messages` = conversa.
- `max_tokens` é teto, não garantia de tamanho.
- Sem streaming: espera tudo. Com streaming: recebe aos poucos.
- SDK muda a forma de chamar, nunca o contrato da API.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
