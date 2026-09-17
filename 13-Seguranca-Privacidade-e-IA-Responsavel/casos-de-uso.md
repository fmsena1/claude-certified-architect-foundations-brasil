# Casos de Uso — Módulo 13: Segurança, Privacidade e IA Responsável

## Caso 1 — Assistente de triagem em saúde

**Cenário:** Uma clínica quer usar Claude para pré-triagem de sintomas relatados por pacientes antes da consulta, lidando com dado de saúde sensível.

**Arquitetura sugerida:** Guardrail de entrada que restringe o escopo da conversa a coleta de sintomas (sem sugerir diagnóstico ou tratamento), política de retenção de dados confirmada e alinhada aos requisitos de dado sensível do setor, e saída sempre encaminhada a um profissional de saúde antes de qualquer orientação chegar ao paciente.

**Por que essa escolha faz sentido:** Dado de saúde é sensível por natureza, e uma sugestão incorreta de diagnóstico tem potencial de dano real; o guardrail de escopo evita que o assistente extrapole para território clínico, e a revisão profissional cobre o restante do risco.

**Risco/erro associado:** Deixar o assistente sugerir diagnóstico ou tratamento diretamente ao paciente sem revisão profissional, tratando o comportamento padrão do modelo como garantia suficiente de segurança clínica.

## Caso 2 — Decisão automatizada de crédito

**Cenário:** Uma fintech usa Claude para analisar solicitações de crédito e sugerir aprovação ou recusa com base em dados financeiros do solicitante.

**Arquitetura sugerida:** Fluxo que separa decisões claramente favoráveis (seguem automáticas) de decisões negativas ou ambíguas (roteadas para fila de revisão humana antes de qualquer resposta final), com critério de risco documentado e revisado periodicamente.

**Por que essa escolha faz sentido:** Uma recusa de crédito afeta a vida financeira da pessoa de forma significativa; revisão humana nos casos negativos ou ambíguos reduz o risco de uma decisão automatizada incorreta ou injusta chegar ao solicitante sem checagem.

**Risco/erro associado:** Deixar todas as decisões, inclusive recusas, seguirem automáticas sem qualquer ponto de revisão humana, por considerar o volume alto demais para justificar o controle.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
