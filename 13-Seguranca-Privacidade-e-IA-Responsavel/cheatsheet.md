# Cheatsheet — Módulo 13: Segurança, Privacidade e IA Responsável

> Revisão rápida dos controles de segurança, privacidade e uso responsável. Condições contratuais e políticas mudam com o tempo — confirme sempre em [links.md](./links.md).

## Visão rápida

| Tópico | O que lembrar | Cuidado/erro comum |
| --- | --- | --- |
| Retenção de dados | Varia por canal de acesso e contrato; não é um valor único fixo | Assumir a mesma regra de retenção para qualquer canal ou plano |
| Uso de dados em treinamento | É uma pergunta separada da retenção; precisa ser checada por contrato | Achar que "API nunca treina com meus dados" vale sem checar o acordo aplicável |
| Política de Uso Aceitável | Documento que define usos permitidos e proibidos da Claude | Tratar como texto só do time legal, sem virar requisito de produto |
| Guardrails técnicos | Implementação da aplicação para reforçar a política de uso | Achar que o comportamento padrão do modelo já é guardrail suficiente |
| Constitutional AI | Molda o comportamento padrão do modelo diante de pedidos sensíveis | Confundir "modelo recusou o óbvio" com "aplicação está protegida" |
| Revisão humana | Ponto de controle obrigatório antes de decisões de alto risco valerem | Não ter nenhum ponto de revisão, ou exigir revisão em volume inviável |

## Regras práticas

- Confirme retenção e uso de dados para o canal específico antes de enviar dado de produção real.
- Trate a Política de Uso Aceitável como requisito de produto, não só como cláusula contratual.
- Some guardrail técnico específico do domínio ao comportamento padrão do modelo — não confie só em um dos dois.
- Defina critério explícito de risco para separar decisão automática de decisão que exige revisão humana.
- Revise os critérios de revisão humana com dados reais de erro, não só na concepção inicial do fluxo.

## Gatilhos de memorização

- Retenção ≠ treinamento: são duas perguntas, duas respostas, dois lugares para checar.
- Política é papel, guardrail é código — os dois precisam existir.
- Constitutional AI dá o piso de comportamento; guardrail de domínio dá o teto de segurança da sua aplicação.
- Alto risco sobre pessoas = humano decide por último, não o modelo.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
