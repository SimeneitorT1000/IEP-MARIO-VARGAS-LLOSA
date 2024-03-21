class cuartoNodal extends HTMLElement {
    constructor() {
        super();
    } 
    connectedCallback() {
        this.innerHTML = 
        `
        <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-------- LINK de CSS -------->
    <link rel="stylesheet" href="styles.css">
    <!----------------------------->
    <title>Visualizador PDF</title>
</head>
        <body>
            <!-- Título -->
            <button id="close-modal" class="close" style="float: right;">X</button>
            <h1 class="title">Visualizador de PDF</h1>
            <!-- title -->
            <object class="pdfview" type="application/pdf" data="file:///C:/Users/SimeneitorT800/Downloads/html5up-prologue/assets/pdfs/reglamentoInterno2023.pdf"></object>
            <!-- Aprende más sobre object tag: https://www.w3schools.com/tags/tag_object.asp -->
            <!-- Puede usarse tanto archivos PDF en la Web o locales -->
        </body>
        
        
        `;
    }
}

window.customElements.define('cuarto-nodal', cuartoNodal);