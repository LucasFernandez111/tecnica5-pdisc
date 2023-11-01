const fs = require("fs/promises");

const readFile = async (path) => {
  try {
    const text = await fs.readFile(path, "utf-8");

    console.log(`Contenido: ${text} -- Cantidad de letras: "${text.length}"`);
  } catch (error) {
    console.log(error);
  }
};

readFile("./assets/datos.txt");
