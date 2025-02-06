class Nav extends HTMLElement {
  connectedCallback() {
    const navItems = {
      home: "Home",
      about: "About",
      skills: "Skills",
      contact: "Contact",
    };

    this.innerHTML = `
    <nav>
        <button class="menu-toggle">☰</button>
        <div class="nav-links">
            ${Object.keys(navItems)
              .map(
                (item) =>
                  `<a href="${
                    item === "home" ? "/rush/main.html" : "#" + item
                  }" class="nav-item">${navItems[item]}</a>`
              )
              .join("")}
        </div>
    </nav>`;
  }
}
customElements.define("my-nav", Nav);
