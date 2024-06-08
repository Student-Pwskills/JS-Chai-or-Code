// Arrrays
const myArray = [0,2,3,5,9,8,"Vaibhav", true];
// console.log(myArray)
 
const myHeroes = ["Hatim","Power Rangers", "Hero", "Shaktiman", "SonPari"]
const anotherArray = new Array(0,1,3,5,9);
// console.log(anotherArray[2]);
  
// +++++++++++++ Array Methods ++++++++++++++++++++++++++++

// myArray.push("Anuj");
// myArray.push("Anurag") // adds element at the end of the array
// console.log(myArray)
// myArray.pop() // delete element from the end of the array
// console.log(myArray)

// myArray.unshift(12) // adds element at the starting of the array
// console.log(myArray)

//myArray.shift(); // removes first element from the array
// console.log(myArray)

// console.log(myArray.includes(8))
// console.log(myArray.indexOf(8))

const newArray = myArray.join(); //it binds the array and convert it into string
// console.log(newArray)
// console.log(typeof newArray)

// slice and splice methods

console.log("A ", myArray)
const myn1 = myArray.slice(1,3) // last index is excluded
console.log(myn1)

console.log(myArray)
const myn2 = myArray.splice(1,3) // splice method cuts the part of the array
console.log(myArray)
console.log(myn2)

