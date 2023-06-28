const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const validacion = e.target.reportValidity();

  if (!validacion) {
    console.error("No se pudo enviar el formulario");
    e.preventDefault();
  } else alert("Se envio correctamente");
});
