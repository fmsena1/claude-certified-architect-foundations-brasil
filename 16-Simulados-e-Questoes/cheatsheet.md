# Cheatsheet — Como Interpretar Questões de Simulado

Sinais rápidos para ler um enunciado de cenário, eliminar alternativas erradas e reconhecer as armadilhas conceituais mais comuns entre os módulos 01 a 15.

| Sinal no enunciado | O que fazer | Cuidado/erro comum |
| --- | --- | --- |
| "sem escrever código" / "só testar a ideia" | Pense em produto pronto (Claude.ai, integrações) antes de qualquer API | Não pule direto para uma resposta com SDK ou canal de nuvem |
| "quantos tokens", "custo por chamada" | Lembre que token ≠ palavra ≠ caractere | Não estime custo contando palavras do enunciado |
| "toda vez que executo, a resposta muda" | Pense em temperatura, não em bug | Temperatura zero reduz variação, mas não elimina garantidamente toda variação possível |
| "não sabemos quantos passos serão necessários" | Sinal de agente autônomo, não de tool use simples | Não confunda "usa ferramenta" com "é um agente" |
| "isso precisa acontecer sempre, sem depender do modelo lembrar" | Sinal de hook, não de instrução no prompt ou skill | Skill ainda depende do modelo decidir usá-la |
| "dado muda toda semana" / "não cabe no prompt" | Sinal de RAG, não de contexto longo nem fine-tuning | Não escolha fine-tuning como primeira opção de customização |
| "reenviamos o mesmo bloco grande em toda chamada" | Sinal de prompt caching | Cache só ajuda em conteúdo estável; conteúdo que muda a cada chamada não se beneficia |
| "decisão afeta uma pessoa de forma significativa" | Sinal de revisão humana obrigatória | Guardrail técnico sozinho não é suficiente nesse tipo de caso |
| "empresa já opera numa nuvem específica" | Sinal de canal de nuvem parceira (Bedrock/Vertex/Foundry) | O modelo por trás é o mesmo; a decisão é de compliance/procurement |
| "qual alavanca de custo aplicar primeiro" | Cache e higiene de tokens antes de trocar de modelo, lote por último | Não assuma que trocar de modelo é sempre a primeira ação |

## Regras práticas

- Leia o enunciado procurando o **verbo de decisão** ("validar", "automatizar", "extrair", "comparar") antes de olhar as alternativas — ele costuma apontar direto para o módulo certo.
- Elimine primeiro as alternativas que descrevem uma solução mais complexa do que o cenário pede (agente quando bastaria tool use, RAG quando bastaria contexto longo, fine-tuning quando bastaria prompting).
- Em questões de "qual módulo isso pertence", procure o substantivo técnico central (embedding, hook, guardrail, streaming) — cada um tem um módulo de origem específico.
- Em questões de arquitetura/decisão, a resposta certa quase sempre é "a opção mais simples que resolve o requisito descrito", não a mais sofisticada disponível.
- Desconfie de alternativas com "sempre" ou "nunca" sem exceção — a maioria dos conceitos dos módulos 01-15 envolve trade-off, não regra absoluta.
- Em questões de múltiplas respostas, verifique cada alternativa isoladamente contra o texto do módulo, sem assumir que o número de respostas corretas é fixo.

## Gatilhos de memorização

- **"Token, não palavra"** — todo custo e limite é medido na unidade que o tokenizador produz.
- **"Prompting, RAG, fine-tuning, nessa ordem"** — a ordem de investigação de customização vai da mais barata para a mais cara.
- **"Quem decide o fim do loop"** — é isso que separa assistente com ferramentas de agente autônomo.
- **"Hook não esquece, skill pode não ser lembrada"** — hook roda no ambiente; skill depende do modelo escolher usá-la.
- **"Cabe e é estável = prompt; grande e variável = RAG"** — o teste rápido para contexto longo vs RAG.
- **"Cache o que não muda"** — o critério para saber o que vale a pena cachear.
- **"Canal não é capacidade"** — API direta, Bedrock, Vertex AI e Foundry entregam o mesmo modelo Claude.

---
> Repositório de estudo comunitário e não-oficial sobre o ecossistema Claude/Anthropic.
