const paises = [
  {
    provincia: "Buenos Aires",
    pais: "Argentina",
  },
  {
    provincia: "La Rochelle",
    pais: "Francia",
  },
  {
    provincia: "Montevideo",
    pais: "Uruguay",
  },
  {
    provincia: "Maldonado",
    pais: "Uruguay",
  },
  {
    provincia: "Bourdeaux",
    pais: "Francia",
  },
  {
    provincia: "Minas Gerais",
    pais: "Brasil",
  },
  {
    provincia: "Santa Catarina",
    pais: "Brasil",
  },
  {
    provincia: "Mato Grosso",
    pais: "Brasil",
  },
  {
    provincia: "Paris",
    pais: "Francia",
  },
  {
    provincia: "Canelones",
    pais: "Uruguay",
  },
  {
    provincia: "Tacuarembo",
    pais: "Uruguay",
  },
  {
    provincia: "Rouen",
    pais: "Francia",
  },
  {
    provincia: "Chaco",
    pais: "Argentina",
  },
  {
    provincia: "Chubut",
    pais: "Argentina",
  },
  {
    provincia: "Santa Cruz",
    pais: "Argentina",
  },
];

const arrayPais = paises.reduce((acum, item, index) => {
  const paisExistente = acum.find((pais) => pais.pais === item.pais);

  if (paisExistente) {
    paisExistente.provincias.push(item.provincia);
    paisExistente.cantidad++;
  } else {
    acum.push({
      pais: item.pais,
      provincias: [item.provincia],
      cantidad: 1,
    });
  }

  return acum;
}, []);

console.log(arrayPais);
