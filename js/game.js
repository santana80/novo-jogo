const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const fotos = [
'b',
'bidu',
'brk',
'c',
'd',
'e',
'f',
'jny',
'k',
'm',
'n',
'sms'

]; 

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCart = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 24) {
        clearInterval(this.loop);
        alert(`Parabens, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
    }
}

const checkCards = () =>{
const firstCharacter = firstCart.getAttribute('data-character');
const secondCharacter = secondCard.getAttribute('data-character');

if (firstCharacter == secondCharacter) {


firstCart.firstChild.classList.add('disabled-card');
secondCard.firstChild.classList.add('disabled-card');

    firstCart = '';
    secondCard = '';

    checkEndGame();

} else {
  setTimeout(() => {

    firstCart.classList.remove('reveal-card');
    secondCard.classList.remove('reveal-card');

    firstCart = '';
    secondCard = '';
  } , 500);
}

}

const revealCard = ({ target }) => {

if (target.parentNode.className.includes('reveal-card')){
    return;
}

if (firstCart == ''){
    target.parentNode.classList.add('reveal-card');
    firstCart = target.parentNode;


} else if (secondCard == ''){
    target.parentNode.classList.add('reveal-card');
    secondCard =  target.parentNode;


    checkCards();

} 
}

const createCard = (foto) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../pictures/${foto}.png')`;

card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', revealCard);
card.setAttribute('data-character' , foto)

return card;
}

const loadGame = () => {
    const duplicateFotos = [ ...fotos, ...fotos];

    const shuffledArray = duplicateFotos.sort(() => Math.random() - 0.5);

shuffledArray.forEach((foto) => {
       const card = createCard(foto);
       grid.appendChild(card);
    });
}

const startTimer = () => {

this.loop =setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
}, 1000);
    
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}

