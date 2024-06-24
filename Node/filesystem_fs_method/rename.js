const fs = require("fs");

// ** Rennaming the file

fs.rename("create.txt", "renaming.txt ", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File Renamed");
  }
});
