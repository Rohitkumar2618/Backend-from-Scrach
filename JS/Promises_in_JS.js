// hamne ek function likha jo ki server se connext kr rha or hone ke bad show ka hua krke

function connectToServer() {
  // its showing connecting phase
  console.log("connecting  to the  server....");

  // hamne promiss ka use kra jo ki use hota hai async operation perform krne ke liye
  // vo 2 parameters pass krta hai first resolve mean like true and reject mean false
  // ! ab true hai to run and false hai to reject

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // Hamne resolve hone wala code likha
      resolve("Server connected");
    }, 2000);
  });
}

// Function ko call kiya
// .then() --> use when we have resolve part
// .catch() ---> use when we have reject part mean error

// to hamne apne fn ko .then ( ) lagaya
// function(response){}
// Jo part resolve me hai vo hamne le liya catch me
//or usse print kr diya resolve me

connectToServer().then(function (response) {
  console.log(response);
});
