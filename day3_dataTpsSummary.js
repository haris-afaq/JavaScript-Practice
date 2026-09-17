/*
Data Types:
Data are divided into 2 types on the basis of how data is stored and how can we access data
1) Primitive DataTypes
They are call by Value data types means jab bhi ham esko call karty eski actual value hammy nai melti, jabkeh actual value ki copy karke hammy di jati hai
There are 7 types of Non-Primitive DataTypes in javaScript
String, Number, Boolean, Null, Undefined, Symbol, BigInt

2) Non-Primitive DataTpes:
Also called referance Type dataTypes
DataTypes jiske refernce directly memory mae aapko allocate kia ja sakta hai
Arrays, Objects, Functions.
*/

// Symbols

const id = Symbol ("124");
const anotherId =  Symbol ("123");


// Array
 const days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Object => Object ko always ham {} se pehchanty an object can have, String, nUmber, arrays and nested object values like
let myObject = {
myName : "Arish",
age: 24,
myCertifications: {
    designin: "Google Ux Certifications",
    appDevelopment: "Flutter Essentials, Linkedin Learning"
}
}


// Function: identified by () {}

let myFunction = function () {
    console.log("Hello");
};

myFunction();