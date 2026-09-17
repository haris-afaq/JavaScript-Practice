/* Conversion Operations:
It is also called type casting or type conversion.
It is commonly used for converting value of a variable from one data type to another.

For Example:
*/

let firstName = "Arish";

console.log (firstName);

console.log(typeof firstName); // It will return the type of First Name as String

// Now converting the data of of First Name var from String to a Number

let valueInNumber = Number(firstName); // In this line we are converting the String Value to a number
console.log(typeof valueInNumber); // Now it will display the type of FirstName as Number


// Now if you want to confirm whether the value is actually converted to number or not you will use
console.log(valueInNumber) // It will return the value as NAN (not a number)

/*
now if the string is like : "17" it will easily convert to a number like 17
if value is like : "Arish" it will return the value is NAN
if value is true then it will be converted to 1 while if value is false it will be converted to 0.
*/


let isLoggedIn = 1;

let booleanIsLoggedin = Boolean (isLoggedIn);
console.log(typeof booleanIsLoggedin);
console.log(booleanIsLoggedin);

/*
1=> true, 0 => false
"" => 0 (false) and "String with value" => 1(true)
*/