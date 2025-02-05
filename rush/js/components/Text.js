class Text extends HTMLElement {
  connectedCallback() {
    const fontSizes = {
      h1: "32px",
      h2: "24px",
      h3: "20px",
      h4: "18px",
      h5: "16px",
      h6: "14px",
      s1: "16px",
      s2: "14px",
      s3: "12px",
    };

    const getFontSize = () => {
      for (const key of Object.keys(fontSizes)) {
        if (this.hasAttribute(key)) {
          return fontSizes[key];
        }
      }
      return "16px";
    };

    this.style.fontSize = getFontSize();
    this.style.color = this.getAttribute("color") || "inherit";
    this.innerHTML = `<p>${this.textContent}</p>`;
  }
}
customElements.define("my-text", Text);
