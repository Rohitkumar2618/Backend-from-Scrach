const fs = require("fs");

fs.unlink("renaming.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File Removed");
  }
});
