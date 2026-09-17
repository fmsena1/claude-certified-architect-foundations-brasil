# Casos de Uso — Módulo 17: Glossário

## Caso 1 — Confundir modelo com canal de acesso numa reunião de arquitetura

**Cenário:** Numa reunião de decisão de fornecedor, alguém do time de infraestrutura afirma que "a empresa já usa AWS, então o Claude via Bedrock vai ser um modelo diferente e mais fraco do que o Claude direto da Anthropic". A decisão de canal está prestes a ser tomada com base nessa premissa.

**Esclarecimento correto:** O modelo Claude é o mesmo nos dois casos; o que muda entre API direta e Amazon Bedrock é o canal de acesso — quem autentica, quem fatura e onde o tráfego fica registrado, não a capacidade do modelo. A escolha deveria ser guiada por onde a organização já tem sua fronteira de compliance e governança estabelecida, não por uma suposta diferença de qualidade do modelo.

**Por que essa escolha faz sentido:** Separar "modelo" de "canal de acesso" evita decisões de arquitetura baseadas em premissa técnica errada e recoloca o debate no critério que realmente importa: compliance, procurement e residência de dados.

**Risco/erro associado:** Escolher a API direta por medo infundado de "modelo mais fraco" no canal parceiro, perdendo o alinhamento com a governança de nuvem já auditada da empresa, ou o oposto — descartar Bedrock por achar que ele já resolveria compliance sozinho, sem checar paridade de recursos.

## Caso 2 — Tratar RAG e fine-tuning como sinônimos de "personalizar o modelo"

**Cenário:** Um time de produto pede "fine-tuning" para o assistente responder com base no catálogo de produtos da empresa, que muda toda semana. O time técnico começa a orçar um processo de fine-tuning sem questionar o requisito.

**Esclarecimento correto:** O requisito descrito — responder com base em um catálogo que muda com frequência — é exatamente o problema que RAG resolve, não fine-tuning. Fine-tuning ajusta os pesos do modelo para um domínio ou estilo muito específico e estável; um catálogo semanal exigiria retreinar constantemente, o que não é viável nem é o que a tecnologia resolve bem.

**Por que essa escolha faz sentido:** Nomear corretamente o problema (conhecimento externo e variável) evita orçar e construir a solução mais cara e menos flexível para um requisito que a opção mais barata e mais adequada já cobre.

**Risco/erro associado:** Investir tempo e custo em um pipeline de fine-tuning que fica desatualizado a cada mudança de catálogo, quando um pipeline de RAG resolveria o mesmo requisito de forma mais barata e mais fácil de manter atualizado.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
