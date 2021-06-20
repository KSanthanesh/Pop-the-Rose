// data declaration

const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstRoseCard, secondRoseCard;
let cardOpen = 0;

let totalCardFlip = 0;

// data defination

function flipCard() {	
  
  if (lockBoard) return;
  if (this === firstRoseCard)
  return;

  this.classList.add('flip');
// first Rose card click
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstRoseCard = this;
    return;
  }
  secondRoseCard = this;
  checkForMatch();
}

// check the match and count the total flip card

function checkForMatch() {	
  totalCardFlip = ++totalCardFlip
  let cardMatch = firstRoseCard.dataset.name === secondRoseCard.dataset.name;
  cardMatch ? disableRoseCards() : unflipRoseCards();
}
// matched cards
function disableRoseCards() {
	
  firstRoseCard.removeEventListener('click', flipCard);
  secondRoseCard.removeEventListener('click', flipCard);
  
  
  
  // once finish the game congrats msg, time and total flip card will shown
  cardOpen = ++cardOpen;
  
   //alert('Matched'+ CardOpen); 

   
   resetBoard();
   
   // winning msg will pop up
   if(cardOpen == 6){
		document.querySelector('.win-msg').style.display = "block";
	
   }
 
}

// if not matched, both the cards will close in 1.5 sec.
function unflipRoseCards() {
  lockBoard = true;

  setTimeout(() => {
    firstRoseCard.classList.remove('flip');
    secondRoseCard.classList.remove('flip');
    resetBoard();
  }, 1500);
  return;
}
// reset the card if it is not matched
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstRoseCard, secondRoseCard] = [null, null];
}
/** Everytime the game shuffle the card randomly
 * otherwise the cards will have in the same place
 */
(function shuffle() {
  document.querySelectorAll('.rose-card').forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

document.querySelectorAll('.rose-card').forEach(card => card.addEventListener('click', flipCard));
// for closing window pop up for the winning msg

const closePopup = () => {
  document.querySelector('.win-msg').style.display = "none";
}

// set the timer for game
let totalMinCount = document.getElementById('minutes');
let totalSecCount = document.getElementById('seconds');
let sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

let totalFlipCard = document.getElementById('moves');
let move =0;
document.getElementById("moves").innerHTml = totalFlipCard;










/** 
setInterval(setTime, 1000);

function setTime() {
	++totalSeconds;	  
	totalMinCount = pad(parseInt(totalSeconds / 60))
	totalSecCount = pad(totalSeconds % 60);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
	return "0" + valString;
  } else {
	return valString;
  }
  
}  */