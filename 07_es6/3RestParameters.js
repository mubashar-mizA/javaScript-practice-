// consider rest parameter as replacemet of arguments keyword
// spread operator and rest paramter use the same 3 dots but they are diffrent 
// spread operator spread the values and rest paramter collect values and put them in an array 


// const priceOfItems = [100, 200, 300, 400, 500]

// function sumCalculator(...priceList){
//     return priceList.reduce( (acc,curVal) => acc + curVal, 0 )
// }
// console.log(sumCalculator(1,2,3));



let prices = [1,2]

function sumOfPrices (...prices){
    return prices.reduce( (acc, curVal) => acc + curVal, 0 )
}

console.log(sumOfPrices());


// i think we use spread operator to join arrays and to modify objects
// also with functions to pass array while calling a function 
// and i also think that we use rest operator to pass arrays and objets to a function when we define 
// function 

