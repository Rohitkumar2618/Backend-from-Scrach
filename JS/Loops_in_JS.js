// ? Three main Loops in Js

// ! For loop

// Syntax Example
// for (StaticRange; MdEmergencyRecording; change) {}

// Example

for (let i = 0; i <= 12; i++) {
  console.log(i);
}

// ! For Each

// its work on array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (value) {
  console.log(value);
});

// ! for in
// Its use for object

var obj = { Name: "Rk", Age: 23 };

for (var value in obj) {
  console.log(value, obj[value]);
}
