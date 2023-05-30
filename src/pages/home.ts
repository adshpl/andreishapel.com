import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
export * from '../components/header-component';

@customElement('home-page')
export class Home extends LitElement {
  render() {
    return html`
      <main>
        <header-component></header-component>
      </main>
    `;
  }
}
