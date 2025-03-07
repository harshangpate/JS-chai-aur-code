let a = 100
// {} is also called as scope
if (true){
    let a = 10
    const b = 20
    var c = 30
    
    // console.log("block scope:-",a); // local scope
}

// console.log(a); // global scope
// console.log(b);
// console.log(c);

// 
function one(){
    const username = "Happy"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


// if else
if (true){
    const username = "Happy"
    if(username === "Happy"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++ interasting +++++++++++++++++//

console.log(addone(5)) // we can also call function above the function
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5))
