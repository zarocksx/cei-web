import { LitElement, html, customElement, property, unsafeCSS } from 'lit-element'
import styles from './style.scss';


@customElement('cei-card') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEICard extends LitElement {
  static styles = unsafeCSS(styles); // load le scss

  @property({type: String})
  imageUrl: string = 'https://via.placeholder.com/550'; // valeur par défaut

  @property({type: String})
  title: string = 'title' // valeur par défaut

  @property({type: String})
  content: string = 'lorem ipsum dolor sit amet consectetur' // valeur par défaut

  render() {
    return html`
    <div id="top-card">
      <img 
        src=${this.imageUrl} 
        alt='picture related to ${this.title}'/>
    </div>
    <div id="bottom-card">
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    </div>
    `;
  }
}