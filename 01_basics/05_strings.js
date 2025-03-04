const Name = "Harshang"
const repoCount = 10

// console.log(Name + repoCount + " Value"); // not to use in modern ways 

console.log(`Hello my name is ${Name} and my github repo count is ${repoCount}`); // modern way to write string it is also called as string interpolation

const fullName = new String("Patel-Harshang") // string including with object

console.log(fullName[0]);
console.log(fullName.__proto__);

console.log(fullName.length);
console.log(fullName.toUpperCase);

console.log(fullName.charAt(2));
console.log(fullName.indexOf('r'));

const newfullName = fullName.substring(0,5);
console.log(newfullName);

const anotherString = fullName.slice(-8,6);
console.log(anotherString);

const newStringOne = "   harshang   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com"
console.log(url.replace('google', 'youtube'));

