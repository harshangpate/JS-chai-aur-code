// Date and Time in JS has a arbitrary date and time of January 1st, 1970 (UTC)

let CurrentDate = new Date()
// console.log(typeof CurrentDate);
// console.log(CurrentDate.toString());
// console.log(CurrentDate.toDateString());
// console.log(CurrentDate.toISOString());
// console.log(CurrentDate.toJSON());
// console.log(CurrentDate.toLocaleString());

let customDate = new Date(2025, 2, 5, 5, 3, 27) // Format(YYYY, MM, DD, HH, MM, SS) and Months start from index 0.
let cDate2 = new Date("2025-03-05") // another way of creating a Date object.
// console.log(customDate.toLocaleString())
// console.log(cDate2.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(cDate2.getTime());
// console.log(Math.floor(Date.now()/100));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())


console.log(`the Date and time right now is: ${newDate.toLocaleString('ISD')}`)
