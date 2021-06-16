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
var sec = 45;
// calculate the seconds (don't change this! unless time progresses at a different speed for you...)


function countdown() {
  setTimeout('Decrement()',1000);
}

function Decrement() {
    if (document.getElementById) {
        
        seconds = document.getElementById("seconds");
        // if less than a minute remaining
        if (seconds < 0) {
            seconds.value = sec;
        } else {
            
            seconds.value = getseconds();
        }
        sec--;
        setTimeout('Decrement()',1000);
    }
    if (seconds === 0) {
      seconds.value=stop;
    }
}

function getseconds() {
    // take mins remaining (as seconds) away from total seconds remaining
    return sec-Math.round(0);
    
}
countdown();


if(CardOpen == 6){
  document.querySelector('.win-msg').style.display = "block";
 }


cards.forEach(card => card.addEventListener('click', flipCard));