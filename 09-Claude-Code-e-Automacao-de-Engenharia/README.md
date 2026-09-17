# Módulo 09 — Claude Code e Automação de Engenharia

Claude Code é a interface de linha de comando e de IDE que transforma Claude em um agente de desenvolvimento capaz de ler, editar e executar código dentro do ambiente real de trabalho. Este módulo cobre os mecanismos que controlam esse agente: permissões de ferramentas, hooks determinísticos, skills reutilizáveis e integração com Git e pipelines de CI. O foco é entender esses mecanismos de controle, não decorar comandos específicos que mudam entre versões.

## Objetivo

Ao final deste módulo, você deve conseguir explicar a diferença entre usar Claude por chat/API e usar Claude Code como agente de desenvolvimento, descrever como hooks e permissões controlam o que o agente pode fazer sem supervisão direta, e propor uma skill ou um hook para automatizar uma tarefa repetitiva de engenharia.

## Onde este tema apareceria numa avaliação

- Diferenciar Claude Code de um chatbot comum ou de uma chamada direta à API.
- Explicar o papel de hooks (por exemplo, antes ou depois do uso de uma ferramenta) no controle determinístico das ações do agente.
- Descrever quando encapsular um comportamento numa skill em vez de repetir a mesma instrução em cada prompt.
- Avaliar um modelo de permissões de ferramentas (permitir, perguntar, negar) para um cenário de uso real.
- Reconhecer boas práticas de integração de um agente de código com Git e CI sem comprometer segurança.

## Navegação do módulo

- [README](./README.md)
- [Cheatsheet](./cheatsheet.md)
- [Flashcards](./flashcards.md)
- [Questões](./questoes.md)
- [Casos de uso](./casos-de-uso.md)
- [Lab prático](./lab.md)
- [Links oficiais](./links.md)

## Conceitos e mecanismos principais

| Conceito | Papel no módulo | Como se conecta com o restante do ecossistema |
| --- | --- | --- |
| Claude Code | Agente de desenvolvimento que opera com acesso a arquivos, terminal e ferramentas do projeto | Aplica na prática os conceitos de agente do módulo 08 |
| Permissões de ferramentas | Define o que o agente pode fazer sozinho, o que exige confirmação e o que é proibido | Base de segurança para qualquer automação descrita neste módulo |
| Hooks | Automação determinística executada antes ou depois de uma chamada de ferramenta | Complementa prompt engineering (módulo 06) com regras que não dependem do modelo lembrar |
| Skills | Conjunto nomeado de instruções carregado quando o contexto da tarefa combina com ele | Reduz repetição de instrução e padroniza tarefas recorrentes de engenharia |
| Integração com Git | Criação de commits, branches e pull requests como parte do fluxo do agente | Precisa das mesmas revisões de segurança e qualidade de qualquer mudança de código |
| Uso em CI / modo não-interativo | Execução do agente sem intervenção humana em pipelines automatizados | Herda o escopo de permissões e credenciais do pipeline onde roda |

## Conceitos essenciais

### Claude Code como agente de desenvolvimento

Usar Claude por chat ou por chamada direta à API significa trocar mensagens de texto: o modelo lê o que foi enviado e responde. Claude Code muda essa relação porque dá ao modelo acesso a um ambiente real — arquivos do repositório, terminal, histórico do Git — e um loop de ação: o agente lê código, decide uma ação (editar um arquivo, rodar um comando, buscar um trecho), observa o resultado e decide o próximo passo. Isso o aproxima do conceito de agente autônomo visto no módulo 08, mas aplicado especificamente a tarefas de engenharia de software.

### Permissões de ferramentas

Nem toda ação que o agente pode propor deveria rodar sem supervisão. O modelo de permissões distingue, tipicamente, três níveis: ações permitidas automaticamente (leitura de arquivo, busca), ações que exigem confirmação explícita (edição de arquivo, execução de comando com efeito colateral) e ações negadas por completo (comandos destrutivos, acesso a segredos). Esse modelo é configurável por projeto ou por usuário, e é a primeira linha de defesa contra uma ação indesejada do agente.

### Hooks: automação determinística ao redor de ferramentas

Um hook é código que roda de forma garantida em um ponto específico do ciclo de vida de uma chamada de ferramenta — por exemplo, antes de uma leitura de arquivo ou depois de uma edição. Diferente de uma instrução dentro do prompt, que depende do modelo escolher segui-la, um hook executa sempre que a condição é atingida, porque quem o executa é o ambiente de execução, não o modelo. Isso o torna adequado para regras que não podem falhar por esquecimento: bloquear leitura de arquivos sensíveis, impedir um commit direto na branch principal, ou forçar um formato de saída antes de aceitar uma edição.

### Skills: comportamento nomeado e reutilizável

Uma skill empacota instruções, e às vezes ferramentas próprias, sob um nome e uma descrição de quando ela deve ser usada. Em vez de reescrever a mesma orientação detalhada em todo prompt de uma tarefa recorrente (por exemplo, "sempre que for gerar teste unitário, siga esta estrutura"), a skill é carregada automaticamente quando o contexto da conversa combina com sua descrição, ou é chamada explicitamente por nome. Skills reduzem repetição e tornam o comportamento do agente mais consistente entre sessões diferentes.

## Exemplo prático

Um repositório tem arquivos gerados automaticamente e logs com milhares de linhas. Sem controle, um agente de código pode tentar ler um desses arquivos por inteiro, consumindo uma fração enorme da janela de contexto disponível para pouco ganho de informação. Um hook posicionado antes da chamada da ferramenta de leitura resolve isso de forma determinística: verifica o tamanho do arquivo alvo e, se ultrapassar um limite, bloqueia a leitura direta e orienta o agente a usar busca ou leitura parcial.

```
prompt do usuário
      |
      v
agente decide chamar a ferramenta de leitura de arquivo
      |
      v
hook intercepta a chamada antes da execução
      |
      +-- arquivo dentro do limite --> ferramenta executa normalmente
      |
      +-- arquivo acima do limite  --> chamada bloqueada, agente usa busca ou leitura parcial
```

## Raciocínio arquitetural

### Hook, skill ou instrução no prompt: onde colocar cada regra

A escolha depende de quão determinística a regra precisa ser. Uma regra que não pode depender do modelo lembrar — como impedir a leitura integral de um arquivo grande ou bloquear um comando destrutivo — pertence a um hook, porque roda no ambiente de execução, fora do controle do modelo. Uma regra que descreve como executar bem uma tarefa recorrente, mas ainda exige julgamento do modelo caso a caso, pertence a uma skill. Uma preferência pontual, válida para uma única tarefa ou sessão, cabe numa instrução direta no prompt ou num arquivo de instruções do projeto.

### Quanto de permissão automática conceder

O critério é o princípio do menor privilégio: permitir automaticamente apenas ações de baixo risco e reversíveis (leitura, busca, execução de teste), exigir confirmação para ações com efeito colateral relevante (edição de arquivo, escrita, chamadas de rede) e negar por completo o que nunca deveria rodar de forma automatizada, mesmo que o agente proponha. Ampliar permissões deveria ser uma decisão consciente baseada em confiança acumulada com o comportamento do agente naquele projeto, não uma configuração padrão para "evitar interrupções".

## Boas práticas

- Prefira hooks para regras que não podem depender da memória ou do julgamento do modelo.
- Use skills para padronizar tarefas repetitivas que ainda exigem alguma decisão contextual.
- Aplique o princípio do menor privilégio ao configurar permissões de ferramentas.
- Nunca configure o agente para pular verificações de segurança (como hooks de commit) só para acelerar o fluxo.
- Trate qualquer commit, branch ou pull request criado pelo agente como uma mudança de código comum: revise antes de aceitar.
- Rode o agente em modo não-interativo (CI) apenas com escopo de permissões restrito e bem definido.

## Erros comuns

- Conceder permissão ampla de "permitir sempre" achando que isso só economiza tempo.
- Repetir a mesma instrução detalhada em cada prompt em vez de encapsulá-la numa skill.
- Deixar o agente executar comandos destrutivos de Git (como reset forçado ou push forçado) sem confirmação explícita.
- Confundir hook com skill: hook é determinístico e roda sempre; skill depende do modelo decidir usá-la.
- Integrar o agente a um pipeline de CI sem limitar o escopo de permissões, herdando acesso amplo demais do próprio pipeline.

## Resumo para revisão

- Claude Code aplica o conceito de agente a um ambiente real de desenvolvimento: arquivos, terminal e Git.
- Permissões de ferramentas definem o que roda automaticamente, o que exige confirmação e o que é proibido.
- Hooks são determinísticos e executam fora do controle do modelo; skills dependem do modelo escolher usá-las.
- Integração com Git e CI exige o mesmo cuidado de revisão que qualquer outra automação de engenharia.
- Menor privilégio é o critério padrão para decidir o que o agente pode fazer sozinho.

## Próximos passos

- Resolva a [revisão guiada do módulo](./questoes.md) antes de seguir.
- Revise os [flashcards](./flashcards.md) como revisão espaçada.
- Consulte o [lab](./lab.md) para praticar o desenho de um hook ou skill simples.
- Continue para [Módulo 10 — Dados, RAG e Embeddings](../10-Dados-RAG-e-Embeddings/README.md).

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
