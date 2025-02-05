class NavItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button class="btn">${this.getAttribute(
      "text"
    )}</button>`;
  }
}

customElements.define("nav-item", NavItem);

// usage
// <my-button text="Click Me"></my-button>
