// data declaration

const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let CardOpen = 0;
let totalMinCount,totalSecCount = 0;
let totalCardFlip = 0;
let totalSeconds = 0;
// data defination

function flipCard() {	
  
  if (lockBoard) return;
  if (this === firstCard)
  return;

  this.classList.add('flip');
// first  card click
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

// check the match and count the total flip card

function checkForMatch() {	
  totalCardFlip = ++totalCardFlip
  let cardMatch = firstCard.dataset.name === secondCard.dataset.name;
  cardMatch ? disableCards() : unflipCards();
}
// matched cards
function disableCards() {
	
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  Array.from(document.getElementsByClassName('front-img')).forEach(element => {

	  let cardName = element.getAttribute("alt").split("");
	  if(firstCard.dataset.name.indexOf(cardName[0].toLowerCase()) >= 0 || secondCard.dataset.name.indexOf(cardName[0].toLowerCase()) >= 0);
   
		  
	   
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

function matchedColor(myArray) {
    var passing = true;
    myArray.forEach(function(element) {
        if (element !== myArray[0]) {
            passing = false;
        }
    });

    return passing;
}

// if not matched, both the cards will close in 1 sec.
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
  return;
}
// reset the card
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
// Everytime the game shuffle the card
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
}