# Módulo 18 — Recursos e Links

Este é o módulo final do repositório. Ele não introduz um domínio técnico novo — reúne, de forma curada, as fontes oficiais que sustentam tudo o que foi dito nos módulos 01 a 17. Modelos mudam de nome, limites de contexto mudam, preços mudam; este módulo existe para apontar sempre para onde a verdade atual está, em vez de tentar congelá-la em texto.

## Objetivo

Ao final deste módulo, você deve saber onde procurar cada tipo de informação oficial sobre Claude e Anthropic — documentação técnica, anúncio de produto, mudança de modelo, código de referência ou política de confiança —, sem depender de memória ou de valores fixados neste repositório.

## Onde este tema apareceria numa avaliação

- Identificar qual fonte oficial responde a uma dúvida específica (ex.: limite de contexto de um modelo vs. anúncio de lançamento vs. política de retenção de dados).
- Diferenciar documentação técnica de anúncio de marketing/produto.
- Saber onde confirmar uma mudança recente antes de tomar uma decisão de arquitetura.
- Reconhecer que este repositório é material comunitário e não substitui a documentação oficial.
- Localizar repositórios de referência e o protocolo aberto usado para integração de ferramentas (MCP).

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Recursos/Serviços Claude principais

| Recurso | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Documentação técnica (Claude Docs) | Fonte de verdade para API, modelos, ferramentas e limites | Referenciada em praticamente todos os módulos 04–14 |
| Anúncios de produto (Anthropic News) | Registra lançamento e descontinuação de modelo, novas capacidades | Complementa o módulo 04 (Model Family) e o 15 (custos/versionamento) |
| Console da Anthropic | Ponto de acesso a chaves de API, billing e configuração de conta | Base prática para os labs dos módulos 05 em diante |
| Repositórios open source oficiais | Código de referência, SDKs e exemplos mantidos pela Anthropic | Apoia os módulos 05 (API), 07 (MCP) e 08 (Agent SDK) |
| Model Context Protocol | Especificação aberta do padrão de integração de ferramentas | Base conceitual do módulo 07 |
| Central de confiança (Trust) | Postura de segurança, conformidade e privacidade da Anthropic | Referenciada no módulo 13 (Segurança e IA Responsável) |

## Conceitos essenciais

### Documentação técnica não é a mesma coisa que anúncio de produto

A documentação técnica descreve como algo funciona agora — parâmetros de API, limites de contexto, comportamento de uma ferramenta. Um anúncio de produto descreve o que mudou e por quê, geralmente com contexto de posicionamento. As duas fontes respondem perguntas diferentes: se a dúvida é "como uso este parâmetro", a resposta está na documentação; se a dúvida é "isso já existe hoje" ou "o que mudou desde a última vez que chequei", a resposta está no anúncio ou changelog.

### Por que este módulo evita fixar detalhes que mudam rápido

Nomes de modelo, limites de contexto, preços e disponibilidade por região mudam com frequência maior do que o ciclo de atualização de um repositório de estudo comunitário. Fixar esses valores aqui criaria uma falsa sensação de precisão que envelhece mal. A escolha deliberada deste módulo é apontar para a fonte, não replicar o dado.

## Exemplo prático

Uma pessoa quer confirmar se um modelo específico ainda está disponível e qual o limite de contexto atual antes de decidir a arquitetura de um sistema novo.

```
duvida: "modelo X ainda está disponível? qual o limite de contexto?"
  -> não confiar em resposta de memória ou em texto de módulo anterior
  -> consultar documentação técnica oficial (Claude Docs)
  -> se a resposta não estiver clara, checar anúncios recentes (Anthropic News)
  -> decisão de arquitetura só é tomada depois dessa confirmação
```

## Raciocínio arquitetural

### Trate este repositório como mapa, não como fonte primária

Todo módulo deste repositório explica conceitos e trade-offs, mas números específicos (preço, limite, nome exato de modelo) mudam fora do controle deste material. Use os módulos 01–17 para entender o raciocínio; use os links deste módulo para confirmar o dado atual antes de decidir algo em produção.

### Priorize a fonte mais específica disponível

Quando documentação técnica e anúncio de produto parecem conflitar, a documentação técnica tende a ser a mais atualizada para comportamento de API; o anúncio tende a ser mais atualizado para disponibilidade e posicionamento de produto. Na dúvida, prefira a fonte mais específica para o tipo de pergunta que você está fazendo.

## Boas práticas

- Sempre confirme valores sensíveis a mudança (preço, limite, nome de modelo) na fonte oficial antes de decidir arquitetura.
- Separe mentalmente "o que a documentação diz que a API faz" de "o que o anúncio diz que foi lançado".
- Revisite periodicamente a curadoria de [links.md](./links.md); páginas específicas mudam de endereço com mais frequência que o domínio raiz.
- Prefira repositórios open source oficiais como referência de código, não blogs de terceiros não verificados.
- Trate a central de confiança como a fonte correta para dúvidas de segurança, privacidade e conformidade — não suposição.

## Erros comuns

- Confiar em um valor numérico (preço, limite de contexto) lido em um material de estudo desatualizado, incluindo este.
- Confundir um anúncio de produto com documentação técnica válida para implementação.
- Não revisar a linha de modelos e capacidades antes de uma decisão de arquitetura importante.
- Tratar um repositório comunitário, incluindo este, como fonte oficial da Anthropic.

## Resumo para revisão

- Documentação técnica responde "como funciona"; anúncio de produto responde "o que mudou".
- Este repositório é um mapa de conceitos e raciocínio, não uma fonte de dados fixos.
- Repositórios open source oficiais e o Model Context Protocol são referências de código e integração.
- A central de confiança é a fonte correta para dúvidas de segurança e conformidade.
- Sempre confirme na fonte oficial antes de decidir algo que dependa de um valor específico.

## Próximos passos

Este é o último módulo do repositório — não há um "módulo 19" a seguir. Para fechar a revisão:

- Revise o [Módulo 16 — Simulados e Questões](../16-Simulados-e-Questoes/README.md) para consolidar o conteúdo de todo o repositório.
- Revise o [Módulo 17 — Glossário](../17-Glossario/README.md) para fixar os termos-chave usados do módulo 01 ao 15.
- Resolva a [revisão guiada deste módulo](./questoes.md) e os [flashcards](./flashcards.md).
- Lembre-se: este é material de estudo comunitário e não-oficial. O ecossistema Claude muda com frequência — confira periodicamente a documentação oficial listada em [links.md](./links.md) antes de tomar qualquer decisão técnica com base neste repositório.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
