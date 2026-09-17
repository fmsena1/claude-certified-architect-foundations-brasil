# Lab — Módulo 14: Deploy Enterprise (API direta, Bedrock, Vertex AI, Microsoft Foundry)

## Comparando canais para um cenário de compliance dado

Este micro-lab treina o raciocínio de escolha de canal de acesso ao Claude a partir de um cenário de compliance, sem depender de chamadas de API pagas.

## Pré-requisitos

- Ter lido o README do módulo.
- Consultar a documentação oficial de cada canal em [links.md](./links.md).
- 20 a 30 minutos.

## Passo a passo

1. Escolha (ou receba) um cenário fictício de compliance: por exemplo, "empresa com dados de saúde já auditados no Azure" ou "startup sem nuvem definida que só quer o recurso mais recente do Claude".
2. Liste, para o cenário escolhido, qual nuvem (se houver) já concentra a governança, o IAM e o procurement da organização.
3. Para cada um dos quatro canais (API direta, Bedrock, Vertex AI, Foundry), anote em uma frase por que ele se encaixaria ou não no cenário.
4. Identifique se o cenário exige um recurso específico do Claude e, em caso positivo, marque como pendência a confirmação de disponibilidade desse recurso no canal escolhido.
5. Escreva a decisão final em uma frase, citando explicitamente o critério de compliance/procurement usado — não apenas "canal X é melhor".
6. Repita o exercício com um segundo cenário que inverta a nuvem dominante (ex.: trocar AWS por GCP), e compare como a decisão muda.

## O que observar

- Na maioria dos cenários corporativos, a nuvem já dominante decide o canal antes de qualquer comparação de recurso.
- Cenários sem nuvem dominante (startups, times pequenos) tendem a favorecer a API direta, pela simplicidade e velocidade de acesso a recursos novos.
- Quando o cenário exige um recurso específico, a disponibilidade desse recurso no canal escolhido vira um bloqueio de arquitetura que precisa ser confirmado antes de prosseguir.

## Custos e limpeza

- Este lab é um exercício de raciocínio; não exige chamadas de API.
- Se decidir testar na prática em qualquer um dos quatro canais, confirme o modelo de faturamento daquele canal antes de rodar chamadas reais, já que cada canal de nuvem parceira tem billing próprio.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
