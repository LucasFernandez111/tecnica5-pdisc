(async () => {
  const res = await fetch("https://swapi.dev/api/people");
  const datosJson = await res.json();
  const datos = datosJson.results;

  datos.map((item) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.url;
    a.textContent = item.url;

    li.appendChild(a);
    ul.appendChild(li);

    document.body.appendChild(ul);
  });
})();
