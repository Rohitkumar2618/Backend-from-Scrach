//  first way to export and import in node js

var a = 10;
var b = 2;
module.exports = a;

// if the one or more data have to share in another file

// first way using object properties
module.exports = { a, b };

// . property

module.exports.a = a;
module.exports.b = b;
