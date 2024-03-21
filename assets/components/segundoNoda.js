class segundoNodal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }  

    connectedCallback() {
        this.innerHTML = "<h2>Segundo Nodal</h2>";
    }

}

window.customElements.define('segundo-nodal', segundoNodal)