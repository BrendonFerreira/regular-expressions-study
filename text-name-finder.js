const texts =[ 
    " My name is jon and i'm from canada",
    " my name is jon and i'm from canada",
    "I'm called jon and i'm from canada",
    "i'm called jon and i'm from canada"
]


const findName = ( text ) => {
    let [undefined, name] = text.match(/(?:[Mm]y name is|[Ii](?:'m| am) called) ([a-z]{2,20})/)
    return name
}

for( let text of texts ){
    console.log( findName(text) )
}
