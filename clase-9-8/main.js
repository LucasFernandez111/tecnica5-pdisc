// function calcularPromedio(arreglo) {
//   const promedioArr =
//     arreglo.reduce((acumulador, item) => acumulador + item, 0) / arreglo.length;
//   console.log(promedioArr);
// }

// const numeros = [1, 2, 3, 4, 5];
// calcularPromedio(numeros);

//PROMESA => Una operacion o proceso a completarse en el futuro(puede estar en uno de tres estados) -pendiente(pending - la operacion no comenzo a ejecutarse ) -completada(fulfilled) - rechazada(rejected)

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const aleatorio = Math.floor(Math.random() * 10);
//     const esPar = aleatorio % 2 == 0;
//     if (esPar) {
//       resolve("La promesa se cumplio");
//     }
//     reject("Es Impar");
//   });
// });

// promesa
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("fin de la promesa"));
