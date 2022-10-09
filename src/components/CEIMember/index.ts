import {
  LitElement,
  html,
  property,
  customElement,
  unsafeCSS,
} from 'lit-element';
import styles from './style.scss';
@customElement('cei-member')
export class CEIMember extends LitElement {
  static styles = unsafeCSS(styles);

  @property()
  items: any[] = [];

  @property()
  looping: boolean = false;

  @property()
  offset: number = 0;

  @property()
  firstIndex: number = 0;

  connectedCallback() {
    super.connectedCallback();
    this.items = [
      {
        m_name: 'Loïc Defossé',
        m_job: 'Dévloppement de simulateurs pour satellites',
      },
      {
        m_name: 'Samthann Vanden Steen',
        m_job: 'Retail Specialist, Senior IT Business Analyst (Consulting)',
      },
      {
        m_name: 'Morgan Mghari',
        m_job: 'Expert endpoint manager (SCCM)',
      },
      {
        m_name: 'Marco Bianchin',
        m_job: 'Délégué syndical officier d\'un conseil d\'entreprise européen d\'une grande institution financière internationale',
      },
      {
        m_name: 'Arnaud Catoir',
        m_job: 'Développeur spécialisé en traitement d\'images',
      },
      {
        m_name: 'Nathan Van Dyck',
        m_job: 'Développeur web fullstack/front-end',
      },
      {
        m_name: 'Gary Vanbever',
        m_job: 'Incident Management Officer',
      },
      {
        m_name: 'Julie Pisarki',
        m_job: 'Software engineer',
      },
      {
        m_name: 'Alexia Horga',
        m_job: 'Digital engineering consultant',
      },
      {
        m_name: 'Nathan Van Dyck',
        m_job: 'Développeur web fullstack/front-end',
      },
      {
        m_name: 'Bryan Bartoloni',
        m_job: 'Développeur front end / UX designer',
      },
      {
        m_name: 'Boris Descartes',
        m_job: 'Software engineer',
      },
    ];

    window.addEventListener('resize', this.initiateContainers);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener('resize', this.initiateContainers);
  }

  render() {
    return html`
      <button class="btn-prev" @click=${() => this.move('left')}> < </button>
      <div id="member">
        ${this.items.map(
          ({ m_job, m_name }) => html`
            <article>
              <img src='./src/assets/pictures/${m_name}.jpg' />
              <div class='info'>
                <h3>${m_name}</h3>
                <p>${m_job}</p>
              </div>
            </article>
          `
        )}
      </div>
      <button class="btn-next" @click=${() => this.move('right')}> > </button>
    `;
  }

  initiateContainers() {}

  /**
   * Moves the items to the specified direction.
   * @param {string} direction The movement direction.
   */
  move(direction : string) {
    const container = this.shadowRoot!.getElementById('member')!;
    const styles = getComputedStyle(this);
    const itemMargin = parseFloat(styles.getPropertyValue('--item-margin'));
    const itemWidth = parseFloat(styles.getPropertyValue('--item-width'));
    const itemTotalWidth = itemWidth + 2 * itemMargin;

    if (this.looping) {
      const items = container!.querySelectorAll('article')!;
      const lastIndex = items.length - 1;

      if (direction === 'left') {
        this.firstIndex =
          this.firstIndex === 0 ? lastIndex : this.firstIndex - 1;
      } else {
        this.firstIndex =
          this.firstIndex === lastIndex ? 0 : this.firstIndex + 1;
      }

      // Move items from this.firstIndex to the lastIndex left.
      for (let i = this.firstIndex; i < items.length; i++) {
        items[i].style.transform = `translateX(-${
          itemTotalWidth * this.firstIndex
        }px)`;
      }

      // Move the rest of the items right.
      for (let i = 0; i < this.firstIndex; i++) {
        items[i].style.transform = `translateX(${
          itemTotalWidth * (items.length - this.firstIndex)
        }px)`;
      }
    } else {
      const itemsTotalWidth = itemTotalWidth * this.items.length;
      const buffer = itemsTotalWidth - container.clientWidth;

      if (direction === 'left') {
        this.offset =
          this.offset - itemTotalWidth >= 0
            ? this.offset - itemTotalWidth
            : 0;
      } else {
        this.offset =
          this.offset + itemTotalWidth > buffer
            ? buffer
            : this.offset + itemTotalWidth;
      }
    }

    this.style.setProperty('--item-offset', `${this.offset}px`);

    console.log(this.offset);
  }
}
