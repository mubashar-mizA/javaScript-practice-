// for of statement execute a loop on iterable objects like array and string

let fruits = ['apple','banana','orange','grapes']

for ( let fruit of fruits){
    // console.log(fruit);
}

let myName = 'Mubashar'

for ( let char of myName ){
    // console.log(char);
}

// for ( let char of myName ){
//     console.log(char.toLocaleLowerCase()); // we can also perform methods on the go  
// }

// let user = {
//     name:'Alpha'.toLocaleLowerCase(),
//     age:23,
//     email:'alpha@23.com'
// }
// for (let key in user ){
//     console.log(`Value is ${user[key]} at user defined KEY ${key}`);
// }
// console.log(Object.keys(user));
let myPair = {
    a:1,
    b:2,
    c:3,
    d:{
        e:5,
        f:6
    }
}

for (let key in myPair.d ){
    // console.log(key);
}