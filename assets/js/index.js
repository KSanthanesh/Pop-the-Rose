var x = 0;
var images = [];
var time = 1500;

// Array images details
images[0] = 'assets/images/yellow-rose.jpg';
images[1] = 'assets/images/black-rose.png';
images[2] = 'assets/images/pink-rose.jpg';
images[3] = 'assets/images/purple-rose.jpg';
images[4] = 'assets/images/red-rose.png';
images[5] = 'assets/images/white-rose.jpg';


// changing images automatically

function roseImg() {
    document.slide.src = images[x];
    if (x < images.length - 1) {
        x++;
    } else {
        x = 0;
  }  
}
window.onload = roseImg;




