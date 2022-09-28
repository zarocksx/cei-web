import {
  LitElement,
  html,
  customElement,
  property,
  unsafeCSS,
} from 'lit-element';
import styles from './style.scss';

export type Event = {
  date: string,
  title: string,
  description: string,
}

@customElement('cei-timeline') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEITimeLine extends LitElement {
  static styles = unsafeCSS(styles); // load le scss

  @property({type: Array})
  events: Event[] = [];

  displayEvent(event: Event) {
    return html`
        <li class="event" data-date=${event.date}>
            <h3>${event.title}</h3>
            <pre>${event.description}</pre>
        </li>
    `;
  }

  render() {
    return html`
      <div id="content">
        <ul class="timeline">
          ${this.events.map((event) => this.displayEvent(event))}
        </ul>
      </div>
    `;
  }
}

//le composant ajouté doit être loadé dans le fichier index.ts
