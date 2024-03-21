class primerNodal extends HTMLElement {
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
            <button id="btn-cerrar-modal" class="close" style="float: right;">X</button>
            <h1 class="title">Visualizador de PDF</h1>
            <!-- title -->
            <object class="pdfview" type="application/pdf" src="./pdfs/reglamentoInterno2023.pdf"></object>
            <!-- Aprende más sobre object tag: https://www.w3schools.com/tags/tag_object.asp -->
            <!-- Puede usarse tanto archivos PDF en la Web o locales -->
        </body>
        
        <script src=".assets/js/pdf.js"></script>
        `;
    }
}

window.customElements.define('primer-nodal', primerNodal);

<body>

<button id="btn-cerrar-modal" class="close" style="float: right;">X</button>
<h1 class="title">Visualizador de PDF</h1>

<object class="pdfview" type="application/pdf" src="./pdfs/reglamentoInterno2023.pdf"></object>

</body>