const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const img = document.querySelector("img");

const handleCLick = async () => {
  img.src = "./oval.svg";
  const resJson = await fetch("https://catfact.ninja/fact");
  const respuesta = await resJson.json();

  const titulo = respuesta.fact;

  h1.textContent = titulo;

  const textPalabras = titulo.split(" ", 3).join(" "); // Sin el Join no andaria los Une el .Join()

  //const textPalabras = palabras.slice(0, 3);

  const imagenCat = await fetch(`https://cataas.com/cat/says/${textPalabras}`);
  img.src = imagenCat.url;
};

button.onclick = handleCLick;
