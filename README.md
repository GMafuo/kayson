# Kayson

Portfolio d'artiste contemporain construit avec Next.js App Router, TypeScript, Tailwind CSS et Motion.

Le site est prepare pour une V1 publique sur Vercel, avec une experience sobre, responsive et optimisee pour un sous-domaine gratuit du type `https://kayson.vercel.app`.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion for React

## Installation

```bash
npm install
```

## Developpement

```bash
npm run dev
```

Par defaut, Next.js utilise `http://localhost:3000`. Si le port est deja occupe :

```bash
npm run dev -- -p 3001
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deploiement Vercel

Option recommandee :

1. Pousser le projet sur GitHub dans un repo nomme `kayson`.
2. Aller sur [Vercel](https://vercel.com/new).
3. Importer le repo GitHub.
4. Garder les reglages Next.js detectes automatiquement.
5. Deployer avec le sous-domaine gratuit propose par Vercel.

Si le sous-domaine est disponible, utiliser :

```text
https://kayson.vercel.app
```

## Routes V1

- `/` - Accueil
- `/galerie` - Galerie
- `/a-propos` - A propos
- `/contact` - Contact
- `/mentions-legales` - Mentions legales
