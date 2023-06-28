const cajaTexto = document.querySelector("#cajaTexto");
const boton = document.querySelector("#button");
const imagen = document.querySelector("img");
const divImagen = document.querySelector("#divImagen");
let scale = 1;
cajaTexto.onkeypress = function (e) {
  if (e.key == "Enter")
    if (cajaTexto.value == "") {
      console.error("Ingrese una URL");
    } else crearBoton();
};

function crearBoton() {
  const imagen = document.createElement("img");
  imagen.src = cajaTexto.value;
  divImagen.appendChild(imagen);
}
divImagen.addEventListener("wheel", zoom);

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;
  console.log(scale);

  scale = Math.min(Math.max(0.125, scale), 4);

  divImagen.style.transform = `scale(${scale})`;
}
