import {
  LitElement,
  html,
  customElement,
  property,
  unsafeCSS,
} from 'lit-element';
import styles from './style.scss';

export type image = {
  alt: string;
  url: string;
  isWide: boolean | null;
};

@customElement('cei-mosaic') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEIMosaic extends LitElement {
  static styles = unsafeCSS(styles); // load le scss

  @property()
  images: image[] = [];

  render() {
    return html`
      <div class="container">
        ${this.images.map(
          (image) => html`
            <div class="image_container ${image.isWide ? 'image-wide' : null}">
              <img src=${image.url} alt=${image.alt} loading="lazy" />
            </div>
          `
        )}
      </div>
    `;
  }
}

//le composant ajouté doit être loadé dans le fichier index.ts
