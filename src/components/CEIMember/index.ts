import {
  LitElement,
  html,
  customElement,
  property,
  unsafeCSS,
} from 'lit-element';
import styles from './style.scss';

@customElement('cei-member')
export class CEIMember extends LitElement {
  static styles = unsafeCSS(styles); // load le scss

  @property()
  url: string = 'https://via.placeholder.com/550';

  @property()
  name: string = 'John Doe';

  @property()
  job: string = 'Developper';

  render() {
    return html` <img src=${this.url} />
      <div id="description">
        <p id="name">${this.name}</p>
        <p id="job">${this.job}</p>
      </div>`;
  }
}
