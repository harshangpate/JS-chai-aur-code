const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb  : 'ruby',
    swift: 'swift by apple'
}
for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
       
}

// for-in loop structure can be used to iterate over a object which is similarly functioning to for-of loop

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('QTR', "Qatar")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
    
}
// NOTE: When using for-in loop with array, we get the key-index of array, not the key-value. (IMPORTANT)

// NOTE: You cannot use for-in loop with maps because it is not iterable object and will return nothing.