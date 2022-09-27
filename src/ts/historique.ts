import '../style/historique.scss';

//import all lit components
export * from '../components/CEIHeader';
export * from '../components/CEIFooter';
export * from '../components/CEITimeLine';

// DOM Query
var timeline = document.querySelector('#timeline') as any;
var header = document.querySelector('#header') as any;

// Filling components with
header.links = [
  {
    label: 'Acceuil',
    urlLink: '../../index.html',
  },
  {
    label: 'Historique',
    urlLink: './historique.html',
  },
  {
    label: 'Photos',
    urlLink: './photos.html',
  },
];

timeline.events = [
  {
    date: "2022",
    title: "cyber folklore 👩🏼‍💻👨🏼‍💻",
    description: "Mise en place du nouveau site web.",
  },
  {
    date: "2022",
    title: "Bleusaille 2022",
    description: "Instauration de la bulle SAFE 🚩.",
  },
  {
    date: "2022",
    title: "le passage a l'ère quantique ⚧",
    description: "Création de l' 'O.D.T.'.",
  },
  {
    date: "2021",
    title: "Bleusaille 2021",
    description: "Banquet des 35ans + 1.",
  },
  {
    date: "2020 - 2019",
    title: "C😷VID",
    description: "On fêtera les 35 ans plus tard,\npas de bleusaille cette année.",
  },
  {
    date: "2010-2011",
    title: "Les singes rouleur 🐒",
    description: "Les premiers singes.",
  },
  {
    date: "2010-2011",
    title: "Elle m'entrainent au bout de la nuit !🚺🫖",
    description: "Création de l' 'O.R.G.I.'.",
  },
  {
    date: "1988",
    title: "🟡 Oyez, oyez, les chevaliers sont arrivé 🔵",
    description: "Création du 'C.D.O.P.'.",
  },
  {
    date: "1985",
    title: "🔵 Hoo au C.E.I. 🟡",
    description: "Création du cercle des étudiants en informatique.",
  },
  {
    date: "1984",
    title: "Le MOEBIUS ♾",
    description: "Afin de supprimer toutes équivoques possibles,\nle nouveau nom sera l' 'ORDRE DE MOEBIUS'.",
  },
  {
    date: "1982",
    title: "Céation de l'ordre MOE... ISIBIEN ?",
    description: "Création de l'ordre 'ISIBIEN'.",
  },
];
