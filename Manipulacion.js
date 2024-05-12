
function cambiarColorFondo() {
    const body = document.querySelector('body');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
}
function agregarNuevoH3ConTexto() {
    const textoInput = document.getElementById('textoInput').value;

    if (textoInput.trim() !== '') {
        const nuevoH3 = document.createElement('h3');
        nuevoH3.textContent = textoInput;

        const contenedor = document.getElementById('contenedorH3');
        contenedor.appendChild(nuevoH3);

        document.getElementById('textoInput').value = '';
    } else {
        console.log('El texto ingresado está vacío o solo contiene espacios en blanco.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');
    const agregarH3ConTextoBtn = document.getElementById('agregarH3ConTextoBtn');

    cambiarColorBtn.addEventListener('click', cambiarColorFondo);
    agregarH3ConTextoBtn.addEventListener('click', agregarNuevoH3ConTexto);
});
