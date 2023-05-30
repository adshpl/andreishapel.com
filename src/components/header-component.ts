import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { translate } from '../services/i18n';

@customElement('header-component')
export class Header extends LitElement {
  render() {
    return html`
      <header>
        ${translate('firstName')}
      </header>
    `;
  }
}
