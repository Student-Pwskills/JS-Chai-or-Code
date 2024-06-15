// Global Scope

var c = 200
let a = 50

if(true){
    let a = 20
    const b =              // Block Scope
     c = 20
     console.log("INNER",a)
}
console.log(a)
//console.log(b)
console.log(c)