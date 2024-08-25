setTimeout( ()=>{
    console.log('From setTimeout after 0s');
},0)

greet()

console.log('From first line');


function greet(){
    let username
    console.log(`Dear ${username ? username : 'Alpha'} welcome to js world`);
}




console.log('From 11th line');

// note that:- code is executed in the order in which it is written is known as synchronous code 
// jo b code webapi mn jata h call stack mn ni jata tu ucy hm log asynchronous code bolty h
// for(let i =0; i<=5000; ++i){
//     console.log(i);
    
// }

// evnet loup 