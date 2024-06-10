//Ojects can be created by two ways :
// 1: like Literals , 2: like Constructors

// Singleton :-
//  Interview : When we use Literals then  singleton nahi banta hai , singleton kewal constructor mein banta hai

// object.create : this is the constructor way to make objects , essi mein singleton banta hai.

// Object literals :-

const mySym = Symbol("key1") // declaration of symbol

const JsUser = {
    name : "Vaibhav",  // key(name) : value(string = "Vaibhav Shukla")
    age : 18,
    [mySym] :"therock",   // correct way to use an symbol in an object
    "full Name": "Vaibhav Shukla",
    location : "Lucknow",
    email : "vaibhav@google.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday","Thursday"]
}

// Accessing objects:
JsUser.email = "vibhu@google.com"
console.log(JsUser.email)
// Optimal way to access objects:
                                    
JsUser["name"] = "vibhu"
console.log(JsUser["name"])

//console.log(JsUser.full Name) // It won't work

console.log(JsUser["full Name"])
console.log(JsUser[mySym])

JsUser.email = "vibhu@ggole.com"
//Object.freeze(JsUser)            // now we won't be able to make changes in object
JsUser.email = "vibhu@ggggle.com" // now it has no imapact
console.log(JsUser.email)
JsUser.name = "Man"
console.log(JsUser.name)

// we can use functions as varibles

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())