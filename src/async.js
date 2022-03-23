const fs = require("fs/promises");
const path = require("path");

function readFile() {
  let fileData;

  // this is async operation 'readFile'
  // fs.readFile(path.join(__dirname, "data.txt"), function (error, fileData) {
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  //   // start another async task that sends request to a database
  // });

  fs.readFile(path.join(__dirname, "data.txt"))
    .then(function (fileData) {
      console.log("File parsing done!");
      console.log(fileData.toString());
    })
    .then(() => {
      console.log("Second then");
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("Hi there!");
}

readFile();

/**
 * Return values:
 * Hi there!
 * File parsing done!
 * This works -data from the text file!
 */

/**
 * readFile -> it takes couple of parameters and whenever we see a callback parameter it means
 * this is async task because it wants us to specify a function that should be executed at sometime in the future
 */
