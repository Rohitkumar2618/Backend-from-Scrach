const fs = require("fs");

// ** Reading a file using  fs
fs.readFile("create.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
