# Architecture Notes

## Fichiers conserves a la racine

- `AGENTS.md` : conserve a la racine pour que les agents lisent les consignes du projet.
- `CLAUDE.md` : conserve a la racine pour compatibilite avec les outils qui detectent ce fichier.
- `.agents/` : conserve a la racine pour la detection des skills locaux du projet.
- `.next/`, `node_modules/`, `.vercel/` : dossiers techniques attendus par Next.js, npm et Vercel.

## Fichiers deplaces localement

- Les captures `kayson-*.png` sont rangees dans `docs/screenshots/`.
- Les references Figma locales sont rangees dans `docs/figma/reference/`.
- Les sorties Playwright MCP sont rangees dans `tools/playwright-mcp/`.
- `skills-lock.json` est range dans `tools/agents/`.
