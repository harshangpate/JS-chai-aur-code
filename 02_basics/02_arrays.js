const Marval_heros = ["Thor", "Iron-man", "Spider-man"]

const Dc_heros = ["Super-man", "Flash", "Bat-man"]

// Marval_heros.push(Dc_heros);
// console.log(Marval_heros);

// concat method

// const all_heros = Marval_heros.concat(Dc_heros);
// console.log(all_heros);

// spread 

const all_new_heros = [...Marval_heros, ...Dc_heros]
// console.log(all_new_heros);


const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const Orig_Array = newArr.flat(Infinity);
// console.log(Orig_Array);


console.log(Array.isArray("happy"));
console.log(Array.from("Happy"));                     // splites the object, string into seperate array element 
console.log(Array.from({name: "Happy"}));             // // Interesting case, because it returns a empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
