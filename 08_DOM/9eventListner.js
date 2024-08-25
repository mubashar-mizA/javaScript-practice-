

document.querySelector('.for-53').style.display = 'none'
document.querySelector('.for-54').style.display = 'none'
document.querySelector('.greet-container').style.display = 'none'
const cardContainer = document.querySelector('.card-container')

document.querySelector('.event-h1').addEventListener('click', ()=>{
    alert('Abhy idr click ni krna')
})

let i = 1

document.querySelector('.card').addEventListener('click',()=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML = `${i}`
    i++
    cardContainer.append(newCard)
})


// Event listener is a higher order function