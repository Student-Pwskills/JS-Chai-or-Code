const user = {
    name : "Vaibhav",
    prince : 999,
    welcomeMessage : function(){
        console.log(` ${this.name} , welcome to website`);  // this keyword use can be used in objects only they can't be used in single function.
        console.log(this)
    }
}
user.welcomeMessage()
user.name = "Vibhu"
user.welcomeMessage()
// console.log(this)

// function chai(){
//     let userName = "Ram"
//     console.log(this.userName) //  So 'this' keyword can't be used in functions
// }
// chai()

//  const chai = function(){
//     let userName = "Ram"
//     console.log(this.userName)     // same same but different function( still 'this' won't work)
//  }
//  chai()

 // Arrow function ( Still 'this.entity' won't work by only 'this' gives {} )

 const chai = () => {
    let name = "vaibhava"
    console.log(this)
 }
 chai()

 // Arrow function
//  const add = (num1,num2) =>{
//    return num1+num2  // Explicit return (jab return lagana pade)
//  }

 // implicit return in arrow fucntion( when there is only one line in function)


 const add = (num1,num2) => num1+num2 // no need of return  statement

 // dd = (num1,num2) => ({name: "Vibhu"})


 console.log(add(2,9))