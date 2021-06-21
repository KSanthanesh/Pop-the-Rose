let x = 0;

const time = 1500;

// Array images details
const images = [ 'assets/images/yellow-rose.jpg',
'assets/images/black-rose.png',
'assets/images/pink-rose.jpg',
'assets/images/purple-rose.jpg',
'assets/images/red-rose.png',
'assets/images/white-rose.jpg'
];

// changing images automatically

function displayRoseImg() {
    document.getElementById('image').src= images[x];
    if(x < images.length - 1) {
        x++;
    } else {
        x = 0;
    }
    setTimeout("displayRoseImg()", time);
}

window.onload = displayRoseImg;