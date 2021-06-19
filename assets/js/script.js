// data declaration

const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstRoseCard, secondRoseCard;
let CardOpen = 0;
let totalMinCount,totalSecCount = 0;
let totalCardFlip = 0;
let totalSeconds = 0;
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
  
  Array.from(document.getElementsByClassName('front-img')).forEach(element => {

	  let cardName = element.getAttribute("alt").split(" ");
	  if(firstRoseCard.dataset.name.indexOf(cardName[0].toLowerCase()) >= 0 || secondRoseCard.dataset.name.indexOf(cardName[0].toLowerCase()) >= 0);
    
	});	
  
  // once finish the game congrats msg, time and total flip card will shown
  CardOpen = ++CardOpen;
  
   //alert('Matched'+ CardOpen); 

   
   resetBoard();
   if(CardOpen == 6){
		document.querySelector('.win-msg').style.display = "block";
		document.querySelector('.totTime span').innerHTML = totalMinCount + ":" +totalSecCount + "sec";
		document.querySelector('.totFlipCount span').innerHTML = totalCardFlip;
		
   }
 
}

// if not matched, both the cards will close in 1 sec.
function unflipRoseCards() {
  lockBoard = true;

  setTimeout(() => {
    firstRoseCard.classList.remove('flip');
    secondRoseCard.classList.remove('flip');
    resetBoard();
  }, 1000);
  return;
}
// reset the card
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstRoseCard, secondRoseCard] = [null, null];
}
// Everytime the game shuffle the card randomly
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
// for close pop up for the winning msg

const closePopup = () => {
  document.querySelector('.win-msg').style.display = "none";
}

// set the timer for game
setInterval(setTime, 1000);

function setTime() {
	++totalSeconds;	  
	totalMinCount = pad(parseInt(totalSeconds / 60))
	totalSecCount = pad(totalSeconds % 60);
}
// set the total flipcard
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
	return "0" + valString;
  } else {
	return valString;
  }
}