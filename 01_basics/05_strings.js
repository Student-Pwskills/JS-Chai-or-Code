const name = "Vaibhav"// strings can be enclosed by either " " or ' '
const repoCount = 50
// console.log(name+repoCount+" Shukla") this isn't prefered to write
//console.log(`My name is ${name} and my repocount is ${repoCount} `) it is preferd to write

// Strings can also be created by making an object of string

const gameName = new String("Cricket")
console.log(gameName[0])
console.log(gameName[1])
//console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase()) // it make changes only in the copy of gameName (remember the concept of stack)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4) // In substring() we can not use -ve values
console.log(newString)

const anotherString = gameName.slice(-7,4) // In slice() we can also use -ve values as well as +ve values
console.log(anotherString)

const Hero = "  Vaibhav  "
console.log(Hero)
console.log(Hero.trim()) // trim() function is used to remove unwanted white spaces from the string

const url = "https://vaibhav.com/vaibhav%99shukla"
console.log(url.replace('%99','-'))
console.log(url.includes("vaibhav"))

const Beauty = "Handsome is one who give hand to some"
console.log(Beauty.split(' '))  // converting string into an array 
