function connectToServer() {
  console.log("connecting  to the  server....");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Server connected");
    }, 2000);
  });
}

connectToServer().then(function (response) {
  console.log(response);
});
