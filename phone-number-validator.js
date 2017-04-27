
const regExp = /\([0-9]{2}\) ?[0-9]{4,5}-?[0-9]{4}/ 

const numbers = [
    "(41) 99709-5555",
    "(41) 9909-5555",
    "(55) 8709-5555",
    "(41) 99709-5255",
    "(41) 99709-5b55", // false
    "(41) 99709-5055",
    "(41) 99709-5055",
    "(bb) 99709-5055" // false
]

for( let number of numbers ){
    console.log( regExp.test(number) )
}