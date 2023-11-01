const button = document.querySelector("button");
const input = document.querySelector("input");
let personaje;

input.onchange = (event) => {
  personaje = event.target.value;
};

async function getDate(personaje) {
  const respuesta = await fetch(
    `https://swapi.dev/api/people/?search=${personaje}`
  );

  const respuestaJson = await respuesta.json();

  const datos = respuestaJson.results;

  datos.map((item) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    li.textContent = `Personajes ${item.name}`;
    ul.appendChild(li);
    document.body.appendChild(ul);
  });
}

button.onclick = () => getDate(personaje);
