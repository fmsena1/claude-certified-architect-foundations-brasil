# Casos de Uso — Módulo 06: Engenharia de Prompts

## Caso 1 — Extração de dados estruturados de um documento

**Cenário:** Uma aplicação precisa extrair nome, data e valor de notas fiscais em texto livre, sempre no mesmo formato de saída, para alimentar um sistema downstream que faz parsing automático.

**Arquitetura sugerida:** Prompt estruturado com XML tags separando o texto da nota (dado de entrada dinâmico) da instrução de extração, mais dois ou três exemplos de few-shot mostrando o formato exato de saída esperado.

**Por que essa escolha faz sentido:** O formato de saída precisa ser consistente para o parsing downstream funcionar; few-shot reduz variação de formato de forma mais confiável do que apenas descrever a estrutura esperada em prosa, e a tag delimita claramente onde termina a instrução e começa o dado real.

**Risco/erro associado:** Descrever o formato de saída apenas em texto, sem exemplo, e obter variações sutis (ordem de campos, nome de chave, formatação de data) que quebram o parser downstream.

## Caso 2 — Triagem de solicitação ambígua com múltiplas regras de negócio

**Cenário:** Um assistente interno precisa decidir se uma solicitação de reembolso deve ser aprovada automaticamente, encaminhada para análise humana, ou rejeitada, com base em várias regras que podem entrar em conflito entre si.

**Arquitetura sugerida:** Prompt com chain-of-thought explícito, pedindo que o modelo liste as regras aplicáveis e o raciocínio de por que cada uma se aplica ou não, antes de chegar à decisão final, além de uma seção clara de exceção para quando a informação disponível é insuficiente.

**Por que essa escolha faz sentido:** A tarefa envolve comparar múltiplas regras que podem conflitar, o que se beneficia de raciocínio explícito antes da resposta final; e definir a exceção evita que o modelo force uma decisão quando a informação disponível não é suficiente para decidir com segurança.

**Risco/erro associado:** Pedir a decisão final diretamente, sem raciocínio explícito, o que aumenta a chance de aplicar a regra errada em casos de conflito e não deixa rastro de por que aquela decisão foi tomada.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
