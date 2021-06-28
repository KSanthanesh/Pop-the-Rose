/* jshint esversion: 6 */
/* globals $:false */

// data declaration

document.querySelectorAll('.rose-card');

let rotateCard = false;
let lockBoard = false;
let cardOptionOne, cardOptionTwo = null;
let cardOpen = 0;
let totalCardFlip = null;
let firstClick = true;
let timer;
let totalMinCount = document.getElementById('mins');
let totalSecCount = document.getElementById('secs');
let sec = 0;

// data defination

function openCard() {
  // set the timer for game
  function pad(val) {
    return val > 9 ? val : "0" + val;
  }

  if (firstClick) {
    console.log(1);
    timer = setInterval(function () {
      sec++;
      totalSecCount.innerHTML = pad(sec % 60);
      totalMinCount.innerHTML = pad(parseInt(sec / 60, 10));

    }, 1000);
    firstClick = false;
  }

  if (cardOpen === 6) {
    clearInterval(timer);
  }

  if (lockBoard)
    return;

  this.classList.add('flip');

  // first Rose card click
  if (!rotateCard) {
    [rotateCard, cardOptionOne] = [true, this];
    return;
  }

  rotateCard = false;
  cardOptionTwo = this;
  checkMatch();
}

// check the card match
function checkMatch() {
  totalCardFlip = ++totalCardFlip;
  let cardMatch = cardOptionOne.dataset.name === cardOptionTwo.dataset.name;
  if (cardMatch) {
    disableRoseCards();
  } else {
    unflipRoseCards();
  }
}

// matched cards

function disableRoseCards() {
  cardOptionOne.removeEventListener('click', openCard);
  cardOptionTwo.removeEventListener('click', openCard);
  cardOpen = ++cardOpen;

  resetBoard();


  // once finish the game congrats msg, time and total flip card will shown
  // winning msg will pop up

  if (cardOpen === 6) {
    document.querySelector('.win-msg').style.display = "block";
    document.querySelector('.totFlipCount span').innerHTML = totalCardFlip;
    clearInterval(timer);
  }
}

// for closing window pop up for the winning msg

function closePopup() {

  document.querySelector('.win-msg').style.display = "none";
  return;
}
closePopup();

// if not matched, both the cards will close in 1sec.
function unflipRoseCards() {
  lockBoard = true;
  setTimeout(() => {
    cardOptionOne.classList.remove('flip');
    cardOptionTwo.classList.remove('flip');
    resetBoard();
  }, 500);
  return;
}
// reset the card if it is not matched
function resetBoard() {
  rotateCard = false;
  lockBoard = false;
  cardOptionOne = null;
  cardOptionTwo = null;
}

/** The Cards are shuffled randomly
 * otherwise the cards will remain in the same position
 */

(function shuffle() {
  document.querySelectorAll('.rose-card').forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;

  });
})();

document.querySelectorAll('.rose-card').forEach(card => card.addEventListener('click', openCard));

/** when restart button choosen the popup message will appear, allowing to confirm to continue the game
 * There is ok button in the winning msg box to Restart the game
 */

function restart() {
  document.querySelector('.restart-btn').addEventListener('click', function () {
    let start = confirm("Do you want to Restart the Game?");
    if (start === true) {
      window.location.reload();
    }
  });

  document.querySelector('.ok-btn').addEventListener('click', function () {
    window.location.reload();
  });
}












