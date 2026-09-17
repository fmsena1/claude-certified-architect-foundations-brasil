# Casos de Uso — Módulo 05: Claude API e Messages API

## Caso 1 — Chat de suporte com resposta incremental

**Cenário:** Uma aplicação de atendimento ao cliente exibe a resposta do assistente em tempo real, palavra por palavra, enquanto o modelo ainda está gerando o texto.

**Arquitetura sugerida:** Chamada à Messages API com `stream: true`, consumindo os eventos incrementais no cliente e renderizando o texto progressivamente na interface.

**Por que essa escolha faz sentido:** Streaming reduz a latência percebida pela pessoa usuária, que vê o texto aparecer em vez de esperar a resposta inteira ser gerada antes de qualquer retorno visual.

**Risco/erro associado:** Implementar a interface assumindo resposta padrão (corpo único) e não tratar corretamente os eventos incrementais, resultando em texto exibido fora de ordem ou truncado.

## Caso 2 — Geração em lote de resumos para armazenamento

**Cenário:** Um processo noturno gera resumos de milhares de documentos e grava o resultado direto em um banco de dados, sem interface visual acompanhando a geração.

**Arquitetura sugerida:** Chamada à Messages API em modo padrão (sem streaming), com `max_tokens` calibrado para o tamanho esperado do resumo e `system` fixando o formato de saída desejado.

**Por que essa escolha faz sentido:** Nenhuma pessoa está observando a geração em tempo real; o processo só precisa do texto completo para gravar no banco, então streaming adicionaria complexidade sem benefício.

**Risco/erro associado:** Definir `max_tokens` baixo demais para o tamanho real dos documentos, causando resumos cortados no meio sem que o processo detecte o `stop_reason` correspondente.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
