//Expresiones regulares pregunta si contiene determinada cadena de caracteres o expresion
const h1 = document.querySelector("h1");

const datosUser = navigator.userAgent;

if (datosUser.includes("Windows")) {
  h1.textContent = "Windows";
} else if (datosUser.includes("Mac")) {
  h1.textContent = "Mac OS";
} else if (datosUser.includes("Linux")) {
  h1.textContent = "Linux";
}
