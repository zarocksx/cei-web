// import css
import { CEIHeader } from './components/CEIHeader';
import './style/index.scss'

//import all lit components
export * from './components/CEIHeader';
export * from './components/CEICard';

// index logic

// DOM Query
var header = document.querySelector('#header') as CEIHeader;

// Filling components with values
if (header) {
    header.links = [
        {
        label: 'Acceuil',
        urlLink: '#header'
        },
        {
        label: 'Historique',
        urlLink: './pages/historique.html'
        },
        {
        label: 'Photos',
        urlLink: './pages/photos.html'
        },
    ]
}