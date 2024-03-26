const rightBtn = document.querySelector("#scrolling-button-righ");
const leftBtn = document.querySelector("#scrolling-button-left");

const carru = document.querySelector("#carrusel-caja");


rightBtn.addEventListener("click", () => {
    carru.scrollLeft += 200;
})
leftBtn.addEventListener("click", () => {
    carru.scrollLeft -= 200;
})

//scrollLeft