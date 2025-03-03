// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // true
console.log("02" > 1); // true

// the comparision and equality check are different 
// in this we can also get the the unexpected outputs
// we mostly avoid this types of comparisions as for the clean code

console.log(null == 0); //false
console.log(null > 0); // false
console.log(null >= 0); // true as the null is converted into 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

// === strict check 
console.log("2" === 2); // false as the first one is string and second one is integer/ numeric value
console.log(2 === 2); // true as the first and second both the values are integer/ numeric values