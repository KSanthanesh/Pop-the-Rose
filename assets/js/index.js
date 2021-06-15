
var i = 0;
var images = [];
var time = 2000;

// images details
images[0] = 'assets/images/yellow-rose.jpg';
images[1] = 'assets/images/black-rose.png';
images[2] = 'assets/images/pink-rose.jpg';
images[3] = 'assets/images/purple-rose.jpg';
images[4] = 'assets/images/red-rose.png';
images[5] = 'assets/images/white-rose.jpg';

// changing sliding images
function changeImg() {
    document.slide.src = images[i];
    if(i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

     setTimeout("changeImg()", time);
}

window.onload = changeImg;
