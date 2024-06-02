// let score = "vaibhav"      //"33abc" ,null,undefined,true,"vaibhav"
// console.log(typeof score)
// console.log(typeof(score))
// let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

//Notes :
// "33" => 33
// "33abc" => NaN (Not a Number)
//  true => 1 and false => 0
 
let isLoggedIn = 0    // 0,1,"","anyname"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//Notes:
// 1 => true, 0 => false
// "" => false , "nonEmptyString" => true

// let someNumber = 45
// let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

//************************************ Operations ********************************************************************

let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+3);
// console.log(2-0);
// console.log(2*3);
// console.log(2**3);
// console.log(2/2);
// console.log(25%5);

str1 = "Hello"
str2 = " Vaibhav"
str3 = str1 + str2 
//console.log(str3)

console.log(1+"2")
console.log("1"+2)       // Read ECMA script 2023  link is https://262.ecma-international.org/14.0/#sec-toprimitive
console.log("1"+2+2)   // if fisrt value is string then remaining part will be taken as string
console.log(1+2+"2")   // if first value is not string then firstly operation takes place which will be added to the string

//console.log(+true) // boolean value is typecasted into number
//console.log(+"")   // string is type casted into number

let num1,num2,num3
num1=num2=num3=2+2
//console.table([num1,num2,num3])

let gameCounter = 100
++gameCounter // gameCounter++ //   "Read prefix and postfix js mdn" from google
console.log(gameCounter)       // link to study https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

