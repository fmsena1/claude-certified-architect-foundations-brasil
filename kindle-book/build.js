const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { marked } = require('marked');
const sharp = require('sharp');
const JSZip = require('jszip');

const REPO = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'out');
const BOOK_ID = 'urn:uuid:' + crypto.randomUUID();
const BOOK_DATE = '2026-09-17';

marked.use({ gfm: true, breaks: false });

const STANDARD_FILES = ['README.md', 'cheatsheet.md', 'flashcards.md', 'questoes.md', 'casos-de-uso.md', 'lab.md', 'links.md'];
const MODULE16_FILES = ['README.md', 'cheatsheet.md', 'flashcards.md', 'questoes.md', 'simulado-completo-1.md', 'simulado-completo-2.md', 'mini-simulado-por-dominio.md', 'reta-final.md', 'caderno-de-erros.md', 'links.md'];

const SECTION_LABELS = {
  'cheatsheet.md': 'Cheatsheet',
  'flashcards.md': 'Flashcards',
  'questoes.md': 'Questões',
  'casos-de-uso.md': 'Casos de uso',
  'lab.md': 'Lab prático',
  'links.md': 'Links oficiais',
  'simulado-completo-1.md': 'Simulado completo 1',
  'simulado-completo-2.md': 'Simulado completo 2',
  'mini-simulado-por-dominio.md': 'Mini-simulado por domínio',
  'reta-final.md': 'Reta final',
  'caderno-de-erros.md': 'Caderno de erros',
};

const moduleDirs = fs.readdirSync(REPO, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^\d{2}-/.test(d.name))
  .map((d) => d.name)
  .sort();

const modules = moduleDirs.map((dirName) => {
  const num = dirName.slice(0, 2);
  const files = num === '16' ? MODULE16_FILES : STANDARD_FILES;
  const readmeRaw = fs.readFileSync(path.join(REPO, dirName, 'README.md'), 'utf8');
  const title = readmeRaw.split('\n')[0].replace(/^#\s+/, '').trim();
  return { dirName, num, files, title };
});

const LINK_MAP = new Map();
LINK_MAP.set('README.md', 'sobre-o-livro');
LINK_MAP.set('LICENSE', 'licenca');
for (const mod of modules) {
  for (const file of mod.files) {
    const anchor = file === 'README.md' ? `m${mod.num}` : `m${mod.num}-${file.replace('.md', '')}`;
    LINK_MAP.set(`${mod.dirName}/${file}`, anchor);
  }
}

function stripFooter(md) {
  return md.replace(/\n---\s*\n>\s*Repositório de estudo comunitário[\s\S]*$/, '').trimEnd();
}

function stripSection(md, headingText) {
  const re = new RegExp(`\\n##\\s+${headingText}\\s*\\n[\\s\\S]*?(?=\\n##\\s|$)`);
  return md.replace(re, '\n');
}

function rewriteLinks(md, currentDir) {
  return md.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, text, href) => {
    if (/^https?:|^mailto:/i.test(href)) return match;
    const cleaned = href.split('#')[0];
    const resolved = path.posix.normalize(path.posix.join(currentDir, cleaned));
    const anchor = LINK_MAP.get(resolved);
    return anchor ? `[${text}](#${anchor})` : text;
  });
}

function prepSubfile(md) {
  const lines = md.split('\n');
  let idx = 0;
  while (idx < lines.length && lines[idx].trim() === '') idx++;
  if (lines[idx] && lines[idx].startsWith('# ')) idx++;
  let rest = lines.slice(idx).join('\n').replace(/^\n+/, '');
  rest = rest.replace(/^(#{1,5})(\s)/gm, (m, hashes, sp) => '#'.repeat(hashes.length + 1) + sp);
  return rest;
}

function fixVoidElements(html) {
  return html.replace(/<hr\s*>/g, '<hr/>').replace(/<br\s*>/g, '<br/>');
}

function mdToHtml(md) {
  return fixVoidElements(marked.parse(md));
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildModuleChapter(mod) {
  const dirAbs = path.join(REPO, mod.dirName);
  let readmeMd = fs.readFileSync(path.join(dirAbs, 'README.md'), 'utf8');
  readmeMd = stripFooter(readmeMd);
  readmeMd = stripSection(readmeMd, 'Navegação do módulo');
  readmeMd = stripSection(readmeMd, 'Próximos passos');
  readmeMd = rewriteLinks(readmeMd, mod.dirName);
  let readmeHtml = mdToHtml(readmeMd);
  readmeHtml = readmeHtml.replace('<h1>', `<h1 id="m${mod.num}">`);

  const sectionsHtml = mod.files
    .filter((f) => f !== 'README.md')
    .map((f) => {
      const label = SECTION_LABELS[f];
      const anchor = `m${mod.num}-${f.replace('.md', '')}`;
      let md = fs.readFileSync(path.join(dirAbs, f), 'utf8');
      md = stripFooter(md);
      md = prepSubfile(md);
      md = rewriteLinks(md, mod.dirName);
      return `<h2 id="${anchor}">${label}</h2>\n${mdToHtml(md)}`;
    })
    .join('\n');

  return `${readmeHtml}\n${sectionsHtml}`;
}

function buildFrontMatter() {
  const sumarioRows = modules
    .map((m) => `| ${m.num} | [${escapeHtml(m.title.replace(/^Módulo\s+\d+\s+—\s+/, ''))}](#m${m.num}) |`)
    .join('\n');

  const md = `# Sobre este livro

> **Aviso de não-oficialidade:** este é material de estudo comunitário, não afiliado nem endossado pela Anthropic. **"Claude Certified Architect – Foundations" não é uma certificação oficial da Anthropic** — é um formato de estudo proposto por este material, inspirado em guias de certificação de nuvem. Qualquer afirmação técnica sobre Claude deve ser conferida na documentação oficial listada no capítulo "Recursos e Links".

## Visão geral

Este livro organiza o ecossistema Claude/Anthropic em 18 módulos objetivos, com foco em leitura progressiva, revisão rápida e prática guiada — sem depender de nenhuma certificação oficial existente.

| Bloco | O que você encontra |
| --- | --- |
| Fundamentos | Vocabulário base de IA generativa e ML aplicado a LLMs (Módulos 01-03) |
| Modelos e Plataforma | Model family da Claude, Messages API e engenharia de prompts (Módulos 04-06) |
| Ferramentas e Agentes | Tool use, MCP, agentes e Claude Code (Módulos 07-09) |
| Dados e Contexto | RAG, embeddings, multimodalidade e gerenciamento de contexto (Módulos 10-12) |
| Segurança e Operação | IA responsável, deploy enterprise, boas práticas e custos (Módulos 13-15) |
| Revisão | Simulados, glossário e recursos complementares (Módulos 16-18) |

## Roteiro de estudo

1. Módulos 01 a 05: fundamentos de IA generativa, ML aplicado a LLMs e a família de modelos Claude, incluindo a Messages API.
2. Módulos 06 a 10: engenharia de prompts, tool use/MCP, agentes, Claude Code e RAG.
3. Módulos 11 a 15: multimodalidade, gerenciamento de contexto, segurança/IA responsável, deploy enterprise e boas práticas/custos.
4. Módulos 16 a 18: consolidação com simulados, glossário e recursos complementares.

## Sumário de módulos

| # | Tema |
| --- | --- |
${sumarioRows}

## Como usar este livro

- Cada módulo é um capítulo com conteúdo principal seguido de seções de revisão: Cheatsheet, Flashcards, Questões, Casos de uso, Lab prático e Links oficiais (o Módulo 16 substitui casos de uso/lab por quatro blocos de simulado, um plano de reta final e um caderno de erros).
- Nenhum dado técnico específico (preço, benchmark, limite de contexto, nome exato de modelo) deve ser tratado como definitivo — cada capítulo aponta para a documentação oficial atualizada na sua seção de links.
- Este material está publicado sob licença MIT (texto completo no capítulo final "Licença") e pode ser adaptado livremente, desde que a atribuição seja mantida.
`;

  return mdToHtml(md).replace('<h1>', '<h1 id="sobre-o-livro">');
}

function buildLicenseChapter() {
  const licenseRaw = fs.readFileSync(path.join(REPO, 'LICENSE'), 'utf8').trim();
  const paragraphs = licenseRaw.split(/\n\n+/).map((p) => `<p>${escapeHtml(p.replace(/\n/g, ' '))}</p>`).join('\n');
  return `<h1 id="licenca">Licença</h1>\n${paragraphs}`;
}

function xhtmlPage(title, bodyHtml, cssRel = '../style.css') {
  return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="pt-BR" xml:lang="pt-BR">
<head>
<meta charset="utf-8"/>
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" type="text/css" href="${cssRel}"/>
</head>
<body>
${bodyHtml}
</body>
</html>
`;
}

const STYLE_CSS = `@charset "utf-8";
body {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.5;
  margin: 0 1.2em;
  color: #111827;
}
h1, h2, h3, h4 {
  font-family: Georgia, "Times New Roman", serif;
  color: #0f172a;
  line-height: 1.25;
}
h1 {
  font-size: 1.6em;
  page-break-before: always;
  break-before: page;
  margin-top: 0.2em;
  border-bottom: 2px solid #d97757;
  padding-bottom: 0.2em;
}
h2 {
  font-size: 1.3em;
  margin-top: 1.6em;
  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 0.15em;
}
h3 { font-size: 1.1em; margin-top: 1.3em; }
h4 { font-size: 1em; margin-top: 1.1em; }
p { margin: 0.6em 0; text-align: justify; }
blockquote {
  margin: 0.8em 0;
  padding: 0.4em 0.9em;
  border-left: 4px solid #0284c7;
  background: #f1f5f9;
  font-style: italic;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 0.8em 0;
  font-size: 0.82em;
}
th, td {
  border: 1px solid #cbd5e1;
  padding: 0.35em 0.5em;
  text-align: left;
  vertical-align: top;
}
th { background: #e2e8f0; }
code {
  font-family: "Courier New", monospace;
  font-size: 0.92em;
  background: #f1f5f9;
  padding: 0.05em 0.25em;
}
pre {
  background: #f1f5f9;
  padding: 0.6em;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
pre code { background: none; padding: 0; }
hr { border: none; border-top: 1px solid #cbd5e1; margin: 1.2em 0; }
ul, ol { margin: 0.5em 0; padding-left: 1.4em; }
li { margin: 0.25em 0; }
a { color: #0369a1; text-decoration: none; }
.cover-page { text-align: center; margin: 0; padding: 0; }
.cover-page img { width: 100%; height: auto; }
.title-page { text-align: center; margin-top: 3em; }
.title-page h1 { border: none; page-break-before: auto; font-size: 2em; }
.title-page .subtitle { font-size: 1.1em; color: #475569; margin-top: 0.5em; }
.title-page .author { margin-top: 3em; font-size: 1.1em; }
.title-page .disclaimer { margin-top: 4em; font-size: 0.85em; color: #64748b; }
`;

function buildCoverSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2400" viewBox="0 0 1600 2400">
<rect width="1600" height="2400" fill="#0f172a"/>
<rect x="0" y="0" width="1600" height="20" fill="#d97757"/>
<rect x="0" y="2380" width="1600" height="20" fill="#0284c7"/>
<text x="800" y="880" font-family="Georgia, 'Times New Roman', serif" font-size="112" font-weight="bold" fill="#f8fafc" text-anchor="middle">Claude Certified</text>
<text x="800" y="1010" font-family="Georgia, 'Times New Roman', serif" font-size="112" font-weight="bold" fill="#f8fafc" text-anchor="middle">Architect</text>
<text x="800" y="1120" font-family="Georgia, serif" font-size="54" letter-spacing="10" fill="#d97757" text-anchor="middle">FOUNDATIONS</text>
<rect x="650" y="1170" width="300" height="4" fill="#334155"/>
<text x="800" y="1250" font-family="Georgia, serif" font-size="50" fill="#94a3b8" text-anchor="middle">Brasil</text>
<text x="800" y="1470" font-family="Arial, sans-serif" font-size="42" fill="#cbd5e1" text-anchor="middle">Guia de estudo em PT-BR sobre o</text>
<text x="800" y="1525" font-family="Arial, sans-serif" font-size="42" fill="#cbd5e1" text-anchor="middle">ecossistema Claude / Anthropic</text>
<text x="800" y="2220" font-family="Arial, sans-serif" font-size="34" fill="#64748b" text-anchor="middle">Material de estudo comunitário e não-oficial</text>
<text x="800" y="2285" font-family="Arial, sans-serif" font-size="36" fill="#94a3b8" text-anchor="middle">Filipe Magalhães Sena</text>
</svg>`;
}

async function main() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, 'OEBPS', 'text'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'OEBPS', 'images'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'META-INF'), { recursive: true });

  await sharp(Buffer.from(buildCoverSvg())).png().toFile(path.join(OUT, 'OEBPS', 'images', 'cover.png'));

  fs.writeFileSync(path.join(OUT, 'OEBPS', 'style.css'), STYLE_CSS, 'utf8');

  fs.writeFileSync(
    path.join(OUT, 'OEBPS', 'text', 'cover.xhtml'),
    xhtmlPage('Capa', `<div class="cover-page"><img src="../images/cover.png" alt="Capa: Claude Certified Architect — Foundations (Brasil)"/></div>`, '../style.css'),
    'utf8'
  );

  const titlePageBody = `<div class="title-page">
<h1>Claude Certified Architect<br/>Foundations (Brasil)</h1>
<p class="subtitle">Guia de estudo em PT-BR sobre o ecossistema Claude/Anthropic:<br/>modelos, API, prompting, agentes, MCP, RAG, segurança e deploy enterprise.</p>
<p class="author">Filipe Magalhães Sena</p>
<p class="disclaimer">Material de estudo comunitário, não afiliado nem endossado pela Anthropic.<br/>Publicado sob licença MIT.</p>
</div>`;
  fs.writeFileSync(path.join(OUT, 'OEBPS', 'text', 'title.xhtml'), xhtmlPage('Página de rosto', titlePageBody), 'utf8');

  fs.writeFileSync(path.join(OUT, 'OEBPS', 'text', 'frontmatter.xhtml'), xhtmlPage('Sobre este livro', buildFrontMatter()), 'utf8');

  for (const mod of modules) {
    const html = buildModuleChapter(mod);
    fs.writeFileSync(path.join(OUT, 'OEBPS', 'text', `module-${mod.num}.xhtml`), xhtmlPage(mod.title, html), 'utf8');
  }

  fs.writeFileSync(path.join(OUT, 'OEBPS', 'text', 'license.xhtml'), xhtmlPage('Licença', buildLicenseChapter()), 'utf8');

  const spineItems = [
    { id: 'cover-page', file: 'text/cover.xhtml', linear: 'no' },
    { id: 'title-page', file: 'text/title.xhtml', linear: 'yes' },
    { id: 'frontmatter', file: 'text/frontmatter.xhtml', linear: 'yes' },
    ...modules.map((m) => ({ id: `module-${m.num}`, file: `text/module-${m.num}.xhtml`, linear: 'yes' })),
    { id: 'license', file: 'text/license.xhtml', linear: 'yes' },
  ];

  const manifestItems = [
    { id: 'nav', file: 'nav.xhtml', mediaType: 'application/xhtml+xml', properties: 'nav' },
    { id: 'css', file: 'style.css', mediaType: 'text/css' },
    { id: 'cover-image', file: 'images/cover.png', mediaType: 'image/png', properties: 'cover-image' },
    ...spineItems.map((s) => ({ id: s.id, file: s.file, mediaType: 'application/xhtml+xml' })),
  ];

  const manifestXml = manifestItems
    .map((it) => `<item id="${it.id}" href="${it.file}" media-type="${it.mediaType}"${it.properties ? ` properties="${it.properties}"` : ''}/>`)
    .join('\n    ');

  const spineXml = spineItems.map((s) => `<itemref idref="${s.id}"${s.linear === 'no' ? ' linear="no"' : ''}/>`).join('\n    ');

  const opf = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="book-id" xml:lang="pt-BR">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="book-id">${BOOK_ID}</dc:identifier>
    <dc:title>Claude Certified Architect — Foundations (Brasil)</dc:title>
    <dc:creator id="creator">Filipe Magalhães Sena</dc:creator>
    <dc:language>pt-BR</dc:language>
    <dc:date>${BOOK_DATE}</dc:date>
    <dc:rights>MIT License — Copyright (c) 2026 Filipe Magalhães Sena</dc:rights>
    <dc:description>Guia de estudo em PT-BR sobre o ecossistema Claude/Anthropic: modelos, API, prompting, agentes, MCP, RAG, segurança e deploy enterprise. Material comunitário, não afiliado nem endossado pela Anthropic.</dc:description>
    <meta property="dcterms:modified">${BOOK_DATE}T00:00:00Z</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    ${manifestXml}
  </manifest>
  <spine>
    ${spineXml}
  </spine>
</package>
`;
  fs.writeFileSync(path.join(OUT, 'OEBPS', 'content.opf'), opf, 'utf8');

  const navLis = [
    `<li><a href="text/title.xhtml">Página de rosto</a></li>`,
    `<li><a href="text/frontmatter.xhtml">Sobre este livro</a></li>`,
    ...modules.map((m) => `<li><a href="text/module-${m.num}.xhtml">${escapeHtml(m.title)}</a></li>`),
    `<li><a href="text/license.xhtml">Licença</a></li>`,
  ].join('\n      ');

  const navXhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="pt-BR" xml:lang="pt-BR">
<head>
<meta charset="utf-8"/>
<title>Sumário</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <nav epub:type="toc" id="toc">
    <h1>Sumário</h1>
    <ol>
      ${navLis}
    </ol>
  </nav>
  <nav epub:type="landmarks" hidden="">
    <ol>
      <li><a epub:type="cover" href="text/cover.xhtml">Capa</a></li>
      <li><a epub:type="toc" href="nav.xhtml">Sumário</a></li>
      <li><a epub:type="bodymatter" href="text/frontmatter.xhtml">Início</a></li>
    </ol>
  </nav>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT, 'OEBPS', 'nav.xhtml'), navXhtml, 'utf8');

  const ncxPoints = [
    { label: 'Página de rosto', file: 'text/title.xhtml' },
    { label: 'Sobre este livro', file: 'text/frontmatter.xhtml' },
    ...modules.map((m) => ({ label: m.title, file: `text/module-${m.num}.xhtml` })),
    { label: 'Licença', file: 'text/license.xhtml' },
  ];
  const navPointsXml = ncxPoints
    .map((p, i) => `<navPoint id="navpoint-${i + 1}" playOrder="${i + 1}"><navLabel><text>${escapeHtml(p.label)}</text></navLabel><content src="${p.file}"/></navPoint>`)
    .join('\n    ');

  const ncx = `<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${BOOK_ID}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>Claude Certified Architect — Foundations (Brasil)</text></docTitle>
  <navMap>
    ${navPointsXml}
  </navMap>
</ncx>
`;
  fs.writeFileSync(path.join(OUT, 'OEBPS', 'toc.ncx'), ncx, 'utf8');

  fs.writeFileSync(
    path.join(OUT, 'META-INF', 'container.xml'),
    `<?xml version="1.0" encoding="utf-8"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
`,
    'utf8'
  );

  const zip = new JSZip();
  zip.file('mimetype', 'application/epub+zip', { compression: 'STORE' });
  const addDir = (dirAbs, zipPath) => {
    for (const entry of fs.readdirSync(dirAbs, { withFileTypes: true })) {
      const abs = path.join(dirAbs, entry.name);
      const zp = zipPath ? `${zipPath}/${entry.name}` : entry.name;
      if (entry.isDirectory()) addDir(abs, zp);
      else zip.file(zp, fs.readFileSync(abs));
    }
  };
  addDir(path.join(OUT, 'META-INF'), 'META-INF');
  addDir(path.join(OUT, 'OEBPS'), 'OEBPS');

  const buf = await zip.generateAsync({ type: 'nodebuffer', mimeType: 'application/epub+zip', compression: 'DEFLATE' });
  const epubPath = path.join(__dirname, 'claude-certified-architect-foundations-brasil.epub');
  fs.writeFileSync(epubPath, buf);
  console.log('OK', epubPath, buf.length, 'bytes');
  console.log('Modules:', modules.map((m) => m.num).join(','));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
