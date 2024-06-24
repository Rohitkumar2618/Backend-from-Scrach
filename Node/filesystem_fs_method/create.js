const fs = require("fs");

// ** Create a file using  fs

// ? Syntax to create a file

// ! filename   data inside the file   function--> callback
fs.writeFile(
  "create.txt",
  "Hey using fs we create a file and add a data",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("File Created");
    }
  }
);
