# Implémentation du site web static du CEI [![CI](https://github.com/rodydavis/vite-lit-element-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/zarocksx/cei-web/actions/workflows/ci.yml)

Une stack full frontend a été décidé afin de faire des économies et de garder un site stable, il existe de nombreux hébergement de site statique gratuit, nous avons fait le choix de l'héberger chez Github qui propose via github-page de servir directement une app static via leurs infrastructures.
( limité a 1GB d'espace disque, 100GB de bande passante par mois, 10 builds par heure )

Dans la partie Projects vous trouverez un board reprennant les idées et développemments en cours pour le site web

La stack est la suivante:

## lit-element & typescript
Ce framework permet d'écrire des composants javascript a l'aide de directives ( @ ) en tant que raccourcis, il n'impose pas de méthode de développement et permets aux futurs dev web de facilement manipuler le code écrit, typescript permet d'avoir un code plus lisible et de repèrer plus facilement les éventuels bugs.

## sass (scss)
le compilateur sass permet d'écrire du code compilé en css de façon BEAUCOUP plus lisible, et facilite l'encapsulation du style de chaque composant ( en ajoutant le selecteur `:host` a la racine du style)

## vite en tant que bundler
Il a été choisi pour sa rapidité d'éxecution, il s'agit de la partie la plus 'experimentale' de ce projet mais sa simplicité en font un outil performant pour ce type de projet, en effet il ne demande pas d'étape de setup complexe.

# Lit Element + Vite

Created with [vitejs](https://github.com/vitejs/vite) using [template-lit-element-ts](https://github.com/vitejs/vite/tree/main/packages/create-app/template-lit-element-ts).

[Online Demo](https://rodydavis.github.io/vite-lit-element-starter/)

## Getting Started

Start the dev server:

`npm run start`

Create a production build:

`npm run build`

Serve the build directory:

`npm run serve`

Pour toute question, demandez à Caputain.