//Si todos los elemetnos cumplen con una condicion every() funcion boleana

//Si el vector contiene algun valor impar? some()  funcion boleana

//Una funcion reduce Siempre tiene que devolver algo

// stdin --> entrada estandar (standard input) --> teclado
// stdout --> salida estandar (standard output) --> pantalla
// navigator --> process

const readLine = require("readline");

//Configurar la entrada/salida mediante el metodo createInterface
const r = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Question recibe 2 parametras, input y output
r.question("Por favor escribi tu nombre:", (nombre) => {
  console.log(`Hola ${nombre}!`);
  r.close(); //finaliza el programa
});
