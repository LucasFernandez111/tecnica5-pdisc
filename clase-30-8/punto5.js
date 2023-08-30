const opciones = document.querySelectorAll("option");
let values = [];
opciones.forEach((e) => {
  values.push(e.value);
});
console.log(values);

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

async function pedir() {
  try {
    const respuesta = await fetch("https://reqres.in/api/users");

    const data = await respuesta.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

pedir();
