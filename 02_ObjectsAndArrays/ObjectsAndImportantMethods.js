let user = {
    Name:'ALpha',
    age:23,
    email:'md@51438.com',
    'residence':{
        country:'Pakistan',
        state: 'islamic republic',
        city: 'islamabad'
    }
}

// console.log(user?.residence); //optional chaining

// user.lastName = 'Siddique'
// console.log(user['residence']);


// console.log( user?.residence ); // optional chaining
console.log(user);
Object.seal(user)
console.log(Object.keys(user));
console.log(Object.values(user));
 

user.Name = 'Mubashar'
// console.log(user);