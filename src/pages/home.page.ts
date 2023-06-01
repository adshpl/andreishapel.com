import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
export * from '../components/header.component';

@customElement('home-page')
export class HomePage extends LitElement {
  render() {
    return html`
      <main class="home">
        <header-component></header-component>
      </main>
    `;
  }
}
