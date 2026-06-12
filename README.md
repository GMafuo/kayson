# Kayson

Site officiel de Kayson, artiste independant entre pop moderne, emotions sinceres et influences R&B contemporaines.

Ce projet presente son univers, son parcours, sa discographie et ses liens officiels dans une experience sobre, premium et immersive. Le site a ete pense comme une vitrine digitale claire : peu d'elements parasites, beaucoup d'espace, une direction visuelle centree sur l'artiste, et une navigation simple vers les contenus essentiels.

## Vision

Kayson construit son univers de A a Z : ecriture, composition, production, mixage, realisation video et contenus visuels. Le site doit traduire cette independance avec une interface directe, elegante et vivante, sans effet gadget.

L'objectif n'est pas de faire un site marketing classique, mais une presence officielle qui donne envie d'ecouter, de decouvrir et de suivre l'evolution de l'artiste.

## Experience

- Une page d'accueil editoriale centree sur Kayson.
- Une introduction claire pour comprendre qui est l'artiste.
- Une section univers qui resume son positionnement musical et creatif.
- Une citation forte pour donner une intention artistique.
- Une discographie cliquable qui redirige vers Spotify.
- Une section contact simple pour les demandes professionnelles.
- Des animations sobres au scroll, pensees pour renforcer la sensation de galerie digitale.

## Direction Visuelle

Le site repose sur une ambiance blanche, minimale et expressive. Les grands titres serif donnent une dimension artistique et editoriale, tandis que les textes et boutons restent lisibles, directs et fonctionnels.

Les images occupent une place centrale : elles installent l'univers de Kayson et donnent au site une presence plus humaine qu'une simple page de liens.

## Pages

- `/` : experience principale et presentation complete.
- `/galerie` : selection visuelle.
- `/a-propos` : presentation secondaire.
- `/contact` : prise de contact.
- `/mentions-legales` : informations legales.

## Contenus

Les contenus principaux sont organises pour rester faciles a faire evoluer :

- navigation du site,
- textes de presentation,
- images publiques,
- liens Spotify,
- liens reseaux sociaux,
- metadonnees SEO.

## Qualite

Le projet est prepare pour une V1 publique :

- responsive desktop, tablette et mobile,
- accessibilite amelioree sur les liens et contenus animes,
- favicon et icones Kayson,
- metadata SEO de base,
- structure de fichiers rangee pour maintenir le site proprement.

## Lancer Le Projet

Installer les dependances :

```bash
npm install
```

Lancer le site en local :

```bash
npm run dev
```

Verifier le projet :

```bash
npm run lint
npm run build
```

URL locale par defaut : `http://localhost:3000`

## Structure

```text
kayson/
|-- app/                  # Routes, layout, styles globaux et icones app
|-- components/           # Composants React organises par role
|   |-- animations/       # Animations et primitives de reveal
|   |-- layout/           # Navigation et structure
|   |-- sections/         # Sections de la page d'accueil
|   `-- ui/               # Composants d'interface reutilisables
|-- data/                 # Navigation et contenus statiques
|-- public/               # Images et assets publics du site
|-- docs/                 # References, captures et notes projet
|-- tests/e2e/            # Espace reserve aux tests end-to-end
`-- tools/                # Fichiers d'outillage locaux
```

## Deploiement

Le site est prevu pour etre deploye sur Vercel avec les reglages Next.js detectes automatiquement.

URL actuelle : `kayson.app`
