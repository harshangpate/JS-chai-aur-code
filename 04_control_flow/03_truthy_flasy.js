const userEmail = "h@arshang.ai"

if(userEmail){
    // console.log("Got user email");
    
} else{
    // console.log("Don't have user email");
    
}


// flase values
// false, 0(zero), -0, BigInt (0n), "empty string", null, undefined, Nan.

//truthy values
// "0", 'false', " ", [], {}, function(){}

//for arrays
if (userEmail.length === 0){
    // console.log("Array is empty")
}

//for objects
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    // console.log("object is empty");
    
}

//  Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10       // if the value is null then it will take 10 as a value.

console.log(val1);


// terniary operator
// condition ? true : false

const cofeePrice = 50
cofeePrice >= 80 ? console.log("less than 80"): console.log("more than 80");
