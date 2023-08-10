const ul = document.createElement("ul");
const div = document.querySelector(".card");

document.body.appendChild(ul);

fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then((res) => {
    const personas = res.data;

    personas.forEach((element) => {
      const li = document.createElement("li");
      const imagen = document.createElement("img");
      imagen.src = element.avatar;
      const textList = document.createElement("span");
      textList.textContent = ` Usuario: ${element.id} || Nombre : ${element.first_name} || Apellido : ${element.last_name}`;

      li.appendChild(imagen);
      li.appendChild(textList);
      div.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
