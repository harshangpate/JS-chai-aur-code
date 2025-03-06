// singleton is created when we use cinstructor like stuff
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Harshang",
    [mySym]: "myKey1",
    age: 18,
    location: "Vadodara",
    email: "Harshang@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)       // not sujjested as if we try to retrive the value from the object whose key is given in ("") but we mostly use this one for some times
// console.log(JsUser["email"])     // this was used for some special cases
// console.log(JsUser[mySym]); // imp in interviews  this was also used for some special cases

JsUser.email = "Harshang@microsoft.com"
// Object.freeze(JsUser)        // used to frezze the object for further changes in that object
JsUser.email = "Harshang@chatgpt.com"

// console.log(JsUser);


// function in object

JsUser.greeting = function(){
    console.log("Hello user")
}

JsUser.greeting2 = function(){              // string interpolation
    console.log(`Hello Js User, ${this.name}`)
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
