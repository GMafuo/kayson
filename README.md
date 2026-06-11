# Kayson

Portfolio d'artiste contemporain construit avec Next.js App Router, TypeScript, Tailwind CSS et Motion.

Le site est préparé pour une V1 publique sur Vercel, avec une expérience sobre, responsive et optimisée pour un sous-domaine gratuit du type `https://kayson.vercel.app`.

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

## Développement

```bash
npm run dev
```

Par défaut, Next.js utilise `http://localhost:3000`. Si le port est déjà occupé :

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

## Déploiement Vercel

Option recommandée :

1. Pousser le projet sur GitHub dans un repo nomme `kayson`.
2. Aller sur [Vercel](https://vercel.com/new).
3. Importer le repo GitHub.
4. Garder les réglages Next.js détectés automatiquement.
5. Déployer avec le sous-domaine gratuit proposé par Vercel.

Si le sous-domaine est disponible, utiliser :

```text
https://kayson.vercel.app
```

## Routes V1

- `/` - Accueil
- `/galerie` - Galerie
- `/a-propos` - À propos
- `/contact` - Contact
- `/mentions-legales` - Mentions légales
