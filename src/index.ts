import './style/index.scss';

//import all lit components
export * from './components/CEIHeader';
export * from './components/CEIFooter'
export * from './components/CEICard';
export * from './components/CEIMember';

// DOM Query
var header = document.querySelector('#header') as any;

// Filling components with
header.links = [
  {
    label: 'Acceuil',
    urlLink: '#header',
  },
  {
    label: 'Historique',
    urlLink: './src/pages/historique.html',
  },
  {
    label: 'Photos',
    urlLink: './src/pages/photos.html',
  },
];
