//dado el formulario del ejercicio 1: Hacer todos los campos obligatorios etc.

window.onload = () => {
  const div = document.querySelector("#box");
  //FORMULARIO
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://example.com/registro";
  form.name = "datos_personales";
  form.noValidate = "novalidate";
  div.appendChild(form);
  document.forms.datos_personales.onsubmit = (event) => {
    const esValido = event.target.reportValidity();
    if (!esValido) {
      if (nombre === "") {
        alert(`El campo ${nombre.name} es invalido  `);
      }
      if (contraseña === "") {
        alert(`El campo ${nombre.name} es invalido  `);
      }

      event.preventDefault();
    }
  };

  //INPUT TEXT
  const nombre = document.createElement("input");
  nombre.type = "text";
  nombre.name = "nombre";
  nombre.setAttribute("required", "");
  const labelName = document.createElement("label");
  labelName.textContent = "Nombre: ";
  labelName.id = "nombre";
  labelName.name = "nombre";
  form.appendChild(labelName);
  form.appendChild(nombre);

  //INPUT PASSWORD
  const contraseña = document.createElement("input");
  contraseña.type = "password";
  contraseña.name = "contraseña";
  contraseña.setAttribute("required", "");
  const labelContraseña = document.createElement("label");
  labelContraseña.textContent = "Contraseña: ";
  labelContraseña.id = "contraseña";
  labelContraseña.name = "contraseña";
  form.appendChild(labelContraseña);
  form.appendChild(contraseña);

  //ELEMENTO SELECT
  const ciudad = document.createElement("select");
  ciudad.name = "ciudad";
  ciudad.setAttribute("required", "");
  const localidades = ["MERLO", "PADUA", "ITUZAINGO", "CASTELAR"];
  //Opcion 1
  const option1 = document.createElement("option");
  option1.textContent = localidades[0];
  ciudad.appendChild(option1);
  //Opcion 2
  const option2 = document.createElement("option");
  option2.textContent = localidades[1];
  ciudad.appendChild(option2);
  //Opcion 3
  const option3 = document.createElement("option");
  option3.textContent = localidades[2];
  ciudad.appendChild(option3);
  //Opcion 4
  const option4 = document.createElement("option");
  option4.textContent = localidades[3];
  ciudad.appendChild(option4);

  const labelCiudad = document.createElement("label");
  labelCiudad.textContent = "Ciudad: ";
  labelCiudad.id = "ciudad";
  labelCiudad.name = "ciudad";
  form.appendChild(labelCiudad);
  form.appendChild(ciudad);

  //Input submit
  const enviar = document.createElement("input");
  enviar.type = "submit";
  enviar.name = "enviar";
  form.appendChild(enviar);
};
