import { LitElement, html, customElement, property, unsafeCSS } from 'lit-element'
import styles from './style.scss';


@customElement('cei-example') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEIExample extends LitElement {
    static styles = unsafeCSS(styles); // load le scss

    @property()
    example: any = '';

    render() {
        return html``;
    }
}

//le composant ajouté doit être loadé dans le fichier index.ts