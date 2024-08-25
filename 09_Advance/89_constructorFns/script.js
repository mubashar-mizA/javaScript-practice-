console.log('working');

// function createUser(firstName, lastName, age, email){
    
//     const user = {
//         firstName,
//         lastName,
//         age,
//         email,
//         getBithYear:createUser.userMethods.getBithYear,
//         getFullName: createUser.userMethods.getFullName
//     }
//     return user 
// }

// createUser.userMethods = {
//     getBithYear(){
//         return new Date().getFullYear() - this.age
//     },
//     getFullName(){
//         return `${this.firstName} ${ this.lastName}`
//     }
// }




// const user1 = createUser('alpha', 'beta',23, 'alpha@23.com') 
// const user2 = createUser('beta', 'gama',24, 'gama@24.com') 
// const user3 = createUser('gama', 'alpha',25, 'alhgm@25.com') 


// constructor function 
// when we call a fucntion by useing new keyword then 
// ... that function isknown as constructor function

function CreateUser(fName,lName,age,email){
    this.firstName = fName
    this.lasttName = lName
    this.Age = age
    this.Email = email
}

CreateUser.prototype.userBorthYear =function (){
    return new Date().getFullYear () - this.age
}

const user1 = new CreateUser('Mubasahar', 'Siddique', 23, 'mubashar@23.com')
const user2 = new CreateUser('Sajid', 'Ahmed', 24, 'sajid@24.com')