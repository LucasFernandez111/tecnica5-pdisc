const { stdin, stdout } = require("process");
const readline = require("readline");

const r = readline.createInterface({
  input: stdin,
  output: stdout,
});

r.question('Ingrese "5" palabras: ', (words) => {
  const wordsArray = words.split(" ");

  //[lucas,yoel,fernandez]

  const result = wordsArray.reduce((acum, word) => {
    if (word.length > acum.length) {
      return word;
    }
    return acum;
  }, "");

  console.log(result);
  r.close();
});
