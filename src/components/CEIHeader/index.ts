import { LitElement, html, customElement, property, unsafeCSS } from 'lit-element'
import styles from './style.scss';

export type link = {
  label: string,
  urlLink: string,
}

@customElement('cei-header') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEIHeader extends LitElement {
  static styles = unsafeCSS(styles); // load le scss

  @property({type: Array}) // définit les variable qui déclencheront l'actualisation du composant et permet aussi d'y acceder depuis l'html pour les types basique comme les string ou number.
  links: link[] = [];

  render() {
    return html`
      <div id="link-container">
        ${this.links.map((link) => html`
          <a href=${link.urlLink}>${link.label}</a>
        `)}
      </div>
      <img
        src="src/assets/svg/favicon.svg"
        alt="logo du CEI"
      />
    `
  }
}
