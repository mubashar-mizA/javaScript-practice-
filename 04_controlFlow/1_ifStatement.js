const userName = String(prompt(`What's your name?`));
const userAge = parseInt(prompt(`How old are you?`));
const userGender = prompt(`Are you male or female?`).toLocaleLowerCase();
let heShe;

if (userGender === 'male') {
    heShe = 'He';
} else {
    heShe = 'She';
}

if (userAge >= 10 && userAge <= 18) {
    console.log(`${userName} is ${userAge} years old and ${heShe} loves to play cricket`);
}
if (userAge >= 18 && userAge <= 25) {
    console.log(`${userName} is ${userAge} years old and ${heShe} is a college student`);
}
if (userAge >= 26 && userAge <= 45) {
    console.log(`${userName} is ${userAge} years old and ${heShe} is a professional`);
}
if (userAge > 45) {
    console.log(`${userName} is ${userAge} years old and ${heShe} reads news paper`);
}