import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { translate } from '../services/i18n.service';

@customElement('header-component')
export class Header extends LitElement {
  static styles = css`
    .header {
      color: var(--color-red);
      font-size: 28px;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header class="header">
        ${translate('description')}
      </header>
    `;
  }
}
