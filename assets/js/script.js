const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let setBoard = false;
let firstCard, secondCard;
let CardOpen = 0;

let totalCardFlip = 0;
let totalSeconds = 0;

function flipCard() {
  if (setBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  // first card click
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
// second card click
  secondCard = this;
  checkForMatch();
}
// do check the match card
function checkForMatch() {
  totalCardFlip = ++totalCardFlip
  let isMatch = firstCard.dataset.base === secondCard.dataset.base;

  isMatch ? disableCards() : unflipCards();
}
//it is a matching card
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
 resetBoard(); 

}

//if it is not match and set the time to unflip the card
function unflipCards() {
  setBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
  return;
}

function resetBoard() {
  [hasFlippedCard, setBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
// shuffle the cards
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();



var min = 1;
// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
var sec = min * 60;

function countdown() {
  setTimeout('Decrement()',1000);
}

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
        // if less than a minute remaining
        if (seconds < 59) {
            seconds.value = sec;
        } else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        sec--;
        setTimeout('Decrement()',1000);
    }
}

function getminutes() {
    // minutes is seconds divided by 60, rounded down
    min = Math.floor(sec / 60);
    return min;
}

function getseconds() {
    // take mins remaining (as seconds) away from total seconds remaining
    return sec-Math.round(min *60);
    
}

countdown();
function closePopup(){
if(getminutes(),getseconds() === 0) {
  const closePopup = () => {
    document.querySelector('.win-msg').style.display = "none";
  }
} else {
  messagePopup(`Time out, Please try again`);
}
}
cards.forEach(card => card.addEventListener('click', flipCard));