let colors = ['red', 'green', 'blue', 'white']
// const [color1, color2, color3] = colors
// console.log(color1);
// console.log(color2);
// console.log(color3);

const [,,color3] = colors
console.log(color3);


let userDetails = {
    name:'alpha',
    age:23,
    email:'alpha@23.com',
    address:{
        city:'Isamabad',
        country:'Pakistan'
    }
}
// const {address} = userDetails
// const {address:pata} = userDetails // assign new name to the existing variable 
// console.log(address);
// const {address:{city}} = userDetails // this is called multilevel destructring
// console.log(city);]
// const {address} = userDetails
// const {city} = address
// console.log(city);

// function greetUser(usrObj){ // passing whole object
//     console.log(usrObj);
// }

// function greetUser({name, age}){
//     console.log(name, age);
    
// }

console.log(greetUser(userDetails))

