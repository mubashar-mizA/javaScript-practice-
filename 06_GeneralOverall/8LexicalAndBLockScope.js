const studentName = 'Ali ahmed'
let studentEmail = 'aliahmed@23.com'


function greetStudent(){
    debugger
    let studentCity = 'Islamabad'
    let studentCountry = 'Pakistan'
    console.log(`Welcome ${studentName} !`);
    
    function studentAddress(){ // here the concept of closure comes
        console.log(`${studentName} belong to ${studentCity} from ${studentCountry} `);
        // its lexical scope is its scope + greetStudent's scope + GLobal's scope
    }

    function studentEmail(){
        console.log(`Student email is ${studentEmail}`);
        // its lexical scope is its own scope + studentAddress's scope + greetUser's scope + Globsl's scope
    }


    studentAddress()

}
greetStudent()

console.log(`Program ended !`);
