class SiteFooter extends HTMLElement {
  connectedCallback() {
    const prev = this.getAttribute('prev') || '';
    const next = this.getAttribute('next') || '';

    this.innerHTML = `
      <div class="nav-footer">
        ${prev ? `<a href="${prev}">← Anterior</a>` : '<span></span>'}
        ${next ? `<a href="${next}">Próximo →</a>` : '<span></span>'}
      </div>
    `;
  }
}
customElements.define('site-footer', SiteFooter);

