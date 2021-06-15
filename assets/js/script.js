const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let setBoard = false;
let firstCard, secondCard;
let CardOpen = 0;
let totalMinCount,totalSecCount =0;
let totalCardFlip = 0;
let totalSeconds = 0;

function flipCard() {
  if (setBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  totalCardFlip = ++totalCardFlip
  let isMatch = firstCard.dataset.base === secondCard.dataset.base;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  Array.from(document.getElementsByClassName('front-img')).forEach(element => {
	  debugger;
	  let cardName = element.getAttribute("alt").split(" ");
	  if(firstCard.dataset.base.indexOf(cardName[0].toLowerCase()) > 0 || secondCard.dataset.base.indexOf(cardName[0].toLowerCase()) >= 0){
		  element.style.backgroundColor = 'green'
	  }	 
	});	
  cardOpen = ++cardOpen;
  //alert('Matched' + cardOpen)
  resetBoard();
  if(cardOpen == 6) {
    document.querySelector('.win-msg').style.display = "block";
    document.querySelector('.totTime span').innerHtml = totalMinCount + ":" +totalSecCount + "sec";
    document.querySelector('.totFlipCount span').innerHtml = totalCardFlip;
  }

}

function unflipCards() {
  setBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
  
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

cards.forEach(card => card.addEventListener('click', flipCard));

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
