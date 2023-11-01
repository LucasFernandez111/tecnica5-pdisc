const { stdin, stdout } = require("process");
const readline = require("readline");

const r = readline.createInterface({
  input: stdin,
  output: stdout,
});

r.question("Ingrese su nombre: ", (name) => {
  const nameLetters = name.split("");
  console.log(
    `Tu nombre es: "${name}" y posee : "${nameLetters.length}" letras.`
  );
  r.close();
});
