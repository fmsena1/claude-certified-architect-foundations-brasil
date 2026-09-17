# Casos de Uso — Módulo 14: Deploy Enterprise (API direta, Bedrock, Vertex AI, Microsoft Foundry)

## Caso 1 — Banco com workloads auditados na AWS

**Cenário:** Um banco já mantém seus sistemas sensíveis dentro de uma conta AWS auditada, com IAM, VPC e controles de rede aprovados pelo time de segurança. Ele quer adicionar uma funcionalidade com Claude sem abrir uma nova fronteira de fornecedor para revisão de compliance.

**Arquitetura sugerida:** Acesso ao Claude via Amazon Bedrock, mantendo autenticação, rede e faturamento dentro da mesma conta AWS já auditada.

**Por que essa escolha faz sentido:** O tráfego de inferência herda os controles de identidade, rede e auditoria que o banco já validou para o restante do seu sistema na AWS, evitando um novo ciclo de aprovação de fornecedor só para acessar o modelo.

**Risco/erro associado:** Escolher a API direta da Anthropic apenas por um recurso lançado primeiro ali, sem considerar que isso abriria uma nova fronteira de compliance fora do perímetro já auditado.

## Caso 2 — Aplicação europeia com exigência de residência de dados no GCP

**Cenário:** Uma empresa com operação na União Europeia já centraliza seus dados de clientes em projetos Google Cloud com região fixada na Europa, por exigência regulatória de residência de dados.

**Arquitetura sugerida:** Acesso ao Claude via Google Vertex AI, com o projeto e a região GCP configurados para manter o tráfego de inferência dentro da mesma região onde os dados já residem.

**Por que essa escolha faz sentido:** Vertex AI permite fixar a região do projeto GCP usada para a chamada, alinhando o acesso ao Claude com a mesma fronteira de residência de dados já aplicada ao restante da infraestrutura da empresa.

**Risco/erro associado:** Usar a API direta sem verificar em qual região os dados de entrada e saída são processados, criando uma inconsistência com a exigência regulatória de residência de dados já em vigor para o restante do sistema.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
