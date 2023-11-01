const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.question(
  "Ingrese el nombre y sus 3 notas de cada alumno ej: (alumno 1 2 3 alumno2 3 2 1) : ",
  (names) => {
    const namesArray = names.split(" ");

    const studentOne = namesArray.slice(0, 4);

    const studentTwo = namesArray.slice(4, 8);

    const studentTree = namesArray.slice(8, 12);

    const Average = (student) => {
      const average = student.reduce((acum, num, index) => {
        if (index != 0) return acum + Number(num) / (student.length - 1);
        return acum;
      }, 0);

      return `El Alumno "${student[0]}" posee un promedio de "${average}"!`;
    };

    console.log(Average(studentOne));
    console.log(Average(studentTwo));
    console.log(Average(studentTree));
  }
);
