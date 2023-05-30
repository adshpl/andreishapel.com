import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('not-found-page')
export class NotFound extends LitElement {
  render() {
    return html`
      Page not found ☹️
    `;
  }
}
