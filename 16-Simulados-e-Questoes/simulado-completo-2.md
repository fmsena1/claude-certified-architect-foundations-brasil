# Simulado Completo 2

20 questões comentadas com foco em cenário aplicado, arquitetura e decisão de serviço (qual modelo escolher, prompting vs RAG vs fine-tuning, qual canal de deploy, quando usar agente). Cobre os 15 módulos de conteúdo. Cada questão cita o módulo de origem do conceito.

## Questão 1 — Módulo 01

Uma startup quer, na primeira semana de projeto, apenas descobrir se Claude consegue resumir bem os relatórios internos antes de decidir investir em qualquer integração. Qual é o caminho arquitetural mais responsável?

- A) Já contratar Amazon Bedrock e montar pipeline completo de API
- B) Testar manualmente em Claude.ai antes de qualquer integração
- C) Construir direto um agente autônomo com Claude Agent SDK
- D) Pedir fine-tuning de um modelo customizado

**Resposta correta: B**

Validar a ideia em um produto pronto custa muito menos do que construir uma integração via API que pode precisar ser refeita; migrar de produto pronto para API depois é o caminho esperado (Módulo 01).

---

## Questão 2 — Módulo 04

Uma aplicação de triagem de tickets precisa classificar 50 mil mensagens por dia (tarefa simples e repetitiva) e, à parte, gerar uma análise jurídica detalhada para os 20 casos mais complexos do dia. Qual arquitetura de modelos faz mais sentido?

- A) Um único modelo, o mais capaz da linha, para as duas tarefas
- B) Um modelo mais rápido/barato para a triagem em volume e um modelo mais capaz reservado para a análise jurídica complexa
- C) Um único modelo, o mais barato da linha, para as duas tarefas
- D) Alternar modelo aleatoriamente por chamada

**Resposta correta: B**

O eixo custo x latência x qualidade favorece roteamento por tipo de tarefa: alto volume e simplicidade pedem o modelo mais barato/rápido; baixo volume e alta complexidade justificam o modelo mais capaz (Módulo 04).

---

## Questão 3 — Módulo 03

Uma empresa quer que o assistente sempre use o tom de voz da marca em toda resposta. Esse comportamento é estável e cabe facilmente numa instrução de poucas linhas. Qual abordagem de customização é a mais adequada para começar?

- A) Fine-tuning de um modelo dedicado só para tom de voz
- B) Prompting (instrução de estilo no system prompt)
- C) Montar um pipeline de RAG com exemplos de tom
- D) Treinar um modelo do zero com dados da marca

**Resposta correta: B**

Comportamento estável que cabe no prompt resolve com prompting, a opção mais rápida e barata; RAG e fine-tuning são desperdício de esforço nesse caso (Módulo 03).

---

## Questão 4 — Módulo 10

O mesmo assistente de marca agora precisa responder com base num catálogo de produtos que muda toda semana e não cabe inteiro no contexto. Qual abordagem resolve esse novo requisito?

- A) Aumentar `max_tokens` até o catálogo caber
- B) RAG, buscando os produtos relevantes sob demanda a cada pergunta
- C) Reduzir a temperatura para zero
- D) Fine-tuning mensal com o catálogo atualizado

**Resposta correta: B**

Conhecimento externo que muda com frequência e não cabe (ou fica desatualizado) fixo no prompt é o cenário central que justifica RAG (Módulo 03 e Módulo 10).

---

## Questão 5 — Módulo 14

Uma organização já opera toda sua infraestrutura sensível dentro de uma conta AWS auditada, com IAM e residência de dados centralizados ali. Qual canal de acesso ao Claude tende a ser preferido?

- A) API direta da Anthropic, ignorando a infraestrutura AWS existente
- B) Amazon Bedrock, para manter o tráfego dentro da mesma fronteira de governança já auditada
- C) Google Vertex AI, por ter mais recursos
- D) Qualquer canal, já que todos têm exatamente a mesma paridade de recursos e compliance

**Resposta correta: B**

A escolha de canal segue a fronteira de compliance já existente na organização, não uma preferência técnica isolada; Bedrock herda os controles de residência de dados já usados na AWS (Módulo 14).

---

## Questão 6 — Módulo 07

Um assistente de viagens precisa apenas consultar a previsão do tempo de uma cidade para responder se a pessoa deve levar casaco. Qual arquitetura é suficiente e mais barata de manter?

- A) Um agente autônomo completo com loop perceber-decidir-agir
- B) Tool use simples: uma ferramenta, uma decisão, um resultado
- C) Orquestração multiagente com dois agentes coordenados
- D) Um pipeline de RAG sobre boletins meteorológicos históricos

**Resposta correta: B**

A tarefa envolve uma decisão clara e uma única fonte de dado externo — tool use simples resolve com menos complexidade do que qualquer forma de orquestração (Módulo 07).

---

## Questão 7 — Módulo 08

Um time de plataforma quer que o mesmo assistente de viagens também monte um roteiro completo de 5 dias, reservando etapas, cruzando clima, preço de passagem e disponibilidade de hotel, decidindo sozinho os próximos passos a cada resultado obtido. Que mudança de arquitetura esse novo requisito sugere?

- A) Continuar com tool use simples, só adicionando mais uma ferramenta
- B) Migrar para um agente autônomo, já que o número de passos não é conhecido de antemão e cada resultado influencia a próxima decisão
- C) Reduzir para um chatbot sem ferramentas
- D) Trocar apenas o modelo, mantendo a mesma arquitetura de tool use simples

**Resposta correta: B**

Quando a sequência de decisões se torna aberta e dependente do resultado anterior, o cenário se aproxima de um agente autônomo, não mais de um tool use pontual (Módulo 07 e Módulo 08).

---

## Questão 8 — Módulo 09

Uma equipe de engenharia quer garantir, de forma que nunca falhe por esquecimento, que o Claude Code nunca leia por inteiro um arquivo de log de milhares de linhas. Qual mecanismo é o adequado?

- A) Uma instrução no prompt pedindo para "evitar" ler arquivos grandes
- B) Um hook que intercepta a chamada de leitura antes da execução e bloqueia arquivos acima de um limite de tamanho
- C) Uma skill nomeada, carregada só quando o modelo lembrar de usá-la
- D) Aumentar a permissão do agente para "permitir sempre"

**Resposta correta: B**

Uma regra que não pode depender do modelo lembrar pertence a um hook, porque roda no ambiente de execução, fora do controle do modelo; instrução de prompt e skill dependem de o modelo escolher segui-las (Módulo 09).

---

## Questão 9 — Módulo 13

Uma aplicação usa Claude para sugerir decisões de aprovação de crédito. Qual desenho de fluxo é o mais responsável para os casos negativos ou ambíguos?

- A) Responder automaticamente ao solicitante em todos os casos, sem exceção
- B) Rotear decisões negativas ou ambíguas para uma fila de revisão humana antes de qualquer resposta final
- C) Aumentar a temperatura para reduzir a chance de recusa do modelo
- D) Confiar que o constitutional AI do modelo já é guardrail suficiente para todos os casos

**Resposta correta: B**

Quando a decisão afeta uma pessoa de forma significativa, o padrão responsável é ter revisão humana obrigatória para os casos de maior risco ou ambiguidade antes que a decisão produza efeito (Módulo 13).

---

## Questão 10 — Módulo 11

Uma empresa recebe notas fiscais digitalizadas como imagem e precisa extrair fornecedor, valor total e data de emissão em JSON, para gravar direto em outro sistema. Qual instrução de prompt é mais adequada?

- A) "Descreva esta imagem com o máximo de detalhes possível"
- B) Pedir extração estruturada com o schema exato dos campos esperados, respondendo apenas com o JSON combinado
- C) Enviar a imagem sem nenhuma instrução de texto
- D) Pedir para o modelo "resumir a nota fiscal em um parágrafo"

**Resposta correta: B**

Quando o objetivo final é um dado utilizável por outro sistema, extração estruturada com schema definido é preferível a descrição livre (Módulo 11).

---

## Questão 11 — Módulo 12

Um agente de suporte mantém uma base de políticas grande e estável, reenviada em toda chamada, e um histórico de conversa que cresce a cada turno. Qual combinação de técnicas reduz custo sem perder continuidade da conversa?

- A) Truncar simplesmente os turnos mais antigos e não usar cache
- B) Prompt caching na base de políticas estável e sumarização progressiva no histórico de conversa
- C) Aumentar a janela de contexto até o infinito
- D) Migrar toda a base de políticas para dentro de cada mensagem de usuário

**Resposta correta: B**

O bloco estável (base de políticas) é candidato natural a cache; o histórico crescente se beneficia de sumarização progressiva, que preserva continuidade semântica melhor que truncamento simples (Módulo 12).

---

## Questão 12 — Módulo 06

Um prompt de extração de dados tem funcionado bem apenas nos exemplos usados para escrevê-lo, mas falha em variações ligeiramente diferentes do mesmo tipo de documento. Qual é o diagnóstico mais provável, e o que fazer a seguir?

- A) O modelo está com temperatura alta demais; basta zerar a temperatura
- B) O prompt está "overfitted" aos exemplos testados; é preciso testá-lo contra variações razoáveis do input antes de considerá-lo pronto
- C) O problema é sempre de infraestrutura de rede, não de prompt
- D) O prompt já está pronto, já que funciona nos exemplos originais

**Resposta correta: B**

Um prompt overfitted funciona só nos exemplos usados para criá-lo; a métrica que importa é o desempenho em casos que o prompt não viu durante o ajuste (Módulo 03 e Módulo 06).

---

## Questão 13 — Módulo 05

Uma aplicação de geração de relatório noturno só usa o texto completo depois de pronto, sem interface interativa. Faz sentido ativar streaming nessa chamada?

- A) Sim, streaming sempre melhora qualquer aplicação
- B) Não necessariamente — streaming reduz latência percebida em interfaces interativas, mas não traz ganho para um consumo que só usa o texto completo
- C) Sim, porque streaming reduz o custo em tokens
- D) Não, porque streaming está sempre desabilitado por padrão para relatórios

**Resposta correta: B**

A escolha entre streaming e resposta padrão depende de quem consome a resposta; um processo em lote não ganha nada com eventos incrementais e só adiciona complexidade (Módulo 05).

---

## Questão 14 — Módulo 15

Uma aplicação percebeu que o custo mensal com a Claude API subiu bastante. Antes de trocar de modelo para um mais barato, qual verificação deveria ser feita primeiro?

- A) Nenhuma — trocar de modelo é sempre a primeira ação correta
- B) Confirmar se o cache de prompt está funcionando corretamente e se há higiene de tokens de entrada/saída
- C) Aumentar o `max_tokens` para garantir respostas mais completas
- D) Migrar direto para processamento em lote, independente da sensibilidade a latência da aplicação

**Resposta correta: B**

Trocar de modelo antes de garantir que cache e higiene de tokens estão funcionando pode mascarar o ganho real disponível e atribuir a economia à alavanca errada (Módulo 15).

---

## Questão 15 — Módulo 02

Duas chamadas idênticas em prompt, mas uma com temperatura baixa e outra com temperatura alta, produzem respostas visivelmente diferentes entre execuções na segunda. Isso indica um problema de configuração?

- A) Sim, é sempre um bug de infraestrutura
- B) Não — é o efeito esperado do mecanismo de amostragem token a token sob temperatura mais alta
- C) Sim, indica que a janela de contexto estourou
- D) Não, mas só acontece em modelos desatualizados

**Resposta correta: B**

Temperatura mais alta permite escolhas menos óbvias de token a cada geração; variação entre execuções é esperada, não um defeito (Módulo 02).

---

## Questão 16 — Módulo 10

Uma aplicação de RAG está devolvendo respostas plausíveis, mas que não correspondem ao conteúdo real dos documentos da empresa. Qual prática mitigaria diretamente esse risco?

- A) Aumentar a resolução das imagens enviadas
- B) Exigir grounding e citação de fonte, amarrando a resposta aos trechos recuperados
- C) Desativar completamente a etapa de recuperação
- D) Aumentar a temperatura para gerar respostas mais criativas

**Resposta correta: B**

Grounding e citação de fonte reduzem a chance de uma resposta plausível, mas não sustentada pelos documentos recuperados, e permitem auditar a resposta (Módulo 10).

---

## Questão 17 — Módulo 08

Uma tarefa de correção de bug tem etapas com naturezas muito diferentes: investigar logs (exige muito contexto de observabilidade) e escrever a correção (exige contexto de código). Qual desenho reduz o risco de "contaminar" um contexto com o outro?

- A) Manter tudo em um único agente com todo o histórico misturado
- B) Dividir em subagentes especializados, cada um com seu próprio objetivo e contexto delimitado, sob um agente orquestrador
- C) Eliminar completamente o uso de agente e voltar a tool use simples
- D) Aumentar o limite de iterações do agente único indefinidamente

**Resposta correta: B**

Subagentes ajudam quando etapas distintas exigem contexto muito diferente entre si, evitando que o contexto de uma etapa polua o das outras (Módulo 08).

---

## Questão 18 — Módulo 13

Uma aplicação enterprise vai enviar dados de produção reais para a Claude API pela primeira vez. Qual verificação deveria acontecer antes desse envio?

- A) Nenhuma, já que toda API trata dados da mesma forma por padrão
- B) Confirmar a política de retenção de dados e de uso de dados em treinamento que se aplica ao canal e contrato específicos
- C) Apenas aumentar o limite de tokens disponível
- D) Trocar para o modelo mais barato disponível

**Resposta correta: B**

Retenção e uso de dados em treinamento variam por canal de acesso e configuração contratual; assumir uma resposta genérica é um erro comum (Módulo 13).

---

## Questão 19 — Módulo 14

Uma equipe descobre que um recurso recém-lançado pela Anthropic ainda não está disponível no canal de nuvem parceira que a empresa usa. O que essa situação ilustra?

- A) Um bug no canal de nuvem parceira que deveria ser reportado como incidente
- B) Que nem todo recurso novo chega ao mesmo tempo, ou da mesma forma, a todos os canais — paridade não deve ser assumida automaticamente
- C) Que o canal de nuvem parceira nunca recebe atualizações
- D) Que o modelo por trás do canal de nuvem parceira é diferente do modelo da API direta

**Resposta correta: B**

Um recurso lançado primeiro na API direta pode demorar a aparecer, ou não estar disponível, em um canal de nuvem parceira; confirmar disponibilidade antes de arquitetar é a prática recomendada (Módulo 14).

---

## Questão 20 — Módulo 15

Uma equipe quer avaliar não só a resposta final de um agente que usa múltiplas ferramentas, mas também se ele tomou as decisões certas ao longo do caminho. O que um eval de agente precisa observar, além do texto final?

- A) Apenas o tempo total de execução
- B) A trajetória completa: quais ferramentas foram chamadas, em que ordem, e se o resultado final está correto
- C) Somente o custo em tokens da última chamada
- D) Nada além do que um eval de prompt de resposta única já observa

**Resposta correta: B**

Um eval de agente precisa olhar a trajetória inteira de decisões e chamadas de ferramenta, não só o texto final — diferente de um eval de prompt de resposta única (Módulo 15).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
