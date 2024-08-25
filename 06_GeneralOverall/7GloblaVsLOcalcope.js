// debugger
// global scope and script scope
let userName = 'George'
const userAge = 23
var a = 12

function add(){
    const  userName = 'Bush' // it use the nearest variable in its local scope it log bush not george
    const m  = 4
    const k = 5
    console.log(m + k);
}


function subtract(){
    const userAge = 24 // it use the nearest variable in its local scope it log 24 not 23
    const mk  = 4
    const km = 5
    console.log(mk - km);
}
add()
subtract()
console.log(`Program ended !`);