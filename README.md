# Feira Alternativa de Montes Claros

Presença digital proposta para uma feira independente de cultura, arte, música, moda, cultura geek e esporte urbano em Montes Claros/MG.

## Estado atual

O projeto está em planejamento. A homepage está implementada como experiência estática, com conteúdo verificável dos documentos-base. Local, datas, responsável legal, contato, autorizações e inscrições continuam a definir. Não há banco de dados, autenticação, coleta de dados, pagamento ou deploy público.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificações

PDFs: `python scripts/generate-pdfs.py` (ReportLab 5.1.0 e fontes DejaVu Sans em `/usr/share/fonts/TTF/`). Verifique com `python scripts/verify-pdfs.py` (requer `pdftotext`). Arquivos gerados ficam em `public/editais/`; regenerar ao editar os Markdown. O build Vercel serve os PDFs prontos, sem exigir Python.

Contato: `src/content/contact.ts`. A rota `/feirantes/inscricao` abre mensagem genérica no WhatsApp; o visitante revisa e envia no aplicativo. Não há inscrição formal ou persistência pelo site.

```bash
npm run lint
npm run typecheck
npm run build
```

## Estrutura

- `src/app/page.tsx`: homepage e conteúdo da primeira fase.
- `src/app/globals.css`: tokens e direção visual da homepage.
- `ORQUESTRADOR.md`: gates, regras de segurança e processo.
- `PROJECT.md`: produto, sitemap e requisitos.
- `IDENTIDADE_VISUAL.md`: fonte de verdade visual.
- `EDITAL_FEIRANTES.md` e `EDITAL_INSTITUCIONAL.md`: fontes documentais em minuta.
- `PROGRESS.md`, `BACKLOG.md`, `DECISIONS.md`, `CONTENT_STATUS.md`, `QA_REPORT.md`, `SECURITY.md`, `DEPLOYMENT.md`: acompanhamento.

## Vercel

O projeto está preparado para build Next.js, mas não foi publicado. Consulte `DEPLOYMENT.md`; produção exige autorização explícita do responsável pelo projeto.
# Feira
# Feira
# Feira
# Feira
# Feira
