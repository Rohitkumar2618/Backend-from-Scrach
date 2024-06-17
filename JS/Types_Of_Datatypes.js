// There are mainly two types of data types
// ! 1. Premetive
// ! 2. Refference

// ! ---------------- Premetive------------

// let ,var , const

let a = 10; // ---- Is me or var me koi jada difference nhi hai
var b = 15; //
const c = 15; //  Const matlb constant jiski value change nhi hogi

// ! ------------------ Reference -------------------------

// Jisme ye brackets ka use krke usme value put kiya hai vo refference data types hai
// !   [] , {} , ()

// ** Premitive  Data Types ki value normaly copy kr sakte hai **

//   This is the way where we can copy the variables
let d = 10;
let e = d;

// ** Refference Data Types -> Copy type 1
// ! ayse  kroge to cpy nhi balki f hi aa jayega mean if you do changes in g that will be reffelected in f also so how to fix this
let f = [1, 2, 3, 4, 5];
let g = f;

// ** Refference Data Types -> Copy type 2
//! ye banegi copy isme agar i me change bhi krogee to wo h me nhi hoge

let h = [1, 2, 3, 4, 5];
let i = [...h];

// ** Refference Data Types -> Copy type 3
