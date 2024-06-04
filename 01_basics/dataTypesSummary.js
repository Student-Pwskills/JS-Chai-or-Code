//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
   // console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++ Stack and Heap ++++++++++++++++++++++++
 // Stack(stores primitive values) and Heap(stored non primitive values)
 // primitive values gives copy of orginal values
 // Non primitive values gives reference of original values
  
 let myNameIs = "Vaibhav"
 let anotherNameIs = myNameIs
 //console.log(anotherNameIs)
 anotherNameIs = "Chhotu"
//  console.log(anotherNameIs)
//  console.log(myNameIs)

 let userOne = {
    email:"vaibhav@google",
    upi: "#fad@"
 }
 userTwo = userOne
 userTwo.email="chhotu@google.com"
 console.log(userOne.email)
 console.log(userTwo.email)