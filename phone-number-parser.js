
const regExp = /\(([0-9]{2})\) ?([0-9]{4,5})-?([0-9]{4})/ 

const numbers = [
    "(41) 99709-5555",
    "(41) 9909-5555",
    "(55) 8709-5555",
    "(41) 99709-5255",
    "(41) 99709-5b55", // false
    "(41) 99709-5055",
    "(41) 997095055",
    "(41) 99705055",
    "(41)997095055",
    "(41)99705055",
    "(41) 99709-5055",
    "(bb) 99709-5055" // false
]

const phoneParser = (phone) => {
    try {
        let [ undefined,ddd, ...parts] = phone.match(regExp)
        return {
            ddd,
            parts
        }
    } catch(e){
        return null;
    }
}

for( let number of numbers ){
    console.log(number)
    console.log( phoneParser(number) );
}