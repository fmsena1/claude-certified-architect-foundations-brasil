# Lab — Módulo 13: Segurança, Privacidade e IA Responsável

## Mapa de pontos de revisão humana num fluxo com Claude

Este micro-lab treina o mapeamento de onde a revisão humana deveria ser obrigatória dentro de um fluxo automatizado, sem depender de chamadas de API.

## Pré-requisitos

- Ter lido o README do módulo.
- Ter em mente um fluxo real (ou hipotético) que usa ou poderia usar Claude para sugerir ou tomar uma decisão.
- 20 a 30 minutos.

## Passo a passo

1. Desenhe, em texto ou diagrama simples, as etapas do fluxo escolhido, da entrada do usuário até a resposta final.
2. Marque em qual etapa a Claude entra: apenas sugerindo uma decisão, ou produzindo diretamente a resposta ao usuário.
3. Para cada saída possível do fluxo, classifique o risco em baixo, médio ou alto, considerando o impacto sobre a pessoa afetada caso a saída esteja errada.
4. Identifique pelo menos um ponto do fluxo onde uma decisão de risco alto ou ambíguo deveria ser bloqueada até revisão humana, e desenhe esse ponto explicitamente no diagrama.
5. Defina o critério que decide quando um caso é considerado "alto risco ou ambíguo" nesse fluxo específico (não deixe o critério implícito).
6. Anote como esse critério seria revisado no futuro (ex.: taxa de reclamação, erro identificado em auditoria, mudança regulatória).

## O que observar

- Fluxos que colocam Claude direto na resposta final, sem nenhum ponto de checagem, tendem a concentrar risco num único lugar do sistema.
- Nem toda etapa do fluxo precisa de revisão humana — o objetivo é isolar as etapas de maior impacto, não travar o fluxo inteiro.
- Um critério de risco implícito ("a gente sabe reconhecer quando é grave") não escala e não é auditável; escrevê-lo explicitamente muda o desenho do fluxo.

## Custos e limpeza

- Este lab é um exercício de raciocínio e não exige chamadas de API.
- Se decidir prototipar o fluxo com chamadas reais, monitore o custo de tokens de qualquer etapa que envolva reprocessamento pela fila de revisão.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
