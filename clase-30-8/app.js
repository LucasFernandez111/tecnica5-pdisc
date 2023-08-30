const temperaturas = [
  24.5, 11.2, 5.6, 7.8, 3.4, 2.4, 10.8, 11.4, 9.8, 25.0, 22.3,
];

// PUNTO 1
const nuevoArreglo = temperaturas.reduce((acum, item) => {
  const cuadruple = item * 4;
  acum.push(cuadruple);
  return acum;
}, []);

console.log(nuevoArreglo);

//PUNTO 2
const arrayTemp = temperaturas.reduce((acum, item) => {
  const formula = (item * 9) / 5 + 32;

  acum.push(formula);
  return acum;
}, []);

console.log(arrayTemp);

//PUNTO 3

const alumnos = [
  {
    nombre_ape: "pepe luis",
    promedio: 9.66,
  },
  {
    nombre_ape: "juan topo",
    promedio: 3.66,
  },

  {
    nombre_ape: "ale gomez",
    promedio: 5.66,
  },
];

const newAlumns = alumnos.reduce(
  (acum, item) => {
    // Existe item en el acumulador?
    // Si existe, incrementar el valor en 1
    // Si no existe, crear el item con valor 1

    if (item.promedio < 7) {
      acum.desaprobados++;
    } else {
      acum.aprobados++;
    }
    return acum;
  },
  { aprobados: 0, desaprobados: 0 }
);

console.log(newAlumns);

//PUNTO 4

const personas = ["fabricio", "fabricio", "maximo", "maximiliano", "alan"];

const nuevoArray = personas.reduce((acum, item) => {
  if (acum[item]) {
    acum[item]++;
  } else acum[item] = 1;

  return acum;
}, {});

console.log(nuevoArray);
