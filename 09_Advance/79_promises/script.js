// what are promises in js ????? promise is an object that tract the states values 
// ...when a promise is resolved then() method of promise run 
// ... and catch() method of promise run when promise rejected 
// ... cath and then use a special stack that is micro-task-queue that has higher 
// ... periority than the call stack 
// how to use promises ??????
// when to use promises ?????

console.log('Working for promises');

// let myPromise = new Promise( (resolved, rejected)=>{
//     resolved('Promise accepted')
//     rejected('Promise rejected')

// } )

// let myPromise = new Promise( (resolved, rejected)=>{
    
//     setTimeout( ()=> resolved('Alpha') ,5000 )

// } )


let promiseOnBtns = new Promise( (resolved, reject)=>{
    document.querySelector('#resolve-btn').addEventListener('click', ()=>{
        resolved('Issue resolved on click')
    })
    document.querySelector('#reject-btn').addEventListener('click', ()=>{
        reject('Issue rejcted on click')
    })
} )

promiseOnBtns.then( (data)=>{
    console.log(data);
    
} ).catch( (err)=>{
    console.log(err);
} )


