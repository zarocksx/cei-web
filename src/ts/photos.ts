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
    alt: 'old picture',
    url: 'https://drive.google.com/uc?export=view&id=1rg9_EOrTzEHzB9GakAHMS4FNxOqf6ZyV',
  },
  {
    alt: 'les bleus devant la colonne',
    url: 'https://drive.google.com/uc?export=view&id=1mVeumyFS0fJiHWujZIjQKPJhs_gs5DEB',
    isWide: true
  },
  {
    alt: 'stream caritatif',
    url: 'https://drive.google.com/uc?export=view&id=1wGvdbA31TxtU6SH9OkKeWadvTllNyPJb',
  },
  {
    alt: 'ST-V 1989',
    url: 'https://drive.google.com/uc?export=view&id=1POkvGfkFK-Y52YhNtIxTVa6vA-84eGUU',
    isWide: true
  },
  {
    alt: 'ST-V 2011',
    url: 'https://drive.google.com/uc?export=view&id=1mjo5ckIYDjgf7B-zgS_r16qK8shgRu0z',
  },
  {
    alt: 'ST-V 1990',
    url: 'https://drive.google.com/uc?export=view&id=1GKdiCGcAowd_x-rr5jnH-05KZc8aMn8Y',
    isWide: true
  },
  {
    alt: 'affiche de bal',
    url: 'https://drive.google.com/uc?export=view&id=1jNhiEPcVfIeWRr4I0dggT-uzz4Gt8DGz',
    isWide: true
  },
  {
    alt: 'groupe de CEI 1',
    url: 'https://drive.google.com/uc?export=view&id=168ubjcWzHoZzS3ICbFMO9_USdBhbIaX8',
  },
  {
    alt: 'groupe de CEI 2',
    url: 'https://drive.google.com/uc?export=view&id=13RoD99O6I59d1E3TXrPkYGoSPvOXecTc',
  },
  {
    alt: 'fondateurs',
    url: 'https://drive.google.com/uc?export=view&id=1V9eYzsYg1-Z94jSIQtOBPjGlxenci3fa',
  },
  {
    alt: 'groupe de CEI 3',
    url: 'https://drive.google.com/uc?export=view&id=13wvQbmHQNsG6PVzDv_bfMljovlk-DCLo',
  },
  {
    alt: 'Les femmes du CDOP',
    url: 'https://drive.google.com/uc?export=view&id=1JIyu0OAvcuclJgjgfWL9o04OTZ98sdkS',
  },
  {
    alt: 'Les vieux prez\'',
    url: 'https://drive.google.com/uc?export=view&id=1yT1i02aonSBit2M6Fxc0jpjv82BimnSG',
  },
]