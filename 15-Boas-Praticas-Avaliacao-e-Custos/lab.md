# Lab — Módulo 15: Boas Práticas, Avaliação e Custos

## Montando um mini conjunto de avaliação para um prompt

Este lab constrói, do zero, um conjunto mínimo de avaliação para um prompt simples, e usa esse conjunto para comparar duas versões do mesmo prompt.

## Pré-requisitos

- Ter lido o README do módulo.
- Acesso à Claude API (ou ao Console) com uma chave configurada, se for executar as chamadas de verdade; o lab também funciona só no papel, sem chamadas de API.
- Um prompt real (ou fictício) simples, de uma única tarefa: classificação, extração ou resumo curto.
- 20 a 30 minutos.

## Passo a passo

1. Escreva de 8 a 10 casos de teste para o prompt escolhido: entrada de exemplo mais a saída esperada (rótulo, campo extraído ou resumo de referência), cobrindo casos comuns e pelo menos dois casos limítrofes.
2. Defina o critério de julgamento de cada caso: comparação exata, checagem de regra (a saída contém/não contém X) ou avaliação por outro modelo como juiz — escolha o critério mais simples que ainda seja confiável para a tarefa.
3. Rode o prompt atual (baseline) contra os 8 a 10 casos e registre a taxa de acerto.
4. Escreva uma segunda versão do prompt com uma mudança pontual (uma instrução mais clara, um exemplo adicional, uma restrição de formato) e rode a mesma versão contra o mesmo conjunto de casos.
5. Compare a taxa de acerto das duas versões caso a caso, não só no agregado, e identifique se algum caso que passava no baseline passou a falhar no candidato.
6. Decida, com base na comparação, se o prompt candidato deveria substituir o baseline, e registre essa decisão como se fosse uma promoção de versão de prompt em produção.

## O que observar

- Um conjunto pequeno de casos já é suficiente para revelar regressões pontuais que uma leitura rápida da saída não pegaria.
- Comparar caso a caso (não só a taxa de acerto agregada) é o que evita promover um prompt que piorou exatamente no caso mais sensível.
- Definir o critério de julgamento antes de rodar os casos evita ajustar o critério depois para justificar o resultado que se queria ver.

## Custos e limpeza

- Se executar via API de verdade, o custo deste lab é baixo: poucas dezenas de chamadas curtas.
- Prefira um modelo mais rápido/barato da linha para rodar o conjunto de avaliação repetidamente durante a iteração, reservando o modelo mais capaz para a validação final, se necessário.
- Não é preciso manter nenhum recurso rodando após o lab; se usou uma chave de API temporária ou de teste, revogue-a ao final.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
