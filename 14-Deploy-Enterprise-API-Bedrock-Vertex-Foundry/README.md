# Módulo 14 — Deploy Enterprise (API direta, Bedrock, Vertex AI, Microsoft Foundry)

Este módulo cobre os diferentes canais pelos quais uma organização pode acessar o modelo Claude: diretamente pela API da Anthropic, ou por um dos três provedores de nuvem parceiros (Amazon Bedrock, Google Vertex AI, Microsoft Foundry). O ponto central não é decorar nomes de SDK, mas entender que a escolha de canal é, na prática, uma decisão de compliance, procurement e residência de dados — não apenas uma decisão técnica.

## Objetivo

Ao final deste módulo, você deve conseguir comparar os quatro canais de acesso ao Claude, explicar em que cenário cada um faz mais sentido, e reconhecer que nem todo recurso novo chega ao mesmo tempo em todos os canais.

## Onde este tema apareceria numa avaliação

- Escolher o canal de acesso adequado para um cenário com restrição de nuvem, residência de dados ou procurement já definidos.
- Explicar por que uma organização já operando em AWS, GCP ou Azure tende a preferir o canal de nuvem parceira correspondente.
- Reconhecer que preço, SLA e disponibilidade de recursos variam entre canais e são operados por partes diferentes.
- Identificar que autenticação e formato de identificador de modelo mudam conforme o canal escolhido.
- Distinguir uma decisão de arquitetura técnica de uma decisão de compliance/residência de dados.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Recursos/Serviços Claude principais

| Canal | Papel típico | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| API direta (Anthropic) | Acesso de primeira parte ao Claude, com autenticação por chave de API via Console | Costuma ser o primeiro canal a receber recursos novos; referência de comportamento "padrão" do modelo |
| Amazon Bedrock | Acesso ao Claude operado pela AWS, dentro da conta e da região AWS do cliente | Útil para organizações com governança, IAM e residência de dados já centralizados na AWS |
| Google Vertex AI | Acesso ao Claude operado pelo Google Cloud, dentro do projeto e região GCP do cliente | Útil para organizações com governança e billing já centralizados no GCP |
| Microsoft Foundry | Acesso ao Claude operado pela Microsoft, billado via Microsoft Marketplace | Útil para organizações com contrato e governança já centralizados no Azure |

> Nomes de produto, formatos de identificador de modelo e disponibilidade de recursos por canal mudam com o tempo. Trate esta tabela como mapa conceitual — confirme detalhes atualizados em [links.md](./links.md).

## Conceitos essenciais

### Os quatro canais de acesso ao modelo Claude

A Anthropic disponibiliza o Claude por acesso direto (API própria, autenticada por chave emitida no Console da Anthropic) e por três provedores de nuvem parceiros — Amazon Bedrock, Google Vertex AI e Microsoft Foundry. Em todos os casos o modelo é o mesmo Claude, mas o canal de acesso muda: quem autentica a chamada, quem fatura o uso, em qual identidade de nuvem o tráfego fica registrado e, em alguns casos, até o formato do identificador do modelo usado na chamada.

### Critério de escolha do canal

A pergunta que decide o canal raramente é "qual API é tecnicamente melhor" — o modelo por trás é o mesmo. A pergunta é: onde a organização já tem sua governança de nuvem, seu processo de procurement e sua fronteira de compliance estabelecidos? Uma organização com workloads sensíveis já auditados dentro de uma conta AWS tende a preferir Bedrock, para manter o tráfego do Claude dentro da mesma fronteira de controle de identidade e rede que já usa para o resto do sistema. O mesmo raciocínio vale para GCP com Vertex AI e para Azure com Microsoft Foundry.

### Paridade de recursos entre canais

Nem todo recurso novo do Claude chega ao mesmo tempo, ou da mesma forma, a todos os canais. Um recurso lançado primeiro na API direta pode demorar a aparecer em um canal de nuvem parceira, ou pode não estar disponível ali. Antes de arquitetar uma solução em torno de um recurso específico, vale confirmar em qual canal esse recurso está disponível — não assumir paridade automática.

### Residência de dados e compliance

Cada canal de nuvem parceira mantém o tráfego de inferência dentro da região e da conta de nuvem escolhidas pelo cliente naquele provedor, herdando os controles de residência de dados, criptografia e auditoria que a organização já aplica ao restante da sua infraestrutura naquela nuvem. Isso é frequentemente o motivo real da escolha: não ganhar uma capacidade técnica nova, mas evitar abrir uma nova fronteira de compliance para um único fornecedor adicional.

## Exemplo prático

### Mesma chamada, canal diferente

Uma aplicação que já teria a lógica de prompt pronta muda muito pouco ao trocar de canal — o que muda é como o cliente é construído e autenticado.

```
cliente_api_direta = Anthropic()
cliente_bedrock = AnthropicBedrockMantle(aws_region="us-east-1")
cliente_vertex = AnthropicVertex(project_id="projeto-gcp", region="us-east5")
cliente_foundry = AnthropicFoundry(resource="recurso-foundry")
```

O corpo da chamada (mensagens, parâmetros de saída) permanece conceitualmente o mesmo; a diferença está na autenticação, na região/projeto informado e, em alguns canais, no formato do identificador do modelo.

## Raciocínio arquitetural

### O canal segue a fronteira de compliance existente, não a preferência técnica

Antes de comparar recursos ou latência entre canais, identifique onde a organização já tem sua fronteira de compliance auditada. Se essa fronteira já existe em uma nuvem específica, o canal parceiro correspondente costuma vencer a decisão mesmo que a API direta tenha, naquele momento, um recurso a mais.

### Quando priorizar a API direta

A API direta faz mais sentido quando a organização não tem um compromisso de nuvem dominante, quando o recurso necessário só está disponível ali, ou quando o time quer o caminho mais curto até uma capacidade recém-lançada, sem esperar a disponibilidade em um canal parceiro.

## Boas práticas

- Escolher o canal pelo alinhamento com a nuvem e o procurement já auditados da organização, não por preferência técnica isolada.
- Confirmar, antes de arquitetar, se o recurso necessário já está disponível no canal escolhido.
- Tratar residência de dados como requisito de arquitetura explícito e documentado, não como suposição.
- Revisar o formato do identificador de modelo ao trocar de canal — o formato varia entre eles.
- Considerar autenticação e billing consolidado (chave de API vs. identidade de nuvem vs. marketplace) como parte da decisão, não como detalhe de implementação tardio.

## Erros comuns

- Assumir que todo canal tem paridade total de recursos com a API direta no mesmo dia de lançamento.
- Trocar de canal sem revisar o formato do identificador de modelo usado nas chamadas.
- Tratar preço e SLA de um canal de nuvem parceira como definidos diretamente pela Anthropic, quando são operados pelo provedor parceiro.
- Escolher canal como decisão puramente técnica, ignorando compliance e procurement já existentes.
- Deixar de documentar por que um canal foi escolhido, dificultando revisão futura da decisão.

## Resumo para revisão

- Existem quatro canais de acesso ao Claude: API direta, Amazon Bedrock, Google Vertex AI e Microsoft Foundry.
- A escolha de canal é, na prática, uma decisão de compliance, procurement e residência de dados, não só técnica.
- Nem todo recurso novo chega ao mesmo tempo a todos os canais — confirme disponibilidade antes de arquitetar.
- Cada canal de nuvem parceira herda a fronteira de controle e residência de dados que a organização já usa naquela nuvem.
- Autenticação, billing e formato de identificador de modelo variam por canal.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar a escolha de canal por cenário de compliance.
- Continue para [Módulo 15 — Boas Práticas, Avaliação e Custos](../15-Boas-Praticas-Avaliacao-e-Custos/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
