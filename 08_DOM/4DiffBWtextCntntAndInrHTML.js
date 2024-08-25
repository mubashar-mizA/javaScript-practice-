let greetUser = document.querySelector('.greet-user')
console.log(greetUser);
let userName = String(prompt('Please enter you name')).toLocaleUpperCase()
// console.log(userName);


greetUser.innerHTML = `Hi ${userName} welcome to js world! `
document.querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.greet-container').style.display = 'none'
})


