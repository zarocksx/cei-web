import '../style/historique.scss';

//import all lit components
export * from '../components/CEIHeader';
export * from '../components/CEIFooter';
export * from '../components/CEIMosaic';

// DOM Query
var mosaic = document.querySelector('#mosaic') as any;
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

mosaic.images = [
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/750',
    isWide: true
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
    isWide: true
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
  },
  {
    alt: 'dummy',
    url: 'https://via.placeholder.com/550',
    isWide: true
  },
]