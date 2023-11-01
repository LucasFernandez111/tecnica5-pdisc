const div2 = document.createElement("div");
const buttonAnterior = document.querySelector("#anterior");
const buttonSiguiente = document.querySelector("#siguiente");
div2.setAttribute("class", "tarjeta");

let page = 0;

document.body.appendChild(div2);

const getApi = async (url) => {
  const res = await fetch(url);
  const datosJson = await res.json();
  console.log(page);

  const datos = datosJson.content;
  datos.map((item) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const a = document.createElement("a");
    div.setAttribute("class", "div-tarjeta");
    a.href = item.href;
    img.src = item.image;

    a.appendChild(img);
    h1.textContent = item.name;

    div.appendChild(a);
    div.appendChild(h1);
    div2.appendChild(div);
  });
  page++;
};

buttonSiguiente.onclick = () => {
  getApi(`https://www.digi-api.com/api/v1/digimon?page=${page}`);
};
