import { LitElement, html, customElement, unsafeCSS } from 'lit-element'
import styles from './style.scss';

@customElement('cei-footer') // définit le tag a utiliser dans l'html, ici <cei-header></cei-header>
export class CEIFooter extends LitElement {
    static styles = unsafeCSS(styles); // load le scss

    render() {
        return html`
            <div id='social-container'>
                <a href='https://discord.gg/rtXA4dn9'>
                    <img 
                        src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg'
                        alt='discord'
                    />
                </a>
                <a href='https://www.facebook.com/cercle.ei.1'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png'
                        alt='Facebook'
                    />
                </a>
            </div>
            <a id='mail' href='mailto:tresoreriecei@gmail.com'>contact: tresoreriecei@gmail.com</a>
        `;
    }
}