const score = 400

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(1)) // Returns a string representing a number in fixed-point notation.

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // returns precise numbers according to precision argument.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // Returns string in locale language.



/* ********************* Maths ******************* */

console.log(Math);
console.log(Math.abs(-10)); //absolute value
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(4));

console.log(Math.random()); // value always lies between 0 to 1
console.log((Math.random()*10) + 1 );

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // imp formual to get the random value between two values.
