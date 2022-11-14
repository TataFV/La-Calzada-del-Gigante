let boton = document.getElementById("boton");
boton.addEventListener("click", function (event) {
    mensajeValidacion(event);
}, true);

function mensajeValidacion(event) {
    inputNombre = document.getElementById("nombre");
    span = document.getElementsByClassName("spanStyle");
    if (span.length > 0) {

        span[0].remove();
    }
    if (/[A-Z]/.test(inputNombre.value)) {
        event.preventDefault();
        let name = document.getElementById("campoNombre");
        mensaje = document.createElement("span");
        mensaje.setAttribute("class", "spanStyle");
        console.log(mensaje);
        mensaje.innerHTML = "El nombre completo tiene estar en minúsculas"
        name.appendChild(mensaje);
    } else {
        console.log("ok");
    }
}