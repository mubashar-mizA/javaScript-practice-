// hr function mn this b hota h ur argument b 
// argument key word is depricated 
// debugger
setTimeout(`console.log(true)`)

// const timer1 =  setTimeout(()=>{
//     console.log(`Hi world`); // before log it number a number which is id of the timer    
// },2000)

// const timer2 =  setTimeout(()=>{
//     console.log(`Hi world`); // before log it number a number which is id of the timer    
// },4000)
// const timer3 =  setTimeout(()=>{
//     console.log(`Hi world`); // before log it number a number which is id of the timer    
// },6000)


// clearTimeout(timer1)
function greetUser(){
    alert(`Welcome to edgEdu.org`)
}


setTimeout( greetUser, 2000 )

setTimeout(() =>{
    console.log('From setTimeout at the end of the programm');    
}) 

console.log('From the last');
// js is synchromous programming language
// setTimeout and setInteraval are parts of the web api's and they 
// are asynchronous , while our js is synchronous 