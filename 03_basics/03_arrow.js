// this keyword: it gives the information about current context.

const user = {
    username: "Happy",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);   
        // console.log(this);
        
    }
    
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function cofee(){
//     let username = "Happy"
//     // console.log(this.username)
// }
// cofee()

const cofee = () => {
    let username = "Happy"
    console.log(this)
}
// cofee()

// arrow function
// const addTwo= (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,3));

// of we write in {} then we need to write return statement

// implicit arrow function
// const addTwo= (num1, num2) => num1+num2
// console.log(addTwo(2,3))

// and also written as 
// const addTwo= (num1, num2) => (num1+num2)
// console.log(addTwo(2,3))

// explicit return
const addTwo= (num1, num2) => ({username: "Happy"})         // if we need to access the object we need to write it into a parenthisis. 
console.log(addTwo(2,3))
