# Lab — Módulo 11: Multimodalidade (Visão e Documentos)

## Extração estruturada a partir de uma imagem ou PDF

Este micro-lab pratica o envio de um documento real (imagem ou PDF) para a Claude e a comparação entre pedir descrição livre e pedir extração estruturada.

## Pré-requisitos

- Acesso à Claude API (ou ao Claude.ai/Console, se preferir testar sem código) com uma chave/API configurada.
- Um documento de exemplo: uma foto de recibo, uma nota fiscal em PDF, ou um print de tela com uma tabela simples.
- 20 a 30 minutos.

## Passo a passo

1. Escolha um documento de exemplo com pelo menos 4 ou 5 campos de informação identificáveis (ex.: fornecedor, valor, data, itens de uma nota fiscal).
2. Envie o documento numa primeira chamada pedindo apenas "descreva o conteúdo deste documento" e observe o formato da resposta.
3. Envie o mesmo documento numa segunda chamada, agora pedindo explicitamente um JSON com os campos que você quer extrair, nomeados um a um.
4. Compare as duas respostas: qual delas você conseguiria usar diretamente em outro sistema sem reprocessamento manual?
5. Se o documento tiver texto pequeno ou tabela densa, teste enviar a mesma imagem em uma resolução reduzida e veja se algum campo passa a ser lido incorretamente.
6. Anote quais campos, se algum, o modelo leu errado ou não encontrou, e se isso muda dependendo da resolução enviada.

## O que observar

- A resposta de extração estruturada tende a ser diretamente utilizável por código; a descrição livre normalmente não é.
- Reduzir a resolução de uma imagem com texto pequeno pode introduzir erros de leitura que não apareciam na resolução original.
- Erros de leitura tendem a se concentrar em números (fáceis de confundir dígito por dígito) mais do que em texto corrido.

## Custos e limpeza

- Cada chamada com imagem ou PDF consome tokens proporcionais ao tamanho/resolução do documento enviado — evite reenviar o mesmo arquivo em loop durante o teste.
- Se estiver usando uma chave de API paga, prefira documentos pequenos (uma página, uma imagem) para manter o custo do lab desprezível.
- Não é necessário nenhum recurso de nuvem persistente para este lab; nada precisa ser desligado ou limpo depois.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
