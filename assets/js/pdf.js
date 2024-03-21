document.querySelectorAll('.btn-abrir-modal').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal')[index].style.display = 'block';
    });
});

document.querySelectorAll('.btn-cerrar-modal').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal')[index].style.display = 'none';
    });
});
