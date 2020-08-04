//Chủ yếu các function dành cho các nút lệnh next, previous
var count =0;
var x=document.getElementsByClassName("pic");
next(); //truyển vào để có hình ảnh trên layout
function next() { //tham số n chuyền vào chủ yếu cho điều kiện # count hiện tại
  for (let i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
  count++; // count để ở trên để bên dưới xét đk
  if(count>x.length) { count=1 }
  x[count-1].style.display="block";
}

function pre() { 
  for (let i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
  count--; 
  if(count<0) { count=x.length-1; }
  x[count].style.display="block";
}

function resetTimer() {
  clearInterval(timer);
  timer=setInterval(autoPlay,6000);
}

function autoPlay() {
  next();
}
let timer= setInterval(autoPlay,5000); //tạo timer để lên reset có cái tên để clear









/*

var x = document.getElementsByClassName('mySlide');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < s.length; i++) {
    x[i].classList.remove('visible');
  }
}


// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = x[counter];
  currentImage.classList.add('visible');
  counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    if (counter == 1) {
      counter = (x.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  } 
  else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    if (counter == x.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < x.length) {
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 10000);
*/