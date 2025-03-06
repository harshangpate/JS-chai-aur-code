// singolton
// const facebookUser = new Object()        // singolton object
const facebookUser = {}                     // non-singolton object

facebookUser.id = "123abc"
facebookUser.name = "Happy"
facebookUser.isLoggedIn = false

// console.log(facebookUser)

const googleUser = {
    email: "Happy@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Happy",
            lastname: "Patel"
        }
    }
}
// console.log(googleUser.fullname?.userFullname.lastname);
// use question mark if we dont have that value in the object for extra protection

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)       // {} is an optional but it's a good practice to give it. 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// specially used database kind of word
const users = [
    {
        id : 1,
        email: "Happy@gmail.com"
    }, {
        id : 2,
        email: "Happy@gmail.com"
    }, {
        id : 3,
        email: "Happy@gmail.com"
    },
]

users[1].email
// console.log(facebookUser);

// console.log(Object.keys(facebookUser));     //to print all the keys
// console.log(Object.values(facebookUser));   // to print all the values 
// console.log(Object.entries(facebookUser));  //comperatively used less

// console.log(facebookUser.hasOwnProperty('isLoggedIn')) // to see if this key is present in our object











//++++++++++++++++++++ destructuring of objects ++++++++++++++++++++//

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor : instructor} = course
console.log(courseInstructor);
console.log(instructor);

// JSON API format

// {
//     "name": "Happy",
//     "coursename": "js in Hindi",
//     "price": "free"
// }