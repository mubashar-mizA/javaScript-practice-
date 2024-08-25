console.log('working');
// object oriented programming 
// what is OOP its a way of writing code where we think evrything in form of objects 
// logic and data inside the object  (The concept of OOP)
// there are other ways of writing code such as procedural (line-by-line) and 
// ... functional programing 
// ... React follow functional programming (in functional programming the funtions are pure functions)
// Angular follow OOP methadology (react and angualar are framworks of js)


// let user = {
//     name:'alpha',
//     age:23,
//     email:'alpha@23.com'
// }

// function getBithYear(){
//     return new Date().getFullYear() - user.age
// }
// console.log(getBithYear());


// Please note that we can understand new keyword when we laern about contructor functions
// the above task can be performed in OOP

let user = {
    firstName:'alpha',
    lastName:'beta',
    age:23,
    email:'alpha@23.com',
    getBithYear(){
        return new Date().getFullYear() - user.age
    },
    getFullName(){
        return `Full name is ${this.firstName} ${this.lastName}`
    }
}


//  factory functions (use multiple users with ease using factory functions)
// what are factory functions??? how to use factory fnctions????
// when use factory functions 

function createUser(firstName, lastName, age, email){
    
    const user = {
        firstName,
        lastName,
        age,
        email,
        getBithYear(){
            return new Date().getFullYear() - user.age
        },
    }
    return user 
}
const user1 = createUser('alpha', 'beta',23, 'alpha@23.com') 
const user2 = createUser('beta', 'gama',24, 'gama@24.com') 
const user3 = createUser('gama', 'alpha',25, 'alhgm@25.com') 

// the only thing lake behind is that for each function it takes extra space
//... to create method for each user to address that issue we use construction 
// ... function 