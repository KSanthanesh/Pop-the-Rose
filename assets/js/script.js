const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let setBoard = false;
let firstImg, secondImg;
let cardOpen = 0;

function flipCard() {
    if (setBoard) return;
    if (this === firstImg) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstImg = this;
        return
    } else {
        secondImg = this;
        checkForMatch();
    }
}

function checkForMatch() {
    let isMatch = firstImg.dataset.base === secondImg.dataset.base;
    isMatch ? disableCards() : unflippedCards;
}