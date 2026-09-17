# Casos de Uso — Módulo 09: Claude Code e Automação de Engenharia

## Caso 1 — Hook de guarda contra leitura integral de arquivos grandes

**Cenário:** Um repositório tem arquivos gerados automaticamente e logs com milhares de linhas. Um agente de código, sem restrição, tenta ler esses arquivos por inteiro sempre que precisa entender uma parte pequena deles, consumindo uma fração enorme da janela de contexto disponível.

**Arquitetura sugerida:** Um hook posicionado antes da chamada da ferramenta de leitura verifica o tamanho do arquivo alvo. Abaixo de um limite definido, a leitura acontece normalmente; acima do limite, a chamada é bloqueada e o agente é orientado a usar busca textual ou leitura parcial por trecho.

**Por que essa escolha faz sentido:** A regra precisa valer sempre, independentemente de o modelo "lembrar" de otimizar o uso de contexto. Um hook garante isso de forma determinística, fora do controle do modelo, sem depender de instrução repetida em cada prompt.

**Risco/erro associado:** Confiar apenas numa instrução de prompt pedindo para "evitar ler arquivos grandes" — o modelo pode não aplicar essa regra de forma consistente entre sessões diferentes.

## Caso 2 — Claude Code integrado a um pipeline de CI para revisão de pull request

**Cenário:** Um time quer que toda pull request receba uma primeira revisão automática (padrões de código, testes ausentes, riscos óbvios) antes da revisão humana, sem atrasar o fluxo de entrega.

**Arquitetura sugerida:** O agente roda em modo não-interativo dentro do pipeline de CI, com escopo de permissões restrito a leitura do diff e do repositório e a publicação de comentários na pull request — sem permissão para commitar, alterar branches protegidas ou acessar segredos do ambiente.

**Por que essa escolha faz sentido:** CI não tem humano no loop para confirmar ações caso a caso, então o controle precisa estar todo na configuração de permissões e nos hooks aplicados antes da execução, não na expectativa de que o modelo vai se comportar com cautela por conta própria.

**Risco/erro associado:** Rodar o agente em CI herdando o escopo amplo de permissões do próprio pipeline (por exemplo, credenciais de deploy), permitindo que uma revisão automática de código tenha, sem necessidade, acesso a ações destrutivas ou sensíveis.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
