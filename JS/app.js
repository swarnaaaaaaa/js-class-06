const darkBtn = document.querySelector('.darkBtn')
const body = document.querySelector('body')

const darkMood = ()=> body.classList.toggle('darkmode')
 

darkBtn.addEventListener('click',darkMood)