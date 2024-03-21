class primerNodal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }  

    connectedCallback() {
        this.innerHTML = "<h2>Primer Nodal</h2>";
    }

}

window.customElements.define('primer-nodal', primerNodal)