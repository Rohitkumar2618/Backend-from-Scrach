const fs = require("fs");

fs.mkdir("folder_creation", function (err) {
  if (err) {
    console.log("Error creating folder");
  } else {
    console.log("Created folder");
  }
});
