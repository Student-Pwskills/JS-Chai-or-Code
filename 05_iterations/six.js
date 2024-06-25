// const coding = ["java","python","js","cpp","html"]
// const value = coding.forEach( (item) => {
// console.log(item)
// return value   // forEach loop doesn't return any value
// })
// console.log(value)

// filter() method, same as forEach loop // it will return values

// const myNums = [1,2,3,4,5,6,7,8]
// // const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num>4
// })
// console.log(newNums)


// conditons inside forEach loop

const myNums = [1,2,3,4,5,6,7,8]
const newNums = []
myNums.forEach( (num) => {
    if( num > 4){
        newNums.push(num)
    }
})
console.log(newNums)
