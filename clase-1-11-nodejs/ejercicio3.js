const { stdin, stdout } = require("process");
const readline = require("readline");

const r = readline.createInterface({
  input: stdin,
  output: stdout,
});

r.question("Ingrese su nombre y numero:", (date) => {
  const dateArray = date.split(" ");
  for (let i = 0; i < dateArray[1]; i++) {
    console.log(`Tu nombre es : ${dateArray[0]}`);
  }
  r.close();
});
