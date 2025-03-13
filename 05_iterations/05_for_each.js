const coading = ["js", "ruby", "java", "python", "cpp"]

// coading.forEach( function (item) {
//     console.log(item);
// } )

// coading.forEach( (item) => {
//     console.log(item); 
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coading.forEach(printMe)    // when passing in a user-defined function, you only need to pass in the reference of that function.

coading.forEach( (item, index, arr)=>{
    // console.log(item, index, arr)
})


const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoading.forEach((item)=> {
    // console.log(item.languageName);/
    console.log(`language name is :- ${item.languageName} & file name is :- ${item.languageFileName}`)
    
})