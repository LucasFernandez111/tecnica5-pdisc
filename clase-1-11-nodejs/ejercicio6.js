const { stdin, stdout } = require("process");
const readline = require("readline");

const r = readline.createInterface({
  input: stdin,
  output: stdout,
});

r.question('Ingrese las "3" notas del alumno: ', (notes) => {
  const notesArray = notes.split(" ");

  const result = notesArray.map((number) => number * 2);

  console.log(result);
  r.close();
});
