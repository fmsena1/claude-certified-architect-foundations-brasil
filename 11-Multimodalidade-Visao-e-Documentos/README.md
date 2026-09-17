# Módulo 11 — Multimodalidade (Visão e Documentos)

Este módulo cobre como a Claude lê imagem e PDF diretamente, sem depender de um pipeline externo de OCR para a maioria dos casos. O ponto central não é decorar um número fixo de limite — que muda com o tempo — mas entender os eixos que definem o que é viável: resolução, contagem de páginas, tokens gerados por imagem e a diferença entre pedir "leia o documento" e pedir "extraia estes campos em um formato específico".

## Objetivo

Ao final deste módulo, você deve conseguir explicar como a Claude processa imagem e PDF como blocos de conteúdo da Messages API, identificar os limites que afetam uma arquitetura de extração de documento (tamanho de requisição, páginas, resolução, tokens por imagem) e decidir quando um pipeline de OCR assistido por modelo é suficiente e quando exige um passo de pré-processamento.

## Onde este tema apareceria numa avaliação

- Explicar como uma imagem ou um PDF entra numa requisição da Messages API como bloco de conteúdo.
- Reconhecer os fatores que limitam um caso de uso de extração de documento (tamanho de arquivo, número de páginas, resolução da imagem).
- Explicar por que resolução mais alta custa mais tokens, e quando isso compensa.
- Diferenciar "pedir para o modelo descrever a imagem" de "pedir extração estruturada com schema definido".
- Reconhecer cenários em que multimodalidade nativa substitui um pipeline de OCR tradicional, e cenários em que não substitui.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Recursos e limites principais

| Recurso/Limite | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Bloco de conteúdo `image` | Envia uma imagem (base64 ou referência de arquivo) dentro de uma mensagem | Faz parte da Messages API coberta no módulo 05 |
| Bloco de conteúdo `document` | Envia um PDF (base64 ou referência de arquivo) dentro de uma mensagem | Mesma API de mensagens; PDF é tratado como texto + imagem por página internamente |
| Files API | Faz upload de um arquivo uma vez e reutiliza por `file_id` em várias requisições | Evita reenviar o mesmo binário em base64 a cada chamada, reduzindo tokens de rede e latência |
| Citações (`citations`) | Amarra um trecho da resposta a uma localização exata no documento de origem | Reforça o padrão de "grounding" tratado no módulo 10 (RAG) |
| Resolução da imagem | Define a fidelidade visual e o número de tokens gerados pela imagem | Impacta diretamente o custo tratado no módulo 15 |

> Limites exatos de tamanho de arquivo, número de páginas e resolução mudam entre versões de modelo e evoluem com o tempo. Trate os números deste módulo como ordem de grandeza para raciocínio arquitetural, não como valor fixo — confirme sempre a documentação oficial em [links.md](./links.md) antes de dimensionar um sistema em produção.

## Conceitos essenciais

### Como o modelo processa imagem e documento

Uma imagem ou um PDF entram na conversa como mais um bloco de conteúdo dentro de uma mensagem de usuário, ao lado de texto — não como um anexo separado processado por um serviço externo. Internamente, um PDF é tratado como uma sequência de páginas, cada uma virando conteúdo visual e textual que o modelo pode ler junto. Isso significa que o mesmo modelo que responde perguntas em texto também consegue localizar uma cláusula específica num contrato escaneado, ler um valor numa tabela de imagem, ou descrever um gráfico — sem um serviço de visão computacional separado.

### Limites de tamanho, páginas e resolução

Toda arquitetura de leitura de documento esbarra em três limites: o tamanho total da requisição (o volume de bytes que pode ser enviado de uma vez), o número de páginas de um PDF que o modelo processa numa única chamada, e a resolução máxima de imagem que o modelo aceita antes de haver perda de detalhe ou necessidade de redimensionamento. Modelos mais recentes tendem a aceitar resolução mais alta, o que melhora a leitura de documentos densos (letra miúda, tabelas complexas) mas também aumenta o custo em tokens. Documentos muito longos (dezenas ou centenas de páginas) podem exigir dividir o PDF em lotes de páginas em vez de enviar o arquivo inteiro numa única requisição.

### Tokens por imagem e impacto no custo

Uma imagem não é "gratuita" em tokens: ela é convertida internamente em um número de tokens proporcional à sua área em pixels — quanto maior a resolução enviada, mais tokens a imagem consome, mesmo que o conteúdo visual relevante caiba numa área pequena da imagem. Isso tem uma consequência prática direta: enviar uma imagem em resolução mais alta do que a tarefa exige encarece a chamada sem necessariamente melhorar a qualidade da resposta. Redimensionar a imagem para a resolução mínima que ainda preserva a legibilidade do conteúdo é uma otimização de custo comum antes de decidir mudar de modelo.

### Extração de documento vs OCR tradicional

Um pipeline de OCR tradicional converte pixels em texto bruto, sem entender estrutura — a etapa seguinte de organizar esse texto em campos (nome, valor, data) é sempre manual ou é feita por outra ferramenta. Pedir para a Claude ler a imagem ou o PDF permite pular direto para o resultado estruturado: o modelo lê o documento e já devolve os campos pedidos no formato definido (JSON, por exemplo), porque entende contexto (esta linha é um total, esta é uma data de vencimento) e não só forma de caractere. Isso não elimina completamente a necessidade de OCR tradicional em todos os casos — documentos manuscritos muito ruins, digitalizações de baixa qualidade extrema ou volumes muito altos com custo por página crítico ainda podem justificar um pipeline dedicado antes ou em paralelo.

## Exemplo prático

Cenário: uma nota fiscal digitalizada como imagem precisa virar um registro estruturado (fornecedor, valor total, data de emissão, itens) sem um pipeline de OCR separado.

```
Mensagem do usuário:
  bloco de conteúdo: imagem (nota fiscal digitalizada)
  bloco de conteúdo: texto
    "Extraia desta nota fiscal os campos fornecedor, valor_total,
     data_emissao e itens (lista de nome e valor). Responda apenas
     com o JSON no formato combinado, sem texto adicional."

Resposta do modelo:
  {
    "fornecedor": "...",
    "valor_total": "...",
    "data_emissao": "...",
    "itens": [
      { "nome": "...", "valor": "..." }
    ]
  }
```

## Raciocínio arquitetural

### Multimodalidade nativa vs pipeline de OCR externo

Quando o volume é baixo ou médio e o documento tem qualidade de digitalização razoável, ler a imagem ou o PDF diretamente com a Claude costuma ser mais simples de manter do que um pipeline com um serviço de OCR dedicado seguido de um passo de parsing separado — menos peças móveis, menos pontos de falha entre etapas. Quando o volume é muito alto e o custo por página é crítico, ou quando o documento é de qualidade muito ruim (manuscrito, baixa resolução, muito ruído visual), vale avaliar um pipeline com pré-processamento de imagem (limpeza, binarização, correção de rotação) antes de enviar ao modelo, ou mesmo um OCR especializado como primeira etapa.

### Quando reduzir a resolução antes de enviar

Reduzir a resolução da imagem antes de enviar faz sentido quando o conteúdo relevante (texto, números, formas) continua legível em resolução menor — por exemplo, um print de tela com texto grande. Não reduzir faz sentido quando o documento tem letra miúda, tabelas densas ou detalhes finos que dependem de resolução alta para não virar erro de leitura silencioso. A decisão é sempre por tarefa: comece pela resolução nativa em um teste piloto, meça se o modelo erra campos por perda de detalhe, e só então reduza deliberadamente para controlar custo.

## Boas práticas

- Peça extração estruturada (schema/JSON definido) em vez de descrição livre, quando o objetivo final é um dado utilizável por sistema.
- Redimensione imagens para a resolução mínima que preserva a legibilidade do conteúdo relevante antes de enviar, para controlar tokens e custo.
- Para PDFs longos, avalie dividir em lotes de páginas em vez de depender de enviar o documento inteiro numa única chamada.
- Use a Files API quando o mesmo documento for referenciado em várias chamadas, em vez de reenviar o binário em base64 repetidamente.
- Ative citações quando a resposta precisar apontar exatamente de onde no documento veio cada informação extraída.
- Valide a saída estruturada antes de usar em sistema downstream — trate a resposta do modelo como entrada não confiável até validar contra o schema esperado.

## Erros comuns

- Enviar imagens em resolução máxima por padrão, sem avaliar se a tarefa realmente precisa dessa fidelidade.
- Pedir "descreva este documento" quando o objetivo real é extrair campos específicos em formato estruturado.
- Assumir que um PDF de centenas de páginas pode ser processado inteiro numa única chamada sem checar limite de páginas e tamanho de requisição.
- Tratar a saída de extração como já validada, sem checagem de schema antes de gravar em outro sistema.
- Ignorar a diferença de custo entre resolução alta e baixa ao dimensionar um pipeline de alto volume.

## Resumo para revisão

- Imagem e PDF entram na Messages API como blocos de conteúdo, ao lado de texto, sem serviço de visão separado.
- Resolução mais alta gera mais tokens e mais custo — nem toda tarefa exige resolução máxima.
- PDFs têm limite de tamanho de requisição e de número de páginas por chamada; documentos muito longos podem exigir lotes.
- Extração estruturada (schema definido) tende a ser mais útil que descrição livre quando o destino final é outro sistema.
- Multimodalidade nativa substitui boa parte dos pipelines de OCR tradicional, mas não elimina a necessidade de pré-processamento em casos extremos de qualidade ou volume.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar extração de dados de um documento real.
- Continue para [Módulo 12 — Gerenciamento de Contexto e Prompt Caching](../12-Gerenciamento-de-Contexto-e-Prompt-Caching/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
