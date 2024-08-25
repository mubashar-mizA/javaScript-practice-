//  In every function we have arguments and this keyword , by using arguemnts keyword we can get the arguments passed 
// when we call a function, arguments keyword is no longer suggested after es6 which introduce spread and rest paramters



document.querySelector('.for-defaultparameters').computedStyleMap.display = 'none'
console.log(`Working for 46`);
// in every funvtion we have arguments keyword and this keyword

// function add(a,b){
//     console.log(arguments);
//     // console.log(this);
//     return a + b;
// }

// function userBill(){
    
//     let userValues = []
    
//     for(let i = 0; i<arguments.length; i++){ // why we use i < arguments.length not i <= arguments.length
//         userValues.push(arguments[i])
//     }
//     let userTotalBill = userValues.reduce((acc, currentValue)=> acc + currentValue, 0)
    
//     return `your total bill is ${userTotalBill}.0 $`
    
// }

// function userBill(){
//     let userTotal = 0
//     for (let i =0; i<arguments.length; i++){
//         userTotal += arguments[i]
//     }
//     return `your total bill is ${userTotal}.0 $`
// }


// const totalBill = userBill(300,390,450)
// console.log(totalBill);

 const userBill = () => {
    let userTotal = 0
    for (let i =0; i<arguments.length; i++){
        userTotal += arguments[i]
    }
    return `your total bill is ${userTotal}.0 $`
}


const totalBill = userBill(300,390,450)
console.log(totalBill);
// Please note that arguments keyword is depricated in ES6 we cant use arguments keyword in arrow funtion 
// there is an alter of argumnets keyword in es6 which is rest parameters