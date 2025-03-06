function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("Y");

}
// sayMyName()

// function addTwoNumbers(number1, number2 /* this is called as parameters*/){
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(1, 8 /* this is called as arguments */)
function addTwoNumbers(number1, number2 ){

    // let result = number1 + number2
    // return result
    // we cannot print/ console anything in this function after giving return statement
    return number1 + number2 
    // this can be also used for space management / 
}

const result = addTwoNumbers(3, 5)

// console.log("result: ",result);


// by how many different types we can get the arguments.

function loginUserMessage(username /* was can also predefine the calue of username by bust username = "sam" */){
    if(username === undefined /* we can also write !username */){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());  // undefined
// console.log(loginUserMessage("Happy"));