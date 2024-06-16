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

function one(){
    const name = "vaibhav"
    function two(){
     const website = "youtube"
     console.log(name)
    }
  //  console.log(website)
    two()
}
one()

if(true){
    const name = "vaibhav"
    if( name == "vaibhav"){
        const website = " youtube"
        console.log( name + website)
    }
   // console.log(website)
}
//console.log(name)


//++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++

// addOne(5)
function addOne(num){
    return num + 1
}
addOne(5)
 
// addTwo(5)
const addTwo = function( num){
    return num + 2
}
addTwo(5)
