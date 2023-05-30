import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('header-component')
export class Header extends LitElement {
  render() {
    return html`
      <header>
        Header
      </header>
    `;
  }
}
