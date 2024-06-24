//for of loop
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num)
}

const nm = "Vaibhav"
for( const chr of nm){
    console.log(`Each char is ${chr}`)
}

// Maps // it is an object // Maps are not iteratable

const map = new Map()
map.set('IN',"India")
map.set('US',"United states of America")
map.set('FR',"France")
// console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

// ojbect

const myObject = {
    'game':"ludo",
    'game2':"kabbadi"
}
// for( const [key,value] of myObject){       // Incorrect way
//     console.log(key,':-',value)
// }

