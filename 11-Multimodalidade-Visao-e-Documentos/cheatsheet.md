# Cheatsheet — Módulo 11: Multimodalidade (Visão e Documentos)

> Revisão rápida dos limites e boas práticas de leitura de imagem e PDF. Valores exatos de tamanho, páginas e resolução mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Bloco `image` | Imagem entra na mensagem como bloco de conteúdo, junto com texto | Achar que precisa de um serviço de visão separado |
| Bloco `document` | PDF entra como bloco de conteúdo; é lido como texto + imagem por página | Assumir que um PDF de qualquer tamanho cabe numa única chamada |
| Resolução da imagem | Resolução mais alta = mais fidelidade, mas também mais tokens | Enviar sempre em resolução máxima sem necessidade real |
| Tokens por imagem | Proporcionais à área em pixels da imagem enviada | Ignorar esse custo ao dimensionar um pipeline de alto volume |
| Limite de páginas do PDF | Existe um teto de páginas processadas por chamada | Tentar enviar um documento de centenas de páginas de uma vez |
| Files API | Permite subir o arquivo uma vez e reusar por `file_id` | Reenviar o mesmo binário em base64 em toda chamada |
| Citações | Amarram um trecho da resposta a um local exato no documento | Confiar em um número/campo extraído sem checar a citação em caso crítico |
| Extração estruturada | Pedir schema/JSON definido dá saída mais utilizável que descrição livre | Pedir "descreva o documento" quando o objetivo é um dado estruturado |

## Regras práticas

- Redimensione a imagem para a menor resolução que ainda preserva legibilidade do conteúdo relevante.
- Peça sempre um formato de saída definido (JSON com campos nomeados) quando o destino for outro sistema.
- Para PDFs longos, avalie processar em lotes de páginas em vez de enviar o documento inteiro de uma vez.
- Use a Files API para documentos reutilizados em múltiplas chamadas.
- Ative citações quando precisar rastrear de onde veio cada dado extraído.
- Valide a saída estruturada contra um schema antes de usá-la em qualquer sistema downstream.

## Gatilhos de memorização

- Imagem e PDF são "só mais um bloco de conteúdo" — não um serviço à parte.
- Resolução alta = tokens altos; escolha a resolução pela tarefa, não por padrão.
- Documento grande demais para uma chamada = divida em lotes de páginas.
- Extração ≠ descrição: peça schema quando o destino é um sistema, não uma pessoa lendo o texto.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
