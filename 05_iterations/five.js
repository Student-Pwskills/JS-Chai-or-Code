// for each loop

const coding = ["js","Java","ruby","html","python"]
coding.forEach( function (val) {
   // console.log(val)
})

// another way
coding.forEach( (val) => {
//console.log(val)
})

// another way
 
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe) // only reference of function is required 

// another thing

coding.forEach( (item, index, arr) => {
    console.log(item, index , arr)
})

// objects inside array

const prog = [
  {
    languageName: "java",
    languageFileName :"java"
  },
  {
    languageName: "javascript",
    languageFileName :"js"
  },
  {
    languageName: "python",
    languageFileName :"py"
  }
]
prog.forEach( (item) => {
    console.log(item.languageName)
})