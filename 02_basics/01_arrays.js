// array is an aobject in which we can store multiple elements in one variable/ 

// shallow 

const myArray = [0, 1 ,2 ,3 ,4 ,5]
const mHeros = ["Shaktiman", "Naagraj"]

const myArray2 = [1, 2, 3, 4]

// console.log(myArray);           // to get all the values of the array
// console.log(myArray[0])         // to get the value of specific index 

// array methods

// myArray.push(10)                // to push the value to an array
// console.log(myArray)

// myArray.pop()                   // no need to give any arguments we just simply write pop this is used to pop the last element of the array
// console.log(myArray);

// myArray.unshift(0)                 // it adds the value at the start of the array
// console.log(myArray);

// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(0))

const newArray = myArray.join()
console.log(newArray);
console.log(myArray);


// slice and splice 
console.log("A", myArray);

const myNewArray1 = myArray.slice(1, 3);
console.log(myNewArray1);
console.log("B", myArray);

const myNewArray2 = myArray.splice(1, 3);
console.log("C",myArray);
console.log(myNewArray2);   

