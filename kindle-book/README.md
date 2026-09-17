# Kindle Book — Claude Certified Architect: Foundations (Brasil)

EPUB gerado a partir do conteúdo dos 18 módulos deste repositório, compilado em formato de livro (capa, página de rosto, sumário, 18 capítulos e licença).

## Arquivo pronto

- [`claude-certified-architect-foundations-brasil.epub`](./claude-certified-architect-foundations-brasil.epub) — arquivo final, pronto para enviar ao Kindle.

## Como colocar no Kindle

- **Send to Kindle** (mais simples): envie o `.epub` por [send.amazon.com](https://send.amazon.com) ou pelo app/e-mail "Send to Kindle" — a Amazon converte automaticamente para o formato do dispositivo.
- **KDP** (publicação): a Kindle Direct Publishing aceita `.epub` diretamente, sem precisar converter para MOBI/AZW3.
- **Kindle Previewer 3**: se quiser gerar um `.azw3` local antes de transferir por cabo/USB, abra o `.epub` no Kindle Previewer (ferramenta gratuita da Amazon) e exporte.

## Como o EPUB foi gerado

`build.js` (Node.js) lê os arquivos `README.md`, `cheatsheet.md`, `flashcards.md`, `questoes.md`, `casos-de-uso.md`, `lab.md` e `links.md` de cada módulo (mais os arquivos extras do Módulo 16), converte cada um para HTML e monta capítulos por módulo, com:

- links relativos entre arquivos (`./cheatsheet.md`, `../18-Recursos-e-Links/links.md`, etc.) reescritos como âncoras internas do livro;
- remoção das seções "Navegação do módulo" e "Próximos passos" dos `README.md` (fazem sentido num repositório navegável por links, não num livro linear);
- remoção do rodapé repetido ("Repositório de estudo comunitário...") que aparecia em todo arquivo;
- capa gerada em SVG → PNG via `sharp`.

O conteúdo técnico em si (texto de cada módulo) não foi reescrito — apenas adaptado na estrutura para o formato de livro.

## Como regerar

```bash
cd kindle-book
npm install
node build.js
```

Isso recria `out/` (estrutura EPUB descompactada) e regrava o `.epub` nesta pasta. Rode de novo sempre que o conteúdo dos módulos mudar.

`node_modules/` e `out/` não são versionados (veja `.gitignore`).
