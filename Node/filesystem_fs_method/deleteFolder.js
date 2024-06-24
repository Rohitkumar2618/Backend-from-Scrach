const fs = require("fs");

fs.rm("folder_creation", { recursive: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Removed");
  }
});
