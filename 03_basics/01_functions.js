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