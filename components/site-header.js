class SiteHeader extends HTMLElement {
  connectedCallback() {
    const base = document.querySelector('base')?.href || '/';

    this.innerHTML = `
      <header>
        <nav>
          <h2>Fundamentos</h2>
            <a href="${base}ml/01_fundamentals/01_empirical_risk.html">Risco Empírico</a>
            <a href="${base}ml/01_fundamentals/05_loss_functions.html">Funções de Perda</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);

