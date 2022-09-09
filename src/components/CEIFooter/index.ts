import { LitElement, html, customElement, property, unsafeCSS } from 'lit-element'
import styles from './style.scss';


@customElement('cei-footer') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEIFooter extends LitElement {
    static styles = unsafeCSS(styles); // load le scss

    @property()
    example: any = '';

    render() {
        return html``;
    }
}