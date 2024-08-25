//  to combine two or more arrays or objects we use spread operator 
// introfuced in Es6

const myColors = ['red', 'green', 'blue']
const myNums = [1,2,3]


let myClrsAndNums = [ ...myNums, ...myColors]
// console.log(myClrsAndNums);

let teacherDetail = {
    name:'Bob',
    age: 29
}



let teacherUpdatedDetails = { ...teacherDetail, edu:'Msc'}
// console.log(teacherUpdatedDetails);

// we can also use spread operator with functions when we call a function  see the examle below

const userItemsPrice = [1,2,3,4,5]

function userBill(){
    let sum = 0
    for (let i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

let userTotal = userBill(...userItemsPrice)
console.log(userTotal);

// we can also use spread operaot with strings see the example below 
const myName = 'Mubashar Siddique'
const arrayOfMyName = [...myName]
console.log(typeof arrayOfMyName);


// we pass an array to a function at the time of calling 
// we can also use spread operator to combine arrays 
// we can use spread operator to modify the exisiting object
