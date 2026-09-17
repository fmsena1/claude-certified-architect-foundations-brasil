# Módulo 10 — Dados, RAG e Embeddings

Este módulo cobre como levar dados externos até o Claude de forma confiável: quando basta colocar o conteúdo direto no contexto e quando é preciso montar um pipeline de recuperação (RAG). O ponto central não é a mecânica de um banco vetorial específico, mas o raciocínio de decisão — e a responsabilidade de governar os dados que entram nesse pipeline.

## Objetivo

Ao final deste módulo, você deve conseguir decidir entre contexto longo e RAG para um cenário dado, explicar o papel de embeddings e busca semântica num pipeline de recuperação, justificar por que grounding e citação de fonte importam em respostas geradas, e apontar os principais riscos de governança de dados usados em RAG.

## Onde este tema apareceria numa avaliação

- Decidir se um cenário de dados resolve com contexto longo ou exige RAG.
- Explicar o que é um embedding e por que ele viabiliza busca semântica (em vez de busca por palavra-chave).
- Justificar a importância de grounding e citação de fonte em respostas que afirmam fatos.
- Identificar riscos de governança quando dados sensíveis alimentam um índice de RAG.
- Reconhecer os sintomas de um pipeline de RAG mal ajustado (recuperação irrelevante, resposta sem base nos documentos).

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e recursos principais

| Conceito/Recurso | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Contexto longo | Alternativa a RAG quando o volume de dados cabe na janela de contexto | Aprofundado no módulo 12 (gerenciamento de contexto e caching) |
| RAG (Retrieval-Augmented Generation) | Pipeline que busca trechos relevantes antes de gerar a resposta | Depende de embeddings e de uma camada de busca semântica |
| Embeddings | Representação vetorial de texto usada para medir similaridade semântica | Base técnica da etapa de recuperação em qualquer pipeline de RAG |
| Grounding e citação de fonte | Prática de amarrar a resposta gerada aos documentos recuperados | Reduz alucinação e viabiliza auditoria da resposta |
| Governança de dados em RAG | Controle sobre o que entra no índice e quem pode recuperar o quê | Cruza com o módulo 13 (segurança, privacidade e IA responsável) |

## Conceitos essenciais

### Contexto longo vs. RAG

Nem todo problema de "dar dados ao Claude" exige um pipeline de recuperação. Se o volume total de documentos cabe confortavelmente na janela de contexto do modelo e não muda com frequência, colocar o conteúdo direto no prompt costuma ser mais simples, mais previsível e mais fácil de depurar do que montar um índice de busca. RAG se torna necessário quando o volume de dados excede o que é prático colocar em contexto a cada chamada, quando o conjunto de dados muda com frequência (e reprocessar tudo a cada chamada seria caro ou lento), ou quando só uma fração pequena e variável dos dados é relevante para cada pergunta.

### Embeddings e busca semântica

Um embedding é uma representação numérica de um texto, construída de forma que textos com significado semelhante fiquem próximos nesse espaço vetorial. Isso permite busca semântica: em vez de procurar documentos que contenham exatamente as palavras da pergunta, o sistema procura documentos cujo significado seja próximo do significado da pergunta. Essa é a peça técnica que viabiliza a etapa de "recuperação" em RAG — sem ela, a busca fica limitada a correspondência literal de termos.

### Grounding e citação de fonte

Grounding é a prática de fazer a resposta gerada se apoiar explicitamente nos trechos recuperados, em vez de depender só do conhecimento paramétrico do modelo. Pedir citação de fonte — apontar de qual documento ou trecho veio cada afirmação — não é só uma questão de estilo: é o que permite auditar se a resposta realmente reflete os dados fornecidos, e é o que reduz a chance de uma resposta plausível, mas não sustentada pelos documentos recuperados.

### Governança de dados usados em RAG

Um índice de RAG é, na prática, uma cópia (ou derivação) dos dados originais, geralmente com controle de acesso próprio. Isso levanta perguntas que não existem quando o dado nunca sai do sistema de origem: quem pode inserir conteúdo no índice, quem pode recuperar o quê, como um dado é removido do índice quando é removido da fonte, e se dados sensíveis (pessoais, confidenciais, sujeitos a regulação) deveriam entrar nesse índice sem tratamento adicional. Governar isso é parte do design do pipeline, não um detalhe operacional posterior.

## Exemplo prático

### Base de conhecimento de suporte com RAG

Uma aplicação de suporte ao cliente tem milhares de artigos de ajuda, atualizados diariamente por vários times. Colocar todos os artigos no contexto a cada pergunta seria inviável em custo e latência, então o fluxo passa por recuperação antes da geração.

```
pergunta do usuário
        |
        v
gerar embedding da pergunta
        |
        v
buscar trechos mais similares no índice vetorial
        |
        v
montar prompt com pergunta + trechos recuperados + instrução de citar fonte
        |
        v
Claude gera resposta com base nos trechos, citando o artigo de origem
```

## Raciocínio arquitetural

### Decidindo entre contexto longo e RAG

A pergunta inicial não é "qual tecnologia é mais moderna", mas "o volume e a variabilidade dos dados justificam a complexidade extra de um pipeline de recuperação". Um conjunto de dados pequeno, estável e que cabe no contexto favorece a solução mais simples: colocar tudo no prompt. Um conjunto de dados grande, que cresce, muda com frequência, ou onde só uma fração é relevante por pergunta, favorece RAG. Entre os dois, ainda existe a opção híbrida: parte fixa e pequena do contexto (instruções, políticas centrais) mais uma camada de RAG para o restante, variável e volumoso.

### Projetando governança desde o início do pipeline

Governança de dados em RAG não deveria ser resolvida depois que o índice já existe. Antes de indexar qualquer fonte, vale decidir explicitamente: quais dados podem entrar no índice, se há dado sensível que precisa de mascaramento ou exclusão antes da indexação, como o controle de acesso da fonte original se reflete (ou não) no índice, e qual o processo para remover ou atualizar um documento quando ele muda ou é revogado na origem. Tratar isso como parte do design evita que o índice vire uma cópia de dados sem o mesmo nível de controle da fonte.

## Boas práticas

- Prefira contexto longo quando o volume de dados for pequeno, estável e couber confortavelmente na janela do modelo.
- Use RAG quando o volume for grande, variável, ou quando só uma fração dos dados for relevante por pergunta.
- Peça citação de fonte explicitamente no prompt quando a resposta precisar ser auditável.
- Trate o índice de RAG como um ativo de dados com controle de acesso próprio, não como um cache neutro.
- Defina um processo de atualização e remoção de conteúdo do índice alinhado à fonte original.
- Avalie a qualidade da recuperação separadamente da qualidade da geração — um erro pode estar em qualquer uma das duas etapas.

## Erros comuns

- Montar um pipeline de RAG para um volume de dados que caberia tranquilamente em contexto longo.
- Não pedir citação de fonte e tratar a resposta gerada como automaticamente confiável.
- Indexar dados sensíveis sem replicar o controle de acesso da fonte original.
- Esquecer de remover do índice um documento que já foi removido ou revogado na fonte.
- Diagnosticar toda resposta ruim como "problema do modelo" sem checar se a etapa de recuperação trouxe os trechos certos.

## Resumo para revisão

- Contexto longo resolve quando o volume de dados é pequeno, estável e cabe na janela do modelo; RAG resolve quando o volume é grande, variável ou parcialmente relevante por pergunta.
- Embeddings viabilizam busca semântica, que compara significado em vez de correspondência literal de palavras.
- Grounding e citação de fonte reduzem alucinação e tornam a resposta auditável.
- Um índice de RAG é um ativo de dados que precisa de governança própria: quem insere, quem recupera, e como dados são removidos ou atualizados.
- Erros de resposta em RAG podem vir da recuperação ou da geração — vale diagnosticar as duas etapas separadamente.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar a decisão entre contexto longo e RAG.
- Continue para [Módulo 11 — Multimodalidade (Visão e Documentos)](../11-Multimodalidade-Visao-e-Documentos/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
