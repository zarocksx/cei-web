// import css
import './style/index.scss'

//import all lit components
export * from './components/CEIHeader/CEIHeader.ts';



// index logic

var header = document.querySelector('#header');

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