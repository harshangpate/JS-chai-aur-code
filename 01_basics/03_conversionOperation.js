let score = null

console.log(typeof score); //can be written as direct
console.log(typeof (score)); // also can be written in parentheses

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber); 

// NaN is not a number if we pass "33abc" in score
// we get 0 if write null
// we can get NaN if we write undefine
// 1 if true
// 0 if false

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true ; 0 => false
// "" => false; "abc" => true

let some_num = 33

let stringNumber = String(some_num)
console.log(stringNumber); // we get 33(number) as a output but it is converted in string 

console.log(typeof (stringNumber)); // op:- string as the number was converted into string

// ******************** Operations ***************************** //

let value = 3
let negValue = -value

console.log(negValue);

let str1 = "Hello"
let str2 = " Harshang"
let str3 = str1 + str2

console.log(str3);

console.log (1 + 2); // op:- 3
console.log("1" + 2); // op:- 12
console.log(1+ "2"); // op:- 12
console.log("1"+2+2); // op:- 122
console.log ((1+2)+"2"); // op:- 32

console.log(true); //if we add 
