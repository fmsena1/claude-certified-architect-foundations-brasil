# Cheatsheet — Módulo 14: Deploy Enterprise (API direta, Bedrock, Vertex AI, Microsoft Foundry)

> Revisão rápida dos quatro canais de acesso ao Claude. Disponibilidade de recursos e formato de identificador de modelo mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| API direta (Anthropic) | Autenticação por chave emitida no Console; costuma receber recursos novos primeiro | Assumir que todo canal parceiro tem o mesmo recurso no mesmo dia |
| Amazon Bedrock | Operado pela AWS, dentro da conta/região AWS do cliente; autenticação via identidade AWS | Preço e SLA são definidos pela AWS, não diretamente pela Anthropic |
| Google Vertex AI | Operado pelo GCP, exige projeto e região; autenticação via credenciais padrão do Google Cloud | Formato do identificador de modelo pode não usar prefixo, diferente de outros canais |
| Microsoft Foundry | Operado pela Microsoft, faturado via Microsoft Marketplace | Nem todo SDK de linguagem tem suporte igual a este canal |
| Critério de escolha | Segue a fronteira de compliance/procurement já existente da organização | Escolher canal só por preferência técnica, ignorando governança já estabelecida |
| Paridade de recursos | Recurso novo pode não estar disponível em todos os canais ao mesmo tempo | Arquitetar em cima de um recurso sem confirmar disponibilidade no canal escolhido |
| Residência de dados | Canal de nuvem parceira herda a fronteira de residência/auditoria daquela nuvem | Tratar residência de dados como suposição em vez de requisito documentado |

## Regras práticas

- Decida o canal pela fronteira de compliance e procurement já existente na organização, não pela API "mais avançada" no momento.
- Confirme a disponibilidade do recurso específico necessário no canal escolhido antes de arquitetar em torno dele.
- Trate autenticação, billing e formato de identificador de modelo como parte da decisão de canal, não como detalhe posterior.
- Documente por que um canal foi escolhido, para permitir revisão futura da decisão.

## Gatilhos de memorização

- Mesmo modelo, canal diferente: o que muda é quem autentica, quem fatura e onde o tráfego fica registrado.
- Já está numa nuvem? O canal parceiro dessa nuvem tende a vencer a decisão.
- Recurso novo nem sempre está em todo canal ao mesmo tempo — confirme antes de assumir.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
