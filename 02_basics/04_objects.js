// const tinderUser = new Object(); //  ye ek singleton object hai
// console.log(tinderUser)   

const tinderUser = {}   // ye ek non-singleton object hai
tinderUser.id = "1231bc"
tinderUser.name = "vibhu"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "vibhu@landlord",
    user1 : {
        user2 :{
            name : "vaibhav Shukla",          // Nesting of objects
            branch : "CSE"
        }
    }
}
// console.log(regularUser.user1.user2.name)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
// const obj3 = {obj1,obj2} // obj1 mein obj2 copy ho raha hain
const obj3 = Object.assign({},obj1,obj2)  // {} mein obj1 and obj2 copy ho raha hai
const obj4 = {...obj1, ...obj2} // we can also use spread operator
console.log(obj4)
                                  
const user = [                              // objects can also be used in array
   { 
   id : "12",
   email : "vihbu@ggle.com"
   }, 
   {

   },
   {

   }
]

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))  // each key value pair is converted into in array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))



//+++++++++++ object de-structure ++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName : "jsinhindi",
    courseInstructor : "Vibhu",
    price : "999"
}
// console.log(course.price)

const { courseInstructor: Instructor} = course         // another way (syntax)
console.log(Instructor)

const navabar = ({company}) => {
                                            // ojbect de-structure
}
navabar(company = "hitesh")


{
    "name":"Vaibhav",                                         //JSON API
    "courseName": "jsinhindi",
    "price":"free"
}

[
    {},
    {},                   // Array JSON API
    {}
]