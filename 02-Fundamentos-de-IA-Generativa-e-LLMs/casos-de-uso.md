# Casos de Uso — Módulo 02: Fundamentos de IA Generativa e LLMs

## Caso 1 — Extração de dados de formulários

**Cenário:** Uma aplicação precisa extrair campos estruturados (nome, CPF, valor) de textos de formulário, sempre no mesmo formato de saída.

**Arquitetura sugerida:** Chamada com temperatura baixa (próxima de zero), já que a tarefa exige consistência e não criatividade.

**Por que essa escolha faz sentido:** Temperatura baixa reduz a variação entre execuções, tornando a saída mais previsível para um pipeline automatizado que espera um formato fixo.

**Risco/erro associado:** Usar temperatura alta "por padrão" e obter formatos de saída inconsistentes entre chamadas.

## Caso 2 — Geração de variações de título para um artigo

**Cenário:** Um time de conteúdo quer 10 opções de título diferentes e criativas para o mesmo artigo.

**Arquitetura sugerida:** Chamada com temperatura mais alta, permitindo maior variação entre as opções geradas.

**Por que essa escolha faz sentido:** O objetivo aqui é diversidade, não consistência; temperatura baixa produziria títulos muito parecidos entre si.

**Risco/erro associado:** Usar temperatura baixa e receber 10 variações quase idênticas, frustrando o objetivo de brainstorming.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
