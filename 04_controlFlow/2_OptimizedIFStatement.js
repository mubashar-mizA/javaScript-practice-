const userName = String(prompt(`What's your name?`)) || 'Alpha';
const userAge = parseInt(prompt(`How old are you?`)) || 23;
const userGender = prompt(`Are you male or female?`).toLocaleLowerCase() || 'male';
let heShe;

if (userGender === 'male' || 'Male') {
    heShe = 'He';
} else {
    heShe = 'She';
}

if (userAge >= 10 && userAge <= 18) {
    console.log(`${userName} is ${userAge} years old and ${heShe} loves to play cricket`);
}else if (userAge >= 18 && userAge <= 25) {
    console.log(`${userName} is ${userAge} years old and ${heShe} is a college student`);
}else if (userAge >= 26 && userAge <= 45) {
    console.log(`${userName} is ${userAge} years old and ${heShe} is a professional`);
}else if (userAge > 45 && userAge <= 120) {
    console.log(`${userName} is ${userAge} years old and ${heShe} reads news paper`);
}else{
    console.log(`${userName} is immortal ${heShe} reads news paper`);    
}
