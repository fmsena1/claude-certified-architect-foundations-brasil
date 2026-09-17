# Mini-Simulado por Domínio

18 questões organizadas pelos seis domínios propostos por este repositório (ver [README](./README.md)), para diagnóstico rápido de área fraca. Responda um domínio inteiro de uma vez e confira o percentual de acerto por bloco antes de seguir para o próximo — isso indica exatamente onde revisar primeiro. Cada questão cita o módulo de origem do conceito.

## Domínio 1 — Fundamentos de IA generativa e LLMs (Módulos 01, 02, 03)

### 1.1 — Módulo 01

Qual é o critério inicial recomendado antes mesmo de escolher um modelo Claude para um problema novo?

- A) Definir se o problema é "usar Claude" (produto pronto) ou "construir com Claude" (API/SDK)
- B) Escolher direto o modelo mais capaz disponível
- C) Definir o canal de nuvem antes de qualquer outra coisa
- D) Escrever o prompt final antes de qualquer decisão de arquitetura

**Resposta correta: A**

Essa pergunta define o restante da arquitetura muito antes de qualquer escolha entre modelos (Módulo 01).

### 1.2 — Módulo 02

A janela de contexto de um modelo soma o quê?

- A) Apenas os tokens da entrada
- B) Apenas os tokens da saída
- C) Tokens de entrada, histórico da conversa e resposta gerada, juntos
- D) Apenas o número de mensagens trocadas, independente do tamanho

**Resposta correta: C**

A janela de contexto é um limite físico compartilhado entre tudo que entra e tudo que sai numa única chamada (Módulo 02).

### 1.3 — Módulo 03

Um prompt que funciona perfeitamente nos exemplos usados para escrevê-lo, mas falha em variações do mesmo problema, é chamado de:

- A) Prompt calibrado
- B) Prompt overfitted
- C) Prompt com chain-of-thought
- D) Prompt com grounding

**Resposta correta: B**

A métrica que importa é o desempenho em casos que o prompt não viu durante o ajuste, não a taxa de acerto nos exemplos usados para escrevê-lo (Módulo 03).

---

## Domínio 2 — Modelos Claude e Plataforma de API (Módulos 04, 05)

### 2.1 — Módulo 04

Uma aplicação em produção deveria evitar apontar sempre para "o modelo mais recente" sem controle porque:

- A) Modelos recentes são sempre mais lentos
- B) Uma atualização de modelo pode mudar o comportamento da aplicação sem aviso
- C) Modelos recentes nunca têm chave de API válida
- D) Isso é tecnicamente impossível de configurar

**Resposta correta: B**

Fixar versão e tratar migração como mudança testada evita comportamento inesperado em produção (Módulo 04).

### 2.2 — Módulo 05

O campo `stop_sequences` numa requisição à Messages API serve para:

- A) Definir o tom da resposta
- B) Definir strings que, se geradas, encerram a resposta imediatamente
- C) Ativar streaming
- D) Definir a chave de autenticação

**Resposta correta: B**

`stop_sequences` é um dos controles de output, junto com `max_tokens`, e afeta diretamente previsibilidade e custo (Módulo 05).

### 2.3 — Módulo 04

Duas partes de uma mesma aplicação podem usar modelos Claude diferentes entre si?

- A) Não, uma aplicação deve usar sempre um único modelo para tudo
- B) Sim — nada obriga isso, e roteamento por tipo de tarefa é uma prática recomendada
- C) Só se as duas partes estiverem em canais de nuvem diferentes
- D) Só em ambiente de teste, nunca em produção

**Resposta correta: B**

O exemplo de triagem por volume (modelo rápido/barato) e casos complexos (modelo mais capaz) ilustra exatamente esse roteamento (Módulo 04).

---

## Domínio 3 — Prompting e Ferramentas (Módulos 06, 07)

### 3.1 — Módulo 06

Por que separar instrução, contexto e dado de entrada com XML tags ajuda especialmente quando o prompt inclui conteúdo dinâmico?

- A) Porque XML tags reduzem o custo em tokens automaticamente
- B) Porque evita que o modelo confunda dado de entrada dinâmico (por exemplo, texto de um usuário) com instrução
- C) Porque XML tags são obrigatórias na Messages API
- D) Porque aumentam a temperatura da geração

**Resposta correta: B**

O delimitador evita ambiguidade entre o que é comando e o que é apenas conteúdo a ser processado (Módulo 06).

### 3.2 — Módulo 07

O que compõe a definição de uma ferramenta oferecida ao modelo?

- A) Apenas um nome
- B) Nome, descrição em linguagem natural e esquema de entrada esperado
- C) Apenas o esquema técnico, sem descrição
- D) O código-fonte completo da função a ser chamada

**Resposta correta: B**

A qualidade da descrição importa tanto quanto a validade técnica do esquema — uma descrição vaga leva a chamadas na hora errada ou à ausência de chamada quando necessário (Módulo 07).

### 3.3 — Módulo 07

Qual problema o Model Context Protocol (MCP) resolve como padrão de integração?

- A) Substitui a necessidade de o modelo raciocinar sobre quando usar uma ferramenta
- B) Evita que cada aplicação precise construir uma integração proprietária específica para cada fonte de dados ou ferramenta externa
- C) Elimina a necessidade de autenticação em qualquer API
- D) Garante que o modelo nunca erre ao chamar uma ferramenta

**Resposta correta: B**

MCP separa quem expõe a ferramenta (servidor MCP) de quem consome, permitindo reaproveitamento entre aplicações diferentes sem reescrever a integração (Módulo 07).

---

## Domínio 4 — Agentes e Automação (Módulos 08, 09)

### 4.1 — Módulo 08

Um agente autônomo, ao contrário de um assistente com ferramentas, se caracteriza por:

- A) Nunca usar ferramentas
- B) Decidir sozinho, a cada rodada, se o objetivo já foi atingido ou se precisa agir de novo
- C) Ser sempre mais barato que um assistente com ferramentas
- D) Não ter nenhum critério de parada, por definição

**Resposta correta: B**

O agente controla o encerramento do próprio ciclo de trabalho; um critério de parada claro é parte do design, não um detalhe (Módulo 08).

### 4.2 — Módulo 09

Qual é o critério recomendado para decidir quanto de permissão automática conceder a um agente de código?

- A) Conceder "permitir sempre" para evitar interrupções
- B) Princípio do menor privilégio: automático só para ações de baixo risco e reversíveis
- C) Conceder permissão total assim que o agente completar uma tarefa com sucesso
- D) Nunca permitir nenhuma ação automática, nem leitura de arquivo

**Resposta correta: B**

Ações de baixo risco e reversíveis (leitura, busca, teste) podem ser automáticas; ações com efeito colateral relevante exigem confirmação; comandos destrutivos deveriam ser negados por completo (Módulo 09).

### 4.3 — Módulo 08

Quando faz sentido considerar orquestração multiagente completa, em vez de um agente único?

- A) Sempre, como ponto de partida padrão de qualquer projeto
- B) Quando a divisão de contexto e o paralelismo entre linhas de trabalho autônomas compensam a coordenação adicional
- C) Apenas quando o orçamento de tokens é ilimitado
- D) Nunca — multiagente é sempre pior que agente único

**Resposta correta: B**

É uma decisão de arquitetura com custo real (mais chamadas, mais coordenação); a recomendação é começar com um agente único e evoluir conforme a necessidade concreta aparecer (Módulo 08).

---

## Domínio 5 — Dados, RAG e Multimodalidade (Módulos 10, 11, 12)

### 5.1 — Módulo 10

Qual sinal indica que RAG é mais adequado que contexto longo para um conjunto de dados?

- A) O conjunto de dados é pequeno e nunca muda
- B) O conjunto de dados é grande, muda com frequência, ou só uma fração pequena é relevante por pergunta
- C) O conjunto de dados cabe inteiro na janela de contexto do modelo
- D) A aplicação não tem nenhum requisito de custo

**Resposta correta: B**

Esses são exatamente os três sinais que tornam RAG necessário em vez de simplesmente colocar tudo no prompt (Módulo 10).

### 5.2 — Módulo 11

Por que um PDF de centenas de páginas pode exigir ser dividido em lotes antes de ser processado?

- A) Porque PDFs nunca são aceitos pela Messages API
- B) Porque existem limites de tamanho de requisição e de número de páginas processadas numa única chamada
- C) Porque PDFs sempre custam mais tokens que imagens, independentemente do tamanho
- D) Porque o campo `system` não aceita blocos de documento

**Resposta correta: B**

Documentos muito longos podem exigir dividir o PDF em lotes de páginas em vez de enviar o arquivo inteiro numa única requisição (Módulo 11).

### 5.3 — Módulo 12

Qual é o maior retorno esperado ao aplicar prompt caching pela primeira vez numa aplicação?

- A) Em blocos pequenos e que mudam a cada chamada
- B) Em blocos grandes e estáveis, reutilizados em muitas chamadas (system prompt longo, base de conhecimento fixa, exemplos few-shot extensos)
- C) Apenas em chamadas com streaming ativado
- D) Apenas quando a temperatura está em zero

**Resposta correta: B**

Cachear conteúdo que muda a cada chamada perde o benefício do caching; o ganho é proporcional a quanto do prompt é estável e repetido (Módulo 12).

---

## Domínio 6 — Segurança, Enterprise e Operação (Módulos 13, 14, 15)

### 6.1 — Módulo 13

Confiar apenas no comportamento padrão do modelo (moldado por constitutional AI) é suficiente como guardrail para uma aplicação de domínio sensível?

- A) Sim, sempre, porque o modelo já recusa qualquer pedido problemático
- B) Não — o comportamento padrão é genérico; guardrails específicos do domínio da aplicação continuam necessários
- C) Sim, mas apenas se a aplicação usar o modelo mais caro da linha
- D) Não, porque constitutional AI não tem nenhum efeito prático

**Resposta correta: B**

O comportamento padrão do modelo não substitui guardrails específicos do domínio, porque é genérico e a aplicação pode ter regras próprias mais restritivas (Módulo 13).

### 6.2 — Módulo 14

O que muda entre a API direta da Anthropic e um canal de nuvem parceira como Vertex AI, do ponto de vista do modelo em si?

- A) O modelo é tecnicamente diferente em cada canal
- B) O modelo é o mesmo Claude; o que muda é autenticação, faturamento, identidade de nuvem e, às vezes, o formato do identificador do modelo
- C) A capacidade de raciocínio do modelo aumenta em canais de nuvem parceira
- D) Vertex AI não suporta o campo `system`

**Resposta correta: B**

Em todos os canais o modelo por trás é o mesmo Claude; a escolha de canal é uma decisão de infraestrutura e compliance (Módulo 14).

### 6.3 — Módulo 15

Por que medir custo "por tarefa concluída" é mais confiável do que medir "por chamada isolada"?

- A) Porque chamadas isoladas nunca têm custo
- B) Porque evita a armadilha de trocar poucas chamadas caras por muitas chamadas baratas que, juntas, custam mais
- C) Porque tarefas concluídas não usam tokens
- D) Porque só chamadas em lote podem ser medidas

**Resposta correta: B**

Otimizar isoladamente por chamada pode mascarar um aumento no custo total da tarefa; a métrica correta é o custo agregado até a tarefa terminar (Módulo 15).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
