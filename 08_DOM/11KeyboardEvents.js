document.querySelector('.for-53').style.display = 'none'
document.querySelector('.for-54').style.display = 'none'
document.querySelector('.for-62').style.display = 'none'
document.querySelector('.for-63').style.display = 'none'
document.querySelector('.greet-container').style.display = 'none'

console.log(`working`);

let inputField = document.querySelector('#user-input')
// window.addEventListener('keypress', (e)=>{
//     console.log(e);
//     console.log('Source : ', e.target.id);
//     console.log('Key pressed : ', e.key);
//     console.log('Key code : ', e.code );
//     console.log('Time stamp : ', e.timeStamp);
//     console.log('Location : ', e.location);   
// })



// window.addEventListener('keyup', (e)=>{
//     console.log(e);
//     console.log('Source : ', e.target.id);
//     console.log('Key pressed : ', e.key);
//     console.log('Key code : ', e.code );
//     console.log('Time stamp : ', e.timeStamp);
//     console.log('Location : ', e.location); 
// })

window.addEventListener('keydown', (e)=>{
    console.log(e);
    console.log('Source : ', e.target.id);
    console.log('Key pressed : ', e.key);
    console.log('Key code : ', e.code );
    console.log('Time stamp : ', e.timeStamp);
    console.log('Location : ', e.location); 
})




