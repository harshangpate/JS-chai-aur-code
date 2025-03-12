// if statement

// there should be true so code will be true or if false it will not been executed
// === is used to check the comparision but also it will check the datatype

if (true){

}

if (false){

}

const isUserloggedIn = true
if (isUserloggedIn == true){
    // console.log("welcome user")
}

const temprature = 41
if (temprature < 50)
{
    // console.log("temperature is less than 50")
}


const temp = 41
if (temp === 40){
    // console.log("temperature is grater then 50")
}
else{
    // console.log("temperatuere is less than 50");
    
}

// short hand notation
// implicit scope
const balance = 1000

// if(balance > 500) console.log("test");   not be done like this

if (balance < 500) {
    // console.log("less than 500");
}
else if(balance < 750)
{
    // console.log("less than 750");
    
}
else if (balance < 900)
{
    // console.log("less than 900")
}
else{
    // console.log("less than 1200")
}

// we can give "&&" only two times in one if statement
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 ==2){
    // console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}