const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log(`Ann error occurred: ${error.message}`);
  }
  console.log("Hi there");
}

readFile();

function doSomething(value) {
  console.log(`Do something with the ${value}`);

  throw { message: "Something went wrong!" };
}

doSomething('Value')

module.exports = {
  readFile: readFile
}