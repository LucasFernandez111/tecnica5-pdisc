// const array = [-273, 0, -150];

// // siempre  que tengamos que TRANSFORMAR se usa map

// array.map((e) => console.log(e - 273, 15));

// //Filter filtrar y devuelve un array nuevo (mo dodifica(no muta))

// [1, 2, 3, 4, 5, 6, 7, 8].filter((item) => console.log(item % 2 === 0));

//REDUCER toma 2 parametros (acumulador)  y (item) el 0 es valor inicial del acumulador
// const array = [1, 2, 3].reduce((acumulador, item) => acumulador + item, 3);

// console.log(array);

//TAREA : CREAR UN REDUCTOR QUE DEVUELTA UN ARREGLO CON LA CANTIDAD DE PERSONAS DE CADA CIUDAD

const arrayObjetc = [
  {
    nombre: "Pepe",
    ciudad: "Buenos Aires",
  },
  {
    nombre: "Juan",
    ciudad: "Carlos Keen",
  },
  {
    nombre: "Maria",
    ciudad: "Uribelarrea",
  },
  {
    nombre: "Jose",
    ciudad: "Uribelarrea",
  },
  {
    nombre: "Benito",
    ciudad: "Saladillo",
  },
  {
    nombre: "Franco",
    ciudad: "Saladillo",
  },
  {
    nombre: "Sebastian",
    ciudad: "Saladillo",
  },
  {
    nombre: "Francisco",
    ciudad: "Daireaux",
  },
  {
    nombre: "Jazmina",
    ciudad: "Saladillo",
  },
  {
    nombre: "Juana",
    ciudad: "Lujan",
  },
  {
    nombre: "Josefa",
    ciudad: "Coronel Vallejos",
  },
  {
    nombre: "Marcela",
    ciudad: "Buenos Aires",
  },
];

arrayObjetc.reduce((acumulador, item) => {
  ciudad = item.ciudad;

  if (!acumulador[item]) {
    acumulador[ciudad] = 1;
  } else {
    acumulador[ciudad]++;
  }

  return console.log(acumulador);
}, {});
