# Módulo 17 — Glossário

Este glossário consolida os termos técnicos usados nos módulos 01 a 15 deste repositório, da introdução ao ecossistema Anthropic até avaliação e custos. A ideia não é substituir a documentação oficial, mas dar uma referência rápida de vocabulário para revisão antes de um simulado ou de uma discussão de arquitetura. Os termos estão em ordem alfabética, com definição de 1 a 2 linhas cada.

## Navegação do módulo

- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Glossário

- **Agente autônomo:** sistema que opera em loop de perceber-decidir-agir até atingir um objetivo ou critério de parada, decidindo sozinho quando encerrar o ciclo de trabalho.
- **API direta (Anthropic):** canal de acesso ao Claude fornecido diretamente pela Anthropic, autenticado por chave de API gerada no Console; costuma ser o primeiro canal a receber recursos novos.
- **Assistente com ferramentas:** sistema que chama ferramentas pontualmente dentro de uma resposta, mas não decide sozinho quantas rodadas de tool use dar nem quando a tarefa termina.
- **Canal de acesso:** forma de distribuição do modelo Claude (API direta, Amazon Bedrock, Google Vertex AI, Microsoft Foundry); muda billing, compliance e residência de dados, não a capacidade do modelo.
- **Chain-of-thought:** técnica de prompt que pede ao modelo para explicitar o raciocínio antes da resposta final, útil em tarefas de múltiplos passos lógicos.
- **Chatbot:** sistema que responde a uma mensagem por vez com base no histórico da conversa, sem agir sobre ferramentas externas nem controlar o encerramento de um ciclo de trabalho.
- **Citação de fonte (citations):** mecanismo que amarra um trecho da resposta a uma localização exata no documento ou contexto de origem, permitindo auditar a afirmação.
- **Claude:** família de modelos de linguagem da Anthropic; designa o modelo, distinto dos produtos construídos sobre ele (Claude.ai, API, Claude Code).
- **Claude Agent SDK:** framework para construir agentes autônomos usando o mesmo loop de ação empregado pelo Claude Code.
- **Claude Code:** agente de linha de comando e de IDE com acesso a arquivos, terminal e Git, voltado a tarefas de engenharia de software.
- **Claude Developer Platform:** Console e API onde se gera chave de acesso, testa prompts e integra Claude em aplicações próprias.
- **Constitutional AI:** abordagem de treinamento que usa um conjunto de princípios explícitos para moldar o comportamento padrão do modelo diante de pedidos sensíveis, em vez de depender só de feedback humano caso a caso.
- **Contexto longo:** estratégia de colocar o conteúdo relevante direto no prompt quando o volume de dados cabe na janela de contexto e não muda com frequência, como alternativa a RAG.
- **Embeddings:** representação vetorial de um texto, construída para que textos de significado semelhante fiquem próximos no espaço vetorial; base técnica da busca semântica.
- **Família de modelos (model family):** conjunto de modelos Claude mantidos em paralelo (ex.: Opus, Sonnet, Haiku, Fable), cada um cobrindo um ponto diferente do eixo custo x latência x qualidade.
- **Few-shot:** técnica de prompt que mostra exemplos concretos de entrada e saída para comunicar o padrão de resposta esperado.
- **Files API:** recurso que permite subir um arquivo uma vez e reutilizá-lo em várias requisições por meio de um identificador, evitando reenviar o binário a cada chamada.
- **Fine-tuning:** ajuste dos pesos do modelo para um domínio ou estilo muito específico; opção mais cara e menos flexível de customização, normalmente considerada só depois de esgotar prompting e RAG.
- **Governança de dados (em RAG):** conjunto de controles sobre o que entra num índice de recuperação, quem pode inserir e recuperar conteúdo, e como um dado é removido ou atualizado quando muda na fonte.
- **Grading automático:** avaliação de uma saída por comparação exata, regra ou julgamento de outro modelo; escala bem, mas exige critério de acerto razoavelmente objetivo.
- **Grounding:** prática de apoiar a resposta gerada explicitamente nos trechos recuperados, reduzindo a chance de uma resposta plausível mas não sustentada pelos dados.
- **Guardrail técnico:** controle implementado pela aplicação (filtro de entrada/saída, validação, bloqueio) para reforçar uma política de uso, complementando o comportamento padrão do modelo.
- **Hook:** automação determinística executada antes ou depois de uma chamada de ferramenta, garantida pelo ambiente de execução e não dependente do modelo lembrar de segui-la.
- **Inferência:** execução de uma chamada contra um modelo já treinado, sem alterar seus pesos; é o que acontece a cada uso da API, em oposição ao treinamento.
- **Janela de contexto:** quantidade máxima de tokens que o modelo processa de uma vez, somando entrada e saída; limite físico da chamada, não armazenamento persistente.
- **MCP (Model Context Protocol):** padrão aberto que separa quem expõe uma ferramenta ou fonte de contexto de quem a consome, evitando integração proprietária repetida entre aplicações.
- **Messages API:** endpoint único (`POST /v1/messages`) da Claude API que concentra envio de mensagens, system prompt, streaming e controle de saída.
- **Modelo assistente:** modelo que passou por um processo adicional de alinhamento (como Constitutional AI) para seguir instruções e recusar pedidos problemáticos com segurança.
- **Modelo base:** modelo treinado apenas para prever o próximo token a partir de grande volume de texto, sem necessariamente responder perguntas ou seguir instruções de forma confiável.
- **Multiagente (orquestração multiagente):** arquitetura com vários agentes coordenados, possivelmente em paralelo, para resolver um problema que um único agente não cobriria bem dentro de um contexto e objetivo únicos.
- **Next-token prediction:** mecanismo pelo qual o modelo gera texto, produzindo uma distribuição de probabilidade sobre o próximo token e escolhendo um deles a cada passo.
- **Observabilidade:** registro de sinais de cada chamada (tokens consumidos, acerto de cache, motivo de parada, erro) usados para diagnosticar problemas de custo, qualidade e comportamento em produção.
- **Overfitting de prompt:** prompt ajustado até funcionar perfeitamente nos exemplos testados, mas que falha em variações ligeiramente diferentes do mesmo problema.
- **Política de Uso Aceitável:** documento que define usos permitidos e proibidos da Claude, independentemente de o modelo tecnicamente aceitar ou recusar um pedido.
- **Processamento em lote (batch):** envio assíncrono de requisições não sensíveis a latência, a custo reduzido por chamada; não serve para fluxos que exigem resposta imediata.
- **Prompt caching:** reaproveitamento de blocos estáveis de um prompt entre chamadas, reduzindo custo e latência de processar repetidamente o mesmo conteúdo.
- **Prompt como contrato:** tratamento do prompt como especificação de comportamento, incluindo regras explícitas para o caminho comum e para exceções, não apenas uma descrição da tarefa ideal.
- **RAG (Retrieval-Augmented Generation):** pipeline que busca trechos relevantes de uma fonte externa antes de gerar a resposta, usado quando o volume de dados é grande, variável ou só parcialmente relevante por pergunta.
- **Revisão humana (human-in-the-loop):** ponto de controle obrigatório antes de uma decisão automatizada de alto risco produzir efeito sobre uma pessoa.
- **Skill:** conjunto nomeado de instruções (e às vezes ferramentas) carregado quando o contexto de uma tarefa combina com sua descrição, reduzindo repetição de instrução entre sessões.
- **Streaming:** modo de resposta em que o servidor entrega o conteúdo gerado em eventos incrementais, reduzindo a latência percebida em interfaces interativas.
- **Subagente:** agente especializado, com objetivo delimitado e geralmente contexto próprio, invocado por um agente orquestrador para resolver uma parte específica de uma tarefa maior.
- **Sumarização progressiva:** técnica que substitui turnos antigos de uma conversa por um resumo compacto, preservando decisões e fatos relevantes em vez de descartar histórico sem critério.
- **System prompt:** campo que define instruções persistentes de comportamento — papel, tom, restrições — válidas para toda a conversa, separado do histórico de mensagens.
- **Temperatura:** parâmetro que controla o quão previsível é a escolha do próximo token durante a geração; valores baixos favorecem consistência, valores altos favorecem variação.
- **Token:** unidade mínima de texto processada pelo modelo; base real de medição de custo e de limite de contexto, distinta de palavra ou caractere.
- **Tool use:** mecanismo pelo qual o modelo pede a execução de uma ferramenta definida pela aplicação, recebendo o resultado de volta antes de formular a resposta final.
- **Versionamento de modelo:** prática de fixar uma versão específica de modelo em produção e tratar migração como mudança deliberada e testada, em vez de apontar sempre para "a mais recente".
- **XML tags:** delimitador usado para separar instrução, contexto e dado de entrada dentro de um prompt, evitando que conteúdo dinâmico seja confundido com comando.

## Próximos passos

- Continue para [Módulo 18 — Recursos e Links](../18-Recursos-e-Links/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
