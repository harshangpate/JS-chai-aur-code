/* Primitive Data Types (Call by Value)
1. string
2. number
3. bigint
4. boolean => true/false
5. null => standalone value (object)
6. undefined => value yet to be defined (NOT NULL! & has it's own data type.)
7. symbol => for unique values
*/

const score = 100                               // number
const scoreValue = 100.3                        // number

const isLoggedIn = false                        // Boolean

const outsideTemp = null                        // Object

let userEmail;                                  // undefined

const id = Symbol('123')                        // Symbol
const anotherId = Symbol('123')                 // Symbol

// console.log(id == anotherId)

const bigNumber = 2983457443553045n             // BigInt

/* Non-Primitive (Reference) Data Types
1. Arrays
2. Objects
3. Functions
*/

//Arrays
const heros = ["shaktiman", "naagraj", "doga"]; // Object

//Objects
let myObj= {
    name: "Harshang",
    age: 18,
    isAdult: true,
}                                               // Object

//Functions
const myFunction = function(){
    console.log("Hello Harshang");
}                                               // Function / Object Function

console.log(typeof heros);                      // used to find the datatype of variavbles declared above