//  optional chaining

console.log('Working');
const user = {
    name:'alpha',
    age:23
}

// console.log(user.address.city);

// console.log(user.address?.city);


console.log('Working');

const user1 = {
    name:'alpha',
    age:23,
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
}


console.log( user1.getBirthYear?.() ); 