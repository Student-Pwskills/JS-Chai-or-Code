function myName(){
    // console.log("V");
    // console.log("A");
    // console.log("I");
    // console.log("B");
    // console.log("H");
    // console.log("A");
    // console.log("V");
}
myName()

// function addTwoNum( number1 , number2){   // there is no need to define type of number1 and number2 bcs javascript is a dynamically typed language

//     console.log(number1 + number2)
// }
// addTwoNum(3,8)

function addTwoNum( number1 , number2){   
    return number1 + number2;
}
const result = addTwoNum(3,8);
// console.log("Result :", result)

function userLoginMessage(userName){
    if(userName === undefined){
        console.log("Please enter a User name ");
        return;
    }
    return ` ${userName} just logged In`
}
console.log(userLoginMessage("Vaibhav Shukla"))

// Handling multiple arguments with rest(...) operator 

function subjects(...sub){
 return sub          // it will return an array
}
console.log(subjects("Hidi","English","urdu"))



// passing objects in functions (as argument)

const btech = {
    branch : cse,
    section : c
}

function handleAnyOjbect( obj){
    console.log(` Branch is ${obj.branch} and section is ${obj.section}`)
}
handleAnyOjbect(btech)

// another way
 handleAnyOjbect({
    branch : ME ,
    section : D 
 })

 // passing arrays in functions (as argument)

 const myArray = [2,3,4,5,3]

 function getSecondEle( getArray){
    return getArray[1]
 }
 console.log(getSecondEle(myArray))

 // another way
 
 console.log(getSecondEle([2,3,3,5,6]))
 