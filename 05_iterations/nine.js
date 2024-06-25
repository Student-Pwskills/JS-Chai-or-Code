const myNums = [1,2,3]

// const myTotal = myNums.reduce( function( acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( ( acc, currval) => acc + currval , 0)
console.log(myTotal)

const shoppingCart = [
    {
        item:"js course",
        price : 999
    },
    {
        item:"py course",
        price : 900
    },
    {
        item:"c++ course",
        price : 150
    }
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay)