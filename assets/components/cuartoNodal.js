class cuartoNodal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }  

    connectedCallback() {
        this.innerHTML = "<h2>Cuarto Nodal</h2>";
    }

}

window.customElements.define('cuarto-nodal', cuartoNodal)