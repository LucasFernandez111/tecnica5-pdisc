const { stdin, stdout } = require("process");
const readline = require("readline");

const r = readline.createInterface({
  input: stdin,
  output: stdout,
});

r.question('Ingrese "10" numeros: ', (num) => {
  const numArray = num.split(" ");

  const average = numArray.reduce((suma, number) => {
    return suma + Number(number) / numArray.length;
  }, 0);

  console.log(average);
  r.close();
});
