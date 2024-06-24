// ** APPEND data mean add a data in exesting file

const fs = require("fs");

fs.appendFile(
  "create.txt",
  " Addend mean append the data usning append property",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Data Appended");
    }
  }
);
