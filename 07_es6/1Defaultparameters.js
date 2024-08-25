
function sum(a = 1, b  = 1){
    if (a === undefined || b === undefined){      
        a = 1
        b = 1
    }
    return a+b
}

// sum()



function rollDice(numOfSides = 7){
    return Math.floor(Math.random() * numOfSides)
}

// rollDice()