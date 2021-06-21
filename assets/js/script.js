// data declaration

const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let lockBoard = false;
let cardOptionOne, cardOptionTwo;
let cardOpen = 0;

let totalCardFlip = 0;

// data defination

function flipCard() {	
  
  if (lockBoard) return;
  if (this === cardOptionOne)
  return;

  this.classList.add('flip');
// first Rose card click
  if (!hasFlippedCard) {
    [hasFlippedCard,cardOptionOne] = [true, this]
        return;
  }
  cardOptionTwo = this;
  checkForMatch();
}

// check the match and count the total flip card

function checkForMatch() {	
  totalCardFlip = ++totalCardFlip
  let cardMatch = cardOptionOne.dataset.name === cardOptionTwo.dataset.name;
  cardMatch ? disableRoseCards() : unflipRoseCards();
  
}
// matched cards
function disableRoseCards() {
	
  cardOptionOne.removeEventListener('click', flipCard);
  cardOptionTwo.removeEventListener('click', flipCard);
  
  
  
  
  // once finish the game congrats msg, time and total flip card will shown
  cardOpen = ++cardOpen;
  
   //Cardalert('Matched'+ CardOpen); 

   
   resetBoard();
   
   // winning msg will pop up
   if(cardOpen == 6){
		document.querySelector('.win-msg').style.display = "block";
    document.querySelector('.totFlipCount span').innerHTML = totalCardFlip;
	
   }
 
}

// if not matched, both the cards will close in 1.5 sec.
function unflipRoseCards() {
  lockBoard = true;

  setTimeout(() => {
    cardOptionOne.classList.remove('flip');
    cardOptionTwo.classList.remove('flip');
    resetBoard();
    
  }, 1500);
  return;
}
// reset the card if it is not matched
function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  cardOptionOne = null;
  cardOptionTwo = null;
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
let totalMinCount = document.getElementById('mins');
let totalSecCount = document.getElementById('secs');
let sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("secs").innerHTML=pad(++sec%60);
    document.getElementById("mins").innerHTML=pad(parseInt(sec/60,10));
}, 1000);












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