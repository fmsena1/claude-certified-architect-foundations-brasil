# Flashcards - Claude Code e Automação de Engenharia

## Card 01

**Pergunta:** O que diferencia Claude Code de usar Claude por chat ou por chamada direta à API?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Claude Code opera com acesso a um ambiente real (arquivos, terminal, Git) e um loop de ação: decide uma ação, observa o resultado e decide o próximo passo, em vez de apenas trocar mensagens de texto.

</details>

## Card 02

**Pergunta:** Quais são os três níveis típicos de um modelo de permissões de ferramentas?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Permitir automaticamente, exigir confirmação explícita e negar por completo.

</details>

## Card 03

**Pergunta:** Por que um hook é mais confiável que uma instrução no prompt para impor uma regra crítica?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Porque o hook roda no ambiente de execução e é aplicado sempre que a condição ocorre; uma instrução no prompt depende do modelo lembrar e escolher segui-la.

</details>

## Card 04

**Pergunta:** Quando faz mais sentido criar uma skill em vez de repetir a instrução em cada prompt?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Quando a tarefa é recorrente e segue um padrão claro, mas ainda exige alguma decisão contextual do modelo — a skill é carregada quando o contexto combina com sua descrição.

</details>

## Card 05

**Pergunta:** Qual critério deveria guiar a concessão de permissões automáticas ao agente?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
O princípio do menor privilégio: automático só para ações de baixo risco e reversíveis; confirmação para ações com efeito colateral relevante; negação total para o que nunca deveria rodar sozinho.

</details>

## Card 06

**Pergunta:** Um commit ou pull request criado pelo agente deveria receber tratamento diferente de uma mudança feita por uma pessoa?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. Deveria passar pela mesma revisão de qualquer outra mudança de código antes de ser aceito.

</details>

## Card 07

**Pergunta:** O que muda ao rodar o agente em modo não-interativo dentro de um pipeline de CI?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não há humano no loop para confirmar ações, e o agente herda o escopo de permissões e credenciais do próprio pipeline — por isso o escopo precisa ser restrito de antemão.

</details>

## Card 08

**Pergunta:** Hook e skill resolvem o mesmo tipo de problema?

<details>
<summary><strong>Ver resposta</strong></summary>

**Resposta:**
Não. Hook é determinístico e roda fora do controle do modelo; skill depende do modelo reconhecer o contexto e decidir usá-la.

</details>

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
