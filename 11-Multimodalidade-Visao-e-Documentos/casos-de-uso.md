# Casos de Uso — Módulo 11: Multimodalidade (Visão e Documentos)

## Caso 1 — Extração estruturada de notas fiscais e recibos

**Cenário:** Uma equipe financeira recebe notas fiscais e recibos digitalizados em formatos variados (PDF nativo, foto de celular, scanner) e precisa transformar cada um em um registro estruturado (fornecedor, valor, data, itens) para alimentar um sistema de contas a pagar.

**Arquitetura sugerida:** Envio direto da imagem ou do PDF como bloco de conteúdo numa chamada à Messages API, com instrução pedindo extração em JSON com schema fixo de campos, sem etapa intermediária de OCR tradicional.

**Por que essa escolha faz sentido:** O volume é moderado e a qualidade de digitalização é geralmente razoável; ler o documento diretamente com o modelo elimina a etapa de parsing manual entre "texto bruto do OCR" e "campos estruturados", já que o modelo entende contexto (esta linha é o total, esta é a data de vencimento) e não só forma de caractere.

**Risco/erro associado:** Aceitar a saída estruturada sem validação e gravá-la direto no sistema financeiro — um campo mal lido em um documento de baixa qualidade pode gerar um valor incorreto sem que ninguém perceba antes de a validação de schema (e, idealmente, uma checagem humana em casos de valor alto) barrar o erro.

## Caso 2 — Leitura de gráficos e dashboards em relatórios

**Cenário:** Um analista recebe relatórios em PDF com gráficos (barras, linhas, pizza) e precisa que a Claude descreva tendências e responda perguntas específicas sobre os valores mostrados nos gráficos, sem ter acesso aos dados brutos que geraram o gráfico.

**Arquitetura sugerida:** Envio do PDF ou da imagem do gráfico como bloco de conteúdo, com perguntas diretas sobre tendência, comparação entre categorias ou valor aproximado de um ponto específico, em vez de pedir uma descrição genérica do documento inteiro.

**Por que essa escolha faz sentido:** A Claude consegue interpretar elementos visuais de um gráfico (eixos, legendas, proporção entre barras) mesmo sem acesso à tabela de dados original, o que evita depender de um pipeline separado de extração de dados de gráfico antes de poder fazer qualquer análise.

**Risco/erro associado:** Tratar um valor lido visualmente de um gráfico como uma medição exata — leitura visual de gráfico é uma estimativa, não um valor de precisão numérica, e deve ser comunicada como tal quando a decisão depender desse número.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
