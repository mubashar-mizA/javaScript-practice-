// what is functions in js  i think reusable code of blocks

// function greet(userName ){
//     if(!userName) userName = 'Alpha'
//  return `${userName} ! welcome to the site.`
// }

// function greet(userName = 'Alpha'  ){
//     if(!userName) userName = 'Alpha'
//  return `${userName} ! welcome to the site.`
// }


function introduceMe(){
    const myIntro = {
        name:'Mubashar Siddique',
        age:23,
        email:'mubashar@23.com'
    }
    return myIntro
}

// using multiple arguments

function userIntro(name,email,age){
    return `My name is ${name || 'Alpha'} my email is ${email} and I'm ${age} years old`
}
