# Implémentation du site web static du CEI

La stack est la suivante:

## lit-element & typescript
Ce framework permet d'écrire des composants javascript a l'aide de directives ( @ ) en tant que raccourcis, il n'impose pas de méthode de développement et permets aux futurs dev web de facilement manipuler le code écrit, typescript permet d'avoir un code plus lisible et de repèrer plus facilement les éventuels bugs.

## sass (scss)
le compilateur sass permet d'écrire du code compilé en css de façon BEAUCOUP plus lisible, et facilite l'encapsulation du style de chaque composant ( en ajoutant le selecteur `:host` a la racine du style)

## vite en tant que bundler
Il a été choisi pour sa rapidité d'éxecution, il s'agit de la partie la plus 'experimentale' de ce projet mais sa simplicité en font un outil performant pour ce type de projet, en effet il ne demande pas d'étape de setup complexe.

# Lit Element + Vite

[![CI](https://github.com/rodydavis/vite-lit-element-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/rodydavis/vite-lit-element-starter/actions/workflows/ci.yml)

Created with [vitejs](https://github.com/vitejs/vite) using [template-lit-element-ts](https://github.com/vitejs/vite/tree/main/packages/create-app/template-lit-element-ts).

- ✅  Github Pages
- ✅  ES Modules
- ✅  Github Actions

[Online Demo](https://rodydavis.github.io/vite-lit-element-starter/)

## Getting Started

Start the dev server:

`npm run start`

Create a production build:

`npm run build`

Serve the build directory:

`npm run serve`
