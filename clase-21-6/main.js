const form = document.querySelector("form");
const Select = document.querySelector("select");
const nombre = document.querySelector("#name");
const $id = document.querySelector("#atributoId");
const etiqueta = document.querySelector("#etiqueta");
const option = document.querySelector("select");
let validacion = true;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if ($id.value != "") {
    validacion = true;
  } else {
    validacion = false;
    console.error("El Id esta vacio");
  }

  const input = document.createElement("input");
  input.setAttribute("type", option.value);
  input.name = nombre.value;
  input.id = $id.value;
  if (validacion) {
    const label = document.createElement("label");
    label.setAttribute("for", nombre.value);
    label.textContent = `${etiqueta.value}:`;
    document.body.appendChild(label);
  }
  document.body.appendChild(input);

  //   //   input.type = opcionSelect.value;

  //   console.log(optionSelect);
});
