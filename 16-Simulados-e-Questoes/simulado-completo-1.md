# Simulado Completo 1

20 questões comentadas, majoritariamente de resposta única, em progressão de dificuldade (mais fáceis no início, mais difíceis no final). Cobre os 15 módulos de conteúdo. Cada questão cita o módulo de origem do conceito.

## Questão 1 — Módulo 01

Qual afirmação descreve corretamente a diferença entre Claude.ai e a Claude Developer Platform (Console + API)?

- A) São o mesmo produto com nomes diferentes
- B) Claude.ai é o produto de consumo para conversar com Claude; a Developer Platform é onde se gera chave de API e se integra Claude em aplicações
- C) Claude.ai é só para desenvolvedores; a Developer Platform é só para uso pessoal
- D) A Developer Platform substitui o Claude Code

**Resposta correta: B**

Claude.ai é a porta de entrada para "usar Claude" sem integrar código; a Developer Platform é a base para "construir com Claude" via API (Módulo 01).

---

## Questão 2 — Módulo 02

O que a temperatura controla numa chamada de geração de texto?

- A) O tamanho máximo da resposta
- B) O quão "arriscada" é a escolha do próximo token durante a geração
- C) O número de tokens cobrados por chamada
- D) O idioma da resposta

**Resposta correta: B**

Temperatura baixa favorece o token mais provável; temperatura mais alta permite escolhas menos óbvias, com respostas mais variadas (Módulo 02).

---

## Questão 3 — Módulo 01

Uma integração pronta com Slack que permite conversar com Claude dentro dos canais da empresa, sem escrever código, é um exemplo de:

- A) Construir com Claude
- B) Usar Claude
- C) Fine-tuning
- D) Orquestração multiagente

**Resposta correta: B**

Integrações prontas (Slack, Microsoft 365, Chrome) são "usar Claude" sem construir nada, tanto quanto o chat web (Módulo 01).

---

## Questão 4 — Módulo 03

Ao usar a Claude API para gerar respostas, o que está acontecendo tecnicamente do lado do modelo?

- A) Treinamento incremental do modelo a cada chamada
- B) Inferência sobre um modelo já treinado, sem alteração dos pesos
- C) Fine-tuning automático baseado no histórico da conversa
- D) Reindexação de um banco vetorial

**Resposta correta: B**

O treinamento já foi feito pela Anthropic antes da disponibilização do modelo; cada chamada de API é inferência, sem alterar pesos (Módulo 03).

---

## Questão 5 — Módulo 04

Por que a Anthropic mantém múltiplos modelos (por exemplo, um mais capaz e um mais rápido/barato) em paralelo na mesma família?

- A) Porque modelos antigos são descontinuados assim que um novo sai
- B) Porque nem todo problema exige a maior capacidade disponível, e o eixo custo x latência x qualidade muda por caso de uso
- C) Porque cada modelo atende a um idioma diferente
- D) Porque só o modelo mais caro tem acesso a tool use

**Resposta correta: B**

Manter uma família de modelos permite escolher o ponto certo no eixo custo/latência/qualidade para cada parte do sistema (Módulo 04).

---

## Questão 6 — Módulo 05

Qual é o único endpoint que concentra autenticação, envio de mensagens, system prompt, streaming e controle de saída na Claude API?

- A) Um endpoint diferente para cada funcionalidade (tool use, visão, streaming)
- B) `POST /v1/messages`
- C) `GET /v1/models`
- D) Um endpoint específico por SDK de linguagem

**Resposta correta: B**

Não existem endpoints separados por funcionalidade: tool use, visão e controle de saída são parâmetros do mesmo request para a Messages API (Módulo 05).

---

## Questão 7 — Módulo 06

Em qual situação adicionar exemplos (few-shot) a um prompt tende a valer o custo adicional de tokens?

- A) Quando a tarefa já é simples e o formato natural do modelo já atende
- B) Quando o formato de saída precisa ser específico ou há casos de borda recorrentes
- C) Sempre, independentemente da tarefa
- D) Apenas quando a temperatura está em zero

**Resposta correta: B**

Few-shot ajuda quando o formato de saída é específico ou quando execuções anteriores mostraram variação indesejada; em tarefas simples, só aumenta o tamanho do prompt sem ganho proporcional (Módulo 06).

---

## Questão 8 — Módulo 04

Uma aplicação em produção deveria, em relação à versão do modelo Claude usada:

- A) Sempre apontar para "o modelo mais recente" automaticamente, sem revisão
- B) Fixar uma versão específica e tratar upgrade como mudança deliberada e testada
- C) Alternar entre versões a cada semana, para testar variação
- D) Ignorar versionamento, já que o comportamento nunca muda entre versões

**Resposta correta: B**

Fixar a versão evita que uma atualização de modelo mude o comportamento da aplicação sem aviso; migração é decisão testada, não automática (Módulo 04).

---

## Questão 9 — Módulo 07

Qual das alternativas descreve corretamente o papel da aplicação (não do modelo) no ciclo de chamada de ferramenta?

- A) A aplicação decide sozinha, sem o modelo, quando uma ferramenta deveria ser chamada
- B) A aplicação executa a chamada real da ferramenta contra um sistema real e devolve o resultado ao modelo
- C) A aplicação gera o texto final da resposta no lugar do modelo
- D) A aplicação nunca participa do ciclo, apenas encaminha o prompt

**Resposta correta: B**

O modelo decide e pede a chamada; quem executa de verdade, contra um sistema real, é a aplicação — nunca o modelo (Módulo 07).

---

## Questão 10 — Módulo 05

Em qual cenário streaming (Server-Sent Events) traz o maior ganho perceptível?

- A) Um processo em lote que só usa o texto completo depois de pronto
- B) Uma interface de chat interativa, onde a pessoa vê o texto aparecendo
- C) Uma chamada que gera um JSON curto para gravação direta em banco
- D) Uma chamada com `max_tokens` muito baixo

**Resposta correta: B**

Streaming reduz a latência percebida em interfaces interativas; um processo em lote não ganha nada com isso e só adiciona complexidade (Módulo 05).

---

## Questão 11 — Módulo 08

O que diferencia um "assistente com ferramentas" de um "agente autônomo", segundo o loop perceber-decidir-agir?

- A) O agente autônomo nunca usa ferramentas
- B) Quem controla o encerramento do ciclo de trabalho: no agente autônomo, o próprio agente decide quando o objetivo foi atingido
- C) O assistente com ferramentas sempre custa mais
- D) Não existe diferença real entre os dois

**Resposta correta: B**

A diferença central não é a presença de ferramentas, é quem decide, a cada rodada, se o trabalho terminou (Módulo 08).

---

## Questão 12 — Módulo 09

Qual é a principal diferença entre um hook e uma skill no Claude Code?

- A) Hook e skill são sinônimos
- B) Hook é automação determinística que roda sempre que a condição é atingida; skill depende do modelo escolher usá-la
- C) Skill só funciona em modo não-interativo (CI)
- D) Hook só pode ser usado para permissões de leitura

**Resposta correta: B**

Um hook roda no ambiente de execução, fora do controle do modelo; uma skill é carregada quando o modelo reconhece que o contexto combina com ela (Módulo 09).

---

## Questão 13 — Módulo 10

Um embedding é usado, em um pipeline de RAG, para:

- A) Compactar o texto para caber em menos tokens
- B) Representar texto de forma numérica de modo que significados semelhantes fiquem próximos, viabilizando busca semântica
- C) Substituir totalmente a necessidade de um prompt
- D) Definir a temperatura da geração

**Resposta correta: B**

O embedding é a peça técnica que permite buscar por significado em vez de correspondência literal de palavras (Módulo 10).

---

## Questão 14 — Módulo 11

Por que enviar uma imagem em resolução mais alta do que a tarefa exige tende a encarecer a chamada sem melhorar a resposta?

- A) Porque imagens de alta resolução são sempre rejeitadas pela API
- B) Porque uma imagem é convertida internamente em tokens proporcionais à sua área em pixels
- C) Porque resolução alta desativa o streaming
- D) Porque o modelo ignora imagens acima de um certo tamanho, sem aviso

**Resposta correta: B**

Quanto maior a resolução enviada, mais tokens a imagem consome, mesmo que o conteúdo relevante caiba numa área pequena da imagem (Módulo 11).

---

## Questão 15 — Módulo 12

Qual é a diferença entre comprimir contexto (por exemplo, via sumarização progressiva) e usar RAG?

- A) São a mesma técnica com nomes diferentes
- B) Compressão pressupõe que a informação relevante já está no contexto; RAG busca informação sob demanda quando isso não é verdade
- C) RAG é sempre mais barato que compressão
- D) Compressão só funciona com imagens

**Resposta correta: B**

Tratar os dois como intercambiáveis é um erro comum: compressão já parte da informação estar presente; RAG resolve o problema de "não saber de antemão o que será relevante" (Módulo 12).

---

## Questão 16 — Módulo 13

Qual é a diferença entre uma Política de Uso Aceitável e um guardrail técnico?

- A) São a mesma coisa, apenas com nomes diferentes
- B) A política é um documento que define o que é permitido ou proibido; o guardrail técnico é uma implementação concreta na aplicação que reforça essa política
- C) O guardrail técnico substitui completamente a necessidade da política
- D) A política só se aplica a modelos open source

**Resposta correta: B**

Depender só da política ou só do guardrail deixa lacunas; os dois trabalham em conjunto, em camadas diferentes (Módulo 13).

---

## Questão 17 — Módulo 14

Por que uma organização que já opera integralmente em uma nuvem específica tende a preferir acessar Claude pelo canal de nuvem parceira correspondente?

- A) Porque o modelo é tecnicamente diferente nesse canal
- B) Para manter o tráfego dentro da mesma fronteira de governança, identidade e residência de dados já auditada nessa nuvem
- C) Porque canais de nuvem parceira sempre recebem recursos novos primeiro
- D) Porque a API direta não aceita chave de API

**Resposta correta: B**

A escolha de canal é, na prática, uma decisão de compliance e procurement: o modelo por trás é o mesmo Claude em todos os canais (Módulo 14).

---

## Questão 18 — Módulo 15

Qual é a ordem recomendada para aplicar alavancas de redução de custo numa aplicação Claude?

- A) Processamento em lote, depois modelo/esforço, depois cache
- B) Cache de prompt e higiene de tokens primeiro, depois modelo/esforço, depois processamento em lote
- C) Trocar de modelo primeiro, sempre, antes de qualquer outra alavanca
- D) A ordem não importa, o resultado final é o mesmo

**Resposta correta: B**

Aplicar a alavanca errada primeiro desperdiça esforço: trocar de modelo antes de garantir que o cache funciona pode mascarar o ganho real disponível (Módulo 15).

---

## Questão 19 — Módulo 08

Uma tarefa de engenharia pede para investigar a causa de um erro em produção e propor uma correção, sem passos prescritos de antemão — o número de etapas necessárias não é conhecido no início. Que tipo de solução essa tarefa pede?

- A) Uma única chamada de API sem ferramentas
- B) Um agente autônomo operando em loop perceber-decidir-agir, com critério de parada definido
- C) Um prompt estático sem nenhuma ferramenta
- D) Um simples aumento de `max_tokens`

**Resposta correta: B**

Quando o número de passos não é conhecido de antemão e o resultado de uma ação determina a próxima, a tarefa pede um agente autônomo, não uma resposta direta (Módulo 08).

---

## Questão 20 — Módulo 15

Uma equipe quer trocar o prompt de um classificador de tickets em produção. Qual é a prática correta antes de promover essa mudança?

- A) Editar o prompt diretamente onde está em uso, sem comparação prévia
- B) Rodar o prompt candidato contra o mesmo conjunto de casos usado para o prompt atual e comparar os resultados antes de promover
- C) Promover a mudança direto, já que "parece melhor" no teste manual
- D) Aumentar a temperatura para compensar qualquer regressão

**Resposta correta: B**

Um prompt de produção deveria ser versionado e só promovido depois de passar pelo conjunto de avaliação, comparando baseline e candidato com evidência (Módulo 15).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
