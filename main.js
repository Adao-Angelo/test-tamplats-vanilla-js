class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          h1 {
            color: blue;
          }
        </style>
        <h1></h1>
      `;

    this.h1 = this.shadowRoot.querySelector("h1");
  }

  static get observedAttributes() {
    return ["title"];
  }

  get title() {
    return this.getAttribute("title");
  }

  set title(value) {
    this.setAttribute("title", value);
    this.h1.textContent = value;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title") {
      this.title = newValue;
    }
  }
}

customElements.define("y-header", Header);

//lottieFiles
