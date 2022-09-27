import '../style/historique.scss';

//import all lit components
export * from '../components/CEIHeader';
export * from '../components/CEIFooter';

// DOM Query
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