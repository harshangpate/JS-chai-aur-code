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



// ************************* memory ******************************** // 

/*
1. Stack memory :- mainly used in primitive datatypes.  (Here we are given a copy of that value, if we make changes in that value then the original value was not affected that means we are changing the value in the copy one)
2. Heap memory :- mainly used in non-primitive datatype. (Here we are directly given that value so if we make changes in that value it can affect to all)
*/

// stack example
let Name = "Harshang"

let anotherName = Name
console.log(anotherName); // op:- Harshang as we have given the value of Name to anotherName.

anotherName = "Patel Harshang"
console.log(anotherName); // op:- Patel Harshang as we have made chane in copy so the previous value/ variable was not affected.

let userOne = {
    email: "Harshnag@gmail.com",
    upi: "8780976700@hdfc"
}

let userTwo = userOne; // here the variable was created but we get the direct reference of the userOne.

userTwo.email = "user@gmail.com"

console.log(userOne.email); // here the value of both the datatype are changed. original value:- Harshang@gmail.com op:- user@gmail.com
console.log(userTwo.email);