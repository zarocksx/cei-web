import { LitElement, html, customElement, property, unsafeCSS } from 'lit-element'
import styles from './style.scss?inline';

export type link = {
  label: string,
  urlLink: string,
}

@customElement('cei-header')
export class CEIHeader extends LitElement {
  static styles = unsafeCSS(styles);

  @property({type: Array})
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
