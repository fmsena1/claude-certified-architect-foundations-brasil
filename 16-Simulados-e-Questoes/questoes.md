# Questões de Aquecimento

Treino curto antes dos simulados completos. Formatos variam de propósito: múltipla escolha de resposta única, múltipla escolha de múltiplas respostas, ordenação de passos e associação de colunas. Cada questão cita o módulo (01 a 15) de onde o conceito vem.

## Questão 1 (resposta única) — Módulo 01

Uma equipe quer resumir manualmente alguns chamados de suporte só para validar se a ideia funciona, sem integrar nada a um sistema. Qual é o canal mais adequado para começar?

- A) Amazon Bedrock
- B) Claude Agent SDK
- C) Claude.ai
- D) Messages API com streaming

**Resposta correta: C**

Validar uma ideia manualmente, sem integração, é o cenário clássico de "usar Claude" através de um produto pronto. Construir uma integração via API antes de validar o requisito costuma ser retrabalho desnecessário (Módulo 01).

---

## Questão 2 (resposta única) — Módulo 02

Por que o custo e o limite de uma chamada à Claude são medidos em tokens, e não em palavras ou caracteres?

- A) Porque tokens são sempre iguais a uma palavra inteira
- B) Porque o tokenizador fragmenta o texto em unidades que não correspondem 1:1 a palavras, e é essa unidade que o modelo processa
- C) Porque caracteres custam mais caro que palavras
- D) Porque tokens só existem em textos em inglês

**Resposta correta: B**

Uma palavra comum pode virar um único token; uma palavra rara pode virar vários. Token é a unidade real de processamento, custo e limite de contexto (Módulo 02).

---

## Questão 3 (múltiplas respostas) — Módulo 03

Quais das afirmações abaixo estão corretas sobre a ordem de investigação para customizar o comportamento de um modelo já treinado? (marque todas as corretas)

- A) Fine-tuning deveria ser a primeira opção testada, por ser a mais robusta
- B) Prompting é a opção mais rápida e barata e deveria ser testada primeiro
- C) RAG entra quando o modelo precisa de conhecimento externo atualizado que não cabe (ou não deveria estar) fixo no prompt
- D) Usar a API da Claude é, na prática, treinar o modelo a cada chamada

**Respostas corretas: B e C**

A ordem recomendada é prompting, depois RAG, fine-tuning por último. Usar a API é inferência, não treinamento — o treinamento já foi feito pela Anthropic antes do modelo ser disponibilizado (Módulo 03).

---

## Questão 4 (resposta única) — Módulo 04

Uma aplicação de suporte precisa classificar milhares de tickets por hora (tarefa simples, alto volume) e, separadamente, decidir casos ambíguos que envolvem múltiplas políticas (tarefa complexa, baixo volume). Qual abordagem de modelo faz mais sentido?

- A) Usar o modelo mais capaz da linha para as duas tarefas, por segurança
- B) Usar o modelo mais rápido/barato para classificar em volume e reservar o modelo mais capaz só para os casos ambíguos
- C) Usar sempre o modelo de equilíbrio custo/capacidade, independente da tarefa
- D) Alternar aleatoriamente entre modelos a cada chamada

**Resposta correta: B**

Nada obriga uma aplicação a usar um único modelo para tudo; roteamento por tipo de tarefa aproveita o eixo custo x latência x qualidade da família de modelos (Módulo 04).

---

## Questão 5 (resposta única) — Módulo 05

Qual campo da Messages API deve conter instruções de comportamento persistentes, como tom e restrições, válidas durante toda a conversa?

- A) `messages`, no primeiro item com `role: "user"`
- B) `stop_sequences`
- C) `system`
- D) `max_tokens`

**Resposta correta: C**

O campo `system` fica fora da lista `messages` e define instruções persistentes de comportamento; `messages` carrega o histórico de turnos entre usuário e assistente (Módulo 05).

---

## Questão 6 (ordenação de passos) — Módulo 07

Ordene as etapas do ciclo de chamada de ferramenta (tool use), da primeira para a última:

1. O modelo decide que precisa de uma ferramenta e devolve um pedido de chamada com nome e argumentos.
2. A aplicação envia a mensagem do usuário junto com a lista de ferramentas disponíveis.
3. O modelo produz a resposta final, agora informada pelo resultado da ferramenta.
4. A aplicação executa a chamada real contra o sistema e devolve o resultado ao modelo.

**Ordem correta: 2, 1, 4, 3**

O ciclo começa com a aplicação oferecendo as ferramentas, segue com o pedido de chamada do modelo, a execução real feita pela aplicação (nunca pelo modelo) e termina com a resposta final já informada pelo resultado (Módulo 07).

---

## Questão 7 (resposta única) — Módulo 06

Um prompt de classificação mistura, no mesmo bloco de texto, a instrução de classificação e o conteúdo dinâmico do ticket a ser classificado, sem nenhum delimitador. Qual prática de engenharia de prompt resolve diretamente esse problema?

- A) Aumentar o `max_tokens`
- B) Separar instrução, contexto e dado de entrada com XML tags
- C) Reduzir a temperatura para zero
- D) Ativar streaming

**Resposta correta: B**

XML tags evitam que o modelo confunda dado de entrada dinâmico com instrução, especialmente quando o prompt inclui conteúdo variável como um ticket de usuário (Módulo 06).

---

## Questão 8 (resposta única) — Módulo 08

Um sistema responde perguntas usando o histórico da conversa, mas nunca decide sozinho quando uma tarefa terminou nem executa mais de uma ação sem intervenção humana entre elas. Como esse sistema deveria ser classificado?

- A) Agente autônomo
- B) Orquestração multiagente
- C) Chatbot ou, no máximo, assistente com ferramentas pontual
- D) Subagente

**Resposta correta: C**

A diferença entre esses níveis não é a presença de ferramentas, mas quem controla o encerramento do ciclo de trabalho. Um agente autônomo decide sozinho, a cada rodada, se o objetivo foi atingido (Módulo 08).

---

## Questão 9 (múltiplas respostas) — Módulo 09

Quais das opções abaixo são exemplos corretos de regras que deveriam virar um **hook** (e não apenas uma instrução no prompt) no Claude Code? (marque todas as corretas)

- A) Bloquear a leitura integral de um arquivo de log com milhares de linhas
- B) Pedir educadamente ao modelo, no prompt, para "tentar não" rodar comandos destrutivos de Git
- C) Impedir de forma garantida um commit direto na branch principal
- D) Sugerir, como preferência de estilo, que o agente prefira nomes descritivos de variável

**Respostas corretas: A e C**

Hooks servem para regras que não podem depender do modelo lembrar, porque rodam no ambiente de execução, fora do controle do modelo. Preferências de estilo ou pedidos "educados" no prompt não têm essa garantia (Módulo 09).

---

## Questão 10 (resposta única) — Módulo 10

Uma base de conhecimento tem poucos documentos, que não mudam com frequência, e cabem confortavelmente na janela de contexto do modelo. Qual abordagem é mais simples e mais fácil de depurar para esse cenário?

- A) Montar um pipeline de RAG com banco vetorial
- B) Colocar o conteúdo direto no contexto (prompt)
- C) Treinar um modelo customizado do zero
- D) Aumentar a temperatura para compensar a falta de contexto

**Resposta correta: B**

RAG se justifica quando o volume excede o prático para contexto, muda com frequência, ou só uma fração é relevante por pergunta. Nenhuma dessas condições se aplica aqui (Módulo 10).

---

## Questão 11 (associação de colunas) — Módulos 11, 13 e 14

Associe cada conceito da coluna A ao módulo da coluna B de onde ele vem.

**Coluna A**
1. Files API (upload de arquivo reutilizado por `file_id`)
2. Revisão humana obrigatória antes de uma decisão de alto risco valer
3. Amazon Bedrock como canal de acesso operado pela AWS

**Coluna B**
- Módulo 11 — Multimodalidade (Visão e Documentos)
- Módulo 13 — Segurança, Privacidade e IA Responsável
- Módulo 14 — Deploy Enterprise

**Associação correta: 1-Módulo 11, 2-Módulo 13, 3-Módulo 14**

A Files API evita reenviar o mesmo binário em base64 a cada chamada (Módulo 11); revisão humana em decisões críticas é tema central de IA responsável (Módulo 13); Bedrock é um dos canais de nuvem parceira cobertos no módulo de deploy enterprise (Módulo 14).

---

## Questão 12 (resposta única) — Módulo 12

Um agente de suporte reenvia, a cada chamada, uma base de políticas grande e estável que nunca muda entre as requisições. Qual recurso reduz custo e latência reaproveitando esse bloco entre chamadas?

- A) Sumarização progressiva
- B) Prompt caching
- C) Redução de resolução de imagem
- D) Aumento do `max_tokens`

**Resposta correta: B**

Prompt caching marca blocos estáveis do prompt para reaproveitamento em chamadas subsequentes, com ganho proporcional a quanto do prompt é repetido (Módulo 12).

---

## Questão 13 (resposta única) — Módulo 15

Antes de trocar de modelo para tentar economizar custo em uma aplicação, qual alavanca deveria ser confirmada primeiro, segundo a ordem recomendada de otimização de custo?

- A) Processamento em lote (batch)
- B) Cache de prompt e higiene de tokens de entrada/saída
- C) Aumento da temperatura
- D) Redução do número de exemplos few-shot, independente do efeito na qualidade

**Resposta correta: B**

Trocar de modelo antes de garantir que o cache está funcionando pode mascarar o ganho real disponível. A ordem recomendada é cache e higiene de tokens primeiro, depois modelo/esforço, depois lote (Módulo 15).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
