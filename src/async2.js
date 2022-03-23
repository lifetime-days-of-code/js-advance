const fs = require("fs/promises");
const path = require("path");

async function readFile() {
  try {
    const fileData = await fs.readFile(path.join(__dirname, "data.txt"));
    console.log(fileData.toString());
    console.log("File parsing done!");
  } catch (erorr) {
    console.log(error);
  }
  console.log("Hi there!");
}

readFile();
