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

// ** Reading a file using  fs
fs.readFile("create.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// ** APPEND data mean add a data in exesting file

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

// ** Rennaming the file

fs.rename("create.txt", "renaming.txt ", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File Renamed");
  }
});

// ** remove the file

fs.unlink("renaming.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File Removed");
  }
});

// ! create a new folder

fs.mkdir("folder_creation", function (err) {
  if (err) {
    console.log("Error creating folder");
  } else {
    console.log("Created folder");
  }
});

// ! Read folder
fs.readdir("./folder_creation", { withFileTypes: true }, function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});

// ! delete folder
fs.rm("folder_creation", { recursive: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Removed");
  }
});
